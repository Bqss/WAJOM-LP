import { renderTutorialMarkdown } from './tutorialRenderer';

export interface Tutorial {
	id: number;
	slug: string;
	title: string;
	description: string;
	category: string;
	duration: string;
	date: string;
	author: string;
	contentHtml: string;
	url: string;
	markdown?: string;
}

export interface TutorialFrontmatter {
	id: number;
	slug: string;
	title: string;
	description: string;
	category: string;
	duration: string;
	date: string;
	author: string;
	url: string;
}

/**
 * Fast zero-dependency YAML frontmatter parser for tutorial markdown files
 */
export function parseTutorialMarkdown(raw: string): { data: TutorialFrontmatter; content: string } {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
	if (!match) {
		throw new Error('Invalid tutorial markdown: missing frontmatter block');
	}
	const yamlBlock = match[1];
	const content = match[2];
	const data: Record<string, any> = {};

	for (const line of yamlBlock.split(/\r?\n/)) {
		const colonIdx = line.indexOf(':');
		if (colonIdx === -1) continue;
		const key = line.slice(0, colonIdx).trim();
		const rawVal = line.slice(colonIdx + 1).trim();
		let val: string | number = rawVal;
		if ((rawVal.startsWith('"') && rawVal.endsWith('"')) || (rawVal.startsWith("'") && rawVal.endsWith("'"))) {
			try {
				val = JSON.parse(rawVal);
			} catch {
				val = rawVal.slice(1, -1);
			}
		} else if (/^\d+$/.test(rawVal)) {
			val = parseInt(rawVal, 10);
		}
		data[key] = val;
	}

	return {
		data: data as TutorialFrontmatter,
		content
	};
}

// Eager load all markdown files from the tutorial directory using Vite
const rawTutorialModules = import.meta.glob<string>('./tutorial/**/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

function loadTutorialsForLang(langFolder: 'en' | 'my'): Tutorial[] {
	const tutorials: Tutorial[] = [];
	const prefix = `./tutorial/${langFolder}/`;

	for (const [path, rawContent] of Object.entries(rawTutorialModules)) {
		if (!path.startsWith(prefix) || !path.endsWith('.md')) continue;

		try {
			const { data, content } = parseTutorialMarkdown(rawContent);
			const locale = langFolder === 'my' ? 'ms' : 'en';
			const contentHtml = renderTutorialMarkdown(content, locale);

			tutorials.push({
				id: data.id,
				slug: data.slug,
				title: data.title,
				description: data.description,
				category: data.category,
				duration: data.duration,
				date: data.date,
				author: data.author,
				contentHtml,
				url: data.url,
				markdown: content
			});
		} catch (err) {
			console.error(`Failed to parse tutorial at ${path}:`, err);
		}
	}

	return tutorials.sort((a, b) => a.id - b.id);
}

export const tutorialsMy: Tutorial[] = loadTutorialsForLang('my');
export const tutorialsMs: Tutorial[] = tutorialsMy;
export const tutorialsEn: Tutorial[] = loadTutorialsForLang('en');

/**
 * Get all tutorials for a given locale ('my', 'ms', or 'en')
 */
export function getTutorials(lang: 'my' | 'ms' | 'en' = 'ms'): Tutorial[] {
	return lang === 'en' ? tutorialsEn : tutorialsMy;
}

/**
 * Find a tutorial by slug for a given locale
 */
export function getTutorialBySlug(
	slug: string,
	lang: 'my' | 'ms' | 'en' = 'ms'
): Tutorial | undefined {
	const list = getTutorials(lang);
	const target = slug.toLowerCase();
	return list.find((t) => t.slug.toLowerCase() === target);
}
