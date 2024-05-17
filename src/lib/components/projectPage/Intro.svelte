<script>
  export let introData
</script>

<section id="introduction">

  <div
      class="l: center | e: stack-intro"
      style="--center-max-inline-size: 70ch"
  >
    <h1 class="u: text-center | e: intro--title">
      {@html introData.title}
    </h1>
    {#if introData.subtitle}
      <h2 class="u: text-center text-step-3">
        {@html introData.subtitle}
      </h2>
    {/if}
    <div class="e: intro--para">
      {#each introData.para as para }
        <p>{para}</p>
      {/each}
    </div>
  </div>

  <div
    class="l: center | u: mbs-step-4 | e: intro-container"
    style="--center-max-inline-size: 70ch"
  >
    {#each introData.techStack as { title, description }}
      <div class="e: line">
        <div class="e: title">{title}</div>
        <div class="e: description">{@html description}</div>
      </div>
    {/each}
  </div>

</section>

<style lang="scss">
  .stack-intro > * + * {
    margin-block-start: 3rem;
  }

  .intro--title {
    padding: 0;
    text-shadow: none;
  }

  .intro--para p {
    margin: 0 0 1.5rem 0;
    padding: 0;
  }

  .intro-container {
    display: flex;
    flex-direction: column;
  }

  .line {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .title {
    font-weight: bold;
    flex: 1;
  }

  .description {
    flex: 4;
  }
</style>