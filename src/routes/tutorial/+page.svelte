<script lang="ts">
	import VideoModal from '$lib/components/VideoModal.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let isVideoModalOpen = $state(false);
	let copiedJson = $state(false);

	const sampleJsonConfig = `{
  "campaign_name": "Duplikasi Leader 30 Hari",
  "version": "3.0",
  "drip_sequence": [
    { "day": 1, "type": "intro_video", "trigger": "auto" },
    { "day": 3, "type": "proof_testimonial", "trigger": "scheduled" },
    { "day": 7, "type": "closing_offer", "trigger": "scheduled" }
  ],
  "ai_rules": {
    "tone": "top_leader_malaysia",
    "objection_handling": true,
    "max_tokens": 1500000
  }
}`;

	function copyJson() {
		navigator.clipboard.writeText(sampleJsonConfig);
		copiedJson = true;
		setTimeout(() => (copiedJson = false), 2000);
	}

	const tutorialHubJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'HowTo',
		name: 'Panduan Praktikal Penggunaan Wajom WhatsApp Automation',
		description: 'Panduan langkah-demi-langkah penggunaan Wajom: Imbasan QR, tetapan kempen, latihan Chat AI, dan duplikasi fail JSON.'
	};
</script>

<SEO
	title="Pusat Tutorial & Panduan Praktikal — Wajom!"
	description="Panduan langkah-demi-langkah penggunaan Wajom: Sambungan QR WhatsApp, tetapan kempen drip, latihan Chat AI, dan import fail JSON duplikasi."
	keywords="tutorial wajom, panduan wajom, cara guna wajom, setup whatsapp bot, panduan drip campaign, wajom documentation, duplikasi json"
	canonical="https://wajom.co/tutorial"
	ogImage="https://wajom.co/og-image.jpg"
	ogImageAlt="Panduan Praktikal Wajom"
	ogType="website"
	jsonLd={tutorialHubJsonLd}
/>

<!-- Hero Section -->
<section class="page-hero">
	<div class="wrap" style="text-align: center;">
		<span class="badge-tag">Pusat Bimbingan &amp; Dokumentasi</span>
		<h1>Panduan Lengkap <em>Penggunaan Wajom</em></h1>
		<p class="sub" style="margin: 0 auto 32px;">
			Ketahui cara mengkonfigurasi akaun Wajom anda dalam masa 15 minit. Daripada pautan nombor
			WhatsApp sehingga duplikasi 1-klik ke seluruh anak team.
		</p>

		<button
			class="cta-primary"
			type="button"
			onclick={() => (isVideoModalOpen = true)}
		>
			🎬 Tonton Video Tutorial Rasmi (Zoom Live)
		</button>
	</div>
</section>

<hr class="rule" />

