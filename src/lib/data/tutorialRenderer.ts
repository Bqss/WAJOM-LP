import { marked } from 'marked';

export interface TutorialRendererOptions {
	locale?: 'ms' | 'my' | 'en';
}

const tutorialReferencePaths: Record<string, string> = {
	'/agent-ai/cara-menetapkan-gaya-sembang': '/tutorials/cara-mengatur-persona-gaya-chat-agent-ai',
	'/agent-ai/cara-menetapkan-knowledge': '/tutorials/cara-mengatur-knowledge-agent-ai',
	'/agent-ai/playground': '/tutorials/simulasi-playground-agent-ai',
	'/agent-ai/cara-mengaktifkan': '/tutorials/cara-mengaktifkan-agent-ai'
};

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}
function unescapeHtml(value: string): string {
	return value
		.replace(/&gt;/g, '>')
		.replace(/&lt;/g, '<')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&amp;/g, '&');
}

function resolveReferenceHref(rawHref: string): string | null {
	if (rawHref.startsWith('//')) return null;

	if (rawHref.startsWith('/')) {
		try {
			const url = new URL(rawHref, 'https://wajom.co');
			if (url.origin !== 'https://wajom.co') return null;
			const path = tutorialReferencePaths[url.pathname] ?? url.pathname;
			return `${path}${url.search}${url.hash}`;
		} catch {
			return null;
		}
	}

	return /^https?:\/\//i.test(rawHref) ? rawHref : null;
}

