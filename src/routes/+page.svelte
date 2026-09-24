<script>
    import Button from "$lib/components/Button.svelte";
</script>

<main>
    <section class="hero">
        <h1>Bewijsmateriaal dat standhoudt.</h1>
        <p>
            Prologg biedt een betrouwbare digitale bewijskluis voor advocaten en
            rechtshulpverleners in arbeidsuitbuiting, mensenhandel en kwetsbare
            arbeidsverhoudingen.
        </p>
        <div class="button-wrapper">
            <Button
                href="mailto:frank.kloos@fonetic.studio"
                classes="hero-primary"
                content="Vraag kantoordemo aan"
            />
            <Button
                href="#"
                classes="hero-secondary"
                content="Bekijk de casus"
            />
        </div>
    </section>
</main>

<!-- <Button
    href="mailto:frank.kloos@fonetic.studio"
    classes="nav"
    content="Vraag kantoordemo aan"
/>
<Button
    href="mailto:frank.kloos@fonetic.studio"
    classes="footer"
    content="frank.kloos@fonetic.studio"
/> -->

<style>
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;

        @media (width > 709px) {
            gap: 3rem;
            padding-block: 4rem;
        }
    }

    h1,
    p {
        max-width: 50rem;
        text-align: left;

        @media (width > 709px) {
            text-align: center;
        }
    }
    h1 {
        font-family: Space-Grotesk;
        font-size: clamp(2rem, 0rem + 8vw, 4.5rem);
        line-height: 0.9;
    }
    p {
        font-size: clamp(1rem, 0.8171rem + 0.9756vw, 1.25rem);
        font-weight: 300;
    }
    .button-wrapper {
        display: flex;
        gap: 1rem;
        align-self: start;
        flex-wrap: wrap;

        @media (width > 709px) {
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
            align-self: center;
        }
    }
</style>
