<script lang="ts">
	import { onMount } from 'svelte';
	import SEO from '$lib/components/SEO.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let tutorial = $derived(data.tutorial);
	let prevTutorial = $derived(data.prevTutorial);
	let nextTutorial = $derived(data.nextTutorial);

	let readingProgress = $state(0);
	let activeHeadingId = $state('');
	let tocHeadings = $state<{ id: string; text: string; num: string }[]>([]);
	let zoomedImageSrc = $state<string | null>(null);

	let articleContainer: HTMLElement | null = $state(null);

	// Clean content HTML: format steps, callouts, and clean image wrappers with tight compact padding
	function processContent(html: string): string {
		if (!html) return '';

		let processed = html;

		// 1. Format Alert callout boxes
		processed = processed.replace(
			/<p>(?:<strong>)?Alert:?(?:<\/strong>)?\s*(.*?)<\/p>/gi,
			`<div class="callout-box callout-alert">
				<div class="callout-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
				</div>
				<div class="callout-body">
					<span class="callout-tag">PERHATIAN KESELAMATAN</span>
					<p>$1</p>
				</div>
			</div>`
		);

		// 2. Format Tip callout boxes
		processed = processed.replace(
			/<p>(?:<strong>)?Tips?:?(?:<\/strong>)?\s*(.*?)<\/p>/gi,
			`<div class="callout-box callout-tip">
				<div class="callout-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.663 17h4.673M12 3a7 7 0 00-7 7c0 2.38 1.157 4.49 2.946 5.8.6.44.954 1.13.954 1.87V19a1 1 0 001 1h4a1 1 0 001-1v-1.33c0-.74.354-1.43.954-1.87A7.001 7.001 0 0019 10a7 7 0 00-7-7z"/></svg>
				</div>
				<div class="callout-body">
					<span class="callout-tag">TIPS AMALAN BEST</span>
					<p>$1</p>
				</div>
			</div>`
		);

		// 3. Format numbered steps "<p>1. Text</p>", pairing optional subtext and screenshot cleanly
		processed = processed.replace(
			/<p>(\d+)\.\s*([\s\S]*?)<\/p>(?:\s*<p>(?!<img|Alert|Tips|<strong>)(.*?)<\/p>)?(?:\s*<p>(<img[^>]+>)<\/p>)?/gi,
			(match, numStr, textContent, subText, imgTag) => {
				const num = parseInt(numStr, 10);
				const formattedNum = num < 10 ? `0${num}` : `${num}`;

				let subTextBlock = subText ? `<p class="step-subtext">${subText}</p>` : '';
				let imageWrapper = '';
				if (imgTag) {
					// Mark image with step-img class to prevent double wrapping in step 4
					const styledImg = imgTag.replace('<img ', '<img class="step-img" ');
					imageWrapper = `<div class="doc-img-wrapper">${styledImg}</div>`;
				}

				const hasBody = subTextBlock || imageWrapper;

				return `
					<div class="step-unit" id="step-${num}">
						<div class="step-unit-header">
							<span class="step-num-badge">${formattedNum}</span>
							<h3 class="step-title-text">${textContent}</h3>
						</div>
						${hasBody ? `<div class="step-unit-body">${subTextBlock}${imageWrapper}</div>` : ''}
					</div>
				`;
			}
		);

		// 4. Wrap any remaining standalone images (not processed in step 3) into doc-img-wrapper ONCE
		processed = processed.replace(
			/(?:<p>)?(<img(?![^>]*class="step-img")[^>]+>)(?:<\/p>)?/gi,
			(match, imgTag) => {
				const styledImg = imgTag.replace('<img ', '<img class="step-img" ');
				return `
					<div class="standalone-img-block">
						<div class="doc-img-wrapper">
							${styledImg}
						</div>
					</div>
				`;
			}
		);

		return processed;
	}

	let formattedContent = $derived(processContent(tutorial.contentHtml));

	function handleScroll() {
		if (!articleContainer) return;

		const rect = articleContainer.getBoundingClientRect();
		const totalHeight = rect.height - window.innerHeight;
		if (totalHeight > 0) {
			const currentScroll = Math.max(0, -rect.top);
			const progress = Math.min(100, Math.round((currentScroll / totalHeight) * 100));
			readingProgress = progress;
		}

		// Update active TOC item based on scroll position of H2 sections
		const h2Elements = articleContainer.querySelectorAll('h2');
		let currentId = '';
		for (const el of h2Elements) {
			const elRect = el.getBoundingClientRect();
			if (elRect.top <= 140) {
				currentId = el.id;
			}
		}
		if (currentId) {
			activeHeadingId = currentId;
		}
	}

	onMount(() => {
		if (articleContainer) {
			// Extract clean H2 section headings for Table of Contents
			const h2Elements = articleContainer.querySelectorAll('h2');
			const list: { id: string; text: string; num: string }[] = [];

			h2Elements.forEach((h2, idx) => {
				if (!h2.id) {
					h2.id = `section-${idx + 1}`;
				}
				// Clean any residual emojis or stickers from heading text
				let text = h2.textContent || '';
				text = text.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '').trim();

				const numStr = (idx + 1) < 10 ? `0${idx + 1}` : `${idx + 1}`;

				list.push({
					id: h2.id,
					text,
					num: numStr
				});
			});

			tocHeadings = list;

			// Add click listener to images for Lightbox modal zoom
			const images = articleContainer.querySelectorAll('img');
			images.forEach((img) => {
				img.style.cursor = 'zoom-in';
				img.addEventListener('click', () => {
					zoomedImageSrc = img.getAttribute('src');
				});
			});
		}

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function scrollToHeading(id: string, e: Event) {
		e.preventDefault();
		const target = document.getElementById(id);
		if (target) {
			const y = target.getBoundingClientRect().top + window.pageYOffset - 90;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	}

	let articleJsonLd = $derived([
		{
			'@context': 'https://schema.org',
			'@type': 'Article',
			headline: tutorial.title,
			description: tutorial.description,
			url: `https://wajom.co/tutorials/${tutorial.slug}`,
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': `https://wajom.co/tutorials/${tutorial.slug}`
			},
			publisher: {
				'@type': 'Organization',
				name: 'Wajom!',
				url: 'https://wajom.co',
				logo: {
					'@type': 'ImageObject',
					url: 'https://wajom.co/logo.png'
				}
			},
			author: {
				'@type': 'Organization',
				name: 'Wajom Academy'
			}
		},
		{
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Utama',
					item: 'https://wajom.co/'
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: 'Tutorials',
					item: 'https://wajom.co/tutorials'
				},
				{
					'@type': 'ListItem',
					position: 3,
					name: tutorial.title,
					item: `https://wajom.co/tutorials/${tutorial.slug}`
				}
			]
		}
	]);
