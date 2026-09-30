<script>
</script>

<section>
    <div class="svg-wrapper">
        <svg
            width="19"
            height="22"
            viewBox="0 0 19 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5 7H11V5C11 4.16667 10.7083 3.45833 10.125 2.875C9.54167 2.29167 8.83333 2 8 2C7.16667 2 6.45833 2.29167 5.875 2.875C5.29167 3.45833 5 4.16667 5 5V7ZM8.25 21H2C1.45 21 0.979167 20.8042 0.5875 20.4125C0.195833 20.0208 0 19.55 0 19V9C0 8.45 0.195833 7.97917 0.5875 7.5875C0.979167 7.19583 1.45 7 2 7H3V5C3 3.61667 3.4875 2.4375 4.4625 1.4625C5.4375 0.4875 6.61667 0 8 0C9.38333 0 10.5625 0.4875 11.5375 1.4625C12.5125 2.4375 13 3.61667 13 5V7H14C14.55 7 15.0208 7.19583 15.4125 7.5875C15.8042 7.97917 16 8.45 16 9V10.3C15.7 10.2 15.3875 10.125 15.0625 10.075C14.7375 10.025 14.3833 10 14 10V9H2V19H7.3C7.43333 19.4 7.56667 19.7458 7.7 20.0375C7.83333 20.3292 8.01667 20.65 8.25 21ZM14 22C12.6167 22 11.4375 21.5125 10.4625 20.5375C9.4875 19.5625 9 18.3833 9 17C9 15.6167 9.4875 14.4375 10.4625 13.4625C11.4375 12.4875 12.6167 12 14 12C15.3833 12 16.5625 12.4875 17.5375 13.4625C18.5125 14.4375 19 15.6167 19 17C19 18.3833 18.5125 19.5625 17.5375 20.5375C16.5625 21.5125 15.3833 22 14 22ZM15.65 19.35L16.35 18.65L14.5 16.8V14H13.5V17.2L15.65 19.35ZM2 9C2 9 2 9.49167 2 10.475C2 11.4583 2 12.5542 2 13.7625C2 14.9708 2 16.1083 2 17.175C2 18.2417 2 18.85 2 19V9Z"
                fill="#A93629"
            />
        </svg>
    </div>

    <div>
        <div class="wrapper">
            <h4>Open source fundament</h4>
            <div class="deco-dot"></div>
            <p class="sub-title">Geauditeerd</p>
        </div>
        <p>
            <span>Gebouwd op GlobaLeaks:</span> de beproefde open source standaard
            voor vertrouwelijke en cryptografisch beveiligde data-overdracht, onafhankelijk
            geauditeerd.
        </p>
    </div>
</section>

<style>
    section {
        font-family: Space-Grotesk, "Times New Roman", Times, serif;
        grid-column: span 2;
        max-width: max-content;
        place-self: center;

        margin: 0.5rem;
        padding: 1rem;
        border-radius: 16px;
        background-color: var(--background-color-primary);

        @media (width > 486px) {
            display: grid;
            grid-template-columns: max-content 1fr;
            align-items: center;
            gap: 1rem;
        }

        .svg-wrapper {
            height: 2.5rem;
            width: 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            background-color: var(--background-color-secondary);
            svg {
            }
        }

        .wrapper {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-block: 0.5rem;

            .deco-dot {
                width: 3px;
                height: 3px;
                border-radius: 50%;
                background-color: var(--background-color-accent);
            }

            .sub-title {
                font-family: Space-Grotesk, "Times New Roman", Times, serif;
            }
        }

        p {
            font-family: Inter, Arial, Helvetica, sans-serif;
            color: var(--text-color-accent);
            max-width: 50rem;

            span {
                font-family: Space-Grotesk, "Times New Roman", Times, serif;
                font-weight: bold;
                color: var(--text-color-primary);
            }
        }
    }
</style>
