<script>
	let { subtitle, title, reasons = [] } = $props();
</script>

<section id="waarom-prologg" class="why-section">
	<div class="why-content">
		<header>
			<h4>{subtitle}</h4>
			<h2>{title}</h2>
		</header>

		<dl class="why-reasons">
			{#each reasons as { title, description } (title)}
				<div>
					<dt>{title}</dt>
					<dd>{description}</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>

<style>
	.why-section {
		container: why-prologg / inline-size;
		inline-size: 100%;
		min-inline-size: 0;
		color: var(--text-color-primary);
		overflow-wrap: anywhere;
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

	header {
		margin-block-end: 3rem;
	}

	h4 {
		@media (prefers-color-scheme: dark) {
			color: hsl(6 85% 72%);
		}
	}

	.why-reasons {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 3rem;
		margin: 0;

		@container why-prologg (width >= 960px) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			gap: 2rem;
		}

		div {
			min-inline-size: 0;
			padding-block-start: 1.25rem;
			border-block-start: var(--border-usp);
		}

		dt {
			margin-block-end: 0.625rem;
			font-family: var(--font-heading);
			font-size: 1.125rem;
			font-weight: 700;
			line-height: 1.4;
		}

		dd {
			max-inline-size: 60ch;
			margin: 0;
			font-size: 1rem;
			line-height: 1.6;
		}
	}
</style>
