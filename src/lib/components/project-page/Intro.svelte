<script>
  export let introData
</script>

<section id="introduction">

  <div
      class="l: center | c: stack-intro"
      style="--center-max-inline-size: 70ch"
  >
    <h1 class="u: text-center | c: intro--title">
      {@html introData.title}
    </h1>
    {#if introData.subtitle}
      <h2 class="u: text-center text-step-3">
        {@html introData.subtitle}
      </h2>
    {/if}
    <div class="c: intro--para">
      {#each introData.para as para }
        <p>{para}</p>
      {/each}
    </div>
  </div>

  <div
    class="l: center | u: mbs-step-4 | c: intro-container"
    style="--center-max-inline-size: 70ch"
  >
    {#each introData.techStack as { title, description }}
      <div class="c: line">
        <div class="c: title">{title}</div>
        <div class="c: description">{@html description}</div>
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
    flex-direction: column; /* Adjust to make it a flex column */
  }

  .line {
    display: flex;
    align-items: center; /* Align items in the center of each row */
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