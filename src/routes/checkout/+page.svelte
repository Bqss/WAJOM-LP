<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';
	import SEO from '$lib/components/SEO.svelte';

	// Wizard Stepper State
	let currentStep = $state(1);

	// Step 1 Form Fields
	let fullName = $state('');
	let phone = $state('');
	let email = $state('');
	let businessType = $state('');
	let customBusinessType = $state('');
	let reasonToJoin = $state('');

	function formatPhoneNumber(val: string): string {
		let cleaned = val.replace(/\D/g, '');
		if (cleaned.startsWith('60')) {
			cleaned = cleaned.substring(2);
		}
		return cleaned.replace(/^0+/, '');
	}

	function handlePhoneInput(e: Event) {
		const target = e.target as HTMLInputElement;
		const formatted = formatPhoneNumber(target.value);
		phone = formatted;
		target.value = formatted;
	}

	function handlePhonePaste(e: ClipboardEvent) {
		e.preventDefault();
		const pastedText = e.clipboardData?.getData('text') || '';
		const formatted = formatPhoneNumber(pastedText);
		phone = formatted;
		if (e.target) {
			(e.target as HTMLInputElement).value = formatted;
		}
	}

	// Step 2 Account Search State
	let hasAccount = $state<'yes' | 'no' | null>(null);
	let searchQuery = $state('');
	let searchResults = $state<Array<{ id: string; name: string; email: string; phone: string; plan_name?: string }>>([]);
	let isSearching = $state(false);
	let searchError = $state('');
	let selectedAccount = $state<{ id: string; name: string; email: string; phone: string } | null>(null);

	// Validation state when user selects 'Belum, Pengguna Baharu'
	let isCheckingNewAccount = $state(false);
	let newAccountExistUser = $state<{ id: string; name: string; email: string; phone: string } | null>(null);

	// Order & Coupon State
	let couponCode = $state('');
	let couponMsg = $state('');
	let couponSuccess = $state(false);
	let discountAmount = $state(0);
	let isSubmitting = $state(false);
	let showThankYouModal = $state(false);
	let transactionId = $state('');
	let checkoutError = $state('');

	// Real-time Dynamic Countdown Timer (Target: Ahad, 11 Oktober 2026, 9:00 AM MYT)
	const TARGET_DATE = new Date('2026-10-11T09:00:00+08:00').getTime();

	let days = $state(0);
	let hours = $state(0);
	let minutes = $state(0);
	let seconds = $state(0);

	function updateCountdown() {
		const now = new Date().getTime();
		const diff = TARGET_DATE - now;

		if (diff <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
			return;
		}

		days = Math.floor(diff / (1000 * 60 * 60 * 24));
		hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((diff % (1000 * 60)) / 1000);
	}

	onMount(() => {
		updateCountdown();
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	});

	function getApiBaseUrl(): string {
		if (PUBLIC_API_BASE_URL) {
			return PUBLIC_API_BASE_URL;
		}
		if (typeof window !== 'undefined') {
			const host = window.location.hostname;
			if (host === 'localhost' || host === '127.0.0.1') {
				return 'http://localhost:6544';
			}
		}
		return 'https://portal.wajom.co';
	}

	async function checkNewUserAccount() {
		const targetEmail = email.trim().toLowerCase();
		const targetPhone = phone.trim();

		if (!targetEmail && !targetPhone) return;

		isCheckingNewAccount = true;
		newAccountExistUser = null;

		try {
			const baseUrl = getApiBaseUrl();
			const res = await fetch(`${baseUrl}/api/v1/users/check`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: targetEmail, phone: targetPhone, query: targetEmail || targetPhone })
			});

			if (res.ok) {
				const data = await res.json();
				if (data.is_exist && data.user) {
					newAccountExistUser = data.user;
				}
			}
		} catch (e) {
			console.error('Error checking user existence:', e);
		} finally {
			isCheckingNewAccount = false;
		}
	}

	// Step 1 Validation & Navigation
	function goToStep2(e: Event) {
		e.preventDefault();
		if (!fullName.trim() || !phone.trim() || !email.trim()) return;
		currentStep = 2;
		window.scrollTo({ top: 120, behavior: 'smooth' });

		// Perform automatic account existence check for Step 1 credentials
		checkNewUserAccount();
	}

	function goToStep1() {
		currentStep = 1;
		window.scrollTo({ top: 120, behavior: 'smooth' });
	}

	// Live User Search API (Integrated with wajom backend /api/v1/users/search)
	let searchDebounceTimeout: ReturnType<typeof setTimeout> | null = null;

	function handleSearchInput() {
		if (searchDebounceTimeout) {
			clearTimeout(searchDebounceTimeout);
		}
		searchDebounceTimeout = setTimeout(() => {
			searchUserAccount();
		}, 300);
	}

	async function searchUserAccount() {
		const query = searchQuery.trim() || email.trim() || phone.trim();
		if (!query) {
			searchResults = [];
			searchError = '';
			return;
		}

		if (!searchQuery.trim()) {
			searchQuery = query;
		}

		isSearching = true;
		searchError = '';
		searchResults = [];

		try {
			const response = await fetch('/api/v1/users/search', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ q: query, query, email: query, phone: query })
			});

			if (response.ok) {
				const resData = await response.json();
				if (resData.success && Array.isArray(resData.data) && resData.data.length > 0) {
					searchResults = resData.data;
				} else if (resData.is_exist && resData.user) {
					searchResults = [resData.user];
				} else {
					searchError = 'Akaun Wajom tidak dijumpai. Sila pastikan e-mel atau nombor telefon betul.';
				}
			} else {
				searchError = 'Gagal membuat semakan akaun. Sila cuba sebentar lagi.';
			}
		} catch (err) {
			searchError = 'Ralat rangkaian semasa carian akaun.';
		} finally {
			isSearching = false;
		}
	}

	function selectUserAccount(user: { id: string; name: string; email: string; phone: string }) {
		selectedAccount = user;
		searchError = '';
	}

	function applyCoupon() {
		const code = couponCode.trim().toUpperCase();
		if (code === 'WAJOMVIP' || code === 'WAJOM30') {
			couponSuccess = true;
			discountAmount = 0;
			couponMsg = 'Kod kupon disahkan! Pakej khas 1.5M AI Token diaktifkan.';
		} else if (code === '') {
			couponSuccess = false;
			couponMsg = 'Sila masukkan kod kupon.';
		} else {
			couponSuccess = false;
			couponMsg = 'Kod kupon tidak sah atau telah tamat tempoh.';
		}
	}

	// Final Checkout Handler (Integrated with wajom backend /api/v1/class-register)
	async function handleCheckout(e: Event) {
		e.preventDefault();
		if (!fullName.trim() || !phone.trim() || !email.trim()) {
			goToStep1();
			return;
		}

		if (hasAccount === 'yes' && !selectedAccount) {
			searchError = 'Sila cari & pilih akaun Wajom anda terlebih dahulu.';
			return;
		}

		// "Pengguna Baharu" dipilih tapi e-mel/telefon sudah ada akaun Wajom.
		// Tolak submit — user mesti guna akaun sedia ada (tombol "Gunakan Akaun Ini")
		// supaya backend tidak masuk cabang create-new-user dan kena UNIQUE constraint.
		if (hasAccount === 'no' && newAccountExistUser) {
			checkoutError = 'E-mel/telefon ini sudah berdaftar. Sila klik "Gunakan Akaun Ini & Top-Up 1.5M Token" di atas untuk mengelakkan akaun pendua.';
			return;
		}

		isSubmitting = true;
		checkoutError = '';

		const finalBusinessType = businessType === 'Lain-lain' ? (customBusinessType.trim() || 'Lain-lain') : businessType.trim();

		const payload = {
			full_name: fullName.trim(),
			email: email.trim().toLowerCase(),
			phone: phone.trim(),
			business_type: finalBusinessType,
			reason_to_join: reasonToJoin.trim(),
			has_account: hasAccount === 'yes' || !!newAccountExistUser,
			existing_user_id: selectedAccount?.id || newAccountExistUser?.id || null,
			existing_user_email: selectedAccount?.email || newAccountExistUser?.email || null,
			course_slug: 'wajom-mastery-chat-ai-3',
			package_name: 'Wajom Mastery — Kelas Chat AI (Course 3)',
			amount: 30 - discountAmount,
			coupon_code: couponCode.trim().toUpperCase()
		};

		try {
			const res = await fetch('/api/v1/class-register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload)
			});

			const resData = await res.json();

			if (res.ok && resData.success) {
				if (resData.data?.payment_url) {
					window.location.href = resData.data.payment_url;
					return;
				} else if (resData.data?.transaction_id) {
					transactionId = resData.data.transaction_id;
					showThankYouModal = true;
					window.scrollTo({ top: 0, behavior: 'smooth' });
					return;
				}
			}

			checkoutError = resData.message || 'Pendaftaran gagal. Sila cuba sebentar lagi.';
		} catch (err: any) {
			checkoutError = 'Ralat sambungan ke pelayan pendaftaran: ' + (err?.message || 'Network error');
		} finally {
			isSubmitting = false;
		}
	}

	const checkoutJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'CheckoutPage',
		name: 'Checkout Langganan Wajom!',
		url: 'https://wajom.co/checkout',
		description: 'Halaman transaksi dan pendaftaran selamat pelan Wajom WhatsApp Automation.'
	};
