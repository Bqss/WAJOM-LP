import { json } from '@sveltejs/kit';
import { PUBLIC_API_BASE_URL } from '$env/static/public';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const timestamp = new Date().toISOString();
	try {
		const payload = await request.json();
		console.log(`\n[${timestamp}] 🛒 [API /api/v1/class-register] Registration request received`);
		console.log(`[API /api/v1/class-register] Payload:`, JSON.stringify({ ...payload, coupon_code: payload.coupon_code ? '[redacted]' : '' }, null, 2));

		if (!payload.full_name || !payload.email || !payload.phone) {
			console.warn(`[API /api/v1/class-register] ⚠️ Missing required fields (full_name, email, or phone).`);
			return json(
				{ success: false, message: 'Sila lengkapkan maklumat wajib (Nama, E-mel & Nombor Telefon).' },
				{ status: 400 }
			);
		}

		const configuredBaseUrl = PUBLIC_API_BASE_URL?.trim();
		const baseUrl = (configuredBaseUrl && configuredBaseUrl !== 'https://wajom.co'
			? configuredBaseUrl
			: 'https://portal.wajom.co')
			.replace('://localhost', '://127.0.0.1')
			.replace(/\/$/, '');
		const endpoint = `${baseUrl}/api/v1/class-register`;
		console.log(`[API /api/v1/class-register] Target upstream endpoint: ${endpoint}`);

		const response = await fetch(endpoint, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload)
		});
		const resData = await response.json();

		console.log(`[API /api/v1/class-register] 📡 Status ${response.status} from ${endpoint}`);
		if (response.ok) {
			console.log(`[API /api/v1/class-register] ✅ Response body:`, JSON.stringify(resData));
		} else {
			console.warn(`[API /api/v1/class-register] ⚠️ Endpoint returned status ${response.status}`);
		}
		return json(resData, { status: response.status });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error(`[API /api/v1/class-register] 💥 Server exception:`, message);
		return json(
			{ success: false, message: message || 'Server error' },
			{ status: 502 }
		);
	}
};
