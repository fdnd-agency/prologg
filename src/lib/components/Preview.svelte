<script>
    import PreviewInfo from "./PreviewInfo.svelte";
    import PreviewBanner from "./PreviewBanner.svelte";
    import PreviewUsp from "./PreviewUsp.svelte";

    import { getSection } from "$lib/content.js";

    const content = {
        preview: getSection("preview.md"),
    };
</script>

<section id="hoe-het-werkt">
    <div>
        <PreviewInfo {...content.preview} />
        <PreviewUsp {...content.preview} />
        <PreviewBanner />
    </div>
</section>

<style>
    section {
        background-color: var(--background-color-secondary);
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
