<script lang="ts">
	import '@fontsource-variable/bricolage-grotesque/wght.css';
	import '@fontsource-variable/hanken-grotesk/wght.css';
	import '@fontsource-variable/jetbrains-mono/wght.css';
	import '@fontsource-variable/newsreader/wght-italic.css';
	import './layout.css';
	import WebGlBackground from '$lib/components/WebGlBackground.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FloatingWhatsApp from '$lib/components/FloatingWhatsApp.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/logo.png" />
</svelte:head>

<WebGlBackground />

<div class="relative z-10 flex min-h-screen flex-col">
	<Header />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>

<FloatingWhatsApp />
