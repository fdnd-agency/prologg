<script>
    import { enhance } from "$app/forms";
    import DigitBoxes from "#lib/components/atoms/DigitBoxes.svelte";

    let { form } = $props();
    let hasJs = $state(false);

    $effect(() => {
        hasJs = true;
    });
</script>

<h1>Log in</h1>

<form method="POST" use:enhance class:ready={hasJs}>
    {#if hasJs}
        <fieldset style="border: none; padding: 0">
            <legend>16-digit number</legend>
            <DigitBoxes initial={form?.number ?? ""} />
        </fieldset>
    {:else}
        <label>
            16-digit number
            <input
                name="number"
                value={form?.number ?? ""}
                inputmode="numeric"
                maxlength="16"
                pattern={"[0-9]{16}"}
                title="Exactly 16 digits"
                autocomplete="off"
                required
            />
        </label>
    {/if}

    <button type="submit">Log in</button>

    {#if form?.error}
        <p style="color: red">{form.error}</p>
    {/if}
</form>

<style>
    @keyframes reveal {
        to {
            visibility: visible;
        }
    }

    :global(html.js) form:not(.ready) {
        visibility: hidden;
        animation: reveal 0s 2s forwards;
    }
</style>
