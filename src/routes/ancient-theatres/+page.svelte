<script>
  import Bugs from "$lib/components/project-page/Bugs.svelte";
  import Hero from "$lib/components/project-page/Hero.svelte";
  import Intro from "$lib/components/project-page/Intro.svelte";
  import Process from "$lib/components/project-page/Process.svelte";
  import NextSteps from "$lib/components/project-page/NextSteps.svelte";
  import { introData, heroImage, processData } from "$lib/page-text/ancient-theatres.js";
  import "$lib/scss/global.scss";


</script>

<div class="flow">
  <Intro {introData} />
  <Hero {heroImage} />
  <Process {processData} />
  <Bugs />
  <NextSteps />
</div>