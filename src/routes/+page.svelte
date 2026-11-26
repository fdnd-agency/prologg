<script>
    import Hero from "$lib/organisms/Hero.svelte";
    import Preview from "$lib/organisms/Preview.svelte";
    import DemoSection from "$lib/organisms/DemoSection.svelte";
    import WhyPrologg from "$lib/organisms/WhyPrologg.svelte";
    import PartnerSection from "$lib/organisms/PartnerSection.svelte";
    import Value from "$lib/organisms/Value.svelte";
    import GetInvolved from "$lib/organisms/GetInvolved.svelte";

    import { lang } from "$lib/lang.svelte.js";
    import { markdown } from "$lib/content.js";

    const content = $derived(markdown[lang.current]);
</script>

<main>
    <Hero {...content.hero} />
    <WhyPrologg {...content.why} />
    <Preview />
    <Value {...content.value} />
    <GetInvolved {...content.getInvolved} />
    <PartnerSection {...content.partners} />
    <DemoSection {...content.demo} />
</main>
