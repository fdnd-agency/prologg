<script>
    import Button from "./Button.svelte";

    let { title, description, buttons = [] } = $props();
</script>

<section class="hero">
    <h1>{title}</h1>
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
</section>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        background-color: var(--background-color-secondary);

        @media (width > 709px) {
            gap: 3rem;
            padding-block: 4rem;
        }

        @media (width > 1023px) {
            padding-block: 10rem;
        }
    }

    h1,
    p {
        max-width: 50rem;
        text-align: center;
        color: var(--text-color-big);
    }
    
    h1 {
        font-family: var(--font-heading);
        font-size: clamp(2rem, 0rem + 8vw, 4.5rem);
        line-height: 0.9;
        text-wrap: balance;
        max-width: 64rem;
    }
    p {
        font-size: clamp(1rem, 0.8171rem + 0.9756vw, 1.25rem);
        font-weight: 300;
    }
    .button-wrapper {
        display: flex;
        flex-direction: row-reverse;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        align-self: center;
    }
</style>
