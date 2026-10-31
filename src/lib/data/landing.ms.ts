import {
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

export const metrics = [
	{ pre: '+', value: 300, suffix: '%', label: 'Lebih banyak prospek' },
	{ pre: '', value: 24, suffix: '/7', label: 'Balasan automatik' },
	{ pre: '', value: 500, suffix: '+', label: 'Leader aktif' },
	{ pre: '', value: 95, suffix: '%', label: 'Kadar kepuasan' }
];

export const problems = [
	{ icon: ArrowsClockwiseIcon, title: 'Follow-up manual memenatkan', body: 'Setiap hari beratus prospek kena follow-up satu-satu. Prospek berkualiti tetap terlepas, downline pula tak tersentuh.' },
	{ icon: GraduationCapIcon, title: 'Training anak team tak konsisten', body: 'Tak cukup masa nak ajar sorang-sorang. Tanpa sistem, setiap anak team belajar versi yang berbeza.' },
	{ icon: ChatsCircleIcon, title: 'Soalan sama, setiap hari', body: 'Leader habiskan hari melayan benda basic. Strategi, coaching dan development team semua tergendala.' },
	{ icon: DatabaseIcon, title: 'Database bersepah', body: 'Sebahagian dalam Excel, sebahagian dalam telefon, sebahagian dalam buku. Progress team tak dapat dibaca.' },
	{ icon: TrendDownIcon, title: 'Bisnes susah nak grow', body: 'Sepatutnya makin ramai team makin banyak sales. Tanpa automasi, tambah team bermakna tambah beban.' },
	{ icon: UserMinusIcon, title: 'Name listing dah habis', body: 'Bila leader tak tahu di mana nak cari leads berkualiti, anak team perlahan-lahan berhenti berusaha.' }
];

export const shifts = [
	{ label: 'Masa', was: '80% masa habis untuk kerja admin', now: '80% masa untuk leadership dan strategi' },
	{ label: 'Follow-up', was: 'Manual, tak konsisten, mudah terlepas', now: 'Automatik dan konsisten, 24 jam sehari' },
	{ label: 'Duplikasi', was: 'Setiap anak team buat cara sendiri', now: 'Satu fail JSON, seluruh team guna sistem sama' },
	{ label: 'Respons', was: 'Prospek hilang kerana lambat dibalas', now: 'Balasan segera walaupun laptop tertutup' },
	{ label: 'Skala', was: 'Sistem tersekat bila prospek bertambah', now: '10 hingga 10,000 prospek, beban kerja sama' },
	{ label: 'Tenaga', was: 'Burnout kerana kerja yang berulang', now: 'Fokus pada growth, bukan kerja admin' }
];

export const pillars = [
	{ icon: LightningIcon, name: 'Evergreen Campaign', body: 'Hantar content follow-up tanpa had kepada prospek dan team tanpa perlu setting setiap hari. Lepas setting sekali, Wajom hantar non-stop.', points: ['Follow-up automatik non-stop', 'Personal dan group WhatsApp', 'Prospek tanpa had'], image: '/feature-drip-visual.jpg', alt: 'Papan pemuka Wajom memaparkan garis masa kempen drip 30 hari dan analitik penghantaran' },
	{ icon: RobotIcon, name: 'Customer Service AI', body: 'AI yang menulis 100% gaya top leader anda: jawab soalan, handle objection, dan bawa prospek sampai ke closing.', points: ['Gaya jawapan top leader', 'Handle objection pantas', 'Closing pakej tinggi'], image: '/feature-ai-visual.jpg', alt: 'Papan pemuka Chat AI Wajom sedang membalas beberapa perbualan WhatsApp pelanggan' },
	{ icon: ShareNetworkIcon, name: 'Share Owner', body: 'Team masuk dashboard leader dan tiru setting tanpa perlu tukar username atau password. Leader pula boleh semak dan betulkan setting team.', points: ['Akses dashboard terkawal', 'Tiru setting leader satu klik', 'Semakan dan coaching team'], image: '/tab-duplication-visual.jpg', alt: 'Paparan duplikasi tetapan kempen daripada satu akaun leader kepada 50 akaun downline' }
];

export const personas = [
	{ name: 'Leader MLM', body: 'Leader baru dan lama yang mahu automasi follow-up untuk seluruh team.', tags: ['Automasi recruitment', 'Training konsisten', 'Duplikasi team'], image: '/persona-mlm.jpg', alt: 'Seorang leader MLM membentangkan strategi kepada pasukannya di dalam bilik mesyuarat' },
	{ name: 'Leader Agensi Hartanah', body: 'Menguruskan team agent dan mahu proses follow-up client yang standard.', tags: ['Lead nurturing', 'Follow-up client', 'Tracking prestasi'], image: '/persona-hartanah.jpg', alt: 'Leader agensi hartanah memegang telefon di hadapan model pembangunan hartanah' },
	{ name: 'Leader Team Insurans', body: 'Mahu automasi follow-up client dan sistem training untuk agent bawahan.', tags: ['Follow-up polisi', 'Training agent', 'Retensi client'], image: '/persona-insurans.jpg', alt: 'Leader team insurans menyemak dokumen polisi di meja kerjanya' },
	{ name: 'Leader Pelaburan Emas', body: 'Menguruskan investor dan mahu automasi proses edukasi untuk setiap prospek.', tags: ['Edukasi investor', 'Update pasaran', 'Perkongsian ilmu'], image: '/persona-emas.jpg', alt: 'Leader pelaburan emas memeriksa jongkong emas di atas meja' }
];

export const inclusions = [
	{ icon: VideoCameraIcon, title: 'Akses kelas Zoom live', body: 'Bimbingan terus cara setup Chat AI dan closing automatik.' },
	{ icon: CoinsIcon, title: '1.5M AI tokens percuma', body: 'Bernilai RM150, dipindahkan terus ke akaun Wajom anda.' },
	{ icon: ChatCircleTextIcon, title: 'WhatsApp group kelas', body: 'Notifikasi Zoom dan perbincangan bimbingan berterusan.' },
	{ icon: HeadsetIcon, title: 'Bantuan 1-on-1', body: 'Sokongan persediaan akaun sebelum kelas bermula.' }
];

export const faqs = [
	{ q: 'Berapa lama masa diperlukan untuk setup Wajom?', a: 'Dalam 15 minit anda sudah boleh mula guna sistem automasi kami. Team support akan bantu anda step-by-step sampai semuanya berjalan sempurna.' },
	{ q: 'Adakah Wajom selamat digunakan dengan WhatsApp Business?', a: 'Ya. Wajom dibangunkan mengikut guidelines WhatsApp dan menggunakan WhatsApp Business API yang official. Ia telah digunakan oleh ribuan business owner tanpa masalah.' },
	{ q: 'Boleh saya customize message dan campaign ikut bisnes saya?', a: 'Boleh sepenuhnya. Anda kawal semua message, campaign flow dan branding: set tone of voice, letak logo company, dan bina campaign khusus untuk industri anda.' },
	{ q: 'Bagaimana jika saya tidak tech-savvy?', a: 'Wajom direka untuk sesiapa sahaja. Interface kami drag-and-drop, dan anda dapat training lengkap serta support 24/7 sepanjang perjalanan.' },
	{ q: 'Ada trial period atau money-back guarantee?', a: 'Ada. Kami tawarkan jaminan 30 hari wang dikembalikan. Jika anda tidak berpuas hati dengan hasilnya dalam 30 hari, kami refund 100% tanpa soalan.' },
	{ q: 'Berapa banyak prospek yang boleh saya handle?', a: 'Tiada had. Sistem kami scale bersama bisnes anda, dari 100 prospek hingga 100,000 prospek, dengan efisiensi yang sama.' }
];

export const promises = [
	{ icon: ShieldCheckIcon, text: 'Jaminan 30 hari wang dikembalikan' },
	{ icon: HandCoinsIcon, text: 'Tiada komitmen awal' },
	{ icon: HeadsetIcon, text: 'Sokongan 1-on-1' }
];
