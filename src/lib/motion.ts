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
