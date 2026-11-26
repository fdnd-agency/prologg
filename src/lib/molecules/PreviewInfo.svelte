<script>
    import SectionTitle from "$lib/molecules/SectionTitle.svelte";
    let { subtitle, title, description } = $props();
</script>

<header>
    <SectionTitle {subtitle} h2={title} p={description} />
</header>

<style>
    header {
        padding: 0;
        grid-column: span 2;
    }
</style>
