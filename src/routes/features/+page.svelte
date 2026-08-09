<script lang="ts">
	import VideoModal from '$lib/components/VideoModal.svelte';
	import SEO from '$lib/components/SEO.svelte';

	let isVideoModalOpen = $state(false);
	let activeTab = $state<'evergreen' | 'ai' | 'share' | 'tracking'>('evergreen');
	let searchQuery = $state('');
	let selectedCategory = $state<'all' | 'ai' | 'automasi' | 'kempen' | 'pengurusan' | 'integration' | 'keselamatan'>('all');
	let isSimulatingImport = $state(false);
	let importCompleted = $state(false);

	function runImportSimulation() {
		isSimulatingImport = true;
		importCompleted = false;
		setTimeout(() => {
			isSimulatingImport = false;
			importCompleted = true;
		}, 1200);
	}

	interface FeatureItem {
		id: string;
		title: string;
		category: 'ai' | 'automasi' | 'kempen' | 'pengurusan' | 'integration' | 'keselamatan';
		categoryLabel: string;
		description: string;
		keywords: string;
		badgeColor: string;
		iconSvg: string;
	}

	const features: FeatureItem[] = [
		{
			id: 'add-contact',
			title: 'Add Contact',
			category: 'pengurusan',
			categoryLabel: 'Pengurusan',
			description: 'Tambah no telefon prospek & team dan save dalam specific "List". Boleh pilih untuk tambah secara manual (copy & paste) atau dari file CSV, Google Form, Webhook, Tap Site, Elementor.',
			keywords: 'tambah kenalan contact senarai manual csv google form webhook tapsite elementor',
			badgeColor: '#3b82f6',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />'
		},
		{
			id: 'campaign',
			title: 'Campaign',
			category: 'kempen',
			categoryLabel: 'Kempen',
			description: 'Boleh hantar copywriting, gambar, video, audio ke nombor personal @ group whatsapp.',
			keywords: 'kempen campaign marketing broadcast gambar video audio personal group',
			badgeColor: '#10b981',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />'
		},
		{
			id: 'list',
			title: 'List',
			category: 'pengurusan',
			categoryLabel: 'Pengurusan',
			description: 'Asingkan senarai stranger, prospek, anak team, customer & no telefon yang kita dah block.',
			keywords: 'senarai list kenalan contact manage stranger customer block',
			badgeColor: '#8b5cf6',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />'
		},
		{
			id: 'bot',
			title: 'Bot',
			category: 'automasi',
			categoryLabel: 'Automasi',
			description: 'Robot automatik yang bekerja 24/7 tanpa cuti menjawab semua soalan prospek & team.',
			keywords: 'bot automatik automation chatbot robot 24/7 reply',
			badgeColor: '#f97316',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />'
		},
		{
			id: 'chat-ai',
			title: 'Chat AI',
			category: 'ai',
			categoryLabel: 'Chat AI',
			description: 'Jawab semua soalan prospek ikut arahan dari Prompt yang kita buat. Tidak akan berputus asa, sentiasa sabar & cakap baik-baik penuh empati melayan kerenah prospek sampai close sales ribu-ribu.',
			keywords: 'chat ai artificial intelligence prompt empati sales closing perbualan',
			badgeColor: '#4ec294',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />'
		},
		{
			id: 'evergreen-campaign',
			title: 'Evergreen Campaign',
			category: 'kempen',
			categoryLabel: 'Kempen',
			description: 'Secara automatik menghantar banyak siri content follow-up. Contohnya: Prospek/ Anak team/ Customer terima mesej selama 30 hari tanpa perlu setting setiap hari. Unlimited hantar content ke nombor personal & group WhatsApp.',
			keywords: 'kempen evergreen automatik drip follow-up siri content 30 hari',
			badgeColor: '#379f76',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />'
		},
		{
			id: 'loop-message',
			title: 'Loop Message',
			category: 'automasi',
			categoryLabel: 'Automasi',
			description: 'Schedule post ke group WhatsApp @ secara personal. Boleh setting untuk post setiap jam/ hari/ minggu/ bulan/ tahun.',
			keywords: 'mesej gelung loop berulang terjadual schedule post group jam hari minggu bulan tahun',
			badgeColor: '#ec4899',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />'
		},
		{
			id: 'daily-leads',
			title: 'Daily Leads',
			category: 'pengurusan',
			categoryLabel: 'Pengurusan',
			description: 'Simpan semua leads yang masuk setiap hari secara automatik.',
			keywords: 'leads harian daily prospek pelanggan rekod simpan',
			badgeColor: '#eab308',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />'
		},
		{
			id: 'otp-widget',
			title: 'OTP Widget',
			category: 'keselamatan',
			categoryLabel: 'Keselamatan & Perlindungan',
			description: 'One Time Password. Memudahkan proses pengesahan identiti pengguna. Contoh: Kawal akses masuk ke learning portal/ Telegram/ Website khas. Nak akses kena masukkan OTP dulu. Sistem Wajom secara Automatik buatkan OTP yang berbeza untuk user yang berbeza.',
			keywords: 'otp widget keselamatan security one time password pengesahan portal telegram website',
			badgeColor: '#ef4444',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />'
		},
		{
			id: 'grab-group',
			title: 'Grab Group',
			category: 'pengurusan',
			categoryLabel: 'Pengurusan',
			description: 'Sedut no telefon dari semua group whatsapp yang sudah kita join.',
			keywords: 'ambil kumpulan group data whatsapp sedut nombor',
			badgeColor: '#14b8a6',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />'
		},
		{
			id: 'integration',
			title: 'Integration',
			category: 'integration',
			categoryLabel: 'Integration',
			description: 'Wajom! boleh diintegrasikan dengan pelbagai aplikasi pihak ketiga seperti Google Forms, Webhook, Tapsite, dan Elementor. Sistem Wajom akan terus menghantar mesej aluan & berkongsi pautan Kolam prospek.',
			keywords: 'integrasi integration platform api webhook google form tapsite elementor third-party',
			badgeColor: '#06b6d4',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />'
		},
		{
			id: 'whatsapp-api',
			title: 'WhatsApp API',
			category: 'integration',
			categoryLabel: 'Integration',
			description: 'Integrasi untuk menghantar mesej secara automatik dengan kualiti delivery yang tinggi dan stabil. Sokongan untuk notifikasi real-time dengan kebenaran penuh dari WhatsApp.',
			keywords: 'whatsapp api business cloud api official resmi delivery notifikasi real-time',
			badgeColor: '#10b981',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />'
		},
		{
			id: 'bot-form',
			title: 'Bot Form',
			category: 'automasi',
			categoryLabel: 'Automasi',
			description: 'Tanya beberapa soalan kepada prospek. Sistem Wajom simpan jawapan dalam Wajom & boleh import ke file CSV.',
			keywords: 'borang bot form builder pembina soalan prospek csv import',
			badgeColor: '#8b5cf6',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />'
		},
		{
			id: 'move-copy-list',
			title: 'Move/Copy List',
			category: 'pengurusan',
			categoryLabel: 'Pengurusan',
			description: 'Dengan cepat boleh Copy beratus nombor Telefon Dari excel Dan terus paste masuk dalam "List" wajom. Siap dalam Masa kurang 10 saat!',
			keywords: 'pindah salin senarai move copy list excel paste cepat 10 saat',
			badgeColor: '#f59e0b',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />'
		},
		{
			id: 'queue',
			title: 'Queue',
			category: 'automasi',
			categoryLabel: 'Automasi',
			description: 'Lihat status kempen yang sudah dijadualkan. Sent, failed, waiting, pending.',
			keywords: 'barisan queue mesej antrian schedule status sent failed waiting pending',
			badgeColor: '#64748b',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />'
		},
		{
			id: 'sequencer',
			title: 'Sequencer',
			category: 'automasi',
			categoryLabel: 'Automasi',
			description: 'Sequencer Wajom Secara automatik membuat nombor bersiri. Boleh digunakan untuk pendaftaran keahlian lalu menghasilkan No ahli yang berbeza kepada setiap ahli. Juga membuat no invois untuk setiap pelanggan.',
			keywords: 'sequencer urutan auto increment bot nombor bersiri ahli invois invoice',
			badgeColor: '#0284c7',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />'
		},
		{
			id: 'spam-limiter',
			title: 'Spam Limiter',
			category: 'keselamatan',
			categoryLabel: 'Keselamatan & Perlindungan',
			description: 'Mencegah no whatsapp dari di banned dengan cara menghad & mengawal kekerapan 1 nombor whatsapp menghantar mesej.',
			keywords: 'pembatas spam limiter kekerapan mesej elak ban kawal keselamatan',
			badgeColor: '#c25450',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />'
		},
		{
			id: 'working-time-control',
			title: 'Working Time Control',
			category: 'automasi',
			categoryLabel: 'Automasi',
			description: 'Menghadkan chat bot Wajom bekerja. E.g. bot tidak akan reply apa-apa keyword semasa manusia sepatutnya tidur. Ini salah satu feature untuk elak no whatsapp yang kita sayangi dari kena banned.',
			keywords: 'kawalan masa kerja working time control jam tidur elak ban bot schedule',
			badgeColor: '#379f76',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />'
		},
		{
			id: 'whatsapp-training-circle',
			title: 'WhatsApp Training Circle',
			category: 'keselamatan',
			categoryLabel: 'Keselamatan & Perlindungan',
			description: 'Fungsi warm up paling cool di dunia! Tak payah link nombor whatsapp dengan Wajom tapi boleh warm up. Unlimited nombor boleh warm up. Content warm-up bakal buat anda senyum bahagia.',
			keywords: 'bulatan latihan whatsapp training circle nombor warm up',
			badgeColor: '#4ec294',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />'
		},
		{
			id: 'instance-info',
			title: 'Instance Info',
			category: 'pengurusan',
			categoryLabel: 'Pengurusan',
			description: 'Paparan yang menunjukkan summary instance nombor whatsapp anda termasuklah aktiviti login, logout no whatsapp. Semua feature yang telah diberikan kepada setiap akaun whatsapp di dalam sistem Wajom.',
			keywords: 'info instance maklumat whatsapp summary login logout akaun',
			badgeColor: '#2563eb',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'
		},
		{
			id: 'human-handover',
			title: 'Human Handover',
			category: 'automasi',
			categoryLabel: 'Automasi',
			description: 'Alihkan perbualan dari bot ke ejen manusia dengan cepat & mudah.',
			keywords: 'penyerahan manusia handover ejen operator alih chat perbualan',
			badgeColor: '#a855f7',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />'
		},
		{
			id: 'ai-add-to-list',
			title: 'AI Add to List',
			category: 'ai',
			categoryLabel: 'Chat AI',
			description: 'Ketika ada prospek mesej kita tanpa mengisi form dan terus mesej ke nombor Chat Ai... Sistem Wajom akan terus save nombor telefon ke dalam list secara automatik.',
			keywords: 'ai tambah senarai automatik kenalan save nombor follow up',
			badgeColor: '#06b6d4',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />'
		},
		{
			id: 'ai-daily-leads',
			title: 'AI Daily Leads',
			category: 'ai',
			categoryLabel: 'Chat AI',
			description: 'Setiap hari Rekod semua leads baru yang mesej no Chat Ai kita secara tersusun.',
			keywords: 'ai leads harian bantuan prospek rekod baru chat ai',
			badgeColor: '#d97706',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />'
		},
		{
			id: 'share-owner',
			title: 'Share Owner',
			category: 'pengurusan',
			categoryLabel: 'Pengurusan',
			description: 'Berikan full akses @ aksess tertentu kepada user lain. Tak perlu kongsi username & password untuk berikan aksess kepada user lain.',
			keywords: 'kongsi pemilik share owner akses view edit peranan akaun',
			badgeColor: '#ea580c',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />'
		},
		{
			id: '24-7-on',
			title: '24/7 ON',
			category: 'automasi',
			categoryLabel: 'Automasi',
			description: 'Tak perlu on laptop, internet dan juga phone. Enjin automasi Wajom sentiasa aktif beroperasi di sistem awan.',
			keywords: '24/7 on sentiasa aktif laptop internet phone cloud awan 24 jam',
			badgeColor: '#10b981',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />'
		},
		{
			id: 'apps',
			title: 'Apps',
			category: 'pengurusan',
			categoryLabel: 'Pengurusan',
			description: 'Takde laptop tak jadi masalah. Boleh setting Wajom di handphone dengan mudah.',
			keywords: 'apps aplikasi handphone mobile setting telefon smartphone',
			badgeColor: '#3b82f6',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />'
		},
		{
			id: 'sleep-notification',
			title: 'Sleep Notification',
			category: 'keselamatan',
			categoryLabel: 'Keselamatan & Perlindungan',
			description: 'Setiap kali whatsapp disconnect kita akan dapat notification. Fungsi ajaib untuk elak sistem Wajom Failed hantar follow up, chat Ai sentiasa menjawab & close ribu-ribu sales.',
			keywords: 'sleep notification whatsapp disconnect notifikasi tidur alert amaran',
			badgeColor: '#eab308',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM4.583 17.321C3.553 16.227 3 15.803 3 15c0-.803.553-1.227 1.583-2.321C5.417 11.227 6 10.803 6 10c0-.803-.583-1.227-1.417-2.321C3.553 6.227 3 5.803 3 5c0-.803.553-1.227 1.583-2.321C5.417 1.227 6 .803 6 0h2c0 .803.583 1.227 1.417 2.321C10.447 3.773 11 4.197 11 5c0 .803-.553 1.227-1.583 2.321C8.583 8.773 8 9.197 8 10c0 .803.583 1.227 1.417 2.321C10.447 13.773 11 14.197 11 15" />'
		},
		{
			id: 'json',
			title: 'Json',
			category: 'pengurusan',
			categoryLabel: 'Pengurusan',
			description: 'Boleh export keseluruhan content yang kita dah masukkan dalam Wajom kita. Bila anak team import ke Wajom mereka terus dapat semua content leader. Tak perlu taip satu persatu.',
			keywords: 'json export import content team leader duplikasi 1-click 30 hari',
			badgeColor: '#a855f7',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />'
		},
		{
			id: 'unlimited-space',
			title: 'Unlimited Space',
			category: 'pengurusan',
			categoryLabel: 'Pengurusan',
			description: 'Had upload 1 media adalah 10mb. Tapi... tiada had untuk keseluruhan akaun Wajom kita.',
			keywords: 'unlimited space ruang tanpa had upload media storan cloud',
			badgeColor: '#6366f1',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />'
		},
		{
			id: 'bot-berantai',
			title: 'Bot Berantai',
			category: 'automasi',
			categoryLabel: 'Automasi',
			description: 'Satu bot terus boleh setting banyak mesej & banyak media. Sangat mudah untuk buat bot berantai. Tak perlu buat banyak bot.',
			keywords: 'bot berantai chain multiple mesej media siri urutan',
			badgeColor: '#f97316',
			iconSvg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />'
		}
	];

	const categories = [
		{ id: 'all', label: 'Semua' },
		{ id: 'ai', label: 'Chat AI' },
		{ id: 'automasi', label: 'Automasi' },
		{ id: 'kempen', label: 'Kempen' },
		{ id: 'pengurusan', label: 'Pengurusan' },
		{ id: 'integration', label: 'Integration' },
		{ id: 'keselamatan', label: 'Keselamatan & Perlindungan' }
	] as const;

	let filteredFeatures = $derived(
		features.filter((item) => {
			const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
			const query = searchQuery.trim().toLowerCase();
			const matchesQuery =
				query === '' ||
				item.title.toLowerCase().includes(query) ||
				item.description.toLowerCase().includes(query) ||
				item.keywords.toLowerCase().includes(query) ||
				item.categoryLabel.toLowerCase().includes(query);

			return matchesCategory && matchesQuery;
		})
	);

	function countForCategory(catId: string) {
		if (catId === 'all') return features.length;
		return features.filter((f) => f.category === catId).length;
	}

	const featuresJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Ciri-Ciri Utama Wajom WhatsApp Automation',
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web Cloud',
		url: 'https://wajom.co/features',
		description: '30+ ciri canggih Wajom: Chatbot AI pintas, Evergreen Campaign, Auto Follow-up, OTP Widget, WhatsApp API, dan duplikasi pasukan JSON 1-klik.',
		featureList: 'Chatbot AI, Evergreen Drip Campaign, Auto Follow-Up, CRM Contact Management, Team Duplication JSON, WhatsApp Web API, Form Integrations'
	};