<!-- Step-by-Step Guide Grid -->
<section style="padding: 60px 0 80px;">
	<div class="wrap">
		<div style="text-align: center; margin-bottom: 48px;">
			<h2 class="sec-title">4 Langkah Mudah <em>Mula Beroperasi</em></h2>
			<p class="sec-desc" style="margin: 0 auto;">
				Ikuti langkah-langkah praktikal di bawah untuk mengautomasikan jualan anda hari ini.
			</p>
		</div>

		<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
			
			<!-- Step 1 -->
			<div style="background: var(--bg-2); border: 1px solid var(--rule-2); border-radius: 20px; padding: 28px;">
				<div style="width: 36px; height: 36px; border-radius: 10px; background: var(--emerald-dim); color: var(--emerald-2); font-family: var(--mono); font-weight: 700; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
					01
				</div>
				<h3 style="font-family: var(--serif); font-size: 1.3rem; margin: 0 0 10px; color: var(--ink);">
					Daftar &amp; Link WhatsApp
				</h3>
				<p style="font-size: 0.9rem; color: var(--ink-2); line-height: 1.6; margin: 0;">
					Log masuk ke dashboard portal Wajom, imbas Kod QR menggunakan aplikasi WhatsApp Business
					anda untuk menghubungkan peranti pertama.
				</p>
			</div>

			<!-- Step 2 -->
			<div style="background: var(--bg-2); border: 1px solid var(--rule-2); border-radius: 20px; padding: 28px;">
				<div style="width: 36px; height: 36px; border-radius: 10px; background: var(--emerald-dim); color: var(--emerald-2); font-family: var(--mono); font-weight: 700; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
					02
				</div>
				<h3 style="font-family: var(--serif); font-size: 1.3rem; margin: 0 0 10px; color: var(--ink);">
					Bina Kempen Evergreen
				</h3>
				<p style="font-size: 0.9rem; color: var(--ink-2); line-height: 1.6; margin: 0;">
					Cipta urutan mesej susulan (Hari 1, Hari 3, Hari 7). Tetapkan sasaran ke prospek individu
					atau terus ke WhatsApp Group pasukan anda.
				</p>
			</div>

			<!-- Step 3 -->
			<div style="background: var(--bg-2); border: 1px solid var(--rule-2); border-radius: 20px; padding: 28px;">
				<div style="width: 36px; height: 36px; border-radius: 10px; background: var(--emerald-dim); color: var(--emerald-2); font-family: var(--mono); font-weight: 700; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
					03
				</div>
				<h3 style="font-family: var(--serif); font-size: 1.3rem; margin: 0 0 10px; color: var(--ink);">
					Latih Customer Service AI
				</h3>
				<p style="font-size: 0.9rem; color: var(--ink-2); line-height: 1.6; margin: 0;">
					Masukkan maklumat produk &amp; jawapan objection biasa. AI akan automatik membalas mesej
					prospek dengan gaya perbualan Top Leader.
				</p>
			</div>

			<!-- Step 4 -->
			<div style="background: var(--bg-2); border: 1px solid var(--rule-2); border-radius: 20px; padding: 28px;">
				<div style="width: 36px; height: 36px; border-radius: 10px; background: var(--emerald-dim); color: var(--emerald-2); font-family: var(--mono); font-weight: 700; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
					04
				</div>
				<h3 style="font-family: var(--serif); font-size: 1.3rem; margin: 0 0 10px; color: var(--ink);">
					Export &amp; Duplikasi (Share Owner)
				</h3>
				<p style="font-size: 0.9rem; color: var(--ink-2); line-height: 1.6; margin: 0;">
					Eksport fail JSON tetapan kempen anda. Hantar fail ini dalam WhatsApp Group team untuk
					diimport oleh anak team dalam 1-klik.
				</p>
			</div>

		</div>
	</div>
</section>

<!-- JSON Code Showcase Section -->
<section style="padding: 40px 0 80px;">
	<div class="wrap">
		<div style="background: var(--bg-2); border: 1px solid var(--rule-2); border-radius: 24px; padding: clamp(24px, 4vw, 40px);">
			<div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 20px;">
				<div>
					<span class="mod-tag">CONTOH FAIL JSON DUPLIKASI</span>
					<h3 style="font-family: var(--serif); font-size: 1.5rem; margin: 4px 0 0; color: var(--ink);">
						Struktur Fail Duplikasi Pasukan (Share Owner)
					</h3>
				</div>
				<button
					type="button"
					onclick={copyJson}
					style="background: var(--bg-3); border: 1px solid var(--rule-2); color: var(--emerald-2); font-family: var(--mono); font-size: 0.8rem; padding: 8px 16px; border-radius: 8px; cursor: pointer;"
				>
					{copiedJson ? '✓ DISALIN!' : '📋 SALIN CONTOH JSON'}
				</button>
			</div>

			<pre style="background: var(--bg-3); border: 1px solid var(--rule); border-radius: 14px; padding: 20px; font-family: var(--mono); font-size: 0.84rem; color: var(--code-blue); overflow-x: auto; margin: 0;"><code>{sampleJsonConfig}</code></pre>
		</div>
	</div>
</section>

<VideoModal bind:isOpen={isVideoModalOpen} />
