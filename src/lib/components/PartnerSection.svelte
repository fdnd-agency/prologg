<script>
    import PartnerCard from "./PartnerCard.svelte";
    let { subtitle, title, description, partners = [] } = $props();
</script>

<section id="partners">
    <header>
        <h4>{subtitle}</h4>
        <h2>{title}</h2>
        <p>
            {description}
        </p>
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
        gap: 12px;
        max-width: 36rem;
        text-align: center;
    }

    h4 {
        font-family: var(--font-mono);
        font-weight: 700;
    }

    h2 {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        color: var(--text-color-primary);
    }

    header p {
        font-size: 0.875rem;
        line-height: 1.6;
        color: var(--text-color-accent);

        @media (prefers-color-scheme: dark) {
            color: var(--text-color-primary);
        }
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

        h2 {
            font-size: 2rem;
        }

        header p {
            font-size: 1rem;
        }

        .cards {
            grid-template-columns: repeat(3, 1fr);
            max-width: 960px;
        }
    }
</style>
