<script>
	let { subtitle, title, reasons = [], conclusion } = $props()
</script>

<section id="waarom-prologg" class="why-section">
	<div class="why-content">
		<header class="why-header">
			<p class="why-label">{subtitle}</p>
			<h2>{title}</h2>
		</header>

		<ul class="why-reasons">
			{#each reasons as { title, description } (title)}
				<li>
					<h3>{title}</h3>
					<p>{description}</p>
				</li>
			{/each}
		</ul>

		<p class="why-conclusion">{conclusion}</p>
	</div>
</section>

<style>
	.why-section {
		--_heading: var(--text-color-primary);
		--_text: var(--text-color-accent);
		--_accent: var(--alert-color);
		--_border: color-mix(in srgb, var(--_text) 25%, transparent);

		container: why-prologg / inline-size;
		inline-size: 100%;
		min-inline-size: 0;
		color: var(--_text);
		overflow-wrap: anywhere;

		@media (prefers-color-scheme: dark) {
			--_text: hsl(213 18% 80%);
			--_accent: hsl(20 100% 64%);
		}
	}

	#waarom-prologg {
		scroll-margin-block-start: 6rem;
	}

	.why-content {
		box-sizing: border-box;
		inline-size: 100%;
		max-inline-size: 75rem;
		margin-inline: auto;
		padding: 2.5rem 1.5rem;

		@container why-prologg (width >= 640px) {
			padding: 3.5rem 2rem;
		}

		@container why-prologg (width >= 960px) {
			padding: 4rem;
		}
	}

	.why-header {
		margin-block-end: 3rem;

		@container why-prologg (width >= 960px) {
			margin-block-end: 3.5rem;
		}
	}

	.why-label {
		margin: 0 0 0.75rem;
		color: var(--_accent);
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		line-height: 1.5;
		text-transform: uppercase;
	}

	h2 {
		max-inline-size: 32ch;
		margin: 0;
		color: var(--_heading);
		font-family: var(--font-heading);
		font-size: 1.875rem;
		font-weight: 700;
		line-height: 1.2;
		text-wrap: balance;

		@container why-prologg (width >= 640px) {
			font-size: 2rem;
			line-height: 1.25;
		}
	}

	.why-reasons {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 3rem;
		margin: 0;
		padding: 0;
		list-style: none;

		@container why-prologg (width >= 960px) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 2rem;
		}

		li {
			min-inline-size: 0;
			padding-block-start: 1.25rem;
			border-block-start: 1px solid var(--_border);
		}

		h3 {
			margin: 0 0 0.625rem;
			color: var(--_heading);
			font-size: 1.0625rem;
			font-weight: 700;
			line-height: 1.4;
		}

		p {
			max-inline-size: 60ch;
			margin: 0;
			font-size: 0.875rem;
			line-height: 1.6;

			@container why-prologg (width >= 640px) {
				font-size: 1rem;
			}
		}
	}

	.why-conclusion {
		max-inline-size: 60ch;
		margin: 3rem 0 0;
		color: var(--_accent);
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.6;

		@container why-prologg (width >= 960px) {
			margin-block-start: 3.5rem;
		}
	}
</style>