<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	const aboutJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		name: 'Mengenai Wajom!',
		url: 'https://wajom.co/about',
		description: 'Mengenai Wajom! dan misi kami memerdekakan potensi Top Leader daripada beban pentadbiran WhatsApp di Malaysia.',
		publisher: {
			'@type': 'Organization',
			name: 'Wajom!',
			url: 'https://wajom.co/',
			logo: 'https://wajom.co/logo.png'
		}
	};
</script>

<SEO
	title="Mengenai Wajom! — Platform Automasi WhatsApp Untuk Top Leader"
	description="Mengenai Wajom! dan misi kami memerdekakan potensi Top Leader daripada beban pentadbiran WhatsApp di Malaysia. Mengembalikan masa anda untuk fokus memimpin pasukan."
	keywords="mengenai wajom, tentang wajom, misi wajom, whatsapp automation company malaysia, driplab, platform leader malaysia, automasi jualan whatsapp"
	canonical="https://wajom.co/about"
	ogImage="https://wajom.co/logo.png"
	ogImageAlt="Wajom — Platform Automasi WhatsApp"
	ogType="website"
	jsonLd={aboutJsonLd}
/>

<!-- Hero Section (Asymmetric Split Screen) -->
<section class="about-hero-section">
	<div class="wrap">
		<div class="hero-split">
			<div class="hero-text-col">
				<span class="eyebrow-pill">MISI &amp; FALSAFAH WAJOM!</span>
				<h1 class="hero-title">Leader Sepatutnya Memimpin. <em>Bukan Menjadi Admin.</em></h1>
				<p class="hero-lead">
					Kisah kami bukan tentang perisian semata-mata. Ini adalah misi memerdekakan potensi anda — mengembalikan fokus dan masa Top Leader kepada perkara utama: memimpin, membina, dan menginspirasikan pasukan.
				</p>
				<div class="hero-metrics-strip">
					<div class="metric-item">
						<span class="metric-val">24/7</span>
						<span class="metric-lbl">Awan Automasi</span>
					</div>
					<div class="metric-divider"></div>
					<div class="metric-item">
						<span class="metric-val">1-Klik</span>
						<span class="metric-lbl">Duplikasi Pasukan</span>
					</div>
					<div class="metric-divider"></div>
					<div class="metric-item">
						<span class="metric-val">100%</span>
						<span class="metric-lbl">Gaya Penutupan Jualan</span>
					</div>
				</div>
			</div>
			
			<div class="hero-visual-col">
				<div class="visual-frame">
					<img src="/about-hero-bg.jpg" alt="Automasi Leadership Wajom!" class="visual-img" />
					<div class="visual-badge">
						<div class="badge-dot"></div>
						<span>Platform Automasi No. 1 Leader Malaysia</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section 2: Realiti Harian & Pengamatan (Asymmetric Storytelling) -->
<section class="problem-section">
	<div class="wrap">
		<div class="section-label-bar">
			<span class="section-tag">PENGAMATAN KAMI</span>
			<h2>Realiti Harian Yang Memenatkan Top Leader</h2>
		</div>

		<div class="problem-bento-grid">
			<!-- Main Left Manifesto Card -->
			<div class="manifesto-card">
				<div class="manifesto-content">
					<svg class="quote-mark" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
					<p class="manifesto-text">
						"Kami melihat ramai leader hebat di Malaysia terperangkap dengan tugasan pentadbiran harian yang berulang. Semangat membina pasukan itu ada — yang kurang hanyalah sistem yang membebaskan."
					</p>
					<div class="manifesto-author">
						<strong>Pengasas Wajom!</strong>
						<span>Kuala Lumpur, Malaysia</span>
					</div>
				</div>
			</div>

			<!-- Right Column: 3 Key Pain Points -->
			<div class="pain-points-col">
				<div class="pain-tile">
					<div class="tile-num">01</div>
					<div class="tile-body">
						<h4>Follow-up Lambat &amp; Prospek Sejuk</h4>
						<p>Masa emas 5-15 minit pertama sering terlepas kerana perbualan dikendalikan secara manual, menyebabkan kadar penutupan jualan (closing rate) merudum.</p>
					</div>
				</div>

				<div class="pain-tile">
					<div class="tile-num">02</div>
					<div class="tile-body">
						<h4>Latihan Tidak Konsisten</h4>
						<p>Ahli pasukan baru belajar mengikut nasib. Penyampaian ilmu dan panduan langkah demi langkah tidak dapat diduplikasi secara tersusun.</p>
					</div>
				</div>

				<div class="pain-tile">
					<div class="tile-num">03</div>
					<div class="tile-body">
						<h4>Tenggelam Dalam Notifikasi</h4>
						<p>Mesej bertubi-tubi menuntut perhatian 24 jam sehari, menjadikan masa berkualiti bersama keluarga dan perancangan strategik terganggu.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section 3: Solusi Automasi Wajom (Bento Grid Layout) -->
