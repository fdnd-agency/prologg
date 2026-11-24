<script>
    // `initial` repopulates the boxes after a failed submit (array or string)
    let { initial = [], length = 16, groupSize = 4 } = $props();

    let boxes = $state([]);
    const groups = length / groupSize;

    // Everything below is optional polish: it only runs when JS is available
    $effect(() => (boxes.find((b) => !b.value) ?? boxes[0])?.focus());

    function focusBox(i) {
        boxes[Math.max(0, Math.min(i, length - 1))]?.focus();
    }

    function handleInput(event, i) {
        const digit = event.target.value.replace(/\D/g, "").slice(-1);
        event.target.value = digit;
        if (digit) focusBox(i + 1);
    }

    function handleKeydown(event, i) {
        if (event.key === "Backspace" && !event.target.value && i > 0) {
            event.preventDefault();
            boxes[i - 1].value = "";
            focusBox(i - 1);
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            focusBox(i - 1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            focusBox(i + 1);
        }
    }

    function handlePaste(event, i) {
        event.preventDefault();
        const pasted = event.clipboardData.getData("text").replace(/\D/g, "");
        for (let k = 0; k < pasted.length && i + k < length; k++) {
            boxes[i + k].value = pasted[k];
        }
        focusBox(i + pasted.length);
    }
</script>

<div class="boxes">
    {#each Array(groups) as _, g}
        <div class="group">
            {#each Array(groupSize) as _, k}
                {@const i = g * groupSize + k}
                <input
                    bind:this={boxes[i]}
                    name="digit"
                    value={initial[i] ?? ""}
                    required
                    maxlength="1"
                    pattern="[0-9]"
                    inputmode="numeric"
                    autocomplete="off"
                    title="Enter a single digit (0-9)"
                    aria-label="Digit {i + 1} of {length}"
                    onfocus={(e) => e.target.select()}
                    oninput={(e) => handleInput(e, i)}
                    onkeydown={(e) => handleKeydown(e, i)}
                    onpaste={(e) => handlePaste(e, i)}
                />
            {/each}
        </div>
    {/each}
</div>

<style>
    .boxes {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }
    .group {
        display: flex;
        gap: 0.25rem;
    }
    input {
        width: 2rem;
        height: 2.6rem;
        text-align: center;
        font-size: 1.25rem;
        border: 1px solid #aaa;
        border-radius: 6px;
    }
    input:focus {
        outline: 2px solid #ff3e00;
        border-color: transparent;
    }
</style>
