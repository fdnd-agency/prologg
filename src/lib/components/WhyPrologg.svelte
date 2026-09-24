<script>
    import lawIcon from '$lib/assets/law-icon.svg'
    import shieldIcon from '$lib/assets/shield-icon.svg'
</script>

<section id="waarom-prologg">
    <div class="flex-icon label">
        <img src={lawIcon} alt="" width="20" height="20"/>
        <h2>De realiteit in recht</h2>
    </div>

    <p>"Zonder verifieerbaar bewijs geen zaak. Slachtoffers verliezen hun stem wanneer foto's, locaties en werkuren niet forensisch zijn vastgelegd."</p>
    
    <hr/>

    <div>
        <img src={shieldIcon} alt="" width="20" height="20"/>
        <p>In de praktijk strandt vervolging of civiele vordering vaak op betwisting van screenshots en losse WhatsApp-berichten. Prologg borgt de bewijsketen direct vanaf het eerste moment met cryptografische zekerheid.</p>
    </div>
</section>

<style>
    section {
        background-color: #FFFFFF;
        color: #46464F;
        padding: 30px 22px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;   
        margin: 0;
        max-width: 600px;
        border-radius: 12px;
    }

    .flex-icon {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .label {
        margin-bottom: 20px;
        font-weight: 600;
    }

    .label h2 {
        font-size: 13px;
        text-transform: uppercase;
        color: #A93629;
    }

    hr {
        width: 100%;
        max-width: 480px;
        border: .5px solid #E4EFFC;
        margin: 13px;
    }

    @media (width >=768px) {
        section {
            border-radius: 12px;
            max-width: 600px;
            justify-self: center;
        }
    }

</style>