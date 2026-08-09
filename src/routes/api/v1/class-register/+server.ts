import { json } from '@sveltejs/kit';
import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const timestamp = new Date().toISOString();
	try {
		const payload = await request.json();
		console.log(`\n[${timestamp}] 🛒 [API /api/v1/class-register] Registration request received`);
		console.log(`[API /api/v1/class-register] Payload:`, JSON.stringify(payload, null, 2));

		if (!payload.full_name || !payload.email || !payload.phone) {
			console.warn(`[API /api/v1/class-register] ⚠️ Missing required fields (full_name, email, or phone).`);
			return json(
				{ success: false, message: 'Sila lengkapkan maklumat wajib (Nama, E-mel & Nombor Telefon).' },
				{ status: 400 }
			);
		}

		const portalBaseUrl = 'https://portal.wajom.co';
		const customBaseUrl = PUBLIC_API_BASE_URL && PUBLIC_API_BASE_URL !== 'https://wajom.co' ? PUBLIC_API_BASE_URL : null;

		const upstreamEndpoints = [
			`${portalBaseUrl}/api/v1/class-register`,
			`${portalBaseUrl}/api/class-register`,
			`${portalBaseUrl}/api/v1/register`,
			`${portalBaseUrl}/api/register`,
			...(customBaseUrl ? [`${customBaseUrl}/api/v1/class-register`] : [])
		];

		const uniqueEndpoints = [...new Set(upstreamEndpoints)];
		console.log(`[API /api/v1/class-register] Target upstream endpoints:`, uniqueEndpoints);

		for (const endpoint of uniqueEndpoints) {
			console.log(`[API /api/v1/class-register] 🚀 Fetching upstream: ${endpoint}...`);
			try {
				const response = await fetch(endpoint, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(payload)
				});

				console.log(`[API /api/v1/class-register] 📡 Status ${response.status} from ${endpoint}`);

				if (response.ok) {
					const resData = await response.json();
					console.log(`[API /api/v1/class-register] ✅ Response body:`, JSON.stringify(resData));
					if (resData.success) {
						return json(resData);
					}
				} else {
					console.warn(`[API /api/v1/class-register] ⚠️ Endpoint ${endpoint} returned status ${response.status}`);
				}
			} catch (err: any) {
				console.error(`[API /api/v1/class-register] ❌ Connection failed to ${endpoint}: ${err?.message || err}`);
			}
		}

		// When all endpoints return 404 or fail, return a proper 502/404 error instead of fake success
		console.warn(`[API /api/v1/class-register] ⚠️ All registration endpoints failed or returned 404.`);
		return json(
			{
				success: false,
				message: 'Gagal menghubungkan ke sistem pendaftaran rasmi (Server Backend tidak dijumpai / 404). Sila pastikan API pendaftaran portal sudah dipasang.'
			},
			{ status: 502 }
		);
	} catch (error: any) {
		console.error(`[API /api/v1/class-register] 💥 Server exception:`, error);
		return json(
			{ success: false, message: error?.message || 'Server error' },
			{ status: 500 }
		);
	}
};
