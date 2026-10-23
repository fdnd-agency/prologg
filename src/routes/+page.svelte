<script>
    import Button from "$lib/components/Button.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Preview from "$lib/components/Preview.svelte";
    import DemoSection from "$lib/components/Demosection.svelte";
    import WhyPrologg from "$lib/components/WhyPrologg.svelte";
    import PartnerSection from "$lib/components/PartnerSection.svelte";
    import Value from "$lib/components/Value.svelte";

    import { getSection } from "$lib/content.js";
    import GetInvolved from "$lib/components/GetInvolved.svelte";

    const content = {
        hero: getSection("hero.md"),
        why: getSection("why.md"),
        getinvolved: getSection("get-involved.md"),
        partners: getSection("partners.md"),
        demo: getSection("demo.md"),
        value: getSection("value.md"),
    };
</script>

<main>
    <Hero {...content.hero} />
    <WhyPrologg {...content.why} />
    <Preview />
    <GetInvolved {...content.getinvolved} />
    <Value {...content.value} />
    <PartnerSection {...content.partners} />
    <DemoSection {...content.demo} />
    <!-- <Footer /> -->
</main>

<style>
</style>
