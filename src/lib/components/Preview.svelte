<script>
    import UspBlock from "./UspBlock.svelte";

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

{#each data as usp}
    <UspBlock
        count={usp.id}
        subTitle={usp.subTitle}
        title={usp.title}
        text={usp.text}
    />
{/each}

<!-- count, subTitle, title, text -->

<style></style>
