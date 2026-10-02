<script>
    import PartnerCard from "./PartnerCard.svelte";
    import decorationIcon from '$lib/assets/decoration-icon.svg';
    import decorationIcon1 from '$lib/assets/decoration-icon-1.svg';
    import decorationIcon2 from '$lib/assets/decoration-icon-2.svg';

    const partnerCards = [
        { label: 'FairWork', icon: decorationIcon, text: 'Belangenbehartiger tegen arbeidsuitbuiting'},
        { label: 'Hogeschool van Amsterdam (HvA)', icon: decorationIcon1, text: 'Juridisch praktijkonderzoek'},
        { label: 'Hack Your Future (HYF)', icon: decorationIcon2, text: 'Tech innovatie' }
    ];
</script>

<section id="partners">
    <header>
        <h4>Maatschappelijke verankering</h4>
        <h2>In samenwerking met</h2>
        <p>Mede ontwikkeld en getoetst in samenwerking met toonaangevende maatschappelijke partners en onderwijsinstellingen.</p>
    </header>

    <ul class="cards">
        {#each partnerCards as card}
            <li>
                <PartnerCard label={card.label} icon={card.icon} text={card.text} />
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        padding: 3rem;
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
    }

    .cards {
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;
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