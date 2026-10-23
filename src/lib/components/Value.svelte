<script>
    let { subtitle, title, image, values = [] } = $props();
</script>

<section id="waarde-levering" class="value">
    <h4>{subtitle}</h4>
    <h2>{title}</h2>

    <dl>
        {#each values as value}
            <dt>{value.title}</dt>
            <dd>{value.description}</dd>
        {/each}
    </dl>

    <picture>
        <img src={image} alt="" />
    </picture>
</section>

<style>
    .value {
        padding: 2rem 1.5rem 0 1.5rem;
        justify-self: center;
        display: grid;
        max-width: var(--max-width);

        dl {
            padding-block: 1rem;
            @media (width > 890px) {
                display: grid;
                grid-template-columns: 1fr max-content;
            }
            dt {
                font-weight: 600;

                @media (width > 890px) {
                    border-bottom: 1px solid var(--white);
                    margin-block: 0.5rem 1rem;
                    padding-bottom: 0.5rem;
                }
            }

            dd {
                color: var(--text-color-accent);
                margin-block: 0.5rem 1rem;
                padding-bottom: 0.5rem;

                border-bottom: 1px solid var(--white);
            }
        }

        picture {
            height: 30rem;
            width: 100%;
            overflow: hidden;

            filter: var(--filter-shadow-card);
            border-radius: 1rem 1rem 0 0;
        }
    }
</style>
