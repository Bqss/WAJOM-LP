<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_API_BASE_URL } from '$env/static/public';
	import SEO from '$lib/components/SEO.svelte';

	// Form fields
	let fullName = $state('');
	let email = $state('');
	let phone = $state('');
	let businessType = $state('E-Commerce / Kedai Dalam Talian');
	let businessName = $state('');
	let reasonToJoin = $state('');

	// Account lookup state
	let hasAccount = $state<'yes' | 'no' | null>('no');
	let accountSearchQuery = $state('');
	let isSearchingAccount = $state(false);
	let accountSearchResult = $state<{
		is_exist: boolean;
		user: { id: string; name: string; email: string; phone: string; plan_id?: string } | null;
	} | null>(null);
	let accountSearchError = $state('');

	// Package & Coupon state
	let packageName = $state('Wajom Mastery — Kelas Chat AI');
	let amount = $state(30);
	let couponCode = $state('');
	let couponMsg = $state('');
	let couponSuccess = $state(false);

	// Submission state
	let isSubmitting = $state(false);
	let submitError = $state('');
	let showThankYouModal = $state(false);
	let transactionId = $state('');

	// Countdown timer
	let minutes = $state(14);
	let seconds = $state(59);

	onMount(() => {
		const interval = setInterval(() => {
			if (seconds > 0) {
				seconds--;
			} else if (minutes > 0) {
				minutes--;
				seconds = 59;
			}
		}, 1000);

		return () => clearInterval(interval);
	});

	function getApiBaseUrl(): string {
		if (PUBLIC_API_BASE_URL) {
			return PUBLIC_API_BASE_URL;
		}
		if (typeof window !== 'undefined') {
			const host = window.location.hostname;
			if (host === 'localhost' || host === '127.0.0.1') {
				return 'http://localhost:3000';
			}
		}
		return 'https://wajom.co';
	}

	async function searchAccount() {
		const query = accountSearchQuery.trim() || email.trim() || phone.trim();
		if (!query) {
			accountSearchError = 'Sila masukkan e-mel atau nombor telefon untuk semakan.';
			return;
		}

		accountSearchError = '';
		isSearchingAccount = true;
		accountSearchResult = null;

		try {
			const baseUrl = getApiBaseUrl();
			const res = await fetch(`${baseUrl}/api/users/check`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query, email: query, phone: query })
			});

			if (res.ok) {
				const data = await res.json();
				accountSearchResult = data;
				if (!data.is_exist) {
					accountSearchError = 'Akaun Wajom tidak dijumpai. Sila pastikan e-mel/telefon betul.';
				}
			} else {
				accountSearchError = 'Gagal membuat semakan akaun Wajom.';
			}
		} catch (err: any) {
			accountSearchError = 'Semakan akaun: ' + (err?.message || 'Server error');
		} finally {
			isSearchingAccount = false;
		}
	}

	function applyCoupon() {
		const code = couponCode.trim().toUpperCase();
		if (code === 'WAJOMVIP' || code === 'WAJOM30') {
			couponSuccess = true;
			couponMsg = '✓ Kod kupon disahkan! Diskaun khas pakej 1.5M AI Token diaktifkan.';
		} else if (code === '') {
			couponSuccess = false;
			couponMsg = 'Sila masukkan kod kupon.';
		} else {
			couponSuccess = false;
			couponMsg = 'Kod kupon tidak sah atau telah tamat tempoh.';
		}
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		submitError = '';

		if (!fullName.trim() || !email.trim() || !phone.trim()) {
			submitError = 'Sila lengkapkan maklumat Nama, E-mel, dan Nombor WhatsApp.';
			return;
		}

		isSubmitting = true;

		try {
			const baseUrl = getApiBaseUrl();
			const payload = {
				full_name: fullName.trim(),
				email: email.trim().toLowerCase(),
				phone: phone.trim(),
				business_type: businessType,
				business_name: businessName.trim(),
				reason_to_join: reasonToJoin.trim(),
				has_account: hasAccount === 'yes',
				existing_user_id: accountSearchResult?.user?.id || null,
				existing_user_email: accountSearchResult?.user?.email || null,
				package_name: packageName,
				amount: amount,
				coupon_code: couponCode.trim().toUpperCase()
			};

			const response = await fetch('/api/v1/class-register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload)
			});

			const result = await response.json();

			if (response.ok && result.success) {
				if (result.data?.payment_url) {
					window.location.href = result.data.payment_url;
					return;
				} else if (result.data?.transaction_id) {
					transactionId = result.data.transaction_id;
					showThankYouModal = true;
					window.scrollTo({ top: 0, behavior: 'smooth' });
					return;
				}
			}

			submitError = result.message || 'Pendaftaran gagal. Sila cuba sebentar lagi.';
		} catch (err: any) {
			console.error('Registration Error:', err);
			submitError = 'Ralat sambungan ke pelayan pendaftaran: ' + (err?.message || 'Network error');
		} finally {
			isSubmitting = false;
		}
	}

	const registerJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Course',
		name: 'Wajom Mastery — Kelas Chat AI & Automasi Jualan',
		description: 'Bengkel praktikal automasi WhatsApp & Chat AI untuk usahawan dan leader perniagaan.',
		provider: {
			'@type': 'Organization',
			name: 'Wajom!',
			url: 'https://wajom.co'
		},
		offers: {
			'@type': 'Offer',
			price: '30',
			priceCurrency: 'MYR',
			url: 'https://wajom.co/register'
		}
	};
