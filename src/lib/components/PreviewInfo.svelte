<script>
    let { subtitle, title, description } = $props();
</script>

<section class="preview-info">
    <h4>{subtitle}</h4>
    <h2>{title}</h2>
    <p>
        {description}
    </p>
</section>

<style>
    section {
        padding: 1rem;
        grid-column: span 2;

        @media (width > 890px) {
            padding: 1rem 1rem 1rem 3.5rem;
        }
    }

    p {
        color: var(--text-color-accent);

        @media (prefers-color-scheme: dark) {
            color: var(--text-color-primary);
        }
    }
</style>
