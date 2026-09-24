<script>
    let { href, classes, content } = $props();
</script>

<a {href} class={classes}>{content}</a>

<style>
    a {
        text-decoration: none;
        border-radius: 12px;
        padding: 16px 32px;
        display: flex;
        width: max-content;
        gap: 8px;
        font-size: 14px;

        &.nav,
        &.hero-primary {
            color: var(--text-color-secondary);
            background-color: var(--background-color-accent);
        }

        &.hero-primary {
            align-items: center;

            &::after {
                content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 12h16m-7-7l7 7l-7 7'/%3E%3C/svg%3E");
                transform: translateY(2px);
            }
        }

        &.hero-secondary {
            color: var(--text-color-primary);
            background-color: var(--background-color-tetriary);

            &::after {
                content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 12h16m-7-7l7 7l-7 7'/%3E%3C/svg%3E");
                transform: rotate(90deg) translateY(2px);
            }
        }

        &.nav {
            padding: 10px 16px;
            font-size: 12px;
        }

        &.footer {
            color: var(--text-color-primary);
            background-color: var(--background-color-lightest);

            &::after {
                content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m4 6l6.108 4.612l.002.002c.678.497 1.017.746 1.389.842a2 2 0 0 0 1.002 0c.372-.096.712-.345 1.392-.844c0 0 3.917-3.006 6.107-4.612M3 15.8V8.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v7.607c0 1.118 0 1.676-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H6.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C3 17.48 3 16.92 3 15.8'/%3E%3C/svg%3E");
            }
        }
    }
</style>
