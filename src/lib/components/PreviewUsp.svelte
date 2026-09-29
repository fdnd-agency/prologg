<script>
    import UspBlock from "./UspBlock.svelte";
    import img from "$lib/assets/phone-preview.webp";

    let data = [
        {
            id: 1,
            subTitle: "Aan de bron",
            title: "Vastlegging met tijdstempel",
            text: "Foto's, audio en locatiedata worden direct lokaal voorzien van onafhankelijke tijd- en metadataverankering.",
        },
        {
            id: 2,
            subTitle: "Integriteitswaarborg",
            title: "Onaantastbaar logboek met SHA-256",
            text: "Elke manipulatie of aanpassing is uitgesloten dankzij cryptografische hashes die standhouden bij verweer.",
        },
        {
            id: 3,
            subTitle: "Rechtsgeldige overdracht",
            title: "Kant-en-klaar procesdossier",
            text: "Genereer een gestructureerde export met brondocumenten en verificatiecertificaat voor de rechtbank of Arbeidsinspectie.",
        },
    ];
</script>

<section>
    <img src={img} alt="" width="100%" />
</section>
<div>
    {#each data as usp}
        <UspBlock
            count={usp.id}
            subTitle={usp.subTitle}
            title={usp.title}
            text={usp.text}
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
        filter: drop-shadow(0px 0px 15px #d2d2d29f);
        display: flex;
        justify-self: center;

        @media (width > 890px) {
            margin-inline: 3rem;
            place-self: center;
        }
    }
</style>
