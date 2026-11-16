<script>
    import Sectiontitle from "$lib/molecules/Sectiontitle.svelte";
    import Button from "$lib/atoms/Button.svelte";

    let { title, description, imageWebp, imageAvif, buttons = [] } = $props();
</script>

<section class="hero">
    <div class="hero-wrapper">
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
            <img src={imageWebp} alt="person logging using prologg webapp" />
        </picture>
    </div>
</section>

<style>
    .hero {
        background-color: var(--background-color-secondary);
        width: 100%;
    }
    .hero-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: center;
        gap: 1rem;
        overflow-y: hidden;
        max-width: var(--max-width);

        @media (width > 709px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 275px);
            padding-inline: var(--space-lg);
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
        font-size: clamp(1.5rem, 0rem + 8vw, 3rem);
        line-height: 0.9;
        text-wrap: balance;
        max-width: 64rem;
    }
    p {
        font-size: clamp(1rem, 0.8171rem + 0.9756vw, 1.25rem);
        font-weight: 300;
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
            border-radius: 12px;

            @media (width > 709px) {
                grid-row: span 2;
                width: unset;
                height: 100%;
            }
        }
    }
</style>
