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

<style>
    section {
        background-color: var(--background-color-secondary);
        padding: 1rem;
        list-style: none;

        @media (prefers-color-scheme: dark) {
            color: var(--card-text);
            background-color: var(--background-color-secondary);
        }
    }

    h4 {
        font-family: var(--font-mono);
        font-weight: 700;
        line-height: 1.6;
        margin-top: 1.5rem;

        @media (prefers-color-scheme: dark) {
            color: hsl(213, 78%, 79%);
        }
    }

    h2 {
        font-family: var(--font-heading);
        font-size: 1.3rem;
        line-height: 1.4;
        font-weight: 600;
        margin-top: .5rem;
        margin-bottom: 2rem;
    }

    ol {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        list-style: none;
        margin: 1rem;
    }

    li {
        padding: 2rem;
        border-radius: 1rem;
    }

    li:first-child {
        background-color: var(--card-background);
        margin-top: .5rem;
        
        @media (prefers-color-scheme: dark) {
            color: var(--card-text);
        }
    }

    li:last-child {
        background-color: var(--card-background-alt);
        color: var(--white);
    }
</style>