</script>

<SEO
	title="Ciri-Ciri Utama & Dashboard Automasi — Wajom!"
	description="Terokai 30+ ciri canggih Wajom: Chat AI pintas, Evergreen Campaign, Auto Follow-up, OTP Widget, WhatsApp API, dan duplikasi pasukan JSON 1-klik."
	keywords="ciri wajom, chatbot ai whatsapp, evergreen drip campaign, whatsapp auto follow up, whatsapp api malaysia, json duplikasi team, otp whatsapp, blast whatsapp pukal, crm whatsapp malaysia, feature list wajom"
	canonical="https://wajom.co/features"
	ogImage="https://wajom.co/feature-ai-visual.jpg"
	ogImageAlt="Visual Ciri Chat AI dan Automasi Wajom"
	ogType="website"
	jsonLd={featuresJsonLd}
/>

<!-- Hero Section -->
<section class="hero">
	<div class="wrap">
		<div class="hero-stage">
			<div class="hero-eyebrow">
				<span class="dot"></span>
				Dashboard &amp; Katalog Ciri Wajom
			</div>

			<h1>Eksplorasi 30+ Ciri Canggih <em>Wajom Automation Engine</em></h1>

			<p class="lede">
				Uruskan kempen follow-up automatik, enjin Chat AI, pengurusan prospek, dan integrasi WhatsApp di satu tempat tersusun. Jom pilih automasi impian anda hari ini.
			</p>

			<div class="hero-buttons">
				<a class="cta-primary" href="/register">
					Dapatkan Akses Wajom Sekarang <span style="margin-left: 4px;">→</span>
				</a>
				<button
					class="cta-secondary"
					type="button"
					onclick={() => (isVideoModalOpen = true)}
				>
					Tonton Demo Automasi
				</button>
			</div>

			<div class="hero-trust-strip">
				<span>Persediaan 5 Minit</span> · <span>Perlindungan Anti-Spam</span> · <span>24/7 Awan Beroperasi</span>
			</div>
		</div>
	</div>
