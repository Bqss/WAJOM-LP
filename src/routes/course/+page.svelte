<script lang="ts">
	import { onMount } from 'svelte';
	import VideoModal from '$lib/components/VideoModal.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import Countdown from '$lib/components/Countdown.svelte';

	let isVideoModalOpen = $state(false);

	// Countdown target: Ahad, 6 September 2026, 9:00 AM MYT
	const TARGET_DATE = new Date('2026-09-06T09:00:00+08:00');

	onMount(() => {
		// IntersectionObserver for bloom scroll animations
		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			const io = new IntersectionObserver(
				(entries) => {
					entries.forEach((e) => {
						if (e.isIntersecting) {
							e.target.classList.add('in');
							io.unobserve(e.target);
						}
					});
				},
				{ rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
			);
			document.querySelectorAll('.bloom').forEach((el) => io.observe(el));
		} else {
			document.querySelectorAll('.bloom').forEach((el) => el.classList.add('in'));
		}
	});

	const courseJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Wajom Mastery — Kursus Chat AI & Automasi WhatsApp',
		description: 'Kursus praktikal bimbingan Wajom Chat AI untuk Top Leader. Setting AI closing gaya manusia, auto follow-up, dan duplikasi pasukan 1-klik.',
		provider: {
			'@type': 'Organization',
			name: 'Wajom Academy',
			url: 'https://wajom.co'
		},
		offers: {
			'@type': 'Offer',
			price: '30',
			priceCurrency: 'MYR',
			url: 'https://wajom.co/course'
		}
	};
</script>

<SEO
	title="Wajom Mastery — Kursus Chat AI & Automasi WhatsApp (RM30)"
	description="Kursus praktikal bimbingan Wajom Chat AI untuk Top Leader. Setting AI closing gaya manusia, auto follow-up, dan duplikasi pasukan 1-klik. RM30 termasuk 1.5M Token."
	keywords="kursus wajom, wajom academy, modul whatsapp automation, panduan chat ai, strategi follow up whatsapp, latihan leader mlm, bengkel whatsapp malaysia"
	canonical="https://wajom.co/course"
	ogImage="https://wajom.co/logo.png"
	ogImageAlt="Wajom — Platform Automasi WhatsApp"
	ogType="website"
	jsonLd={courseJsonLd}
/>

<!-- Hero Section (Seamlessly Connected to Pricing Page Design System) -->
<section class="pricing-hero">
	<div class="wrap hero-wrap">
		<span class="eyebrow-pill bloom">Wajom Chat AI Mastery Course</span>
		
		<h1 class="hero-heading bloom">
			Stop Jadi Hamba WhatsApp. <em>Biar Chat AI Buat Kerja.</em>
		</h1>

		<p class="hero-subtext bloom">
			Bimbingan praktikal 3 jam bersama Wajom AI. Settingkan skrip closing gaya peribadi anda, auto follow-up 24/7, dan duplikasikan ke pasukan dalam 1-klik.
		</p>

		<!-- Animated Countdown Timer -->
		<div class="bloom" style="margin-bottom: 28px;">
			<Countdown
				endDate={TARGET_DATE}
				label="MASA BERBAKI PENDAFTARAN"
				sessionInfo="Ahad, 6 September 2026 (9:00 AM – 12:00 PM)"
			/>
		</div>

		<!-- Action CTAs matching Pricing Buttons -->
		<div class="hero-actions-row bloom">
			<a href="/checkout" class="tier-cta primary" style="padding: 14px 32px; font-size: 1rem; text-decoration: none;">
				Daftar Masterclass (RM30) →
			</a>
			<button
				type="button"
				class="tier-cta secondary"
				style="padding: 14px 26px; font-size: 0.92rem; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;"
				onclick={() => (isVideoModalOpen = true)}
			>
				<svg class="play-icon" viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; color: var(--emerald-2);"><polygon points="5 3 19 12 5 21 5 3"/></svg>
				<span>Tonton Video Demo</span>
			</button>
		</div>

		<!-- Clean Value Strip Cards -->
		<div class="hero-value-strip bloom">
			<div class="val-item">
				<span class="val-bold">RM 30</span>
				<span class="val-sub">Sekali bayar (Asal RM200)</span>
			</div>
			<div class="val-sep"></div>
			<div class="val-item">
				<span class="val-bold">+ 1.5M Tokens</span>
				<span class="val-sub">Bonus percuma terus ke akaun</span>
			</div>
			<div class="val-sep"></div>
			<div class="val-item">
				<span class="val-bold">Full Recording</span>
				<span class="val-sub">Akses Zoom seumur hidup</span>
			</div>
		</div>
	</div>
