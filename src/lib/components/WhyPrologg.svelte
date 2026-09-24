<script>
    import lawIcon from '$lib/assets/law-icon.svg'
    import shieldIcon from '$lib/assets/shield-icon.svg'
</script>

<section id="waarom-prologg">
    <div class="flex-icon label">
        <img src={lawIcon} alt="" width="20" height="20"/>
        <h2>De realiteit in recht</h2>
    </div>

    <p class="quote">"Zonder verifieerbaar bewijs geen zaak. Slachtoffers verliezen hun stem wanneer foto's, locaties en werkuren niet forensisch zijn vastgelegd."</p>
    
    <hr/>

    <div class="info">
        <img src={shieldIcon} alt="" width="17" height="17"/>
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

    h2 {
        font-size: 10px;
        text-transform: uppercase;
        color: #A93629;
        word-spacing: 4px;
        letter-spacing: 1px;
    }

    .quote {
        font-size: 20px;
        font-weight: 600;
        line-height: 1.4;
        color: #000000;
        padding: 0 10px;
    }

    hr {
        width: 100%;
        max-width: 480px;
        border: .5px solid #E4EFFC;
        margin: 13px;
    }

    .info {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        max-width: 480px;
        text-align: left;
        gap: 10px;

        img {
            margin-top: 1.5px;
        }

        p {
            font-size: 14px;
            line-height: 1.5;
            margin: 0;
        }
    }

    @media (width >=768px) {
        section {
            border-radius: 12px;
            max-width: 580px;
            justify-self: center;
            text-align: start;
        }

        .flex-icon {
            align-self: flex-start;
        }

        hr {
            max-width: 580px;
        }

        .info {
            max-width: 580px;
        }
    }

    @media (width >=1024px) {
        section {
            max-width: 900px;
        }

        .info {
            max-width: 800px;
            text-align: center;
        }
    }
</style>