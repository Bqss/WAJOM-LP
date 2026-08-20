import { json } from '@sveltejs/kit';
import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const timestamp = new Date().toISOString();
	try {
		const body = await request.json();
		const query = (body.q || body.query || body.email || body.phone || '').trim();

		console.log(`\n[${timestamp}] 🔍 [API /api/v1/users/search] Request received for: "${query}"`);

		if (!query) {
			console.warn(`[API /api/v1/users/search] ⚠️ Empty query string provided.`);
			return json(
				{ success: false, message: 'Sila masukkan kata kunci carian.' },
				{ status: 400 }
			);
		}

		// Prioritize PUBLIC_API_BASE_URL, fall back to portal
		// Normalize localhost → 127.0.0.1 to avoid IPv6 resolution issues in server-side fetch
		const customBaseUrl = (PUBLIC_API_BASE_URL && PUBLIC_API_BASE_URL !== 'https://wajom.co' ? PUBLIC_API_BASE_URL : null)?.replace('://localhost', '://127.0.0.1');
		const portalBaseUrl = 'https://portal.wajom.co';

		const upstreamEndpoints = [
			...(customBaseUrl ? [`${customBaseUrl}/api/v1/users/search`, `${customBaseUrl}/api/users/check`] : []),
			`${portalBaseUrl}/api/users/check`,
			`${portalBaseUrl}/api/v1/users/search`
		];

		const uniqueEndpoints = [...new Set(upstreamEndpoints)];

		for (const endpoint of uniqueEndpoints) {
			console.log(`[API /api/v1/users/search] 🚀 Fetching upstream: ${endpoint}`);
			try {
				const response = await fetch(endpoint, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ q: query, query, email: query, phone: query })
				});

				console.log(`[API /api/v1/users/search] 📡 Status ${response.status} from ${endpoint}`);

				if (response.ok) {
					const resData = await response.json();
					console.log(`[API /api/v1/users/search] 📦 Response body:`, JSON.stringify(resData));

					// Case 1: Standard v1 search response with user list
					if (resData.success && Array.isArray(resData.data)) {
						console.log(`[API /api/v1/users/search] ✅ Found ${resData.data.length} user(s)`);
						return json(resData);
					}

					// Case 2: users/check response format ({ is_exist: true/false, user: {...} })
					if (typeof resData.is_exist === 'boolean') {
						if (resData.is_exist && resData.user) {
							console.log(`[API /api/v1/users/search] ✅ Found user:`, resData.user.email);
							return json({
								success: true,
								data: [resData.user]
							});
						} else {
							console.log(`[API /api/v1/users/search] ℹ️ Upstream confirmed user does not exist.`);
							return json({
								success: true,
								data: [],
								message: 'Akaun Wajom tidak dijumpai'
							});
						}
					}
				}
			} catch (err: any) {
				console.error(`[API /api/v1/users/search] ❌ Failed connecting to ${endpoint}: ${err?.message || err}`);
			}
		}

		console.log(`[API /api/v1/users/search] ℹ️ No user data found across endpoints.`);
		return json({
			success: true,
			data: [],
			message: 'Tiada akaun ditemui'
		});
	} catch (error: any) {
		console.error(`[API /api/v1/users/search] 💥 Server error:`, error);
		return json(
			{ success: false, message: error?.message || 'Server error' },
			{ status: 500 }
		);
	}
};
