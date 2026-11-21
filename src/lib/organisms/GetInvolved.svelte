<script>
    import Sectiontitle from '$lib/molecules/Sectiontitle.svelte';
    import Button from '$lib/atoms/Button.svelte';
    let { subtitle, title, description, cards = [] } = $props();
</script>

<section id="doe-mee">
    <div>
        <Sectiontitle {subtitle} h2={title} />

        <div class="cards">
            {#each cards as card (card.title)}
                <article>
                    <h3>{card.title}</h3>
                    <p class="description">{card.description}</p>
                    {#if card.button}
                        <div class="cta">
                            <Button
                                href={card.button.href}
                                classes="cta"
                                content={card.button.content}
                            />
                        </div>
                    {/if}
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    section {
        padding: 1rem;
        color: var(--text-color-primary);
        background-color: var(--background-color-secondary);
        display: grid;

        @media (width >= 768px) {
            padding: 3.5rem 3rem;
        }

        > div {
            max-width: var(--max-width);
            justify-self: center;
            color: var(--text-color-primary);
        }
    }

    .cards {
        display: grid;
        gap: 2rem;
        margin-block: 1rem;
        counter-reset: card;

        @media (width >= 768px) {
            grid-template-columns: 1fr 1fr;
        }
    }

    article {
        counter-increment: card;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto 1fr;
        column-gap: 1.5rem;
        padding: 1.5rem 2rem;
        border-radius: 1rem;
        filter: var(--filter-shadow-card);
        color: var(--color-text-primary);
    }

    article:first-child {
        background-color: var(--color-background-card);
        --cta-background: var(--color-background-card-alt);
    }

    article:last-child {
        background-color: var(--color-background-card-alt);
        --cta-background: var(--color-background-card);
    }

    /* Decorative number: generated with a CSS counter, not part of the markup */
    article::before,
    h3 {
        font-family: var(--font-heading);
        font-size: 1.125rem;
        line-height: 1.4;
        margin: 0;
    }

    article::before {
        content: counter(card);
        grid-row: 1;
        grid-column: 1;
        font-weight: 700;
        color: var(--alert-color);
    }

    h3 {
        grid-column: 2;
        font-weight: 600;
        margin-bottom: 0.75rem;
    }

    .description {
        grid-column: 2;
        font-size: var(--font-size-body);
        line-height: 1.6;
        font-weight: 400;
        margin: 0;
    }

    .cta {
        grid-column: 2;
        align-self: end;
        justify-self: end;
        margin-top: 1.5rem;
    }
</style>
