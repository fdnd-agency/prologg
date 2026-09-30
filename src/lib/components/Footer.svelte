<script>
	const navLinks = [
		{ label: 'Wat het is', href: '/wat-het-is' },
		{ label: 'Waarom Prologg', href: '/waarom-prologg' },
		{ label: 'Hoe het werkt', href: '/hoe-het-werkt' },
		{ label: 'Partners', href: '/partners' }
	];

	let lang = 'NL';

	function setLang(value) {
		lang = value;
	}
</script>

<footer class="site-footer">
	<div class="footer-inner">
		<div class="footer-brand">
			<a href="/" class="logo" aria-label="Prologg homepage">

				<span class="logo-text">Prologg</span>
			</a>

			<h2 class="brand-title">Prologg for Legal</h2>
			<p class="brand-description">
				Digitale Bewijskracht &amp;<br />
				Forensische Keten van Bewijs
			</p>
		</div>

		<nav class="footer-nav" aria-label="Footer navigatie">
			<h2 class="footer-heading">Navigatie</h2>
			<ul>
				{#each navLinks as link}
					<li><a href={link.href}>{link.label}</a></li>
				{/each}
			</ul>
		</nav>

		<div class="footer-contact">
			<h2 class="footer-heading">Contact</h2>
			<address>
				<a href="mailto:frank.kloos@fonetic.studio">frank.kloos@fonetic.studio</a>
			</address>

			<a href="/kantoordemo" class="cta-button">Vraag kantoordemo aan</a>

			<div class="lang-switch" role="group" aria-label="Taalkeuze">
				<span class="lang-label">Taal:</span>
				<button
					type="button"
					class:active={lang === 'NL'}
					aria-pressed={lang === 'NL'}
					on:click={() => setLang('NL')}
				>
					NL
				</button>
				<span class="lang-divider" aria-hidden="true">/</span>
				<button
					type="button"
					class:active={lang === 'EN'}
					aria-pressed={lang === 'EN'}
					on:click={() => setLang('EN')}
				>
					EN
				</button>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<p>&copy; Prologg for Legal</p>
	</div>
</footer>

<style>
	.site-footer {
		border-top: 3px solid #2563eb;
		background: #eef2fb;
		color: #1e293b;
		font-family: system-ui, sans-serif;
	}

	.footer-inner {
		display: grid;
		grid-template-columns: 1.4fr 1fr 1fr;
		gap: 2rem;
		padding: 2.5rem 2rem 1.5rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.logo {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		color: inherit;
		text-decoration: none;
		margin-bottom: 1rem;
	}

	.logo-text {
		font-size: 1.15rem;
		font-weight: 600;
	}

	.brand-title {
		font-size: 0.95rem;
		font-weight: 700;
		margin: 0 0 0.35rem;
	}

	.brand-description {
		font-size: 0.9rem;
		color: #475569;
		margin: 0;
		line-height: 1.5;
	}

	.footer-heading {
		font-size: 0.95rem;
		font-weight: 700;
		margin: 0 0 0.9rem;
	}

	.footer-nav ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.footer-nav a,
	.footer-contact address a {
		color: #475569;
		text-decoration: none;
		font-size: 0.9rem;
	}

	.footer-nav a:hover,
	.footer-contact address a:hover {
		text-decoration: underline;
	}

	address {
		font-style: normal;
		margin: 0 0 1.1rem;
	}

	.cta-button {
		display: inline-block;
		background: #0f172a;
		color: #fff;
		font-size: 0.9rem;
		font-weight: 500;
		padding: 0.6rem 1.1rem;
		border-radius: 0.4rem;
		text-decoration: none;
		margin-bottom: 1.1rem;
	}

	.lang-switch {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.85rem;
		color: #475569;
	}

	.lang-switch button {
		background: none;
		border: none;
		padding: 0;
		font: inherit;
		color: inherit;
		cursor: pointer;
	}

	.lang-switch button.active {
		font-weight: 700;
		color: #0f172a;
	}

	.lang-divider {
		color: #94a3b8;
	}

	.footer-bottom {
		border-top: 1px solid #dde3f0;
		padding: 1rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.footer-bottom p {
		margin: 0;
		font-size: 0.8rem;
		color: #94a3b8;
	}

	/* Mobile: stacked layout zoals in screenshot 2 */
	@media (max-width: 640px) {
		.footer-inner {
			grid-template-columns: 1fr;
			gap: 1.75rem;
			padding: 1.75rem 1.25rem 1.25rem;
		}

		.footer-bottom {
			padding: 0.9rem 1.25rem;
		}
	}
</style>