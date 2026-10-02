<script>
    let { label, icon, text } = $props()
</script>

<article>
    <img src={icon} alt="" width="24" height="24"/>
    <h3>{label}</h3>
    <p>{text}</p>
</article>


<style>
    article {
        background-color: var(--white);
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

    @media(width >= 425px) {
        article {
            max-width: 280px;
        }
    }
</style>