<script>
    let { subtitle, title, description, cards = [] } = $props();
</script>

<section id="doe-mee">
    <h4>{subtitle}</h4>
    <h2>{title}</h2>

    <ol>
        {#each cards as card (card.number)}
            <li>
                <article>
                    <p>{card.number}</p>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                </article>
            </li>
        {/each}
    </ol>
</section>