</script>

<SEO
	title="Checkout — Wajom Mastery Kelas Chat AI & Automasi"
	description="Lengkapkan pendaftaran rasmi Kelas Chat AI Wajom Mastery RM30 secara selamat. Akses Zoom Live & FREE 1.5M AI Token."
	keywords="checkout wajom, pembayaran wajom, pendaftaran selamat, langgan wajom"
	canonical="https://wajom.co/checkout"
	ogImage="https://wajom.co/logo.png"
	ogImageAlt="Halaman Checkout Wajom"
	ogType="website"
	jsonLd={checkoutJsonLd}
/>

<!-- Countdown Topbar Alert -->
<div style="background: rgba(212, 175, 55, 0.12); border-bottom: 1px solid rgba(212, 175, 55, 0.3); padding: 10px 0; text-align: center; font-size: 0.85rem; color: var(--gold-2);">
	<div class="wrap" style="display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap;">
		<span><strong>TAWARAN KHAS:</strong> Pakej Kelas Chat AI RM30 + FREE 1.5M AI Token tamat dalam:</span>
		<span style="font-family: var(--mono); font-weight: 700; background: var(--bg-2); border: 1px solid var(--gold); padding: 3px 10px; border-radius: 6px; color: var(--gold-2); margin-left: 4px;">
			{days} Hari {String(hours).padStart(2, '0')} Jam {String(minutes).padStart(2, '0')} Minit {String(seconds).padStart(2, '0')} Saat
		</span>
	</div>
