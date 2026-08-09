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
	title="Pembayaran Gagal — Wajom Mastery Kelas Chat AI"
	description="Status transaksi pembayaran pendaftaran Kelas Chat AI Wajom Mastery tidak berjaya."
	canonical="https://wajom.co/checkout/failed"
/>

<main style="padding: 60px 0 100px; min-height: 75vh; display: flex; align-items: center;">
	<div class="wrap" style="max-width: 680px; margin: 0 auto; width: 100%;">
		<div class="result-card failed-card">
			<div class="status-icon failed-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="15" y1="9" x2="9" y2="15"></line>
					<line x1="9" y1="9" x2="15" y2="15"></line>
				</svg>
			</div>

			<span class="badge-tag failed-badge">Pembayaran Tidak Berjaya</span>

			<h1 style="font-family: var(--serif); font-size: clamp(1.8rem, 4vw, 2.4rem); margin: 12px 0 8px; font-weight: 700; color: var(--ink);">
				Transaksi Pembayaran Terhenti atau Gagal
			</h1>

			<p style="color: var(--ink-2); font-size: 1rem; max-width: 48ch; margin: 0 auto 28px; line-height: 1.6;">
				Maaf, proses pembayaran FPX/Gerbang CHIP bagi pendaftaran anda tidak dapat diselesaikan atau telah dibatalkan.
			</p>

			{#if orderId}
				<div class="detail-box" style="margin-bottom: 24px;">
					<div class="detail-row">
						<span class="detail-label">ID Rujukan Pendaftaran:</span>
						<span class="detail-val mono">{orderId}</span>
					</div>
					<div class="detail-row">
						<span class="detail-label">Status Pembayaran:</span>
						<span class="detail-val status-text-failed">❌ GAGAL / DIBATALKAN</span>
					</div>
				</div>
			{/if}

			<div class="help-box">
				<p style="margin: 0; color: var(--ink-2); font-size: 0.9rem; line-height: 1.5;">
					💡 <strong>Jangan risau!</strong> Slot anda belum hangus. Anda boleh mencuba semula proses pembayaran atau hubungi pasukan bantuan kami melalui WhatsApp.
				</p>
			</div>

			<!-- Action Buttons -->
			<div class="action-buttons">
				<a href="/checkout" class="btn-retry">
					<span>Cuba Pembayaran Semula &rarr;</span>
				</a>
				<a
					href={`https://wa.me/${(participantData?.customer_service_phone || '+60123456789').replace(/[^0-9]/g, '')}?text=Salam,%20pembayaran%20pendaftaran%20kelas%20saya%20gagal%20(ID:%20${orderId})`}
					target="_blank"
					rel="noopener noreferrer"
					class="btn-support"
				>
					<span>Bantuan WhatsApp CS</span>
				</a>
			</div>

			<div style="margin-top: 24px;">
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

	.failed-icon {
		background: rgba(194, 84, 80, 0.15);
		border: 2px solid var(--ruby);
		color: var(--ruby);
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

	.failed-badge {
		background: rgba(194, 84, 80, 0.12);
		border: 1px solid rgba(194, 84, 80, 0.3);
		color: var(--ruby);
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

	.status-text-failed {
		color: var(--ruby);
		font-weight: 700;
	}

	.help-box {
		background: var(--bg-3);
		border: 1px dashed var(--rule-2);
		border-radius: var(--r-md);
		padding: 16px;
		margin: 20px 0;
		text-align: left;
	}

	.action-buttons {
		display: flex;
		gap: 12px;
		margin-top: 24px;
		flex-direction: column;
	}

	@media (min-width: 480px) {
		.action-buttons {
			flex-direction: row;
		}
	}

	.btn-retry {
		flex: 1;
		background: var(--gold);
		color: var(--cta-ink);
		padding: 14px 20px;
		border-radius: var(--r-pill);
		font-weight: 700;
		font-size: 0.95rem;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s ease;
	}

	.btn-retry:hover {
		transform: translateY(-2px);
		background: var(--gold-2);
	}

	.btn-support {
		flex: 1;
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		color: var(--ink);
		padding: 14px 20px;
		border-radius: var(--r-pill);
		font-weight: 600;
		font-size: 0.95rem;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: background 0.2s ease;
	}

	.btn-support:hover {
		background: var(--rule);
	}
</style>
