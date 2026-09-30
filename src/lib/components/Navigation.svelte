<script>
    import fullLogo from '$lib/assets/full-logo.svg';
    import closeIcon from '$lib/assets/close-icon.svg';
    import { Hamburger } from 'svelte-hamburgers';
    import Button from '$lib/components/Button.svelte'

    let mobileMenuOpen = $state(false);

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
            <img src={fullLogo} alt="Prologg logo" width="100" height="70" fetchpriority="high">
        </a>

        <div class="mobile-menu">
            <Button href="#" classes="nav" content="Vraag demo aan"/>
            <Hamburger bind:open={mobileMenuOpen} type="collapse" title="Open menu" --padding="22px" />
        </div>

        <nav class="main-nav" class:open={mobileMenuOpen}>
            <div class="mobile-menu-top">
                <div class="language-switch">
                    <button type="button" class="active">NL</button>
                    <button type="button">EN</button>
                </div>
                <button type="button" class="close-button" onclick={closeMenu}>
                    <img src={closeIcon} alt="Sluit menu"/>
                </button>
            </div>

            {#each navLinks as link}
                <a href={link.href} onclick={closeMenu} class="nav-link">{link.label}</a>
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
        background-color: var(--background-color-primary);

        a {
            text-decoration: none;
            color: var(--text-color-accent);
        }
    }

    button {
        border: none;
        background-color: transparent;
    }

    .logo {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .logo-link {
            place-items: center;
            padding-left: 10px;
        }
    }

    .mobile-menu {
        display: flex;
        place-items: center;
    }

    .language-switch-desktop {
        display: none;
    }

    .main-nav {
        display: none;
        flex-direction: column;
        position: fixed;
        inset: 0;
        z-index: 10;

        .nav-link {
            transition: .1s ease-in-out;

            &:hover {
                text-decoration: underline;
                color: var(--text-color-primary);

                @media (prefers-reduced-motion: no-preference) {
                    scale: 1.1; 
                }
            }

            &:focus-visible {
                outline-offset: 6px;
                outline: 2px solid var(--text-color-primary);
                border-radius: 5px;
            }
        }
    }

    .open {
        display: flex;
        align-items: center;
        background-color: var(--background-color-primary);
        padding: 30px;
        gap: 30px;
    }

    .mobile-menu-top {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: start;
        width: 100%;
    }

    .language-switch {
        grid-column: 2;
        padding: 5px;
        background-color: var(--text-color-primary);
        border-radius: 12px;
        display: flex;
        justify-content: center;

        button {
            color: var(--white);
            padding: 10px;
            border-radius: 4px;
            font-weight: 600;
            width: 35px;
            height: 24px;
            display: flex;
            align-items: center;

            &.active {
                background-color: var(--white);
                color: var(--text-color-primary);
            }
        }
    }

    .close-button {
        grid-column: 3;
        justify-self: end;
    }

    /* DESKTOP */

    @media (width >= 1024px) {
        .logo-link img {
            width: 176px;
            height: 80px;
        }

        .mobile-menu,
        .mobile-menu-top {
            display: none;
        }

        .main-nav {
            display: flex;
            flex-direction: row;
            align-items: center;
            position: static;
            z-index: auto;
            gap: 24px;
            padding: 20px;
        }

        .language-switch-desktop {
            display: flex;
        }
    }
</style>