<script>
	let { subtitle, title, reasons = [] } = $props();

	import Sectiontitle from "./Sectiontitle.svelte";
</script>

<section id="waarom-prologg" class="why-section">
	<div class="why-content">
		<header>
			<Sectiontitle {subtitle} h2={title} />
		</header>

		<dl class="why-reasons">
			{#each reasons as { title, description } (title)}
				<dt>{title}</dt>
				<dd>{description}</dd>
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

		@container why-prologg (width >= 640px) {
			padding: 3.5rem 2rem;
		}

		@container why-prologg (width >= 960px) {
			padding: 4rem;
		}
	}

	.why-reasons {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		margin: 0;

		@container why-prologg (width >= 960px) {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			grid-template-rows: auto 1fr;
			grid-auto-flow: column;
			column-gap: 2rem;
		}

		dt {
			min-inline-size: 0;
			margin-block-start: 3rem;
			padding-block-start: 1.25rem;
			border-block-start: 1px solid var(
				--border-usp,
				color-mix(in srgb, var(--text-color-primary) 25%, transparent)
			);
			font-family: var(--font-heading);
			font-size: 1.125rem;
			font-weight: 700;
			line-height: 1.4;

			&:first-of-type {
				margin-block-start: 0;
			}

			@container why-prologg (width >= 960px) {
				margin-block-start: 0;
			}
		}

		dd {
			min-inline-size: 0;
			max-inline-size: 60ch;
			margin: 0;
			padding-block-start: 0.625rem;
			font-size: 1rem;
			line-height: 1.6;
			padding-bottom: var(--space-sm);
		}
	}
</style>
