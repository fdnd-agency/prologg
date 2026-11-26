<script>
    import fullLogo from "$lib/assets/full-logo.svg";
    import fullLogoWhite from "$lib/assets/full-logo-white.svg";
    import closeIcon from "$lib/assets/close-icon.svg";
    import hamburgerIcon from "$lib/assets/hamburger.svg";
    import Button from "$lib/atoms/Button.svelte";
    import LanguageToggle from "$lib/atoms/LanguageToggle.svelte";

    function closeMenu() {
        document.getElementById("mobile-dialog")?.close();
    }

    let { button, links = [], openAlt, closeAlt, logoAlt } = $props();

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

    let nav;

    // Trap focus within the menu when open
    // AI assistance: https://claude.ai/share/60a1b1e7-aada-4eda-aa43-2d0d463dc064
    function menuKeydown(event) {
        if (event.key !== "Tab" || !nav.open) return;

        const focusable = [
            ...nav.querySelectorAll("a[href], button:not([disabled])"),
        ].filter((el) => el.getClientRects().length > 0);

        const first = focusable[0];
        const last = focusable.at(-1);

        // Move focus to the last element when pressing Shift+Tab on the first element.
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        }

        // Move focus to the first element when pressing Tab on the last element.
        if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
</script>

<header class:visible={isVisible} class="header">
    <div class="nav-bar">
        <a class="logo-link" href="/">
            <picture>
                <source
                    srcset={fullLogoWhite}
                    media="(prefers-color-scheme: dark)"
                />

                <img
                    src={fullLogo}
                    alt={logoAlt}
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
                command="show-modal"
                commandfor="mobile-dialog"
                class="hamburger"
                type="button"
            >
                <img src={hamburgerIcon} alt={openAlt} width="50" height="50" />
            </button>
        </div>

        <dialog
            class="mobile-dialog"
            id="mobile-dialog"
            bind:this={nav}
            onkeydown={menuKeydown}
        >
            <div class="mobile-menu-top">
                <button
                    type="button"
                    class="close-button"
                    commandfor="mobile-dialog"
                    command="close"
                    autofocus
                >
                    <img
                        src={closeIcon}
                        alt={closeAlt}
                        width="25"
                        height="25"
                    />
                </button>
            </div>

            <nav class="links-nav">
                {#each links as link}
                    <a href={link.href} onclick={closeMenu} class="nav-link"
                        >{link.content}
                        <div class="underline-deco"></div>
                    </a>
                {/each}

                <LanguageToggle />

                <Button
                    href="mailto:frank.kloos@fonetic.studio"
                    classes="nav"
                    content={button}
                />
            </nav>
        </dialog>

        <nav class="desktop-nav">
            {#each links as link}
                <a href={link.href} class="nav-link"
                    >{link.content}
                    <div class="underline-deco"></div>
                </a>
            {/each}

            <LanguageToggle />

            <Button
                href="mailto:frank.kloos@fonetic.studio"
                classes="nav"
                content={button}
            />
        </nav>
    </div>
</header>

<style>
    .header {
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

    .nav-bar {
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

    .mobile-dialog {
        margin: 0;
        border: none;
        width: 100%;
        height: 100%;
        max-width: none;
        max-height: none;
        padding: 30px;
        background-color: var(--background-color-primary);
        color: var(--color-text-primary);
    }

    .mobile-dialog[open] {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .links-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .nav-link {
        transition: 0.1s ease-in-out;

        .underline-deco {
            width: 0%;
            height: 1px;
            background-color: var(--text-color-primary);
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

        &:focus-visible {
            outline-offset: 6px;
            outline: 2px solid var(--text-color-primary);
            border-radius: 5px;
        }
    }

    .desktop-nav {
        display: none;
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

        .mobile-nav {
            display: none;
        }

        .desktop-nav {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: end;
            gap: 24px;
            padding: 20px;
            width: 100%;
        }

        .header {
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