</section>

<!-- Search & Filter Controls -->
<section style="padding: 0 0 40px;">
	<div class="wrap">
		<div class="search-filter-card">
			<div class="search-input-wrapper">
				<svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Cari feature yang anda impikan (e.g. Chat AI, OTP, Bot, Evergreen)..."
					aria-label="Cari feature Wajom"
				/>
				{#if searchQuery.length > 0}
					<button
						class="clear-search-btn"
						onclick={() => (searchQuery = '')}
						aria-label="Kosongkan carian"
					>
						✕
					</button>
				{/if}
			</div>

			<!-- Filter Tabs -->
			<div class="filter-tabs">
				{#each categories as cat}
					<button
						class="filter-tab-btn"
						class:active={selectedCategory === cat.id}
						onclick={() => (selectedCategory = cat.id)}
					>
						<span>{cat.label}</span>
						<span class="count-badge">{countForCategory(cat.id)}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Features Grid -->
<section style="padding: 20px 0 80px;">
	<div class="wrap">
		<div class="grid-header">
			<div class="grid-title">
				<h2>
					{#if selectedCategory === 'all'}
						Semua Ciri ({filteredFeatures.length})
					{:else}
						Kategori: <em>{categories.find(c => c.id === selectedCategory)?.label}</em> ({filteredFeatures.length})
					{/if}
				</h2>
				{#if searchQuery.trim().length > 0}
					<p class="search-result-hint">
						Menunjukkan hasil untuk "<span class="query-highlight">{searchQuery}</span>"
					</p>
				{/if}
			</div>
		</div>

		{#if filteredFeatures.length === 0}
			<div class="empty-state">
				<div class="empty-icon">
					<svg class="empty-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</div>
				<h3>Tiada Feature Ditemui</h3>
				<p>Carian untuk "{searchQuery}" tidak menemui padanan. Sila cuba kata kunci lain atau pilih kategori "Semua".</p>
				<button class="cta-secondary" onclick={() => { searchQuery = ''; selectedCategory = 'all'; }}>
					Reset Carian &amp; Filter
				</button>
			</div>
		{:else}
			<div class="features-grid">
				{#each filteredFeatures as item (item.id)}
					<div class="feature-card">
						<div class="feature-card-header">
							<div class="feature-icon" style="background: {item.badgeColor}18; color: {item.badgeColor}; border: 1px solid {item.badgeColor}33;">
								<svg fill="none" viewBox="0 0 24 24">
									{@html item.iconSvg}
								</svg>
							</div>
							<span class="feature-cat-tag" style="color: {item.badgeColor}; border-color: {item.badgeColor}40; background: {item.badgeColor}10;">
								{item.categoryLabel}
							</span>
						</div>

						<h3 class="feature-title">{item.title}</h3>
						<p class="feature-desc">{item.description}</p>

						<div class="feature-card-footer">
							<span class="feature-status">
								<span class="status-dot" style="background: {item.badgeColor};"></span>
								Tersedia Dalam Wajom
							</span>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

<hr class="rule" />

<!-- Interactive Bedah Ciri (Spotlight Showcase) -->
<section style="padding: 90px 0;">
	<div class="wrap">
		<div style="text-align: center; margin-bottom: 48px;">
			<span class="badge-tag">ENGINE ARCHITECTURE</span>
			<h2 class="sec-title" style="margin-top: 10px;">Bedah Ciri <em>Modul Impian Top Leader</em></h2>
			<p class="sec-desc" style="margin: 0 auto;">
				Pilih modul di bawah untuk melihat simulasi enjin automasi tersusun yang melonjakkan kadar penutupan jualan pasukan anda.
			</p>
		</div>

		<!-- HUD Control Console Nav -->
		<div class="hud-nav-bar">
			<button
				class="hud-nav-item"
				class:active={activeTab === 'evergreen'}
				onclick={() => (activeTab = 'evergreen')}
			>
				<span class="hud-num">01</span>
				<div class="hud-text">
					<span class="hud-title">Evergreen Drip Flow</span>
					<span class="hud-tag">AUTO-SCHEDULE</span>
				</div>
			</button>

			<button
				class="hud-nav-item"
				class:active={activeTab === 'ai'}
				onclick={() => (activeTab = 'ai')}
			>
				<span class="hud-num">02</span>
				<div class="hud-text">
					<span class="hud-title">Neural CS AI</span>
					<span class="hud-tag">OBJECTION ENGINE</span>
				</div>
			</button>

			<button
				class="hud-nav-item"
				class:active={activeTab === 'share'}
				onclick={() => (activeTab = 'share')}
			>
				<span class="hud-num">03</span>
				<div class="hud-text">
					<span class="hud-title">Share Owner JSON</span>
					<span class="hud-tag">1-CLICK DUPLICATE</span>
				</div>
			</button>

			<button
				class="hud-nav-item"
				class:active={activeTab === 'tracking'}
				onclick={() => (activeTab = 'tracking')}
			>
				<span class="hud-num">04</span>
				<div class="hud-text">
					<span class="hud-title">Prospect CRM Pipeline</span>
					<span class="hud-tag">LIVE MATRIX</span>
				</div>
			</button>
		</div>

		<!-- Interactive Canvas Panel -->
		<div class="hud-canvas-panel">
			{#if activeTab === 'evergreen'}
				<div class="hud-grid">
					<!-- Left Info -->
					<div class="hud-info-side">
						<span class="hud-mod-badge">MODUL 01 // EVERGREEN DRIP ENGINE</span>
						<h3 class="hud-headline">
							Urutan Susulan 30 Hari <em>Auto-Trigger 24/7</em>
						</h3>
						<p class="hud-desc">
							Sekali tetapkan urutan mesej drip (Hari 1, 3, 7, 14, 30), anda boleh menutup laptop dan Wajom akan menghantar mesej secara automatik ke nombor personal dan Group WhatsApp.
						</p>

						<div class="hud-feature-list">
							<div class="hud-feat-item">
								<span class="hud-check">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
								</span>
								<div>
									<strong>Siri Mesej Berganti (Drip Sequence)</strong>
									<p>Hantar copywriting, gambar, video &amp; voice note mengikut sela masa tepat.</p>
								</div>
							</div>
							<div class="hud-feat-item">
								<span class="hud-check">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
								</span>
								<div>
									<strong>Auto-Pause Apabila Respon</strong>
									<p>Mencegah mesej promosi berulang jika prospek telah membalas atau membeli.</p>
								</div>
							</div>
							<div class="hud-feat-item">
								<span class="hud-check">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
								</span>
								<div>
									<strong>Group &amp; Personal Dispatch</strong>
									<p>Mencapai ribuan prospek serentak di Group WhatsApp &amp; chat peribadi.</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Right Generated Visual Presentation (iPhone 17 Pro Max Mockup) -->
					<div class="hud-artifact-side">
						<img src="/campaign.png" alt="Evergreen Campaign Wajom" class="feature-generated-img" />
					</div>
				</div>
			{:else if activeTab === 'ai'}
				<div class="hud-grid">
					<!-- Left Info -->
					<div class="hud-info-side">
						<span class="hud-mod-badge">MODUL 02 // NEURAL CS AI ENGINE</span>
						<h3 class="hud-headline">
							Customer Service AI <em>Gaya Penutupan Leader</em>
						</h3>
						<p class="hud-desc">
							Bukan sekadar bot kaku. AI ini dilatih khusus untuk memahami nada pertuturan Top Leader, melayan soalan prospek dengan penuh empati, dan menyelesaikan bantahan harga serta-merta 24/7.
						</p>

						<div class="hud-metrics-row">
							<div class="hud-metric-card">
								<span class="m-val">&lt; 0.4s</span>
								<span class="m-lbl">Masa Respon AI</span>
							</div>
							<div class="hud-metric-card">
								<span class="m-val">99.8%</span>
								<span class="m-lbl">Ketepatan Nada</span>
							</div>
							<div class="hud-metric-card">
								<span class="m-val">1.5M</span>
								<span class="m-lbl">Wajom Tokens</span>
							</div>
						</div>

						<div class="hud-feature-list" style="margin-top: 20px;">
							<div class="hud-feat-item">
								<span class="hud-check">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
								</span>
								<div>
									<strong>Pengendalian Bantahan (Objection Handling)</strong>
									<p>Menjawab bantahan "mahal", "tiada masa", dan "ragu-ragu" dengan hujah bernilai tinggi.</p>
								</div>
							</div>
							<div class="hud-feat-item">
								<span class="hud-check">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
								</span>
								<div>
									<strong>Pautan Pembayaran Automatik</strong>
									<p>Mengecam niat membeli dan terus berkongsi link checkout untuk closing pantas.</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Right Generated Visual Presentation (WhatsApp AI Chat Bubbles) -->
					<div class="hud-artifact-side">
						<img src="/chatai.png" alt="Chat AI Wajom" class="feature-generated-img" />
					</div>
				</div>
			{:else if activeTab === 'share'}
				<div class="hud-grid">
					<!-- Left Info -->
					<div class="hud-info-side">
						<span class="hud-mod-badge">MODUL 03 // SHARE OWNER &amp; JSON HUB</span>
						<h3 class="hud-headline">
							Duplikasi Kempen 30-Hari <em>Dalam 10 Saat</em>
						</h3>
						<p class="hud-desc">
							Sistem duplikasi impian setiap leader network! Anda tidak perlu lagi berkongsi username atau password. Cuma eksport 1 fail JSON kempen anda, dan anak team boleh mengimportnya dalam 1-klik.
						</p>

						<div class="hud-feature-list">
							<div class="hud-feat-item">
								<span class="hud-check">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
								</span>
								<div>
									<strong>Eksport &amp; Import 1-Klik Fail JSON</strong>
									<p>Seluruh ayat follow-up, tetapan bot &amp; skrip AI disalin terus ke akaun team.</p>
								</div>
							</div>
							<div class="hud-feat-item">
								<span class="hud-check">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
								</span>
								<div>
									<strong>Kawalan Akses Share Owner</strong>
									<p>Berikan akses tertentu kepada ajut visual atau admin tanpa mendedahkan kata laluan utama.</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Right Generated Visual Presentation (Duplikasi Kempen Visual) -->
					<div class="hud-artifact-side">
						<img src="/tab-duplication-visual.jpg" alt="Visual Duplikasi Kempen 1-Klik Wajom" class="feature-generated-img" />
					</div>
				</div>
			{:else}
				<div class="hud-grid">
					<!-- Left Info -->
					<div class="hud-info-side">
						<span class="hud-mod-badge">MODUL 04 // LIVE CRM PIPELINE</span>
						<h3 class="hud-headline">
							Penjejakan Prospek <em>&amp; Matriks Jualan</em>
						</h3>
						<p class="hud-desc">
							Tinggalkan buku listing dan fail Excel yang bersepah. Wajom mengkategorikan prospek anda secara automatik mengikut tahap minat (Cold, Warm, Hot, Closed VIP) secara real-time.
						</p>

						<div class="hud-feature-list">
							<div class="hud-feat-item">
								<span class="hud-check">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
								</span>
								<div>
									<strong>Pemasukan Leads Harian (Daily Leads)</strong>
									<p>Setiap nombor baharu yang memulakan chat disimpan dalam pangkalan data teratur.</p>
								</div>
							</div>
							<div class="hud-feat-item">
								<span class="hud-check">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
								</span>
								<div>
									<strong>Analisis Kadar Closing (Conversion Metrics)</strong>
									<p>Pantau peratusan kejayaan kempen anda dan prestasi respons AI secara tepat.</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Right Generated Visual Presentation (Penjejakan Prospek CRM Visual) -->
					<div class="hud-artifact-side">
						<img src="/tab-crm-visual.jpg" alt="Visual Penjejakan Prospek CRM Dashboard Wajom" class="feature-generated-img" />
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Comparison Table -->
<section style="padding: 40px 0 80px;">
	<div class="wrap">
		<div style="text-align: center; margin-bottom: 44px;">
			<h2 class="sec-title">Perbandingan <em>Wajom vs Cara Manual</em></h2>
			<p class="sec-desc" style="margin: 0 auto;">
				Lihat mengapa ratusan Top Leader beralih ke Wajom untuk menggandakan hasil jualan mereka.
			</p>
		</div>

		<div style="overflow-x: auto;">
			<table class="comp-table">
				<thead>
					<tr>
						<th>Ciri / Fungsi</th>
						<th style="color: var(--ruby);">Cara Manual / Admin</th>
						<th style="color: var(--emerald-2); background: rgba(55,159,118,0.1); border-radius: 12px 12px 0 0;">Wajom Automation Platform</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="feature-col">Masa Follow-up Mesej</td>
						<td class="bad-col">4 - 6 Jam Sehari (Penat)</td>
						<td class="good-col">100% Automatik 24/7 (Tutup Laptop)</td>
					</tr>
					<tr>
						<td class="feature-col">Duplikasi Sistem Pasukan</td>
						<td class="bad-col">Sukar &amp; Kucar-kacir</td>
						<td class="good-col">1-Click Import Fail JSON</td>
					</tr>
					<tr>
						<td class="feature-col">Respon Soalan &amp; Objection</td>
						<td class="bad-col">Lambat, Prospek Sejuk</td>
						<td class="good-col">AI Engine 100% Gaya Top Leader</td>
					</tr>
					<tr>
						<td class="feature-col">Kapasiti Prospek</td>
						<td class="bad-col">Terhad 50-100 orang/hari</td>
						<td class="good-col">Tanpa Had (Unlimited Scale)</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</section>

<!-- Final Strong CTA Section -->
<section style="padding: 0 0 100px;">
	<div class="wrap">
		<div class="final-cta-card">
			<div class="cta-inner">
				<span class="cta-badge">TAWARAN TERHAD</span>
				<h2 class="cta-title">Siap untuk <span class="gold-highlight">Revolusi</span> WhatsApp Anda?</h2>
				<p class="cta-sub">
					Lebih daripada 30+ ciri canggih menanti anda! Automasi WhatsApp, Chat AI, Pengurusan Kempen, dan duplikasi pasukan. Sertai ribuan perniagaan yang telah merasai transformasi digital.
				</p>

				<div class="cta-stats-grid">
					<div class="cta-stat-item">
						<div class="stat-num">30+</div>
						<div class="stat-lbl">Ciri Canggih</div>
					</div>
					<div class="cta-stat-item">
						<div class="stat-num">24/7</div>
						<div class="stat-lbl">Support AI</div>
					</div>
					<div class="cta-stat-item">
						<div class="stat-num">∞</div>
						<div class="stat-lbl">Kemungkinan</div>
					</div>
				</div>

				<div style="margin-top: 32px;">
					<a class="cta-primary big-cta" href="/register">
						MULA SEKARANG!
						<span style="margin-left: 8px;">→</span>
					</a>
					<p class="cta-micro font-mono">
						Persediaan dalam 5 minit • Jaminan kepuasan • Data selamat
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<VideoModal bind:isOpen={isVideoModalOpen} />

<style>
	/* ── Badge & Titles ─────────── */
	.badge-tag {
		display: inline-block;
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--emerald-2);
		letter-spacing: 0.15em;
		text-transform: uppercase;
		background: var(--emerald-dim);
		border: 1px solid rgba(78, 194, 148, 0.3);
		padding: 4px 14px;
		border-radius: 999px;
	}

	.sec-title {
		font-family: var(--serif);
		font-size: clamp(1.8rem, 4vw, 2.6rem);
		font-weight: 600;
		color: var(--ink);
		margin: 8px 0 12px;
	}

	.sec-title em {
		font-family: var(--accent-serif);
		font-style: italic;
		color: var(--emerald-2);
		font-weight: 400;
	}

	.sec-desc {
		color: var(--ink-2);
		font-size: 1.02rem;
		max-width: 60ch;
		line-height: 1.6;
	}

	/* ── Search & Filter Controls ─────────── */
	.search-filter-card {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 20px;
		padding: 24px;
		backdrop-filter: blur(16px);
		box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.5);
	}

	.search-input-wrapper {
		position: relative;
		margin-bottom: 20px;
	}

	.search-icon {
		position: absolute;
		left: 16px;
		top: 50%;
		transform: translateY(-50%);
		width: 20px;
		height: 20px;
		color: var(--ink-3);
		pointer-events: none;
	}

	.search-input-wrapper input {
		width: 100%;
		padding: 14px 44px 14px 48px;
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		border-radius: 12px;
		color: var(--ink);
		font-family: var(--sans);
		font-size: 0.98rem;
		outline: none;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.search-input-wrapper input:focus {
		border-color: var(--emerald);
		box-shadow: 0 0 0 3px rgba(55, 159, 118, 0.2);
	}

	.clear-search-btn {
		position: absolute;
		right: 14px;
		top: 50%;
		transform: translateY(-50%);
		background: transparent;
		border: none;
		color: var(--ink-3);
		font-size: 1rem;
		cursor: pointer;
		padding: 4px 8px;
		border-radius: 4px;
	}

	.clear-search-btn:hover {
		color: var(--ink);
		background: var(--rule-2);
	}

	.filter-tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.filter-tab-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-family: var(--sans);
		font-size: 0.88rem;
		font-weight: 500;
		color: var(--ink-2);
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		padding: 8px 16px;
		border-radius: 999px;
		cursor: pointer;
		transition: all 0.18s ease;
	}

	.filter-tab-btn:hover {
		border-color: var(--emerald);
		color: var(--ink);
		background: var(--bg-2);
	}

	.count-badge {
		font-family: var(--mono);
		font-size: 0.72rem;
		background: rgba(255, 255, 255, 0.08);
		color: var(--ink-3);
		padding: 2px 8px;
		border-radius: 999px;
		transition: all 0.18s ease;
	}

	:global([data-theme="light"]) .count-badge {
		background: rgba(0, 0, 0, 0.06);
		color: var(--ink-2);
	}

	/* Dark mode active state (default) */
	.filter-tab-btn.active {
		background: var(--emerald-dim);
		border-color: var(--emerald-2);
		color: var(--ink);
		font-weight: 600;
		box-shadow: 0 4px 14px rgba(55, 159, 118, 0.25);
	}

	.filter-tab-btn.active .count-badge {
		background: rgba(78, 194, 148, 0.25);
		color: var(--emerald-2);
		border: 1px solid rgba(78, 194, 148, 0.4);
		font-weight: 700;
	}

	/* Light mode active state */
	:global([data-theme="light"]) .filter-tab-btn.active {
		background: var(--emerald);
		border-color: var(--emerald);
		color: #ffffff;
		font-weight: 600;
		box-shadow: 0 4px 14px rgba(55, 159, 118, 0.35);
	}

	:global([data-theme="light"]) .filter-tab-btn.active .count-badge {
		background: rgba(255, 255, 255, 0.25);
		color: #ffffff;
		border: 1px solid rgba(255, 255, 255, 0.4);
		font-weight: 700;
	}

	/* ── Features Grid ─────────── */
	.grid-header {
		margin-bottom: 24px;
	}

	.grid-title h2 {
		font-family: var(--serif);
		font-size: 1.6rem;
		margin: 0;
		color: var(--ink);
	}

	.grid-title h2 em {
		font-family: var(--accent-serif);
		color: var(--emerald-2);
		font-style: italic;
	}

	.search-result-hint {
		font-size: 0.88rem;
		color: var(--ink-3);
		margin: 4px 0 0;
	}

	.query-highlight {
		color: var(--gold-2);
		font-weight: 600;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 20px;
	}

	.feature-card {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 16px;
		padding: 22px;
		display: flex;
		flex-direction: column;
		transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
		position: relative;
	}

	.feature-card:hover {
		transform: translateY(-3px);
		border-color: rgba(55, 159, 118, 0.4);
		box-shadow: 0 12px 28px -10px rgba(0, 0, 0, 0.6);
	}

	.feature-card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 16px;
	}

	.feature-icon {
		width: 42px;
		height: 42px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.feature-icon svg {
		width: 22px;
		height: 22px;
		stroke: currentColor;
	}

	.feature-cat-tag {
		font-family: var(--mono);
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		padding: 3px 10px;
		border-radius: 999px;
		border: 1px solid transparent;
		text-transform: uppercase;
	}

	.feature-title {
		font-family: var(--serif);
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--ink);
		margin: 0 0 10px;
	}

	.feature-desc {
		font-size: 0.9rem;
		color: var(--ink-2);
		line-height: 1.55;
		margin: 0 0 16px;
		flex-grow: 1;
	}

	.feature-card-footer {
		padding-top: 12px;
		border-top: 1px dashed var(--rule);
	}

	.feature-status {
		font-family: var(--mono);
		font-size: 0.72rem;
		color: var(--ink-3);
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}

	.status-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
	}

	.empty-state {
		text-align: center;
		padding: 60px 20px;
		background: var(--bg-2);
		border: 1px dashed var(--rule-2);
		border-radius: 20px;
	}

	.empty-icon {
		display: flex;
		justify-content: center;
		margin-bottom: 12px;
	}

	.empty-svg {
		width: 48px;
		height: 48px;
		color: var(--ink-3);
	}

	.empty-state h3 {
		font-family: var(--serif);
		font-size: 1.4rem;
		margin: 0 0 8px;
		color: var(--ink);
	}

	/* ── Ultra-Creative HUD Bedah Ciri Console ─────────── */
	.hud-nav-bar {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 12px;
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		padding: 8px;
		border-radius: 20px;
		margin-bottom: 32px;
		box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.5);
	}

	.hud-nav-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 18px;
		border-radius: 14px;
		background: transparent;
		border: 1px solid transparent;
		cursor: pointer;
		text-align: left;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.hud-nav-item:hover {
		background: var(--bg-3);
		border-color: var(--rule-2);
	}

	.hud-nav-item.active {
		background: var(--bg-3);
		border-color: var(--emerald);
		box-shadow: 0 8px 24px -6px rgba(55, 159, 118, 0.25);
	}

	:global([data-theme="light"]) .hud-nav-item.active {
		background: #ffffff;
		border-color: var(--emerald);
		box-shadow: 0 8px 20px -4px rgba(15, 138, 95, 0.18);
	}

	.hud-num {
		font-family: var(--mono);
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		padding: 4px 10px;
		border-radius: 8px;
		border: 1px solid rgba(78, 194, 148, 0.3);
	}

	.hud-text {
		display: flex;
		flex-direction: column;
	}

	.hud-title {
		font-family: var(--serif);
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--ink);
	}

	.hud-tag {
		font-family: var(--mono);
		font-size: 0.65rem;
		color: var(--ink-3);
		letter-spacing: 0.08em;
		margin-top: 1px;
	}

	.hud-nav-item.active .hud-tag {
		color: var(--emerald-2);
	}

	.hud-canvas-panel {
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 28px;
		padding: clamp(28px, 5vw, 48px);
		box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.6);
		position: relative;
		overflow: hidden;
	}

	.hud-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;
		align-items: center;
	}

	.hud-mod-badge {
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--emerald);
		letter-spacing: 0.15em;
	}

	.hud-headline {
		font-family: var(--serif);
		font-size: clamp(1.8rem, 3.5vw, 2.4rem);
		color: var(--ink);
		margin: 10px 0 16px;
		line-height: 1.15;
	}

	.hud-headline em {
		font-family: var(--accent-serif);
		font-style: italic;
		color: var(--emerald-2);
		font-weight: 400;
	}

	.hud-desc {
		color: var(--ink-2);
		line-height: 1.65;
		font-size: 1.02rem;
		margin-bottom: 24px;
	}

	.hud-feature-list {
		display: grid;
		gap: 14px;
	}

	.hud-feat-item {
		display: flex;
		align-items: flex-start;
		gap: 12px;
	}

	.hud-check {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: var(--emerald-dim);
		color: var(--emerald-2);
		border: 1px solid rgba(78, 194, 148, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.hud-check svg {
		width: 12px;
		height: 12px;
	}

	.hud-feat-item strong {
		display: block;
		font-size: 0.95rem;
		color: var(--ink);
	}

	.hud-feat-item p {
		margin: 2px 0 0;
		font-size: 0.86rem;
		color: var(--ink-2);
	}

	/* Generated Mockup Frame */
	.visual-mockup-frame {
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		border-radius: 20px;
		overflow: hidden;
		box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.6);
	}

	.feature-generated-img {
		width: 100%;
		height: auto;
		max-height: 420px;
		display: block;
		object-fit: contain;
	}

	.artifact-topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 18px;
		background: var(--bg-2);
		border-bottom: 1px solid var(--rule);
		font-family: var(--mono);
		font-size: 0.75rem;
	}

	.window-dots {
		display: flex;
		gap: 6px;
	}

	.window-dots span {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}

	.dot-red { background: #ef4444; }
	.dot-yellow { background: #f59e0b; }
	.dot-green { background: #10b981; }

	.window-title {
		color: var(--ink-2);
		letter-spacing: 0.05em;
	}

	.window-status {
		color: var(--emerald-2);
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.pulse-beacon {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--emerald-2);
		box-shadow: 0 0 8px var(--emerald-2);
	}

	/* Metrics */
	.hud-metrics-row {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
		margin-bottom: 20px;
	}

	.hud-metric-card {
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		border-radius: 12px;
		padding: 12px;
		text-align: center;
	}

	.m-val {
		display: block;
		font-family: var(--mono);
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--emerald-2);
	}

	.m-lbl {
		font-size: 0.74rem;
		color: var(--ink-3);
	}

	/* Duplication Hub & JSON Code Body */
	@media (max-width: 900px) {
		.hud-nav-bar {
			grid-template-columns: repeat(2, 1fr);
		}

		.hud-grid {
			grid-template-columns: 1fr;
		}
	}

	.empty-state p {
		color: var(--ink-2);
		font-size: 0.95rem;
		max-width: 44ch;
		margin: 0 auto 24px;
	}

	/* ── Comparison Table ─────────── */
	.comp-table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
		font-size: 0.94rem;
	}

	.comp-table th {
		padding: 16px;
		border-bottom: 2px solid var(--rule-2);
		font-family: var(--serif);
		font-size: 1.05rem;
		color: var(--ink);
	}

	.comp-table td {
		padding: 16px;
		border-bottom: 1px solid var(--rule);
	}

	.feature-col { font-weight: 600; color: var(--ink); }
	.bad-col { color: var(--ruby); }
	.good-col { color: var(--emerald-2); background: rgba(55, 159, 118, 0.04); font-weight: 700; }

	/* ── Final Strong CTA ─────────── */
	.final-cta-card {
		background: linear-gradient(135deg, var(--bg-2), var(--emerald-dim));
		border: 1px solid var(--rule-2);
		border-radius: 24px;
		padding: clamp(32px, 6vw, 64px) clamp(20px, 5vw, 40px);
		text-align: center;
		box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.5);
		position: relative;
		overflow: hidden;
		transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
	}

	:global([data-theme="light"]) .final-cta-card {
		background: linear-gradient(135deg, #ffffff, #ecfdf5);
		border-color: var(--rule-2);
		box-shadow: 0 20px 48px -12px rgba(15, 138, 95, 0.10);
	}

	.cta-badge {
		font-family: var(--mono);
		font-size: 0.75rem;
		color: var(--gold-2);
		background: rgba(212, 175, 55, 0.15);
		border: 1px solid rgba(212, 175, 55, 0.3);
		padding: 4px 14px;
		border-radius: 999px;
		letter-spacing: 0.12em;
	}

	:global([data-theme="light"]) .cta-badge {
		color: var(--gold);
		background: rgba(201, 162, 39, 0.12);
		border-color: rgba(201, 162, 39, 0.3);
	}

	.cta-title {
		font-family: var(--serif);
		font-size: clamp(2rem, 5vw, 3.2rem);
		color: var(--ink);
		margin: 16px 0 12px;
		line-height: 1.1;
	}

	.gold-highlight {
		color: var(--gold-2);
	}

	:global([data-theme="light"]) .gold-highlight {
		color: var(--gold);
	}

	.cta-sub {
		color: var(--ink-2);
		font-size: 1.1rem;
		max-width: 64ch;
		margin: 0 auto 32px;
		line-height: 1.6;
	}

	.cta-stats-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
		max-width: 600px;
		margin: 0 auto;
	}

	.cta-stat-item {
		background: var(--bg-3);
		border: 1px solid var(--rule-2);
		border-radius: 14px;
		padding: 16px;
		backdrop-filter: blur(10px);
		transition: background 0.3s ease, border-color 0.3s ease;
	}

	:global([data-theme="light"]) .cta-stat-item {
		background: #ffffff;
		border-color: var(--rule-2);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
	}

	.stat-num {
		font-family: var(--serif);
		font-size: 2rem;
		font-weight: 700;
		color: var(--gold-2);
	}

	:global([data-theme="light"]) .stat-num {
		color: var(--gold);
	}

	.stat-lbl {
		font-family: var(--sans);
		font-size: 0.85rem;
		color: var(--ink-2);
		margin-top: 2px;
	}

	.big-cta {
		font-size: 1.15rem;
		padding: 16px 38px;
	}

	.cta-micro {
		font-size: 0.8rem;
		color: var(--ink-3);
		margin-top: 14px;
	}

	@media (max-width: 640px) {
		.cta-stats-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