</div>

<main style="padding: 40px 0 80px;">
	<div class="wrap">
		<div style="text-align: center; margin-bottom: 32px;">
			<span class="badge-tag" style="background: rgba(55, 159, 118, 0.12); border-color: rgba(55, 159, 118, 0.25); color: var(--emerald-2);">Pendaftaran Rasmi</span>
			<h1 style="font-family: var(--serif); font-size: clamp(1.8rem, 4vw, 2.6rem); margin: 8px 0 10px; font-weight: 700;">
				Pendaftaran Wajom Mastery — Kelas Chat AI
			</h1>
			<p style="color: var(--ink-2); font-size: 0.98rem; max-width: 54ch; margin: 0 auto;">
				Lengkapkan pendaftaran 2-langkah di bawah untuk pengesahan slot Zoom Live &amp; pengkreditan 1.5M AI Token.
			</p>

			<!-- 2-Step Stepper Progress Header -->
			<div class="stepper-header-bar">
				<div class="step-pill {currentStep === 1 ? 'active' : 'completed'}" onclick={goToStep1} role="button" tabindex="0">
					<span class="s-num">1</span>
					<span class="s-txt">Maklumat Peserta</span>
				</div>
				<div class="step-connector {currentStep === 2 ? 'active' : ''}"></div>
				<div class="step-pill {currentStep === 2 ? 'active' : ''}">
					<span class="s-num">2</span>
					<span class="s-txt">Akaun &amp; Token</span>
				</div>
			</div>
		</div>

		<div style="display: grid; grid-template-columns: 1fr 400px; gap: 28px; align-items: start;">
			<!-- Left Form Wizard Card -->
			<div style="background: var(--bg-2); border: 1px solid var(--rule-2); border-radius: 20px; padding: clamp(20px, 4vw, 32px);">
				
				<!-- STEP 1: Maklumat Peserta -->
				{#if currentStep === 1}
					<form onsubmit={goToStep2}>
						<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 24px; font-family: var(--serif); font-size: 1.15rem; font-weight: 600; color: var(--ink);">
							<div style="width: 28px; height: 28px; border-radius: 50%; background: var(--emerald-dim); color: var(--emerald-2); display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 700;">1</div>
							<span>Maklumat Pendaftaran Peserta</span>
						</div>

						<div style="margin-bottom: 20px;">
							<label for="fullName" style="display: block; font-size: 0.86rem; font-weight: 600; margin-bottom: 6px; color: var(--ink);">Nama Penuh <span style="color: var(--ruby);">*</span></label>
							<input
								type="text"
								id="fullName"
								bind:value={fullName}
								placeholder="Contoh: Ahmad Razak Bin Ismail"
								required
								style="width: 100%; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 10px; padding: 12px 14px; font-family: var(--sans); font-size: 0.92rem; color: var(--ink); outline: none;"
							/>
						</div>

						<div style="margin-bottom: 20px;">
							<label for="phone" style="display: block; font-size: 0.86rem; font-weight: 600; margin-bottom: 6px; color: var(--ink);">Nombor WhatsApp / Telefon <span style="color: var(--ruby);">*</span></label>
							<div style="display: flex; align-items: center; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 10px; overflow: hidden;">
								<div style="padding: 12px 14px; background: var(--bg-2); border-right: 1px solid var(--rule); font-family: var(--mono); font-size: 0.88rem; color: var(--ink-3);">+60</div>
								<input
									type="tel"
									id="phone"
									bind:value={phone}
									oninput={handlePhoneInput}
									onpaste={handlePhonePaste}
									placeholder="12 345 6789"
									required
									style="flex: 1; background: transparent; border: none; padding: 12px 14px; font-family: var(--sans); font-size: 0.92rem; color: var(--ink); outline: none;"
								/>
							</div>
							<div style="display: flex; gap: 8px; background: rgba(212, 175, 55, 0.08); border: 1px solid rgba(212, 175, 55, 0.2); border-radius: 10px; padding: 10px 12px; margin-top: 8px; font-size: 0.8rem; color: var(--ink-2); line-height: 1.45;">
								<svg style="width: 16px; height: 16px; fill: var(--gold-2); flex-shrink: 0; margin-top: 2px;" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
								<span><strong>Penting:</strong> Nombor ini akan digunakan untuk menyertai <strong>WhatsApp Group Kelas</strong>. Pastikan nombor WhatsApp aktif &amp; boleh dihubungi.</span>
							</div>
						</div>

						<div style="margin-bottom: 20px;">
							<label for="email" style="display: block; font-size: 0.86rem; font-weight: 600; margin-bottom: 6px; color: var(--ink);">Alamat E-mel <span style="color: var(--ruby);">*</span></label>
							<input
								type="email"
								id="email"
								bind:value={email}
								placeholder="nama@email.com"
								required
								style="width: 100%; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 10px; padding: 12px 14px; font-family: var(--sans); font-size: 0.92rem; color: var(--ink); outline: none;"
							/>
							<div style="display: flex; gap: 10px; background: rgba(55, 159, 118, 0.08); border: 1px solid rgba(55, 159, 118, 0.2); border-radius: 10px; padding: 12px 14px; margin-top: 10px; font-size: 0.82rem; color: var(--ink-2); line-height: 1.45;">
								<svg style="width: 18px; height: 18px; fill: var(--emerald-2); flex-shrink: 0; margin-top: 2px;" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
								<span><strong>Makluman Penting:</strong> Sila pastikan e-mel anda betul &amp; aktif. Pautan masuk ke <strong>WhatsApp Group Kelas</strong> &amp; pengesahan pendaftaran akan dihantar ke e-mel ini serta-merta selepas pembayaran.</span>
							</div>
						</div>

						<div style="margin-bottom: 20px;">
							<label for="businessType" style="display: block; font-size: 0.86rem; font-weight: 600; margin-bottom: 6px; color: var(--ink);">Jenis Bisnes / Industri <span style="color: var(--ruby);">*</span></label>
							<select
								id="businessType"
								bind:value={businessType}
								required
								style="width: 100%; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 10px; padding: 12px 14px; font-family: var(--sans); font-size: 0.92rem; color: var(--ink); outline: none; cursor: pointer;"
							>
								<option value="" disabled selected>-- Sila Pilih Jenis Bisnes / Industri --</option>
								<option value="Network Marketing / MLM">Network Marketing / MLM</option>
								<option value="E-Commerce / Kedai Online">E-Commerce / Kedai Online</option>
								<option value="Ejen / Stokis / Dropship">Ejen / Stokis / Dropship</option>
								<option value="Hartanah / Real Estate">Hartanah / Real Estate</option>
								<option value="Insurans / Takaful / Unit Trust">Insurans / Takaful / Unit Trust</option>
								<option value="Makanan & Minuman (F&B / Katering)">Makanan &amp; Minuman (F&amp;B / Katering)</option>
								<option value="Edukasi / Tutor / Jurulatih (Education & Coaching)">Edukasi / Tutor / Jurulatih (Education &amp; Coaching)</option>
								<option value="Fesyen / Pakaian / Aksesori">Fesyen / Pakaian / Aksesori</option>
								<option value="Pelancongan / Travel / Umrah & Haji">Pelancongan / Travel / Umrah &amp; Haji</option>
								<option value="Automotif / Bengkel / Kenderaan">Automotif / Bengkel / Kenderaan</option>
								<option value="Pembinaan / Renovasi (Renovation & Interior)">Pembinaan / Renovasi (Renovation &amp; Interior)</option>
								<option value="Klinik / Kesihatan / Kecantikan">Klinik / Kesihatan / Kecantikan</option>
								<option value="Perkhidmatan / Servis Profesional">Perkhidmatan / Servis Profesional</option>
								<option value="Pemasaran Digital / Perunding / Agensi">Pemasaran Digital / Perunding / Agensi</option>
								<option value="Lain-lain">Lain-lain (Taip Manual)</option>
							</select>

							{#if businessType === 'Lain-lain'}
								<div style="margin-top: 10px;">
									<input
										type="text"
										bind:value={customBusinessType}
										placeholder="Taip jenis bisnes / industri anda secara manual..."
										required
										style="width: 100%; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 10px; padding: 12px 14px; font-family: var(--sans); font-size: 0.92rem; color: var(--ink); outline: none;"
									/>
								</div>
							{/if}
						</div>

						<div style="margin-bottom: 28px;">
							<label for="reasonToJoin" style="display: block; font-size: 0.86rem; font-weight: 600; margin-bottom: 6px; color: var(--ink);">Hasrat / Matlamat Utama Menyertai Masterclass Ini <span style="font-weight: 400; color: var(--ink-3);">(Opsional)</span></label>
							<textarea
								id="reasonToJoin"
								bind:value={reasonToJoin}
								rows="3"
								placeholder="Nyatakan matlamat utama anda (Contoh: Ingin bina automasi WhatsApp & auto follow-up jualan...)"
								style="width: 100%; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 10px; padding: 12px 14px; font-family: var(--sans); font-size: 0.9rem; color: var(--ink); outline: none; resize: vertical;"
							></textarea>
						</div>

						<button
							type="submit"
							style="width: 100%; background: var(--emerald); color: #ffffff; font-family: var(--sans); font-weight: 700; font-size: 1rem; padding: 15px; border-radius: 999px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: transform 0.2s ease;"
						>
							<span>Seterusnya: Semak Akaun Wajom (Step 2)</span>
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
						</button>
					</form>

				<!-- STEP 2: Akaun Wajom & Kredit Token -->
				{:else if currentStep === 2}
					<form onsubmit={handleCheckout}>
						<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 24px; font-family: var(--serif); font-size: 1.15rem; font-weight: 600; color: var(--ink);">
							<div style="width: 28px; height: 28px; border-radius: 50%; background: var(--emerald-dim); color: var(--emerald-2); display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 700;">2</div>
							<span>Semakan Akaun Wajom &amp; Penyerahan Token</span>
						</div>

						<div style="background: var(--bg-3); border: 1px solid var(--rule); border-radius: 16px; padding: 20px; margin-bottom: 24px;">
							<label style="display: block; font-size: 0.9rem; font-weight: 700; margin-bottom: 12px; color: var(--ink);">
								Adakah Anda Sudah Mempunyai Akaun Wajom?
							</label>

							<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
								<button
									type="button"
									class="account-choice-card {hasAccount === 'yes' ? 'selected' : ''}"
									onclick={() => { hasAccount = 'yes'; searchUserAccount(); }}
								>
									<span class="choice-radio">
										{#if hasAccount === 'yes'}
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width: 14px; height: 14px; color: var(--emerald-2);"><polyline points="20 6 9 17 4 12"/></svg>
										{/if}
									</span>
									<span class="choice-title">Ya, Saya Ada Akaun</span>
									<span class="choice-sub">Token dikreditkan ke akaun sedia ada</span>
								</button>

								<button
									type="button"
									class="account-choice-card {hasAccount === 'no' ? 'selected' : ''}"
									onclick={() => { hasAccount = 'no'; selectedAccount = null; checkNewUserAccount(); }}
								>
									<span class="choice-radio">
										{#if hasAccount === 'no'}
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width: 14px; height: 14px; color: var(--emerald-2);"><polyline points="20 6 9 17 4 12"/></svg>
										{/if}
									</span>
									<span class="choice-title">Belum, Pengguna Baharu</span>
									<span class="choice-sub">Akaun baharu dicipta automatik</span>
								</button>
							</div>
						</div>

						<!-- Option A: Ya, Ada Akaun (Pencarian Akaun Wajom) -->
						{#if hasAccount === 'yes'}
							<div style="background: var(--bg-3); border: 1px solid var(--rule-2); border-radius: 16px; padding: 20px; margin-bottom: 24px;">
								<label for="searchQuery" style="display: block; font-size: 0.86rem; font-weight: 600; margin-bottom: 8px; color: var(--ink);">
									Pencarian Akaun Wajom Anda:
								</label>
								<div style="position: relative; margin-bottom: 14px;">
									<input
										type="text"
										id="searchQuery"
										bind:value={searchQuery}
										oninput={handleSearchInput}
										placeholder="Taip e-mel, nombor telefon, atau nama untuk carian..."
										style="width: 100%; background: var(--bg-2); border: 1px solid var(--rule); border-radius: 10px; padding: 11px 40px 11px 14px; font-family: var(--sans); font-size: 0.88rem; color: var(--ink); outline: none;"
									/>
									<div style="position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: var(--ink-3); pointer-events: none; display: flex; align-items: center;">
										{#if isSearching}
											<svg style="animation: spin 1s linear infinite; width: 18px; height: 18px; color: var(--emerald-2);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
												<circle cx="12" cy="12" r="10" stroke-opacity="0.2" />
												<path d="M12 2 a 10 10 0 0 1 10 10" />
											</svg>
										{:else}
											<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px; color: var(--ink-3);">
												<circle cx="11" cy="11" r="8" />
												<line x1="21" y1="21" x2="16.65" y2="16.65" />
											</svg>
										{/if}
									</div>
								</div>

								{#if searchError}
									<div style="font-size: 0.8rem; color: var(--ruby); margin-bottom: 12px;">{searchError}</div>
								{/if}

								<!-- Search Results & Skeleton Loader -->
								{#if isSearching}
									<div style="display: grid; gap: 10px; margin-bottom: 14px;">
										<div class="skeleton-card">
											<div style="display: flex; justify-content: space-between; align-items: center;">
												<div style="display: grid; gap: 8px; flex: 1; margin-right: 16px;">
													<div class="skeleton-line" style="width: 50%; height: 16px;"></div>
													<div class="skeleton-line" style="width: 80%; height: 12px;"></div>
												</div>
												<div class="skeleton-line" style="width: 55px; height: 24px; border-radius: 6px;"></div>
											</div>
										</div>
										<div class="skeleton-card">
											<div style="display: flex; justify-content: space-between; align-items: center;">
												<div style="display: grid; gap: 8px; flex: 1; margin-right: 16px;">
													<div class="skeleton-line" style="width: 60%; height: 16px;"></div>
													<div class="skeleton-line" style="width: 70%; height: 12px;"></div>
												</div>
												<div class="skeleton-line" style="width: 55px; height: 24px; border-radius: 6px;"></div>
											</div>
										</div>
									</div>
								{:else if searchResults.length > 0}
									<div style="display: grid; gap: 10px; margin-bottom: 14px;">
										{#each searchResults as user}
											<div
												class="user-result-card {selectedAccount?.id === user.id ? 'active' : ''}"
												onclick={() => selectUserAccount(user)}
												role="button"
												tabindex="0"
											>
												<div style="display: flex; justify-content: space-between; align-items: center;">
													<div>
														<strong style="display: block; color: var(--ink); font-size: 0.92rem;">{user.name}</strong>
														<span style="font-size: 0.78rem; color: var(--ink-3);">{user.email} • {user.phone}</span>
													</div>
													<span class="select-badge">{selectedAccount?.id === user.id ? 'DIPILIH' : 'PILIH'}</span>
												</div>
											</div>
										{/each}
									</div>
								{/if}

								<!-- Prominent Bonus Token Alert for Selected Account -->
								{#if selectedAccount}
									<div style="background: rgba(212, 175, 55, 0.1); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 12px; padding: 14px; display: flex; gap: 12px; font-size: 0.85rem; color: var(--gold-2); line-height: 1.45;">
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px; color: var(--gold-2); flex-shrink: 0; margin-top: 2px;"><path d="M20 12v10H4V12"/><path d="M2 7h20v5H2z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
										<div>
											<strong>Notifikasi Penyerahan Token:</strong> Bonus <strong>1,500,000 Wajom AI Token</strong> akan terus dikreditkan ke akaun <u style="font-weight: 700;">{selectedAccount.email}</u> (ID: {selectedAccount.id}) sebaik sahaja pendaftaran disahkan!
										</div>
									</div>
								{/if}
							</div>

						<!-- Option B: Pengguna Baharu -->
						{:else if hasAccount === 'no'}
							{#if isCheckingNewAccount}
								<div style="background: var(--bg-3); border: 1px solid var(--rule); border-radius: 14px; padding: 16px; margin-bottom: 24px; font-size: 0.85rem; color: var(--ink-3); text-align: center;">
									🔍 Memeriksa kewujudan akaun untuk {email || 'peserta'}...
								</div>
							{:else if newAccountExistUser}
								<div style="background: rgba(194, 84, 80, 0.12); border: 1px solid rgba(194, 84, 80, 0.4); border-radius: 14px; padding: 18px; margin-bottom: 24px;">
									<div style="display: flex; gap: 12px; font-size: 0.88rem; color: var(--ruby); line-height: 1.5; margin-bottom: 12px;">
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 22px; height: 22px; color: var(--ruby); flex-shrink: 0; margin-top: 2px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
										<div>
											<strong>Akaun Dikesan Telah Wujud!</strong><br />
											E-mel/telefon <strong style="color: var(--ink);">{newAccountExistUser.email}</strong> telah pun mendaftar akaun Wajom atas nama <strong>{newAccountExistUser.name}</strong>.
										</div>
									</div>
									<button
										type="button"
										onclick={() => {
											hasAccount = 'yes';
											selectUserAccount(newAccountExistUser!);
										}}
										style="background: var(--gold); color: var(--cta-ink); font-weight: 700; border: none; padding: 12px 18px; border-radius: 10px; font-size: 0.88rem; cursor: pointer; width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;"
									>
										<span>Gunakan Akaun Ini &amp; Top-Up 1.5M Token</span>
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
									</button>
								</div>
							{:else}
								<div style="background: rgba(55, 159, 118, 0.08); border: 1px solid rgba(55, 159, 118, 0.25); border-radius: 14px; padding: 16px; display: flex; gap: 12px; margin-bottom: 24px; font-size: 0.86rem; color: var(--ink-2); line-height: 1.45;">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px; color: var(--emerald-2); flex-shrink: 0; margin-top: 2px;"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/></svg>
									<div>
										<strong>Penciptaan Akaun Baharu Automatik:</strong> Akaun Wajom baharu anda berserta <strong>1,500,000 Wajom AI Token</strong> akan dicipta secara automatik menggunakan e-mel <strong style="color: var(--emerald-2);">{email || 'anda'}</strong>. Akses login &amp; pautan WhatsApp Group akan dihantar melalui E-mel.
									</div>
								</div>
							{/if}
						{/if}

						{#if checkoutError}
							<div style="font-size: 0.84rem; color: var(--ruby); margin-bottom: 16px;">{checkoutError}</div>
						{/if}

						<!-- Action Buttons -->
						<div style="display: flex; gap: 12px;">
							<button
								type="button"
								onclick={goToStep1}
								style="background: var(--bg-3); border: 1px solid var(--rule-2); color: var(--ink-2); font-weight: 600; font-size: 0.9rem; padding: 14px 20px; border-radius: 999px; cursor: pointer;"
							>
								← Kembali
							</button>

							<button
								type="submit"
								disabled={isSubmitting || (hasAccount === 'yes' && !selectedAccount) || (hasAccount === 'no' && !!newAccountExistUser)}
								style="flex: 1; background: linear-gradient(135deg, var(--gold-2), var(--gold)); color: var(--cta-ink); font-family: var(--sans); font-weight: 700; font-size: 1.02rem; padding: 15px 24px; border-radius: 999px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: transform 0.2s ease, opacity 0.2s ease;"
							>
								{#if isSubmitting}
									<span>MEMPROSES PENDAFTARAN...</span>
								{:else}
									<span>BAYAR RM 30.00 SEKARANG</span>
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
								{/if}
							</button>
						</div>
					</form>
				{/if}
			</div>

			<!-- Right Summary Card -->
			<div style="background: var(--bg-2); border: 1px solid var(--rule-2); border-radius: 20px; padding: 24px;">
				<h3 style="font-family: var(--serif); font-size: 1.25rem; margin: 0 0 4px; color: var(--ink);">Ringkasan Pesanan</h3>
				<p style="font-size: 0.82rem; color: var(--ink-3); margin: 0 0 20px;">Pendaftaran Pakej Khas Masterclass Chat AI</p>

				<div style="display: flex; gap: 14px; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 12px; padding: 14px; margin-bottom: 20px;">
					<div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(55, 159, 118, 0.15); color: var(--emerald-2); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem;">AI</div>
					<div>
						<div style="font-weight: 700; font-size: 0.95rem; color: var(--ink); margin-bottom: 2px;">Wajom Mastery — Kelas Chat AI</div>
						<div style="font-family: var(--mono); font-size: 0.72rem; color: var(--emerald-2);">+ FREE 1.5M Wajom AI Tokens</div>
					</div>
				</div>

				<ul style="list-style: none; padding: 0; margin: 0 0 20px; display: grid; gap: 10px; font-size: 0.85rem; color: var(--ink-2);">
					<li style="display: flex; gap: 10px; align-items: flex-start;">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px; color: var(--emerald-2); flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>
						<span><strong>Akses Kelas Zoom Live</strong> (Praktikal Chat AI &amp; Duplikasi Pasukan)</span>
					</li>
					<li style="display: flex; gap: 10px; align-items: flex-start;">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px; color: var(--emerald-2); flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>
						<span><strong>FREE 1.5M AI Tokens</strong> (Dipindahkan ke akaun pilihan)</span>
					</li>
					<li style="display: flex; gap: 10px; align-items: flex-start;">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px; color: var(--emerald-2); flex-shrink: 0; margin-top: 2px;"><polyline points="20 6 9 17 4 12"/></svg>
						<span><strong>Kemasukan WhatsApp Group Kelas</strong> (Notifikasi Zoom &amp; Support)</span>
					</li>
				</ul>

				<!-- Price Table -->
				<div style="border-top: 1px solid var(--rule); padding-top: 16px; display: grid; gap: 10px; font-size: 0.88rem;">
					<div style="display: flex; justify-content: space-between; color: var(--ink-2);">
						<span>Yuran Asal Kelas</span>
						<span>RM 200.00</span>
					</div>
					<div style="display: flex; justify-content: space-between; color: var(--ink-2);">
						<span>Pakej 1.5M AI Token</span>
						<span>RM 30.00</span>
					</div>
					<div style="display: flex; justify-content: space-between; color: var(--emerald-2);">
						<span>Subsubsidi Khas Wajom</span>
						<span>-RM 200.00</span>
					</div>
					<div style="border-top: 1px dashed var(--rule-2); padding-top: 12px; margin-top: 6px; display: flex; justify-content: space-between; align-items: center; font-family: var(--serif); font-size: 1.1rem; font-weight: 700; color: var(--ink);">
						<span>JUMLAH NETT:</span>
						<span style="font-size: 1.6rem; color: var(--gold-2);">RM 30.00</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<!-- Thank You Modal -->
{#if showThankYouModal}
	<div class="modal-overlay open" style="z-index: 100;">
		<div style="background: var(--bg-2); border: 1px solid var(--rule-2); border-radius: 24px; padding: clamp(24px, 5vw, 40px); max-width: 600px; width: 100%; text-align: center; box-shadow: 0 24px 48px rgba(0,0,0,0.8);">
			<div style="width: 64px; height: 64px; border-radius: 50%; background: var(--emerald-dim); color: var(--emerald-2); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 2rem;">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 32px; height: 32px;"><polyline points="20 6 9 17 4 12"/></svg>
			</div>

			<h2 style="font-family: var(--serif); font-size: 1.8rem; margin: 0 0 10px; color: var(--ink);">Pembayaran Berjaya!</h2>
			<p style="font-size: 0.95rem; color: var(--ink-2); margin-bottom: 24px;">
				Tahniah <strong style="color: var(--emerald-2);">{fullName || 'Peserta'}</strong>! Pendaftaran anda ke Kelas Chat AI Wajom telah disahkan.
			</p>

			<div style="background: var(--bg-3); border: 1px solid var(--rule); border-radius: 14px; padding: 16px; text-align: left; margin-bottom: 20px; font-size: 0.85rem; display: grid; gap: 8px;">
				<div style="display: flex; justify-content: space-between;"><span style="color: var(--ink-3);">No. Transaksi CHIP:</span><span style="font-family: var(--mono); color: var(--ink);">{transactionId}</span></div>
				<div style="display: flex; justify-content: space-between;"><span style="color: var(--ink-3);">Produk:</span><span style="color: var(--ink);">Kelas Chat AI + 1.5M Token</span></div>
				<div style="display: flex; justify-content: space-between;"><span style="color: var(--ink-3);">E-mel Terdaftar:</span><span style="color: var(--ink);">{email}</span></div>
				{#if selectedAccount}
					<div style="display: flex; justify-content: space-between;"><span style="color: var(--ink-3);">Akaun Penerima Token:</span><span style="color: var(--emerald-2); font-weight: 700;">{selectedAccount.email}</span></div>
				{/if}
				<div style="display: flex; justify-content: space-between;"><span style="color: var(--ink-3);">Jumlah Dibayar:</span><span style="color: var(--emerald-2); font-weight: 700;">RM 30.00 (LULUS)</span></div>
			</div>

			<div style="background: var(--bg-3); border: 1px solid var(--rule-2); border-radius: 16px; padding: 18px 20px; margin-bottom: 24px; text-align: left; display: flex; align-items: flex-start; gap: 14px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
				<div style="width: 36px; height: 36px; border-radius: 10px; background: rgba(55, 159, 118, 0.15); border: 1px solid rgba(55, 159, 118, 0.3); color: var(--emerald-2); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 18px; height: 18px;"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
				</div>
				<div style="flex: 1;">
					<div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
						<span style="font-family: var(--mono); font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--emerald-2); background: rgba(55, 159, 118, 0.12); padding: 2px 8px; border-radius: 4px;">Makluman Kelas</span>
					</div>
					<p style="font-size: 0.88rem; color: var(--ink); margin: 0; line-height: 1.5;">
						Pautan <strong>Zoom</strong> bagi sesi kelas akan diberikan di dalam <strong>WhatsApp Group</strong>. Sila sertai group di bawah untuk maklumat lanjut.
					</p>
				</div>
			</div>

			<div style="display: flex; flex-direction: column; gap: 12px;">
				<a
					href="https://chat.whatsapp.com/HxxCRbYiAEYIjfXNBPkU9d?s=cl&p=a&mlu=4&ilr=4"
					target="_blank"
					style="background: #25D366; color: #ffffff; font-weight: 700; padding: 14px 24px; border-radius: 999px; font-size: 0.95rem; display: flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none;"
				>
					<span>SERTAI WHATSAPP GROUP KELAS SEKARANG</span>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 16px; height: 16px;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
				</a>
				<a
					href="https://wa.me/628567892460?text=Hai%20CS%20Wajom,%20saya%20dah%20bayar%20RM30%20untuk%20Kelas%20Chat%20AI"
					target="_blank"
					style="background: var(--bg-3); border: 1px solid var(--rule-2); color: var(--ink-2); font-weight: 500; padding: 12px 24px; border-radius: 999px; font-size: 0.88rem; text-decoration: none;"
				>
					Hubungi Support Customer Service
				</a>
			</div>
		</div>
	</div>
{/if}

<style>
	.stepper-header-bar {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 999px;
		padding: 6px 16px;
		margin-top: 20px;
	}

	.step-pill {
		display: flex;
		align-items: center;
		gap: 8px;
		font-family: var(--mono);
		font-size: 0.78rem;
		color: var(--ink-3);
		padding: 4px 10px;
		border-radius: 999px;
		cursor: pointer;
		user-select: none;
	}

	.step-pill.active {
		color: var(--emerald-2);
		background: var(--emerald-dim);
		font-weight: 700;
	}

	.step-pill.completed {
		color: var(--emerald-2);
	}

	.s-num {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: var(--bg-3);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.7rem;
	}

	.step-pill.active .s-num {
		background: var(--emerald);
		color: #ffffff;
	}

	.step-connector {
		width: 24px;
		height: 1px;
		background: var(--rule);
	}

	.step-connector.active {
		background: var(--emerald-2);
	}

	/* Account Choice Cards in Step 2 */
	.account-choice-card {
		background: var(--bg-2);
		border: 1px solid var(--rule);
		border-radius: 12px;
		padding: 14px;
		text-align: left;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 4px;
		transition: all 0.18s ease;
	}

	.account-choice-card:hover {
		border-color: var(--emerald-2);
	}

	.account-choice-card.selected {
		background: rgba(55, 159, 118, 0.08);
		border-color: var(--emerald);
	}

	.choice-radio {
		font-family: var(--mono);
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--emerald-2);
		height: 16px;
		display: flex;
		align-items: center;
	}

	.choice-title {
		font-family: var(--sans);
		font-size: 0.88rem;
		font-weight: 700;
		color: var(--ink);
	}

	.choice-sub {
		font-size: 0.75rem;
		color: var(--ink-3);
		line-height: 1.3;
	}

	.user-result-card {
		background: var(--bg-2);
		border: 1px solid var(--rule);
		border-radius: 10px;
		padding: 12px 14px;
		cursor: pointer;
		transition: all 0.18s ease;
	}

	.user-result-card:hover {
		border-color: var(--emerald-2);
	}

	.user-result-card.active {
		background: rgba(55, 159, 118, 0.1);
		border-color: var(--emerald-2);
	}

	.select-badge {
		font-family: var(--mono);
		font-size: 0.7rem;
		font-weight: 700;
		color: var(--emerald-2);
		background: var(--emerald-dim);
		padding: 3px 8px;
		border-radius: 6px;
	}

	/* Skeleton Loading Animation */
	.skeleton-card {
		background: var(--bg-2);
		border: 1px solid var(--rule);
		border-radius: 10px;
		padding: 12px 14px;
	}

	.skeleton-line {
		background: linear-gradient(
			90deg,
			var(--bg-3) 25%,
			rgba(255, 255, 255, 0.08) 50%,
			var(--bg-3) 75%
		);
		background-size: 200% 100%;
		border-radius: 4px;
		animation: skeleton-shimmer 1.5s infinite linear;
	}

	@keyframes skeleton-shimmer {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	@media (max-width: 992px) {
		main div.wrap > div {
			grid-template-columns: 1fr !important;
		}
	}
</style>
