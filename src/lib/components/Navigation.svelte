<script>
    import fullLogo from '$lib/assets/full-logo.svg';
    import closeIcon from '$lib/assets/close-icon.svg';
    import hamburgerMenuIcon from '$lib/assets/hamburger-menu-icon.svg'
    import Button from '$lib/components/Button.svelte'

    let mobileMenuOpen = $state(false);

    function toggleMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    function closeMenu() {
        mobileMenuOpen = false;
    }

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
            <button type="button" class="hamburger-menu" onclick={toggleMenu}>
                <img src={hamburgerMenuIcon} alt="Open menu" width="50px" height="50px">
            </button>
        </div>

        <nav class="main-nav" class:open={mobileMenuOpen}>
            <div class="mobile-menu-top">
                <div class="language-switch">
                    <button type="button">NL</button>
                    <button type="button">EN</button>
                </div>
                <button type="button" class="close-button" onclick={closeMenu}>
                    <img src={closeIcon} alt="Sluit menu"/>
                </button>
            </div>

            {#each navLinks as link}
                <a href={link.href} onclick={closeMenu}>{link.label}</a>
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

    .nav-bar {
        width: 100%;
    }

    button {
        border: none;
        background-color: transparent;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .main-nav {
        display: flex;
        align-items: center;
        gap:24px;
    }

    .mobile-menu,
    .mobile-menu-top,
    .language-switch-desktop {
        display: none;
    }

    @media (width <= 768px) {
        .language-switch-desktop {
            display: none;
        }

        .mobile-menu {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .main-nav {
            display: none;
            flex-direction: column;
            position: fixed;
            inset: 0;
            z-index: 10;
        }

        .main-nav.open,
        .mobile-menu-top {
            display: flex;
            justify-content: space-around;
            background-color: #E4EFFC;
        }
    }

    @media (width >= 768px) {
        img:first-of-type {
            width: 176px;
            height: 80px;
        }
    }
</style>