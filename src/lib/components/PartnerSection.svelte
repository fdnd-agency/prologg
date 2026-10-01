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

<section>
    <header>
        <h4>Maatschappelijke verankering</h4>
        <h2>In samenwerking met</h2>
        <p>Mede ontwikkeld en getoetst in samenwerking met toonaangevende maatschappelijke partners en onderwijsinstellingen.</p>
    </header>

    <ul class="cards" role="list">
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
        flex-wrap: wrap;
        gap: 24px;
    }
</style>