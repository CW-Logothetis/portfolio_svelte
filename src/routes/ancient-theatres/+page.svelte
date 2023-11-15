<script>
  import Bugs from "$lib/components/ancient-theatres/Bugs.svelte";
  import Hero from "$lib/components/ancient-theatres/Hero.svelte";
  import Intro from "$lib/components/ancient-theatres/Intro.svelte";
  import Process from "$lib/components/ancient-theatres/Process.svelte";
  import NextSteps from "$lib/components/ancient-theatres/NextSteps.svelte";
  import { introData } from "$lib/page-text/ancient-theatres.js";
  import "$lib/scss/global.scss";


</script>

<div class="flow">
  <Intro {introData} />
  <Hero />
  <Process />
  <Bugs />
  <NextSteps />
</div>