<section class="solution-section">
	<div class="wrap">
		<div class="section-head center">
			<span class="section-tag">REKA BENTUK SISTEM</span>
			<h2>Lahirnya Enjin Automasi, Bukan Sekadar Alat</h2>
			<p>Wajom! dicipta untuk menduplikasi standard terbaik anda dan membina pasukan yang berdikari.</p>
		</div>

		<div class="solution-bento">
			<!-- Bento 1: Large Featured -->
			<div class="bento-tile bento-large">
				<div class="bento-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><polyline points="9 11 12 14 22 4"/></svg>
				</div>
				<span class="bento-tag">TERAS SISTEM</span>
				<h3>Evergreen Campaign &amp; Auto Follow Up</h3>
				<p>
					Modul latihan, bahan promosi, dan siri follow-up dihantar secara konsisten kepada setiap anak pasukan dan prospek pada masa yang tepat — bergerak automatik 24/7 di awan tanpa bergantung kepada peranti anda.
				</p>
			</div>

			<!-- Bento 2 -->
			<div class="bento-tile">
				<div class="bento-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="12" x="3" y="6" rx="2"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M12 2v4"/></svg>
				</div>
				<h3>Customer Service AI</h3>
				<p>Kecerdasan buatan yang mengikut 100% gaya penutupan jualan top leader untuk menjawab soalan dan menangani bantahan prospek automatik.</p>
			</div>

			<!-- Bento 3 -->
			<div class="bento-tile">
				<div class="bento-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
				</div>
				<h3>1-Click Team Duplication</h3>
				<p>Import dan duplikasi fail tetapan lengkap sistem anda kepada seluruh rangkaian anak pasukan dalam masa 1 saat sahaja.</p>
			</div>

			<!-- Bento 4 -->
			<div class="bento-tile">
				<div class="bento-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
				</div>
				<h3>Sokongan Tempatan Malaysia</h3>
				<p>Platform yang dibangunkan 100% oleh pasukan pakar tempatan yang memahami budaya perniagaan dan ekosistem usahawan Malaysia.</p>
			</div>
		</div>
	</div>
</section>

<!-- Section 4: Target Industries -->
<section class="industries-section">
	<div class="wrap">
		<div class="section-head center">
			<span class="section-tag">INDUSTRI SASARAN</span>
			<h2>Dibuat Khas Untuk Industri Berprestasi Tinggi</h2>
		</div>

		<div class="industries-grid">
			<div class="ind-card">
				<div class="ind-icon-svg">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
						<path d="M9 22v-4h6v4"/>
						<path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/>
					</svg>
				</div>
				<h4>Hartanah &amp; Agensi</h4>
				<p>Automasi temujanji viewing, susulan pembeli rumah &amp; pengurusan pangkalan data prospek.</p>
			</div>

			<div class="ind-card">
				<div class="ind-icon-svg">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
						<path d="m9 12 2 2 4-4"/>
					</svg>
				</div>
				<h4>Insurans &amp; Takaful</h4>
				<p>Peringatan pembaharuan polisi automatik, edaran bahan kempen &amp; bimbingan ejen baharu.</p>
			</div>

			<div class="ind-card">
				<div class="ind-icon-svg">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
						<circle cx="9" cy="7" r="4"/>
						<path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
						<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
					</svg>
				</div>
				<h4>MLM &amp; Rangkaian</h4>
				<p>Duplikasi skrip jualan 1-klik, modul bimbingan automatik &amp; broadcast perbualan kumpulan.</p>
			</div>

			<div class="ind-card">
				<div class="ind-icon-svg">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
						<path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
						<path d="M4 22h16"/>
						<path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
						<path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
						<path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
					</svg>
				</div>
				<h4>Pelaburan Emas &amp; Niaga</h4>
				<p>Kemaskini harga harian automatik, makluman promosi stok &amp; borang pendaftaran pelanggan.</p>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action Banner -->