</script>

<SEO
	title={`${tutorial.title} — Panduan & Tutorial Wajom!`}
	description={tutorial.description}
	keywords={`${tutorial.category.toLowerCase()}, tutorial wajom, panduan ${tutorial.slug}, whatsapp automation, ${tutorial.title}`}
	canonical={`/tutorials/${tutorial.slug}`}
	ogImage="https://wajom.co/og-image.jpg"
	ogImageAlt={tutorial.title}
	ogType="article"
	jsonLd={articleJsonLd}
/>

<!-- Detail Hero Header -->
<header class="detail-hero">
	<div class="wrap">
		<!-- Breadcrumbs -->
		<nav class="breadcrumbs" aria-label="Breadcrumb">
			<a href="/">Utama</a>
			<svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M9 18l6-6-6-6" />
			</svg>
			<a href="/tutorials">Tutorials</a>
			<svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M9 18l6-6-6-6" />
			</svg>
			<span class="current">{tutorial.title}</span>
		</nav>

		<div class="detail-header-card">
			<div class="header-top-row">
				<div class="meta-pills">
					<span class="num-badge">TUTORIAL #{tutorial.id < 10 ? `0${tutorial.id}` : tutorial.id}</span>
					<span class="cat-pill">{tutorial.category}</span>
				</div>
				<a href="/tutorials" class="back-link">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M19 12H5M12 19l-7-7 7-7" />
					</svg>
					<span>Kembali ke Senarai</span>
				</a>
			</div>

			<h1 class="tutorial-title">{tutorial.title}</h1>
			<p class="tutorial-sub">{tutorial.description}</p>

			<div class="header-meta-row">
				<div class="meta-item">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<circle cx="12" cy="12" r="10" />
						<polyline points="12 6 12 16 14" />
					</svg>
					<span>Masa Bacaan: <strong>{tutorial.duration}</strong></span>
				</div>

				<div class="meta-item">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
						<line x1="16" y1="2" x2="16" y2="6" />
						<line x1="8" y1="2" x2="8" y2="6" />
						<line x1="3" y1="10" x2="21" y2="10" />
					</svg>
					<span>Tarikh Kemaskini: <strong>{tutorial.date}</strong></span>
				</div>

				<div class="meta-item">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
						<circle cx="12" cy="7" r="4" />
					</svg>
					<span>Penulis: <strong>{tutorial.author}</strong></span>
				</div>
			</div>
		</div>
	</div>
