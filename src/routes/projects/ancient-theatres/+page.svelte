<script>
  import Bugs from "$lib/components/projectPage/Bugs.svelte";
  import Hero from "$lib/components/projectPage/Hero.svelte";
  import Intro from "$lib/components/projectPage/Intro.svelte";
  import StepData from "$lib/components/projectPage/StepData.svelte";
  import { introData, heroImage, processData, nextStepsData } from "$lib/pageText/projects/ancient-theatres";
  import "$lib/scss/global.scss";


</script>

<div class="flow">
  <Intro {introData} />
  <Hero {heroImage} />
  <StepData data = {processData} />
  <Bugs />
  <StepData data = {nextStepsData} />
</div>