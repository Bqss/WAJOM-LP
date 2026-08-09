<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		keywords?: string;
		canonical?: string;
		ogImage?: string;
		ogImageAlt?: string;
		ogType?: 'website' | 'article' | 'product';
		publishedTime?: string;
		modifiedTime?: string;
		author?: string;
		jsonLd?: Record<string, any> | Array<Record<string, any>>;
	}

	let {
		title = 'Wajom! — Platform Automasi WhatsApp & Chat AI Untuk Top Leader',
		description = 'Platform automasi WhatsApp #1 di Malaysia untuk Top Leader MLM, Hartanah, Insurans, & Emas. Automasikan follow-up jualan, CRM prospek, kempen drip evergreen, & duplikasi team 1-klik.',
		keywords = 'automasi whatsapp, whatsapp automation malaysia, bot whatsapp ai, chat ai whatsapp, follow up automatik, crm whatsapp, duplikasi mlm, software whatsapp blast, wajom, drip campaign whatsapp, auto responder whatsapp malaysia, leader mlm hartanah insurans',
		canonical = 'https://wajom.co/',
		ogImage = 'https://wajom.co/og-image.jpg',
		ogImageAlt = 'Wajom WhatsApp Automation Platform',
		ogType = 'website',
		publishedTime,
		modifiedTime,
		author = 'Wajom!',
		jsonLd
	}: Props = $props();

	const siteDomain = 'https://wajom.co';

	const formattedCanonical = $derived(
		canonical.startsWith('http')
			? canonical
			: `${siteDomain}${canonical.startsWith('/') ? canonical : '/' + canonical}`
	);

	const formattedOgImage = $derived(
		ogImage.startsWith('http')
			? ogImage
			: `${siteDomain}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`
	);
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
	<meta name="author" content={author} />
	<link rel="canonical" href={formattedCanonical} />

	<!-- Open Graph / Facebook / WhatsApp / Telegram -->
	<meta property="og:site_name" content="Wajom!" />
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={formattedCanonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={formattedOgImage} />
	<meta property="og:image:secure_url" content={formattedOgImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={ogImageAlt || title} />
	<meta property="og:locale" content="ms_MY" />

	{#if publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	{#if modifiedTime}
		<meta property="article:modified_time" content={modifiedTime} />
	{/if}

	<!-- Twitter Cards -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={formattedCanonical} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={formattedOgImage} />
	<meta name="twitter:image:alt" content={ogImageAlt || title} />

	<!-- Structured Data (JSON-LD) -->
	{#if jsonLd}
		{#if Array.isArray(jsonLd)}
			{#each jsonLd as item}
				<script type="application/ld+json">
					{@html JSON.stringify(item)}
				</script>
			{/each}
		{:else}
			<script type="application/ld+json">
				{@html JSON.stringify(jsonLd)}
			</script>
		{/if}
	{/if}
</svelte:head>
