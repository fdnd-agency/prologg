<script>
  import { page } from '$app/state';
  import { content } from '$lib/content.js';
  import { lang } from '$lib/lang.svelte.js';

  let { foutParagraaf, terugButton } = $derived(content[lang.current].error);
</script>

<h1>{page.status}</h1>

{#if page.status === 404}
  <p>{foutParagraaf}</p>
{/if}

<a href="/">{terugButton}</a>