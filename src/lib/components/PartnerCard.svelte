<script>
    let { label, icon, text } = $props()
</script>

<article>
    <img src={icon} alt=""/>
    <h3>{label}</h3>
    <p>{text}</p>
</article>


<style>
    article {
        background-color: var(--white);
        width: 282.66px;
        height: 175px;
        font-size: 16px;
        padding: 32px 46px;
        border-radius: 16px;
    }
    
</style>