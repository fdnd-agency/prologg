<script>
    import Sectiontitle from '$lib/molecules/Sectiontitle.svelte';
    let { subtitle, title, description } = $props();
</script>

<header>
    <Sectiontitle {subtitle} h2={title} p={description} />
</header>

<style>
    header {
        padding: 0;
        grid-column: span 2;

        @media (width > 890px) {
            padding: 1rem 1rem 1rem 3.5rem;
        }
    }
</style>
