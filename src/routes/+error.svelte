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