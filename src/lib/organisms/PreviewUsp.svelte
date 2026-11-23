<script>
    import UspBlock from '$lib/molecules/UspBlock.svelte';
    import img from '$lib/assets/phone-preview.webp';

    let { usps = [] } = $props();
</script>

<figure>
    <img src={img} alt="" width="100%" />
</figure>
<div>
    {#each usps as usp}
        <UspBlock
            count={usp.number}
            subTitle={usp.subtitle}
            title={usp.title}
            text={usp.description}
        />
    {/each}
</div>

<style>
    figure {
        display: grid;
        margin: 0;
    }
    img {
        max-width: 20rem;
        padding: 0.5rem;
        filter: var(--filter-shadow-card);
        display: flex;
        justify-self: center;

        @media (width > 890px) {
            margin-inline: 3rem;
            place-self: center;
        }
    }
</style>
