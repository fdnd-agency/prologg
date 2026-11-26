<script>
    import PartnerCard from "$lib/molecules/PartnerCard.svelte";
    import SectionTitle from "$lib/molecules/SectionTitle.svelte";
    let { subtitle, title, description, partners = [] } = $props();
</script>

<section id="partners">
    <header>
        <SectionTitle {subtitle} h2={title} p={description} />
    </header>

    <div class="cards">
        {#each partners as card}
            <PartnerCard
                label={card.title}
                icon={card.image}
                text={card.description}
            />
        {/each}
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding: 1rem;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 36rem;
        text-align: center;
    }

    .cards {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: 1rem;
        width: 100%;
    }

    @media (width >= 768px) {
        section {
            padding: 64px 32px;
        }

        .cards {
            grid-template-columns: repeat(3, 1fr);
            max-width: 960px;
        }
    }
</style>
