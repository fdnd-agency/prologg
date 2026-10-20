<script>
    let { content } = $props();
</script>

<section class="preview-info">
    <!-- <h4>Oplossing in de praktijk</h4>
    <h2>Van incident naar onwrikbaar dossier</h2>
    <p>
        Een gecontroleerde bewijsketen van mobiele bronregistratie tot juridisch
        gereed kantoordossier.
    </p> -->

    {@html content}
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
