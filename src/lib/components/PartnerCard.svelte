<script>
    let { label, icon, text } = $props();
</script>

<article>
    <span class="icon" style="--icon: url({icon})"></span>
    <h3>{label}</h3>
    <p>{text}</p>
</article>

<style>
    article {
        background-color: var(--color-background-card);
        width: 100%;
        max-width: 300px;
        padding: 1rem;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        text-align: center;
        gap: 1rem;
        line-height: 1.5;
        filter: var(--filter-shadow-card);
    }

    .icon {
        width: 24px;
        height: 24px;
        background-color: var(--alert-color);
        mask: var(--icon) center / contain no-repeat;
    }

    h3 {
        margin: 0;
        font-family: var(--font-heading);
        font-size: 1rem;
        font-weight: 700;
    }

    p {
        margin: 0;
        font-family: var(--font-mono);
        font-size: 0.75rem;
        line-height: 1.6;
    }

    @media (width >= 425px) {
        article {
            max-width: 280px;
        }
    }
</style>
