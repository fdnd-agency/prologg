<script>
    import Hero from "$lib/components/Hero.svelte";
    import Preview from "$lib/components/Preview.svelte";
    import DemoSection from "$lib/components/Demosection.svelte";
    import WhyPrologg from "$lib/components/WhyPrologg.svelte";
    import PartnerSection from "$lib/components/PartnerSection.svelte";
    import Value from "$lib/components/Value.svelte";
    import GetInvolved from "$lib/components/GetInvolved.svelte";

    import { lang } from "$lib/lang.svelte.js";
    import { content } from "$lib/content.js";

    const c = $derived(content[lang.current]);
</script>

<main>
    <Hero {...c.hero} />
    <WhyPrologg {...c.why} />
    <Preview />
    <Value {...content.value} />
    <GetInvolved {...content.getinvolved} />
    <PartnerSection {...content.partners} />
    <DemoSection {...content.demo} />
    <!-- <Footer /> -->
</main>

<style>
</style>
