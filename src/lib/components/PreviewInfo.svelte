<script>
    import Sectiontitle from "./Sectiontitle.svelte";
    let { subtitle, title, description } = $props();
</script>

<section class="preview-info">
    <Sectiontitle h4={subtitle} h2={title} p={description} />
</section>

<style>
    section {
        padding: 1rem;
        grid-column: span 2;

        @media (width > 890px) {
            padding: 1rem 1rem 1rem 3.5rem;
        }
    }
</style>
