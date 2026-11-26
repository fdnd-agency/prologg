<script>
	import favicon from "$lib/assets/favicon.svg";
	import Navigation from "$lib/organisms/Navigation.svelte";
	import Footer from "$lib/organisms/Footer.svelte";
	import { onNavigate } from "$app/navigation";

	import { lang } from "$lib/lang.svelte.js";
	import { markdown } from "$lib/content.js";

	let { children } = $props();

	const content = $derived(markdown[lang.current]);

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head></svelte:head>

<Navigation {...content.navigation} />
{@render children()}
<Footer
	links={content.navigation.links}
	button={content.navigation.button}
	{...content.footer}
/>
