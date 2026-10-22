<script>
    import Button from "$lib/components/Button.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Preview from "$lib/components/Preview.svelte";
    import DemoSection from "$lib/components/Demosection.svelte";
    import WhyPrologg from "$lib/components/WhyPrologg.svelte";
    import PartnerSection from "$lib/components/PartnerSection.svelte";

    import { getSection } from "$lib/content.js";

    const content = {
        hero: getSection("hero.md"),
        why: getSection("why.md"),
        partners: getSection("partners.md"),
        demo: getSection("demo.md"),
    };
</script>

<main>
    <Hero {...content.hero} />
    <WhyPrologg {...content.why} />
    <Preview />
    <PartnerSection {...content.partners} />
    <DemoSection {...content.demo} />
    <Footer />
</main>

<style>
</style>