</section>

<!-- Mechanism as Curriculum (Unified Pricing Matrix Feel) -->
<section class="pricing-matrix-section" id="mechanism">
	<div class="wrap">
		<div class="section-title-block bloom">
			<span class="eyebrow-pill">PRAKTIKAL LIVE</span>
			<h2 class="hero-heading" style="font-size: clamp(1.8rem, 3.5vw, 2.6rem);">
				Bukan Kelas Ajar Teori. <em>Terus Praktikal Setting AI.</em>
			</h2>
			<p class="hero-subtext" style="margin-bottom: 0;">
				Wajom bukan sekadar software automasi. Kita fokus coaching pasukan — Wajom mengendalikan objection &amp; closing secara automatik.
			</p>
		</div>

		<div class="matrix-container bloom" style="margin-top: 36px;">
			<!-- Column 1: Modul 01 -->
			<div class="matrix-col">
				<div class="col-head">
					<span class="tier-label">MODUL 01</span>
					<h3 class="tier-name">Pre-Class Setup</h3>
					<p class="tier-desc">Siapkan semuanya sebelum kelas bermula supaya masa Zoom 100% praktikal.</p>
					<ul class="spec-list">
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Register &amp; Verify Wajom Free Trial</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Pautkan 1st WhatsApp Number &amp; EC</span>
						</li>
						<li>
							<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Terima 1.5M AI Token terus ke akaun</span>
						</li>
					</ul>
				</div>
				<div class="col-footer">
					<span class="step-status-tag">
						<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 13px; height: 13px; display: inline-block; vertical-align: -1px; margin-right: 4px;"><polyline points="20 6 9 17 4 12"/></svg>
						Peserta sedia sebelum Zoom
					</span>
				</div>
			</div>

			<!-- Column 2: Modul 02 (Featured Tier) -->
			<div class="matrix-col featured">
				<div class="featured-indicator">MODUL UTAMA</div>
				<div class="col-head">
					<span class="tier-label emerald">MODUL 02</span>
					<h3 class="tier-name">Setting Chat AI</h3>
					<p class="tier-desc">AI yang menjawab dan closing mengikut gaya &amp; suara peribadi anda.</p>
					
					<!-- Interactive Demo Chat Card -->
					<div class="chat-demo-card">
						<div class="chat-demo-header">
							<span class="dot-live"></span> AI Auto-Closing Demo
						</div>
						<div class="chat-demo-body">
							<div class="c-msg in">
								<span class="c-who">Prospek</span>
								<p>Hai, ini mahal la untuk saya sekarang...</p>
							</div>
							<div class="c-msg out">
								<span class="c-who">AI · Korang</span>
								<p>Saya faham. Tapi bayangkan kalau 1 team member follow up 200 leads tanpa tertinggal — itu nilai sebenar.</p>
							</div>
						</div>
					</div>

					<ul class="spec-list" style="margin-top: 16px;">
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Training Data Custom &amp; Objection Script</span>
						</li>
						<li>
							<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
							<span>Trigger Handoff &amp; Takeover Manual</span>
						</li>
					</ul>
				</div>
				<div class="col-footer">
					<span class="step-status-tag emerald">
						<svg class="spec-icon emerald" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 13px; height: 13px; display: inline-block; vertical-align: -1px; margin-right: 4px;"><polyline points="20 6 9 17 4 12"/></svg>
						Prospek ready · Leader notified
					</span>
				</div>
			</div>

			<!-- Column 3: Modul 03 -->
			<div class="matrix-col">
				<div class="col-head">
					<span class="tier-label">MODUL 03</span>
					<h3 class="tier-name">Praktikal &amp; Coaching</h3>
					<p class="tier-desc">3 jam sesi live Zoom interaktif — setting, test real-time &amp; duplikasi.</p>
					
					<div class="agenda-timeline">
						<div class="agenda-item">
							<span class="time">09:00</span>
							<span class="task">Intro &amp; Setup Training Data</span>
						</div>
						<div class="agenda-item">
							<span class="time">09:45</span>
							<span class="task">Setting Chat AI Live</span>
						</div>
						<div class="agenda-item">
							<span class="time">10:30</span>
							<span class="task">Test Prospek Real-Time</span>
						</div>
						<div class="agenda-item">
							<span class="time">11:15</span>
							<span class="task">Coaching &amp; Duplikasi Pasukan</span>
						</div>
					</div>
				</div>
				<div class="col-footer">
					<span class="step-status-tag">
						<svg class="spec-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 13px; height: 13px; display: inline-block; vertical-align: -1px; margin-right: 4px;"><polyline points="20 6 9 17 4 12"/></svg>
						100% Hands-on Zoom
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Architectural All Modules Grid -->
<section class="all-features-section" id="syllabus">
	<div class="wrap">
		<div class="section-title-block bloom">
			<span class="eyebrow-pill">SILABUS KURSUS</span>
			<h2>Kurikulum 5 Modul Lengkap</h2>
			<p>Dari ekonomi token sehingga advanced setting — korang keluar kelas dengan Chat AI Wajom yang dah siap berfungsi:</p>
		</div>

		<div class="features-architectural-grid bloom">
			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
				</div>
				<span class="mod-cell-tag">MODUL 01</span>
				<h4>Chat AI Boleh Untung Ke?</h4>
				<p>Kira kos untuk close sales RM1,000 dan teknik jimatkan kos token. Faham ekonomi sebenar sebelum mula setup.</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
				</div>
				<span class="mod-cell-tag">MODUL 02</span>
				<h4>Chat AI Jawab Semua Soalan</h4>
				<p>Chat AI menjawab soalan prospek 24/7. Admin menerima notifikasi serta-merta jika ada soalan khas — tiada prospek tertinggal.</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 10a10.05 10.05 0 0 1 19.8 0Z"/></svg>
				</div>
				<span class="mod-cell-tag">MODUL 03</span>
				<h4>Setting AI Macam Pakar NLP</h4>
				<p>AI menanya soalan semula untuk wujudkan perbualan 2-hala semulajadi. Rasa nampak real seperti bercakap dengan pakar manusia.</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
				</div>
				<span class="mod-cell-tag">MODUL 04</span>
				<h4>Human Handover</h4>
				<p>Tak perlu penat layan soalan berulang. AI urus awal; bila prospek sedia bayar, admin mesej takeover untuk teruskan transaksi.</p>
			</div>

			<div class="feat-cell">
				<div class="feat-cell-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
				</div>
				<span class="mod-cell-tag">MODUL 05</span>
				<h4>Advanced Setting</h4>
				<p>Respons AI untuk voice note, gambar &amp; video. Tetapan lanjutan untuk bawa sistem kecerdasan buatan anda ke tahap profesional.</p>
			</div>

			<div class="feat-cell highlighted-cell">
				<div class="feat-cell-icon gold">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
				</div>
				<span class="mod-cell-tag gold">BONUS ABUKAN</span>
				<h4>1,500,000 Wajom Tokens</h4>
				<p>Diberikan secara percuma bersama pendaftaran RM30 anda untuk terus menjalankan automasi secara real-time.</p>
			</div>
		</div>
	</div>
