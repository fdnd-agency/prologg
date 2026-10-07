<script>
    import Button from "$lib/components/Button.svelte";
</script>

<section class="demo-section">
    <div class="demo-content">
        <p class="demo-label">BEVEILIGDE BEWIJSLUIS</p>

        <h2>Versterk uw dossiers met betrouwbaar bewijs.</h2>

        <p class="demo-description">
            Plan een compacte demonstratie van Prologg voor uw kantoor of
            praktijkgroep.
        </p>

        <Button
            href="mailto:frank.kloos@fonetic.studio"
            classes="footer demo-contact"
            content="frank.kloos@fonetic.studio"
        />

        <p class="demo-note">
            Prologg for Legal · Forensische Keten van Bewijs · Ontwikkeld voor
            gespecialiseerde rechtspraktijken
        </p>
    </div>
</section>

<style>
    .demo-section {
        background-color: var(--background-color-accent);
        color: var(--text-color-secondary);
        font-family: var(--font-heading), sans-serif;

        @media (prefers-color-scheme: dark) {
            background-color: var(--background-color-secondary);
        }
    }

    .demo-content {
        max-width: 900px;
        margin-inline: auto;
        padding: 72px 24px 56px;
        text-align: center;
    }

    .demo-label {
        margin: 0 0 24px;
        color: var(--alert-color);
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.12em;
    }

    h2 {
        max-width: 700px;
        margin-inline: auto;
        font-size: clamp(32px, 8vw, 48px);
        line-height: 1.15;
        text-wrap: balance;

        @media (prefers-color-scheme: dark) {
            color: var(--text-color-primary);
        }
    }

    .demo-description {
        max-width: 600px;
        margin: 24px auto 0;
        color: var(--text-color-secondary);
        font-size: 16px;
        line-height: 1.6;

        @media (prefers-color-scheme: dark) {
            color: var(--text-color-primary);
        }
    }

    .demo-note {
        --text-color-accent: hsl(240 6% 59%);
        margin: 40px 0 0;
        color: var(--text-color-accent);
        font-size: 16px;
        line-height: 1.6;
    }

    @media (min-width: 700px) {
        .demo-content {
            padding-block: 100px 80px;
        }

        .demo-description {
            margin-top: 28px;
            font-size: 18px;
        }
    }
</style>
