<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import { ACTIVE_COURSE } from '$lib/data/course';
	import { locale, t } from '$lib/i18n.svelte';
	import { scramble } from '$lib/motion';

	// Lowercase-leaning set for the proportional headline (no wide m/w/M/W/@).
	const HEADLINE_GLYPHS = 'abcdefghijklnopqrstuvxyz0123456789/_-+*<>';

	function copy(ms: string, en: string): string {
		return locale.current === 'en' ? en : ms;
	}

	const scenes = [
		{
			when: ['Setiap pagi, 7:30', 'Every morning, 7:30'],
			start: ['Peringatan yang sama, anda copy-paste ke lima group jemaah satu per satu.', 'You copy and paste the same reminder into five pilgrim groups, one at a time.'],
			end: ['Satu group tertinggal, dan petang nanti jemaah dalam group itu bertanya soalan yang sama berulang kali.', 'One group gets missed, and by the afternoon its pilgrims are asking the same question again and again.']
		},
		{
			when: ['Selasa, 11:42 malam', 'Tuesday, 11:42 pm'],
			start: ['Prospek tanya harga pakej Mac. Anda balas esok pagi.', 'A prospect asks about the March package price. You reply the next morning.'],
			end: ['Dua tanda biru, tapi tiada balasan sampai sekarang.', 'Two blue ticks, but still no reply.']
		},
		{
			when: ['Khamis, 9:10 pagi', 'Thursday, 9:10 am'],
			start: ['“Boleh saya semak lesen agensi dulu?”', '“Can I check your agency licence first?”'],
			end: ['Anda jawab sambil melayan lima chat lain, dan terlupa hantar cara semaknya.', 'You reply while handling five other chats, and forget to send the instructions.']
		},
		{
			when: ['Setiap minggu', 'Every week'],
			start: ['“Visa boleh mohon sendiri di Nusuk, kan?”', '“I can apply for my own visa through Nusuk, right?”'],
			end: ['Anda tahu nilai agensi anda lebih daripada visa. Masalahnya, siapa ada masa nak terangkan kepada setiap orang?', 'You know your agency offers more than a visa. But who has time to explain that to every person?']
		},
		{
			when: ['Hujung bulan', 'At the end of the month'],
			start: ['Hotel Makkah dah dibayar. Seat masih kosong.', 'The Makkah hotel is paid for. Seats are still empty.'],
			end: ['Prospek yang tanya minggu lepas belum disapa semula, dan anda tak ingat siapa.', 'Last week’s enquiries have not been followed up, and you cannot remember who they were.']
		},
		{
			when: ['Hari flight dibatalkan', 'When a flight is cancelled'],
			start: ['40 jemaah WhatsApp serentak.', '40 pilgrims message you on WhatsApp at once.'],
			end: ['Admin anda cuma seorang, dan setiap minit tanpa jawapan menambah panik.', 'You have just one admin, and every minute without an answer adds to the panic.']
		}
	] as const;

	const modules = [
		{
			title: ['Smart Campaign: mesej harian ke group WhatsApp', 'Smart Campaign: daily messages to WhatsApp groups'],
			description: ['Setting jadual sekali, dan peringatan, info trip atau tazkirah masuk ke group jemaah setiap hari. Anda tak perlu lagi copy-paste ke setiap group.', 'Set the schedule once, and reminders, trip updates or a short reflection reach your pilgrim groups every day. No more copying and pasting into every group.']
		},
		{
			title: ['Konsep AI automation', 'AI automation concepts'],
			description: ['Faham kerja mana yang AI boleh uruskan untuk anda, dan bahagian mana yang tetap memerlukan sentuhan anda.', 'Understand which tasks AI can handle for you, and which still need your personal attention.']
		},
		{
			title: ['Cara Agent AI menjawab prospek', 'How Agent AI answers prospects'],
			description: ['Lihat bagaimana soalan lazim bakal jemaah dijawab dalam minit, termasuk di luar waktu pejabat.', 'See how common questions from prospective pilgrims are answered within minutes, including outside office hours.']
		},
		{
			title: ['Follow-up automation', 'Follow-up automation'],
			description: ['Prospek yang senyap disapa semula secara konsisten. Anda tak perlu lagi ingat siapa yang perlu dihubungi hari ini.', 'Quiet prospects receive consistent follow-ups. You no longer have to remember who needs to be contacted today.']
		},
		{
			title: ['Human handover', 'Human handover'],
			description: ['Bila prospek sudah sedia bertanya tentang deposit, perbualan diserahkan kepada anda atau staf anda.', 'When a prospect is ready to ask about a deposit, the conversation is handed to you or your staff.']
		},
		{
			title: ['AI untuk sales team', 'AI for your sales team'],
			description: ['Staf anda bekerja dengan aliran yang sama, jadi setiap bakal jemaah menerima jawapan yang seragam.', 'Your staff follow the same workflow, so every prospective pilgrim receives consistent answers.']
		}
	] as const;

	const followUpSteps = [
		{
			day: 'H0',
			title: ['Balas dalam minit, tanya tarikh dan bilangan jemaah', 'Reply within minutes, ask for dates and the number of pilgrims'],
			description: ['Menjawab: “Agensi ni aktif ke?”', 'Answers: “Is this agency active?”']
		},
		{
			day: 'H+1',
			title: ['Nombor lesen MOTAC dan cara semak sendiri', 'MOTAC licence number and how to check it independently'],
			description: ['Menjawab: “Agensi ni sah ke?”', 'Answers: “Is this agency legitimate?”']
		},
		{
			day: 'H+2',
			title: ['Cerita jemaah musim lepas', 'Stories from last season’s pilgrims'],
			description: ['Menjawab: “Ada orang betul pernah pergi?”', 'Answers: “Have real people travelled with them?”']
		},
		{
			day: 'H+3',
			title: ['Hotel, jarak ke Masjidil Haram, itinerari', 'Hotels, distance to Masjid al-Haram and the itinerary'],
			description: ['Menjawab: “Pakej ni betul-betul wujud?”', 'Answers: “Does this package really exist?”']
		},
		{
			day: 'H+5',
			title: ['Apa yang berlaku jika flight dibatalkan', 'What happens if a flight is cancelled'],
			description: ['Menjawab: “Kalau ada masalah, saya tersangkut?”', 'Answers: “Will I be stranded if something goes wrong?”']
		},
		{
			day: 'H+7',
			title: ['Soalan lembut tentang tarikh, lalu diserahkan kepada staf', 'A gentle question about dates, then a handover to your staff'],
			description: ['Jualan ditutup oleh manusia, bukan oleh mesin.', 'People close the sale, not machines.']
		}
	] as const;

	const campaignSteps = [
		{
			when: ['Jeda · 10 minit', 'Delay · 10 minutes'],
			description: ['Ucapan terima kasih kepada [name], berserta senarai dokumen yang perlu disediakan.', 'A thank-you message to [name], along with the list of documents to prepare.']
		},
		{
			when: ['Tarikh tepat', 'Exact date'],
			description: ['Peringatan tarikh, masa dan tempat taklimat kursus umrah.', 'A reminder of the date, time and venue for the umrah briefing.']
		},
		{
			when: ['Tarikh tepat', 'Exact date'],
			description: ['Itinerari penuh dalam PDF, dilampirkan terus dalam mesej.', 'The complete itinerary in a PDF, attached directly to the message.']
		},
		{
			when: ['Tarikh tepat', 'Exact date'],
			description: ['Peringatan H-1 sebelum berlepas, dengan masa dan lokasi yang perlu jemaah hadir.', 'A reminder the day before departure, with the time and location where pilgrims need to arrive.']
		}
	] as const;

	const campaignFeatures = [
		{
			title: ['Mesej harian yang berulang sendiri', 'Daily messages that repeat on their own'],
			description: ['Anda tak perlu ingat untuk hantar setiap pagi. Masa tetap menghantar pada slot harian seterusnya, dan mod Loop selamanya bermula semula dari langkah 1 selepas langkah terakhir, jadi peringatan harian ke group jemaah terus berjalan. Tarikh tepat tidak boleh digunakan dalam mod Loop.', 'You no longer have to remember to send every morning. Fixed time sends at the next daily slot, and Loop forever mode restarts from step 1 after the last step, so daily reminders to your pilgrim groups keep running. Exact date cannot be used in Loop mode.']
		},
		{
			title: ['3 jenis waktu hantar', '3 types of sending schedule'],
			description: ['Jeda (tunggu beberapa minit, jam, hari atau minggu), Masa tetap (slot seterusnya mengikut jam, hari, minggu atau bulan) dan Tarikh tepat (satu tarikh dan masa).', 'Delay (wait a number of minutes, hours, days or weeks), Fixed time (the next hourly, daily, weekly or monthly slot) and Exact date (one specific date and time).']
		},
		{
			title: ['Mesej peribadi dengan lampiran', 'Personalised messages with attachments'],
			description: ['Panggil setiap jemaah dengan [name], lampirkan PDF, gambar atau video, dan semak dahulu dengan Pratonton sebelum dihantar.', 'Address each pilgrim with [name], attach PDFs, images or videos, and check the message in Preview before sending.']
		},
		{
			title: ['Jemaah baharu terus ikut jadual', 'New pilgrims join the schedule automatically'],
			description: ['Apabila kempen Aktif, semua kenalan dalam senarai didaftarkan secara automatik, termasuk kenalan baharu yang masuk kemudian (contohnya dari import CSV atau borang). Mahu daftarkan kenalan sedia ada dengan segera? Guna Daftarkan kontak semasa.', 'When a campaign is Active, all contacts in the list are enrolled automatically, including contacts added later, for example through a CSV import or a form. Want to enrol existing contacts immediately? Use Enrol current contacts.']
		},
		{
			title: ['Jejak setiap mesej', 'Track every message'],
			description: ['Lihat status Dihantar, Tertunda atau Gagal, serta Sampai ke peranti dan Dibaca bagi setiap jemaah.', 'View Sent, Pending or Failed status, as well as Delivered to device and Read receipts for each pilgrim.']
		},
		{
			title: ['Had kelajuan yang terkawal', 'Controlled sending speed'],
			description: ['Tetapkan Maks mesej seminit dan Jeda antara kontak (saat) supaya mesej tidak keluar serentak.', 'Set Max messages per minute and Delay between contacts (seconds) so messages are not sent all at once.']
		},
		{
			title: ['Sehingga 50 langkah', 'Up to 50 steps'],
			description: ['Setiap kempen boleh ada sehingga 50 langkah, dan setiap langkah boleh mengandungi sehingga 10 mesej.', 'Each campaign can have up to 50 steps, and each step can contain up to 10 messages.']
		}
	] as const;

	const suitableFor = [
		['Pemilik agensi Umrah & Travel yang masih menjawab WhatsApp prospek sendiri', 'Umrah & Travel agency owners who still answer prospects on WhatsApp themselves'],
		['Mutawif yang menguruskan beberapa group jemaah dan penat menghantar peringatan yang sama setiap hari', 'Mutawif who manage several pilgrim groups and are tired of sending the same reminders every day'],
		['Team marketing agensi Umrah & Travel yang perlu hantar content harian ke group prospek dan jemaah', 'Umrah & Travel marketing teams who need to send daily content to prospect and pilgrim groups'],
		['Agensi kecil atau sederhana yang adminnya sedikit, tetapi enquiry melimpah bila musim puncak', 'Small or medium agencies with limited admin staff and enquiries that surge during peak season'],
		['Anda yang mahu faham AI automation dahulu sebelum melabur dalam sebarang sistem', 'Those who want to understand AI automation before investing in a system'],
		['Anda yang mahu staf menjawab bakal jemaah dengan cara yang seragam', 'Those who want staff to answer prospective pilgrims consistently']
	] as const;

	const lessSuitableFor = [
		['Anda mencari servis siap pasang tanpa mahu belajar. Ini kelas, bukan servis setup.', 'You want a done-for-you service without learning. This is a class, not a setup service.'],
		['Anda belum menggunakan WhatsApp untuk berhubung dengan prospek atau jemaah.', 'You do not yet use WhatsApp to communicate with prospects or pilgrims.']
	] as const;

	const included = [
		['Kelas live, online melalui Zoom, boleh bertanya terus', 'A live class, online via Zoom, with the opportunity to ask questions directly'],
		['Bonus: 1.5 juta Token AI supaya Agent AI anda boleh terus mula bekerja', 'Bonus: 1.5 million AI tokens so your Agent AI can start working right away'],
		['Bonus: rakaman kelas untuk ulang belajar', 'Bonus: the class recording so you can revisit the lessons'],
		['Sesi khusus agensi umrah: urutan Yakin Sebelum Transfer', 'A session specifically for umrah agencies: the Confidence Before Payment sequence']
	] as const;

	const faqs = [
		{
			question: ['Saya perlu melanggan Wajom dulu ke?', 'Do I need a Wajom subscription first?'],
			answer: ['Tidak. Kelas ini ialah langkah pertama untuk anda faham cara Smart Campaign dan Agent AI berfungsi sebelum melaksanakan apa-apa. Ia tidak menggantikan sistem Wajom, dan anda tidak perlu melanggan untuk menyertainya.', 'No. The class is a first step towards understanding how Smart Campaign and Agent AI work before implementing anything. It does not replace the Wajom system, and you do not need a subscription to attend.']
		},
		{
			question: ['Kalau saya tak dapat hadir secara live?', 'What if I cannot attend live?'],
			answer: ['Anda mendapat rakaman kelas sebagai bonus, jadi anda boleh ulang belajar bila-bila masa yang sesuai dengan jadual anda.', 'You receive the class recording as a bonus, so you can revisit the lessons whenever it suits your schedule.']
		},
		{
			question: ['Apa itu 1.5 juta Token AI?', 'What are the 1.5 million AI tokens?'],
			answer: ['Token ialah “tenaga” yang Agent AI gunakan untuk bekerja, contohnya untuk menjawab dan follow-up prospek. Setiap peserta kelas mendapat bonus 1.5 juta Token AI supaya Agent AI anda boleh terus mula bekerja.', 'Tokens are the “energy” Agent AI uses to work, for example to answer and follow up with prospects. Every class participant receives a bonus of 1.5 million AI tokens so your Agent AI can start working right away.']
		},
		{
			question: ['Adakah Wajom akan setup sistem untuk agensi saya?', 'Will Wajom set up the system for my agency?'],
			answer: ['Ini kelas, bukan servis setup. Anda belajar setting Smart Campaign dan Agent AI untuk agensi anda sendiri, termasuk mesej harian ke group WhatsApp dan urutan Yakin Sebelum Transfer dalam sesi khusus umrah.', 'This is a class, not a setup service. You learn to set up Smart Campaign and Agent AI for your own agency, including daily messages to WhatsApp groups and the Confidence Before Payment sequence in the umrah-specific session.']
		},
		{
			question: ['Agensi saya kecil. Masih berbaloi?', 'My agency is small. Is it still worthwhile?'],
			answer: ['Agensi yang adminnya sedikit paling terasa beban follow-up manual dan mesej harian ke group jemaah. Kelas ini membantu anda faham bagaimana Smart Campaign menghantar mesej ikut jadual dan Agent AI menjawab prospek, lalu menyerahkan yang sudah sedia kepada anda, supaya masa anda tertumpu pada jemaah yang serius.', 'Agencies with fewer admin staff feel the burden of manual follow-ups and daily group messages most. This class helps you understand how Smart Campaign sends messages on schedule and Agent AI answers prospects, then hands over those who are ready, so you can focus on serious pilgrims.']
		},
		{
			question: ['Bila dan di mana kelas berlangsung?', 'When and where does the class take place?'],
			answer: [`Secara live, online melalui Zoom, pada ${ACTIVE_COURSE.sessionDateMs}, jam 9:00 pagi hingga 11:00 pagi (waktu Malaysia).`, `Live and online via Zoom on ${ACTIVE_COURSE.sessionDateEn}, from 9:00 am to 11:00 am (Malaysia time).`]
		},
		{
			question: ['Bagaimana cara mendaftar?', 'How do I register?'],
			answer: ['Tekan butang Daftar Kelas dan lengkapkan pembayaran RM30 di wajom.co/checkout.', 'Click Register for the Class and complete your RM30 payment at wajom.co/checkout.']
		}
	] as const;

	const sources = [
		{
			text: 'UTHM News, “Penipuan umrah di Malaysia, realiti pahit dan hak pengguna”:',
			url: 'https://news.uthm.edu.my/ms/2025/03/penipuan-umrah-di-malaysia-realiti-pahit-dan-hak-pengguna/',
			domain: 'news.uthm.edu.my'
		},
		{
			text: 'Free Malaysia Today, “36 jemaah terkandas, Motac dalam proses batal lesen pengendali pakej umrah” (7 Jan 2026):',
			url: 'https://www.freemalaysiatoday.com/category/bahasa/tempatan/2026/01/07/36-jemaah-terkandas-motac-dalam-proses-batal-lesen-pengendali-pakej-umrah',
			domain: 'freemalaysiatoday.com'
		},
		{
			text: 'Wego Travel Blog, “Umrah from Malaysia”:',
			url: 'https://blog.wego.com/umrah-from-malaysia/',
			domain: 'blog.wego.com'
		},
		{
			text: 'Sabah Media, syarat Bank Guarantee dan pengusaha umrah Borneo:',
			url: 'https://sabahmedia.com/2026/02/04/syarat-bank-guarantee-tinggi-risiko-kecilkan-penyertaan-pengusaha-umrah-borneo-pauhs/',
			domain: 'sabahmedia.com'
		}
	] as const;

	const galleryItems = [
		{
			src: '/gallery/course1.jpeg',
			title: ['Sesi Zoom Bersama Peserta', 'Live Participant Zoom Session'],
			caption: ['Tangkapan skrin sesi bimbingan live interaktif bersama para usahawan & leader yang menyertai kelas Wajom.', 'A live interactive coaching session with entrepreneurs and leaders attending the Wajom class.'],
			alt: ['Paparan grid peserta semasa sesi Zoom Wajom Agent AI Mastery.', 'Participant grid during the Wajom Agent AI Mastery Zoom session.'],
			width: 1600, height: 1000
		},
		{
			src: '/gallery/course2.jpeg',
			title: ['Suasana Di Dalam Kelas Wajom', 'Inside the Wajom Class'],
			caption: ['Bimbingan praktikal langkah demi langkah dalam menyediakan AI closing gaya manusia dan automasi WhatsApp.', 'Step-by-step practical coaching for human-style AI closing and WhatsApp automation.'],
			alt: ['Peserta dalam paparan grid pada sesi Zoom Wajom Agent AI Mastery.', 'Participants in a grid view during the Wajom Agent AI Mastery Zoom session.'],
			width: 1600, height: 1000
		},
		{
			src: '/gallery/course3.jpeg',
			title: ['Akses Kelas Mudah Dari Telefon', 'Easy Phone-First Class Access'],
			caption: ['Peserta boleh mengikuti bimbingan dan penerangan slaid terus menerusi telefon pintar secara fleksibel.', 'Follow the coaching and slides directly from a smartphone, wherever you are.'],
			alt: ['Paparan kelas Wajom pada telefon dengan pembentang dan slaid.', 'Wajom class on a phone showing the presenter and slides.'],
			width: 591, height: 1280
		}
	] as const;

	let selectedGalleryIndex = $state(0);
	let galleryOpen = $state(false);
	let galleryDialog: HTMLDialogElement;
	const selectedGalleryItem = $derived(galleryItems[selectedGalleryIndex]);
	const sessionDate = $derived(copy(ACTIVE_COURSE.sessionDateMs, ACTIVE_COURSE.sessionDateEn));
	const sessionTime = $derived(copy('9:00 pagi – 11:00 pagi', '9:00 am – 11:00 am'));
	const registerLabel = $derived(copy('Daftar Kelas', 'Register for the Class'));
	const dailyPhrase = $derived(copy('setiap hari', 'every day'));
	const className = $derived(copy('Kelas Setting Smart Campaign & Agent AI Wajom', 'Wajom Smart Campaign & Agent AI Setup Class'));
	const tagline = $derived(copy('Setting sekali, mesej berjalan automatik!', 'Set it up once, your messages run automatically!'));
	const bonusTokensLabel = $derived(`${ACTIVE_COURSE.bonusTokens / 1_000_000} ${copy('juta Token AI', 'million AI tokens')}`);

	function openGalleryModal(index: number) {
		selectedGalleryIndex = index;
		galleryDialog.showModal();
		galleryOpen = true;
	}

	function nextGalleryItem() {
		selectedGalleryIndex = (selectedGalleryIndex + 1) % galleryItems.length;
	}

	function prevGalleryItem() {
		selectedGalleryIndex = (selectedGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
	}

	function handleGalleryKeydown(event: KeyboardEvent) {
		if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
			event.preventDefault();
			if (event.key === 'ArrowRight') nextGalleryItem();
			else prevGalleryItem();
		}
	}

	$effect(() => {
		if (galleryOpen) {
			const originalOverflow = document.body.style.overflow;
			document.body.style.overflow = 'hidden';
			return () => { document.body.style.overflow = originalOverflow; };
		}
	});

	const courseJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: className,
		description: copy('Kelas online untuk mutawif, owner agensi Umrah & Travel dan team marketing: setting mesej harian automatik ke group WhatsApp dengan Smart Campaign, dan guna Agent AI untuk menjawab serta follow-up prospek.', 'An online class for mutawif, Umrah & Travel agency owners and marketing teams: set up automatic daily messages to WhatsApp groups with Smart Campaign, and use Agent AI to answer and follow up with prospects.'),
		provider: { '@type': 'Organization', name: 'Wajom Academy', url: 'https://wajom.co' },
		offers: {
			'@type': 'Offer', price: String(ACTIVE_COURSE.price), priceCurrency: 'MYR',
			url: 'https://wajom.co/checkout'
		},
		hasCourseInstance: {
			'@type': 'CourseInstance', courseMode: 'online', startDate: ACTIVE_COURSE.sessionDateTime,
			location: { '@type': 'VirtualLocation', name: 'Zoom' }
		}
	});
