<script>
    let { count, subTitle, title, text } = $props();
</script>

<article>
    <div class="count-circle">{count}</div>
    <section>
        <div class="wrapper">
            <h4>Fase {count}</h4>
            <div class="deco-dot"></div>
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
        font-family: Space-Grotesk, "Times New Roman", Times, serif;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--background-color-accent);
        color: var(--text-color-secondary);
    }

    article {
        margin: 0.5rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: var(--background-color-secondary);
        border-radius: 16px;
        max-width: max-content;
        filter: drop-shadow(0px 0px 15px #e7e7e764);

        @media (width > 486px) {
            display: grid;
            grid-template-columns: min-content 1fr;
            gap: 2rem;
            margin: 1.5rem 0.5rem;

            padding: 2.5rem 2rem;
        }

        h4,
        h3,
        p {
            font-family: Space-Grotesk, "Times New Roman", Times, serif;
        }

        p {
            color: var(--text-color-accent);
            max-width: 40rem;
        }

        .wrapper {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            h4 {
                text-transform: uppercase;
                letter-spacing: 0.05rem;
                color: var(--alert-color);
            }

            .deco-dot {
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background-color: var(--background-color-accent);
            }
        }

        section {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;

            h3 {
                font-size: 1.75rem;
            }
        }
    }
</style>
