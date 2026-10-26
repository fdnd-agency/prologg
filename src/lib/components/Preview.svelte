<script>
    import PreviewInfo from "./PreviewInfo.svelte";
    import PreviewBanner from "./PreviewBanner.svelte";
    import PreviewUsp from "./PreviewUsp.svelte";

    import { lang } from "$lib/lang.svelte.js";
    import { content } from "$lib/content.js";

    const c = $derived(content[lang.current]);
</script>

<article id="hoe-het-werkt">
    <div>
        <PreviewInfo {...c.preview} />
        <PreviewUsp {...c.preview} />
        <PreviewBanner />
    </div>
</article>

<style>
    article {
        background-color: var(--background-color-secondary);
        padding: 2rem 0.5rem;
        display: grid;
    }
    div {
        @media (width > 890px) {
            display: grid;
            grid-template-columns: max-content 1fr;
            justify-self: center;
            max-width: var(--max-width);
        }
    }
</style>
