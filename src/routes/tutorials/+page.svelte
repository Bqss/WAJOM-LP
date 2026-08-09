<script lang="ts">
	import { tutorials, type Tutorial } from '$lib/data/tutorials';
	import VideoModal from '$lib/components/VideoModal.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let searchQuery = $state('');
	let selectedCategory = $state('all');
	let isVideoModalOpen = $state(false);

	const categories = [
		{ id: 'all', label: 'Semua Tutorial' },
		{ id: 'Asas', label: 'Asas' },
		{ id: 'Warm Up', label: 'Warm Up' },
		{ id: 'Plan', label: 'Plan' },
		{ id: 'Campaign', label: 'Campaign' },
		{ id: 'Chat AI', label: 'Chat AI' },
		{ id: 'Tools & Extensions', label: 'Tools & Extensions' },
		{ id: 'Data Management', label: 'Data Management' },
		{ id: 'Integration', label: 'Integration' }
	];

	// Filter tutorials dynamically based on search query & category selection
	let filteredTutorials = $derived(
		tutorials.filter((item) => {
			const matchesCategory =
				selectedCategory === 'all' ||
				item.category.toLowerCase() === selectedCategory.toLowerCase();

			const q = searchQuery.trim().toLowerCase();
			const matchesQuery =
				!q ||
				item.title.toLowerCase().includes(q) ||
				item.description.toLowerCase().includes(q) ||
				item.category.toLowerCase().includes(q) ||
				item.slug.toLowerCase().includes(q);

			return matchesCategory && matchesQuery;
		})
	);

	function getCategoryCount(catId: string): number {
		if (catId === 'all') return tutorials.length;
		return tutorials.filter((t) => t.category.toLowerCase() === catId.toLowerCase()).length;
	}

	const tutorialsJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Katalog Dokumentasi & Tutorial Wajom!',
		url: 'https://wajom.co/tutorials',
		description: 'Pusat panduan rasmi penggunaan Wajom: Tetapan akaun, pautan nombor WhatsApp, warm up anti-banned, evergreen campaign, Chat AI, dan integrasi Google Form.'
	};
</script>

<SEO
	title="Katalog Dokumentasi & Tutorial — Wajom!"
	description="Pusat panduan rasmi penggunaan Wajom: Tetapan akaun, pautan nombor WhatsApp, warm up anti-banned, evergreen campaign, Chat AI, dan integrasi Google Form."
	keywords="katalog tutorial wajom, artikeltutorial whatsapp, panduan pengguna wajom, tips whatsapp automation, dokumentasi wajom"
	canonical="https://wajom.co/tutorials"  
	ogImage="https://wajom.co/logo.png"
	ogImageAlt="Dokumentasi dan Tutorial Wajom"
	ogType="website"
	jsonLd={tutorialsJsonLd}
/>

<!-- Hero Section -->
<section class="page-hero">
	<div class="wrap" style="text-align: center;">
		<div class="eyebrow-container">
			<span class="eyebrow-tag">DOKUMENTASI &amp; PANDUAN RASMI</span>
		</div>
		<h1>Pusat Tutorial <em>Penggunaan Wajom</em></h1>
		<p class="sub">
			Panduan langkah-demi-langkah dari persediaan akaun pertama, pautan nombor WhatsApp,
			automasi Chat AI, hingga teknik duplikasi fail JSON 1-klik ke seluruh pasukan anda.
		</p>

		<div class="hero-actions">
			<button
				class="cta-primary"
				type="button"
				onclick={() => (isVideoModalOpen = true)}
			>
				<svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
					<path d="M8 5v14l11-7z" />
				</svg>
				<span>Tonton Video Live Zoom Tutorial</span>
			</button>
		</div>
	</div>
</section>

<hr class="section-divider" />

