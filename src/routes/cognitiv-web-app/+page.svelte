<script>
    import Intro from "$lib/components/project-page/Intro.svelte";
    import Hero from "$lib/components/project-page/Hero.svelte";
    import StepData from "$lib/components/project-page/StepData.svelte";
    import { introData, heroImage, processData, nextStepsData } from "$lib/pageText/cognitiv_web-app.js";
    import "$lib/scss/global.scss";
</script>

<div class="flow">
    <Intro {introData} />
    <Hero {heroImage}/>
    <StepData data = {processData}/>
    <StepData data = {nextStepsData}/>
<!--    <Bugs />-->
<!--    <NextSteps />-->
</div>