<script>
  import Step from "../UI/Step.svelte";

  export let processData;

</script>

<section class="process">

  <div class="main-grid">

    <h2 class="u: text-center | process--heading">Process</h2>

    {#each processData as { text, colorClass, image }, i (i)}
      <Step text={`Step ${i + 1}`} stepNumber={i + 1} />
      <div class="flex-grid process--step process--grid">

        {#if (i + 1) % 2 !== 0}
          <div class="step-bubble-l bubble-white">
            {#each text as p}
              <p class="process--para">{p}</p>
            {/each}
          </div>
          <div class="step-bubble-r {colorClass}">
            <img src={`/${image}.png`} class="process--image" alt="">
          </div>

        {:else }
          <div class="step-bubble-l {colorClass}">
            <img src={`/${image}.png`} class="process--image" alt="">
          </div>
          <div class="step-bubble-r bubble-white">
            {#each text as p}
              <p class="process--para">{p}</p>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>


<style lang="scss">

  .process {
    background: linear-gradient(180deg, rgba(223, 223, 221, 0.3) 0%, rgba(62, 63, 62, 0.3) 25%, rgba(208, 209, 208, 0.3) 100%);
  }

  .process--heading {
    grid-column: 2 / -2;
  }

</style>