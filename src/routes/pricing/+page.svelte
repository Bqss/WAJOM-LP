<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	let isYearly = $state(false);

	const pricingJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: 'Pakej Langganan Wajom!',
		description: 'Platform automasi WhatsApp canggih: Trial Percuma 7 Hari (RM0), Pakej 1 WA (RM49/bln), 3 WA (RM89/bln), dan 5 WA (RM149/bln).',
		brand: {
			'@type': 'Brand',
			name: 'Wajom!'
		},
		offers: [
			{
				'@type': 'Offer',
				name: 'Trial Percuma 7 Hari',
				price: '0',
				priceCurrency: 'MYR',
				priceValidUntil: '2026-12-31',
				availability: 'https://schema.org/InStock',
				url: 'https://wajom.co/pricing'
			},
			{
				'@type': 'Offer',
				name: 'Pakej 1 Akaun WhatsApp',
				price: '49',
				priceCurrency: 'MYR',
				priceValidUntil: '2026-12-31',
				availability: 'https://schema.org/InStock',
				url: 'https://wajom.co/pricing'
			},
			{
				'@type': 'Offer',
				name: 'Pakej 3 Akaun WhatsApp',
				price: '89',
				priceCurrency: 'MYR',
				priceValidUntil: '2026-12-31',
				availability: 'https://schema.org/InStock',
				url: 'https://wajom.co/pricing'
			},
			{
				'@type': 'Offer',
				name: 'Pakej 5 Akaun WhatsApp',
				price: '149',
				priceCurrency: 'MYR',
				priceValidUntil: '2026-12-31',
				availability: 'https://schema.org/InStock',
				url: 'https://wajom.co/pricing'
			}
		]
	};
</script>

<SEO
	title="Pelan & Harga Wajom! — Automasi WhatsApp Dari RM49/Bulan"
	description="Pilih pakej Wajom! terbaik untuk perniagaan anda: Trial Percuma 7 hari (RM0), 1 WhatsApp (RM49/bln), 3 WhatsApp (RM89/bln), atau 5 WhatsApp (RM149/bln). Mula percuma!"
	keywords="harga wajom, pakej whatsapp automation, pelan wajom malaysia, percubaan percuma whatsapp bot, sistem whatsapp murah, langganan bot whatsapp, wajom pricing, kos automasi whatsapp"
	canonical="https://wajom.co/pricing"
	ogImage="https://wajom.co/logo.png"
	ogImageAlt="Pelan dan Harga Wajom WhatsApp Automation"
	ogType="website"
	jsonLd={pricingJsonLd}
/>

<!-- Hero Section -->
<section class="pricing-hero">
	<div class="wrap hero-wrap">
		<span class="eyebrow-pill">Pilihan Pelan Transparan</span>
		<h1 class="hero-heading">Pakej Ringkas. <em>Kuantiti Tanpa Had.</em></h1>
		<p class="hero-subtext">
			Setiap pakej dilengkapi akses penuh ke semua ciri automasi &amp; AI Wajom! Pilih mengikut bilangan akaun WhatsApp yang ingin disambung.
		</p>

		<!-- Billing Cycle Switcher -->
		<div class="billing-switcher">
			<button
				type="button"
				class="switch-btn {!isYearly ? 'active' : ''}"
				onclick={() => (isYearly = false)}
			>
				Bil Bulanan
			</button>
			<button
				type="button"
				class="switch-btn {isYearly ? 'active' : ''}"
				onclick={() => (isYearly = true)}
			>
				<span>Bil Tahunan</span>
				<span class="discount-tag">JIMAT 2 BULAN</span>
			</button>
		</div>
	</div>
</section>