</section>

<!-- Transformation Section -->
<section class="transformation-section" id="before-after">
	<div class="wrap">
		<div class="section-title-block bloom">
			<span class="eyebrow-pill">TRANSFORMASI OPERASI</span>
			<h2>Sebelum &amp; Selepas Wajom</h2>
			<p>Perubahan drastik operasi harian anda dari Admin manual kepada Leader berstrategi:</p>
		</div>

		<div class="diff-matrix bloom">
			<!-- Before Card -->
			<div class="diff-card before">
				<div class="diff-card-header">
					<span class="diff-tag ruby">SEBELUM WAJOM</span>
					<h3>Life Admin</h3>
				</div>
				<ul class="diff-list">
					<li><span class="mk ruby">×</span> 80% masa harian habis untuk manual follow-up</li>
					<li><span class="mk ruby">×</span> Leads tertinggal sebab lambat reply mesej</li>
					<li><span class="mk ruby">×</span> Setiap ahli pasukan di-train satu per satu, tak konsisten</li>
					<li><span class="mk ruby">×</span> Database bersepah dalam Excel, phone &amp; notebook</li>
					<li><span class="mk ruby">×</span> Burnout menjawab soalan sama berulang kali</li>
				</ul>
			</div>

			<!-- After Card -->
			<div class="diff-card after">
				<div class="diff-card-header">
					<span class="diff-tag emerald">SELEPAS WAJOM</span>
					<h3>Life Leader</h3>
				</div>
				<ul class="diff-list">
					<li><span class="mk emerald">→</span> 80% masa fokus pada coaching &amp; strategi perniagaan</li>
					<li><span class="mk emerald">→</span> Auto-reply 24/7, prospek hot diserahkan terus ke anda</li>
					<li><span class="mk emerald">→</span> Seluruh pasukan import 1 fail JSON — sistem seragam</li>
					<li><span class="mk emerald">→</span> Setiap prospek di-tag &amp; di-track secara automatik</li>
					<li><span class="mk emerald">→</span> AI jawab gaya peribadi anda; anda close bila penting</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Proof / Testimonials Section -->
