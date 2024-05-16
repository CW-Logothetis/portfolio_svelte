<script>
  import StepCounter from "../UI/StepCounter.svelte";
  import StepContent from "../UI/StepContent.svelte";
  export let data;

</script>

<section class="e: process">
  <div class="c: main-grid">
    <h2 class="u: text-center | e: process--heading">{data.sectionHeader}</h2>

    {#each data.steps as { text, colorClass, image, alt }, stepIndex (stepIndex)}
      <StepCounter text={`Step ${stepIndex + 1}`} />
      <div class="c: process--step">
        <StepContent {text} {colorClass} {image} {alt} isOddStep={(stepIndex + 1) % 2 !== 0} />
      </div>
    {/each}
  </div>
</section>


<style lang="scss">

  .process {
    background: linear-gradient(180deg, rgba(223, 223, 221, 0.3) 0%, rgba(208, 209, 208, 0.1) 100%);
  }

  .process--heading {
    grid-column: 2 / -2;
  }

</style>