<script>
    import { goto } from "$app/navigation";

    let number = $state("");
    let error = $state("");

    function handleSubmit(event) {
        event.preventDefault();
        const value = number.trim();

        if (!/^\d{16}$/.test(value)) {
            error = "Please enter exactly 16 digits (numbers only).";
            return;
        }

        localStorage.setItem("loginNumber", value);
        goto("/");
    }
</script>

<h1>Log in</h1>

<form onsubmit={handleSubmit}>
    <label>
        16-digit number
        <input
            bind:value={number}
            inputmode="numeric"
            maxlength="16"
            autocomplete="off"
        />
    </label>
    <button type="submit">Log in</button>

    {#if error}
        <p style="color: red">{error}</p>
    {/if}
</form>
