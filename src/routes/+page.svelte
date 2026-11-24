<script>
    import { enhance } from "$app/forms";

    let { data } = $props();
</script>

<h1>Welcome</h1>
<p>Logged in with: {data.number}</p>

<form method="POST" action="?/logout" use:enhance>
    <button type="submit">Log out</button>
</form>
