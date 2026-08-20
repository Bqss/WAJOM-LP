<script lang="ts">
	import { onMount } from 'svelte';
	import VideoModal from '$lib/components/VideoModal.svelte';
	import HeroShowcase from '$lib/components/HeroShowcase.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { initReveals, counter } from '$lib/motion';

	import {
		ArrowRight as ArrowRightIcon,
		ArrowUpRight as ArrowUpRightIcon,
		Play as PlayIcon,
		Plus as PlusIcon,
		CheckCircle as CheckCircleIcon,
		Quotes as QuotesIcon,
		ArrowsClockwise as ArrowsClockwiseIcon,
		GraduationCap as GraduationCapIcon,
		ChatsCircle as ChatsCircleIcon,
		Database as DatabaseIcon,
		TrendDown as TrendDownIcon,
		UserMinus as UserMinusIcon,
		Lightning as LightningIcon,
		Robot as RobotIcon,
		ShareNetwork as ShareNetworkIcon,
		VideoCamera as VideoCameraIcon,
		Coins as CoinsIcon,
		ChatCircleText as ChatCircleTextIcon,
		Headset as HeadsetIcon,
		ShieldCheck as ShieldCheckIcon,
		HandCoins as HandCoinsIcon
	} from 'phosphor-svelte';

	let isVideoModalOpen = $state(false);

	onMount(() => initReveals());

	const metrics = [
		{ pre: '+', value: 300, suffix: '%', label: 'Lebih banyak prospek' },
		{ pre: '', value: 24, suffix: '/7', label: 'Balasan automatik' },
		{ pre: '', value: 500, suffix: '+', label: 'Leader aktif' },
		{ pre: '', value: 95, suffix: '%', label: 'Kadar kepuasan' }
	];

	const problems = [
		{
			icon: ArrowsClockwiseIcon,
			title: 'Follow-up manual memenatkan',
			body: 'Setiap hari beratus prospek kena follow-up satu-satu. Prospek berkualiti tetap terlepas, downline pula tak tersentuh.'
		},
		{
			icon: GraduationCapIcon,
			title: 'Training anak team tak konsisten',
			body: 'Tak cukup masa nak ajar sorang-sorang. Tanpa sistem, setiap anak team belajar versi yang berbeza.'
		},
		{
			icon: ChatsCircleIcon,
			title: 'Soalan sama, setiap hari',
			body: 'Leader habiskan hari melayan benda basic. Strategi, coaching dan development team semua tergendala.'
		},
		{
			icon: DatabaseIcon,
			title: 'Database bersepah',
			body: 'Sebahagian dalam Excel, sebahagian dalam telefon, sebahagian dalam buku. Progress team tak dapat dibaca.'
		},
		{
			icon: TrendDownIcon,
			title: 'Bisnes susah nak grow',
			body: 'Sepatutnya makin ramai team makin banyak sales. Tanpa automasi, tambah team bermakna tambah beban.'
		},
		{
			icon: UserMinusIcon,
			title: 'Name listing dah habis',
			body: 'Bila leader tak tahu di mana nak cari leads berkualiti, anak team perlahan-lahan berhenti berusaha.'
		}
	];

	const shifts = [
		{
			label: 'Masa',
			was: '80% masa habis untuk kerja admin',
			now: '80% masa untuk leadership dan strategi'
		},
		{
			label: 'Follow-up',
			was: 'Manual, tak konsisten, mudah terlepas',
			now: 'Automatik dan konsisten, 24 jam sehari'
		},
		{
			label: 'Duplikasi',
			was: 'Setiap anak team buat cara sendiri',
			now: 'Satu fail JSON, seluruh team guna sistem sama'
		},
		{
			label: 'Respons',
			was: 'Prospek hilang kerana lambat dibalas',
			now: 'Balasan segera walaupun laptop tertutup'
		},
		{
			label: 'Skala',
			was: 'Sistem tersekat bila prospek bertambah',
			now: '10 hingga 10,000 prospek, beban kerja sama'
		},
		{
			label: 'Tenaga',
			was: 'Burnout kerana kerja yang berulang',
			now: 'Fokus pada growth, bukan kerja admin'
		}
	];

	const pillars = [
		{
			icon: LightningIcon,
			name: 'Evergreen Campaign',
			body: 'Hantar content follow-up tanpa had kepada prospek dan team tanpa perlu setting setiap hari. Lepas setting sekali, Wajom hantar non-stop.',
			points: ['Follow-up automatik non-stop', 'Personal dan group WhatsApp', 'Prospek tanpa had'],
			image: '/feature-drip-visual.jpg',
			alt: 'Papan pemuka Wajom memaparkan garis masa kempen drip 30 hari dan analitik penghantaran'
		},
		{
			icon: RobotIcon,
			name: 'Customer Service AI',
			body: 'AI yang menulis 100% gaya top leader anda: jawab soalan, handle objection, dan bawa prospek sampai ke closing.',
			points: ['Gaya jawapan top leader', 'Handle objection pantas', 'Closing pakej tinggi'],
			image: '/feature-ai-visual.jpg',
			alt: 'Papan pemuka Chat AI Wajom sedang membalas beberapa perbualan WhatsApp pelanggan'
		},
		{
			icon: ShareNetworkIcon,
			name: 'Share Owner',
			body: 'Team masuk dashboard leader dan tiru setting tanpa perlu tukar username atau password. Leader pula boleh semak dan betulkan setting team.',
			points: ['Akses dashboard terkawal', 'Tiru setting leader satu klik', 'Semakan dan coaching team'],
			image: '/tab-duplication-visual.jpg',
			alt: 'Paparan duplikasi tetapan kempen daripada satu akaun leader kepada 50 akaun downline'
		}
	];

	const personas = [
		{
			name: 'Leader MLM',
			body: 'Leader baru dan lama yang mahu automasi follow-up untuk seluruh team.',
			tags: ['Automasi recruitment', 'Training konsisten', 'Duplikasi team'],
			image: '/persona-mlm.jpg',
			alt: 'Seorang leader MLM membentangkan strategi kepada pasukannya di dalam bilik mesyuarat'
		},
		{
			name: 'Leader Agensi Hartanah',
			body: 'Menguruskan team agent dan mahu proses follow-up client yang standard.',
			tags: ['Lead nurturing', 'Follow-up client', 'Tracking prestasi'],
			image: '/persona-hartanah.jpg',
			alt: 'Leader agensi hartanah memegang telefon di hadapan model pembangunan hartanah'
		},
		{
			name: 'Leader Team Insurans',
			body: 'Mahu automasi follow-up client dan sistem training untuk agent bawahan.',
			tags: ['Follow-up polisi', 'Training agent', 'Retensi client'],
			image: '/persona-insurans.jpg',
			alt: 'Leader team insurans menyemak dokumen polisi di meja kerjanya'
		},
		{
			name: 'Leader Pelaburan Emas',
			body: 'Menguruskan investor dan mahu automasi proses edukasi untuk setiap prospek.',
			tags: ['Edukasi investor', 'Update pasaran', 'Perkongsian ilmu'],
			image: '/persona-emas.jpg',
			alt: 'Leader pelaburan emas memeriksa jongkong emas di atas meja'
		}
	];

	const inclusions = [
		{
			icon: VideoCameraIcon,
			title: 'Akses kelas Zoom live',
			body: 'Bimbingan terus cara setup Chat AI dan closing automatik.'
		},
		{
			icon: CoinsIcon,
			title: '1.5M AI tokens percuma',
			body: 'Bernilai RM150, dipindahkan terus ke akaun Wajom anda.'
		},
		{
			icon: ChatCircleTextIcon,
			title: 'WhatsApp group kelas',
			body: 'Notifikasi Zoom dan perbincangan bimbingan berterusan.'
		},
		{
			icon: HeadsetIcon,
			title: 'Bantuan 1-on-1',
			body: 'Sokongan persediaan akaun sebelum kelas bermula.'
		}
	];

	const faqs = [
		{
			q: 'Berapa lama masa diperlukan untuk setup Wajom?',
			a: 'Dalam 15 minit anda sudah boleh mula guna sistem automasi kami. Team support akan bantu anda step-by-step sampai semuanya berjalan sempurna.'
		},
		{
			q: 'Adakah Wajom selamat digunakan dengan WhatsApp Business?',
			a: 'Ya. Wajom dibangunkan mengikut guidelines WhatsApp dan menggunakan WhatsApp Business API yang official. Ia telah digunakan oleh ribuan business owner tanpa masalah.'
		},
		{
			q: 'Boleh saya customize message dan campaign ikut bisnes saya?',
			a: 'Boleh sepenuhnya. Anda kawal semua message, campaign flow dan branding: set tone of voice, letak logo company, dan bina campaign khusus untuk industri anda.'
		},
		{
			q: 'Bagaimana jika saya tidak tech-savvy?',
			a: 'Wajom direka untuk sesiapa sahaja. Interface kami drag-and-drop, dan anda dapat training lengkap serta support 24/7 sepanjang perjalanan.'
		},
		{
			q: 'Ada trial period atau money-back guarantee?',
			a: 'Ada. Kami tawarkan jaminan 30 hari wang dikembalikan. Jika anda tidak berpuas hati dengan hasilnya dalam 30 hari, kami refund 100% tanpa soalan.'
		},
		{
			q: 'Berapa banyak prospek yang boleh saya handle?',
			a: 'Tiada had. Sistem kami scale bersama bisnes anda, dari 100 prospek hingga 100,000 prospek, dengan efisiensi yang sama.'
		}
	];

	const promises = [
		{ icon: ShieldCheckIcon, text: 'Jaminan 30 hari wang dikembalikan' },
		{ icon: HandCoinsIcon, text: 'Tiada komitmen awal' },
		{ icon: HeadsetIcon, text: 'Sokongan 1-on-1' }
	];

	const indexJsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: 'Wajom!',
			url: 'https://wajom.co/',
			description: 'Platform automasi WhatsApp & Chat AI untuk Top Leader MLM, Hartanah, Insurans, & Emas di Malaysia.',
			inLanguage: 'ms-MY',
			publisher: {
				'@type': 'Organization',
				name: 'Wajom!',
				url: 'https://wajom.co/',
				logo: {
					'@type': 'ImageObject',
					url: 'https://wajom.co/logo.png'
				}
			}
		},
		{
			'@context': 'https://schema.org',
			'@type': 'SoftwareApplication',
			name: 'Wajom WhatsApp Automation Platform',
			operatingSystem: 'Web Cloud',
			applicationCategory: 'BusinessApplication',
			description: 'Platform automasi WhatsApp canggih: Chat AI, Evergreen Drip Campaign, CRM prospek & duplikasi team 1-klik.',
			url: 'https://wajom.co/',
			image: 'https://wajom.co/logo.png',
			offers: {
				'@type': 'AggregateOffer',
				priceCurrency: 'MYR',
				lowPrice: '0',
				highPrice: '149',
				offerCount: '4'
			},
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingValue: '4.9',
				ratingCount: '520',
				bestRating: '5',
				worstRating: '1'
			}
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Organization',
			name: 'Wajom!',
			url: 'https://wajom.co/',
			logo: 'https://wajom.co/logo.png',
			sameAs: ['https://facebook.com/wajom', 'https://instagram.com/wajom']
		}
	];