</script>

<SEO
	title="Borang Pendaftaran Rasmi — Wajom Mastery (RM30)"
	description="Halaman borang pendaftaran rasmi Kelas Chat AI & Automasi Wajom Mastery RM30. Sertai Zoom Live, rakaman penuh & nikmati FREE 1.5M AI Token."
	keywords="daftar wajom, wajom mastery, kelas ai whatsapp, pendaftaran wajom, bengkel whatsapp automation, zoom live wajom, ai token free, borang wajom"
	canonical="https://wajom.co/register"
	ogImage="https://wajom.co/logo.png"
	ogImageAlt="Wajom — Platform Automasi WhatsApp"
	ogType="website"
	jsonLd={registerJsonLd}
/>

<!-- Countdown Topbar Alert -->
<div style="background: rgba(212, 175, 55, 0.12); border-bottom: 1px solid rgba(212, 175, 55, 0.3); padding: 10px 0; text-align: center; font-size: 0.85rem; color: var(--gold-2);">
	<div class="wrap" style="display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap;">
		<span>🔥 <strong>TAWARAN KHAS HARI INI:</strong> Pakej Kelas Chat AI RM30 + FREE 1.5M AI Token tamat dalam</span>
		<span style="font-family: var(--mono); font-weight: 700; background: var(--bg-2); border: 1px solid var(--gold); padding: 2px 8px; border-radius: 6px; color: var(--gold-2);">
			{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
		</span>
	</div>
</div>

<main style="padding: 40px 0 80px;">
	<div class="wrap">
		<div style="text-align: center; margin-bottom: 36px;">
			<span class="badge-tag" style="background: rgba(55, 159, 118, 0.12); border-color: rgba(55, 159, 118, 0.25); color: var(--emerald-2);">Pendaftaran Rasmi Kursus</span>
			<h1 style="font-family: var(--serif); font-size: clamp(1.8rem, 4vw, 2.6rem); margin: 8px 0 10px; font-weight: 700;">
				Pendaftaran Wajom Mastery — Kelas Chat AI
			</h1>
			<p style="color: var(--ink-2); font-size: 0.98rem; max-width: 58ch; margin: 0 auto;">
				Lengkapkan maklumat borang pendaftaran di bawah untuk pengesahan slot Zoom Live &amp; pengkreditan 1.5M AI Token.
			</p>
		</div>

		<div style="display: grid; grid-template-columns: 1fr 400px; gap: 32px; align-items: start;">
			<!-- Left Column: Form Card -->
			<div style="background: var(--bg-2); border: 1px solid var(--rule-2); border-radius: 24px; padding: clamp(24px, 4vw, 36px); box-shadow: 0 16px 40px rgba(0,0,0,0.3);">
				
				{#if submitError}
					<div style="background: rgba(194, 84, 80, 0.15); border: 1px solid var(--ruby); color: #f87171; padding: 14px 18px; border-radius: 12px; font-size: 0.9rem; margin-bottom: 24px; display: flex; align-items: center; gap: 10px;">
						<svg style="width: 20px; height: 20px; stroke: currentColor; fill: none;" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
						</svg>
						<span>{submitError}</span>
					</div>
				{/if}

				<form onsubmit={handleSubmit}>
					<!-- Step 1: Maklumat Peserta -->
					<div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px; font-family: var(--serif); font-size: 1.2rem; font-weight: 700; color: var(--ink);">
						<div style="width: 30px; height: 30px; border-radius: 50%; background: var(--emerald-dim); color: var(--emerald-2); display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 800;">1</div>
						<span>Maklumat Pendaftaran Peserta</span>
					</div>

					<!-- Nama Penuh -->
					<div style="margin-bottom: 20px;">
						<label for="fullName" style="display: block; font-size: 0.88rem; font-weight: 600; margin-bottom: 6px; color: var(--ink);">
							Nama Penuh Peserta <span style="color: var(--ruby);">*</span>
						</label>
						<input
							type="text"
							id="fullName"
							bind:value={fullName}
							placeholder="Contoh: Ahmad Razak Bin Ismail"
							required
							style="width: 100%; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 12px; padding: 14px 16px; font-family: var(--sans); font-size: 0.95rem; color: var(--ink); outline: none;"
						/>
					</div>

					<!-- Phone & Email Grid -->
					<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
						<div>
							<label for="email" style="display: block; font-size: 0.88rem; font-weight: 600; margin-bottom: 6px; color: var(--ink);">
								Alamat E-mel <span style="color: var(--ruby);">*</span>
							</label>
							<input
								type="email"
								id="email"
								bind:value={email}
								placeholder="nama@email.com"
								required
								style="width: 100%; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 12px; padding: 14px 16px; font-family: var(--sans); font-size: 0.95rem; color: var(--ink); outline: none;"
							/>
						</div>

						<div>
							<label for="phone" style="display: block; font-size: 0.88rem; font-weight: 600; margin-bottom: 6px; color: var(--ink);">
								Nombor WhatsApp / HP <span style="color: var(--ruby);">*</span>
							</label>
							<div style="display: flex; align-items: center; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 12px; overflow: hidden;">
								<div style="padding: 14px 14px; background: var(--bg-2); border-right: 1px solid var(--rule); font-family: var(--mono); font-size: 0.88rem; color: var(--ink-3);">+60</div>
								<input
									type="tel"
									id="phone"
									bind:value={phone}
									placeholder="12 345 6789"
									required
									style="flex: 1; background: transparent; border: none; padding: 14px 16px; font-family: var(--sans); font-size: 0.95rem; color: var(--ink); outline: none;"
								/>
							</div>
						</div>
					</div>

					<!-- Email Notice -->
					<div style="display: flex; gap: 12px; background: rgba(55, 159, 118, 0.08); border: 1px solid rgba(55, 159, 118, 0.2); border-radius: 12px; padding: 14px; margin-bottom: 24px; font-size: 0.82rem; color: var(--ink-2); line-height: 1.5;">
						<svg style="width: 20px; height: 20px; stroke: var(--emerald-2); fill: none; flex-shrink: 0; margin-top: 2px;" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
						</svg>
						<span><strong>Makluman E-mel:</strong> Sila pastikan alamat e-mel tepat. Pautan pengesahan Zoom Live, pautan WhatsApp Group, &amp; pengkreditan 1.5M Token akan dihantar ke e-mel ini.</span>
					</div>

					<!-- Tipe Bisnis & Nama Bisnes -->
					<div style="margin-bottom: 20px;">
						<label for="businessType" style="display: block; font-size: 0.88rem; font-weight: 600; margin-bottom: 6px; color: var(--ink);">
							Tipe Bisnis / Industri <span style="color: var(--ruby);">*</span>
						</label>
						<select
							id="businessType"
							bind:value={businessType}
							required
							style="width: 100%; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 12px; padding: 14px 16px; font-family: var(--sans); font-size: 0.95rem; color: var(--ink); outline: none; cursor: pointer;"
						>
							<option value="E-Commerce / Kedai Dalam Talian">E-Commerce / Kedai Dalam Talian</option>
							<option value="Network Marketing / MLM / Dropship">Network Marketing / MLM / Dropship</option>
							<option value="Unit Trust / Insurans / Hartanah">Unit Trust / Insurans / Hartanah / Perkhidmatan Kewangan</option>
							<option value="Kesihatan & Kecantikan">Kesihatan &amp; Kecantikan (Beauty &amp; Health)</option>
							<option value="Perkhidmatan / Agensi / Perundingan">Perkhidmatan / Agensi / Perundingan</option>
							<option value="Makanan & Minuman (F&B)">Makanan &amp; Minuman (F&amp;B / Katering)</option>
							<option value="Edukasi / Tutor / Jurulatih">Edukasi / Tutor / Jurulatih (Education &amp; Coaching)</option>
							<option value="Lain-lain Industri">Lain-lain Industri</option>
						</select>
					</div>

					<div style="margin-bottom: 20px;">
						<label for="businessName" style="display: block; font-size: 0.88rem; font-weight: 600; margin-bottom: 6px; color: var(--ink);">
							Nama Bisnes / Jenama <span style="font-weight: 400; color: var(--ink-3);">(Opsional)</span>
						</label>
						<input
							type="text"
							id="businessName"
							bind:value={businessName}
							placeholder="Contoh: Razak Trading / E-commerce Fashion"
							style="width: 100%; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 12px; padding: 14px 16px; font-family: var(--sans); font-size: 0.95rem; color: var(--ink); outline: none;"
						/>
					</div>

					<!-- Reason to join -->
					<div style="margin-bottom: 28px;">
						<label for="reasonToJoin" style="display: block; font-size: 0.88rem; font-weight: 600; margin-bottom: 6px; color: var(--ink);">
							Harapan / Sasaran Anda Menyertai Kursus Ini <span style="font-weight: 400; color: var(--ink-3);">(Opsional)</span>
						</label>
						<textarea
							id="reasonToJoin"
							bind:value={reasonToJoin}
							rows={3}
							placeholder="Contoh: Mahu automasikan follow-up prospek & latih AI jawab bantahan harga"
							style="width: 100%; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 12px; padding: 14px 16px; font-family: var(--sans); font-size: 0.92rem; color: var(--ink); outline: none; resize: vertical;"
						></textarea>
					</div>

					<!-- Account Check Selection -->
					<div style="background: var(--bg-3); border: 1px solid var(--rule); border-radius: 16px; padding: 20px; margin-bottom: 28px;">
						<label style="display: block; font-size: 0.88rem; font-weight: 700; margin-bottom: 10px; color: var(--ink);">
							Adakah Anda Sudah Mempunyai Akaun Wajom?
						</label>

						<div style="display: flex; gap: 20px; margin-bottom: 12px;">
							<label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: var(--ink-2); cursor: pointer;">
								<input type="radio" name="hasAccount" value="no" bind:group={hasAccount} style="accent-color: var(--emerald);" />
								<span>Belum (Akaun baharu akan dicipta)</span>
							</label>
							<label style="display: flex; align-items: center; gap: 8px; font-size: 0.9rem; color: var(--ink-2); cursor: pointer;">
								<input type="radio" name="hasAccount" value="yes" bind:group={hasAccount} style="accent-color: var(--emerald);" />
								<span>Sudah Ada Akaun</span>
							</label>
						</div>

						{#if hasAccount === 'yes'}
							<div style="margin-top: 14px; padding-top: 14px; border-top: 1px dashed var(--rule-2);">
								<span style="display: block; font-size: 0.82rem; color: var(--ink-3); margin-bottom: 6px;">
									Masukkan e-mel atau nombor telefon akaun Wajom sedia ada:
								</span>
								<div style="display: flex; gap: 8px;">
									<input
										type="text"
										bind:value={accountSearchQuery}
										placeholder="E-mel atau No. Telefon Wajom"
										style="flex: 1; background: var(--bg-2); border: 1px solid var(--rule); border-radius: 8px; padding: 10px 12px; font-size: 0.88rem; color: var(--ink); outline: none;"
									/>
									<button
										type="button"
										onclick={searchAccount}
										disabled={isSearchingAccount}
										style="background: var(--emerald-dim); border: 1px solid var(--emerald); color: var(--emerald-2); font-weight: 600; padding: 10px 16px; border-radius: 8px; cursor: pointer; font-size: 0.82rem;"
									>
										{isSearchingAccount ? 'Semak...' : 'SEMAK'}
									</button>
								</div>

								{#if accountSearchResult?.is_exist && accountSearchResult.user}
									<div style="margin-top: 10px; font-size: 0.8rem; color: var(--emerald-2);">
										✓ Akaun dijumpai: {accountSearchResult.user.name} ({accountSearchResult.user.email})
									</div>
								{/if}

								{#if accountSearchError}
									<div style="margin-top: 10px; font-size: 0.8rem; color: var(--ruby);">
										{accountSearchError}
									</div>
								{/if}
							</div>
						{/if}
					</div>

					<!-- Step 2: Pembayaran Gateway -->
					<div style="display: flex; align-items: center; gap: 12px; margin-top: 32px; margin-bottom: 16px; font-family: var(--serif); font-size: 1.2rem; font-weight: 700; color: var(--ink);">
						<div style="width: 30px; height: 30px; border-radius: 50%; background: var(--emerald-dim); color: var(--emerald-2); display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 800;">2</div>
						<span>Kaedah Pembayaran Selamat</span>
					</div>

					<div style="background: var(--bg-3); border: 2px solid var(--emerald); border-radius: 14px; padding: 16px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
						<div style="display: flex; align-items: center; gap: 12px;">
							<div style="width: 18px; height: 18px; border-radius: 50%; border: 6px solid var(--emerald); background: var(--bg);"></div>
							<div>
								<div style="font-weight: 700; font-size: 0.94rem; color: var(--ink);">CHIP Payment Gateway (FPX / Card)</div>
								<div style="font-size: 0.78rem; color: var(--ink-3);">Maybank2u, CIMB Clicks, RHB, Bank Islam, Debit/Credit Card</div>
							</div>
						</div>
						<div style="font-family: var(--mono); font-size: 0.74rem; background: var(--emerald-dim); color: var(--emerald-2); padding: 4px 10px; border-radius: 6px; font-weight: 700;">CHIP RM30</div>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						style="width: 100%; background: linear-gradient(135deg, var(--gold-2), var(--gold)); color: var(--cta-ink); font-family: var(--sans); font-weight: 700; font-size: 1.05rem; padding: 16px; border-radius: 999px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: transform 0.2s ease, opacity 0.2s ease; box-shadow: 0 8px 20px rgba(212, 175, 55, 0.25);"
					>
						{#if isSubmitting}
							<span>MEMPROSES PENDAFTARAN...</span>
						{:else}
							<span>BAYAR RM 30.00 SEKARANG</span>
							<span>→</span>
						{/if}
					</button>
				</form>
			</div>

			<!-- Right Column: Summary Card -->
			<div style="background: var(--bg-2); border: 1px solid var(--rule-2); border-radius: 24px; padding: 28px; position: sticky; top: 80px;">
				<h3 style="font-family: var(--serif); font-size: 1.3rem; margin: 0 0 4px; color: var(--ink);">Ringkasan Pesanan</h3>
				<p style="font-size: 0.82rem; color: var(--ink-3); margin: 0 0 20px;">Pendaftaran Pakej Khas Masterclass Chat AI</p>

				<div style="display: flex; gap: 14px; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 14px; padding: 14px; margin-bottom: 20px;">
					<div style="width: 44px; height: 44px; border-radius: 10px; background: rgba(55, 159, 118, 0.15); color: var(--emerald-2); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.05rem;">AI</div>
					<div>
						<div style="font-weight: 700; font-size: 0.95rem; color: var(--ink); margin-bottom: 2px;">Wajom Mastery — Kelas Chat AI</div>
						<div style="font-family: var(--mono); font-size: 0.74rem; color: var(--emerald-2);">+ FREE 1.5M Wajom AI Tokens</div>
					</div>
				</div>

				<ul style="list-style: none; padding: 0; margin: 0 0 20px; display: grid; gap: 12px; font-size: 0.85rem; color: var(--ink-2);">
					<li style="display: flex; gap: 10px;">
						<span style="color: var(--emerald-2); font-weight: 700;">✓</span>
						<span><strong>Akses Kelas Zoom Live</strong> (Praktikal Chat AI, Penutupan Jualan Suara &amp; Duplikasi Pasukan)</span>
					</li>
					<li style="display: flex; gap: 10px;">
						<span style="color: var(--emerald-2); font-weight: 700;">✓</span>
						<span><strong>FREE 1.5M AI Tokens</strong> (Dipindahkan terus ke akaun Wajom anda)</span>
					</li>
					<li style="display: flex; gap: 10px;">
						<span style="color: var(--emerald-2); font-weight: 700;">✓</span>
						<span><strong>Kemasukan WhatsApp Group Kelas</strong> (Notifikasi Zoom &amp; Bimbingan Setup Penuh)</span>
					</li>
					<li style="display: flex; gap: 10px;">
						<span style="color: var(--emerald-2); font-weight: 700;">✓</span>
						<span><strong>Sokongan Customer Service 1-on-1</strong> persediaan akaun sebelum kelas bermula</span>
					</li>
				</ul>

				<!-- Coupon Input -->
				<div style="display: flex; gap: 8px; margin-bottom: 12px;">
					<input
						type="text"
						bind:value={couponCode}
						placeholder="KOD KUPON (E.G. WAJOMVIP)"
						style="flex: 1; background: var(--bg-3); border: 1px solid var(--rule); border-radius: 8px; padding: 10px 12px; font-family: var(--mono); font-size: 0.82rem; color: var(--ink); text-transform: uppercase; outline: none;"
					/>
					<button
						type="button"
						onclick={applyCoupon}
						style="background: var(--bg-3); border: 1px solid var(--rule-2); border-radius: 8px; padding: 10px 16px; font-family: var(--mono); font-size: 0.78rem; color: var(--ink-2); cursor: pointer;"
					>GUNA</button>
				</div>
				{#if couponMsg}
					<div style="font-size: 0.76rem; margin-bottom: 16px; color: {couponSuccess ? 'var(--emerald-2)' : 'var(--ruby)'};">
						{couponMsg}
					</div>
				{/if}

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
			<div style="width: 64px; height: 64px; border-radius: 50%; background: var(--emerald-dim); color: var(--emerald-2); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
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
				href="https://chat.whatsapp.com/CBCvqmr3EicJCPZ1CFvVxd"
					target="_blank"
					style="background: #25D366; color: #ffffff; font-weight: 700; padding: 14px 24px; border-radius: 999px; font-size: 0.95rem; display: flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.25);"
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
