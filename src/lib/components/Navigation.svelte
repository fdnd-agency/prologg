<script>
    import fullLogo from '$lib/assets/full-logo.svg';
    import closeIcon from '$lib/assets/close-icon.svg';
    import hamburgerMenuIcon from '$lib/assets/hamburger-menu-icon.svg'
    import Button from '$lib/components/Button.svelte'

    const navLinks = [
        { label: 'Wat het is', href: '#wat-het-is' },
        { label: 'Waarom Prologg', href: '#waarom-prologg' },
        { label: 'Hoe het werkt', href: '#hoe-het-werkt' },
        { label: 'Partners', href: '#partners' },
    ];
</script>

<header class="nav-bar">
    <div class="logo">
    	<a class="logo-link" href="/">
            <img src={fullLogo} alt="Prologg logo" width="100" height="70">
        </a>

        <div class="mobile-menu">
            <Button href="#" classes="nav mobile-cta" content="Vraag demo aan"/>
            <button type="button" class="hamburger-menu">
                <img src={hamburgerMenuIcon} alt="Open menu">
            </button>
        </div>

        <nav class="main-nav">
            <div class="mobile-menu-top">
                <div class="language-switch">
                    <button type="button">NL</button>
                    <button type="button">EN</button>
                </div>
                <button type="button" class="close-button">
                    <img src={closeIcon} alt="Sluit menu"/>
                </button>
            </div>

            {#each navLinks as link}
                <a href={link.href}>{link.label}</a>
            {/each}

            <div class="language-switch-desktop">
                <button type="button">NL</button>
                <button type="button">EN</button>
            </div>

            <Button href="#" classes="nav" content="Vraag demo aan"/>
        </nav>
    </div>
</header>

<style>

</style>