<section class="proof-section" id="testimonials">
	<div class="wrap">
		<div class="section-title-block bloom">
			<span class="eyebrow-pill">BUKTI &amp; TESTIMONI</span>
			<h2>Leader Yang Dah Jalankan</h2>
			<p>Ulasan sebenar daripada pimpinan perniagaan yang menggunakan Wajom hari ini:</p>
		</div>

		<div class="testimonials-grid bloom">
			<div class="quote-card">
				<div class="quote-stars-svg">
					<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
					<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
					<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
					<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
					<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
				</div>
				<blockquote>
					"Alhamdulillah Wajom sangat menjimatkan masa. Dulu untuk follow up 200 leads ambil masa hampir sejam. Sekarang leads masuk auto dari Form, terus auto follow up &amp; auto respon by AI. Saya hanya takeover bila prospek buat pembayaran."
				</blockquote>
				<div class="quote-author">
					<strong>Lila Maskhon</strong>
					<span>Ex Engineer · Top Recruiter FLP MY</span>
				</div>
			</div>

			<div class="quote-card">
				<div class="quote-stars-svg">
					<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
					<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
					<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
					<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
					<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
				</div>
				<blockquote>
					"Dulu nak follow up kena buat satu-satu, ada masa lupa. Sekarang dengan Wajom semua dah siap setting — takkan ada tertinggal hari untuk follow up lagi. Dengan AI Wajom, hari-hari boleh close sales."
				</blockquote>
				<div class="quote-author">
					<strong>Aira Halim</strong>
					<span>Ex Banker · Top Rookie · Founder RRC</span>
				</div>
			</div>
		</div>

		<!-- Proof Metrics Bar -->
		<div class="proof-stats-bar bloom">
			<div class="stat-item">
				<span class="stat-num">500+</span>
				<span class="stat-lbl">Leader Aktif</span>
			</div>
			<div class="stat-item">
				<span class="stat-num">95%</span>
				<span class="stat-lbl">Kadar Kepuasan</span>
			</div>
			<div class="stat-item">
				<span class="stat-num">24/7</span>
				<span class="stat-lbl">Automasi Berjalan</span>
			</div>
			<div class="stat-item">
				<span class="stat-num">4.9 / 5</span>
				<span class="stat-lbl">Penarafan Purata</span>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="faq-section" id="faq">
	<div class="wrap">
		<div class="section-title-block bloom">
			<span class="eyebrow-pill">SOALAN LAZIM</span>
			<h2>Benda Yang Korang Berhak Tanya</h2>
			<p>Jawapan jujur &amp; transparan untuk setiap persoalan anda:</p>
		</div>

		<div class="faq-accordion bloom">
			<details class="faq-card">
				<summary>Wajom ni produk WhatsApp rasmi ke?</summary>
				<div class="faq-answer">
					<span class="badge-mini ruby">BUKAN RASMI</span>
					<p>Wajom bukan aplikasi WhatsApp itu sendiri. Ia dibina di atas teknologi selamat dan mesra perniagaan yang di-layer di atas WhatsApp. Kursus ini mengajar tetapan terbaik untuk menjaga kesihatan akaun anda.</p>
				</div>
			</details>

			<details class="faq-card">
				<summary>Tak ada laptop. Boleh guna tak?</summary>
				<div class="faq-answer">
					<p>Boleh. Wajom boleh di-setup sepenuhnya menggunakan telefon bimbit. Panduan kursus direka phone-first untuk kemudahan anda.</p>
				</div>
			</details>

			<details class="faq-card">
				<summary>Boleh guna pada iPhone, Mac, dan iPad?</summary>
				<div class="faq-answer">
					<p>Ya, Wajom beroperasi secara berasaskan pelayan cloud menerusi pelayar web (browser) dan sangat serasi dengan peranti Apple iOS / macOS.</p>
				</div>
			</details>

			<details class="faq-card">
				<summary>Saya kurang teknikal. Adakah susah nak faham?</summary>
				<div class="faq-answer">
					<p>Tidak. Kursus ini adalah langkah-demi-langkah dengan panduan Zoom live &amp; rakaman. Pasukan sokongan Wajom sedia membantu anda sehingga sistem anda siap berfungsi.</p>
				</div>
			</details>

			<details class="faq-card">
				<summary>Apa yang saya akan dapat dengan nilai RM30 ini?</summary>
				<div class="faq-answer">
					<p>Anda mendapat akses penuh ke sesi Masterclass Zoom Live 3 Jam, rakaman penuh sesi, fail duplikasi sistem, dan <strong>1,500,000 Wajom Tokens</strong> secara percuma.</p>
				</div>
			</details>

			<details class="faq-card">
				<summary>Adakah kursus ini untuk leader MLM sahaja?</summary>
				<div class="faq-answer">
					<p>Bukan. Wajom direka untuk pelbagai bidang perniagaan yang menggunakan WhatsApp seperti MLM, hartanah, insurans, ejen jualan, dan kedai e-dagang.</p>
				</div>
			</details>
		</div>
	</div>
