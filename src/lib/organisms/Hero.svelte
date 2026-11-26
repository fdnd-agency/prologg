<script>
    import Button from "$lib/atoms/Button.svelte";

    let {
        title,
        description,
        imageWebpFallback,
        imageWebp,
        imageAvif,
        imageAlt,
        buttons = [],
    } = $props();
</script>

<section class="hero">
    <div class="container hero-wrapper">
        <div class="hero-info-wrapper">
            <h1>{title}</h1>
            <div>
                <p>
                    {description}
                </p>
                <div class="button-wrapper">
                    {#each buttons as button}
                        <Button
                            href={button.href}
                            classes={button.variant}
                            content={button.content}
                        />
                    {/each}
                </div>
            </div>
        </div>
        <picture>
            <source
                srcset={imageAvif}
                type="image/avif"
                sizes="(max-width: 600px) 400px, 700px"
            />
            <source
                srcset={imageWebp}
                type="image/webp"
                sizes="(max-width: 600px) 400px, 700px"
            />
            <img
                src={imageWebpFallback}
                alt={imageAlt}
                width="710"
                height="568"
                fetchpriority="high"
            />
        </picture>
    </div>
</section>

<style>
    .hero {
        background-color: var(--background-color-secondary);
        width: 100%;
        display: grid;
    }
    .hero-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: center;
        gap: 1rem;
        overflow-y: hidden;

        @media (width > 709px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 275px);
        }

        @media (width > 1023px) {
            margin-top: var(--space-xxl);
            padding-block: var(--space-xl);
        }
    }

    .hero-info-wrapper {
        grid-row: span 2;
        height: 100%;
        padding-block: var(--space-md);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (width > 709px) {
        }
    }

    h1,
    p {
        max-width: 50rem;
        text-align: center;
        color: var(--text-color-big);

        @media (width > 709px) {
            text-align: left;
        }
    }

    h1 {
        font-family: var(--font-heading);
        font-size: clamp(2rem, 0rem + 8vw, 3rem);
        line-height: 0.9;
        text-wrap: balance;
        max-width: 64rem;
    }
    p {
        color: inherit;
        font-size: var(--font-size-body);
        font-weight: 400;
        margin-block: var(--space-md);
    }
    .button-wrapper {
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        align-self: center;
        margin-bottom: var(--space-md);

        @media (width > 709px) {
            justify-content: start;
        }
    }

    picture {
        overflow: hidden;
        border-radius: 12px;
        width: 100%;
        height: 100%;

        @media (width > 709px) {
            grid-row: span 2;
        }
        img {
            width: 100%;
            height: auto;
            border-radius: 12px;

            @media (width > 709px) {
                grid-row: span 2;
                width: auto;
                height: 100%;
            }
        }
    }
</style>
