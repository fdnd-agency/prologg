<script>
    import PartnerCard from "./PartnerCard.svelte";
    import Sectiontitle from "./Sectiontitle.svelte";
    let { subtitle, title, description, partners = [] } = $props();
</script>

<section id="partners">
    <header>
        <Sectiontitle h4={subtitle} h2={title} p={description} />
    </header>

    <ul class="cards">
        {#each partners as card}
            <li>
                <PartnerCard
                    label={card.title}
                    icon={card.image}
                    text={card.description}
                />
            </li>
        {/each}
    </ul>
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
        gap: 1rem;
        width: 100%;
    }

    li {
        display: flex;
        justify-content: center;
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
