<script>
    import Button from "$lib/components/Button.svelte";
    import Sectiontitle from "./Sectiontitle.svelte";

    let { subtitle, title, description, items = [] } = $props();
</script>

<section class="demo-section">
    <div class="demo-content">
        <span class="demo-label">{subtitle}</span>
        <h2>{title}</h2>
        <p class="demo-description">
            {description}
        </p>
        <ol>
            {#each items as item}
                <li>{item.title}</li>
            {/each}
        </ol>

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
        background-color: var(--color-background-dark);
        color: var(--white);
        font-family: var(--font-heading), sans-serif;
    }

    .demo-content {
        max-width: 900px;
        margin-inline: auto;
        padding: 72px 24px 56px;
        text-align: center;

        ol {
            li {
                list-style: none;
            }
        }
    }

    h2 {
        max-width: 700px;
        margin-inline: auto;
        font-size: clamp(32px, 8vw, 48px);
        line-height: 1.15;
        text-wrap: balance;
    }

    .demo-label {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        color: var(--alert-color);
        font-weight: 500;
    }

    .demo-description {
        text-wrap: balance;
        font-weight: bold;
    }

    .demo-note {
        margin: 40px 0 0;
        color: var( --color-text-primary);
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
