<script>
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
        // preview: getSection("preview.md"),
        // partners: getSection("partners.md"),
        // demo: getSection("demo.md"),
        // footer: getSection("footer.md"),
    };
</script>

<main>
    <Hero content={content.hero} />
    <WhyPrologg content={content.why} />
    <Preview />
    <PartnerSection />
    <DemoSection />
    <Footer />
</main>

<style>
</style>
