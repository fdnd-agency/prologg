<script>
    import fullLogo from "$lib/assets/full-logo.svg";
    import closeIcon from "$lib/assets/close-icon.svg";
    import { Hamburger } from "svelte-hamburgers";
    import Button from "$lib/components/Button.svelte";

    let mobileMenuOpen = $state(false);

    function closeMenu() {
        mobileMenuOpen = false;
    }

    const navLinks = [
        { label: "Wat het is", href: "#wat-het-is" },
        { label: "Waarom Prologg", href: "#waarom-prologg" },
        { label: "Hoe het werkt", href: "#hoe-het-werkt" },
        { label: "Partners", href: "#partners" },
    ];

    let isVisible = $state(true);

    let lastScrollY = 0;
    let ticking = false;

    $effect(() => {
        const handleScroll = () => {
            if (ticking) return;

            ticking = true;

            requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;

                // Always show the navbar at the top of the page
                if (currentScrollY <= 0) {
                    isVisible = true;
                }
                // Scrolling down
                else if (currentScrollY > lastScrollY) {
                    isVisible = false;
                }
                // Scrolling up
                else if (currentScrollY < lastScrollY) {
                    isVisible = true;
                }

                lastScrollY = currentScrollY;
                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<header class:visible={isVisible} class="nav-bar">
    <div class="logo">
        <a class="logo-link" href="/">
            <img
                src={fullLogo}
                alt="Prologg logo"
                width="100"
                height="70"
                fetchpriority="high"
            />
        </a>

        <div class="mobile-menu">
            <Button href="#" classes="nav" content="Vraag demo aan" />
            <Hamburger
                bind:open={mobileMenuOpen}
                type="collapse"
                title="Toggles menu"
                --padding="22px"
                --color="#030C16"
                --layer-width="20px"
                --layer-height="3px"
                --layer-spacing="3px"
            />
        </div>

        <nav class="main-nav" class:open={mobileMenuOpen}>
            <div class="mobile-menu-top">
                <button type="button" class="close-button" onclick={closeMenu}>
                    <img src={closeIcon} alt="Sluit menu" />
                </button>
            </div>

            {#each navLinks as link}
                <a href={link.href} onclick={closeMenu} class="nav-link"
                    >{link.label}
                    <div class="underline-deco"></div>
                </a>
            {/each}

            <Button href="#" classes="nav" content="Vraag demo aan" />
        </nav>
    </div>
</header>

<style>
    .nav-bar {
        width: 100%;
        background-color: var(--background-color-primary);
        position: sticky;
        top: 0;
        left: 0;
        z-index: 10;

        a {
            text-decoration: none;
            color: var(--text-color-primary);

            @media (prefers-color-scheme: dark) {
                color: var(--text-color-secondary);
            }
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

    .main-nav {
        display: none;
        flex-direction: column;
        position: fixed;
        inset: 0;
        z-index: 10;

        .nav-link {
            transition: 0.1s ease-in-out;

            .underline-deco {
                width: 0%;
                height: 1px;
                background-color: var(--background-color-accent);
                transition: all 0.3s ease;
            }

            &:hover {
                text-decoration: underline;
                color: var(--text-color-primary);
                scale: 1.02;

                @media (prefers-reduced-motion: no-preference) {
                    text-decoration: unset;

                    .underline-deco {
                        width: 100%;
                        transition: all 0.3s ease;
                    }
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
        z-index: 10;
    }

    .mobile-menu-top {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: start;
        width: 100%;
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

        .nav-bar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            transform: translateY(-100%);
            z-index: 10;

            @media (prefers-reduced-motion: no-preference) {
                transition: all 0.5s ease;
            }
        }
        .visible {
            transform: translateY(0);

            @media (prefers-reduced-motion: no-preference) {
                transition: all 0.5s ease;
            }
        }
    }
</style>
