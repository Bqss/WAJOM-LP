import { json } from '@sveltejs/kit';
import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const timestamp = new Date().toISOString();
	try {
		const body = await request.json();
		const query = (body.query || body.email || body.phone || '').trim();

		console.log(`\n[${timestamp}] 👤 [API /api/users/check] Request received`);
		console.log(`[API /api/users/check] Query:`, { query, rawBody: body });

		if (!query) {
			console.warn(`[API /api/users/check] ⚠️ Empty query string provided.`);
			return json(
				{ is_exist: false, user: null, message: 'Sila masukkan e-mel atau telefon.' },
				{ status: 400 }
			);
		}

		const baseUrl = PUBLIC_API_BASE_URL || 'https://portal.wajom.co';
		const upstreamEndpoints = [
			`${baseUrl}/api/users/check`,
			'https://portal.wajom.co/api/users/check',
			'http://localhost:3000/api/users/check'
		];

		const uniqueEndpoints = [...new Set(upstreamEndpoints)];
		console.log(`[API /api/users/check] Target upstream endpoints:`, uniqueEndpoints);

		for (const endpoint of uniqueEndpoints) {
			console.log(`[API /api/users/check] 🚀 Fetching upstream: ${endpoint}...`);
			try {
				const response = await fetch(endpoint, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ query, email: query, phone: query })
				});

				console.log(`[API /api/users/check] 📡 Upstream response status: ${response.status} (${endpoint})`);

				if (response.ok) {
					const resData = await response.json();
					console.log(`[API /api/users/check] ✅ Upstream response body:`, JSON.stringify(resData));
					return json(resData);
				} else {
					console.warn(`[API /api/users/check] ⚠️ Upstream ${endpoint} returned status: ${response.status}`);
				}
			} catch (err: any) {
				console.error(`[API /api/users/check] ❌ Connection failed to ${endpoint}: ${err?.message || err}`);
			}
		}

		console.log(`[API /api/users/check] ℹ️ User not found across all upstream endpoints.`);
		return json({
			is_exist: false,
			user: null,
			message: 'Akaun tidak dijumpai.'
		});
	} catch (error: any) {
		console.error(`[API /api/users/check] 💥 Exception:`, error);
		return json(
			{ is_exist: false, user: null, message: error?.message || 'Server error' },
			{ status: 500 }
		);
	}
};
