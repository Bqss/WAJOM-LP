import { json } from '@sveltejs/kit';
import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { RequestHandler } from './$types';

// Same-origin proxy for the checkout coupon check; the portal decides the price.
export const POST: RequestHandler = async ({ request }) => {
	try {
		const payload = await request.json();
		const customBaseUrl = (PUBLIC_API_BASE_URL && PUBLIC_API_BASE_URL !== 'https://wajom.co' ? PUBLIC_API_BASE_URL : null)?.replace('://localhost', '://127.0.0.1');
		const baseUrl = customBaseUrl || 'https://portal.wajom.co';

		const response = await fetch(`${baseUrl}/api/v1/class-coupon/check`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ code: String(payload?.code || ''), course_slug: payload?.course_slug })
		});
		if (!response.ok) {
			console.warn(`[API /api/v1/class-coupon/check] ⚠️ Portal returned status ${response.status}`);
			return json({ success: false, valid: false }, { status: 502 });
		}
		return json(await response.json());
	} catch (error: any) {
		console.error(`[API /api/v1/class-coupon/check] 💥 ${error?.message || error}`);
		return json({ success: false, valid: false }, { status: 500 });
	}
};