</section>

<!-- Final Masterclass Offer Card -->
<section class="masterclass-section" id="enroll">
	<div class="wrap">
		<div class="masterclass-card bloom">
			<div class="mc-header">
				<span class="mc-pill">TAWARAN MASIH DIBUKA</span>
				<h3>Masterclass Chat AI RM30</h3>
				<p>Kelas Zoom Live untuk persediaan sistem automasi &amp; bonus 1,500,000 AI Tokens.</p>
			</div>
			<div class="mc-pricing-strip">
				<span class="was-price">RM 200</span>
				<span class="now-price">RM 30</span>
				<span class="one-time">sekali bayar</span>
			</div>
			<a class="mc-cta-btn" href="/checkout">
				Daftar Kursus Sekarang →
			</a>
		</div>
	</div>
</section>

<!-- Guarantee Section -->
<section class="guarantee-section">
	<div class="wrap">
		<div class="guarantee-inner bloom">
			<div class="g-icon-wrapper">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
			</div>
			<h3>Jaminan Kepuasan &amp; Bimbingan Praktikal</h3>
			<p>
				Kami komited memastikan setiap peserta keluar dari sesi ini dengan sistem Chat AI yang berfungsi sepenuhnya. Jika anda memerlukan sebarang bantuan teknikal tambahan, pasukan teknikal kami sedia membantu anda.
			</p>
		</div>
	</div>
</section>

<!-- Video Modal Component -->
<VideoModal bind:isOpen={isVideoModalOpen} />

