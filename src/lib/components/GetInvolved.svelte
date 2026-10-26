<script>
    import Sectiontitle from "./Sectiontitle.svelte";
    let { subtitle, title, description, cards = [] } = $props();
</script>

<section id="doe-mee">
    <div>
        <Sectiontitle {subtitle} h2={title} />

        <ol>
            {#each cards as card (card.number)}
                <li>
                    <article>
                        <p class="number">{card.number}</p>
                        <h3>{card.title}</h3>
                        <p class="description">{card.description}</p>
                    </article>
                </li>
            {/each}
        </ol>
    </div>
</section>

<style>
    section {
        background-color: var(--background-color-secondary);
        padding: 1rem;
        color: var(--text-color-primary);
        display: grid;

        @media (prefers-color-scheme: dark) {
            color: var(--card-text);
            background-color: var(--background-color-secondary);
        }

        @media (width >= 768px) {
            padding: 3.5rem 3rem;
        }

        div {
            max-width: var(--max-width);
            justify-self: center;
        }
    }

    ol {
        display: grid;
        gap: 2rem;
        list-style: none;

        @media (width >= 768px) {
            grid-template-columns: 1fr 1fr;
        }
    }

    li {
        padding: 2rem 1.5rem;
        border-radius: 1rem;
        filter: var(--filter-shadow-card);
    }

    li:first-child {
        background-color: var(--card-background);
        color: var(--card-text);
    }

    li:last-child {
        background-color: var(--card-background-alt);
    }

    .number {
        font-family: var(--font-heading);
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1;
        margin-bottom: 1rem;
    }

    li .number {
        color: var(--alert-color);

        @media (prefers-color-scheme: dark) {
            color: var(--white);
        }
    }

    h3 {
        font-family: var(--font-heading);
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 1.4;
        margin-bottom: 1rem;
    }

    .description {
        font-size: 1rem;
        line-height: 1.6;
        width: 100%;
        font-weight: 300;
    }
</style>
