<script>
    import { goto } from "$app/navigation";

    const number = localStorage.getItem("loginNumber");

    function logout() {
        localStorage.removeItem("loginNumber");
        goto("/login");
    }
</script>

<h1>Welcome</h1>
<p>Logged in with: {number}</p>
<button onclick={logout}>Log out</button>
