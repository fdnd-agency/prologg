<script>
    import UspBlock from '$lib/molecules/UspBlock.svelte';

    let { usps = [], imageAlt } = $props();
</script>

<figure>
    <picture>
        <source srcset="/images/phone-preview.avif" type="image/avif" />
        <source srcset="/images/phone-preview.webp" type="image/webp" />
        <img
            src="/images/phone-preview.png"
            alt={imageAlt}
            width="340"
            height="626.67"
            loading="lazy"
        />
    </picture>
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
