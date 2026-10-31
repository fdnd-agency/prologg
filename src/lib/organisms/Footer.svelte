<script>
	import fullLogo from "$lib/assets/full-logo.svg";
	import Button from "$lib/atoms/Button.svelte";
	import fullLogoWhite from "$lib/assets/full-logo-white.svg";

	let {
		button,
		links = [],
		title,
		descriptionFirst,
		descriptionSecond,
	} = $props();
</script>

<footer class="site-footer">
	<div class="footer-inner">
		<div class="footer-brand">
			<a href="/" class="footer-logo">
				<picture>
					<source
						srcset={fullLogoWhite}
						media="(prefers-color-scheme: dark)"
					/>

					<img
						src={fullLogo}
						alt="Prologg logo"
						class="footer-logo"
						width="100"
						height="70"
						fetchpriority="low"
						loading="lazy"
					/>
				</picture>
			</a>

			<h2 class="brand-title">{title}</h2>

			<p class="brand-description">
				<span>{descriptionFirst}</span>
				<span>{descriptionSecond}</span>
			</p>
		</div>

		<nav class="footer-navigation">
			<h2 class="footer-heading">Navigatie</h2>

			<ul>
				{#each links as { content, href } (href)}
					<li>
						<a {href} class="footer-link">{content}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="footer-contact">
			<h2 class="footer-heading">Contact</h2>

			<address>
				<a href="mailto:frank.kloos@fonetic.studio" class="footer-link">
					frank.kloos@fonetic.studio
				</a>
			</address>

			<div class="footer-demo">
				<Button
					href="mailto:frank.kloos@fonetic.studio"
					classes="nav"
					content={button}
				/>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		<p>&copy; Prologg for Legal</p>
	</div>
</footer>

<style>
	.site-footer {
		container-type: inline-size;
		background-color: var(--background-color-primary);
		color: var(--color-text-primary);
	}

	a {
		text-decoration: none;

		&:focus-visible {
			outline: 2px solid currentColor;
			outline-offset: 6px;
			border-radius: 5px;
		}
	}

	.footer-inner,
	.footer-bottom {
		width: 100%;
		max-width: var(--max-width);
		margin-inline: auto;
	}

	.footer-inner {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1.75rem;
		padding: 1.75rem 1.25rem 1.25rem;

		@container (width >= 700px) {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 2rem;
			padding: 2.5rem 2rem 1.5rem;
		}

		@container (width >= 1080px) {
			grid-template-columns: minmax(0, 1.4fr) repeat(2, minmax(0, 1fr));
		}
	}

	.footer-logo {
		display: inline-flex;
		align-items: center;
		margin-bottom: 1rem;

		img {
			display: block;
			width: 110px;
			max-width: 100%;
			height: auto;
		}
	}

	.brand-title {
		margin-bottom: 0.35rem;
		font-family: var(--font-heading);
		font-size: 0.95rem;
		font-weight: 700;
	}

	.brand-description {
		margin: 0;
		color: var(--color-text-primary);
		display: flex;
		flex-direction: column;
		color: var(--text-color-accent);
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.footer-heading {
		margin-bottom: 0.9rem;
		font-family: var(--font-heading);
		font-size: 0.95rem;
		font-weight: 700;
	}

	.footer-navigation {
		ul {
			display: flex;
			flex-direction: column;
			gap: 0.65rem;
			list-style: none;
		}
	}

	.footer-link {
		display: block;
		width: fit-content;
		max-width: 100%;
		color: var(--color-text-primary);
		font-size: 0.9rem;
		transform-origin: left center;

		&::after {
			display: block;
			width: 100%;
			height: 1px;
			background-color: var(--color-text-primary);
			background-color: currentColor;
			content: "";
			transform: scaleX(0);
			transform-origin: left;
		}

		&:hover::after,
		&:focus-visible::after {
			transform: scaleX(1);
		}

		@media (prefers-reduced-motion: no-preference) {
			transition: scale 0.1s ease-in-out;

			&::after {
				transition: transform 0.3s ease;
			}

			&:hover {
				scale: 1.02;
			}
		}
	}

	.footer-contact {
		address {
			margin-bottom: 1.1rem;
			font-style: normal;
			overflow-wrap: anywhere;
		}
	}

	.footer-demo {
		margin-bottom: 1.1rem;
	}

	.footer-bottom {
		padding: 0.9rem 1.25rem;
		border-top: var(--border-usp);

		p {
			color: var(--text-color-accent);
			font-size: 0.8rem;
		}

		@container (width >= 700px) {
			padding: 1rem 2rem;
		}
	}
</style>
