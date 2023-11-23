<script>
    import Intro from "$lib/components/project-page/Intro.svelte";
    import Hero from "$lib/components/project-page/Hero.svelte";
    import { introData, heroImage } from "$lib/page-text/openai.js";
    import "$lib/scss/global.scss";
</script>

<div class="flow">
    <Intro {introData} />
    <Hero {heroImage}/>
<!--    <Process />-->
<!--    <Bugs />-->
<!--    <NextSteps />-->
</div>


<style lang="scss">

</style>