<script>
	import favicon from "$lib/assets/favicon.svg";
	import Navigation from "$lib/components/Navigation.svelte";
	import Footer from "$lib/components/Footer.svelte";

	let { children } = $props();

	import { getSection } from "$lib/content.js";

	const content = {
		navigation: getSection("navigation.md"),
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navigation {...content.navigation} />
{@render children()}
<Footer />
