<script>
    import lawIcon from '$lib/assets/law-icon.svg'
    import shieldIcon from '$lib/assets/shield-icon.svg'
</script>

<section>
    <div class="flex-icon">
        <img src={lawIcon} alt="" width="25" height="25"/>
        <h2>De realiteit in recht</h2>
    </div>

    <p>"Zonder verifieerbaar bewijs geen zaak. Slachtoffers verliezen hun stem wanneer foto's, locaties en werkuren niet forensisch zijn vastgelegd."</p>
    
    <div class="flex-icon">
        <img src={shieldIcon} alt="" width="25" height="25"/>
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

        p {
            max-width: 500px;
            padding: 0 15px;
        }
    }

    .flex-icon {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    @media (width >=768px) {
        section {
            border-radius: 12px;
            max-width: 600px;
            justify-self: center;
        }
    }

</style>