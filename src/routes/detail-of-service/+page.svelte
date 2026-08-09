<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';

	const detailServiceJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: 'Butiran Perkhidmatan Ekosistem Wajom!',
		provider: {
			'@type': 'Organization',
			name: 'Wajom!',
			url: 'https://wajom.co'
		},
		url: 'https://wajom.co/detail-of-service',
		description: 'Spesifikasi mendalam infrastruktur awan Wajom, modul automasi WhatsApp, tahap keselamatan data & integrasi API.'
	};
</script>

<SEO
	title="Butiran Perkhidmatan & Spesifikasi Ekosistem — Wajom!"
	description="Spesifikasi perkhidmatan, modul automasi, tahap keselamatan data, integrasi API WhatsApp, dan jaminan operasi ekosistem Wajom."
	keywords="spesifikasi wajom, detail of service wajom, keselamatan whatsapp api, infrastruktur cloud wajom, terma perkhidmatan teknik"
	canonical="https://wajom.co/detail-of-service"
	ogImage="https://wajom.co/og-image.jpg"
	ogImageAlt="Spesifikasi Ekosistem Wajom"
	ogType="website"
	jsonLd={detailServiceJsonLd}
/>

<!-- Page Hero -->
<section class="page-hero">
	<div class="wrap">
		<span class="badge-tag">Spesifikasi Perkhidmatan</span>
		<h1>Membedah <em>Ekosistem Wajom</em></h1>
		<p class="sub">
			Ini bukan sekadar alat pemasaran biasa. Wajom adalah ekosistem pertumbuhan lengkap untuk
			WhatsApp — rakan strategik yang mengautomasikan tugasan harian agar anda fokus membina pasukan.
		</p>
	</div>
</section>

<hr class="rule" />

<!-- Modules Grid -->
<section>
	<div class="wrap">
		<h2 class="sec-title">4 Modul Utama Ekosistem Wajom</h2>
		<p class="sec-desc">
			Struktur lengkap yang direka khas untuk keperluan Top Leader MLM, Hartanah, Insurans, dan Emas.
		</p>

		<div class="service-grid">
			<!-- Modul 1 -->
			<div class="service-card">
				<div>
					<span class="mod-tag">Modul 01</span>
					<h3>Outreach &amp; Campaign Automatik</h3>
					<p>
						Hantar kempen follow-up berjadual secara personal atau ke group WhatsApp. Bekerja 24/7
						tanpa perlu membuka laptop setiap hari.
					</p>
				</div>
				<div class="service-bullets">
					<span>Follow-up berjadual non-stop</span>
					<span>Penghantaran ke Group &amp; Personal</span>
					<span>Drip content auto-nurture</span>
				</div>
			</div>

			<!-- Modul 2 -->
			<div class="service-card">
				<div>
					<span class="mod-tag">Modul 02</span>
					<h3>Customer Service AI</h3>
					<p>
						AI khas yang menirukan 100% gaya jawapan Top Leader untuk menjawab soalan prospek,
						menangani bantahan (objection), dan menutup jualan pakej tinggi.
					</p>
				</div>
				<div class="service-bullets">
					<span>Gaya jawapan disesuaikan</span>
					<span>Objection handling 24/7</span>
					<span>Penutupan jualan automatik</span>
				</div>
			</div>

			<!-- Modul 3 -->
			<div class="service-card">
				<div>
					<span class="mod-tag">Modul 03</span>
					<h3>Duplikasi Pasukan (Share Owner)</h3>
					<p>
						Kemudahan meng-export dan meng-import fail JSON tetapan untuk dipasang oleh seluruh ahli
						pasukan dalam masa 1 minit sahaja.
					</p>
				</div>
				<div class="service-bullets">
					<span>Duplikasi 1-klik fail JSON</span>
					<span>Akses dashboard terkawal</span>
					<span>Bantu semakan tetapan team</span>
				</div>
			</div>

			<!-- Modul 4 -->
			<div class="service-card">
				<div>
					<span class="mod-tag">Modul 04</span>
					<h3>Pengurusan Data &amp; Prospect Tracking</h3>
					<p>
						Sistem pengurusan pangkalan data prospek tersusun tanpa perlu bergantung pada lembaran
						Excel bersepah.
					</p>
				</div>
				<div class="service-bullets">
					<span>Tracking status prospek</span>
					<span>Analisis prestasi kempen</span>
					<span>Integrasi pangkalan data tersusun</span>
				</div>
			</div>
		</div>

		<div class="cta-box">
			<h3>Bersedia Transformasikan Pasukan Anda?</h3>
			<p>
				Dapatkan akses penuh ke sistem Wajom atau sertai Kelas Masterclass RM30 untuk mula
				mengautomasikan bisnes anda hari ini.
			</p>
			<a class="cta-btn" href="/register"> Daftar Kelas RM30 Sekarang → </a>
		</div>
	</div>
</section>
