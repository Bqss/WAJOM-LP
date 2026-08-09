<script lang="ts">
	import { page } from '$app/stores';

	function scrollToSection(selector: string, e?: Event) {
		if (e) e.preventDefault();
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
</script>

<footer>
	<div class="wrap">
		<div class="footer-grid">
			<!-- Column 1: Identity -->
			<div class="footer-col col-identity">
				<a href="/" class="footer-brand" aria-label="Wajom Home">
					<img src="/logo.png" alt="Wajom Logo" class="footer-logo" />
					<span class="footer-brand-name">Wajom!</span>
				</a>
				<p class="footer-description">
					Platform automasi & pemasaran WhatsApp terkemuka di Malaysia. Permudahkan komunikasi dan perkasakan jualan perniagaan anda.
				</p>
				<div class="footer-company-details">
					<span class="company-name">RAED LAB SDN. BHD.</span>
					<span class="company-reg">202501036581 (1637991-U)</span>
				</div>
				<div class="footer-badge">
					<span>Buatan Malaysia 🇲🇾</span>
				</div>
			</div>

			<!-- Column 2: Quick Links -->
			<div class="footer-col col-links">
				<h3 class="footer-title">Pautan Pantas</h3>
				<ul class="footer-nav">
					<li><a href="/">Utama</a></li>
					<li><a href="/features">Ciri-ciri</a></li>
					<li><a href="/pricing">Harga</a></li>
					<li><a href="/course">Kursus</a></li>
					<li><a href="/tutorials">Tutorial</a></li>
					<li><a href="/about">Mengenai Kami</a></li>
					<li><a href="/#testimoni" onclick={(e) => scrollToSection('#testimoni', e)}>Testimoni</a></li>
					<li><a href="/#faq" onclick={(e) => scrollToSection('#faq', e)}>FAQ</a></li>
				</ul>
			</div>

			<!-- Column 3: Legal & Services -->
			<div class="footer-col col-legal">
				<h3 class="footer-title">Polisi & Terma</h3>
				<ul class="footer-nav-vertical">
					<li><a href="/privacy-policy">Polisi Privasi</a></li>
					<li><a href="/term-of-service">Terma Perkhidmatan</a></li>
					<li><a href="/cancelation-policy">Polisi Pembatalan</a></li>
					<li><a href="/detail-of-service">Butiran Perkhidmatan</a></li>
				</ul>
			</div>

			<!-- Column 4: Contacts -->
			<div class="footer-col col-contacts">
				<h3 class="footer-title">Hubungi Kami</h3>
				<ul class="footer-contact-info">
					<li>
						<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
							<circle cx="12" cy="10" r="3"/>
						</svg>
						<span>Felda Bukit Waha, 81900 Kota Tinggi, Johor</span>
					</li>
					<li>
						<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
						</svg>
						<a href="https://wa.me/60108102455" target="_blank" rel="noopener" class="contact-link">+60 108 102 455</a>
					</li>
					<li>
						<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"/>
							<polyline points="12 6 12 12 16 14"/>
						</svg>
						<span>Isnin - Jumaat: 9:00 AM - 6:00 PM</span>
					</li>
				</ul>

				<a href="https://wa.me/60108102455" target="_blank" rel="noopener" class="wa-btn">
					<svg class="wa-btn-icon" viewBox="0 0 24 24" fill="currentColor">
						<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
					</svg>
					Sembang di WhatsApp
				</a>
			</div>
		</div>

		<div class="footer-bottom">
			<div class="footer-copy">
				&copy; 2025 Wajom by RAED LAB SDN. BHD. Hak Cipta Terpelihara.
			</div>
			<div class="footer-legal">
				<a href="/privacy-policy">Polisi Privasi</a>
				<span class="sep">•</span>
				<a href="/term-of-service">Terma Perkhidmatan</a>
				<span class="sep">•</span>
				<a href="/cancelation-policy">Polisi Pembatalan</a>
				<span class="sep">•</span>
				<a href="/detail-of-service">Butiran Perkhidmatan</a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--rule);
		background: var(--bg);
		padding: 56px 0 32px;
		font-family: var(--sans);
		color: var(--ink-2);
		margin-top: auto;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 1.3fr 0.9fr 1.1fr 1.1fr;
		gap: 40px;
		margin-bottom: 48px;
		text-align: left;
	}

	/* Identity Column */
	.col-identity {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.footer-brand {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
	}

	.footer-logo {
		width: 32px;
		height: 32px;
		object-fit: contain;
	}

	.footer-brand-name {
		font-family: var(--serif);
		font-size: 1.4rem;
		font-weight: 700;
		color: var(--emerald);
		letter-spacing: -0.01em;
	}

	.footer-description {
		font-size: 0.88rem;
		line-height: 1.6;
		color: var(--ink-2);
		margin: 0;
		max-width: 36ch;
	}

	.footer-company-details {
		display: flex;
		flex-direction: column;
		gap: 2px;
		font-family: var(--mono);
		font-size: 0.76rem;
		color: var(--ink-3);
	}

	.company-name {
		font-weight: 600;
		color: var(--ink-2);
	}

	.footer-badge {
		display: inline-flex;
		align-items: center;
		width: fit-content;
		padding: 4px 12px;
		background: var(--bg-2);
		border: 1px solid var(--rule-2);
		border-radius: 999px;
		font-family: var(--mono);
		font-size: 0.74rem;
		color: var(--emerald-2);
	}

	/* Column Titles */
	.footer-title {
		font-family: var(--serif);
		font-size: 1.05rem;
		font-weight: 600;
		color: var(--ink);
		margin: 0 0 18px 0;
		letter-spacing: -0.01em;
	}

	/* Quick Links Column */
	.footer-nav {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.footer-nav a {
		font-size: 0.88rem;
		color: var(--ink-2);
		text-decoration: none;
		transition: color 0.16s ease, transform 0.16s ease;
		display: inline-block;
	}

	.footer-nav a:hover {
		color: var(--emerald-2);
		transform: translateX(2px);
	}

	/* Legal & Services Column */
	.footer-nav-vertical {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.footer-nav-vertical a {
		font-size: 0.88rem;
		color: var(--ink-2);
		text-decoration: none;
		transition: color 0.16s ease, transform 0.16s ease;
		display: inline-block;
	}

	.footer-nav-vertical a:hover {
		color: var(--emerald-2);
		transform: translateX(2px);
	}

	/* Contacts Column */
	.footer-contact-info {
		list-style: none;
		padding: 0;
		margin: 0 0 20px 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.footer-contact-info li {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		font-size: 0.86rem;
		color: var(--ink-2);
		line-height: 1.5;
	}

	.footer-contact-info .icon {
		width: 18px;
		height: 18px;
		color: var(--emerald-2);
		flex-shrink: 0;
		margin-top: 2px;
	}

	.contact-link {
		color: var(--ink-2);
		text-decoration: none;
		transition: color 0.16s ease;
	}

	.contact-link:hover {
		color: var(--emerald-2);
	}

	.wa-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 10px 18px;
		background: #25d366;
		color: #ffffff;
		border-radius: 999px;
		font-size: 0.85rem;
		font-weight: 600;
		text-decoration: none;
		transition: background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;
		box-shadow: 0 4px 14px rgba(37, 211, 102, 0.25);
		width: fit-content;
	}

	.wa-btn:hover {
		background: #20bd5a;
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35);
		color: #ffffff;
	}

	.wa-btn-icon {
		width: 16px;
		height: 16px;
	}

	/* Footer Bottom */
	.footer-bottom {
		border-top: 1px solid var(--rule);
		padding-top: 24px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 16px;
		font-size: 0.78rem;
		font-family: var(--mono);
		color: var(--ink-3);
	}

	.footer-copy {
		color: var(--ink-3);
	}

	.footer-legal {
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	.footer-legal a {
		color: var(--ink-3);
		text-decoration: none;
		transition: color 0.16s ease;
	}

	.footer-legal a:hover {
		color: var(--emerald-2);
	}

	.sep {
		color: var(--rule-2);
	}

	/* Responsive Breakdown */
	@media (max-width: 992px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
			gap: 36px;
		}
	}

	@media (max-width: 640px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.footer-description {
			max-width: 100%;
		}

		.footer-bottom {
			flex-direction: column;
			text-align: center;
			justify-content: center;
		}
	}
</style>