<!-- Main Pricing Structure (Unified Bespoke Matrix Container) -->
<section class="pricing-matrix-section">
	<div class="wrap">
		<div class="matrix-container">
			
			<!-- Column 1: 1 WhatsApp -->
			<div class="matrix-col">
				<div class="col-head">
					<span class="tier-label">ASAS</span>
					<h3 class="tier-name">1 WhatsApp</h3>
					<p class="tier-desc">Sesuai untuk perniagaan solo atau peniaga kecil yang baru bermula.</p>
					<div class="price-display">
						<span class="currency">RM</span>
						<span class="amount">{isYearly ? '499' : '49'}</span>
						<span class="cadence">/{isYearly ? 'tahun' : 'bulan'}</span>
					</div>
					{#if isYearly}
						<span class="avg-note">RM41.58 / bulan</span>
					{/if}
					<a href="https://portal.wajom.co/checkout" target="_blank" rel="noopener" class="tier-cta secondary">
						Mula Dengan 1 WA →
					</a>
				</div>

				<div class="col-body">
					<div class="spec-group-title">Termasuk Ciri Utama:</div>
					<ul class="spec-list">
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span><strong>1 Akaun WhatsApp</strong> disambung</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Akses Penuh Semua Ciri Wajom!</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Broadcast Personal &amp; Kumpulan</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Chatbot AI &amp; Auto Follow Up</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>WhatsApp CRM &amp; Contact Grabber</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Integrasi Webhook &amp; Form</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Column 2: 3 WhatsApp (Featured Tier) -->
			<div class="matrix-col featured">
				<div class="featured-indicator">PALING POPULAR</div>
				<div class="col-head">
					<span class="tier-label emerald">UTAMA</span>
					<h3 class="tier-name">3 WhatsApp</h3>
					<p class="tier-desc">Paling popular untuk pasukan jualan, leader &amp; usahawan yang aktif.</p>
					<div class="price-display">
						<span class="currency emerald">RM</span>
						<span class="amount emerald">{isYearly ? '899' : '89'}</span>
						<span class="cadence">/{isYearly ? 'tahun' : 'bulan'}</span>
					</div>
					{#if isYearly}
						<span class="avg-note emerald">RM74.91 / bulan</span>
					{/if}
					<a href="https://portal.wajom.co/checkout" target="_blank" rel="noopener" class="tier-cta primary">
						Langgan 3 WA (Popular) →
					</a>
				</div>

				<div class="col-body">
					<div class="spec-group-title">Segala Ciri 1 WA Plus:</div>
					<ul class="spec-list">
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span><strong>3 Akaun WhatsApp</strong> disambung</span>
						</li>
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span><strong>Hantar Mesej Tanpa Had</strong></span>
						</li>
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Auto Reply &amp; Chatbot AI Engine</span>
						</li>
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Multi-Admin &amp; Share Dashboard</span>
						</li>
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Sokongan VIP &amp; Backup Data</span>
						</li>
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Akses Penuh Semua Integrasi</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Column 3: 5 WhatsApp -->
			<div class="matrix-col">
				<div class="col-head">
					<span class="tier-label">EMPAYAR</span>
					<h3 class="tier-name">5 WhatsApp</h3>
					<p class="tier-desc">Pereka khas untuk operasi HQ syarikat, agensi &amp; perniagaan berskala besar.</p>
					<div class="price-display">
						<span class="currency">RM</span>
						<span class="amount">{isYearly ? '1499' : '149'}</span>
						<span class="cadence">/{isYearly ? 'tahun' : 'bulan'}</span>
					</div>
					{#if isYearly}
						<span class="avg-note">RM124.91 / bulan</span>
					{/if}
					<a href="https://portal.wajom.co/checkout" target="_blank" rel="noopener" class="tier-cta secondary">
						Mula Dengan 5 WA →
					</a>
				</div>

				<div class="col-body">
					<div class="spec-group-title">Segala Ciri 3 WA Plus:</div>
					<ul class="spec-list">
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span><strong>5 Akaun WhatsApp</strong> disambung</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Skala Pemasaran HQ &amp; Agensi</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Unlimited Campaigns &amp; Broadcast</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>WhatsApp API &amp; OTP Generator</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Custom Parameters &amp; Export JSON</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Pengurus Akaun Khusus</span>
						</li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</section>

<!-- Refined FREE Trial Horizontal Banner -->
<section class="trial-strip-section">
	<div class="wrap">
		<div class="trial-strip">
			<div class="trial-info">
				<span class="trial-tag">TRY BEFORE YOU BUY</span>
				<h2>Cuba Percuma 7 Hari (RM0)</h2>
				<p>Nikmati akses ke 1 Akaun WA, 100 Mesej, 10 Auto Reply &amp; 11,000 AI Token tanpa sebarang bayaran pendahuluan.</p>
			</div>
			<div class="trial-action">
				<a href="https://portal.wajom.co/register" target="_blank" rel="noopener" class="trial-btn">
					Daftar Trial Percuma →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Masterclass Special Offer Block -->
<section class="masterclass-section">
	<div class="wrap">
		<div class="masterclass-card">
			<div class="mc-header">
				<span class="mc-pill">TAWARAN KHAS</span>
				<h3>Masterclass Chat AI RM30</h3>
				<p>Kelas Zoom Live untuk persediaan sistem automasi &amp; bonus 1.5,000,000 AI Tokens.</p>
			</div>
			<div class="mc-pricing-strip">
				<span class="was-price">RM 200</span>
				<span class="now-price">RM 30</span>
				<span class="one-time">sekali bayar</span>
			</div>
			<a class="mc-cta-btn" href="/#masterclass">
				Daftar Masterclass RM30 →
			</a>
		</div>
	</div>
</section>

<!-- Architectural All Features Grid -->
<section class="all-features-section">
	<div class="wrap">
		<div class="section-title-block">
			<h2>Keupayaan Lengkap Platform</h2>
			<p>Akses tanpa had ke seluruh suite automasi WhatsApp Wajom!:</p>
		</div>

		<div class="features-architectural-grid">
			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
				</div>
				<h4>Awan (Cloud) 24/7</h4>
				<p>Sistem berjalan automatik di pelayan cloud tanpa perlu membuka komputer atau telefon bimbit.</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>
				</div>
				<h4>Pelbagai Akaun WA</h4>
				<p>Urus dari 1 hingga 5 nombor WhatsApp secara serentak dalam satu ruang kerja terpusat.</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
				</div>
				<h4>Pegawai CS &amp; Admin</h4>
				<p>Tambah bilangan ahli pasukan khidmat pelanggan (CS) dan pentadbir tanpa batasan.</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
				</div>
				<h4>Penghantaran Mesej</h4>
				<p>Hantar mesej komunikasi dan promosi tanpa sebarang had kuota bulanan.</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
				</div>
				<h4>Siaran Pukal (Broadcast)</h4>
				<p>Hantar mesej siaran serentak terus ke mesej peribadi mahupun kumpulan WhatsApp.</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="12" x="3" y="6" rx="2"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M12 2v4"/></svg>
				</div>
				<h4>Chatbot Auto Reply &amp; AI</h4>
				<p>Respons automatik berasaskan kata kunci pintar mahupun enjin kecerdasan buatan AI.</p>
			</div>
		</div>
	</div>
</section>

<!-- Trust & Guarantee -->
<section class="guarantee-section">
	<div class="wrap">
		<div class="guarantee-inner">
			<div class="g-icon-wrapper">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
			</div>
			<h3>Jaminan 30-Hari Pulangan Wang 100%</h3>
			<p>
				Kami komited memastikan Wajom! memberikan nilai sebenar untuk perniagaan anda. Jika anda merasa sistem ini tidak membantu dalam masa 30 hari, hubungi kami untuk pemulangan wang penuh tanpa syarat.
			</p>
		</div>
	</div>
</section>

<style>
	.pricing-hero {
		padding: clamp(50px, 7vw, 80px) 0 30px;
	}

	.hero-wrap {
		text-align: center;
	}

	.eyebrow-pill {
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		border: 1px solid rgba(78, 194, 148, 0.25);
		padding: 5px 14px;
		border-radius: 999px;
		display: inline-block;
		margin-bottom: 16px;
		letter-spacing: 0.04em;
	}

	.hero-heading {
		font-family: var(--serif);
		font-size: clamp(2.2rem, 4.5vw, 3.4rem);
		font-weight: 600;
		color: var(--ink);
		margin: 0 0 16px;
		line-height: 1.12;
	}

	.hero-heading em {
		font-family: var(--accent-serif);
		color: var(--emerald-2);
		font-style: italic;
	}

	.hero-subtext {
		color: var(--ink-2);
		font-size: 1.05rem;
		max-width: 62ch;
		margin: 0 auto 36px;
		line-height: 1.6;
	}

	/* Billing Switcher */
	.billing-switcher {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 999px;
		padding: 5px;
	}

	.switch-btn {
		font-family: var(--sans);
		font-weight: 600;
		font-size: 0.88rem;
		padding: 8px 20px;
		border-radius: 999px;
		border: none;
		cursor: pointer;
		transition: all 0.18s ease;
		background: transparent;
		color: var(--ink-2);
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}

	.switch-btn.active {
		background: var(--emerald);
		color: #ffffff;
		box-shadow: 0 4px 12px var(--emerald-glow);
	}

	.discount-tag {
		font-family: var(--mono);
		font-size: 0.68rem;
		background: var(--gold-2);
		color: var(--cta-ink);
		padding: 2px 7px;
		border-radius: 4px;
		font-weight: 700;
	}

	/* Architectural Pricing Matrix */
	.pricing-matrix-section {
		padding: 40px 0 80px;
	}

	.matrix-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 20px;
		overflow: hidden;
	}

	.matrix-col {
		padding: 36px 32px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-right: 1px solid var(--rule);
		position: relative;
	}

	.matrix-col:last-child {
		border-right: none;
	}

	.matrix-col.featured {
		background: rgba(55, 159, 118, 0.04);
		border-color: rgba(78, 194, 148, 0.3);
	}

	.featured-indicator {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		background: var(--emerald);
		color: #ffffff;
		font-family: var(--mono);
		font-size: 0.7rem;
		font-weight: 700;
		text-align: center;
		padding: 4px 0;
		letter-spacing: 0.08em;
	}

	.col-head {
		margin-bottom: 28px;
	}

	.tier-label {
		font-family: var(--mono);
		font-size: 0.72rem;
		color: var(--ink-3);
		letter-spacing: 0.08em;
		font-weight: 600;
		display: block;
		margin-bottom: 8px;
	}

	.tier-label.emerald {
		color: var(--emerald-2);
	}

	.tier-name {
		font-family: var(--serif);
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--ink);
		margin: 0 0 8px;
	}

	.tier-desc {
		font-size: 0.86rem;
		color: var(--ink-3);
		line-height: 1.5;
		margin: 0 0 20px;
		min-height: 2.6em;
	}

	.price-display {
		display: flex;
		align-items: baseline;
		gap: 3px;
		margin-bottom: 4px;
	}

	.currency {
		font-family: var(--serif);
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--ink-2);
	}

	.amount {
		font-family: var(--serif);
		font-size: 2.6rem;
		font-weight: 800;
		color: var(--ink);
		line-height: 1;
	}

	.amount.emerald, .currency.emerald {
		color: var(--emerald-2);
	}

	.cadence {
		font-size: 0.88rem;
		color: var(--ink-3);
	}

	.avg-note {
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--ink-3);
		display: block;
		margin-bottom: 20px;
	}

	.avg-note.emerald {
		color: var(--emerald-2);
	}

	.tier-cta {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 12px 20px;
		border-radius: 999px;
		font-size: 0.9rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.18s ease;
		margin-top: 16px;
	}

	.tier-cta.primary {
		background: var(--emerald);
		color: #ffffff;
		box-shadow: 0 4px 14px var(--emerald-glow);
	}

	.tier-cta.primary:hover {
		background: var(--emerald-2);
		transform: translateY(-1px);
	}

	.tier-cta.secondary {
		background: var(--bg-3);
		color: var(--ink-2);
		border: 1px solid var(--rule-2);
	}

	.tier-cta.secondary:hover {
		border-color: var(--emerald);
		color: var(--ink);
		transform: translateY(-1px);
	}

	.col-body {
		border-top: 1px solid var(--rule);
		padding-top: 24px;
	}

	.spec-group-title {
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--ink-3);
		margin-bottom: 14px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.spec-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.spec-list li {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		font-size: 0.88rem;
		color: var(--ink-2);
		line-height: 1.45;
	}

	.spec-icon {
		width: 16px;
		height: 16px;
		color: var(--ink-3);
		flex-shrink: 0;
		margin-top: 2px;
	}

	.spec-icon.emerald {
		color: var(--emerald-2);
	}

	/* Trial Horizontal Strip */
	.trial-strip-section {
		padding: 0 0 60px;
	}

	.trial-strip {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 16px;
		padding: 28px 36px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
	}

	.trial-tag {
		font-family: var(--mono);
		font-size: 0.72rem;
		color: var(--emerald-2);
		letter-spacing: 0.08em;
		display: block;
		margin-bottom: 4px;
	}

	.trial-info h2 {
		font-family: var(--serif);
		font-size: 1.3rem;
		color: var(--ink);
		margin: 0 0 6px;
	}

	.trial-info p {
		font-size: 0.88rem;
		color: var(--ink-3);
		margin: 0;
	}

	.trial-btn {
		display: inline-flex;
		align-items: center;
		padding: 12px 24px;
		background: var(--emerald-dim);
		color: var(--emerald-2);
		border: 1px solid rgba(78, 194, 148, 0.3);
		border-radius: 999px;
		font-size: 0.88rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.18s ease;
		white-space: nowrap;
	}

	.trial-btn:hover {
		background: var(--emerald);
		color: #ffffff;
	}

	/* Masterclass Section */
	.masterclass-section {
		padding: 0 0 70px;
	}

	.masterclass-card {
		background: linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.02));
		border: 1px solid rgba(212, 175, 55, 0.3);
		border-radius: 20px;
		padding: 32px 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
	}

	.mc-pill {
		font-family: var(--mono);
		font-size: 0.7rem;
		color: var(--gold-2);
		background: rgba(212, 175, 55, 0.15);
		padding: 3px 10px;
		border-radius: 999px;
		display: inline-block;
		margin-bottom: 8px;
	}

	.mc-header h3 {
		font-family: var(--serif);
		font-size: 1.35rem;
		color: var(--ink);
		margin: 0 0 4px;
	}

	.mc-header p {
		font-size: 0.88rem;
		color: var(--ink-2);
		margin: 0;
	}

	.mc-pricing-strip {
		display: flex;
		align-items: baseline;
		gap: 8px;
		white-space: nowrap;
	}

	.was-price {
		font-family: var(--mono);
		font-size: 0.9rem;
		color: var(--ink-3);
		text-decoration: line-through;
	}

	.now-price {
		font-family: var(--serif);
		font-size: 2.2rem;
		font-weight: 800;
		color: var(--gold-2);
	}

	.one-time {
		font-size: 0.8rem;
		color: var(--ink-3);
	}

	.mc-cta-btn {
		display: inline-flex;
		align-items: center;
		padding: 12px 24px;
		background: var(--gold-2);
		color: var(--cta-ink);
		border-radius: 999px;
		font-size: 0.88rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.18s ease;
		white-space: nowrap;
	}

	.mc-cta-btn:hover {
		background: var(--gold);
		transform: translateY(-1px);
	}

	/* Architectural Features Grid */
	.all-features-section {
		padding: 70px 0;
		background: var(--bg-2);
		border-top: 1px solid var(--rule);
		border-bottom: 1px solid var(--rule);
	}

	.section-title-block {
		text-align: center;
		margin-bottom: 48px;
	}

	.section-title-block h2 {
		font-family: var(--serif);
		font-size: 1.8rem;
		color: var(--ink);
		margin: 0 0 10px;
	}

	.section-title-block p {
		font-size: 0.95rem;
		color: var(--ink-2);
		margin: 0;
	}

	.features-architectural-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}

	.feat-cell {
		background: var(--bg);
		border: 1px solid var(--rule-2);
		border-radius: 14px;
		padding: 24px;
		transition: border-color 0.18s ease;
	}

	.feat-cell:hover {
		border-color: var(--rule-2);
	}

	.feat-cell-icon {
		width: 36px;
		height: 36px;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 14px;
	}

	.feat-cell-icon svg {
		width: 18px;
		height: 18px;
	}

	.feat-cell h4 {
		font-family: var(--serif);
		font-size: 1.1rem;
		color: var(--ink);
		margin: 0 0 6px;
	}

	.feat-cell p {
		font-size: 0.86rem;
		color: var(--ink-3);
		margin: 0;
		line-height: 1.5;
	}

	/* Guarantee Section */
	.guarantee-section {
		padding: 70px 0;
	}

	.guarantee-inner {
		max-width: 680px;
		margin: 0 auto;
		text-align: center;
	}

	.g-icon-wrapper {
		width: 44px;
		height: 44px;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 16px;
	}

	.g-icon-wrapper svg {
		width: 22px;
		height: 22px;
	}

	.guarantee-inner h3 {
		font-family: var(--serif);
		font-size: 1.4rem;
		color: var(--ink);
		margin: 0 0 10px;
	}

	.guarantee-inner p {
		font-size: 0.92rem;
		color: var(--ink-2);
		line-height: 1.6;
		margin: 0;
	}

	/* Responsive Breakdown */
	@media (max-width: 992px) {
		.matrix-container {
			grid-template-columns: 1fr;
		}

		.matrix-col {
			border-right: none;
			border-bottom: 1px solid var(--rule);
		}

		.matrix-col:last-child {
			border-bottom: none;
		}

		.trial-strip {
			flex-direction: column;
			text-align: center;
		}

		.masterclass-card {
			flex-direction: column;
			text-align: center;
		}

		.features-architectural-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.features-architectural-grid {
			grid-template-columns: 1fr;
		}
	}
</style>


