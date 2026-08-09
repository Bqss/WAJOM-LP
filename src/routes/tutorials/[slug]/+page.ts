import { error } from '@sveltejs/kit';
import { tutorials, type Tutorial } from '$lib/data/tutorials';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const rawSlug = params.slug.toLowerCase().trim();

	// Match slug with fallback for typo in original site URL (e.g. ccara vs cara)
	const index = tutorials.findIndex((t) => {
		const s = t.slug.toLowerCase();
		return (
			s === rawSlug ||
			s === rawSlug.replace(/^c+ara/, 'cara') ||
			s.replace(/^c+ara/, 'cara') === rawSlug
		);
	});

	if (index === -1) {
		throw error(404, {
			message: 'Tutorial tidak dijumpai'
		});
	}

	const tutorial: Tutorial = tutorials[index];
	const prevTutorial: Tutorial | null = index > 0 ? tutorials[index - 1] : null;
	const nextTutorial: Tutorial | null = index < tutorials.length - 1 ? tutorials[index + 1] : null;

	return {
		tutorial,
		prevTutorial,
		nextTutorial
	};
};
