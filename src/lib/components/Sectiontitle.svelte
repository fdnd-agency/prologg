<script>
    let { h4, h2, p } = $props();
</script>

{#if h4}
    <h4>{h4}</h4>
{/if}
{#if h2}
    <h2>{h2}</h2>
{/if}
{#if p}
    <p>{p}</p>
{/if}

<style></style>
