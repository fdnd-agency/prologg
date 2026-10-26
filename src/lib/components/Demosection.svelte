<script>
    import Button from "$lib/components/Button.svelte";
    import Sectiontitle from "./Sectiontitle.svelte";

    let { subtitle, title, description, items = [] } = $props();
</script>

<section class="demo-section">
    <div class="demo-content">
        <h4 class="demo-label">{subtitle}</h4>
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
        color: var(--text-color-secondary);

        @media (prefers-color-scheme: dark) {
            color: var(--text-color-primary);
        }
    }

    .demo-description {
        color: var(--text-color-secondary);
        text-wrap: balance;
        font-weight: bold;

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