function formatReferenceLinks(html: string): string {
	const codeBlocks: string[] = [];
	const withoutCode = html.replace(/<pre\b[\s\S]*?<\/pre>|<code\b[\s\S]*?<\/code>/gi, (block) => {
		const index = codeBlocks.push(block) - 1;
		return `\u0000${index}\u0000`;
	});

	const linked = withoutCode.replace(/(^|>)([^<>]+)(?=<|$)/g, (match, boundary, text) => {
		const formattedText = text.replace(
			/\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/gi,
			(markdown: string, label: string, rawHref: string) => {
				const href = resolveReferenceHref(rawHref);
				if (!href) return markdown;
				return `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
			}
		);
		return `${boundary}${formattedText}`;
	});

	return linked.replace(/\u0000(\d+)\u0000/g, (match, index) => codeBlocks[Number(index)] ?? match);
}


/**
 * Slugify heading text to URL anchor
 */
export function slugifyHeading(text: string): string {
	return text
		.toLowerCase()
		.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
		.replace(/[^\w\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-');
}

/**
 * Render Markdown content to stylized Tutorial HTML
 */
export function renderTutorialMarkdown(
	markdown: string,
	locale: 'ms' | 'my' | 'en' = 'ms'
): string {
	if (!markdown) return '';

	const isEn = locale === 'en';
	const alertTag = isEn ? 'ALERT' : 'AMARAN / PERHATIAN';
	const tipTag = isEn ? 'PRO TIP' : 'TIP AMALAN TERBAIK';
	const tableAria = isEn ? 'Tutorial data table' : 'Jadual data tutorial';

	// 1. Convert markdown to HTML using marked
	let html = marked.parse(markdown, {
		gfm: true,
		breaks: false
	}) as string;

	// 2. Format reference links
	html = formatReferenceLinks(html);

	// 3. Prepare Mermaid / flowchart code blocks for client-side mermaid library rendering
	html = html.replace(
		/<pre\b[^>]*>\s*<code\b(?:\s+class="[^"]*language-(?:mermaid)[^"]*")?[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/gi,
		(match, codeContent) => {
			const unescaped = unescapeHtml(codeContent);
			if (
				/^\s*(?:flowchart|graph|sequenceDiagram|classDiagram|stateDiagram|erDiagram|journey|gantt|pie|quadrantChart|gitGraph|mindmap|timeline)\b/i.test(
					unescaped
				) ||
				match.includes('language-mermaid')
			) {
				return `<div class="mermaid-container"><pre class="mermaid">${escapeHtml(unescaped.trim())}</pre></div>`;
			}
			return match;
		}
	);

	// 4. Format Alert callout boxes (blockquotes or paragraphs starting with Alert)
	const alertRegex = new RegExp(
		'(?:<blockquote>\\s*<p>|<p>)(?:<strong>)?(?:Alert|Amaran)(?::\\s*|<\\/strong>:\\s*|\\s*:\\s*)([\\s\\S]*?)(?:<\\/p>\\s*<\\/blockquote>|<\\/p>)',
		'gi'
	);
	html = html.replace(
		alertRegex,
		`<div class="callout-box callout-alert">
			<div class="callout-icon">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
			</div>
			<div class="callout-body">
				<span class="callout-tag">${alertTag}</span>
				<p>$1</p>
			</div>
		</div>`
	);

	// 5. Format Tip callout boxes (blockquotes or paragraphs starting with Tip/Tips)
	const tipRegex = new RegExp(
		'(?:<blockquote>\\s*<p>|<p>)(?:<strong>)?(?:Tips?|Petua)(?::\\s*|<\\/strong>:\\s*|\\s*:\\s*)([\\s\\S]*?)(?:<\\/p>\\s*<\\/blockquote>|<\\/p>)',
		'gi'
	);
	html = html.replace(
		tipRegex,
		`<div class="callout-box callout-tip">
			<div class="callout-icon">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.663 17h4.673M12 3a7 7 0 00-7 7c0 2.38 1.157 4.49 2.946 5.8.6.44.954 1.13.954 1.87V19a1 1 0 001 1h4a1 1 0 001-1v-1.33c0-.74.354-1.43.954-1.87A7.001 7.001 0 0019 10a7 7 0 00-7-7z"/></svg>
			</div>
			<div class="callout-body">
				<span class="callout-tag">${tipTag}</span>
				<p>$1</p>
			</div>
		</div>`
	);
	// 6. Format numbered steps "<ol start="N">" or "<p>N. Text</p>"
	const olStepRegex =
		/<ol(?: start="(\d+)")?>([\s\S]*?)<\/ol>((?:\s*<p>(?!<img|Alert|Tips|<strong>)(?:(?!<\/p>)[\s\S])*<\/p>)*)(?:\s*<p>(<img[^>]+>)<\/p>)?/gi;

	html = html.replace(
		olStepRegex,
		(match, startStr, listContent, subTexts, trailingImgTag) => {
			if (/<(?:ul|ol)\b/i.test(listContent)) return match;

			const currentNum = parseInt(startStr || '1', 10);
			const items = [...listContent.matchAll(/<li>([\s\S]*?)<\/li>/gi)].map((m) => m[1]);
			if (!items.length) return match;

			if (!trailingImgTag && currentNum === 1 && !subTexts) return match;

			return items
				.map((itemHtml, index) => {
					const num = currentNum + index;
					const isLast = index === items.length - 1;
					const formattedNum = num < 10 ? `0${num}` : `${num}`;

					const title = itemHtml.replace(/<\/?p>/gi, '').trim();
					let cleanSubtext = '';
					let imgWrapper = '';

					if (isLast) {
						if (subTexts && subTexts.trim()) {
							cleanSubtext = subTexts.trim().replace(/<p>/gi, '<p class="step-subtext">');
						}
						if (trailingImgTag) {
							const styledImg = trailingImgTag.replace('<img ', '<img class="step-img" ');
							imgWrapper = `<div class="doc-img-wrapper">${styledImg}</div>`;
						}
					}

					const hasBody = cleanSubtext || imgWrapper;
					return `
						<div class="step-unit" id="step-${num}">
							<div class="step-unit-header">
								<span class="step-num-badge">${formattedNum}</span>
								<h3 class="step-title-text">${title}</h3>
							</div>
							${hasBody ? `<div class="step-unit-body">${cleanSubtext}${imgWrapper}</div>` : ''}
						</div>
					`;
				})
				.join('\n');
		}
	);

	// Also support direct paragraph steps: <p>1. Text</p>
	html = html.replace(
		/<p>(\d+)\.\s*([\s\S]*?)<\/p>((?:\s*<p>(?!<img|Alert|Tips|<strong>)(?:(?!<\/p>)[\s\S])*<\/p>)*)(?:\s*<p>(<img[^>]+>)<\/p>)?/gi,
		(match, numStr, textContent, subTexts, imgTag) => {
			const num = parseInt(numStr, 10);
			const formattedNum = num < 10 ? `0${num}` : `${num}`;

			let cleanSubtext = (subTexts || '').trim();
			if (cleanSubtext) {
				cleanSubtext = cleanSubtext.replace(/<p>/gi, '<p class="step-subtext">');
			}

			let imageWrapper = '';
			if (imgTag) {
				const styledImg = imgTag.replace('<img ', '<img class="step-img" ');
				imageWrapper = `<div class="doc-img-wrapper">${styledImg}</div>`;
			}

			const hasBody = cleanSubtext || imageWrapper;

			return `
				<div class="step-unit" id="step-${num}">
					<div class="step-unit-header">
						<span class="step-num-badge">${formattedNum}</span>
						<h3 class="step-title-text">${textContent.trim()}</h3>
					</div>
					${hasBody ? `<div class="step-unit-body">${cleanSubtext}${imageWrapper}</div>` : ''}
				</div>
			`;
		}
	);

	// 7. Wrap standalone images not already inside .doc-img-wrapper
	html = html.replace(
		/(?:<p>)?(<img(?![^>]*class="step-img")[^>]+>)(?:<\/p>)?/gi,
		(match, imgTag) => {
			const styledImg = imgTag.replace('<img ', '<img class="step-img" ');
			return `
				<div class="standalone-img-block">
					<div class="doc-img-wrapper">
						${styledImg}
					</div>
				</div>
			`;
		}
	);

	// 8. Wrap tables for responsive horizontal scrolling
	html = html.replace(
		/<table\b[^>]*>[\s\S]*?<\/table>/gi,
		(table) =>
			`<div class="prose-table-scroll" role="region" aria-label="${escapeHtml(tableAria)}" tabindex="0">${table}</div>`
	);

	// 9. Ensure h2 elements have IDs for Table of Contents
	let h2Index = 1;
	html = html.replace(/<h2(\b[^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs, content) => {
		if (/\bid\s*=/i.test(attrs)) return match;
		const plainText = content.replace(/<[^>]+>/g, '').trim();
		const slug = slugifyHeading(plainText) || `section-${h2Index}`;
		h2Index++;
		return `<h2 id="${escapeHtml(slug)}"${attrs}>${content}</h2>`;
	});

	return html;
}
