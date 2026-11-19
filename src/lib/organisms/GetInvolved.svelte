<script>
    import Sectiontitle from '$lib/molecules/Sectiontitle.svelte';
    import Button from '$lib/atoms/Button.svelte';
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
                </li>
            {/each}
        </ol>
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

    ol {
        display: grid;
        gap: 2rem;
        list-style: none;
        padding: 0;

        @media (width >= 768px) {
            grid-template-columns: 1fr 1fr;
        }
    }

    li {
        display: flex;
        padding: 1.5rem 2rem;
        border-radius: 1rem;
        filter: var(--filter-shadow-card);
        color: var(--color-text-primary);
    }

    li:first-child {
        background-color: var(--color-background-card);
        --cta-background: var(--color-background-card-alt);
    }

    li:last-child {
        background-color: var(--color-background-card-alt);
        --cta-background: var(--color-background-card);
    }

    article {
        flex: 1;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: auto auto 1fr;
        column-gap: 1.5rem;
    }

    .number,
    h3 {
        font-family: var(--font-heading);
        font-size: 1.125rem;
        line-height: 1.4;
        margin: 0;
    }

    .number {
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
