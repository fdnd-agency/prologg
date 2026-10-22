<script>
    let { subtitle, title, image, values = [] } = $props();
</script>

<section id="waarde-levering" class="value">
    <h4>{subtitle}</h4>
    <h2>{title}</h2>

    <ul>
        {#each values as value}
            <li>{value.title}</li>
            <li>{value.description}</li>
            <div class="underline"></div>
        {/each}
    </ul>

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

        ul {
            padding-block: 2rem;

            @media (width > 890px) {
                display: grid;
                grid-template-columns: 1fr max-content;
            }

            li {
                list-style: none;
                padding-block: 0.25rem;

                @media (width > 890px) {
                    padding-block: 1rem;
                }

                &:nth-of-type(odd) {
                    font-weight: 600;
                }
                &:nth-of-type(even) {
                    color: var(--text-color-accent);
                    padding-bottom: 1rem;
                }
            }

            div.underline {
                grid-column: span 2;
                height: 1px;
                width: 100%;
                background-color: var(--white);
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
