<script>
    import PreviewInfo from "./PreviewInfo.svelte";
    import PreviewBanner from "./PreviewBanner.svelte";
    import PreviewUsp from "./PreviewUsp.svelte";

    import { getSection } from "$lib/content.js";

    const content = {
        preview: getSection("preview.md"),
    };
</script>

<article id="hoe-het-werkt">
    <div>
        <PreviewInfo {...content.preview} />
        <PreviewUsp {...content.preview} />
        <PreviewBanner />
    </div>
</article>

<style>
    article {
        background-color: var(--background-color-secondary);
        padding: 2rem 0.5rem;
    }
    div {
        @media (width > 890px) {
            display: grid;
            grid-template-columns: max-content 1fr;

            justify-self: center;
        }
    }
</style>
