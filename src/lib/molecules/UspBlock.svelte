<script>
    let { count, subTitle, title, text } = $props();
</script>

<article>
    <div class="count-circle">{count}</div>
    <section>
        <div class="wrapper">
            <p class="sub-title">{subTitle}</p>
        </div>
        <h3>{title}</h3>
        <p>
            {text}
        </p>
    </section>
</article>

<style>
    .count-circle {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        font-family: var(--font-heading);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--alert-color);
        color: var(--text-color-secondary);
    }

    article {
        margin: 1rem 0.5rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: var(--color-background-card);
        border-radius: 16px;
        max-width: 100%;
        filter: var(--filter-shadow-card);

        @media(prefers-color-scheme: dark) {
            background-color: var(--color-background-card-alt);
        }

        @media (width > 486px) {
            display: grid;
            grid-template-columns: min-content 1fr;
            gap: 2rem;
            margin: 1.5rem 0.5rem;

            padding: 2.5rem 2rem;
        }
        h3,
        p {
            font-family: var(--font-heading);
        }

        h3 {
            max-width: 45rem;
        }

        p {
            color: var(--text-color-highlight);
            max-width: 40rem;
        }

        .wrapper {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            .sub-title {
                color: var(--alert-color);
            }
        }

        section {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
            padding: 0;
            h3 {
                font-size: clamp(1.5rem, 1.2955rem + 0.9091vw, 2rem);
                line-height: 0.95;
            }
        }
    }
</style>
