<script>
    import SectionTitle from "$lib/molecules/SectionTitle.svelte";
    let { subtitle, title, imageAlt, values = [] } = $props();
</script>

<section id="waarde-levering" class="container value">
    <SectionTitle {subtitle} h2={title} />

    <dl>
        {#each values as value}
            <dt>{value.title}</dt>
            <dd>{value.description}</dd>
        {/each}
    </dl>

    <picture>
        <source srcset="/images/dashboard.avif" type="image/avif" />
        <source srcset="/images/dashboard.webp" type="image/webp" />
        <img
            src="/images/dashboard.png"
            alt={imageAlt}
            width="1200"
            height="800"
            loading="lazy"
        />
    </picture>
</section>

<style>
    .value {
        /* padding: 2rem 1.5rem 0 1.5rem; */
        /* width: 100%; */
        /* margin: auto; */
        display: grid;
        justify-self: center;
        width: 100%;

        @media (width > 1250px) {
            padding-inline: 0;
        }

        dl {
            padding-block: 1rem;

            @media (width > 890px) {
                display: grid;
                grid-template-columns: 1fr max-content;
            }

            dt {
                font-weight: 600;

                @media (width > 890px) {
                    border-bottom: var(--border-usp);
                    margin-block: 0.5rem 1rem;
                    padding-bottom: 0.5rem;
                }
            }

            dd {
                color: var(--text-color-higlight);
                margin-block: 0.5rem 1rem;
                padding-bottom: 0.5rem;

                border-bottom: var(--border-usp);
            }
        }

        picture {
            max-height: 30rem;
            width: 100%;
            overflow: hidden;

            filter: var(--filter-shadow-card);
            border-radius: 1rem 1rem 0 0;

            /* Responsive, no CLS */
            img {
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
</style>
