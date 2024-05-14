<script>
  import StepCounter from "../UI/StepCounter.svelte";
  export let data;

  // Helper function to determine Process content based on the step index
  // Note: as the content is static, @html is used, allowing for more readable markdown.
  // if it was dynamic, Svelte's {#if} ... {:else} in the markdown would allow easy reactivity.
  function getStepContent(text, colorClass, image, stepIndex) {
    const isOddStep = (stepIndex + 1) % 2 !== 0;
    if (isOddStep) {
      return `
        <div class="c: step-bubble-l 'bubble-white'">
           ${getParagraphs(text)}
        </div>
        <div class="c: step-bubble-r ${colorClass}">
           <img src="/${image}.png" class="process--image" alt="">
        </div>
    `;
    } else return `
        <div class="c: step-bubble-l ${colorClass}">
            <img src="/${image}.png" class="process--image" alt="">
        </div>
        <div class="c: step-bubble-r bubble-white">
            ${getParagraphs(text)}
        </div>
    `;
  }

  // Helper function to generate paragraphs
  function getParagraphs(text) {
    return text.map(p => `<p class="c: process--para">${p}</p>`).join('');
  }
</script>

<section class="e: process">
  <div class="c: main-grid">
    <h2 class="u: text-center | e: process--heading">{data.sectionHeader}</h2>

    {#each data.steps as { text, colorClass, image }, stepIndex (stepIndex)}
      <StepCounter text={`Step ${stepIndex + 1}`} />
      <div class="c: process--step">
        {@html getStepContent(text, colorClass, image, stepIndex)}
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