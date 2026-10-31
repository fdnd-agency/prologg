<script>
    import PreviewInfo from "$lib/molecules/PreviewInfo.svelte";
    import PreviewBanner from '$lib/molecules/PreviewBanner.svelte';
    import PreviewUsp from '$lib/organisms/PreviewUsp.svelte';

    import { lang } from "$lib/lang.svelte.js";
    import { content } from "$lib/content.js";

    const c = $derived(content[lang.current]);
</script>

<section id="hoe-het-werkt">
    <div>
        <PreviewInfo {...c.preview} />
        <PreviewUsp {...c.preview} />
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
