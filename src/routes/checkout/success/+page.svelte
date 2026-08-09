<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import SEO from '$lib/components/SEO.svelte';

	let orderId = $state('');
	let isLoading = $state(true);
	let participantData = $state<{
		registration_id?: string;
		full_name?: string;
		email?: string;
		phone?: string;
		package_name?: string;
		amount?: number;
		currency?: string;
		status?: string;
		whatsapp_group_url?: string;
		customer_service_phone?: string;
	} | null>(null);

	$effect(() => {
		orderId = $page.url.searchParams.get('order_id') || $page.url.searchParams.get('reference') || '';
	});

	function getApiBaseUrl(): string {
		if (typeof window !== 'undefined') {
			const host = window.location.hostname;
			if (host === 'localhost' || host === '127.0.0.1') {
				return 'http://localhost:6544';
			}
		}
		return 'https://portal.wajom.co';
	}

	onMount(async () => {
		if (!orderId) {
			isLoading = false;
			return;
		}

		try {
			const baseUrl = getApiBaseUrl();
			const res = await fetch(`${baseUrl}/api/v1/class-participant/${orderId}`);
			if (res.ok) {
				const json = await res.json();
				if (json.success && json.data) {
					participantData = json.data;
				}
			}
		} catch (err: any) {
			console.error('Error fetching participant data:', err);
		} finally {
			isLoading = false;
		}
	});
</script>

<SEO
	title="Pembayaran Berjaya — Wajom Mastery Kelas Chat AI"
	description="Pendaftaran dan pembayaran anda bagi Kelas Chat AI Wajom Mastery telah berjaya disahkan."
	canonical="https://wajom.co/checkout/success"
/>

<main style="padding: 60px 0 100px; min-height: 75vh; display: flex; align-items: center;">
	<div class="wrap" style="max-width: 680px; margin: 0 auto; width: 100%;">
		<div class="result-card success-card">
			<div class="status-icon success-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
			</div>

			<span class="badge-tag success-badge">Pembayaran Berjaya</span>

			<h1 style="font-family: var(--serif); font-size: clamp(1.8rem, 4vw, 2.4rem); margin: 12px 0 8px; font-weight: 700; color: var(--ink);">
				Tahniah! Pendaftaran Anda Disahkan
			</h1>

			<p style="color: var(--ink-2); font-size: 1rem; max-width: 48ch; margin: 0 auto 28px; line-height: 1.6;">
				Pembayaran bagi slot <strong style="color: var(--emerald-2);">{participantData?.package_name || 'Wajom Mastery — Kelas Chat AI'}</strong> telah berjaya diterima.
			</p>

			{#if isLoading}
				<div style="padding: 20px; color: var(--ink-3);">Memuatkan maklumat transaksi...</div>
			{:else}
				<!-- Order Detail Summary Box -->
				<div class="detail-box">
					<div class="detail-row">
						<span class="detail-label">ID Pendaftaran:</span>
						<span class="detail-val mono">{participantData?.registration_id || orderId || '-'}</span>
					</div>
					{#if participantData?.full_name}
						<div class="detail-row">
							<span class="detail-label">Nama Peserta:</span>
							<span class="detail-val">{participantData.full_name}</span>
						</div>
					{/if}
					{#if participantData?.email}
						<div class="detail-row">
							<span class="detail-label">E-mel:</span>
							<span class="detail-val">{participantData.email}</span>
						</div>
					{/if}
					<div class="detail-row">
						<span class="detail-label">Jumlah Dibayar:</span>
						<span class="detail-val highlight">RM {participantData?.amount ?? 30}</span>
					</div>
					<div class="detail-row">
						<span class="detail-label">Status Transaksi:</span>
						<span class="detail-val status-text-paid">✓ LULUS (PAID)</span>
					</div>
				</div>
			{/if}

			<!-- AI Token Bonus Highlight -->
			<div class="token-bonus-box">
				<div style="font-size: 1.5rem; margin-bottom: 4px;">⚡</div>
				<h3 style="color: var(--gold-2); margin: 0 0 6px; font-size: 1.05rem;">Bonus 1,500,000 Wajom AI Token</h3>
				<p style="color: var(--ink-2); font-size: 0.88rem; margin: 0; line-height: 1.5;">
					Bonus token percuma telah dikreditkan ke akaun Wajom anda. Sila semak e-mel pengesahan untuk maklumat login portal.
				</p>
				<a href="https://portal.wajom.co/login" target="_blank" rel="noopener noreferrer" class="portal-link">
					Log Masuk Portal Wajom &rarr;
				</a>
			</div>

			<!-- CTA WhatsApp Group -->
			<div style="margin-top: 32px;">
				<a
					href={participantData?.whatsapp_group_url || "https://chat.whatsapp.com/demo-wajom-mastery"}
					target="_blank"
					rel="noopener noreferrer"
					class="btn-cta-whatsapp"
				>
					<span>SERTAI WHATSAPP GROUP KELAS SEKARANG &rarr;</span>
				</a>
			</div>

			<div style="margin-top: 20px;">
				<a href="/" style="color: var(--ink-3); font-size: 0.88rem; text-decoration: underline;">
					Kembali ke Halaman Utama
				</a>
			</div>
		</div>
	</div>
</main>

<style>
	.result-card {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: var(--r-lg);
		padding: clamp(30px, 6vw, 48px) clamp(20px, 4vw, 36px);
		text-align: center;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
	}

	.status-icon {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 20px;
	}

	.success-icon {
		background: rgba(55, 159, 118, 0.15);
		border: 2px solid var(--emerald-2);
		color: var(--emerald-2);
	}

	.badge-tag {
		display: inline-block;
		padding: 4px 14px;
		border-radius: var(--r-pill);
		font-size: 0.82rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.success-badge {
		background: rgba(55, 159, 118, 0.12);
		border: 1px solid rgba(55, 159, 118, 0.3);
		color: var(--emerald-2);
	}

	.detail-box {
		background: var(--bg-3);
		border: 1px solid var(--rule);
		border-radius: var(--r-md);
		padding: 16px 20px;
		margin: 20px 0;
		text-align: left;
	}

	.detail-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}

	.detail-row:last-child {
		border-bottom: none;
	}

	.detail-label {
		color: var(--ink-3);
		font-size: 0.88rem;
	}

	.detail-val {
		color: var(--ink);
		font-weight: 600;
		font-size: 0.92rem;
	}

	.detail-val.mono {
		font-family: var(--mono);
		color: var(--gold-2);
	}

	.detail-val.highlight {
		color: var(--gold-2);
		font-size: 1.05rem;
		font-weight: 700;
	}

	.status-text-paid {
		color: var(--emerald-2);
		font-weight: 700;
	}

	.token-bonus-box {
		background: rgba(212, 175, 55, 0.08);
		border: 1px solid rgba(212, 175, 55, 0.3);
		border-radius: var(--r-md);
		padding: 18px;
		margin: 20px 0;
	}

	.portal-link {
		display: inline-block;
		margin-top: 10px;
		color: var(--gold-2);
		font-weight: 700;
		font-size: 0.88rem;
		text-decoration: underline;
	}

	.btn-cta-whatsapp {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		background: linear-gradient(135deg, #25D366, #128C7E);
		color: #ffffff;
		padding: 16px 28px;
		border-radius: var(--r-pill);
		font-weight: 700;
		font-size: 1.05rem;
		text-decoration: none;
		box-shadow: 0 8px 24px rgba(37, 211, 102, 0.3);
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.btn-cta-whatsapp:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 28px rgba(37, 211, 102, 0.45);
	}
</style>
