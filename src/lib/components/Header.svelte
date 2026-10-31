<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import {
		initializeLocale,
		languages,
		locale,
		setLocale,
		t,
		type Locale
	} from '$lib/i18n.svelte';

	let theme = $state('dark');
	let mobileMenuOpen = $state(false);
	let mobileSubmenuOpen = $state(false);
	let langDropdownOpen = $state(false);

	let headerEl: HTMLElement | null = $state(null);
	let langDropdownEl: HTMLElement | null = $state(null);

	let currentLangObj = $derived(
		languages.find((l) => l.value === locale.current) ?? languages[0]
	);
	onMount(() => {
		initializeLocale();

		const saved = localStorage.getItem('wajom-theme');
		if (saved) {
			theme = saved;
			document.documentElement.setAttribute('data-theme', theme);
		} else {
			theme = document.documentElement.getAttribute('data-theme') || 'dark';
		}
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('wajom-theme', theme);
	}

	function toggleLangDropdown() {
		langDropdownOpen = !langDropdownOpen;
	}

	function selectLanguage(lang: Locale) {
		setLocale(lang);
		langDropdownOpen = false;
	}

	function scrollToSection(selector: string, e?: Event) {
		if (e) e.preventDefault();
		mobileMenuOpen = false;
		if ($page.url.pathname !== '/') {
			window.location.href = '/' + selector;
			return;
		}
		const el = document.querySelector(selector);
		if (el) {
			const top = el.getBoundingClientRect().top + window.pageYOffset - 60;
			window.scrollTo({ top, behavior: 'smooth' });
		}
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
		mobileSubmenuOpen = false;
	}

	function handleWindowClick(e: MouseEvent) {
		if (langDropdownOpen && langDropdownEl && !langDropdownEl.contains(e.target as Node)) {
			langDropdownOpen = false;
		}
		if (mobileMenuOpen && headerEl && !headerEl.contains(e.target as Node)) {
			closeMobileMenu();
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			if (langDropdownOpen) langDropdownOpen = false;
			if (mobileMenuOpen) closeMobileMenu();
		}
	}

	function handleFocusOut(e: FocusEvent) {
		if (langDropdownOpen && langDropdownEl && !langDropdownEl.contains(e.relatedTarget as Node)) {
			langDropdownOpen = false;
		}
		if (mobileMenuOpen && headerEl && !headerEl.contains(e.relatedTarget as Node)) {
			closeMobileMenu();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} onclick={handleWindowClick} />

<header bind:this={headerEl} class="topbar" onfocusout={handleFocusOut}>
	<div class="wrap">
		<a class="mark" href="/" onclick={closeMobileMenu} aria-label="Wajom">
			<img class="mark-logo" src="/logo.png" alt="Wajom Logo" />
			<span class="mark-text">Wajom!</span>
		</a>

		<!-- Desktop Navigation Links -->
		<nav class="nav-links" aria-label={t('nav.main')}>
			<div class="nav-dropdown">
				<button class="nav-dropdown-btn" type="button" aria-haspopup="true">
					<span>{t('nav.main')}</span>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M6 9l6 6 6-6" />
					</svg>
				</button>
				<div class="nav-dropdown-content">
					<a href="/#masalah" onclick={(e) => scrollToSection('#masalah', e)}>{t('nav.problem')}</a>
					<a href="/#solusi" onclick={(e) => scrollToSection('#solusi', e)}>{t('nav.solution')}</a>
					<a href="/#cara-kerja" onclick={(e) => scrollToSection('#cara-kerja', e)}>{t('nav.howItWorks')}</a>
					<a href="/#target-audience" onclick={(e) => scrollToSection('#target-audience', e)}>{t('nav.audience')}</a>
					<a href="/#masterclass" onclick={(e) => scrollToSection('#masterclass', e)}>{t('nav.masterclass')}</a>
					<a href="/#testimoni" onclick={(e) => scrollToSection('#testimoni', e)}>{t('nav.testimonials')}</a>
					<a href="/#faq" onclick={(e) => scrollToSection('#faq', e)}>{t('nav.faq')}</a>
				</div>
			</div>
			<a href="/about">{t('nav.about')}</a>
			<a href="/features">{t('nav.features')}</a>
			<a href="/pricing">{t('nav.pricing')}</a>
			<a href="/course">{t('nav.course')}</a>
			<a href="/tutorials">{t('nav.tutorials')}</a>
		</nav>

		<div class="top-actions">
			<div class="lang-custom-dropdown" bind:this={langDropdownEl}>
				<button
					type="button"
					class="lang-custom-trigger {langDropdownOpen ? 'active' : ''}"
					onclick={toggleLangDropdown}
					aria-expanded={langDropdownOpen}
					aria-haspopup="listbox"
					aria-label={t('language.label')}
				>
					<svg class="globe-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
						<circle cx="12" cy="12" r="9" />
						<path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
					</svg>
					<span class="lang-text">{currentLangObj.label}</span>
					<svg class="chevron-icon {langDropdownOpen ? 'rotate' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<polyline points="6 9 12 15 18 9"></polyline>
					</svg>
				</button>

				{#if langDropdownOpen}
					<div class="lang-custom-menu" role="listbox" aria-label={t('language.label')}>
						{#each languages as language}
							{@const isSelected = locale.current === language.value}
							<button
								type="button"
								role="option"
								aria-selected={isSelected}
								class="lang-custom-option {isSelected ? 'selected' : ''}"
								onclick={() => selectLanguage(language.value)}
							>
								<span class="flag-icon" aria-hidden="true">
									{#if language.value === 'ms'}
										🇲🇾
									{:else}
										🇬🇧
									{/if}
								</span>
								<span class="lang-name">{language.label}</span>
								{#if isSelected}
									<svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
								{/if}
							</button>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Theme Toggle Button -->
			<button
				class="theme-toggle"
				onclick={toggleTheme}
				aria-label="Toggle theme"
				type="button"
			>
				<svg
					class="moon"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.7"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
				</svg>
				<svg
					class="sun"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.7"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="12" cy="12" r="4.2" />
					<path
						d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"
					/>
				</svg>
			</button>

			<!-- Login CTA -->
			<a class="top-cta" href="https://portal.wajom.co/login" target="_blank" rel="noopener">{t('nav.login')}</a>

			<!-- Mobile Hamburger Toggle Button -->
			<button
				class="hamburger-btn"
				onclick={toggleMobileMenu}
				aria-label={mobileMenuOpen ? t('nav.mobileClose') : t('nav.mobileOpen')}
				aria-expanded={mobileMenuOpen}
				type="button"
			>
				{#if mobileMenuOpen}
					<!-- Close (X) Icon -->
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				{:else}
					<!-- Hamburger (3 lines) Icon -->
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<line x1="4" y1="6" x2="20" y2="6"></line>
						<line x1="4" y1="12" x2="20" y2="12"></line>
						<line x1="4" y1="18" x2="20" y2="18"></line>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Navigation Drawer -->
	{#if mobileMenuOpen}
		<div class="mobile-drawer-overlay" onclick={closeMobileMenu} role="presentation"></div>
		<div class="mobile-drawer">
			<nav class="mobile-nav-list" aria-label={t('nav.main')}>
				<div class="mobile-nav-group">
					<button
						class="mobile-nav-accordion-btn"
						type="button"
						onclick={() => (mobileSubmenuOpen = !mobileSubmenuOpen)}
					>
						<span>{t('nav.main')}</span>
						<svg
							class="accordion-arrow {mobileSubmenuOpen ? 'rotate' : ''}"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M6 9l6 6 6-6" />
						</svg>
					</button>

					{#if mobileSubmenuOpen}
						<div class="mobile-sub-list">
							<a href="/#masalah" onclick={(e) => scrollToSection('#masalah', e)}>{t('nav.problem')}</a>
							<a href="/#solusi" onclick={(e) => scrollToSection('#solusi', e)}>{t('nav.solution')}</a>
							<a href="/#cara-kerja" onclick={(e) => scrollToSection('#cara-kerja', e)}>{t('nav.howItWorks')}</a>
							<a href="/#target-audience" onclick={(e) => scrollToSection('#target-audience', e)}>{t('nav.audience')}</a>
							<a href="/#masterclass" onclick={(e) => scrollToSection('#masterclass', e)}>{t('nav.masterclass')}</a>
							<a href="/#testimoni" onclick={(e) => scrollToSection('#testimoni', e)}>{t('nav.testimonials')}</a>
							<a href="/#faq" onclick={(e) => scrollToSection('#faq', e)}>{t('nav.faq')}</a>
						</div>
					{/if}
				</div>

				<a href="/about" onclick={closeMobileMenu}>{t('nav.about')}</a>
				<a href="/features" onclick={closeMobileMenu}>{t('nav.features')}</a>
				<a href="/pricing" onclick={closeMobileMenu}>{t('nav.pricing')}</a>
				<a href="/course" onclick={closeMobileMenu}>{t('nav.course')}</a>
				<a href="/tutorials" onclick={closeMobileMenu}>{t('nav.tutorials')}</a>
				<a href="https://portal.wajom.co/login" target="_blank" rel="noopener" onclick={closeMobileMenu} class="mobile-login-link">{t('nav.loginPortal')}</a>
			</nav>
		</div>
	{/if}
</header>

<style>
	/* Custom Language Dropdown */
	.lang-custom-dropdown {
		position: relative;
		display: inline-flex;
	}

	.lang-custom-trigger {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		height: 38px;
		padding: 0 13px;
		border: 1px solid var(--rule-2);
		border-radius: 999px;
		color: var(--ink);
		background: var(--bg-2);
		font-family: var(--sans);
		font-size: 0.8rem;
		font-weight: 600;
		cursor: pointer;
		user-select: none;
		transition: color 0.18s ease, border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
	}

	.lang-custom-trigger:hover,
	.lang-custom-trigger.active {
		color: var(--ink);
		border-color: var(--emerald);
		background: var(--bg-3);
		box-shadow: 0 0 0 3px rgba(55, 159, 118, 0.14);
	}

	.lang-custom-trigger .globe-icon {
		width: 15px;
		height: 15px;
		flex-shrink: 0;
		color: var(--emerald-2);
	}

	.lang-custom-trigger .lang-text {
		letter-spacing: -0.01em;
		white-space: nowrap;
	}

	.lang-custom-trigger .chevron-icon {
		width: 13px;
		height: 13px;
		flex-shrink: 0;
		color: var(--ink-3);
		transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), color 0.18s ease;
	}

	.lang-custom-trigger .chevron-icon.rotate {
		transform: rotate(180deg);
		color: var(--emerald-2);
	}

	.lang-custom-menu {
		position: absolute;
		top: calc(100% + 8px);
		right: 0;
		min-width: 185px;
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 14px;
		padding: 6px;
		box-shadow: 0 18px 40px -10px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
		backdrop-filter: blur(20px) saturate(140%);
		z-index: 120;
		display: flex;
		flex-direction: column;
		gap: 3px;
		animation: langDropFade 0.16s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	@keyframes langDropFade {
		from {
			opacity: 0;
			transform: translateY(-6px) scale(0.97);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}

	.lang-custom-option {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 9px 12px;
		border-radius: 9px;
		background: transparent;
		border: 1px solid transparent;
		color: var(--ink-2);
		font-family: var(--sans);
		font-size: 0.84rem;
		font-weight: 500;
		text-align: left;
		cursor: pointer;
		width: 100%;
		transition: background 0.14s ease, color 0.14s ease, border-color 0.14s ease;
	}

	.lang-custom-option:hover {
		background: var(--bg-3);
		color: var(--ink);
	}

	.lang-custom-option.selected {
		background: rgba(55, 159, 118, 0.12);
		border-color: rgba(55, 159, 118, 0.22);
		color: var(--ink);
		font-weight: 600;
	}

	.lang-custom-option .flag-icon {
		font-size: 1.05rem;
		line-height: 1;
		flex-shrink: 0;
	}

	.lang-custom-option .lang-name {
		flex: 1;
		white-space: nowrap;
	}

	.lang-custom-option .check-icon {
		width: 14px;
		height: 14px;
		color: var(--emerald-2);
		flex-shrink: 0;
	}
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
	.hamburger-btn {
		display: none;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 10px;
		background: var(--bg-2);
		border: 1px solid var(--rule);
		color: var(--ink);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.hamburger-btn svg {
		width: 20px;
		height: 20px;
	}

	.hamburger-btn:hover {
		border-color: var(--emerald);
		color: var(--emerald);
	}

	.mobile-drawer-overlay {
		position: fixed;
		top: 64px;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);
		z-index: 98;
	}

	.mobile-drawer {
		position: fixed;
		top: 64px;
		left: 0;
		right: 0;
		background: var(--topbar-bg);
		backdrop-filter: saturate(180%) blur(20px);
		border-bottom: 1px solid var(--rule);
		padding: 20px 24px 30px;
		z-index: 99;
		max-height: calc(100vh - 64px);
		overflow-y: auto;
		box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
		animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.mobile-nav-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.mobile-nav-list a,
	.mobile-nav-accordion-btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 16px;
		border-radius: 12px;
		font-family: var(--sans);
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--ink);
		text-decoration: none;
		background: transparent;
		border: 1px solid transparent;
		cursor: pointer;
		transition: all 0.18s ease;
		width: 100%;
		text-align: left;
	}

	.mobile-nav-list a:hover,
	.mobile-nav-accordion-btn:hover {
		background: var(--bg-2);
		color: var(--emerald);
		border-color: var(--rule);
	}

	.mobile-login-link {
		margin-top: 10px;
		background: rgba(55, 159, 118, 0.12) !important;
		border: 1px solid rgba(55, 159, 118, 0.3) !important;
		color: var(--emerald-2) !important;
		justify-content: center !important;
		font-weight: 700 !important;
	}

	.accordion-arrow {
		width: 16px;
		height: 16px;
		transition: transform 0.2s ease;
	}

	.accordion-arrow.rotate {
		transform: rotate(180deg);
	}

	.mobile-sub-list {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding-left: 16px;
		margin-top: 4px;
		margin-bottom: 8px;
		border-left: 2px solid var(--rule-2);
	}

	.mobile-sub-list a {
		font-size: 0.88rem;
		font-weight: 500;
		color: var(--ink-2);
		padding: 8px 12px;
	}

	@media (max-width: 768px) {
		.hamburger-btn {
			display: flex;
		}

		:global(.top-cta) {
			display: none !important;
		}

		.top-actions {
			gap: 10px;
		}
	}
</style>