</header>

<!-- Main Article Body & Sticky Sidebar Layout -->
<section class="detail-body-section">
	<div class="wrap">
		<div class="detail-layout">

			<!-- Sticky Left Sidebar (Table of Contents) -->
			<aside class="sidebar-container">
				<div class="sticky-panel">

					<!-- Table of Contents Navigation Card -->
					{#if tocHeadings.length > 0}
						<div class="sidebar-card toc-card">
							<div class="toc-header">
								<span class="toc-eyebrow">NAVIGASI SEKSYEN</span>
								<h3 class="toc-title">Kandungan Tutorial</h3>
							</div>

							<nav class="toc-nav-list" aria-label="Kandungan Tutorial">
								{#each tocHeadings as item}
									<a
										href="#{item.id}"
										class="toc-nav-item {activeHeadingId === item.id ? 'active' : ''}"
										onclick={(e) => scrollToHeading(item.id, e)}
									>
										<span class="toc-num">{item.num}</span>
										<span class="toc-text">{item.text}</span>
									</a>
								{/each}
							</nav>
						</div>
					{/if}

					<!-- Reading Progress Card -->
					<div class="sidebar-card progress-card">
						<div class="progress-header">
							<span class="progress-label">PROGRESS BACAAN</span>
							<span class="progress-percent">{readingProgress}%</span>
						</div>
						<div class="progress-track">
							<div class="progress-fill" style="width: {readingProgress}%"></div>
						</div>
					</div>

					<!-- Quick Help Support Card -->
					<div class="sidebar-card help-card">
						<span class="help-tag">SOKONGAN TEKNIKAL</span>
						<h4 class="help-title">Bantuan Live Setup</h4>
						<p class="help-desc">Hubungi tim sokongan kami jika anda perlukan bantuan tetapan khas.</p>
						<a
							href="https://wa.me/60108102455?text=Hi%20saya%20nak%20tanya%20tentang%20tutorial%20{encodeURIComponent(tutorial.title)}"
							target="_blank"
							rel="noopener"
							class="sidebar-wa-btn"
						>
							<svg viewBox="0 0 24 24" fill="currentColor">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
							</svg>
							<span>Sembang WhatsApp</span>
						</a>
					</div>

				</div>
			</aside>

			<!-- Main Article View -->
			<main class="main-article-area">
				<article class="article-card" bind:this={articleContainer}>
					<div class="prose-content">
						{@html formattedContent}
					</div>
				</article>

				<!-- Prev / Next Navigation -->
				<div class="nav-bottom-grid">
					{#if prevTutorial}
						<a href="/tutorials/{prevTutorial.slug}" class="nav-bottom-card prev">
							<span class="nav-dir-label">← TUTORIAL SEBELUMNYA</span>
							<strong class="nav-item-title">{prevTutorial.title}</strong>
						</a>
					{:else}
						<div class="nav-bottom-card disabled">
							<span class="nav-dir-label">TUTORIAL PERTAMA</span>
						</div>
					{/if}

					{#if nextTutorial}
						<a href="/tutorials/{nextTutorial.slug}" class="nav-bottom-card next">
							<span class="nav-dir-label">TUTORIAL SETERUSNYA →</span>
							<strong class="nav-item-title">{nextTutorial.title}</strong>
						</a>
					{:else}
						<div class="nav-bottom-card disabled">
							<span class="nav-dir-label">TUTORIAL TERAKHIR</span>
						</div>
					{/if}
				</div>

				<!-- Support Banner -->
				<div class="detail-support-banner">
					<div class="support-banner-content">
						<h3>Perlukan Sesi Panduan Live?</h3>
						<p>
							Jika anda perlukan demonstrasi skrin atau bantuan tetapan teknikal, tim sokongan Wajom
							sedia membantu.
						</p>
					</div>
					<a
						href="https://wa.me/60108102455?text=Hi%20bantu%20saya%20dengan%20tutorial%20{encodeURIComponent(tutorial.title)}"
						target="_blank"
						rel="noopener"
						class="banner-wa-btn"
					>
						<svg viewBox="0 0 24 24" fill="currentColor">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515"/>
						</svg>
						<span>Hubungi Sokongan WhatsApp</span>
					</a>
				</div>
			</main>
		</div>
	</div>
</section>

<!-- Lightbox Zoom Modal -->
{#if zoomedImageSrc}
	<div
		class="lightbox-backdrop"
		onclick={() => (zoomedImageSrc = null)}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		onkeydown={(e) => e.key === 'Escape' && (zoomedImageSrc = null)}
	>
		<div
			class="lightbox-content"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.key === 'Escape' && (zoomedImageSrc = null)}
			role="document"
			tabindex="0"
		>
			<button
				class="lightbox-close"
				onclick={() => (zoomedImageSrc = null)}
				aria-label="Tutup gambar"
				type="button"
			>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M18 6L6 18M6 6l12 12" />
				</svg>
			</button>
			<img src={zoomedImageSrc} alt="Tangkapan Skrin Tutorial Zoomed" />
			<div class="lightbox-caption">
				<span>Klik di luar atau tekan tombol tutup untuk kembali</span>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Detail Hero */
	.detail-hero {
		padding: 32px 0 20px;
	}

	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: 6px;
		font-family: var(--mono);
		font-size: 0.78rem;
		color: var(--ink-3);
		margin-bottom: 20px;
		flex-wrap: wrap;
	}

	.breadcrumbs a {
		transition: color 0.15s ease;
	}

	.breadcrumbs a:hover {
		color: var(--emerald-2);
	}

	.chevron-icon {
		width: 14px;
		height: 14px;
		color: var(--rule-2);
	}

	.breadcrumbs .current {
		color: var(--ink-2);
		font-weight: 500;
	}

	.detail-header-card {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: var(--r-lg);
		padding: clamp(24px, 4vw, 40px);
		box-shadow: 0 16px 36px -16px rgba(0, 0, 0, 0.4);
	}

	.header-top-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		flex-wrap: wrap;
		margin-bottom: 18px;
	}

	.meta-pills {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.num-badge {
		font-family: var(--mono);
		font-size: 0.78rem;
		font-weight: 700;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		padding: 4px 12px;
		border-radius: var(--r-pill);
		border: 1px solid rgba(78, 194, 148, 0.25);
	}

	.cat-pill {
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--ink-2);
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		padding: 4px 12px;
		border-radius: var(--r-pill);
	}

	.back-link {
		font-family: var(--sans);
		font-size: 0.84rem;
		font-weight: 600;
		color: var(--ink-2);
		display: inline-flex;
		align-items: center;
		gap: 6px;
		transition: color 0.15s ease;
	}

	.back-link svg {
		width: 15px;
		height: 15px;
	}

	.back-link:hover {
		color: var(--emerald-2);
	}

	.tutorial-title {
		font-family: var(--serif);
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		font-weight: 700;
		line-height: 1.2;
		color: var(--ink);
		margin: 0 0 14px;
		letter-spacing: -0.025em;
	}

	.tutorial-sub {
		font-size: clamp(0.98rem, 1.6vw, 1.12rem);
		color: var(--ink-2);
		line-height: 1.6;
		margin: 0 0 24px;
	}

	.header-meta-row {
		display: flex;
		align-items: center;
		gap: 20px;
		flex-wrap: wrap;
		padding-top: 18px;
		border-top: 1px solid var(--rule);
		font-family: var(--mono);
		font-size: 0.8rem;
		color: var(--ink-3);
	}

	.header-meta-row .meta-item {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.header-meta-row svg {
		width: 15px;
		height: 15px;
		color: var(--emerald-2);
	}

	/* Body Layout & Sticky Sidebar */
	.detail-body-section {
		padding: 24px 0 80px;
	}

	.detail-layout {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 36px;
		align-items: start;
	}

	.sidebar-container {
		position: sticky;
		top: 84px;
		align-self: start;
		z-index: 20;
	}

	.sticky-panel {
		display: flex;
		flex-direction: column;
		gap: 16px;
		max-height: calc(100vh - 100px);
		overflow-y: auto;
	}

	.sidebar-card {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: var(--r-md);
		padding: 20px;
	}

	/* Table of Contents Box */
	.toc-card {
		padding: 20px;
	}

	.toc-header {
		margin-bottom: 14px;
		padding-bottom: 10px;
		border-bottom: 1px solid var(--rule);
	}

	.toc-eyebrow {
		font-family: var(--mono);
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		color: var(--emerald-2);
		display: block;
		margin-bottom: 4px;
	}

	.toc-title {
		font-family: var(--serif);
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--ink);
		margin: 0;
	}

	.toc-nav-list {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.toc-nav-item {
		font-size: 0.84rem;
		color: var(--ink-2);
		padding: 8px 12px;
		border-radius: var(--r-sm);
		line-height: 1.4;
		transition: all 0.15s ease;
		display: flex;
		align-items: center;
		gap: 10px;
		border-left: 3px solid transparent;
		text-decoration: none;
	}

	.toc-num {
		font-family: var(--mono);
		font-size: 0.72rem;
		font-weight: 700;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		padding: 2px 7px;
		border-radius: 4px;
		flex-shrink: 0;
	}

	.toc-text {
		flex-grow: 1;
		font-weight: 500;
	}

	.toc-nav-item:hover {
		color: var(--ink);
		background: var(--bg-3);
	}

	.toc-nav-item.active {
		color: var(--emerald-2);
		background: var(--emerald-dim);
		border-left-color: var(--emerald-2);
		font-weight: 600;
	}

	/* Progress Box */
	.progress-card {
		padding: 16px 20px;
	}

	.progress-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
	}

	.progress-label {
		font-family: var(--mono);
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		color: var(--ink-3);
		font-weight: 600;
	}

	.progress-percent {
		font-family: var(--mono);
		font-size: 0.85rem;
		color: var(--emerald-2);
		font-weight: 700;
	}

	.progress-track {
		height: 5px;
		background: var(--bg-3);
		border-radius: 999px;
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, var(--emerald) 0%, var(--emerald-2) 100%);
		border-radius: 999px;
		transition: width 0.15s ease;
	}

	/* Help Box */
	.help-card {
		background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-3) 100%);
	}

	.help-tag {
		font-family: var(--mono);
		font-size: 0.7rem;
		color: var(--gold-2);
		letter-spacing: 0.12em;
		display: block;
		margin-bottom: 6px;
	}

	.help-title {
		font-family: var(--serif);
		font-size: 0.98rem;
		color: var(--ink);
		margin: 0 0 6px;
	}

	.help-desc {
		font-size: 0.8rem;
		color: var(--ink-3);
		line-height: 1.5;
		margin: 0 0 14px;
	}

	.sidebar-wa-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		width: 100%;
		background: #25d366;
		color: #ffffff;
		font-size: 0.82rem;
		font-weight: 700;
		padding: 10px 14px;
		border-radius: var(--r-pill);
		transition: background 0.15s ease;
	}

	.sidebar-wa-btn svg {
		width: 16px;
		height: 16px;
	}

	.sidebar-wa-btn:hover {
		background: #20bd5a;
	}

	/* Main Article Card */
	.main-article-area {
		min-width: 0;
	}

	.article-card {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: var(--r-lg);
		padding: clamp(24px, 4vw, 48px);
		box-shadow: 0 16px 40px -20px rgba(0, 0, 0, 0.5);
	}

	/* Prose Content Typography & Spacing */
	:global(.prose-content) {
		color: var(--ink);
		font-size: 1.04rem;
		line-height: 1.75;
	}

	:global(.prose-content h2) {
		font-family: var(--serif);
		font-size: 1.55rem;
		font-weight: 700;
		color: var(--ink);
		margin: 44px 0 18px;
		padding-bottom: 10px;
		border-bottom: 1px solid var(--rule);
		letter-spacing: -0.025em;
		scroll-margin-top: 100px;
	}

	:global(.prose-content h2:first-of-type) {
		margin-top: 0;
	}

	:global(.prose-content h3) {
		font-family: var(--serif);
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--ink);
		margin: 28px 0 14px;
	}

	:global(.prose-content p) {
		margin: 0 0 18px;
		color: var(--ink);
	}

	:global(.prose-content strong) {
		color: var(--emerald-2);
		font-weight: 600;
	}

	:global(.prose-content a) {
		color: var(--emerald-2);
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: color 0.15s ease;
	}

	:global(.prose-content a:hover) {
		color: var(--emerald);
	}

	:global(.prose-content ul),
	:global(.prose-content ol) {
		margin: 0 0 24px 24px;
		padding: 0;
	}

	:global(.prose-content li) {
		margin-bottom: 10px;
		color: var(--ink-2);
	}

	:global(.prose-content blockquote) {
		background: var(--bg-3);
		border-left: 4px solid var(--gold);
		padding: 16px 20px;
		margin: 24px 0;
		border-radius: 0 var(--r-md) var(--r-md) 0;
		color: var(--ink-2);
		font-style: italic;
	}

	/* Step Units */
	:global(.step-unit) {
		margin: 14px 0;
		scroll-margin-top: 100px;
	}

	:global(.step-unit-header) {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 4px 0;
		background: transparent;
		border: none;
	}

	:global(.step-num-badge) {
		font-family: var(--mono);
		font-size: 0.72rem;
		font-weight: 700;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		border: 1px solid rgba(78, 194, 148, 0.25);
		padding: 0 7px;
		border-radius: 4px;
		flex-shrink: 0;
		height: 22px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
		margin: 0 !important;
	}

	:global(.step-title-text) {
		font-family: var(--sans);
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--ink);
		margin: 0 !important;
		padding: 0 !important;
		line-height: 1.4;
		flex-grow: 1;
	}

	:global(.step-unit-body) {
		margin-top: 10px;
	}

	:global(.step-subtext) {
		font-size: 0.9rem;
		color: var(--ink-2);
		margin: 0 0 10px !important;
		line-height: 1.5;
	}

	/* Single Clean Screenshot Wrapper */
	:global(.doc-img-wrapper) {
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		border-radius: 8px;
		padding: 4px;
		margin: 8px 0 0;
		overflow: hidden;
		transition: border-color 0.2s ease;
	}

	:global(.doc-img-wrapper:hover) {
		border-color: var(--emerald-2);
	}

	:global(.doc-img-wrapper img) {
		display: block;
		width: 100%;
		height: auto;
		border-radius: 6px;
		cursor: zoom-in;
		margin: 0 !important;
		border: none !important;
	}

	:global(.standalone-img-block) {
		margin: 24px 0;
	}

	/* Callout Boxes */
	:global(.callout-box) {
		display: flex;
		gap: 16px;
		padding: 18px 20px;
		border-radius: var(--r-md);
		margin: 24px 0;
		align-items: flex-start;
	}

	:global(.callout-alert) {
		background: rgba(194, 84, 80, 0.1);
		border: 1px solid rgba(194, 84, 80, 0.28);
	}

	:global(.callout-alert .callout-icon) {
		color: var(--ruby);
	}

	:global(.callout-alert .callout-tag) {
		color: var(--ruby);
	}

	:global(.callout-tip) {
		background: rgba(78, 194, 148, 0.1);
		border: 1px solid rgba(78, 194, 148, 0.28);
	}

	:global(.callout-tip .callout-icon) {
		color: var(--emerald-2);
	}

	:global(.callout-tip .callout-tag) {
		color: var(--emerald-2);
	}

	:global(.callout-icon) {
		width: 22px;
		height: 22px;
		flex-shrink: 0;
		margin-top: 2px;
	}

	:global(.callout-icon svg) {
		width: 22px;
		height: 22px;
	}

	:global(.callout-body) {
		flex-grow: 1;
	}

	:global(.callout-tag) {
		font-family: var(--mono);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		display: block;
		margin-bottom: 4px;
	}

	:global(.callout-body p) {
		margin: 0;
		font-size: 0.94rem;
		color: var(--ink);
	}

	/* Bottom Navigation */
	.nav-bottom-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		margin-top: 32px;
	}

	.nav-bottom-card {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: var(--r-md);
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 6px;
		transition: all 0.2s ease;
	}

	.nav-bottom-card:hover:not(.disabled) {
		border-color: var(--emerald-2);
		background: var(--bg-3);
		transform: translateY(-2px);
	}

	.nav-bottom-card.disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.nav-dir-label {
		font-family: var(--mono);
		font-size: 0.74rem;
		color: var(--emerald-2);
		letter-spacing: 0.08em;
	}

	.nav-item-title {
		font-family: var(--serif);
		font-size: 1.05rem;
		color: var(--ink);
		line-height: 1.3;
	}

	.nav-bottom-card.next {
		text-align: right;
	}

	/* Support Banner */
	.detail-support-banner {
		margin-top: 32px;
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: var(--r-lg);
		padding: 28px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 20px;
	}

	.support-banner-content h3 {
		font-family: var(--serif);
		font-size: 1.25rem;
		margin: 0 0 6px;
		color: var(--ink);
	}

	.support-banner-content p {
		color: var(--ink-2);
		font-size: 0.88rem;
		margin: 0;
	}

	.banner-wa-btn {
		background: #25d366;
		color: #ffffff;
		font-weight: 700;
		font-size: 0.88rem;
		padding: 12px 24px;
		border-radius: var(--r-pill);
		display: inline-flex;
		align-items: center;
		gap: 8px;
		transition: all 0.2s ease;
	}

	.banner-wa-btn svg {
		width: 16px;
		height: 16px;
	}

	.banner-wa-btn:hover {
		background: #20bd5a;
		transform: translateY(-2px);
	}

	/* Lightbox Modal */
	.lightbox-backdrop {
		position: fixed;
		inset: 0;
		z-index: 100;
		background: rgba(0, 0, 0, 0.92);
		backdrop-filter: blur(12px);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		animation: fadeIn 0.2s ease;
	}

	.lightbox-content {
		position: relative;
		max-width: 92vw;
		max-height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		outline: none;
	}

	.lightbox-content img {
		max-width: 100%;
		max-height: 80vh;
		object-fit: contain;
		border-radius: var(--r-md);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
		border: 1px solid var(--rule-2);
	}

	.lightbox-close {
		position: absolute;
		top: -44px;
		right: 0;
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		color: var(--ink);
		width: 34px;
		height: 34px;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		transition: color 0.15s ease;
	}

	.lightbox-close svg {
		width: 16px;
		height: 16px;
	}

	.lightbox-close:hover {
		color: var(--ruby);
	}

	.lightbox-caption {
		margin-top: 14px;
		font-family: var(--mono);
		font-size: 0.76rem;
		color: var(--ink-3);
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Responsive Breakdown */
	@media (max-width: 992px) {
		.detail-layout {
			grid-template-columns: 1fr;
		}

		.sidebar-container {
			display: none;
		}

		.nav-bottom-grid {
			grid-template-columns: 1fr;
		}

		.detail-support-banner {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
