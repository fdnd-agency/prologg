<script>
    import UspBlock from "./UspBlock.svelte";
    import img from "$lib/assets/phone-preview.webp";

    let { usps = [] } = $props();
</script>

<section>
    <img src={img} alt="" width="100%" />
</section>
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
    section {
        display: grid;
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
