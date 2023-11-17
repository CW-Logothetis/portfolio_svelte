<script>
    import Intro from "$lib/components/ancient-theatres/Intro.svelte";
    import { introData } from "$lib/page-text/openai.js";
    import "$lib/scss/global.scss";
</script>

<div class="flow">
    <Intro {introData} />
<!--    <Hero />-->
<!--    <Process />-->
<!--    <Bugs />-->
<!--    <NextSteps />-->
</div>


<style lang="scss">

</style>