</script>

<SEO
	title={copy('Kelas Setting Smart Campaign & Agent AI Wajom — Mesej Harian ke Group WhatsApp (RM30)', 'Wajom Smart Campaign & Agent AI Setup Class — Daily Messages to WhatsApp Groups (RM30)')}
	description={copy('Untuk mutawif, owner agensi Umrah & Travel dan team marketing di Malaysia: setting sekali, mesej harian ke group WhatsApp berjalan automatik. Kelas online melalui Zoom, RM30, bonus 1.5 juta Token AI dan rakaman kelas.', 'For mutawif, Umrah & Travel agency owners and marketing teams in Malaysia: set it up once, and your daily WhatsApp group messages run automatically. Online class via Zoom, RM30, with 1.5 million bonus AI tokens and the class recording.')}
	keywords="kelas smart campaign, agent ai wajom, group whatsapp, mesej automatik whatsapp, smart campaign, agent ai, mutawif, agensi umrah, agensi travel, follow-up whatsapp, ai automation, kursus wajom"
	canonical="https://wajom.co/course"
	ogImage="https://wajom.co/logo.png"
	ogImageAlt="Wajom — Kelas Setting Smart Campaign & Agent AI"
	jsonLd={courseJsonLd}
/>

{#snippet arrowIcon()}
	<svg class="course-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
{/snippet}

{#snippet checkIcon()}
	<svg class="course-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
{/snippet}

{#snippet closeIcon()}
	<svg class="course-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
{/snippet}

{#snippet readIcon()}
	<svg class="course-icon" viewBox="0 0 24 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m1 8 5 5L17 2m-6 10 2 2L24 3" /></svg>
{/snippet}

<!-- Full reference copy is retained; presentation follows the existing Wajom theme. -->
<div class="umrah-course">
	<a class="course-skip" href="#course-content">{copy('Langkau ke kandungan kelas', 'Skip to class content')}</a>

	<div class="course-announcement">
		<div class="wrap announcement-inner">
			<span><strong>{copy('TAWARAN KHAS:', 'SPECIAL OFFER:')}</strong> {copy(`Kelas RM${ACTIVE_COURSE.price} sahaja + bonus ${bonusTokensLabel}`, `Class only RM${ACTIVE_COURSE.price} + ${bonusTokensLabel} bonus`)}</span>
			<time datetime={ACTIVE_COURSE.sessionDateTime}>{copy(ACTIVE_COURSE.sessionDayShortMs, ACTIVE_COURSE.sessionDayShortEn)} · {sessionTime}</time>
		</div>
	</div>

	<section class="course-hero" id="course-content" aria-labelledby="course-title">
		<div class="wrap course-hero-grid">
			<div class="course-hero-copy">
				<p class="course-context course-hero-eyebrow" use:scramble={{ text: className, delay: 150 }}>{className}</p>
				<h1 id="course-title">{copy('Sistem automation hantar mesej', 'An automation system that sends messages')} <span>{copy('', 'to your WhatsApp groups ')}<span use:scramble={{ text: dailyPhrase, delay: 350, duration: 850, glyphs: HEADLINE_GLYPHS }}>{dailyPhrase}</span>{copy(' ke Group WhatsApp', '')}</span></h1>
				<p class="course-lede">{copy('Khas untuk mutawif, owner agensi Umrah & Travel serta team marketing yang nak urus WhatsApp dengan lebih bijak. Tak perlu lagi copy-paste peringatan yang sama ke setiap group jemaah, risau ada group yang tertinggal, atau hantar info trip lewat malam. Anda setting jadualnya sekali, dan mesej sampai ke setiap group tepat pada masanya, setiap hari.', 'Made for mutawif, Umrah & Travel agency owners and marketing teams who want to manage WhatsApp more wisely. No more copying and pasting the same reminder into every pilgrim group, worrying that one got missed, or sending trip updates late at night. You set the schedule once, and your messages reach every group on time, every day.')}</p>
				<p class="course-tagline">{tagline}</p>
				<div class="course-hero-actions">
					<a href="/checkout" class="course-button">{registerLabel} · RM{ACTIVE_COURSE.price} {copy('sahaja', 'only')} {@render arrowIcon()}</a>
					<span class="course-original-price">{copy('Harga asal', 'Original price')} <s>RM200</s></span>
				</div>
				<p class="course-session"><time datetime={ACTIVE_COURSE.sessionDateTime}>{sessionDate} · {sessionTime}</time> · {copy('Online melalui Zoom', 'Online via Zoom')}</p>
				<ul class="course-benefits" aria-label={copy('Termasuk', 'Included')}>
					<li>{@render checkIcon()} {copy('Online melalui Zoom', 'Online via Zoom')}</li>
					<li>{@render checkIcon()} {bonusTokensLabel} <span class="course-example-label">Bonus</span></li>
					<li>{@render checkIcon()} {copy('Rakaman kelas untuk ulang belajar', 'Class recording to revisit the lessons')} <span class="course-example-label">Bonus</span></li>
				</ul>
			</div>

			<figure class="course-conversation" aria-label={copy('Ilustrasi group WhatsApp jemaah yang menerima mesej automatik setiap hari', 'Illustration of a pilgrim WhatsApp group receiving automatic daily messages')}>
				<div class="conversation-header">
					<span class="conversation-avatar" aria-hidden="true">JU</span>
					<div><strong>{copy('Jemaah Umrah Mac 2027', 'Umrah Pilgrims March 2027')}</strong><span class="conversation-status"><span class="conversation-members">{copy('42 ahli', '42 members')}</span><span class="conversation-typing-status" aria-hidden="true">{copy('Puan Salmah sedang menaip…', 'Puan Salmah is typing…')}</span></span></div>
					<span class="conversation-example">{copy('Ilustrasi', 'Illustration')}</span>
				</div>
				<div class="conversation-messages">
					<span class="conversation-day chat-in chat-in-1">{copy('Hari ini', 'Today')}</span>
					<div class="conversation-bubble outgoing chat-in chat-in-2">
						<span class="conversation-auto">{copy('Mesej automatik · setiap hari', 'Automatic message · daily')}</span>
						<p>{copy('Selamat pagi semua. Jadual hari ini: 9:00 pagi taklimat kursus umrah di pejabat kami. Mohon hadir 15 minit awal.', 'Good morning, everyone. Today’s schedule: the umrah course briefing at our office at 9:00 am. Please arrive 15 minutes early.')}</p>
						<span class="conversation-time">07:30 {@render readIcon()}</span>
					</div>
					<div class="conversation-bubble outgoing chat-in chat-in-3">
						<span class="conversation-auto">{copy('Mesej automatik · setiap hari', 'Automatic message · daily')}</span>
						<p>{copy('Senarai semak dokumen: pasport, salinan IC dan kad vaksin. Mohon semak dan hantar sebelum Jumaat.', 'Document checklist: passport, a copy of your IC and your vaccination card. Please check and submit them before Friday.')}</p>
						<span class="conversation-time">07:31 {@render readIcon()}</span>
					</div>
					<!-- The typing indicator overlays the reply's slot so it never shifts layout. -->
					<div class="conversation-slot">
						<div class="conversation-bubble incoming chat-in chat-in-4">
							<span class="conversation-sender">Puan Salmah</span>
							<p>{copy('Terima kasih, ustaz. Dokumen saya dah lengkap.', 'Thank you, ustaz. My documents are complete.')}</p>
							<span class="conversation-time">07:52</span>
						</div>
						<div class="conversation-bubble incoming conversation-typing" aria-hidden="true"><span></span><span></span><span></span></div>
					</div>
					<span class="conversation-day chat-in chat-in-5">{copy('Esok', 'Tomorrow')}</span>
					<div class="conversation-bubble outgoing chat-in chat-in-6">
						<span class="conversation-auto">{copy('Mesej automatik · setiap hari', 'Automatic message · daily')}</span>
						<p>{copy('Tazkirah pagi: umrah bermula dengan niat yang ikhlas. Semoga Allah permudahkan perjalanan kita semua.', 'Morning reflection: umrah begins with a sincere intention. May Allah ease the journey for all of us.')}</p>
						<span class="conversation-time">07:30 {@render readIcon()}</span>
					</div>
				</div>
				<figcaption class="conversation-handover">{@render checkIcon()} {copy('Dihantar automatik setiap hari mengikut jadual', 'Sent automatically every day, on schedule')}</figcaption>
			</figure>
		</div>
	</section>

	<nav class="course-jump-nav" aria-label={copy('Kandungan kelas', 'Class contents')}>
		<div class="wrap jump-nav-inner">
			<a href="#syllabus">{copy('Apa yang dipelajari', 'What you will learn')}</a>
			<a href="#smart-campaign">Smart Campaign</a>
			<a href="#daftar">{copy('Butiran & pendaftaran', 'Details & registration')}</a>
			<a href="#faq">{copy('Soalan lazim', 'Common questions')}</a>
		</div>
	</nav>

	<section class="course-band" id="mechanism" aria-labelledby="scenes-title">
		<div class="wrap">
			<div class="course-scenes-layout">
				<div class="course-section-header">
					<p class="course-context">{copy('Minggu biasa di agensi umrah', 'A typical week at an umrah agency')}</p>
					<h2 id="scenes-title">{copy('Kalau salah satu ini berlaku minggu ini, kelas ini untuk anda.', 'If any of this happened this week, this class is for you.')}</h2>
				</div>
				<div class="course-scenes">
					{#each scenes as scene}
						<article class="course-scene">
							<span class="scene-time">{copy(scene.when[0], scene.when[1])}</span>
							<p><strong>{copy(scene.start[0], scene.start[1])}</strong> <span>{copy(scene.end[0], scene.end[1])}</span></p>
						</article>
					{/each}
				</div>
			</div>
			<p class="course-scenes-note">{copy('Semua ini berpunca daripada perkara yang sama:', 'All of this comes down to the same thing:')} <strong>{copy('terlalu banyak perbualan, terlalu sedikit tangan.', 'too many conversations, too few hands.')}</strong> {copy('Anda tak perlu bekerja lebih lama. Anda perlukan sistem yang terus menghantar dan menjawab bila anda sedang sibuk.', 'You do not need to work longer hours. You need a system that keeps sending and answering when you are busy.')}</p>
		</div>
	</section>

	<section class="course-band course-tinted" aria-labelledby="trust-title">
		<div class="wrap course-trust-layout">
			<div class="course-trust-copy">
				<div class="course-section-header">
					<p class="course-context">{copy('Krisis kepercayaan', 'A crisis of trust')}</p>
					<h2 id="trust-title">{copy('Agensi lain yang buat masalah. Anda yang kena menjawab kecurigaan mereka.', 'Other agencies cause problems. You have to answer for the doubts they create.')}</h2>
				</div>
				<p>{copy('Bakal jemaah hari ini semak dahulu, dan ambil masa sebelum membayar. Mereka tak salah.', 'Today’s prospective pilgrims check first and take their time before paying. They are not wrong.')} <strong>{copy('Mereka cuma perlukan bukti, pada masa yang betul.', 'They just need evidence, at the right time.')}</strong></p>
				<div class="course-notice">
					<p>{copy('Dalam masa yang sama, jemaah boleh memohon visa umrah sendiri melalui Nusuk', 'Meanwhile, pilgrims can apply for their own umrah visas through Nusuk')}<sup><a href="#src-3" aria-label={copy('Sumber 3', 'Source 3')}>3</a></sup>{copy(', dan cadangan syarat Bank Guarantee RM250,000 untuk lesen agensi sedang dibincangkan', ', and a proposed RM250,000 bank guarantee requirement for agency licences is being discussed')}<sup><a href="#src-4" aria-label={copy('Sumber 4', 'Source 4')}>4</a></sup>{copy('. Dalam keadaan begini, setiap prospek yang senyap ialah peluang yang hilang.', '. In these circumstances, every quiet prospect is a lost opportunity.')}</p>
				</div>
				<p>{copy('Menghantar bukti satu per satu kepada setiap prospek memakan masa yang anda tak ada. Di sinilah follow-up automatik membantu anda.', 'Sending evidence to every prospect one by one takes time you do not have. This is where automatic follow-ups help.')}</p>
			</div>
			<dl class="course-trust-facts">
				<div><dt>349</dt><dd>{copy('kes penipuan umrah direkodkan MOTAC pada 2024', 'umrah fraud cases recorded by MOTAC in 2024')}<sup><a href="#src-1" aria-label={copy('Sumber 1', 'Source 1')}>1</a></sup></dd></div>
				<div><dt>{copy('RM14.9 juta', 'RM14.9 million')}</dt><dd>{copy('kerugian yang ditanggung jemaah dalam kes-kes tersebut', 'lost by pilgrims in those cases')}<sup><a href="#src-1" aria-label={copy('Sumber 1', 'Source 1')}>1</a></sup></dd></div>
				<div><dt>{copy('36 jemaah', '36 pilgrims')}</dt><dd>{copy('terkandas di Madinah, dan MOTAC memulakan proses membatalkan lesen pengendali terlibat', 'stranded in Madinah, prompting MOTAC to begin the process of revoking the operator’s licence')}<sup><a href="#src-2" aria-label={copy('Sumber 2', 'Source 2')}>2</a></sup></dd></div>
			</dl>
		</div>
	</section>

	<section class="course-band" id="syllabus" aria-labelledby="learn-title">
		<div class="wrap">
			<div class="course-section-header course-wide-heading">
				<p class="course-context">{copy('Apa yang anda bawa balik', 'What you take away')}</p>
				<h2 id="learn-title">{copy('Anda belajar membina sistem yang terus menghantar dan menjawab, walaupun anda sedang tidur.', 'Learn to build a system that keeps sending and answering, even while you sleep.')}</h2>
				<p>{copy('Kelas ini langkah pertama untuk faham cara Smart Campaign dan Agent AI bekerja untuk group jemaah dan prospek anda, sebelum anda melaksanakan apa-apa. Anda tak perlu melanggan sistem Wajom untuk menyertai kelas.', 'This class is the first step to understanding how Smart Campaign and Agent AI work for your pilgrim groups and prospects, before you implement anything. You do not need a Wajom subscription to join.')}</p>
			</div>
			<div class="course-learning-layout">
				<ol class="course-modules">
					{#each modules as module}
						<li><h3>{copy(module.title[0], module.title[1])}</h3><p>{copy(module.description[0], module.description[1])}</p></li>
					{/each}
				</ol>
				<article class="course-followup" aria-labelledby="umrah-title">
					<div class="course-followup-heading">
						<p class="course-context">{copy('Sesi khusus agensi umrah', 'A session for umrah agencies')}</p>
						<h3 id="umrah-title">{copy('Yakin Sebelum Transfer: urutan follow-up 7 hari', 'Confidence Before Payment: a 7-day follow-up sequence')}</h3>
						<p>{copy('Anda belajar membina urutan ini untuk agensi anda sendiri. Setiap mesej menjawab satu kebimbangan bakal jemaah sebelum dia bersedia membayar.', 'Learn to build this sequence for your own agency. Each message addresses one concern a prospective pilgrim has before they are ready to pay.')}</p>
					</div>
					<ol class="course-followup-list">
						{#each followUpSteps as step}
							<li><span class="followup-day">{step.day}</span><div><strong>{copy(step.title[0], step.title[1])}</strong><span>{copy(step.description[0], step.description[1])}</span></div></li>
						{/each}
					</ol>
					<p class="course-example-note">{copy('Bukti dalam setiap mesej (lesen, gambar trip, itinerari) datang daripada agensi anda sendiri. Kelas ini mengajar cara menyusun dan menghantarnya pada masa yang tepat.', 'The evidence in every message (licence, trip photos, itinerary) comes from your own agency. The class teaches you to organise and send it at the right time.')}</p>
				</article>
			</div>
		</div>
	</section>

	<section class="course-band course-tinted" id="smart-campaign" aria-labelledby="campaign-title">
		<div class="wrap">
			<div class="course-section-header course-wide-heading">
				<p class="course-context">{copy('Smart Campaign · Selepas jemaah transfer', 'Smart Campaign · After a pilgrim pays')}</p>
				<h2 id="campaign-title">{copy('Jemaah dah transfer. Kerja follow-up anda baru bermula.', 'The pilgrim has paid. Your follow-up work is just beginning.')}</h2>
				<p>{copy('Senarai dokumen, tarikh taklimat, peringatan sehari sebelum berlepas. Admin anda hantar satu per satu kepada setiap jemaah, dan selalu ada yang tertinggal.', 'Document lists, briefing dates, reminders the day before departure. Your admin sends them to every pilgrim one by one, and someone always gets missed.')}</p>
				<p>{copy('Lepas itu, jemaah tanya soalan yang sama berulang kali, sebab maklumat yang mereka perlukan tidak sampai pada masa yang tepat.', 'Then pilgrims ask the same questions repeatedly, because the information they need did not reach them at the right time.')}</p>
				<p>{copy('Group WhatsApp jemaah pun sama. Peringatan harian, info trip dan tazkirah perlu masuk setiap pagi, dan semuanya bergantung pada anda ingat untuk hantar.', 'Your pilgrim WhatsApp groups are no different. Daily reminders, trip updates and reflections need to go out every morning, and all of it depends on you remembering to send them.')}</p>
			</div>
			<div class="course-campaign-layout">
				<article class="course-campaign-example" aria-labelledby="campaign-example-title">
					<div class="campaign-example-header">
						<h3 id="campaign-example-title">{copy('Senarai Jemaah Rombongan Mac', 'March Group Pilgrim List')}</h3>
						<span class="course-example-label">{copy('Contoh', 'Example')}</span>
					</div>
					<ul class="course-campaign-meta">
						<li>{copy('Mod:', 'Mode:')} <strong>{copy('Sekali lalu', 'One pass')}</strong></li>
						<li>{copy('Zon waktu penghantaran:', 'Sending time zone:')} <strong>UTC+8</strong></li>
					</ul>
					<ol class="course-campaign-steps">
						{#each campaignSteps as step}
							<li><span>{copy(step.when[0], step.when[1])}</span><p>{copy(step.description[0], step.description[1])}</p></li>
						{/each}
					</ol>
					<p class="course-example-note">{copy('Contoh sahaja. Kandungan mesej, tarikh dan lampiran ditentukan oleh agensi anda sendiri.', 'An example only. Your agency determines the message content, dates and attachments.')}</p>
				</article>
				<div class="course-campaign-copy">
					<p><strong>{copy('Smart Campaign ialah alat Wajom untuk mesej dan follow-up automatik', 'Smart Campaign is Wajom’s tool for automatic messages and follow-ups')}</strong>{copy(', topik utama dalam kelas ini. Anda susun jadual mesej sekali sahaja. Setiap jemaah dan setiap group menerima mesej yang betul, pada masa yang betul, tanpa admin perlu ingat siapa belum dihubungi.', ', a core topic in this class. You organise the message schedule once. Every pilgrim and every group receives the right message at the right time, without your admin having to remember who has not been contacted.')}</p>
					<div class="course-notice"><p>{copy('Smart Campaign menghantar mesej ke kenalan dan ke group WhatsApp anda, mengikut jadual yang anda tetapkan. Kempen bermula sebagai Draf dan hanya menghantar selepas anda tukar kepada Aktif.', 'Smart Campaign sends messages to your contacts and your WhatsApp groups, on the schedule you set. Campaigns start as Draft and only send after you switch them to Active.')}</p></div>
					<a href="/checkout" class="course-button">{registerLabel} RM{ACTIVE_COURSE.price} {@render arrowIcon()}</a>
					<a class="course-text-link" href="/tutorials/cara-setting-smart-campaign">{copy('Lihat tutorial Smart Campaign', 'View the Smart Campaign tutorial')} {@render arrowIcon()}</a>
				</div>
			</div>
			<ul class="course-campaign-features" aria-label={copy('Ciri Smart Campaign', 'Smart Campaign features')}>
				{#each campaignFeatures as feature}
					<li><h3>{copy(feature.title[0], feature.title[1])}</h3><p>{copy(feature.description[0], feature.description[1])}</p></li>
				{/each}
			</ul>
		</div>
	</section>

	<section class="course-band" aria-labelledby="fit-title">
		<div class="wrap">
			<div class="course-section-header course-wide-heading">
				<p class="course-context">{copy('Untuk siapa', 'Who it is for')}</p>
				<h2 id="fit-title">{copy('Kelas ini sesuai jika anda nampak diri anda dalam senarai pertama di bawah.', 'This class is for you if you recognise yourself in the first list below.')}</h2>
			</div>
			<div class="course-fit-layout">
				<div class="course-fit-panel course-fit-yes">
					<h3>{@render checkIcon()} {copy('Sesuai untuk anda', 'A good fit for you')}</h3>
					<ul>{#each suitableFor as item}<li>{@render checkIcon()} <span>{copy(item[0], item[1])}</span></li>{/each}</ul>
				</div>
				<div class="course-fit-panel">
					<h3>{@render closeIcon()} {copy('Kurang sesuai', 'Less suitable')}</h3>
					<ul>{#each lessSuitableFor as item}<li>{@render closeIcon()} <span>{copy(item[0], item[1])}</span></li>{/each}</ul>
				</div>
			</div>
		</div>
	</section>

	<section class="course-band" id="galeri-webinar" aria-labelledby="gallery-title">
		<div class="wrap">
			<div class="course-section-header course-wide-heading">
				<h2 id="gallery-title">{t('course.galleryTitle')}</h2>
				<p>{copy('Lihat sendiri suasana sesi Zoom Wajom Agent AI Mastery yang lalu.', 'See the atmosphere from previous Wajom Agent AI Mastery Zoom sessions.')}</p>
			</div>
			<div class="course-gallery">
				<div class="course-gallery-landscapes">
					{#each galleryItems.slice(0, 2) as item, index}
						<button type="button" class="course-gallery-photo" onclick={() => openGalleryModal(index)} aria-label={copy('Lihat butiran foto:', 'View photo details:') + ' ' + copy(item.title[0], item.title[1])}>
							<figure><img src={item.src} alt={copy(item.alt[0], item.alt[1])} width={item.width} height={item.height} loading="lazy" decoding="async" /><figcaption><span>{copy(item.title[0], item.title[1])}</span>{@render arrowIcon()}</figcaption></figure>
						</button>
					{/each}
				</div>
				<button type="button" class="course-gallery-photo course-gallery-portrait" onclick={() => openGalleryModal(2)} aria-label={copy('Lihat butiran foto:', 'View photo details:') + ' ' + copy(galleryItems[2].title[0], galleryItems[2].title[1])}>
					<figure><img src={galleryItems[2].src} alt={copy(galleryItems[2].alt[0], galleryItems[2].alt[1])} width={galleryItems[2].width} height={galleryItems[2].height} loading="lazy" decoding="async" /><figcaption><span>{copy(galleryItems[2].title[0], galleryItems[2].title[1])}</span>{@render arrowIcon()}</figcaption></figure>
				</button>
			</div>
		</div>
	</section>

	<section class="course-band course-tinted" id="daftar" aria-labelledby="offer-title">
		<div class="wrap">
			<div class="course-section-header course-wide-heading"><h2 id="offer-title">{copy('Satu sesi untuk berhenti mengejar prospek seorang diri.', 'One session to stop chasing prospects on your own.')}</h2></div>
			<div class="course-offer-layout" id="enroll">
				<div class="course-offer-details">
					<ul class="course-included">{#each included as item}<li>{@render checkIcon()} <span>{copy(item[0], item[1])}</span></li>{/each}</ul>
					<dl class="course-event-details">
						<div><dt>{copy('Tarikh:', 'Date:')}</dt><dd><time datetime={ACTIVE_COURSE.sessionDateTime}>{sessionDate}</time></dd></div>
						<div><dt>{copy('Masa:', 'Time:')}</dt><dd>{sessionTime} <span>{copy('(waktu Malaysia)', '(Malaysia time)')}</span></dd></div>
					</dl>
					<p class="course-payment-note">{copy('Pembayaran di wajom.co/checkout. Tidak perlu melanggan sistem Wajom.', 'Payment at wajom.co/checkout. No Wajom subscription is required.')}</p>
				</div>
				<aside class="course-offer-summary" aria-label={copy('Ringkasan', 'Summary')}>
					<div class="course-summary-product"><img src="/logo.png" alt="" width="44" height="44" /><div><strong>{className}</strong><span>{sessionDate} · {sessionTime}</span></div></div>
					<div class="course-summary-original"><span>{copy('Harga asal', 'Original price')}</span><s>RM200</s></div>
					<div class="course-summary-total"><span>{copy('JUMLAH:', 'TOTAL:')}</span><strong><small>RM</small>{ACTIVE_COURSE.price}</strong></div>
					<a href="/checkout" class="course-button">{copy('Daftar sekarang', 'Register now')} {@render arrowIcon()}</a>
				</aside>
			</div>
		</div>
	</section>

	<section class="course-band" id="faq" aria-labelledby="faq-title">
		<div class="wrap course-faq-layout">
			<div class="course-section-header">
				<p class="course-context">{copy('Soalan lazim', 'Common questions')}</p>
				<h2 id="faq-title">{copy('Sebelum anda daftar', 'Before you register')}</h2>
			</div>
			<div class="course-faq-list">
				{#each faqs as faq}
					<details>
						<summary><span>{copy(faq.question[0], faq.question[1])}</span><svg class="course-icon faq-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg></summary>
						<p>{copy(faq.answer[0], faq.answer[1])}</p>
					</details>
				{/each}
			</div>
		</div>
	</section>

	<section class="course-band course-closing" aria-labelledby="closing-title">
		<div class="wrap course-closing-inner">
			<div><h2 id="closing-title">{copy('Malam ini, ada lagi yang akan tanya harga.', 'Tonight, someone else will ask the price.')}</h2><p>{copy('Pastikan dia menerima jawapan, bukti dan follow-up yang membuatnya yakin, walaupun anda sedang berehat.', 'Make sure they receive the answers, evidence and follow-ups that build confidence, even while you are resting.')}</p><p class="course-tagline">{tagline}</p></div>
			<a href="/checkout" class="course-button">{registerLabel} RM{ACTIVE_COURSE.price} {@render arrowIcon()}</a>
		</div>
	</section>

	<section class="course-sources" aria-labelledby="sources-title">
		<div class="wrap">
			<h2 id="sources-title">{copy('Sumber', 'Sources')}</h2>
			<ol>{#each sources as source, index}<li id={'src-' + (index + 1)}>{source.text} <a href={source.url} target="_blank" rel="noopener noreferrer">{source.domain}</a></li>{/each}</ol>
			<div class="course-source-foot"><span>{copy('Wajom · Kelas Setting Smart Campaign & Agent AI untuk WhatsApp', 'Wajom · Smart Campaign & Agent AI setup class for WhatsApp')}</span><span>{copy('Group WhatsApp dan perbualan dalam halaman ini ialah ilustrasi.', 'The WhatsApp group and conversations on this page are illustrations.')}</span></div>
		</div>
	</section>

	<div class="course-mobile-register" role="region" aria-label={registerLabel}>
		<div><strong>RM{ACTIVE_COURSE.price}</strong><span>{copy('Harga asal', 'Original price')} <s>RM200</s></span></div>
		<a href="/checkout" class="course-button">{registerLabel}</a>
	</div>

	<dialog bind:this={galleryDialog} class="course-gallery-dialog" aria-labelledby="gallery-dialog-title" aria-describedby="gallery-dialog-caption" onclose={() => (galleryOpen = false)} onkeydown={handleGalleryKeydown}>
		<div class="gallery-dialog-heading"><h2 id="gallery-dialog-title">{copy(selectedGalleryItem.title[0], selectedGalleryItem.title[1])}</h2><button type="button" class="course-icon-button" onclick={() => galleryDialog.close()} aria-label={copy('Tutup butiran galeri', 'Close gallery details')}>{@render closeIcon()}</button></div>
		<div class="gallery-dialog-stage">
			<button type="button" class="course-icon-button gallery-previous" onclick={prevGalleryItem} aria-label={copy('Foto sebelumnya', 'Previous photo')}>{@render arrowIcon()}</button>
			<img src={selectedGalleryItem.src} alt={copy(selectedGalleryItem.alt[0], selectedGalleryItem.alt[1])} />
			<button type="button" class="course-icon-button" onclick={nextGalleryItem} aria-label={copy('Foto seterusnya', 'Next photo')}>{@render arrowIcon()}</button>
		</div>
		<div class="gallery-dialog-footer"><p id="gallery-dialog-caption">{copy(selectedGalleryItem.caption[0], selectedGalleryItem.caption[1])}</p><span>{selectedGalleryIndex + 1} / {galleryItems.length}</span></div>
	</dialog>
</div>

<style>
	.umrah-course {
		--course-accent: var(--emerald-2);
		--course-gold-text: var(--gold-2);
		--course-warm-note: #e5b28b;
		--course-chat-in: var(--bg-3);
		--course-chat-out: #123d2e;
		--course-chat-ink: #f0f5f2;
		--course-chat-muted: #b5d0c0;
		--course-chat-read: #53bdeb;
		position: relative;
		background: var(--bg);
		color: var(--ink);
		isolation: isolate;
	}
	:global([data-theme="light"]) .umrah-course {
		--course-accent: #146c4e;
		--course-gold-text: #795d0d;
		--course-warm-note: #80502d;
		--course-chat-out: #e2f3e9;
		--course-chat-ink: #143d2b;
		--course-chat-muted: #3d6951;
		--course-chat-read: #0b84c4;
	}
	.umrah-course h1, .umrah-course h2, .umrah-course h3 {
		margin: 0;
		font-family: var(--serif);
		font-weight: 600;
		letter-spacing: -0.03em;
		text-wrap: balance;
	}
	.umrah-course h2 { font-size: clamp(1.85rem, 3.25vw, 2.65rem); line-height: 1.15; }
	.umrah-course h3 { font-size: 1.2rem; line-height: 1.35; letter-spacing: -0.015em; }
	.umrah-course p { margin: 0; text-wrap: pretty; }
	.umrah-course a, .umrah-course button, .umrah-course summary { -webkit-tap-highlight-color: transparent; }
	.umrah-course :is(a, button, summary):focus-visible { outline: 2px solid var(--course-accent); outline-offset: 5px; border-radius: 6px; }
	.umrah-course section, .course-sources li { scroll-margin-top: calc(var(--nav-h) + 24px); }
	.course-icon { display: inline-block; width: 20px; height: 20px; flex: none; }
	.course-skip { position: fixed; top: 12px; left: 16px; z-index: 100; padding: 12px 20px; background: var(--gold); color: var(--cta-ink); border-radius: 8px; transform: translateY(-180%); }
	.course-skip:focus { transform: translateY(0); }
	.course-announcement { background: color-mix(in srgb, var(--gold) 8%, var(--bg)); border-bottom: 1px solid color-mix(in srgb, var(--gold) 20%, var(--rule)); }
	.announcement-inner { display: flex; justify-content: space-between; align-items: center; gap: 8px 24px; padding-block: 12px; font-size: 0.82rem; color: var(--course-gold-text); }
	.announcement-inner time { font-variant-numeric: tabular-nums; }
	.course-hero { padding-block: clamp(48px, 6vw, 88px) clamp(56px, 7vw, 96px); }
	.course-hero-grid { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.9fr); gap: clamp(36px, 5vw, 72px); align-items: center; }
	.course-hero-copy { min-width: 0; }
	.course-context { color: var(--course-accent); font-size: 0.85rem; font-weight: 600; line-height: 1.6; }
	.course-hero h1 { margin-top: 22px; font-size: clamp(2.5rem, 4.2vw, 3.8rem); line-height: 1.06; }
	.course-hero h1 > span { display: block; color: var(--course-accent); }
	.umrah-course .course-hero-eyebrow { font-family: var(--mono); font-size: 0.8rem; font-weight: 500; letter-spacing: 0.01em; text-wrap: balance; }
	.umrah-course .course-lede { margin-top: 26px; max-width: 52ch; color: var(--ink-2); font-size: 1.06rem; line-height: 1.75; }
	.course-hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 16px 20px; margin-top: 30px; }
	.course-button { display: inline-flex; align-items: center; justify-content: center; gap: 14px; min-height: 52px; padding: 14px 24px; border-radius: 10px; background: var(--gold); color: var(--cta-ink); font-size: 1rem; font-weight: 700; line-height: 1.4; text-align: center; text-decoration: none; transition: background-color 180ms ease, transform 180ms ease; }
	.course-button:hover { background: var(--gold-2); }
	.course-button:active { transform: translateY(1px); }
	.course-original-price { color: var(--ink-3); font-size: 0.83rem; white-space: nowrap; }
	.course-original-price s { margin-left: 4px; }
	.umrah-course .course-session { margin-top: 16px; font-size: 0.85rem; color: var(--ink-2); }
	.course-benefits { display: flex; flex-wrap: wrap; gap: 10px 22px; list-style: none; margin: 26px 0 0; padding: 22px 0 0; border-top: 1px solid var(--rule-2); font-size: 0.85rem; }
	.course-benefits li { display: flex; align-items: center; gap: 6px; }
	.course-benefits .course-icon { width: 17px; height: 17px; color: var(--course-accent); }
	.course-conversation { margin: 0; width: 100%; max-width: 420px; justify-self: end; overflow: hidden; border: 1px solid var(--rule-2); border-radius: 16px; background: var(--bg-2); font-size: 0.85rem; line-height: 1.5; }
	.conversation-header { display: flex; align-items: center; gap: 10px; padding: 18px; border-bottom: 1px solid var(--rule-2); }
	.conversation-avatar { display: grid; place-items: center; width: 38px; height: 38px; flex: none; border-radius: 50%; background: var(--emerald-dim); color: var(--course-accent); font-weight: 700; }
	.conversation-header > div { display: grid; gap: 2px; }
	.conversation-header strong { font-size: 0.88rem; }
	.conversation-header > div > span { font-size: 0.75rem; color: var(--ink-3); }
	.conversation-example { margin-left: auto; color: var(--course-gold-text); font-size: 0.72rem; }
	.conversation-messages { display: grid; gap: 10px; padding: 20px 18px 14px; }
	.conversation-bubble { width: fit-content; max-width: 90%; padding: 10px 12px 7px; border-radius: 10px; }
	.conversation-bubble.incoming { justify-self: start; background: var(--course-chat-in); border-top-left-radius: 2px; }
	.conversation-bubble.outgoing { justify-self: end; background: var(--course-chat-out); color: var(--course-chat-ink); border-top-right-radius: 2px; }
	.conversation-time { display: flex; justify-content: flex-end; align-items: center; gap: 4px; margin-top: 5px; font-size: 0.67rem; color: var(--ink-3); font-variant-numeric: tabular-nums; }
	.outgoing .conversation-time { color: var(--course-chat-muted); }
	.conversation-time .course-icon { width: 17px; height: 12px; }
	.outgoing .conversation-time .course-icon { color: var(--course-chat-read); }
	.conversation-status, .conversation-slot { display: grid; }
	.conversation-status > span, .conversation-slot > div { grid-area: 1 / 1; }
	.conversation-typing-status { color: var(--course-accent); opacity: 0; }
	.conversation-typing { display: flex; gap: 4px; align-self: start; padding: 12px 14px; opacity: 0; }
	.conversation-typing span { width: 6px; height: 6px; border-radius: 50%; background: var(--ink-3); }
	.conversation-auto { display: block; margin-bottom: 4px; color: var(--course-chat-muted); font-size: 0.68rem; font-weight: 600; }
	.conversation-sender { display: block; margin-bottom: 4px; color: var(--course-accent); font-size: 0.68rem; font-weight: 600; }
	.course-benefits .course-example-label { padding: 1px 6px; font-size: 0.66rem; }
	.umrah-course .course-tagline { margin-top: 20px; color: var(--course-gold-text); font-family: var(--serif); font-size: clamp(1.2rem, 1.8vw, 1.45rem); font-weight: 600; line-height: 1.35; letter-spacing: -0.015em; }
	.conversation-day { justify-self: center; padding-block: 2px; font-size: 0.69rem; color: var(--ink-3); }
	.conversation-handover { display: flex; align-items: center; justify-content: center; gap: 7px; padding: 13px 16px; border-top: 1px solid var(--rule-2); background: color-mix(in srgb, var(--emerald) 7%, var(--bg-2)); color: var(--course-accent); font-size: 0.76rem; font-weight: 600; }
	.conversation-handover .course-icon { width: 16px; height: 16px; }
	/* Hero chat loop (16s): messages arrive on a schedule, then everything fades and restarts.
	   Without motion, the final static state above is shown. */
	@media (prefers-reduced-motion: no-preference) {
		.chat-in, .conversation-members, .conversation-typing-status, .conversation-typing, .chat-in .course-icon, .conversation-handover .course-icon { animation-duration: 16s; animation-timing-function: cubic-bezier(0.3, 1.3, 0.6, 1); animation-iteration-count: infinite; }
		.chat-in { transform-origin: 50% 100%; }
		.chat-in.outgoing { transform-origin: 100% 100%; }
		.chat-in.incoming { transform-origin: 0 100%; }
		.chat-in-1 { animation-name: chat-in-1; }
		.chat-in-2 { animation-name: chat-in-2; }
		.chat-in-3 { animation-name: chat-in-3; }
		.chat-in-4 { animation-name: chat-in-4; }
		.chat-in-5 { animation-name: chat-in-5; }
		.chat-in-6 { animation-name: chat-in-6; }
		.chat-in-2 .course-icon { animation-name: chat-read-2; }
		.chat-in-3 .course-icon { animation-name: chat-read-3; }
		.chat-in-6 .course-icon { animation-name: chat-read-6; }
		.conversation-members { animation-name: chat-members; }
		.conversation-typing, .conversation-typing-status { animation-name: chat-typing; }
		.conversation-handover .course-icon { animation-name: chat-pulse; }
		.conversation-typing span { animation: chat-dot 1s ease-in-out infinite; }
		.conversation-typing span:nth-child(2) { animation-delay: 0.15s; }
		.conversation-typing span:nth-child(3) { animation-delay: 0.3s; }
	}
	/* Arrival keyframes: hidden until the step's time, pop in, hold, fade out together at 90-95%. */
	@keyframes chat-in-1 { 0%, 2% { opacity: 0; transform: translateY(8px) scale(0.96); } 4.5%, 90% { opacity: 1; transform: none; } 95%, 100% { opacity: 0; transform: none; } }
	@keyframes chat-in-2 { 0%, 6% { opacity: 0; transform: translateY(8px) scale(0.96); } 8.5%, 90% { opacity: 1; transform: none; } 95%, 100% { opacity: 0; transform: none; } }
	@keyframes chat-in-3 { 0%, 15% { opacity: 0; transform: translateY(8px) scale(0.96); } 17.5%, 90% { opacity: 1; transform: none; } 95%, 100% { opacity: 0; transform: none; } }
	@keyframes chat-in-4 { 0%, 37.5% { opacity: 0; transform: translateY(8px) scale(0.96); } 40%, 90% { opacity: 1; transform: none; } 95%, 100% { opacity: 0; transform: none; } }
	@keyframes chat-in-5 { 0%, 48% { opacity: 0; transform: translateY(8px) scale(0.96); } 50%, 90% { opacity: 1; transform: none; } 95%, 100% { opacity: 0; transform: none; } }
	@keyframes chat-in-6 { 0%, 54% { opacity: 0; transform: translateY(8px) scale(0.96); } 56.5%, 90% { opacity: 1; transform: none; } 95%, 100% { opacity: 0; transform: none; } }
	/* Ticks switch from sent to read about one second after each arrival. */
	@keyframes chat-read-2 { 0%, 14% { color: var(--course-chat-muted); } 15%, 100% { color: var(--course-chat-read); } }
	@keyframes chat-read-3 { 0%, 24% { color: var(--course-chat-muted); } 25%, 100% { color: var(--course-chat-read); } }
	@keyframes chat-read-6 { 0%, 63% { color: var(--course-chat-muted); } 64%, 100% { color: var(--course-chat-read); } }
	@keyframes chat-typing { 0%, 27% { opacity: 0; } 28.5%, 36.5% { opacity: 1; } 38%, 100% { opacity: 0; } }
	@keyframes chat-members { 0%, 26.5%, 38.5%, 100% { opacity: 1; } 27.5%, 37.5% { opacity: 0; } }
	@keyframes chat-pulse { 0%, 7%, 10%, 16%, 19%, 55%, 58%, 100% { transform: none; } 8.5%, 17.5%, 56.5% { transform: scale(1.3); } }
	@keyframes chat-dot { 0%, 60%, 100% { opacity: 0.45; transform: none; } 30% { opacity: 1; transform: translateY(-3px); } }
	.course-jump-nav { border-block: 1px solid var(--rule-2); background: var(--bg-2); }
	.jump-nav-inner { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px 28px; padding-block: 8px; }
	.jump-nav-inner a { display: flex; align-items: center; min-height: 44px; color: var(--ink-2); font-size: 0.85rem; }
	.jump-nav-inner a:hover { color: var(--course-accent); }
	.course-band { padding-block: clamp(64px, 8vw, 108px); border-bottom: 1px solid var(--rule); }
	.course-tinted { background: var(--bg-2); }
	.course-section-header { display: grid; align-content: start; gap: 16px; min-width: 0; }
	.course-section-header > p:not(.course-context) { max-width: 65ch; color: var(--ink-2); line-height: 1.7; }
	.course-wide-heading { max-width: 760px; margin-bottom: 44px; }
	.course-scenes-layout { display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr); gap: clamp(32px, 6vw, 80px); }
	.course-scene { padding-block: 23px; border-bottom: 1px solid var(--rule-2); }
	.course-scene:first-child { padding-top: 0; }
	.course-scene:last-child { border-bottom: 0; padding-bottom: 0; }
	.scene-time { display: block; margin-bottom: 9px; color: var(--course-accent); font-size: 0.8rem; font-weight: 600; font-variant-numeric: tabular-nums; }
	.course-scene p { color: var(--ink-2); line-height: 1.65; }
	.course-scene strong { color: var(--ink); font-weight: 600; }
	.course-scenes-note { max-width: 76ch; margin-top: 44px !important; padding-top: 28px; border-top: 1px solid var(--rule-2); color: var(--ink-2); font-size: 1.06rem; line-height: 1.75; }
	.course-scenes-note strong { color: var(--course-accent); font-weight: 600; }
	.course-trust-layout { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr); gap: clamp(36px, 6vw, 80px); align-items: center; }
	.course-trust-copy { display: grid; gap: 24px; color: var(--ink-2); line-height: 1.7; }
	.course-trust-copy h2, .course-trust-copy strong { color: var(--ink); }
	.course-notice { padding: 20px; border: 1px solid var(--rule-2); border-radius: 10px; color: var(--ink-2); font-size: 0.91rem; line-height: 1.7; }
	.umrah-course sup a { padding: 2px 3px; color: var(--course-accent); text-decoration: underline; text-underline-offset: 2px; font-size: 0.75rem; }
	.course-trust-facts { display: grid; gap: 28px; margin: 0; padding-left: 36px; border-left: 1px solid var(--rule-2); }
	.course-trust-facts > div { display: grid; gap: 10px; padding-bottom: 28px; border-bottom: 1px solid var(--rule-2); }
	.course-trust-facts > div:last-child { padding-bottom: 0; border: 0; }
	.course-trust-facts dt { color: var(--course-gold-text); font-family: var(--serif); font-size: clamp(2.15rem, 3.5vw, 3.1rem); font-weight: 600; line-height: 1.05; letter-spacing: -0.03em; font-variant-numeric: tabular-nums; }
	.course-trust-facts dd { margin: 0; color: var(--ink-2); font-size: 0.95rem; line-height: 1.6; }
	.course-learning-layout { display: grid; grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr); gap: clamp(28px, 4vw, 48px); align-items: start; }
	.course-modules { list-style: none; margin: 0; padding: 0; counter-reset: course-module; }
	.course-modules li { position: relative; padding: 24px 0 24px 44px; border-top: 1px solid var(--rule-2); counter-increment: course-module; }
	.course-modules li::before { content: counter(course-module, decimal-leading-zero); position: absolute; top: 27px; left: 0; color: var(--course-accent); font-family: var(--mono); font-size: 0.75rem; }
	.course-modules p { margin-top: 10px; color: var(--ink-2); line-height: 1.65; font-size: 0.96rem; }
	.course-followup { padding: clamp(22px, 3vw, 32px); border: 1px solid color-mix(in srgb, var(--emerald) 35%, var(--rule)); border-radius: 16px; background: color-mix(in srgb, var(--emerald) 5%, var(--bg-2)); }
	.course-followup-heading { display: grid; gap: 14px; }
	.course-followup-heading h3 { font-size: clamp(1.4rem, 2.2vw, 1.7rem); line-height: 1.2; }
	.course-followup-heading > p:not(.course-context) { color: var(--ink-2); font-size: 0.95rem; }
	.course-followup-list { position: relative; display: grid; gap: 22px; list-style: none; margin: 30px 0; padding: 0; }
	.course-followup-list::before { content: ''; position: absolute; left: 25px; top: 12px; bottom: 20px; width: 1px; background: var(--rule-2); }
	.course-followup-list li { position: relative; display: grid; grid-template-columns: 52px minmax(0, 1fr); gap: 16px; align-items: start; }
	.followup-day { padding: 6px 3px; border: 1px solid var(--rule-2); border-radius: 6px; background: var(--bg-2); color: var(--course-accent); font-family: var(--mono); font-size: 0.76rem; font-weight: 500; text-align: center; }
	.course-followup-list li > div { display: grid; gap: 5px; font-size: 0.94rem; }
	.course-followup-list strong { font-weight: 600; line-height: 1.5; }
	.course-followup-list li > div > span { color: var(--ink-3); font-size: 0.84rem; line-height: 1.55; }
	.course-example-note { padding-top: 20px; border-top: 1px solid var(--rule-2); color: var(--ink-3); font-size: 0.82rem; line-height: 1.65; }
	.course-campaign-layout { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr); gap: clamp(32px, 5vw, 64px); align-items: center; }
	.course-campaign-example { padding: clamp(22px, 3vw, 32px); border: 1px solid var(--rule-2); border-radius: 16px; background: var(--bg); }
	.campaign-example-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
	.course-example-label { flex: none; padding: 2px 7px; border: 1px solid var(--rule-2); border-radius: 4px; color: var(--course-gold-text); font-size: 0.7rem; }
	.course-campaign-meta { display: grid; gap: 4px; list-style: none; margin: 16px 0 24px; padding: 0 0 20px; border-bottom: 1px solid var(--rule-2); color: var(--ink-3); font-size: 0.77rem; }
	.course-campaign-meta strong { color: var(--ink-2); font-weight: 500; }
	.course-campaign-steps { display: grid; gap: 24px; counter-reset: campaign-step; list-style: none; margin: 0 0 24px; padding: 0; }
	.course-campaign-steps li { position: relative; padding-left: 40px; counter-increment: campaign-step; }
	.course-campaign-steps li::before { content: counter(campaign-step); position: absolute; top: 0; left: 0; display: grid; place-items: center; width: 26px; height: 26px; border: 1px solid var(--rule-2); border-radius: 50%; color: var(--course-accent); font-size: 0.75rem; }
	.course-campaign-steps li > span { color: var(--course-accent); font-size: 0.78rem; font-weight: 600; }
	.course-campaign-steps p { margin-top: 7px; color: var(--ink-2); font-size: 0.94rem; line-height: 1.65; }
	.course-campaign-copy { display: grid; justify-items: start; gap: 24px; color: var(--ink-2); line-height: 1.75; }
	.course-campaign-copy > p { font-size: 1.08rem; }
	.course-campaign-copy strong { color: var(--ink); font-weight: 600; }
	.course-text-link { display: inline-flex; align-items: center; gap: 10px; min-height: 44px; color: var(--course-accent); font-size: 0.88rem; font-weight: 600; text-decoration: underline; text-underline-offset: 5px; }
	.course-text-link:hover { text-decoration-thickness: 2px; }
	.course-text-link .course-icon { width: 16px; height: 16px; }
	.course-campaign-features { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 48px; list-style: none; margin: 56px 0 0; padding: 0; }
	.course-campaign-features li { padding: 26px 0; border-top: 1px solid var(--rule-2); }
	.course-campaign-features h3 { font-size: 1.12rem; }
	.course-campaign-features p { margin-top: 10px; color: var(--ink-2); font-size: 0.93rem; line-height: 1.7; }
	.course-fit-layout { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: 24px; }
	.course-fit-panel { padding: 30px; border: 1px solid var(--rule-2); border-radius: 12px; background: var(--bg-2); }
	.course-fit-yes { border-color: color-mix(in srgb, var(--emerald) 35%, var(--rule)); background: color-mix(in srgb, var(--emerald) 5%, var(--bg-2)); }
	.course-fit-panel h3 { display: flex; align-items: center; gap: 10px; margin-bottom: 24px; }
	.course-fit-panel ul { display: grid; gap: 20px; list-style: none; margin: 0; padding: 0; }
	.course-fit-panel li { display: flex; align-items: flex-start; gap: 12px; color: var(--ink-2); font-size: 0.96rem; line-height: 1.65; }
	.course-fit-panel li .course-icon { margin-top: 3px; }
	.course-fit-panel .course-icon { color: var(--ink-3); }
	.course-fit-yes .course-icon { color: var(--course-accent); }
	.course-gallery { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr); gap: 20px; align-items: start; max-width: 940px; }
	.course-gallery-landscapes { display: grid; gap: 20px; }
	.course-gallery-photo { display: block; width: 100%; padding: 0; overflow: hidden; border: 1px solid var(--rule-2); border-radius: 12px; background: var(--bg-2); color: var(--ink); font: inherit; cursor: pointer; text-align: left; transition: border-color 180ms ease; }
	.course-gallery-photo:hover { border-color: var(--course-accent); }
	.course-gallery-photo figure { margin: 0; }
	.course-gallery-photo img { display: block; width: 100%; height: auto; }
	.course-gallery-photo figcaption { display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 16px 18px; font-size: 0.87rem; font-weight: 600; }
	.course-gallery-photo .course-icon { color: var(--course-accent); }
	.course-offer-layout { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr); gap: clamp(28px, 5vw, 64px); align-items: start; scroll-margin-top: calc(var(--nav-h) + 24px); }
	.course-included { display: grid; list-style: none; margin: 0; padding: 0; }
	.course-included li { display: flex; align-items: flex-start; gap: 14px; padding: 18px 0; border-bottom: 1px solid var(--rule-2); font-weight: 500; }
	.course-included li:first-child { padding-top: 0; }
	.course-included li .course-icon { margin-top: 3px; color: var(--course-accent); }
	.course-event-details { display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr); gap: 24px; margin: 28px 0; }
	.course-event-details dt { margin-bottom: 8px; color: var(--ink-3); font-size: 0.8rem; }
	.course-event-details dd { margin: 0; font-weight: 600; line-height: 1.5; }
	.course-event-details dd > span { display: block; margin-top: 4px; color: var(--ink-2); font-size: 0.82rem; font-weight: 400; }
	.course-payment-note { color: var(--ink-3); font-size: 0.86rem; line-height: 1.7; }
	.course-offer-summary { padding: 28px; border: 1px solid color-mix(in srgb, var(--gold) 45%, var(--rule)); border-radius: 16px; background: var(--bg); }
	.course-summary-product { display: flex; align-items: center; gap: 12px; padding-bottom: 24px; border-bottom: 1px solid var(--rule-2); }
	.course-summary-product img { flex: none; border-radius: 10px; }
	.course-summary-product > div { display: grid; gap: 5px; }
	.course-summary-product strong { font-size: 1.06rem; }
	.course-summary-product span { color: var(--ink-3); font-size: 0.77rem; line-height: 1.65; }
	.course-summary-original { display: flex; justify-content: space-between; gap: 16px; margin-top: 24px; color: var(--ink-3); font-size: 0.9rem; }
	.course-summary-total { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-block: 24px 28px; }
	.course-summary-total > span { color: var(--ink-2); font-size: 0.78rem; font-weight: 600; }
	.course-summary-total > strong { font-family: var(--serif); font-size: 3.8rem; font-weight: 600; line-height: 1; letter-spacing: -0.03em; font-variant-numeric: tabular-nums; }
	.course-summary-total small { margin-right: 4px; font-family: var(--sans); font-size: 1.25rem; letter-spacing: 0; }
	.course-offer-summary .course-button { width: 100%; }
	.course-faq-layout { display: grid; grid-template-columns: minmax(0, 0.65fr) minmax(0, 1.35fr); gap: clamp(32px, 5vw, 64px); }
	.course-faq-list details { border-bottom: 1px solid var(--rule-2); }
	.course-faq-list details:first-child { border-top: 1px solid var(--rule-2); }
	.course-faq-list summary { display: flex; align-items: center; justify-content: space-between; gap: 24px; min-height: 72px; padding-block: 22px; list-style: none; font-weight: 600; line-height: 1.5; cursor: pointer; }
	.course-faq-list summary::-webkit-details-marker { display: none; }
	.course-faq-list summary:hover, .course-faq-list details[open] summary { color: var(--course-accent); }
	.faq-plus { color: var(--course-accent); transition: transform 180ms ease; }
	.course-faq-list details[open] .faq-plus { transform: rotate(45deg); }
	.course-faq-list details > p { max-width: 65ch; padding: 0 32px 24px 0; color: var(--ink-2); font-size: 0.96rem; line-height: 1.75; }
	.course-closing { background: color-mix(in srgb, var(--emerald) 7%, var(--bg)); }
	.course-closing-inner { display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 36px 64px; }
	.course-closing h2 { max-width: 21ch; }
	.course-closing p { max-width: 60ch; margin-top: 22px; color: var(--ink-2); line-height: 1.75; }
	.course-sources { padding-block: 40px; background: var(--bg); }
	.course-sources h2 { margin-bottom: 18px; color: var(--ink-3); font-family: var(--sans); font-size: 0.9rem; font-weight: 600; letter-spacing: 0; }
	.course-sources ol { display: grid; gap: 10px; margin: 0; padding-left: 20px; color: var(--ink-3); font-size: 0.78rem; line-height: 1.7; }
	.course-sources a { color: var(--course-accent); text-decoration: underline; text-underline-offset: 3px; overflow-wrap: anywhere; }
	.course-source-foot { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px 24px; margin-top: 28px; padding-top: 24px; border-top: 1px solid var(--rule); color: var(--ink-3); font-size: 0.78rem; }
	.course-mobile-register { display: none; }
	.course-gallery-dialog { width: min(960px, calc(100% - 32px)); max-height: calc(100dvh - 40px); padding: 0; border: 1px solid var(--rule-2); border-radius: 16px; background: var(--bg-2); color: var(--ink); }
	.course-gallery-dialog::backdrop { background: rgba(4, 12, 8, 0.88); }
	.gallery-dialog-heading { display: flex; justify-content: space-between; align-items: center; gap: 20px; padding: 18px 22px; border-bottom: 1px solid var(--rule-2); }
	.gallery-dialog-heading h2 { font-size: 1.2rem; line-height: 1.4; }
	.course-icon-button { display: grid; place-items: center; width: 44px; height: 44px; flex: none; padding: 0; border: 1px solid var(--rule-2); border-radius: 8px; background: var(--bg-3); color: var(--ink); cursor: pointer; }
	.course-icon-button:hover { color: var(--course-accent); border-color: var(--course-accent); }
	.gallery-dialog-stage { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 20px; }
	.gallery-dialog-stage img { display: block; min-width: 0; max-width: calc(100% - 112px); max-height: 62dvh; width: auto; height: auto; object-fit: contain; }
	.gallery-previous .course-icon { transform: rotate(180deg); }
	.gallery-dialog-footer { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; padding: 18px 22px; border-top: 1px solid var(--rule-2); color: var(--ink-2); font-size: 0.87rem; }
	.gallery-dialog-footer > span { flex: none; color: var(--ink-3); font-variant-numeric: tabular-nums; }

	@media (max-width: 1050px) {
		.course-hero-grid { gap: 32px; grid-template-columns: minmax(0, 1fr) minmax(0, 0.9fr); }
		.course-hero h1 { font-size: 3rem; }
		.course-hero-actions { gap: 12px; }
		.course-original-price { width: 100%; }
		.course-closing-inner { grid-template-columns: minmax(0, 1fr); gap: 28px; justify-items: start; }
	}
	@media (max-width: 880px) {
		.announcement-inner { flex-wrap: wrap; justify-content: center; text-align: center; }
		.course-hero-grid { grid-template-columns: minmax(0, 1fr); gap: 44px; }
		.course-hero-copy { max-width: 680px; }
		.course-hero h1 { max-width: 18ch; font-size: clamp(2.7rem, 7vw, 3.8rem); }
		.course-lede { max-width: 62ch; }
		.course-conversation { justify-self: center; max-width: 460px; }
		.course-original-price { width: auto; }
		.course-scenes-layout, .course-trust-layout, .course-learning-layout, .course-campaign-layout, .course-offer-layout, .course-faq-layout { grid-template-columns: minmax(0, 1fr); gap: 36px; }
		.course-section-header { max-width: 760px; }
		.course-trust-facts { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; padding: 28px 0 0; border-left: 0; border-top: 1px solid var(--rule-2); }
		.course-trust-facts > div { padding: 0; border: 0; }
		.course-trust-facts dt { font-size: 2.2rem; }
		.course-fit-layout { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
		.course-fit-panel { padding: 24px; }
		.course-offer-summary { max-width: 520px; width: 100%; }
		.course-campaign-copy > p { max-width: 65ch; }
		.course-gallery { gap: 16px; }
		.course-gallery-landscapes { gap: 16px; }
	}
	@media (max-width: 600px) {
		.umrah-course :global(.wrap) { padding-inline: max(20px, env(safe-area-inset-left, 0px)) max(20px, env(safe-area-inset-right, 0px)); }
		:global(body:has(.umrah-course)) { padding-bottom: calc(100px + env(safe-area-inset-bottom, 0px)); }
		:global(body:has(.umrah-course) .topbar .lang-text) { display: none; }
		:global(body:has(.umrah-course) .wa-float-btn) { width: 44px; height: 44px; right: max(16px, env(safe-area-inset-right, 0px)); bottom: calc(14px + env(safe-area-inset-bottom, 0px)); box-shadow: none; }
		.announcement-inner { gap: 4px; padding-block: 10px; font-size: 0.75rem; }
		.announcement-inner > span, .announcement-inner time { width: 100%; }
		.course-hero { padding-block: 40px 48px; }
		.course-hero h1 { font-size: clamp(2.35rem, 9.5vw, 3.25rem); max-width: 20ch; margin-top: 18px; }
		.course-context { font-size: 0.8rem; }
		.umrah-course .course-hero-eyebrow { font-size: 0.72rem; letter-spacing: 0; }
		.umrah-course .course-lede { margin-top: 22px; font-size: 1rem; line-height: 1.75; }
		.course-hero-actions { align-items: flex-start; margin-top: 26px; }
		.course-hero-actions .course-button { width: 100%; }
		.course-button { font-size: 0.95rem; padding-inline: 18px; }
		.umrah-course .course-session { margin-top: 10px; font-size: 0.8rem; }
		.course-benefits { gap: 10px 16px; font-size: 0.77rem; }
		.course-hero-grid { gap: 32px; }
		.conversation-messages { padding-inline: 14px; }
		.conversation-header { padding: 16px 14px; }
		.course-conversation { font-size: 0.84rem; }
		.jump-nav-inner { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 16px; padding-block: 10px; }
		.jump-nav-inner a { font-size: 0.79rem; }
		.course-band { padding-block: 56px; }
		.course-wide-heading { margin-bottom: 32px; }
		.course-trust-facts { grid-template-columns: minmax(0, 1fr); }
		.course-trust-facts > div { padding-bottom: 24px; border-bottom: 1px solid var(--rule-2); }
		.course-trust-facts dt { font-size: 2.8rem; }
		.course-scenes-note { margin-top: 32px !important; font-size: 1rem; }
		.course-followup { padding: 22px 18px; }
		.course-followup-list li { grid-template-columns: 48px minmax(0, 1fr); gap: 12px; }
		.course-followup-list::before { left: 23px; }
		.course-campaign-example { padding: 22px 18px; }
		.course-campaign-features { grid-template-columns: minmax(0, 1fr); margin-top: 36px; }
		.course-fit-layout { grid-template-columns: minmax(0, 1fr); }
		.course-gallery { grid-template-columns: minmax(0, 1fr); gap: 20px; }
		.course-gallery-landscapes { gap: 20px; }
		.course-gallery-portrait { max-width: 330px; justify-self: center; }
		.course-event-details { grid-template-columns: minmax(0, 1fr); gap: 22px; }
		.course-event-details dd > span { display: inline; margin-left: 3px; }
		.course-offer-summary { padding: 24px; }
		.course-faq-list summary { gap: 16px; font-size: 0.98rem; }
		.course-faq-list details > p { padding-right: 0; }
		.course-closing-inner { gap: 28px; }
		.course-closing .course-button { width: 100%; }
		.course-source-foot { display: grid; gap: 10px; }
		.course-mobile-register { display: flex; align-items: center; justify-content: space-between; gap: 12px; position: fixed; inset: auto 0 0; z-index: 40; padding: 12px max(76px, calc(env(safe-area-inset-right, 0px) + 60px)) calc(12px + env(safe-area-inset-bottom, 0px)) max(16px, env(safe-area-inset-left, 0px)); border-top: 1px solid var(--rule-2); background: var(--bg); }
		.course-mobile-register > div { display: grid; gap: 3px; flex: none; line-height: 1.2; }
		.course-mobile-register strong { font-family: var(--serif); font-size: 1.55rem; font-weight: 600; }
		.course-mobile-register > div > span { font-size: 0.68rem; color: var(--ink-3); }
		.course-mobile-register .course-button { flex: 1; min-width: 0; min-height: 48px; padding: 12px; font-size: 0.8rem; }
		.gallery-dialog-heading { gap: 12px; padding: 14px; }
		.gallery-dialog-heading h2 { font-size: 1.05rem; }
		.gallery-dialog-stage { position: relative; padding: 12px; min-height: 200px; }
		.gallery-dialog-stage img { max-width: 100%; margin-inline: auto; max-height: 58dvh; }
		.gallery-dialog-stage .course-icon-button { position: absolute; top: 50%; right: 16px; transform: translateY(-50%); }
		.gallery-dialog-stage .gallery-previous { right: auto; left: 16px; }
		.gallery-dialog-footer { gap: 16px; padding: 14px; font-size: 0.8rem; }
	}
	@media (prefers-reduced-motion: reduce) {
		.course-button, .course-gallery-photo, .faq-plus { transition: none; }
	}
</style>
