<script>
    // CODE VAN CLAUDE
    // https://claude.ai/share/56d1388d-35c2-4c56-8a58-8d992f9bcea0

    import { onMount } from "svelte";
    import { lang } from "$lib/lang.svelte.js";

    // restore saved choice after hydration (avoids a prerender mismatch)
    onMount(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "en" || saved === "nl") lang.current = saved;
    });

    // persist + update <html lang> whenever it changes
    $effect(() => {
        localStorage.setItem("lang", lang.current);
        document.documentElement.lang = lang.current;
    });
</script>

<label for="Language-toggle" class="visually-hidden">Switch language</label>
<input
    id="Language-toggle"
    type="checkbox"
    checked={lang.current === "en"}
    onchange={(e) => (lang.current = e.currentTarget.checked ? "en" : "nl")}
/>

<style>
    .visually-hidden {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    input {
        appearance: none;
        height: max-content;
        background-color: var(--white);
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;

        &::after {
            content: "EN";
            transition: all 0.3s ease;
            color: var(--text-color-primary);
            margin: 0.25rem;
            padding: 0.25rem;
            border-radius: 6px;
        }

        &::before {
            content: "NL";
            color: var(--background-color-dark);
            background-color: var(--background-color-primary);
            transition: all 0.3s ease;
            margin: 0.25rem;
            padding: 0.25rem;
            border-radius: 6px;
            font-weight: bold;
        }

        &:checked {
            &::after {
                background-color: var(--background-color-primary);
                color: var(--color-text-primary);
                transition: all 0.3s ease;
                font-weight: bold;
            }

            &::before {
                background-color: var(--white);
                color: var(--text-color-primary);
                transition: all 0.3s ease;
                font-weight: 400;
            }
        }
    }
</style>
