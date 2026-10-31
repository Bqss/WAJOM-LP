<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { locale, t } from '$lib/i18n.svelte';

	let isYearly = $state(false);

	function copy(ms: string, en: string): string {
		return locale.current === 'en' ? en : ms;
	}

	const pricingJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: 'Pakej Langganan Wajom!',
		description: 'Platform automasi WhatsApp canggih: Trial Percuma (RM0) tanpa had masa, Pakej 1 WA (RM49/bln), 3 WA (RM89/bln), dan 5 WA (RM149/bln).',
		brand: {
			'@type': 'Brand',
			name: 'Wajom!'
		},
		offers: [
			{
				'@type': 'Offer',
				name: 'Trial Percuma',
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
	description="Pilih pakej Wajom! terbaik untuk perniagaan anda: Trial Percuma tanpa had masa (RM0), 1 WhatsApp (RM49/bln), 3 WhatsApp (RM89/bln), atau 5 WhatsApp (RM149/bln). Mula percuma!"
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
		<span class="eyebrow-pill">{t('pricing.eyebrow')}</span>
		<h1 class="hero-heading">{t('pricing.title')}</h1>
		<p class="hero-subtext">{t('pricing.sub')}</p>

		<!-- Billing Cycle Switcher -->
		<div class="billing-switcher">
			<button
				type="button"
				class="switch-btn {!isYearly ? 'active' : ''}"
				onclick={() => (isYearly = false)}
			>
				{t('pricing.monthly')}
			</button>
			<button
				type="button"
				class="switch-btn {isYearly ? 'active' : ''}"
				onclick={() => (isYearly = true)}
			>
				<span>{t('pricing.yearly')}</span>
				<span class="discount-tag">{t('pricing.saveTwoMonths')}</span>
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
					<span class="tier-label">{copy('ASAS', 'STARTER')}</span>
					<h3 class="tier-name">1 WhatsApp</h3>
					<p class="tier-desc">{copy('Sesuai untuk perniagaan solo atau peniaga kecil yang baru bermula.', 'Ideal for solo businesses or small sellers getting started.')}</p>
					<div class="price-display">
						<span class="currency">RM</span>
						<span class="amount">{isYearly ? '499' : '49'}</span>
						<span class="cadence">/{isYearly ? copy('tahun', 'year') : copy('bulan', 'month')}</span>
					</div>
					{#if isYearly}
						<span class="avg-note">RM41.58 / {copy('bulan', 'month')}</span>
					{/if}
					<a href="https://portal.wajom.co/checkout" target="_blank" rel="noopener" class="tier-cta secondary">
						{copy('Mula Dengan 1 WA', 'Start with 1 WhatsApp')} →
					</a>
				</div>

				<div class="col-body">
					<div class="spec-group-title">{copy('Termasuk Ciri Utama:', 'Includes Key Features:')}</div>
					<ul class="spec-list">
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span><strong>1 {copy('Akaun WhatsApp', 'WhatsApp Account')}</strong> {copy('disambung', 'connected')}</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>{copy('Akses Penuh Semua Ciri Wajom!', 'Full Access to Every Wajom Feature!')}</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>{copy('Broadcast Personal &amp; Kumpulan', 'Personal &amp; Group Broadcasts')}</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>AI Chatbot &amp; Auto Follow-Up</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>WhatsApp CRM &amp; Contact Grabber</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>{copy('Integrasi Webhook &amp; Form', 'Webhook &amp; Form Integrations')}</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Column 2: 3 WhatsApp (Featured Tier) -->
			<div class="matrix-col featured">
				<div class="featured-indicator">{copy('PALING POPULAR', 'MOST POPULAR')}</div>
				<div class="col-head">
					<span class="tier-label emerald">{copy('UTAMA', 'CORE')}</span>
					<h3 class="tier-name">3 WhatsApp</h3>
					<p class="tier-desc">{copy('Paling popular untuk pasukan jualan, leader &amp; usahawan yang aktif.', 'Popular with active sales teams, leaders and entrepreneurs.')}</p>
					<div class="price-display">
						<span class="currency emerald">RM</span>
						<span class="amount emerald">{isYearly ? '899' : '89'}</span>
						<span class="cadence">/{isYearly ? copy('tahun', 'year') : copy('bulan', 'month')}</span>
					</div>
					{#if isYearly}
						<span class="avg-note emerald">RM74.91 / {copy('bulan', 'month')}</span>
					{/if}
					<a href="https://portal.wajom.co/checkout" target="_blank" rel="noopener" class="tier-cta primary">
						{copy('Langgan 3 WA (Popular)', 'Subscribe to 3 WhatsApp')} →
					</a>
				</div>

				<div class="col-body">
					<div class="spec-group-title">{copy('Segala Ciri 1 WA Plus:', 'Everything in 1 WhatsApp, plus:')}</div>
					<ul class="spec-list">
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span><strong>3 {copy('Akaun WhatsApp', 'WhatsApp Accounts')}</strong> {copy('disambung', 'connected')}</span>
						</li>
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span><strong>{copy('Hantar Mesej Tanpa Had', 'Unlimited Messaging')}</strong></span>
						</li>
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Auto Reply &amp; AI Chatbot Engine</span>
						</li>
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Multi-Admin &amp; Share Dashboard</span>
						</li>
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>{copy('Sokongan VIP &amp; Backup Data', 'VIP Support &amp; Data Backup')}</span>
						</li>
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>{copy('Akses Penuh Semua Integrasi', 'Full Access to Every Integration')}</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Column 3: 5 WhatsApp -->
			<div class="matrix-col">
				<div class="col-head">
					<span class="tier-label">{copy('EMPAYAR', 'EMPIRE')}</span>
					<h3 class="tier-name">5 WhatsApp</h3>
					<p class="tier-desc">{copy('Pereka khas untuk operasi HQ syarikat, agensi &amp; perniagaan berskala besar.', 'Built for company HQs, agencies and large-scale operations.')}</p>
					<div class="price-display">
						<span class="currency">RM</span>
						<span class="amount">{isYearly ? '1499' : '149'}</span>
						<span class="cadence">/{isYearly ? copy('tahun', 'year') : copy('bulan', 'month')}</span>
					</div>
					{#if isYearly}
						<span class="avg-note">RM124.91 / {copy('bulan', 'month')}</span>
					{/if}
					<a href="https://portal.wajom.co/checkout" target="_blank" rel="noopener" class="tier-cta secondary">
						{copy('Mula Dengan 5 WA', 'Start with 5 WhatsApp')} →
					</a>
				</div>

				<div class="col-body">
					<div class="spec-group-title">{copy('Segala Ciri 3 WA Plus:', 'Everything in 3 WhatsApp, plus:')}</div>
					<ul class="spec-list">
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span><strong>5 {copy('Akaun WhatsApp', 'WhatsApp Accounts')}</strong> {copy('disambung', 'connected')}</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>{copy('Skala Pemasaran HQ &amp; Agensi', 'HQ &amp; Agency Marketing Scale')}</span>
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
							<span>Custom Parameters &amp; JSON Export</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>{copy('Pengurus Akaun Khusus', 'Dedicated Account Manager')}</span>
						</li>
					</ul>
				</div>
			</div>

		</div>
	</div>
</section>

<!-- Try Before You Buy -->
<section class="trial-strip-section">
	<div class="wrap">
		<div class="trial-strip">
			<div class="trial-info">
				<span class="trial-tag">TRY BEFORE YOU BUY</span>
				<h2>{copy('Guna Wajom!', 'Use Wajom!')} <em>{copy('tanpa risiko.', 'risk-free.')}</em></h2>
				<p>
					{copy('Test dulu automasi WhatsApp Wajom. 100 Mesej, 10 Auto Reply dan 11,000 AI Token.', 'Test Wajom WhatsApp automation first: 100 messages, 10 auto replies and 11,000 AI tokens.')}
					FREE
				</p>
				<div class="trial-action">
					<a href="https://portal.wajom.co/register" target="_blank" rel="noopener" class="trial-btn">
						{copy('Mulakan Trial Percuma', 'Start Free Trial')} →
					</a>
					<span class="trial-note">RM0 {copy('tanpa had masa', 'with no time limit')}</span>
				</div>
			</div>

			<div class="trial-preview" aria-label={copy('Ringkasan trial percuma', 'Free trial summary')}>
				<div class="trial-preview-head">
					<span class="trial-preview-label">{copy('TRIAL PERCUMA', 'FREE TRIAL')}</span>
					<span class="trial-preview-status"><span class="trial-status-dot" aria-hidden="true"></span>{copy('AKTIF', 'ACTIVE')}</span>
				</div>
				<div class="trial-preview-title">
					<span>{copy('Tanpa had masa untuk cuba', 'No time limit to try')}</span>
					<strong>RM0</strong>
				</div>
				<div class="trial-limit-grid">
					<div class="trial-limit">
						<strong>1</strong>
						<span>{copy('Akaun WA', 'WhatsApp Account')}</span>
					</div>
					<div class="trial-limit">
						<strong>100</strong>
						<span>{copy('Mesej', 'Messages')}</span>
					</div>
					<div class="trial-limit">
						<strong>10</strong>
						<span>Auto Reply</span>
					</div>
					<div class="trial-limit">
						<strong>11K</strong>
						<span>AI Tokens</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Masterclass Special Offer Block -->
<section class="masterclass-section">
	<div class="wrap">
		<div class="masterclass-card">
			<div class="mc-header">
				<span class="mc-pill">{copy('TAWARAN KHAS', 'SPECIAL OFFER')}</span>
				<h3>AI Chat Masterclass RM30</h3>
				<p>{copy('Kelas Zoom Live untuk persediaan sistem automasi &amp; bonus 1.5,000,000 AI Tokens.', 'Live Zoom class to prepare your automation system, plus a 1,500,000 AI token bonus.')}</p>
			</div>
			<div class="mc-pricing-strip">
				<span class="was-price">RM 200</span>
				<span class="now-price">RM 30</span>
				<span class="one-time">{copy('sekali bayar', 'one-time payment')}</span>
			</div>
			<a class="mc-cta-btn" href="/#masterclass">
				{copy('Daftar Masterclass RM30', 'Join AI Masterclass RM30')} →
			</a>
		</div>
	</div>
</section>

<!-- Architectural All Features Grid -->
<section class="all-features-section">
	<div class="wrap">
		<div class="section-title-block">
			<h2>{copy('Keupayaan Lengkap Platform', 'Complete Platform Capabilities')}</h2>
			<p>{copy('Akses tanpa had ke seluruh suite automasi WhatsApp Wajom!:', 'Unlimited access to the full Wajom WhatsApp automation suite:')}</p>
		</div>

		<div class="features-architectural-grid">
			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
				</div>
				<h4>Cloud 24/7</h4>
				<p>{copy('Sistem berjalan automatik di pelayan cloud tanpa perlu membuka komputer atau telefon bimbit.', 'The system runs automatically on cloud servers without keeping a computer or phone open.')}</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>
				</div>
				<h4>{copy('Pelbagai Akaun WA', 'Multiple WhatsApp Accounts')}</h4>
				<p>{copy('Urus dari 1 hingga 5 nombor WhatsApp secara serentak dalam satu ruang kerja terpusat.', 'Manage 1 to 5 WhatsApp numbers at the same time from one central workspace.')}</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
				</div>
				<h4>CS &amp; Admin Staff</h4>
				<p>{copy('Tambah bilangan ahli pasukan khidmat pelanggan (CS) dan pentadbir tanpa batasan.', 'Add unlimited customer service (CS) and admin team members.')}</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
				</div>
				<h4>{copy('Penghantaran Mesej', 'Message Delivery')}</h4>
				<p>{copy('Hantar mesej komunikasi dan promosi tanpa sebarang had kuota bulanan.', 'Send communication and promotional messages without a monthly quota.')}</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
				</div>
				<h4>Bulk Broadcast</h4>
				<p>{copy('Hantar mesej siaran serentak terus ke mesej peribadi mahupun kumpulan WhatsApp.', 'Send broadcasts directly to personal chats and WhatsApp Groups at the same time.')}</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="12" x="3" y="6" rx="2"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M12 2v4"/></svg>
				</div>
				<h4>Auto Reply &amp; AI Chatbot</h4>
				<p>{copy('Respons automatik berasaskan kata kunci pintar mahupun enjin kecerdasan buatan AI.', 'Automated responses powered by smart keywords or an AI engine.')}</p>
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
			<h3>{copy('Jaminan 30-Hari Pulangan Wang 100%', '30-Day 100% Money-Back Guarantee')}</h3>
			<p>
				{copy('Kami komited memastikan Wajom! memberikan nilai sebenar untuk perniagaan anda. Jika anda merasa sistem ini tidak membantu dalam masa 30 hari, hubungi kami untuk pemulangan wang penuh tanpa syarat.', 'We are committed to delivering real value for your business. If Wajom does not help within 30 days, contact us for a full refund with no conditions.')}
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

	/* Try Before You Buy */
	.trial-strip-section {
		padding: 0 0 70px;
	}

	.trial-strip {
		position: relative;
		overflow: hidden;
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
		align-items: stretch;
		gap: clamp(28px, 5vw, 64px);
		padding: clamp(30px, 5vw, 48px);
		background:
			radial-gradient(circle at 0% 100%, rgba(55, 159, 118, 0.16), transparent 55%),
			var(--bg-2);
		border: 1px solid rgba(78, 194, 148, 0.28);
		border-radius: 20px;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
	}

	.trial-info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.trial-tag {
		font-family: var(--mono);
		font-size: 0.72rem;
		color: var(--emerald-2);
		letter-spacing: 0.08em;
		display: block;
		margin-bottom: 10px;
	}

	.trial-info h2 {
		font-family: var(--serif);
		font-size: clamp(1.8rem, 3vw, 2.5rem);
		line-height: 1.08;
		color: var(--ink);
		max-width: 14ch;
		margin: 0 0 14px;
	}

	.trial-info h2 em {
		font-family: var(--accent-serif);
		color: var(--emerald-2);
		font-style: italic;
		font-weight: 400;
	}

	.trial-info p {
		font-size: 0.92rem;
		color: var(--ink-2);
		max-width: 52ch;
		margin: 0;
		line-height: 1.6;
	}

	.trial-action {
		display: flex;
		align-items: center;
		gap: 16px;
		flex-wrap: wrap;
		margin-top: 24px;
	}

	.trial-btn {
		display: inline-flex;
		align-items: center;
		padding: 13px 24px;
		background: var(--emerald);
		color: #ffffff;
		border: 1px solid var(--emerald);
		border-radius: 999px;
		font-size: 0.88rem;
		font-weight: 600;
		text-decoration: none;
		transition:
			background 0.18s ease,
			border-color 0.18s ease,
			transform 0.18s ease;
		white-space: nowrap;
		box-shadow: 0 8px 20px rgba(55, 159, 118, 0.2);
	}

	.trial-btn:hover {
		background: var(--emerald-2);
		border-color: var(--emerald-2);
		transform: translateY(-1px);
	}

	.trial-note {
		font-family: var(--mono);
		font-size: 0.68rem;
		color: var(--ink-3);
	}

	.trial-preview {
		position: relative;
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		border-radius: 14px;
		padding: 22px;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
	}

	.trial-preview::before {
		content: '';
		position: absolute;
		top: -1px;
		left: 22px;
		right: 22px;
		height: 2px;
		background: var(--emerald);
		border-radius: 0 0 999px 999px;
	}

	.trial-preview-head,
	.trial-preview-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.trial-preview-head {
		margin-bottom: 20px;
	}

	.trial-preview-label,
	.trial-preview-status {
		font-family: var(--mono);
		font-size: 0.68rem;
		letter-spacing: 0.06em;
	}

	.trial-preview-label {
		color: var(--ink-3);
	}

	.trial-preview-status {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		color: var(--emerald-2);
	}

	.trial-status-dot {
		width: 6px;
		height: 6px;
		background: var(--emerald-2);
		border-radius: 50%;
		box-shadow: 0 0 0 4px rgba(78, 194, 148, 0.12);
	}

	.trial-preview-title {
		padding-bottom: 18px;
		margin-bottom: 14px;
		border-bottom: 1px solid var(--rule);
	}

	.trial-preview-title span {
		font-size: 0.88rem;
		color: var(--ink-2);
	}

	.trial-preview-title strong {
		font-family: var(--serif);
		font-size: 1.55rem;
		line-height: 1;
		color: var(--emerald-2);
	}

	.trial-limit-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}

	.trial-limit {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 13px 14px;
		background: var(--bg-2);
		border: 1px solid var(--rule);
		border-radius: 10px;
	}

	.trial-limit strong {
		font-family: var(--serif);
		font-size: 1.3rem;
		line-height: 1;
		color: var(--ink);
	}

	.trial-limit span {
		font-size: 0.72rem;
		color: var(--ink-3);
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
			grid-template-columns: 1fr;
		}

		.trial-info {
			align-items: center;
			text-align: center;
		}

		.trial-info h2 {
			max-width: none;
		}

		.trial-info p {
			max-width: 58ch;
		}

		.trial-action {
			justify-content: center;
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
		.trial-strip {
			padding: 28px 22px;
		}

		.trial-action {
			flex-direction: column;
			width: 100%;
		}

		.trial-btn {
			justify-content: center;
			width: 100%;
		}
	}
</style>


