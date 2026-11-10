<script>
    import fullLogo from "$lib/assets/full-logo.svg";
    import fullLogoWhite from "$lib/assets/full-logo-white.svg";
    import closeIcon from "$lib/assets/close-icon.svg";
    import hamburgerIcon from "$lib/assets/hamburger.svg";
    import Button from "$lib/atoms/Button.svelte";
    import Languagetoggle from "$lib/atoms/Languagetoggle.svelte";

    let { button, links = [] } = $props();

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
            <picture>
                <source
                    srcset={fullLogoWhite}
                    media="(prefers-color-scheme: dark)"
                />

                <img
                    src={fullLogo}
                    alt="Prologg logo"
                    width="100"
                    height="70"
                    fetchpriority="high"
                />
            </picture>
        </a>

        <div class="mobile-nav">
            <Button
                href="mailto:frank.kloos@fonetic.studio"
                classes="nav"
                content={button}
            />
            <button
                popovertarget="mobilepopover"
                class="hamburger"
                type="button"
            >
                <img src={hamburgerIcon} alt="Open menu" width="50" height="50"/>
            </button>
        </div>

        <nav class="main-nav" id="mobilepopover" popover>
            <div class="mobile-menu-top">
                <button 
                    type="button"
                    class="close-button"
                    popovertarget="mobilepopover"
                    popovertargetaction="hide"
                >
                    <img src={closeIcon} alt="Sluit menu" width="25" height="25"/>
                </button>
            </div>

            {#each links as link}
                <a href={link.href} class="nav-link"
                    >{link.content}
                    <div class="underline-deco"></div>
                </a>
            {/each}

            <Languagetoggle />

            <Button
                href="mailto:frank.kloos@fonetic.studio"
                classes="nav"
                content={button}
            />
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
            color: var(--color-text-primary);
        }
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

    .mobile-nav {
        display: flex;
        place-items: center;
    }

    .hamburger img,
    .close-button img {
        @media (prefers-color-scheme: dark) {
            filter: brightness(0) invert(1);
        }
    }

    .main-nav {
        flex-direction: column;
        z-index: 10;
        margin: 0;
        border: none;
        width: 100%;
        height: 100%;
        color: var(--color-text-primary);

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
                scale: 1.02;

                @media (prefers-reduced-motion: no-preference) {
                    text-decoration: unset;

                    .underline-deco {
                        width: 100%;
                        transition: all 0.3s ease;
                        color: var(--text-color-primary);
                    }
                }
            }
        }

        &:focus-visible {
            outline-offset: 6px;
            outline: 2px solid var(--text-color-primary);
            border-radius: 5px;
        }
    }

    .main-nav:popover-open {
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

        .mobile-nav,
        .mobile-menu-top {
            display: none;
        }

        .main-nav,
        .main-nav:popover-open {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: end;
            position: static;
            gap: 24px;
            padding: 20px;
            width: 100%;
            background-color: transparent;
        }

        .nav-bar {
            position: fixed;
            right: 0;
            transform: translateY(-100%);

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
