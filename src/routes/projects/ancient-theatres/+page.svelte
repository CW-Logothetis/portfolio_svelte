<script>
  import Bugs from "$lib/components/project-page/Bugs.svelte";
  import Hero from "$lib/components/project-page/Hero.svelte";
  import Intro from "$lib/components/project-page/Intro.svelte";
  import StepData from "$lib/components/project-page/StepData.svelte";
  import { introData, heroImage, processData, nextStepsData } from "$lib/pageText/ancient-theatres";
  import "$lib/scss/global.scss";


</script>

<div class="flow">
  <Intro {introData} />
  <Hero {heroImage} />
  <StepData data = {processData} />
  <Bugs />
  <StepData data = {nextStepsData} />
</div>