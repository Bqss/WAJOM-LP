import type { Action } from 'svelte/action';

const REDUCED = '(prefers-reduced-motion: reduce)';

function prefersReduced() {
	return typeof window !== 'undefined' && window.matchMedia(REDUCED).matches;
}

/** True when the browser can run reveals natively on a view progress timeline. */
export function hasScrollTimelines() {
	return typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()');
}

/**
 * Reveals are authored in CSS against `view()` timelines. This only fills the gap
 * for browsers without them, so no scroll listener is ever attached.
 */
export function initReveals(): () => void {
	if (prefersReduced() || hasScrollTimelines()) return () => {};

	const io = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.setAttribute('data-revealed', '');
				io.unobserve(entry.target);
			}
		},
		{ rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
	);

	// The hidden state is gated on this attribute, so it goes on only now that
	// there is an observer able to undo it.
	document.documentElement.setAttribute('data-reveal-js', '');
	document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));

	return () => {
		io.disconnect();
		document.documentElement.removeAttribute('data-reveal-js');
	};
}

/**
 * Counts a metric up when it first renders/scrolls into view. The final value is already
 * in the markup, so search engines and no-script readers see the real number.
 */
export const counter: Action<HTMLElement, { to: number; duration?: number; delay?: number }> = (
	node,
	params
) => {
	let raf = 0;
	let timeout = 0;
	let io: IntersectionObserver | null = null;
	const format = (value: number) => Math.round(value).toLocaleString('en-US');

	function run({ to, duration = 1200, delay = 0 }: { to: number; duration?: number; delay?: number }) {
		cancelAnimationFrame(raf);
		clearTimeout(timeout);
		io?.disconnect();

		if (prefersReduced()) {
			node.textContent = format(to);
			return;
		}

		node.textContent = format(0);
		io = new IntersectionObserver(
			(entries) => {
				if (!entries[0].isIntersecting) return;
				io?.disconnect();
				timeout = window.setTimeout(() => {
					const started = performance.now();
					const tick = (now: number) => {
						const p = Math.min(1, (now - started) / duration);
						node.textContent = format(to * (1 - Math.pow(1 - p, 3)));
						if (p < 1) raf = requestAnimationFrame(tick);
					};
					raf = requestAnimationFrame(tick);
				}, delay);
			},
			{ threshold: 0.1 }
		);
		io.observe(node);
	}

	run(params);

	return {
		update: run,
		destroy() {
			cancelAnimationFrame(raf);
			clearTimeout(timeout);
			io?.disconnect();
		}
	};
};

const SCRAMBLE_GLYPHS = 'ABCDEFGHJKLNPRSTUVXYZabcdefghknopqrsuvxyz0123456789/_-+*<>#%';
const SR_ONLY =
	'position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap';

type ScrambleParams = { text: string; delay?: number; duration?: number; glyphs?: string };

/**
 * One-shot "decode" of server-rendered text: letters flicker through random glyphs and settle
 * left to right. Each letter keeps its real (transparent) character in flow so nothing reflows,
 * the noise is drawn in an aria-hidden overlay, and assistive tech reads a hidden copy of the text.
 * The node's original children are put back afterwards, so Svelte keeps updating its own text.
 */
export const scramble: Action<HTMLElement, ScrambleParams> = (node, params) => {
	let text = params.text;
	let raf = 0;
	let original: Node[] | null = null;
	const { delay = 0, duration = 900, glyphs = SCRAMBLE_GLYPHS } = params;
	const timeout = prefersReduced() ? 0 : window.setTimeout(start, delay);

	function el(style: string, content?: string) {
		const span = document.createElement('span');
		span.style.cssText = style;
		if (content) span.textContent = content;
		return span;
	}

	function start() {
		if (node.textContent !== text) return;
		const color = getComputedStyle(node).color;
		const cells: { cell: HTMLElement; glyph: HTMLElement; at: number; pool: string[] }[] = [];
		const visual = el('');
		visual.setAttribute('aria-hidden', 'true');

		const letters = [...text].filter((ch) => /[\p{L}\p{N}]/u.test(ch)).length;
		for (const part of text.split(/(\s+)/)) {
			if (!part) continue;
			if (/^\s+$/.test(part)) {
				visual.append(part);
				continue;
			}
			// No wrap inside a word, so line breaks stay exactly where the plain text breaks.
			const word = el('white-space:nowrap');
			for (const ch of part) {
				if (!/[\p{L}\p{N}]/u.test(ch)) {
					word.append(ch);
					continue;
				}
				const cell = el('position:relative;color:transparent', ch);
				const glyph = el(`position:absolute;left:50%;top:0;transform:translateX(-50%);line-height:normal;color:${color}`);
				cell.append(glyph);
				word.append(cell);
				// Settle left to right, with some jitter so it reads as decoding.
				cells.push({ cell, glyph, at: (cells.length / letters) * duration * 0.65 + Math.random() * duration * 0.35, pool: [] });
			}
			visual.append(word);
		}

		original = [...node.childNodes];
		node.replaceChildren(el(SR_ONLY, text), visual);

		// Give each letter glyphs of about its own width, so the noise never spills onto neighbours.
		const set = [...glyphs];
		const probes = set.map((g) => el('position:absolute;visibility:hidden;white-space:pre', g));
		visual.append(...probes);
		const widths = probes.map((p) => p.getBoundingClientRect().width);
		probes.forEach((p) => p.remove());
		for (const c of cells) {
			const w = c.cell.getBoundingClientRect().width;
			const fit = set.map((g, i) => ({ g, d: Math.abs(widths[i] - w) })).sort((a, b) => a.d - b.d);
			const near = fit.filter((f) => f.d <= w * 0.2 + 0.5);
			c.pool = (near.length >= 4 ? near : fit.slice(0, 4)).map((f) => f.g);
			c.glyph.textContent = c.pool[0];
		}

		const started = performance.now();
		let swapped = -Infinity;
		const tick = (now: number) => {
			const elapsed = now - started;
			const swap = now - swapped >= 50;
			if (swap) swapped = now;
			let pending = 0;
			for (const c of cells) {
				if (elapsed >= c.at) {
					if (c.glyph.isConnected) {
						c.glyph.remove();
						c.cell.style.color = '';
					}
				} else {
					pending++;
					if (swap) c.glyph.textContent = c.pool[Math.floor(Math.random() * c.pool.length)];
				}
			}
			if (pending) raf = requestAnimationFrame(tick);
			else restore();
		};
		raf = requestAnimationFrame(tick);
	}

	function restore() {
		cancelAnimationFrame(raf);
		if (original) node.replaceChildren(...original);
		original = null;
	}

	return {
		// A text change (locale switch) shows the new text right away; before the effect
		// starts it just becomes the text to decode.
		update(next) {
			if (next.text === text) return;
			text = next.text;
			restore();
		},
		destroy() {
			clearTimeout(timeout);
			restore();
		}
	};
};
