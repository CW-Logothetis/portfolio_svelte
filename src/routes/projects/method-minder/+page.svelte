<script>
    import Intro from "$lib/components/projectPage/Intro.svelte";
    import Hero from "$lib/components/projectPage/Hero.svelte";
    import StepData from "$lib/components/projectPage/StepData.svelte";
    import { introData, heroImage, processData } from "$lib/pageText/projects/methodMinder";
    import "$lib/scss/global.scss";
</script>

<div class="flow">
    <Intro {introData} />
    <Hero {heroImage}/>
    <StepData data = {processData}/>
</div>