</script>

<SEO
	title="Wajom! — Platform Automasi WhatsApp & Chat AI Untuk Top Leader"
	description="Sistem automasi WhatsApp #1 di Malaysia untuk Leader MLM, Hartanah, Insurans & Emas. Automasikan follow-up jualan, CRM prospek, kempen drip evergreen & duplikasi team 1-klik."
	keywords="automasi whatsapp, whatsapp automation malaysia, bot whatsapp ai, chat ai whatsapp, follow up automatik, crm whatsapp, duplikasi mlm, software whatsapp blast, wajom, drip campaign whatsapp, auto responder whatsapp malaysia, leader mlm hartanah insurans, whatsapp marketing malaysia"
	canonical="https://wajom.co/"
	ogImage="https://wajom.co/logo.png"
	ogImageAlt="Wajom WhatsApp Automation Platform — Visual Pratinjau Canggih"
	ogType="website"
	jsonLd={indexJsonLd}
/>

<!-- ═══ ANNOUNCEMENT BAR ════════════════════════════════════ -->
<a href="/checkout" class="announce-bar">
	<span class="announce-dot"></span>
	<span class="announce-text">
		<strong>Kelas Chat AI & Automasi WhatsApp</strong> — Live Zoom, 6 Sept 2026. RM30 + 1.5M AI Token.
	</span>
	<span class="announce-cta">Daftar Sekarang <ArrowRightIcon size={14} weight="bold" /></span>
</a>

