<script>
    let { h4, h2, p } = $props();
</script>

<hgroup>
    {#if h4}
        <span>{h4}</span>
    {/if}
    {#if h2}
        <h2>{h2}</h2>
    {/if}
    {#if p}
        <p>{p}</p>
    {/if}
</hgroup>

<style>
    hgroup {
        padding-block: 0.5rem;
    }
</style>
