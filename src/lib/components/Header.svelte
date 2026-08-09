<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let theme = $state('dark');
	let mobileMenuOpen = $state(false);
	let mobileSubmenuOpen = $state(false);

	let headerEl: HTMLElement | null = $state(null);

	onMount(() => {
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
		if (mobileMenuOpen && headerEl && !headerEl.contains(e.target as Node)) {
			closeMobileMenu();
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && mobileMenuOpen) {
			closeMobileMenu();
		}
	}

	function handleFocusOut(e: FocusEvent) {
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
		<nav class="nav-links" aria-label="Main Navigation">
			<div class="nav-dropdown">
				<button class="nav-dropdown-btn" type="button" aria-haspopup="true">
					<span>Utama</span>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M6 9l6 6 6-6" />
					</svg>
				</button>
				<div class="nav-dropdown-content">
					<a href="/#masalah" onclick={(e) => scrollToSection('#masalah', e)}>Masalah</a>
					<a href="/#solusi" onclick={(e) => scrollToSection('#solusi', e)}>Solusi</a>
					<a href="/#cara-kerja" onclick={(e) => scrollToSection('#cara-kerja', e)}>Cara Kerja</a>
					<a href="/#target-audience" onclick={(e) => scrollToSection('#target-audience', e)}>Sasaran</a>
					<a href="/#masterclass" onclick={(e) => scrollToSection('#masterclass', e)}>Masterclass RM30</a>
					<a href="/#testimoni" onclick={(e) => scrollToSection('#testimoni', e)}>Testimoni</a>
					<a href="/#faq" onclick={(e) => scrollToSection('#faq', e)}>FAQ</a>
				</div>
			</div>
			<a href="/about">Mengenai Kami</a>
			<a href="/features">Ciri-ciri</a>
			<a href="/pricing">Harga</a>
			<a href="/course">Kursus</a>
			<a href="/tutorials">Tutorial</a>
		</nav>

		<div class="top-actions">
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
			<a class="top-cta" href="https://portal.wajom.co/login" target="_blank" rel="noopener">Login</a>

			<!-- Mobile Hamburger Toggle Button -->
			<button
				class="hamburger-btn"
				onclick={toggleMobileMenu}
				aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
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
			<nav class="mobile-nav-list" aria-label="Mobile Navigation">
				<div class="mobile-nav-group">
					<button
						class="mobile-nav-accordion-btn"
						type="button"
						onclick={() => (mobileSubmenuOpen = !mobileSubmenuOpen)}
					>
						<span>Utama</span>
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
							<a href="/#masalah" onclick={(e) => scrollToSection('#masalah', e)}>Masalah</a>
							<a href="/#solusi" onclick={(e) => scrollToSection('#solusi', e)}>Solusi</a>
							<a href="/#cara-kerja" onclick={(e) => scrollToSection('#cara-kerja', e)}>Cara Kerja</a>
							<a href="/#target-audience" onclick={(e) => scrollToSection('#target-audience', e)}>Sasaran</a>
							<a href="/#masterclass" onclick={(e) => scrollToSection('#masterclass', e)}>Masterclass RM30</a>
							<a href="/#testimoni" onclick={(e) => scrollToSection('#testimoni', e)}>Testimoni</a>
							<a href="/#faq" onclick={(e) => scrollToSection('#faq', e)}>FAQ</a>
						</div>
					{/if}
				</div>

				<a href="/about" onclick={closeMobileMenu}>Mengenai Kami</a>
				<a href="/features" onclick={closeMobileMenu}>Ciri-ciri</a>
				<a href="/pricing" onclick={closeMobileMenu}>Harga</a>
				<a href="/course" onclick={closeMobileMenu}>Kursus</a>
				<a href="/tutorials" onclick={closeMobileMenu}>Tutorial</a>
				<a href="https://portal.wajom.co/login" target="_blank" rel="noopener" onclick={closeMobileMenu} class="mobile-login-link">Login ke Portal &rarr;</a>
			</nav>
		</div>
	{/if}
</header>

<style>
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
