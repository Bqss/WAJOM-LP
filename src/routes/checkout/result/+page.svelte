<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import SEO from '$lib/components/SEO.svelte';

	let orderId = $state('');
	let statusId = $state('');

	let isLoading = $state(true);
	let isNotFound = $state(false);
	let errorMsg = $state('');
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
		statusId = $page.url.searchParams.get('status_id') || $page.url.searchParams.get('status') || '1';
	});

	const isSuccess = $derived(
		!isNotFound && (statusId === '1' || statusId === 'success' || statusId === 'paid' || participantData?.status === 'Paid')
	);

	onMount(async () => {
		if (!orderId) {
			isNotFound = true;
			isLoading = false;
			return;
		}

		try {
			const baseUrl = getApiBaseUrl();
			const res = await fetch(`${baseUrl}/api/v1/class-participant/${orderId}`);
			if (res.status === 404) {
				isNotFound = true;
			} else if (res.ok) {
				const json = await res.json();
				if (json.success && json.data) {
					participantData = json.data;
					isNotFound = false;
				} else {
					isNotFound = true;
				}
			} else {
				isNotFound = true;
			}
		} catch (err: any) {
			console.error('Error fetching participant data:', err);
			isNotFound = true;
		} finally {
			isLoading = false;
		}
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
</script>

<SEO
	title={isNotFound ? "404 — Rekod Pendaftaran Tidak Dijumpai | Wajom Mastery" : isSuccess ? "Pengesahan Pendaftaran Berjaya — Wajom Mastery" : "Status Pembayaran Gagal — Wajom Mastery"}
	description="Status transaksi pendaftaran Kelas Chat AI Wajom Mastery."
	canonical={`https://wajom.co/checkout/result${orderId ? '?order_id=' + orderId : ''}`}
/>

<main class="result-stage">
	<div class="result-container">
		{#if isLoading}
			<div class="loading-box">
				<div class="spinner"></div>
				<p class="loading-text">Pengesahan status pendaftaran sedang diproses...</p>
			</div>
		{:else if isNotFound}
			<!-- 404 NOT FOUND CARD -->
			<div class="result-card notfound-card">
				<div class="icon-header">
					<div class="status-icon notfound-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="11" cy="11" r="8"></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
							<line x1="11" y1="8" x2="11" y2="12"></line>
							<line x1="11" y1="14" x2="11.01" y2="14"></line>
						</svg>
					</div>
				</div>

				<div class="badge-row">
					<span class="badge-tag notfound-badge">404 — REKOD TIDAK DIJUMPAI</span>
				</div>

				<h1 class="card-title">Rekod Pendaftaran Tidak Wujud</h1>

				<p class="card-subtitle">
					Maaf, sistem tidak menjumpai sebarang rekod pendaftaran untuk ID Rujukan <strong class="text-highlight-gold">{orderId || 'dinyatakan'}</strong>. Sila pastikan pautan atau nombor transaksi anda betul.
				</p>

				{#if orderId}
					<div class="detail-box">
						<div class="detail-row">
							<span class="detail-label">ID Rujukan Dicari</span>
							<span class="detail-val mono">{orderId}</span>
						</div>
						<div class="detail-row">
							<span class="detail-label">Status Semakan</span>
							<span class="status-badge-inline notfound">404 / TIDAK DIJUMPAI</span>
						</div>
					</div>
				{/if}

				<div class="help-box">
					<p class="help-text">
						Jika anda sudah membuat pembayaran dan menerima e-mel pendaftaran, sila hubungi CS kami berserta bukti transaksi untuk semakan terus oleh admin.
					</p>
				</div>

				<!-- Action Buttons -->
				<div class="action-buttons">
					<a href="/checkout" class="btn-retry">
						<span>Daftar Kelas Baharu &rarr;</span>
					</a>
					<a
						href={`https://wa.me/628567892460?text=Salam%20CS%20Wajom,%20rekod%20pendaftaran%20saya%20404%20(ID:%20${orderId})`}
						target="_blank"
						rel="noopener noreferrer"
						class="btn-support"
					>
						<span>Bantuan WhatsApp CS &rarr;</span>
					</a>
				</div>

				<div class="back-home-wrap">
					<a href="/" class="back-home-link">
						Kembali ke Halaman Utama
					</a>
				</div>
			</div>
		{:else if isSuccess}
			<!-- SPACIOUS HIGH-TASTE SUCCESS CARD -->
			<div class="result-card success-card">
				<div class="icon-header">
					<div class="status-icon success-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
					</div>
				</div>

				<div class="badge-row">
					<span class="badge-tag success-badge">PEMBAYARAN BERJAYA</span>
				</div>

				<h1 class="card-title">Tahniah! Pendaftaran Anda Disahkan</h1>

				<p class="card-subtitle">
					Pembayaran bagi slot <strong class="text-highlight">{participantData?.package_name || 'Wajom Mastery — Kelas Chat AI'}</strong> telah berjaya diterima. Akses pendaftaran & bonus token anda telah diaktifkan.
				</p>

				<!-- Detailed Order Summary Box -->
				<div class="detail-box">
					<div class="detail-row">
						<span class="detail-label">ID Pendaftaran</span>
						<span class="detail-val mono">{participantData?.registration_id || orderId || '-'}</span>
					</div>
					{#if participantData?.full_name}
						<div class="detail-row">
							<span class="detail-label">Nama Peserta</span>
							<span class="detail-val">{participantData.full_name}</span>
						</div>
					{/if}
					{#if participantData?.email}
						<div class="detail-row">
							<span class="detail-label">Alamat E-mel</span>
							<span class="detail-val">{participantData.email}</span>
						</div>
					{/if}
					<div class="detail-row">
						<span class="detail-label">Jumlah Dibayar</span>
						<span class="detail-val highlight">RM {participantData?.amount ?? 30}.00</span>
					</div>
					<div class="detail-row">
						<span class="detail-label">Status Transaksi</span>
						<span class="status-badge-inline paid">LULUS (PAID)</span>
					</div>
				</div>

				<!-- AI Token Bonus Box -->
				<div class="token-bonus-card">
					<div class="bonus-header">
						<span class="bonus-eyebrow">BONUS AUTOMATION</span>
						<h3 class="bonus-title">1,500,000 Wajom AI Tokens</h3>
					</div>
					<p class="bonus-text">
						Bonus token percuma telah secara automatik dikreditkan terus ke akaun Wajom anda. Sila semak e-mel pengesahan untuk maklumat akses.
					</p>
				</div>

				<!-- Zoom Link Notice Card -->
				<div class="zoom-notice-card">
					<div class="notice-header">
						<span class="notice-eyebrow">MAKLUMAN PAUTAN ZOOM KELAS</span>
						<h3 class="notice-title">Makluman Pautan Zoom & Group WhatsApp</h3>
					</div>
					<ul class="notice-list">
						<li>
							<strong style="color: var(--ink);">Pautan Zoom Live Kelas:</strong> Pautan bilik Zoom akan dikongsi secara eksklusif di dalam Group WhatsApp 1 hari sebelum kelas bermula.
						</li>
						<li>
							<strong style="color: var(--ink);">Peringatan Menyertai Group:</strong> Sila pastikan anda menyertai Group WhatsApp menerusi butang di bawah untuk menerima nota edaran, jadual sesi, dan pautan Zoom kelas.
						</li>
					</ul>
				</div>

				<!-- 2-COLUMN ACTION BUTTONS -->
				<div class="cta-grid-2col">
					<a
					href={participantData?.whatsapp_group_url || "https://chat.whatsapp.com/HxxCRbYiAEYIjfXNBPkU9d"}
						target="_blank"
						rel="noopener noreferrer"
						class="btn-cta-gold"
					>
						<span>SERTAI GROUP WHATSAPP &rarr;</span>
					</a>
					<a
						href={`https://wa.me/${(participantData?.customer_service_phone || '+628567892460').replace(/[^0-9]/g, '')}?text=Hai%20CS%20Wajom,%20saya%20perlukan%20bantuan%20pendaftaran%20(ID:%20${orderId})`}
						target="_blank"
						rel="noopener noreferrer"
						class="btn-cta-cs"
					>
						<span>HUBUNGI BANTUAN CS &rarr;</span>
					</a>
				</div>

				<div class="back-home-wrap">
					<a href="/" class="back-home-link">
						Kembali ke Halaman Utama
					</a>
				</div>
			</div>
		{:else}
			<!-- SPACIOUS HIGH-TASTE FAILED CARD -->
			<div class="result-card failed-card">
				<div class="icon-header">
					<div class="status-icon failed-icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"></circle>
							<line x1="15" y1="9" x2="9" y2="15"></line>
							<line x1="9" y1="9" x2="18" y2="15"></line>
						</svg>
					</div>
				</div>

				<div class="badge-row">
					<span class="badge-tag failed-badge">PEMBAYARAN TIDAK BERJAYA</span>
				</div>

				<h1 class="card-title">Transaksi Pembayaran Terhenti atau Gagal</h1>

				<p class="card-subtitle">
					Maaf, proses pembayaran gerbang CHIP bagi pendaftaran anda tidak dapat diselesaikan atau telah dibatalkan.
				</p>

				{#if orderId}
					<div class="detail-box">
						<div class="detail-row">
							<span class="detail-label">ID Rujukan</span>
							<span class="detail-val mono">{orderId}</span>
						</div>
						<div class="detail-row">
							<span class="detail-label">Status Pembayaran</span>
							<span class="status-badge-inline failed">GAGAL / DIBATALKAN</span>
						</div>
					</div>
				{/if}

				<div class="help-box">
					<p class="help-text">
						Jangan risau, slot pendaftaran anda belum hangus. Anda boleh mencuba semula proses pembayaran atau hubungi pasukan bantuan kami.
					</p>
				</div>

				<!-- Action Buttons -->
				<div class="action-buttons">
					<a href="/checkout" class="btn-retry">
						<span>Cuba Pembayaran Semula &rarr;</span>
					</a>
					<a
						href={`https://wa.me/${(participantData?.customer_service_phone || '+628567892460').replace(/[^0-9]/g, '')}?text=Salam,%20pembayaran%20pendaftaran%20kelas%20saya%20gagal%20(ID:%20${orderId})`}
						target="_blank"
						rel="noopener noreferrer"
						class="btn-support"
					>
						<span>Bantuan WhatsApp CS</span>
					</a>
				</div>

				<div class="back-home-wrap">
					<a href="/" class="back-home-link">
						Kembali ke Halaman Utama
					</a>
				</div>
			</div>
		{/if}
	</div>
</main>

<style>
	.result-stage {
		padding: clamp(48px, 8vw, 80px) 0;
		min-height: 80vh;
		display: flex;
		align-items: center;
		position: relative;
	}

	.result-stage::before {
		content: "";
		position: absolute;
		inset: 0;
		background: radial-gradient(55% 45% at 50% 25%, rgba(55, 159, 118, 0.10), transparent 70%);
		pointer-events: none;
	}

	.result-container {
		max-width: 660px;
		margin: 0 auto;
		width: 100%;
		position: relative;
		z-index: 1;
	}

	.loading-box {
		text-align: center;
		padding: 60px 20px;
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 20px;
	}

	.loading-text {
		color: var(--ink-2);
		margin-top: 16px;
		font-size: 0.95rem;
	}

	.result-card {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 20px;
		padding: clamp(32px, 6vw, 48px) clamp(24px, 5vw, 40px);
		text-align: center;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 24px 50px -16px rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(14px) saturate(140%);
	}

	.icon-header {
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
	}

	.status-icon {
		width: 72px;
		height: 72px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.success-icon {
		background: rgba(55, 159, 118, 0.12);
		border: 2px solid var(--emerald-2);
		color: var(--emerald-2);
	}

	.failed-icon {
		background: rgba(194, 84, 80, 0.12);
		border: 2px solid var(--ruby);
		color: var(--ruby);
	}

	.notfound-icon {
		background: rgba(212, 175, 55, 0.12);
		border: 2px solid var(--gold-2);
		color: var(--gold-2);
	}

	.badge-row {
		margin-bottom: 12px;
	}

	.badge-tag {
		display: inline-block;
		padding: 4px 14px;
		border-radius: 999px;
		font-family: var(--mono);
		font-size: 0.76rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.success-badge {
		background: rgba(55, 159, 118, 0.12);
		border: 1px solid rgba(55, 159, 118, 0.3);
		color: var(--emerald-2);
	}

	.failed-badge {
		background: rgba(194, 84, 80, 0.12);
		border: 1px solid rgba(194, 84, 80, 0.3);
		color: var(--ruby);
	}

	.notfound-badge {
		background: rgba(212, 175, 55, 0.12);
		border: 1px solid rgba(212, 175, 55, 0.3);
		color: var(--gold-2);
	}

	.card-title {
		font-family: var(--serif);
		font-size: clamp(1.75rem, 4vw, 2.3rem);
		margin: 12px 0 10px;
		font-weight: 700;
		color: var(--ink);
		line-height: 1.15;
		letter-spacing: -0.02em;
	}

	.card-subtitle {
		color: var(--ink-2);
		font-size: 1rem;
		max-width: 52ch;
		margin: 0 auto 28px;
		line-height: 1.6;
	}

	.text-highlight {
		color: var(--emerald-2);
		font-weight: 600;
	}

	.text-highlight-gold {
		color: var(--gold-2);
		font-weight: 600;
	}

	.detail-box {
		background: var(--bg-3);
		border: 1px solid var(--rule);
		border-radius: 14px;
		padding: 18px 24px;
		margin: 28px 0;
		text-align: left;
	}

	.detail-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 0;
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
		font-size: 0.94rem;
	}

	.detail-val.mono {
		font-family: var(--mono);
		color: var(--gold-2);
	}

	.detail-val.highlight {
		color: var(--gold-2);
		font-size: 1.08rem;
		font-weight: 700;
	}

	.status-badge-inline {
		font-family: var(--mono);
		font-size: 0.78rem;
		font-weight: 700;
		padding: 3px 10px;
		border-radius: 6px;
		letter-spacing: 0.04em;
	}

	.status-badge-inline.paid {
		background: rgba(78, 194, 148, 0.14);
		border: 1px solid rgba(78, 194, 148, 0.3);
		color: var(--emerald-2);
	}

	.status-badge-inline.failed {
		background: rgba(194, 84, 80, 0.14);
		border: 1px solid rgba(194, 84, 80, 0.3);
		color: var(--ruby);
	}

	.status-badge-inline.notfound {
		background: rgba(212, 175, 55, 0.14);
		border: 1px solid rgba(212, 175, 55, 0.3);
		color: var(--gold-2);
	}

	.token-bonus-card {
		background: rgba(212, 175, 55, 0.07);
		border: 1px solid rgba(212, 175, 55, 0.28);
		border-radius: 14px;
		padding: 22px 24px;
		margin-bottom: 24px;
		text-align: left;
	}

	.bonus-eyebrow {
		font-family: var(--mono);
		font-size: 0.68rem;
		color: var(--gold);
		letter-spacing: 0.16em;
		text-transform: uppercase;
		display: block;
		margin-bottom: 4px;
	}

	.bonus-title {
		font-family: var(--serif);
		color: var(--gold-2);
		margin: 0 0 8px;
		font-size: 1.15rem;
		font-weight: 600;
	}

	.bonus-text {
		color: var(--ink-2);
		font-size: 0.9rem;
		margin: 0;
		line-height: 1.55;
	}

	.zoom-notice-card {
		background: rgba(55, 159, 118, 0.06);
		border: 1px solid rgba(55, 159, 118, 0.25);
		border-radius: 14px;
		padding: 20px 24px;
		margin: 24px 0;
		text-align: left;
	}

	.notice-eyebrow {
		font-family: var(--mono);
		font-size: 0.68rem;
		color: var(--emerald-2);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		display: block;
		margin-bottom: 4px;
	}

	.notice-title {
		font-family: var(--serif);
		color: var(--ink);
		margin: 0 0 10px;
		font-size: 1.1rem;
		font-weight: 600;
	}

	.notice-list {
		margin: 0;
		padding-left: 18px;
		color: var(--ink-2);
		font-size: 0.9rem;
		line-height: 1.6;
	}

	.notice-list li {
		margin-bottom: 8px;
	}

	.notice-list li:last-child {
		margin-bottom: 0;
	}

	.cta-grid-2col {
		display: grid;
		grid-template-columns: 1fr;
		gap: 14px;
		margin-top: 28px;
	}

	@media (min-width: 520px) {
		.cta-grid-2col {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.btn-cta-gold {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		background: var(--gold);
		color: var(--cta-ink);
		padding: 15px 20px;
		border-radius: 999px;
		font-family: var(--sans);
		font-weight: 700;
		font-size: 0.95rem;
		text-decoration: none;
		box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 10px 24px -10px rgba(212, 175, 55, 0.4);
		transition: background 0.18s ease, transform 0.18s ease;
		white-space: nowrap;
	}

	.btn-cta-gold:hover {
		background: var(--gold-2);
		transform: translateY(-2px);
	}

	.btn-cta-cs {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		color: var(--emerald-2);
		padding: 15px 20px;
		border-radius: 999px;
		font-family: var(--sans);
		font-weight: 700;
		font-size: 0.95rem;
		text-decoration: none;
		transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
		white-space: nowrap;
	}

	.btn-cta-cs:hover {
		border-color: var(--emerald-2);
		background: rgba(55, 159, 118, 0.10);
		transform: translateY(-2px);
	}

	.help-box {
		background: var(--bg-3);
		border: 1px dashed var(--rule-2);
		border-radius: 12px;
		padding: 16px 20px;
		margin: 24px 0;
		text-align: left;
	}

	.help-text {
		margin: 0;
		color: var(--ink-2);
		font-size: 0.9rem;
		line-height: 1.55;
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
		border-radius: 999px;
		font-weight: 700;
		font-size: 0.95rem;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: background 0.18s ease, transform 0.18s ease;
	}

	.btn-retry:hover {
		background: var(--gold-2);
		transform: translateY(-1px);
	}

	.btn-support {
		flex: 1;
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		color: var(--ink);
		padding: 14px 20px;
		border-radius: 999px;
		font-weight: 600;
		font-size: 0.95rem;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		transition: border-color 0.18s ease;
	}

	.btn-support:hover {
		border-color: var(--ink-3);
	}

	.back-home-wrap {
		margin-top: 24px;
	}

	.back-home-link {
		color: var(--ink-3);
		font-size: 0.88rem;
		text-decoration: underline;
		transition: color 0.18s ease;
	}

	.back-home-link:hover {
		color: var(--ink-2);
	}

	.spinner {
		width: 44px;
		height: 44px;
		border: 3px solid var(--rule-2);
		border-radius: 50%;
		border-top-color: var(--gold-2);
		animation: spin 1s ease-in-out infinite;
		margin: 0 auto;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
