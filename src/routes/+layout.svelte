<script>
	import favicon from "$lib/assets/favicon.svg";
	import Navigation from "$lib/components/Navigation.svelte";
	import Footer from "$lib/components/Footer.svelte";

	import { lang } from "$lib/lang.svelte.js";
	import { content } from "$lib/content.js";

	let { children } = $props();

	const c = $derived(content[lang.current]);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navigation {...c.navigation} />
{@render children()}
<Footer links={c.navigation.links} button={c.navigation.button} {...c.footer} />
