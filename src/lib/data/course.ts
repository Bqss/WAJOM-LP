// The class currently being sold. When the next course opens, update this file
// (and the backend COURSES entry in wajom/app/constants/courses.ts) — earlier
// course configs live in git history.
export const ACTIVE_COURSE = {
	slug: 'wajom-mastery-chat-ai-5',
	// API identifier sent to the backend as package_name; must stay stable.
	packageName: 'Wajom Mastery — Kelas Chat AI (Course 5)',
	// User-facing class name; use these wherever the name is shown.
	displayNameMs: 'Kelas Setting Smart Campaign & Agent AI Wajom',
	displayNameEn: 'Wajom Smart Campaign & Agent AI Setup Class',
	// Joined by the WhatsApp group CTAs on register, checkout and result pages.
	whatsappGroupUrl: 'https://chat.whatsapp.com/GYda0SbyD3hKCBqOlZ5vx1',
	price: 30,
	bonusTokens: 1_500_000,
	sessionDateShort: '28 Nov 2026',
	sessionDateTime: '2026-11-28T09:00:00+08:00',
	sessionTime: '9:00 AM – 11:00 AM',
	sessionDateMs: 'Sabtu, 28 November 2026',
	sessionDateEn: 'Saturday, 28 November 2026',
	sessionDayShortMs: 'Sabtu, 28 Nov 2026',
	sessionDayShortEn: 'Saturday, 28 Nov 2026',
	sessionInfoMs: 'Sabtu, 28 November 2026 (9:00 AM – 11:00 AM)',
	sessionInfoEn: 'Saturday, 28 November 2026 (9:00 AM – 11:00 AM)'
} as const;