<style>
	/* ── Hero Section (Unified with Pricing Page Design System) ── */
	.pricing-hero {
		padding: clamp(50px, 7vw, 80px) 0 40px;
		position: relative;
	}

	.hero-wrap {
		text-align: center;
		display: flex;
		flex-direction: column;
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
		font-weight: 400;
	}

	.hero-subtext {
		color: var(--ink-2);
		font-size: 1.05rem;
		max-width: 62ch;
		margin: 0 auto 28px;
		line-height: 1.6;
	}


	.hero-actions-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 14px;
		margin-bottom: 36px;
	}

	.tier-cta.primary {
		background: var(--emerald);
		color: #ffffff;
		box-shadow: 0 4px 14px var(--emerald-glow);
		border-radius: 999px;
		font-weight: 700;
		transition: all 0.18s ease;
	}

	.tier-cta.primary:hover {
		transform: translateY(-2px);
		background: var(--emerald-2);
		color: #ffffff;
	}

	.tier-cta.secondary {
		background: var(--bg-3);
		color: var(--ink-2);
		border: 1px solid var(--rule-2);
		border-radius: 999px;
		transition: all 0.18s ease;
	}

	.tier-cta.secondary:hover {
		border-color: var(--emerald-2);
		color: var(--emerald-2);
		transform: translateY(-2px);
	}

	/* Clean Value & Trust Strip */
	.hero-value-strip {
		display: inline-flex;
		align-items: center;
		gap: 24px;
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 16px;
		padding: 16px 28px;
		max-width: 100%;
		flex-wrap: wrap;
		justify-content: center;
	}

	.val-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
	}

	.val-bold {
		font-family: var(--sans);
		font-size: 1.1rem;
		font-weight: 800;
		color: var(--emerald-2);
		line-height: 1.2;
	}

	.val-sub {
		font-size: 0.76rem;
		color: var(--ink-3);
	}

	.val-sep {
		width: 1px;
		height: 28px;
		background: var(--rule);
	}

	/* ── Architectural Pricing Matrix Section ───────── */
	.pricing-matrix-section {
		padding: 40px 0 80px;
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
		margin-bottom: 24px;
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

	.col-footer {
		border-top: 1px solid var(--rule);
		padding-top: 18px;
		margin-top: 24px;
	}

	.step-status-tag {
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--ink-3);
		display: block;
	}

	.step-status-tag.emerald {
		color: var(--emerald-2);
		font-weight: 600;
	}

	/* Interactive Demo Chat Box in Column 2 */
	.chat-demo-card {
		background: var(--bg-3);
		border: 1px solid var(--rule);
		border-radius: 12px;
		padding: 12px;
		margin-bottom: 16px;
	}

	.chat-demo-header {
		font-family: var(--mono);
		font-size: 0.68rem;
		color: var(--emerald-2);
		display: flex;
		align-items: center;
		gap: 6px;
		margin-bottom: 10px;
		text-transform: uppercase;
	}

	.dot-live {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--emerald);
	}

	.chat-demo-body {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.c-msg {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.c-msg.in { align-items: flex-start; }
	.c-msg.out { align-items: flex-end; }

	.c-who {
		font-family: var(--mono);
		font-size: 0.6rem;
		color: var(--ink-3);
		text-transform: uppercase;
	}

	.c-msg.out .c-who { color: var(--emerald-2); }

	.c-msg p {
		font-size: 0.78rem;
		margin: 0;
		padding: 7px 10px;
		border-radius: 8px;
		background: var(--bg-2);
		border: 1px solid var(--rule);
		color: var(--ink);
		line-height: 1.4;
	}

	.c-msg.out p {
		background: rgba(55, 159, 118, 0.12);
		border-color: rgba(55, 159, 118, 0.3);
	}

	/* Agenda Timeline in Column 3 */
	.agenda-timeline {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 14px;
	}

	.agenda-item {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.82rem;
	}

	.agenda-item .time {
		font-family: var(--mono);
		font-size: 0.74rem;
		color: var(--emerald-2);
		background: var(--bg-3);
		padding: 2px 7px;
		border-radius: 4px;
		border: 1px solid var(--rule);
	}

	.agenda-item .task {
		color: var(--ink-2);
	}

	/* Architectural Features Grid */
	.all-features-section {
		padding: 70px 0;
		background: var(--bg-2);
		border-top: 1px solid var(--rule);
		border-bottom: 1px solid var(--rule);
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
		padding: 26px;
		transition: border-color 0.18s ease, transform 0.18s ease;
		position: relative;
	}

	.feat-cell:hover {
		border-color: var(--emerald-2);
		transform: translateY(-2px);
	}

	.feat-cell.highlighted-cell {
		background: linear-gradient(135deg, rgba(212, 175, 55, 0.06), rgba(212, 175, 55, 0.01));
		border-color: rgba(212, 175, 55, 0.35);
	}

	.feat-cell-icon {
		width: 38px;
		height: 38px;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 14px;
	}

	.feat-cell-icon.gold {
		color: var(--gold-2);
		background: rgba(212, 175, 55, 0.15);
	}

	.feat-cell-icon svg {
		width: 20px;
		height: 20px;
	}

	.mod-cell-tag {
		font-family: var(--mono);
		font-size: 0.68rem;
		color: var(--emerald-2);
		letter-spacing: 0.06em;
		display: block;
		margin-bottom: 6px;
	}

	.mod-cell-tag.gold {
		color: var(--gold-2);
	}

	.feat-cell h4 {
		font-family: var(--serif);
		font-size: 1.15rem;
		color: var(--ink);
		margin: 0 0 8px;
	}

	.feat-cell p {
		font-size: 0.88rem;
		color: var(--ink-3);
		margin: 0;
		line-height: 1.5;
	}

	/* Transformation Section */
	.transformation-section {
		padding: 70px 0;
	}

	.diff-matrix {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}

	.diff-card {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 18px;
		padding: 36px;
	}

	.diff-card.after {
		background: linear-gradient(180deg, rgba(55, 159, 118, 0.06), rgba(55, 159, 118, 0.01));
		border-color: rgba(78, 194, 148, 0.3);
	}

	.diff-card-header {
		margin-bottom: 24px;
	}

	.diff-tag {
		font-family: var(--mono);
		font-size: 0.68rem;
		letter-spacing: 0.1em;
		padding: 4px 10px;
		border-radius: 999px;
		display: inline-block;
		margin-bottom: 10px;
		text-transform: uppercase;
	}

	.diff-tag.ruby {
		background: rgba(194, 84, 80, 0.12);
		color: var(--ruby);
		border: 1px solid rgba(194, 84, 80, 0.25);
	}

	.diff-tag.emerald {
		background: rgba(55, 159, 118, 0.15);
		color: var(--emerald-2);
		border: 1px solid rgba(55, 159, 118, 0.35);
	}

	.diff-card h3 {
		font-family: var(--serif);
		font-size: 1.6rem;
		color: var(--ink);
		margin: 0;
	}

	.diff-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.diff-list li {
		font-size: 0.92rem;
		color: var(--ink-2);
		display: flex;
		align-items: flex-start;
		gap: 12px;
		line-height: 1.5;
	}

	.diff-list .mk {
		font-family: var(--mono);
		font-weight: 700;
		font-size: 0.95rem;
		flex-shrink: 0;
	}

	.diff-list .mk.ruby { color: var(--ruby); }
	.diff-list .mk.emerald { color: var(--emerald-2); }

	/* Proof & Testimonials Section */
	.proof-section {
		padding: 70px 0;
		background: var(--bg-2);
		border-top: 1px solid var(--rule);
		border-bottom: 1px solid var(--rule);
	}

	.testimonials-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		margin-bottom: 48px;
	}

	.quote-card {
		background: var(--bg);
		border: 1px solid var(--rule-2);
		border-radius: 16px;
		padding: 28px 32px;
	}

	.quote-stars-svg {
		display: inline-flex;
		align-items: center;
		gap: 2px;
		color: var(--gold-2);
		margin-bottom: 12px;
	}

	.quote-stars-svg svg {
		width: 16px;
		height: 16px;
	}

	.quote-card blockquote {
		font-family: var(--serif);
		font-style: italic;
		font-size: 1.05rem;
		line-height: 1.55;
		color: var(--ink);
		margin: 0 0 18px;
	}

	.quote-author strong {
		display: block;
		font-size: 0.92rem;
		color: var(--ink);
	}

	.quote-author span {
		font-size: 0.8rem;
		color: var(--ink-3);
	}

	.proof-stats-bar {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		padding-top: 36px;
		border-top: 1px solid var(--rule);
		text-align: center;
	}

	.stat-num {
		display: block;
		font-family: var(--serif);
		font-size: 2rem;
		font-weight: 800;
		color: var(--emerald-2);
		margin-bottom: 2px;
	}

	.stat-lbl {
		font-family: var(--mono);
		font-size: 0.76rem;
		color: var(--ink-3);
		text-transform: uppercase;
	}

	/* FAQ Section */
	.faq-section {
		padding: 70px 0;
	}

	.faq-accordion {
		max-width: 780px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.faq-card {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 14px;
		overflow: hidden;
		transition: border-color 0.18s ease;
	}

	.faq-card summary {
		list-style: none;
		cursor: pointer;
		padding: 20px 24px;
		font-family: var(--serif);
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--ink);
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.faq-card summary::-webkit-details-marker { display: none; }

	.faq-card summary::after {
		content: '+';
		font-family: var(--mono);
		font-size: 1.2rem;
		color: var(--ink-3);
		transition: transform 0.2s ease, color 0.18s ease;
	}

	.faq-card[open] summary::after {
		transform: rotate(45deg);
		color: var(--emerald-2);
	}

	.faq-card[open] summary { color: var(--emerald-2); }

	.faq-answer {
		padding: 0 24px 22px;
		font-size: 0.92rem;
		color: var(--ink-2);
		line-height: 1.6;
	}

	.badge-mini.ruby {
		font-family: var(--mono);
		font-size: 0.64rem;
		color: var(--ruby);
		background: rgba(194, 84, 80, 0.1);
		border: 1px solid rgba(194, 84, 80, 0.22);
		padding: 2px 8px;
		border-radius: 999px;
		display: inline-block;
		margin-bottom: 8px;
	}

	/* Masterclass Section Style */
	.masterclass-section {
		padding: 20px 0 70px;
	}

	.masterclass-card {
		background: linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.02));
		border: 1px solid rgba(212, 175, 55, 0.35);
		border-radius: 20px;
		padding: 36px 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 32px;
		box-shadow: 0 16px 40px -20px var(--gold-glow);
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
		font-weight: 700;
	}

	.mc-header h3 {
		font-family: var(--serif);
		font-size: 1.45rem;
		color: var(--ink);
		margin: 0 0 6px;
	}

	.mc-header p {
		font-size: 0.9rem;
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
		font-size: 2.4rem;
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
		padding: 14px 28px;
		background: var(--gold-2);
		color: var(--cta-ink);
		border-radius: 999px;
		font-size: 0.92rem;
		font-weight: 700;
		text-decoration: none;
		transition: all 0.18s ease;
		white-space: nowrap;
		box-shadow: 0 4px 14px var(--gold-glow);
	}

	.mc-cta-btn:hover {
		background: var(--gold);
		transform: translateY(-2px);
		color: var(--cta-ink);
	}

	/* Guarantee Section */
	.guarantee-section {
		padding: 50px 0 80px;
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

	/* Bloom Animations */
	:global(.bloom) {
		opacity: 0;
		transform: translateY(14px);
		transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(.bloom.in) {
		opacity: 1;
		transform: none;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.bloom) {
			opacity: 1;
			transform: none;
			transition: none;
		}
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

		.features-architectural-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.diff-matrix {
			grid-template-columns: 1fr;
		}

		.testimonials-grid {
			grid-template-columns: 1fr;
		}

		.proof-stats-bar {
			grid-template-columns: repeat(2, 1fr);
		}

		.masterclass-card {
			flex-direction: column;
			text-align: center;
		}
	}

	@media (max-width: 600px) {

		.hero-actions-row {
			flex-direction: column;
			align-items: stretch;
		}

		.tier-cta.primary, .tier-cta.secondary {
			justify-content: center;
			width: 100%;
		}

		.hero-value-strip {
			flex-direction: column;
			gap: 12px;
		}

		.val-sep {
			display: none;
		}

		.features-architectural-grid {
			grid-template-columns: 1fr;
		}

		.proof-stats-bar {
			grid-template-columns: 1fr;
		}
	}
</style>