<!-- Search & Filter Controls -->
<section class="filter-section">
	<div class="wrap">
		<div class="control-panel">
			<!-- Search Bar -->
			<div class="search-box">
				<svg
					class="search-icon"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
				>
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.35-4.35" />
				</svg>
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Cari tutorial mengikut kata kunci (contoh: Warm Up, Chat AI, QR Code, CSV)..."
					aria-label="Cari tutorial"
				/>
				{#if searchQuery}
					<button
						type="button"
						class="clear-btn"
						onclick={() => (searchQuery = '')}
						aria-label="Padam carian"
					>
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M18 6L6 18M6 6l12 12" />
						</svg>
					</button>
				{/if}
			</div>

			<!-- Category Filter Pills -->
			<div class="category-pills" role="tablist" aria-label="Kategori Tutorial">
				{#each categories as cat}
					{@const count = getCategoryCount(cat.id)}
					<button
						type="button"
						role="tab"
						aria-selected={selectedCategory === cat.id}
						class="cat-pill {selectedCategory === cat.id ? 'active' : ''}"
						onclick={() => (selectedCategory = cat.id)}
					>
						<span>{cat.label}</span>
						<span class="count-badge">{count}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Tutorials List Grid -->
<section class="tutorials-grid-section">
	<div class="wrap">
		<div class="grid-status-bar">
			<span class="status-indicator"></span>
			<p class="results-text">
				Menunjukkan <strong>{filteredTutorials.length}</strong> daripada {tutorials.length} tutorial
			</p>
		</div>

		{#if filteredTutorials.length === 0}
			<div class="empty-state">
				<div class="empty-icon-wrap">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
						<circle cx="11" cy="11" r="8" />
						<path d="m21 21-4.35-4.35" />
						<path d="M8 11h6" />
					</svg>
				</div>
				<h3>Tiada Tutorial Dijumpai</h3>
				<p>
					Tiada padanan untuk carian "<strong>{searchQuery}</strong>". Cuba kata kunci yang lain atau
					pilih kategori semula.
				</p>
				<button
					type="button"
					class="reset-btn"
					onclick={() => {
						searchQuery = '';
						selectedCategory = 'all';
					}}
				>
					Tunjukkan Semua Tutorial
				</button>
			</div>
		{:else}
			<div class="tutorials-grid">
				{#each filteredTutorials as item (item.id)}
					<article class="tutorial-card">
						<div class="card-header">
							<span class="tutorial-index">
								#{item.id < 10 ? `0${item.id}` : item.id}
							</span>
							<span class="category-badge">
								{item.category}
							</span>
						</div>

						<div class="card-body">
							<h2 class="card-title">
								<a href="/tutorials/{item.slug}">
									{item.title}
								</a>
							</h2>

							<p class="card-desc">
								{item.description}
							</p>
						</div>

						<div class="card-footer">
							<div class="card-meta">
								<div class="meta-item">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<circle cx="12" cy="12" r="10" />
										<polyline points="12 6 12 12 16 14" />
									</svg>
									<span>{item.duration}</span>
								</div>
								<span class="meta-divider">•</span>
								<div class="meta-item">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
										<circle cx="12" cy="7" r="4" />
									</svg>
									<span>{item.author}</span>
								</div>
							</div>

							<a href="/tutorials/{item.slug}" class="read-btn" aria-label="Baca tutorial {item.title}">
								<span>Baca Tutorial</span>
								<svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
						</div>
					</article>
				{/each}
			</div>
		{/if}
	</div>
</section>

<!-- Support Callout Banner -->
<section class="support-section">
	<div class="wrap">
		<div class="support-card">
			<div class="support-content">
				<span class="support-tag">SOKONGAN LANGSUNG</span>
				<h2>Perlukan Bantuan Peribadi Setup Wajom?</h2>
				<p>
					Jika anda perlukan bantuan teknikal tambahan, pertanyaan integrasi khas, atau ingin sesi
					panduan langsung bersama tim sokongan Wajom, hubungi kami menerusi WhatsApp.
				</p>
			</div>
			<a
				href="https://wa.me/60108102455?text=Hi%20saya%20perlukan%20bantuan%20tutorial%20Wajom"
				target="_blank"
				rel="noopener"
				class="wa-support-btn"
			>
				<svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor">
					<path
						d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"
					/>
				</svg>
				<span>Hubungi Sokongan WhatsApp</span>
			</a>
		</div>
	</div>
</section>

<VideoModal bind:isOpen={isVideoModalOpen} />

<style>
	/* Hero Section */
	.page-hero {
		padding: clamp(48px, 7vw, 84px) 0 clamp(32px, 4vw, 48px);
	}

	.eyebrow-container {
		margin-bottom: 20px;
	}

	.eyebrow-tag {
		display: inline-block;
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--emerald-2);
		letter-spacing: 0.18em;
		text-transform: uppercase;
		background: var(--emerald-dim);
		border: 1px solid rgba(78, 194, 148, 0.25);
		padding: 6px 18px;
		border-radius: var(--r-pill);
	}

	.page-hero h1 {
		font-family: var(--serif);
		font-size: clamp(2.4rem, 5.5vw, 3.6rem);
		font-weight: 700;
		color: var(--ink);
		line-height: 1.08;
		letter-spacing: -0.03em;
		margin: 0 0 18px;
	}

	.page-hero h1 em {
		font-family: var(--accent-serif);
		font-style: italic;
		font-weight: 400;
		color: var(--emerald-2);
	}

	.page-hero .sub {
		font-family: var(--sans);
		font-size: clamp(1.02rem, 1.8vw, 1.18rem);
		color: var(--ink-2);
		line-height: 1.6;
		max-width: 740px;
		margin: 0 auto 36px;
	}

	.cta-primary {
		background: var(--gold);
		color: var(--cta-ink);
		font-family: var(--sans);
		font-weight: 700;
		font-size: 0.98rem;
		padding: 14px 28px;
		border-radius: var(--r-pill);
		border: none;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: 10px;
		transition: all 0.2s var(--ease-out);
		box-shadow: 0 4px 20px rgba(212, 175, 55, 0.25);
	}

	.cta-primary:hover {
		background: var(--gold-2);
		transform: translateY(-2px);
		box-shadow: 0 6px 26px rgba(212, 175, 55, 0.38);
	}

	.btn-icon {
		width: 18px;
		height: 18px;
	}

	.section-divider {
		height: 1px;
		background: var(--rule);
		border: none;
		margin: 0;
	}

	/* Filter Section */
	.filter-section {
		padding: 32px 0 20px;
	}

	.control-panel {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.search-box {
		position: relative;
		display: flex;
		align-items: center;
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: var(--r-pill);
		padding: 4px 18px;
		max-width: 640px;
		margin: 0 auto;
		width: 100%;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.search-box:focus-within {
		border-color: var(--emerald-2);
		box-shadow: 0 0 0 3px var(--emerald-glow);
	}

	.search-icon {
		width: 18px;
		height: 18px;
		color: var(--ink-3);
		flex-shrink: 0;
		margin-right: 12px;
	}

	.search-box input {
		width: 100%;
		background: transparent;
		border: none;
		outline: none;
		color: var(--ink);
		font-family: var(--sans);
		font-size: 0.95rem;
		padding: 10px 0;
	}

	.search-box input::placeholder {
		color: var(--ink-3);
	}

	.clear-btn {
		background: var(--bg-3);
		border: 1px solid var(--rule);
		color: var(--ink-3);
		width: 24px;
		height: 24px;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		transition: color 0.15s ease, border-color 0.15s ease;
	}

	.clear-btn svg {
		width: 14px;
		height: 14px;
	}

	.clear-btn:hover {
		color: var(--ink);
		border-color: var(--rule-2);
	}

	.category-pills {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		justify-content: center;
	}

	.cat-pill {
		background: var(--bg-2);
		border: 1px solid var(--rule);
		color: var(--ink-2);
		font-family: var(--sans);
		font-size: 0.85rem;
		font-weight: 500;
		padding: 7px 15px;
		border-radius: var(--r-pill);
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		transition: all 0.18s ease;
	}

	.cat-pill:hover {
		border-color: var(--rule-2);
		color: var(--ink);
		background: var(--bg-3);
	}

	.cat-pill.active {
		background: var(--emerald-dim);
		border-color: var(--emerald-2);
		color: var(--emerald-2);
		font-weight: 600;
	}

	.count-badge {
		font-family: var(--mono);
		font-size: 0.72rem;
		color: var(--ink-3);
		background: var(--bg-3);
		padding: 2px 7px;
		border-radius: var(--r-pill);
	}

	.cat-pill.active .count-badge {
		background: rgba(78, 194, 148, 0.2);
		color: var(--emerald-2);
	}

	/* Grid Section */
	.tutorials-grid-section {
		padding: 20px 0 80px;
	}

	.grid-status-bar {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 24px;
	}

	.status-indicator {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--emerald-2);
		box-shadow: 0 0 10px var(--emerald-2);
	}

	.results-text {
		font-family: var(--mono);
		font-size: 0.82rem;
		color: var(--ink-3);
		margin: 0;
	}

	.tutorials-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
		gap: 24px;
	}

	.tutorial-card {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: var(--r-lg);
		padding: 26px;
		display: flex;
		flex-direction: column;
		position: relative;
		transition: transform 0.22s var(--ease-out), border-color 0.22s var(--ease-out),
			box-shadow 0.22s var(--ease-out);
	}

	.tutorial-card:hover {
		transform: translateY(-4px);
		border-color: rgba(78, 194, 148, 0.4);
		box-shadow: 0 16px 36px -16px rgba(0, 0, 0, 0.6), 0 0 24px rgba(78, 194, 148, 0.08);
	}

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 16px;
	}

	.tutorial-index {
		font-family: var(--mono);
		font-size: 0.82rem;
		font-weight: 700;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		border: 1px solid rgba(78, 194, 148, 0.2);
		padding: 3px 10px;
		border-radius: var(--r-sm);
	}

	.category-badge {
		font-family: var(--mono);
		font-size: 0.74rem;
		font-weight: 600;
		color: var(--ink-2);
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		padding: 4px 12px;
		border-radius: var(--r-pill);
	}

	.card-body {
		flex-grow: 1;
	}

	.card-title {
		font-family: var(--serif);
		font-size: 1.28rem;
		font-weight: 600;
		line-height: 1.35;
		margin: 0 0 12px;
		color: var(--ink);
		letter-spacing: -0.015em;
	}

	.card-title a {
		transition: color 0.2s ease;
	}

	.card-title a:hover {
		color: var(--emerald-2);
	}

	.card-desc {
		font-size: 0.9rem;
		color: var(--ink-2);
		line-height: 1.6;
		margin: 0 0 24px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.card-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 18px;
		border-top: 1px solid var(--rule);
		gap: 12px;
		flex-wrap: wrap;
	}

	.card-meta {
		display: flex;
		align-items: center;
		gap: 8px;
		font-family: var(--mono);
		font-size: 0.76rem;
		color: var(--ink-3);
		white-space: nowrap;
		flex-wrap: nowrap;
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: 5px;
		white-space: nowrap;
	}

	.meta-item svg {
		width: 14px;
		height: 14px;
		color: var(--emerald-2);
		flex-shrink: 0;
	}

	.meta-divider {
		color: var(--rule-2);
	}

	.read-btn {
		font-family: var(--sans);
		font-size: 0.84rem;
		font-weight: 600;
		color: var(--emerald-2);
		display: inline-flex;
		align-items: center;
		gap: 6px;
		white-space: nowrap;
		transition: color 0.2s ease;
		margin-left: auto;
	}

	.arrow-icon {
		width: 15px;
		height: 15px;
		transition: transform 0.2s ease;
	}

	.tutorial-card:hover .arrow-icon {
		transform: translateX(4px);
	}

	/* Empty State */
	.empty-state {
		text-align: center;
		padding: 64px 20px;
		background: var(--bg-2);
		border: 1px dashed var(--rule-2);
		border-radius: var(--r-lg);
		max-width: 580px;
		margin: 0 auto;
	}

	.empty-icon-wrap {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		color: var(--ink-3);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 20px;
	}

	.empty-icon-wrap svg {
		width: 26px;
		height: 26px;
	}

	.empty-state h3 {
		font-family: var(--serif);
		font-size: 1.35rem;
		margin: 0 0 8px;
		color: var(--ink);
	}

	.empty-state p {
		color: var(--ink-2);
		font-size: 0.92rem;
		margin: 0 0 24px;
	}

	.reset-btn {
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		color: var(--emerald-2);
		font-family: var(--mono);
		font-size: 0.82rem;
		padding: 10px 22px;
		border-radius: var(--r-pill);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.reset-btn:hover {
		background: var(--emerald-dim);
		border-color: var(--emerald-2);
	}

	/* Support Section */
	.support-section {
		padding: 0 0 80px;
	}

	.support-card {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 24px;
		padding: clamp(28px, 5vw, 44px);
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 24px;
	}

	.support-content {
		max-width: 640px;
	}

	.support-tag {
		font-family: var(--mono);
		font-size: 0.74rem;
		color: var(--gold-2);
		letter-spacing: 0.16em;
		text-transform: uppercase;
		display: block;
		margin-bottom: 8px;
	}

	.support-card h2 {
		font-family: var(--serif);
		font-size: clamp(1.4rem, 3vw, 1.8rem);
		font-weight: 700;
		color: var(--ink);
		margin: 0 0 10px;
	}

	.support-card p {
		color: var(--ink-2);
		font-size: 0.92rem;
		line-height: 1.6;
		margin: 0;
	}

	.wa-support-btn {
		background: #25d366;
		color: #ffffff;
		font-family: var(--sans);
		font-weight: 700;
		font-size: 0.92rem;
		padding: 14px 26px;
		border-radius: var(--r-pill);
		display: inline-flex;
		align-items: center;
		gap: 10px;
		box-shadow: 0 4px 16px rgba(37, 211, 102, 0.25);
		transition: all 0.2s ease;
	}

	.wa-icon {
		width: 18px;
		height: 18px;
	}

	.wa-support-btn:hover {
		background: #20bd5a;
		transform: translateY(-2px);
		box-shadow: 0 6px 22px rgba(37, 211, 102, 0.35);
	}

	@media (max-width: 640px) {
		.tutorials-grid {
			grid-template-columns: 1fr;
		}

		.support-card {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