<!-- ═══ HERO ═══════════════════════════════════════════════ -->
<section class="stage" id="hero">
	<div class="stage-bg" aria-hidden="true"><HeroShowcase /></div>
	<div class="stage-scrim" aria-hidden="true"></div>

	<div class="wrap stage-grid">
		<div class="stage-copy">
			<p class="eyebrow" style="--i:0">Platform automasi WhatsApp #1 di Malaysia</p>
			<h1 style="--i:1">
				<span>Tutup laptop.</span>
				<em>Follow-up jalan sendiri.</em>
			</h1>
			<p class="sub" style="--i:2">
				Automasi WhatsApp untuk top leader. Follow-up 1,000 prospek serentak, 24 jam sehari, tanpa
				anda menaip sepatah.
			</p>
			<div class="stage-actions" style="--i:3">
				<a
					class="cta-primary"
					href="/checkout"
				>
					Mula Sekarang <ArrowRightIcon size={18} weight="bold" />
				</a>
				<button class="cta-secondary" type="button" onclick={() => (isVideoModalOpen = true)}>
					<PlayIcon size={16} weight="fill" /> Lihat Demo
				</button>
				</div>
		</div>

		<dl class="hero-stats">
			{#each metrics as m, i (m.label)}
				<div class="hero-stat" data-reveal>
					<dt>
						{#if m.pre}<span class="fix">{m.pre}</span>{/if}<span
							use:counter={{ to: m.value, duration: 1400, delay: i * 100 }}>{m.value}</span
						><span class="fix">{m.suffix}</span>
					</dt>
					<dd>{m.label}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<!-- ═══ PROBLEMS (pinned horizontal pan) ═══════════════════ -->
<section id="masalah" class="probs">
	<div class="pan">
		<div class="pan-vp">
			<div class="pan-lead wrap">
				<h2 class="ruby" data-reveal>Masalah semua <em>top leader</em>.</h2>
				<p class="sub" data-reveal>
					Siang hari dilihat sebagai pembina visi. Malam hari jadi admin tanpa henti. Ini realiti ramai
					leader di Malaysia.
				</p>
			</div>
			<div class="pan-track">
				{#each problems as p (p.title)}
					<article class="prob">
						<span class="prob-ico"><p.icon size={22} weight="bold" /></span>
						<h3>{p.title}</h3>
						<p>{p.body}</p>
					</article>
				{/each}
			</div>
		</div>
	</div>

	<div class="wrap">
		<div class="callout" data-reveal>
			<p class="callout-main">Bila leader jadi admin, anak team perlahan-lahan akan hilang.</p>
			<p class="callout-sub">
				Leader sepatutnya fokus coaching: guide anak team cara dapatkan beribu leads, handle
				objection, closing yang powerful, dan cara kejar insentif.
			</p>
		</div>
	</div>
</section>

<!-- ═══ SOLUTION (scroll-driven before/after wipe) ═════════ -->
<section id="solusi" class="solve">
	<div class="wrap lead centered">
		<h2 data-reveal>Memperkenalkan Wajom. <em>Sistem automatik 100%.</em></h2>
		<p class="sub" data-reveal>
			Marketing, follow-up, closing dan duplikasi berjalan sendiri di WhatsApp. Tatal untuk lihat apa
			yang berubah.
		</p>
	</div>

	<div class="wrap">
		<div class="shift-head" data-reveal>
			<span class="shift-tag was">Sebelum Wajom</span>
			<span class="shift-rule"></span>
			<span class="shift-tag now">Selepas Wajom</span>
		</div>

		<div class="shift-grid">
			{#each shifts as s (s.label)}
				<article class="tile">
					<span class="tile-label">{s.label}</span>
					<span class="tile-copy">
						<span class="was"><span class="sr-only">Sebelum: </span>{s.was}</span>
						<span class="now"><span class="sr-only">Selepas: </span>{s.now}</span>
					</span>
				</article>
			{/each}
		</div>

		<p class="result" data-reveal>
			<b>Hasilnya:</b> leader yang lebih produktif dan pasukan yang lebih berjaya. Anda fokus memimpin,
			sistem uruskan selebihnya.
		</p>
	</div>
</section>

<!-- ═══ HOW IT WORKS (sticky stack) ════════════════════════ -->
<section id="cara-kerja" class="how">
	<div class="wrap lead">
		<h2 data-reveal>Tiga feature yang <em>ubah keseluruhan game</em>.</h2>
		<p class="sub" data-reveal>
			Dicipta khas untuk top leader yang mahu hasil maksimum dengan usaha minimum.
		</p>
	</div>

	<div class="wrap">
		<div class="stack">
			{#each pillars as p, i (p.name)}
				{#if i > 0}<span class="probe" aria-hidden="true"></span>{/if}
				<article class="pillar">
					<div class="pillar-copy">
						<span class="pillar-ico"><p.icon size={22} weight="bold" /></span>
						<h3>{p.name}</h3>
						<p>{p.body}</p>
						<ul class="pillar-points">
							{#each p.points as point (point)}
								<li><CheckCircleIcon size={16} weight="bold" /> {point}</li>
							{/each}
						</ul>
					</div>
					<figure class="pillar-shot">
						<img
							src={p.image}
							alt={p.alt}
							width="1376"
							height="768"
							loading="lazy"
							decoding="async"
						/>
					</figure>
				</article>
			{/each}
		</div>

		<p class="synergy" data-reveal>
			Ketiga-tiga feature ini bakal <b>letupkan team sales anda 10x</b>
		</p>

		<div class="lead-link" data-reveal>
			<a class="cta-secondary" href="/detail-of-service">
				Lihat Ciri Penuh <ArrowUpRightIcon size={16} weight="bold" />
			</a>
		</div>
	</div>
</section>

<!-- ═══ AUDIENCE (bento) ═══════════════════════════════════ -->
<section id="target-audience" class="who">
	<div class="wrap lead">
		<h2 data-reveal>Siapa yang sesuai guna <em>Wajom?</em></h2>
		<p class="sub" data-reveal>
			Dicipta untuk top leader yang serius nak scale bisnes dan bawa ramai anak team jadi jaguh.
		</p>
	</div>

	<div class="wrap bento">
		{#each personas as p (p.name)}
			<article class="persona" data-reveal>
				<img src={p.image} alt={p.alt} width="1200" height="800" loading="lazy" decoding="async" />
				<div class="persona-body">
					<h3>{p.name}</h3>
					<p>{p.body}</p>
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- ═══ TESTIMONIALS (editorial band) ══════════════════════ -->
<section id="testimoni" class="voices-sec">
	<div class="wrap lead">
		<h2 data-reveal>Apa kata pemimpin <em>pasukan lain?</em></h2>
	</div>

	<div class="wrap voices">
		<figure class="voice lead-voice" data-reveal>
			<span class="voice-mark"><QuotesIcon size={30} weight="fill" /></span>
			<blockquote>
				“Dulu 4 jam sehari untuk follow-up. Sekarang sistem buat semua, saya fokus coaching. Income
				naik 300% dalam 6 bulan.”
			</blockquote>
			<figcaption>
				<span class="voice-name">Ahmad Syafiq</span>
				<span class="voice-role">Team Leader · Kuala Lumpur</span>
			</figcaption>
		</figure>

		<div class="voice-rest">
			<figure class="voice" data-reveal>
				<blockquote>
					“Team saya tak konsisten follow-up. Sekarang semua guna sistem sama, conversion naik
					250%.”
				</blockquote>
				<figcaption>
					<span class="voice-name">Siti Hajar</span>
					<span class="voice-role">Network Leader · Johor Bahru</span>
				</figcaption>
			</figure>

			<figure class="voice" data-reveal>
				<blockquote>
					“Balik modal dalam 2 bulan. Sekarang saya fokus strategi dan scaling, bukan kerja admin.”
				</blockquote>
				<figcaption>
					<span class="voice-name">Muhammad Rizal</span>
					<span class="voice-role">Business Owner · Penang</span>
				</figcaption>
			</figure>
		</div>
	</div>
</section>

<!-- ═══ MASTERCLASS OFFER (ticket) ═════════════════════════ -->
<section id="masterclass" class="offer">
	<div class="wrap lead centered">
		<p class="eyebrow gold" data-reveal>Tawaran khas masterclass</p>
		<h2 data-reveal>Wajom Mastery <em>Kelas Chat AI</em></h2>
		<p class="sub" data-reveal>
			Kelas praktikal Zoom live untuk memiliki sistem automasi penutupan jualan anda sendiri.
		</p>
	</div>

	<div class="wrap">
		<div class="ticket" data-reveal>
			<div class="ticket-main">
				<span class="ticket-badge">Pakej edisi terhad</span>
				<h3>Praktik Chat AI, voice closing dan duplikasi pasukan</h3>
				<p>
					Belajar terus cara konfigurasi Chat AI Wajom untuk automasi jualan, jawab soalan prospek 24
					jam, dan duplikasi strategi ke seluruh anak team anda.
				</p>

				<div class="incl">
					{#each inclusions as item (item.title)}
						<div class="incl-item">
							<span class="incl-ico"><item.icon size={18} weight="bold" /></span>
							<div>
								<strong>{item.title}</strong>
								<p>{item.body}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<aside class="stub">
				<span class="stub-label">Harga masuk</span>
				<span class="stub-old">RM 200.00</span>
				<span class="stub-now">RM 30.00</span>
				<span class="stub-save">Jimat RM 170.00</span>
				<a class="cta-primary" href="/checkout">
					Daftar Kelas RM30 <ArrowRightIcon size={18} weight="bold" />
				</a>
				<p class="stub-fine">Termasuk 1.5M AI tokens bernilai RM150.</p>
			</aside>
		</div>
	</div>
</section>

<!-- ═══ FAQ ════════════════════════════════════════════════ -->
<section id="faq" class="faq">
	<div class="wrap lead centered">
		<h2 data-reveal>Masih ada <em>soalan?</em></h2>
		<p class="sub" data-reveal>
			Berikut jawapan kepada soalan yang paling kerap ditanya sebelum mula.
		</p>
	</div>

	<div class="wrap qa">
		{#each faqs as item (item.q)}
			<details class="q" data-reveal>
				<summary>
					<span>{item.q}</span>
					<span class="q-mark"><PlusIcon size={15} weight="bold" /></span>
				</summary>
				<div class="q-body"><p>{item.a}</p></div>
			</details>
		{/each}
	</div>
</section>

<!-- ═══ CLOSING ════════════════════════════════════════════ -->
<section class="closing" id="final-cta">
	<div class="wrap closing-in">
		<h2 data-reveal>Jom transform bisnes <em>sekarang.</em></h2>
		<p class="sub" data-reveal>
			Wajom adalah jawapan kepada masalah scaling yang anda hadapi hari ini.
		</p>
		<div class="closing-cta" data-reveal>
			<a
				class="cta-primary big"
				href="/checkout"
			>
				Mula Sekarang <ArrowRightIcon size={19} weight="bold" />
			</a>
		</div>
		<ul class="promises" data-reveal>
			{#each promises as p (p.text)}
				<li><p.icon size={17} weight="bold" /> {p.text}</li>
			{/each}
		</ul>
	</div>
</section>

<VideoModal bind:isOpen={isVideoModalOpen} />

<style>
	/* ═══ Announcement Bar ════════════════════════════════════ */
	.announce-bar {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 9px 20px;
		background: linear-gradient(90deg, rgba(55, 159, 118, 0.12), rgba(212, 175, 55, 0.10));
		border-bottom: 1px solid var(--rule-2);
		font-family: var(--sans);
		font-size: 0.82rem;
		color: var(--ink-2);
		text-decoration: none;
		transition: background 0.2s ease;
		flex-wrap: wrap;
	}

	.announce-bar:hover {
		background: linear-gradient(90deg, rgba(55, 159, 118, 0.18), rgba(212, 175, 55, 0.15));
	}

	.announce-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--emerald-2);
		box-shadow: 0 0 0 3px rgba(78, 194, 148, 0.25);
		animation: pulse-beacon 2s ease-out infinite;
		flex-shrink: 0;
	}

	.announce-text strong {
		color: var(--ink);
		font-weight: 700;
	}

	.announce-cta {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		font-weight: 700;
		color: var(--gold-2);
		white-space: nowrap;
	}

	.announce-cta :global(svg) {
		transition: transform 0.18s ease;
	}

	.announce-bar:hover .announce-cta :global(svg) {
		transform: translateX(3px);
	}

	@media (max-width: 600px) {
		.announce-bar {
			font-size: 0.78rem;
			gap: 8px;
			padding: 8px 16px;
		}

		.announce-cta {
			display: none;
		}
	}

	/* ═══ Type and surface primitives for this page ═══════════ */
	h1,
	h2,
	h3 {
		font-family: var(--serif);
		font-weight: 600;
		letter-spacing: -0.025em;
		color: var(--ink);
		margin: 0;
		/* Reserve room for the descenders in the Newsreader italic accents. */
		padding-bottom: 0.06em;
	}

	em {
		font-family: var(--accent-serif);
		font-style: italic;
		font-weight: 400;
		font-size: 1.03em;
		color: var(--emerald-2);
		letter-spacing: -0.01em;
		line-height: 1.14;
	}

	h2 {
		font-size: clamp(1.75rem, 3.6vw, 2.7rem);
		line-height: 1.12;
		text-wrap: balance;
	}

	h2.ruby em {
		color: var(--ruby);
	}

	h3 {
		font-size: clamp(1.08rem, 1.6vw, 1.32rem);
		line-height: 1.22;
	}

	.sub {
		font-family: var(--sans);
		font-size: clamp(0.97rem, 1.2vw, 1.09rem);
		line-height: 1.6;
		color: var(--ink-2);
		max-width: 58ch;
		margin: 14px 0 0;
		text-wrap: pretty;
	}

	.eyebrow {
		font-family: var(--mono);
		font-size: 0.72rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--emerald);
		margin: 0 0 18px;
	}

	.eyebrow.gold {
		color: var(--gold-2);
	}

	.lead {
		max-width: 46rem;
		margin-bottom: clamp(28px, 4vw, 52px);
	}

	.lead.centered {
		margin-inline: auto;
		text-align: center;
	}

	.lead.centered .sub {
		margin-inline: auto;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}

	.cta-primary,
	.cta-secondary {
		display: inline-flex;
		align-items: center;
		gap: 9px;
	}

	.cta-primary :global(svg),
	.cta-secondary :global(svg) {
		flex: none;
		transition: translate 0.18s var(--ease-out);
	}

	.cta-primary:hover :global(svg) {
		translate: 3px 0;
	}

	.cta-primary.big {
		font-size: 1.05rem;
		padding: 17px 38px;
	}

	summary:focus-visible,
	a:focus-visible,
	button:focus-visible {
		outline: 2px solid var(--emerald-2);
		outline-offset: 3px;
		border-radius: var(--r-sm);
	}

	/* ═══ Hero ════════════════════════════════════════════════ */
	.stage {
		position: relative;
		min-height: calc(100dvh - var(--nav-h));
		display: grid;
		align-items: center;
		justify-items: center;
		padding-block: clamp(18px, 4vh, 52px) clamp(34px, 7vh, 84px);
		overflow: clip;
	}

	.stage-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
		display: grid;
		place-items: center;
		pointer-events: none;
	}

	.stage-scrim {
		position: absolute;
		inset: 0;
		z-index: 1;
		pointer-events: none;
		background: linear-gradient(
			180deg,
			color-mix(in oklab, var(--bg) 55%, transparent),
			color-mix(in oklab, var(--bg) 12%, transparent) 58%,
			color-mix(in oklab, var(--bg) 62%, transparent)
		);
	}

	.stage-grid {
		position: relative;
		z-index: 2;
		display: grid;
		gap: clamp(30px, 5vw, 58px);
		justify-items: center;
		text-align: center;
	}

	.stage-copy {
		max-width: 38rem;
	}

	.stage h1 {
		font-size: clamp(2.1rem, 5.1vw, 3.5rem);
		line-height: 1.06;
		letter-spacing: -0.035em;
		margin-bottom: 18px;
		padding-bottom: 0.09em;
	}

	.stage h1 span,
	.stage h1 em {
		display: block;
	}

	.stage .sub {
		max-width: 42ch;
		margin-top: 0;
		margin-inline: auto;
	}

	.stage-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 30px;
		justify-content: center;
	}

	@keyframes stage-in {
		from {
			opacity: 0;
			translate: 0 20px;
		}
		to {
			opacity: 1;
			translate: 0 0;
		}
	}

	.stage-copy > * {
		animation: stage-in 0.9s var(--ease-out) both;
		animation-delay: calc(var(--i, 0) * 95ms + 80ms);
	}

	/* ═══ Hero Stats ═════════════════════════════════════════ */
	.hero-stats {
		position: relative;
		z-index: 2;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
		margin: 0;
		padding: 24px;
		border-radius: var(--r-lg);
		border: 1px solid var(--rule-2);
		background: color-mix(in oklab, var(--bg) 72%, transparent);
		backdrop-filter: blur(16px) saturate(140%);
		animation: stage-in 0.9s var(--ease-out) both;
		animation-delay: 500ms;
	}

	.hero-stat dt {
		font-family: var(--serif);
		font-weight: 700;
		font-size: clamp(1.65rem, 3.2vw, 2.45rem);
		line-height: 1;
		letter-spacing: -0.03em;
		color: var(--emerald-2);
		font-variant-numeric: tabular-nums;
	}

	.hero-stat .fix {
		color: var(--emerald);
		font-size: 0.6em;
	}

	.hero-stat dd {
		margin: 6px 0 0;
		font-size: 0.83rem;
		line-height: 1.35;
		color: var(--ink-3);
	}

	@media (min-width: 760px) {
		.hero-stats {
			grid-template-columns: repeat(4, 1fr);
		}

		.hero-stat {
			padding-inline: clamp(14px, 2vw, 26px);
			text-align: center;
		}

		.hero-stat + .hero-stat {
			border-inline-start: 1px solid var(--rule);
		}
	}

	/* ═══ Problems: pinned horizontal pan ═════════════════════ */
	.pan-lead {
		margin-bottom: clamp(22px, 3vw, 38px);
		padding-top: clamp(32px, 5vw, 56px);
	}

	.pan {
		position: relative;
	}

	.pan-vp {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		overflow-x: auto;
		overflow-y: hidden;
		scroll-snap-type: x mandatory;
		scrollbar-width: thin;
		scrollbar-color: var(--rule-2) transparent;
		padding-block: 6px;
	}

	.pan-track {
		display: flex;
		gap: 18px;
		padding-inline: var(--gut);
	}

	.prob {
		flex: 0 0 min(80vw, 330px);
		scroll-snap-align: center;
		display: flex;
		flex-direction: column;
		padding: clamp(20px, 2.4vw, 28px);
		border-radius: var(--r-lg);
		border: 1px solid var(--rule-2);
		background: color-mix(in oklab, var(--bg-2) 84%, transparent);
		backdrop-filter: blur(12px) saturate(140%);
		transition:
			border-color 0.25s var(--ease-out),
			translate 0.25s var(--ease-out);
	}

	.prob:hover {
		border-color: color-mix(in oklab, var(--ruby) 42%, transparent);
		translate: 0 -3px;
	}

	.prob-ico {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: var(--r-md);
		color: var(--ruby);
		background: color-mix(in oklab, var(--ruby) 14%, transparent);
		border: 1px solid color-mix(in oklab, var(--ruby) 26%, transparent);
		margin-bottom: 16px;
	}

	.prob h3 {
		margin-bottom: 8px;
	}

	.prob p {
		margin: 0;
		font-size: 0.91rem;
		line-height: 1.55;
		color: var(--ink-2);
	}

	@keyframes pan-x {
		from {
			translate: 0 0;
		}
		to {
			translate: calc(100vw - 100%) 0;
		}
	}

	@media (min-width: 1024px) and (prefers-reduced-motion: no-preference) {
		@supports (animation-timeline: view()) {
			.pan {
				height: 300vh;
				view-timeline-name: --pan;
				view-timeline-axis: block;
			}

			.pan-vp {
				position: sticky;
				top: var(--nav-h);
				height: calc(100dvh - var(--nav-h));
				overflow: hidden;
				scroll-snap-type: none;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
			}

			.pan-lead {
				width: 100%;
				padding-top: 0;
				margin-bottom: clamp(18px, 2.4vw, 30px);
				flex-shrink: 0;
			}

			.pan-track {
				width: max-content;
				animation: pan-x linear both;
				animation-timeline: --pan;
				animation-range: contain 0% contain 100%;
				will-change: translate;
				flex-shrink: 0;
			}

			.prob {
				flex: 0 0 366px;
			}
		}
	}

	.callout {
		margin-top: clamp(28px, 4vw, 52px);
		padding: clamp(22px, 3vw, 34px);
		border-radius: var(--r-lg);
		text-align: center;
		border: 1px solid color-mix(in oklab, var(--ruby) 34%, transparent);
		background: linear-gradient(
			180deg,
			color-mix(in oklab, var(--ruby) 12%, transparent),
			transparent
		);
	}

	.callout-main {
		margin: 0 0 10px;
		font-family: var(--serif);
		font-weight: 600;
		font-size: clamp(1.14rem, 2.1vw, 1.48rem);
		line-height: 1.26;
		color: var(--ruby);
		text-wrap: balance;
	}

	.callout-sub {
		margin: 0 auto;
		max-width: 68ch;
		font-size: 0.94rem;
		line-height: 1.6;
		color: var(--ink-2);
	}

	/* ═══ Solution: scroll-driven before/after wipe ═══════════ */
	.shift-head {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 14px;
		margin-bottom: 16px;
	}

	.shift-tag {
		font-family: var(--mono);
		font-size: 0.71rem;
		padding: 5px 12px;
		border-radius: var(--r-pill);
	}

	.shift-tag.was {
		color: var(--ruby);
		background: color-mix(in oklab, var(--ruby) 14%, transparent);
		border: 1px solid color-mix(in oklab, var(--ruby) 28%, transparent);
	}

	.shift-tag.now {
		color: var(--emerald-2);
		background: color-mix(in oklab, var(--emerald) 15%, transparent);
		border: 1px solid color-mix(in oklab, var(--emerald) 32%, transparent);
	}

	.shift-rule {
		height: 1px;
		background: linear-gradient(
			90deg,
			color-mix(in oklab, var(--ruby) 45%, transparent),
			color-mix(in oklab, var(--emerald) 45%, transparent)
		);
	}

	.shift-grid {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		gap: 14px;
	}

	.shift-grid::before {
		content: "";
		position: absolute;
		top: -10px;
		bottom: -10px;
		left: var(--wipe);
		width: 1px;
		translate: -0.5px 0;
		opacity: 0;
		pointer-events: none;
		background: linear-gradient(
			180deg,
			transparent,
			var(--emerald-2) 18%,
			var(--emerald-2) 82%,
			transparent
		);
		box-shadow: 0 0 22px 3px color-mix(in oklab, var(--emerald-2) 40%, transparent);
	}

	.tile {
		padding: clamp(18px, 2.2vw, 24px);
		border-radius: var(--r-lg);
		border: 1px solid var(--rule-2);
		background: color-mix(in oklab, var(--bg-2) 80%, transparent);
		backdrop-filter: blur(10px) saturate(140%);
	}

	.tile-label {
		display: block;
		font-family: var(--mono);
		font-size: 0.7rem;
		color: var(--ink-3);
		margin-bottom: 10px;
	}

	.tile-copy {
		display: grid;
		font-size: 0.95rem;
		line-height: 1.5;
	}

	.tile-copy > span {
		grid-area: 1 / 1;
	}

	.tile-copy .was {
		color: var(--ink-3);
		clip-path: inset(0 0 0 var(--wipe));
	}

	.tile-copy .now {
		color: var(--ink);
		clip-path: inset(0 calc(100% - var(--wipe)) 0 0);
	}

	@keyframes wipe-through {
		from {
			--wipe: 0%;
		}
		to {
			--wipe: 100%;
		}
	}

	@keyframes scan-glow {
		0% {
			opacity: 0;
		}
		14%,
		86% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		@supports (animation-timeline: view()) {
			.shift-grid {
				animation: wipe-through linear both;
				animation-timeline: view();
				animation-range: entry 22% cover 52%;
			}

			.shift-grid::before {
				animation: scan-glow linear both;
				animation-timeline: view();
				animation-range: entry 22% cover 52%;
			}
		}
	}

	@media (min-width: 700px) {
		.shift-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.shift-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.result {
		margin: clamp(26px, 4vw, 44px) auto 0;
		max-width: 62ch;
		text-align: center;
		font-size: 1rem;
		line-height: 1.6;
		color: var(--ink-2);
	}

	.result b {
		color: var(--emerald-2);
		font-weight: 600;
	}

	/* ═══ How it works: sticky stack ══════════════════════════ */
	.stack {
		position: relative;
	}

	.probe {
		display: block;
		height: 0;
	}

	.pillar {
		position: sticky;
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(18px, 2.6vw, 36px);
		align-items: center;
		padding: clamp(20px, 2.6vw, 32px);
		border-radius: var(--r-lg);
		border: 1px solid var(--rule-2);
		/* Opaque on purpose: each card has to occlude the one it lands on. */
		background: var(--bg-2);
		box-shadow:
			0 26px 60px -34px rgb(0 0 0 / 0.7),
			inset 0 1px 0 rgb(255 255 255 / 0.05);
		margin-bottom: clamp(22px, 4vh, 44px);
	}

	.pillar:last-of-type {
		margin-bottom: 0;
	}

	.pillar:nth-of-type(1) {
		top: calc(var(--nav-h) + 18px);
	}

	.pillar:nth-of-type(2) {
		top: calc(var(--nav-h) + 34px);
	}

	.pillar:nth-of-type(3) {
		top: calc(var(--nav-h) + 50px);
	}

	.pillar-ico {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border-radius: var(--r-md);
		color: var(--emerald-2);
		background: color-mix(in oklab, var(--emerald) 16%, transparent);
		border: 1px solid color-mix(in oklab, var(--emerald) 32%, transparent);
		margin-bottom: 16px;
	}

	.pillar-copy h3 {
		font-size: clamp(1.28rem, 2.2vw, 1.72rem);
		margin-bottom: 10px;
	}

	.pillar-copy p {
		margin: 0;
		max-width: 46ch;
		font-size: 0.96rem;
		line-height: 1.6;
		color: var(--ink-2);
	}

	.pillar-points {
		list-style: none;
		display: grid;
		gap: 8px;
		margin: 18px 0 0;
		padding: 0;
	}

	.pillar-points li {
		display: flex;
		align-items: center;
		gap: 9px;
		font-family: var(--mono);
		font-size: 0.77rem;
		color: var(--ink-2);
	}

	.pillar-points :global(svg) {
		flex: none;
		color: var(--emerald-2);
	}

	.pillar-shot {
		margin: 0;
		border-radius: var(--r-md);
		overflow: hidden;
		border: 1px solid var(--rule);
	}

	.pillar-shot img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}

	@keyframes recede {
		to {
			scale: 0.955;
			opacity: 0.4;
		}
	}

	@media (min-width: 900px) {
		.pillar {
			grid-template-columns: minmax(0, 1fr) minmax(0, 1.08fr);
		}
	}

	@media (min-width: 900px) and (prefers-reduced-motion: no-preference) {
		@supports (animation-timeline: view()) {
			.stack {
				timeline-scope: --probe1, --probe2;
			}

			.probe:nth-of-type(1) {
				view-timeline-name: --probe1;
				view-timeline-axis: block;
			}

			.probe:nth-of-type(2) {
				view-timeline-name: --probe2;
				view-timeline-axis: block;
			}

			.pillar:nth-of-type(1) {
				animation: recede linear both;
				animation-timeline: --probe1;
				animation-range: cover 45% cover 85%;
			}

			.pillar:nth-of-type(2) {
				animation: recede linear both;
				animation-timeline: --probe2;
				animation-range: cover 45% cover 85%;
			}
		}
	}

	.synergy {
		margin: clamp(26px, 4vw, 44px) auto 0;
		max-width: 54ch;
		padding: 18px 24px;
		text-align: center;
		border-radius: var(--r-lg);
		border: 1px solid var(--rule-2);
		background: color-mix(in oklab, var(--bg-2) 80%, transparent);
		backdrop-filter: blur(10px);
		font-size: 1rem;
		color: var(--ink-2);
	}

	.synergy b {
		color: var(--gold-2);
		font-weight: 600;
	}

	.lead-link {
		margin-top: 20px;
		text-align: center;
	}

	/* ═══ Audience bento ══════════════════════════════════════ */
	/* The section opens straight out of the pinned stack, so it needs its own
	   ground to stand on rather than inheriting an unbroken field of black. */
	.who {
		position: relative;
		border-top: 1px solid var(--rule);
		background:
			radial-gradient(
				76% 46% at 50% 0%,
				color-mix(in oklab, var(--emerald) 20%, transparent),
				transparent 72%
			),
			linear-gradient(180deg, var(--bg-2), transparent 46%);
	}

	.who .lead h2 {
		text-shadow: 0 0 42px color-mix(in oklab, var(--emerald) 34%, transparent);
	}

	.who .lead .sub {
		color: var(--ink-2);
	}

	.bento {
		display: grid;
		grid-template-columns: 1fr;
		gap: 14px;
	}

	.persona {
		position: relative;
		isolation: isolate;
		overflow: hidden;
		display: grid;
		grid-template-rows: 1fr auto;
		min-height: 260px;
		border-radius: var(--r-lg);
		border: 1px solid var(--rule-2);
	}

	.persona img {
		position: absolute;
		inset: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: scale 0.7s var(--ease-out);
	}

	.persona:hover img {
		scale: 1.05;
	}

	.persona-body {
		grid-row: 2;
		padding: clamp(16px, 2vw, 22px);
		background: linear-gradient(
			180deg,
			rgba(8, 12, 10, 0) 0%,
			rgba(8, 12, 10, 0.85) 30%,
			rgba(8, 12, 10, 0.98) 100%
		);
	}

	.persona-body h3 {
		color: #e8c75a;
		font-family: var(--serif);
		font-size: 1.2rem;
		font-weight: 700;
		margin-bottom: 6px;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
	}

	.persona-body p {
		margin: 0;
		font-size: 0.88rem;
		line-height: 1.5;
		color: #f5f1e8;
		font-weight: 400;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
	}

	@media (min-width: 700px) {
		.bento {
			grid-template-columns: repeat(2, 1fr);
			grid-auto-rows: minmax(258px, auto);
		}

		.persona:nth-child(1),
		.persona:nth-child(2) {
			grid-column: span 2;
		}
	}

	@media (min-width: 1024px) {
		.bento {
			grid-template-columns: repeat(4, 1fr);
			grid-auto-rows: minmax(260px, auto);
		}

		.persona:nth-child(1) {
			grid-column: span 2;
			grid-row: span 2;
		}

		.persona:nth-child(2) {
			grid-column: span 2;
			grid-row: span 1;
		}

		.persona:nth-child(3),
		.persona:nth-child(4) {
			grid-column: span 1;
		}

		.persona:nth-child(3) .persona-body p,
		.persona:nth-child(4) .persona-body p {
			font-size: 0.84rem;
			line-height: 1.45;
		}
	}

	/* ═══ Testimonials ════════════════════════════════════════ */
	.voices {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(26px, 4vw, 54px);
		align-items: start;
	}

	.voice {
		margin: 0;
	}

	.lead-voice {
		border-inline-start: 2px solid var(--emerald);
		padding-inline-start: clamp(18px, 2.4vw, 30px);
	}

	.voice-mark {
		display: block;
		margin-bottom: 12px;
		color: var(--emerald-2);
		opacity: 0.85;
	}

	.lead-voice blockquote {
		margin: 0;
		max-width: 40ch;
		font-family: var(--serif);
		font-weight: 500;
		font-size: clamp(1.18rem, 2.2vw, 1.68rem);
		line-height: 1.32;
		letter-spacing: -0.02em;
		color: var(--ink);
		text-wrap: pretty;
	}

	.voice-rest {
		display: grid;
		gap: clamp(22px, 3vw, 34px);
	}

	.voice-rest .voice {
		border-top: 1px solid var(--rule);
		padding-top: clamp(16px, 2vw, 22px);
	}

	.voice-rest blockquote {
		margin: 0;
		max-width: 46ch;
		font-size: 0.99rem;
		line-height: 1.55;
		color: var(--ink-2);
	}

	figcaption {
		display: grid;
		gap: 2px;
		margin-top: 14px;
	}

	.voice-name {
		font-family: var(--sans);
		font-weight: 600;
		font-size: 0.93rem;
		color: var(--ink);
	}

	.voice-role {
		font-family: var(--mono);
		font-size: 0.71rem;
		color: var(--ink-3);
	}

	@media (min-width: 900px) {
		.voices {
			grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
		}
	}

	/* ═══ Masterclass ticket ══════════════════════════════════ */
	.ticket {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		border-radius: var(--r-lg);
		border: 1px solid color-mix(in oklab, var(--gold) 40%, transparent);
		background: color-mix(in oklab, var(--bg-2) 88%, transparent);
		backdrop-filter: blur(14px) saturate(140%);
		overflow: hidden;
	}

	@keyframes spin-border {
		to {
			--angle: 360deg;
		}
	}

	/* The page's one continuous animation, on its one paid conversion target. */
	@supports (mask-composite: exclude) {
		.ticket::before {
			content: "";
			position: absolute;
			inset: 0;
			padding: 1px;
			border-radius: inherit;
			pointer-events: none;
			background: conic-gradient(
				from var(--angle),
				color-mix(in oklab, var(--gold) 8%, transparent) 0deg,
				var(--gold) 62deg,
				var(--gold-2) 88deg,
				color-mix(in oklab, var(--gold) 8%, transparent) 150deg
			);
			mask:
				linear-gradient(#000 0 0) content-box exclude,
				linear-gradient(#000 0 0);
			animation: spin-border 9s linear infinite;
		}
	}

	.ticket-main {
		padding: clamp(22px, 3vw, 38px);
	}

	.ticket-badge {
		display: inline-block;
		margin-bottom: 16px;
		padding: 5px 13px;
		border-radius: var(--r-pill);
		font-family: var(--mono);
		font-size: 0.71rem;
		color: var(--gold-2);
		background: color-mix(in oklab, var(--gold) 15%, transparent);
		border: 1px solid color-mix(in oklab, var(--gold) 32%, transparent);
	}

	.ticket-main h3 {
		font-size: clamp(1.22rem, 2.2vw, 1.66rem);
		margin-bottom: 10px;
	}

	.ticket-main > p {
		margin: 0;
		max-width: 54ch;
		font-size: 0.96rem;
		line-height: 1.6;
		color: var(--ink-2);
	}

	.incl {
		display: grid;
		grid-template-columns: 1fr;
		gap: 12px;
		margin-top: 26px;
	}

	.incl-item {
		display: flex;
		gap: 12px;
		padding: 14px;
		border-radius: var(--r-md);
		border: 1px solid var(--rule);
		background: color-mix(in oklab, var(--bg-3) 70%, transparent);
	}

	.incl-ico {
		flex: none;
		margin-top: 2px;
		color: var(--gold-2);
	}

	.incl-item strong {
		display: block;
		margin-bottom: 3px;
		font-size: 0.91rem;
		color: var(--ink);
	}

	.incl-item p {
		margin: 0;
		font-size: 0.81rem;
		line-height: 1.45;
		color: var(--ink-3);
	}

	.stub {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 6px;
		padding: clamp(22px, 3vw, 34px);
		text-align: center;
		border-top: 1px dashed color-mix(in oklab, var(--gold) 38%, transparent);
		background: color-mix(in oklab, var(--gold) 5%, transparent);
	}

	.stub-label {
		font-family: var(--mono);
		font-size: 0.72rem;
		color: var(--ink-3);
	}

	.stub-old {
		font-family: var(--mono);
		font-size: 1rem;
		color: var(--ink-3);
		text-decoration: line-through;
	}

	.stub-now {
		font-family: var(--serif);
		font-weight: 700;
		font-size: clamp(2.05rem, 4vw, 2.85rem);
		line-height: 1;
		letter-spacing: -0.03em;
		color: var(--gold-2);
	}

	.stub-save {
		margin-bottom: 6px;
		padding: 4px 11px;
		border-radius: var(--r-pill);
		font-family: var(--mono);
		font-size: 0.71rem;
		color: var(--ruby);
		background: color-mix(in oklab, var(--ruby) 13%, transparent);
		border: 1px solid color-mix(in oklab, var(--ruby) 28%, transparent);
	}

	.stub-fine {
		margin: 10px 0 0;
		max-width: 26ch;
		font-size: 0.77rem;
		line-height: 1.4;
		color: var(--ink-3);
	}

	@media (min-width: 620px) {
		.incl {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 900px) {
		.ticket {
			grid-template-columns: minmax(0, 1.65fr) minmax(0, 0.9fr);
		}

		.stub {
			border-top: 0;
			border-inline-start: 1px dashed color-mix(in oklab, var(--gold) 38%, transparent);
		}
	}

	/* ═══ FAQ ═════════════════════════════════════════════════ */
	.qa {
		max-width: 780px;
		border-top: 1px solid var(--rule);
	}

	.q {
		border-bottom: 1px solid var(--rule);
	}

	.q summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 18px;
		padding: 18px 2px;
		cursor: pointer;
		list-style: none;
		font-family: var(--sans);
		font-weight: 600;
		font-size: clamp(0.96rem, 1.3vw, 1.04rem);
		color: var(--ink);
		transition: color 0.2s ease;
	}

	.q summary::-webkit-details-marker {
		display: none;
	}

	.q summary:hover,
	.q[open] summary {
		color: var(--emerald-2);
	}

	.q-mark {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex: none;
		width: 26px;
		height: 26px;
		border-radius: var(--r-pill);
		border: 1px solid var(--rule-2);
		color: var(--emerald-2);
		transition:
			rotate 0.3s var(--ease-out),
			border-color 0.2s ease;
	}

	.q[open] .q-mark {
		rotate: 45deg;
		border-color: var(--emerald);
	}

	.q-body {
		padding: 0 44px 20px 2px;
	}

	.q-body p {
		margin: 0;
		font-size: 0.93rem;
		line-height: 1.62;
		color: var(--ink-2);
	}

	/* Smooth disclosure via interpolate-size; instant where unsupported. */
	.q::details-content {
		block-size: 0;
		overflow: clip;
		opacity: 0;
		transition:
			block-size 0.4s var(--ease-out),
			opacity 0.3s ease,
			content-visibility 0.4s allow-discrete;
	}

	.q[open]::details-content {
		block-size: auto;
		opacity: 1;
	}

	/* ═══ Closing ═════════════════════════════════════════════ */
	.closing {
		position: relative;
		text-align: center;
		padding-block: clamp(64px, 10vw, 128px);
	}

	.closing::before {
		content: "";
		position: absolute;
		inset: 0;
		pointer-events: none;
		background: radial-gradient(
			58% 62% at 50% 42%,
			color-mix(in oklab, var(--emerald) 16%, transparent),
			transparent 70%
		);
	}

	/* On white, a 16% emerald wash disappears. The closing needs a floor of its
	   own so the last screen of the page still lands. */
	:global([data-theme="light"]) .closing {
		border-top: 1px solid var(--rule);
	}

	:global([data-theme="light"]) .closing::before {
		background:
			radial-gradient(
				62% 68% at 50% 34%,
				color-mix(in oklab, var(--emerald) 26%, transparent),
				transparent 72%
			),
			radial-gradient(
				46% 52% at 82% 96%,
				color-mix(in oklab, var(--gold) 20%, transparent),
				transparent 74%
			),
			linear-gradient(180deg, transparent, var(--bg-3));
	}

	.closing-in {
		position: relative;
	}

	.closing h2 {
		max-width: 24ch;
		margin-inline: auto;
		font-size: clamp(1.95rem, 4.4vw, 3.05rem);
		line-height: 1.1;
	}

	.closing .sub {
		max-width: 52ch;
		margin-inline: auto;
	}

	.closing-cta {
		margin-top: 30px;
	}

	.promises {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 12px 26px;
		margin: 28px 0 0;
		padding: 0;
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--ink-3);
	}

	.promises li {
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}

	.promises :global(svg) {
		flex: none;
		color: var(--emerald-2);
	}

	/* ═══ Theme and preference overrides ══════════════════════ */
	:global([data-theme="light"]) .pillar {
		box-shadow:
			0 20px 44px -30px rgb(15 23 42 / 0.28),
			inset 0 1px 0 rgb(255 255 255 / 0.9);
	}

	@media (prefers-reduced-transparency: reduce) {
		.prob,
		.tile,
		.synergy,
		.ticket {
			background: var(--bg-2);
			backdrop-filter: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.stage-copy > *,
		.ticket::before {
			animation: none;
		}

		.prob:hover,
		.persona:hover img {
			translate: none;
			scale: 1;
		}
	}
</style>

