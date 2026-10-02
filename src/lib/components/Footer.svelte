<script>
	import logo from '$lib/assets/full-logo.svg';
	import Button from '$lib/components/Button.svelte';

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
			<a href="/" class="logo">
				<img src={logo} alt="Prologg" />
			</a>

			<h2 class="brand-title">Prologg for Legal</h2>

			<p class="brand-description">
				Digitale Bewijskracht &amp;<br />
				Forensische Keten van Bewijs
			</p>
		</div>

		<nav class="footer-nav">
			<h2 class="footer-heading">Navigatie</h2>

			<ul>
				{#each navLinks as link (link.href)}
					<li>
						<a href={link.href}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="footer-contact">
			<h2 class="footer-heading">Contact</h2>

			<address>
				<a href="mailto:frank.kloos@fonetic.studio">
					frank.kloos@fonetic.studio
				</a>
			</address>

			<div class="footer-demo">
				<Button
					href="/kantoordemo"
					classes="nav"
					content="Vraag kantoordemo aan"
				/>
			</div>

			<div class="lang-switch">
				<span>Taal:</span>

				<button
					type="button"
					class:active={lang === 'NL'}
					onclick={() => setLang('NL')}
				>
					NL
				</button>

				<span class="lang-divider">/</span>

				<button
					type="button"
					class:active={lang === 'EN'}
					onclick={() => setLang('EN')}
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
		background: var(--background-color-primary);
		color: var(--text-color-primary);
	}

	.footer-inner,
	.footer-bottom {
		box-sizing: border-box;
		width: 100%;
		max-width: 1200px;
		margin-inline: auto;
	}

	/* Mobiel: één kolom */
	.footer-inner {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1.75rem;
		padding: 1.75rem 1.25rem 1.25rem;
	}

	.logo {
		display: inline-flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	.logo img {
		display: block;
		width: 110px;
		max-width: 100%;
		height: auto;
	}

	.brand-title {
		margin: 0 0 0.35rem;
		font-size: 0.95rem;
		font-weight: 700;
	}

	.brand-description {
		margin: 0;
		color: var(--text-color-accent);
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.footer-heading {
		margin: 0 0 0.9rem;
		font-size: 0.95rem;
		font-weight: 700;
	}

	.footer-nav ul {
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.footer-nav a,
	.footer-contact address a {
		color: var(--text-color-accent);
		font-size: 0.9rem;
		text-decoration: none;
	}

	.footer-nav a:hover,
	.footer-contact address a:hover {
		text-decoration: underline;
	}

	address {
		margin: 0 0 1.1rem;
		font-style: normal;
		overflow-wrap: anywhere;
	}

	.footer-demo {
		margin-bottom: 1.1rem;
	}

	.lang-switch {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		color: var(--text-color-accent);
		font-size: 0.85rem;
	}

	.lang-switch button {
		padding: 0.25rem;
		border: none;
		background: none;
		color: inherit;
		font: inherit;
		cursor: pointer;
	}

	.lang-switch button.active {
		color: var(--text-color-primary);
		font-weight: 700;
	}

	.lang-divider {
		color: var(--text-color-accent);
	}

	a:focus-visible,
	button:focus-visible,
	.footer-demo :global(a:focus-visible) {
		outline: 2px solid var(--text-color-primary);
		outline-offset: 4px;
	}

	.footer-bottom {
		padding: 0.9rem 1.25rem;
		border-top: 1px solid
			color-mix(in srgb, var(--text-color-accent) 20%, transparent);
	}

	.footer-bottom p {
		margin: 0;
		color: var(--text-color-accent);
		font-size: 0.8rem;
	}

	/* Tablet: twee kolommen */
	@media (min-width: 700px) {
		.footer-inner {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 2rem;
			padding: 2.5rem 2rem 1.5rem;
		}

		.footer-bottom {
			padding: 1rem 2rem;
		}
	}

	/* Desktop: drie kolommen */
	@media (min-width: 1080px) {
		.footer-inner {
			grid-template-columns:
				minmax(0, 1.4fr)
				repeat(2, minmax(0, 1fr));
		}
	}
</style>