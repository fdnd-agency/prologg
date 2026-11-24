<script>
  import { page } from '$app/state';
  import { content } from '$lib/content.js';
  import { lang } from '$lib/lang.svelte.js';
  import Button from '$lib/atoms/Button.svelte';

  let { foutParagraaf, terugButton } = $derived(content[lang.current].error);
</script>

<section>
  <h1>{page.status}</h1>

  {#if page.status === 404}
    <p>{foutParagraaf}</p>
  {/if}

  <Button href="/" classes="hero-primary" content={terugButton} />
</section>

<style>
  section {
    display: grid;
    justify-items: center;
    align-content: center;
    gap: var(--space-lg);
    padding: var(--space-xxl) var(--space-md);
    background-color: var(--background-color-secondary);
    text-align: center;
    min-height: 70vh;
  }

  h1 {
    font-size: clamp(3rem, 8vw, 4rem);
    line-height: 1;
    color: var(--text-color-big);
  }

  p {
    max-width: 20rem;
    color: var(--text-color-accent);

    @media (width >= 768px) {
      max-width: none;
    }
  }
</style>