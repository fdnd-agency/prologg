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
    {#each partnerCards as card}
        <PartnerCard label={card.label} icon={card.icon} text={card.text} />
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }
</style>