<section class="about-cta-section">
	<div class="wrap">
		<div class="about-cta-box">
			<h2>Tiba Masanya Untuk Memimpin Tanpa Beban Admin.</h2>
			<p>Sertai ratusan Top Leader di Malaysia yang telah menggunakan Wajom! untuk menggandakan jualan dan duplikasi pasukan.</p>
			<div class="cta-btn-group">
				<a href="https://portal.wajom.co/register" target="_blank" rel="noopener" class="cta-primary-pill">
					Mula Trial Percuma 7 Hari →
				</a>
				<a href="/pricing" class="cta-secondary-pill">
					Lihat Pakej &amp; Harga →
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	/* Hero Section */
	.about-hero-section {
		padding: clamp(50px, 7vw, 90px) 0 60px;
	}

	.hero-split {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 48px;
		align-items: center;
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
		margin-bottom: 18px;
		letter-spacing: 0.05em;
	}

	.hero-title {
		font-family: var(--serif);
		font-size: clamp(2.2rem, 4vw, 3.2rem);
		font-weight: 600;
		color: var(--ink);
		margin: 0 0 18px;
		line-height: 1.15;
	}

	.hero-title em {
		font-family: var(--accent-serif);
		color: var(--emerald-2);
		font-style: italic;
	}

	.hero-lead {
		font-size: 1.05rem;
		color: var(--ink-2);
		line-height: 1.65;
		margin: 0 0 32px;
	}

	.hero-metrics-strip {
		display: flex;
		align-items: center;
		gap: 20px;
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 14px;
		padding: 16px 24px;
	}

	.metric-item {
		display: flex;
		flex-direction: column;
	}

	.metric-val {
		font-family: var(--serif);
		font-size: 1.4rem;
		font-weight: 700;
		color: var(--emerald-2);
		line-height: 1.2;
	}

	.metric-lbl {
		font-size: 0.78rem;
		color: var(--ink-3);
	}

	.metric-divider {
		width: 1px;
		height: 32px;
		background: var(--rule-2);
	}

	/* Visual Frame */
	.visual-frame {
		position: relative;
		border-radius: 20px;
		overflow: hidden;
		border: 1px solid var(--rule-2);
		box-shadow: 0 20px 40px -15px var(--emerald-glow);
	}

	.visual-img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}

	.visual-badge {
		position: absolute;
		bottom: 16px;
		left: 16px;
		right: 16px;
		background: rgba(10, 15, 13, 0.85);
		backdrop-filter: blur(8px);
		border: 1px solid var(--rule-2);
		padding: 10px 16px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.82rem;
		color: var(--ink);
		font-weight: 500;
	}

	.badge-dot {
		width: 8px;
		height: 8px;
		background: var(--emerald-2);
		border-radius: 50%;
		box-shadow: 0 0 10px var(--emerald-2);
	}

	/* Problem Section */
	.problem-section {
		padding: 80px 0;
		background: var(--bg-2);
		border-top: 1px solid var(--rule);
		border-bottom: 1px solid var(--rule);
	}

	.section-label-bar {
		margin-bottom: 40px;
	}

	.section-tag {
		font-family: var(--mono);
		font-size: 0.72rem;
		color: var(--emerald-2);
		letter-spacing: 0.08em;
		display: block;
		margin-bottom: 6px;
	}

	.section-label-bar h2 {
		font-family: var(--serif);
		font-size: 1.8rem;
		color: var(--ink);
		margin: 0;
	}

	.problem-bento-grid {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 32px;
	}

	.manifesto-card {
		background: var(--bg);
		border: 1px solid var(--emerald-dim);
		border-radius: 20px;
		padding: 40px;
		display: flex;
		align-items: center;
		box-shadow: 0 12px 30px -10px var(--emerald-glow);
	}

	.quote-mark {
		width: 36px;
		height: 36px;
		color: var(--emerald-2);
		margin-bottom: 20px;
		opacity: 0.7;
	}

	.manifesto-text {
		font-family: var(--serif);
		font-size: 1.25rem;
		color: var(--ink);
		line-height: 1.6;
		margin: 0 0 24px;
		font-style: italic;
	}

	.manifesto-author {
		display: flex;
		flex-direction: column;
		font-size: 0.88rem;
		color: var(--ink-2);
	}

	.manifesto-author strong {
		color: var(--emerald-2);
	}

	.pain-points-col {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.pain-tile {
		background: var(--bg);
		border: 1px solid var(--rule-2);
		border-radius: 14px;
		padding: 20px 24px;
		display: flex;
		gap: 16px;
		align-items: flex-start;
	}

	.tile-num {
		font-family: var(--mono);
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		padding: 4px 10px;
		border-radius: 8px;
		flex-shrink: 0;
	}

	.tile-body h4 {
		font-family: var(--serif);
		font-size: 1.05rem;
		color: var(--ink);
		margin: 0 0 6px;
	}

	.tile-body p {
		font-size: 0.86rem;
		color: var(--ink-3);
		margin: 0;
		line-height: 1.5;
	}

	/* Solution Section */
	.solution-section {
		padding: 90px 0;
	}

	.section-head.center {
		text-align: center;
		max-width: 64ch;
		margin: 0 auto 54px;
	}

	.section-head.center h2 {
		font-family: var(--serif);
		font-size: 2rem;
		color: var(--ink);
		margin: 0 0 10px;
	}

	.section-head.center p {
		font-size: 1rem;
		color: var(--ink-2);
		margin: 0;
	}

	.solution-bento {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
	}

	.bento-tile {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 18px;
		padding: 32px;
		display: flex;
		flex-direction: column;
		transition: border-color 0.2s ease, transform 0.2s ease;
	}

	.bento-tile:hover {
		border-color: var(--rule-2);
		transform: translateY(-2px);
	}

	.bento-large {
		grid-column: span 2;
		background: linear-gradient(135deg, var(--emerald-dim), var(--bg-2));
		border: 1px solid rgba(78, 194, 148, 0.35);
		box-shadow: 0 10px 30px -15px rgba(55, 159, 118, 0.2);
	}

	.bento-icon {
		width: 42px;
		height: 42px;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
	}

	.bento-icon svg {
		width: 22px;
		height: 22px;
	}

	.bento-tag {
		font-family: var(--mono);
		font-size: 0.7rem;
		color: var(--emerald-2);
		letter-spacing: 0.06em;
		margin-bottom: 8px;
		display: block;
	}

	.bento-tile h3 {
		font-family: var(--serif);
		font-size: 1.35rem;
		color: var(--ink);
		margin: 0 0 10px;
	}

	.bento-tile p {
		font-size: 0.9rem;
		color: var(--ink-2);
		margin: 0;
		line-height: 1.6;
	}

	/* Industries Section */
	.industries-section {
		padding: 70px 0;
		background: var(--bg-2);
		border-top: 1px solid var(--rule);
		border-bottom: 1px solid var(--rule);
	}

	.industries-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
	}

	.ind-card {
		background: var(--bg);
		border: 1px solid var(--rule-2);
		border-radius: 16px;
		padding: 24px;
		text-align: center;
		transition: border-color 0.2s ease;
	}

	.ind-card:hover {
		border-color: var(--emerald-2);
	}

	.ind-icon-svg {
		width: 44px;
		height: 44px;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 14px;
	}

	.ind-icon-svg svg {
		width: 22px;
		height: 22px;
	}

	.ind-card h4 {
		font-family: var(--serif);
		font-size: 1.1rem;
		color: var(--ink);
		margin: 0 0 8px;
	}

	.ind-card p {
		font-size: 0.84rem;
		color: var(--ink-3);
		margin: 0;
		line-height: 1.5;
	}

	/* CTA Section */
	.about-cta-section {
		padding: 90px 0;
	}

	.about-cta-box {
		background: linear-gradient(180deg, rgba(55, 159, 118, 0.12), rgba(55, 159, 118, 0.03));
		border: 1px solid rgba(55, 159, 118, 0.3);
		border-radius: 24px;
		padding: 56px 40px;
		text-align: center;
		max-width: 820px;
		margin: 0 auto;
	}

	.about-cta-box h2 {
		font-family: var(--serif);
		font-size: clamp(1.8rem, 3vw, 2.4rem);
		color: var(--ink);
		margin: 0 0 14px;
	}

	.about-cta-box p {
		font-size: 1rem;
		color: var(--ink-2);
		max-width: 58ch;
		margin: 0 auto 32px;
		line-height: 1.6;
	}

	.cta-btn-group {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16px;
		flex-wrap: wrap;
	}

	.cta-primary-pill {
		display: inline-flex;
		align-items: center;
		padding: 14px 32px;
		background: var(--emerald);
		color: #ffffff;
		border-radius: 999px;
		font-size: 0.95rem;
		font-weight: 600;
		text-decoration: none;
		box-shadow: 0 4px 14px var(--emerald-glow);
		transition: all 0.18s ease;
	}

	.cta-primary-pill:hover {
		background: var(--emerald-2);
		transform: translateY(-1px);
	}

	.cta-secondary-pill {
		display: inline-flex;
		align-items: center;
		padding: 14px 28px;
		background: var(--bg-3);
		color: var(--ink-2);
		border: 1px solid var(--rule-2);
		border-radius: 999px;
		font-size: 0.95rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.18s ease;
	}

	.cta-secondary-pill:hover {
		border-color: var(--emerald);
		color: var(--ink);
		transform: translateY(-1px);
	}

	/* Responsive Breakdown */
	@media (max-width: 992px) {
		.hero-split {
			grid-template-columns: 1fr;
			gap: 36px;
		}

		.problem-bento-grid {
			grid-template-columns: 1fr;
		}

		.solution-bento {
			grid-template-columns: 1fr;
		}

		.bento-large {
			grid-column: span 1;
		}

		.industries-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.hero-metrics-strip {
			flex-direction: column;
			align-items: flex-start;
			gap: 12px;
		}

		.metric-divider {
			display: none;
		}

		.industries-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
