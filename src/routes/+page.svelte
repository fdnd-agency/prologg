<script>
    import Hero from "$lib/organisms/Hero.svelte";
    import Preview from "$lib/organisms/Preview.svelte";
    import DemoSection from "$lib/organisms/Demosection.svelte";
    import WhyPrologg from "$lib/organisms/WhyPrologg.svelte";
    import PartnerSection from "$lib/organisms/PartnerSection.svelte";
    import Value from "$lib/organisms/Value.svelte";
    import GetInvolved from "$lib/organisms/GetInvolved.svelte";

    import { lang } from "$lib/lang.svelte.js";
    import { content } from "$lib/content.js";

    const c = $derived(content[lang.current]);
</script>

<main>
    <Hero {...c.hero} />
    <WhyPrologg {...c.why} />
    <Preview />
    <Value {...c.value} />
    <GetInvolved {...c.getInvolved} />
    <PartnerSection {...c.partners} />
    <DemoSection {...c.demo} />
    <!-- <Footer /> -->
</main>

<style>
</style>
