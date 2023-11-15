<script>
  export let introPara, introTitle, techStack
</script>

<section id="introduction">

  <div class="center stack-intro" style="--center-max-inline-size: 70ch">
    <h1 class="intro--title">
      {introTitle}
    </h1>
    <div class="intro--para">
      {#each introPara as para }
        <p>{para}</p>
      {/each}
    </div>
  </div>

  <div
    class="intro-container center"
    style="--center-max-inline-size: 70ch"
  >
    {#each techStack as { title, description }}
      <div class="line">
        <div class="title">{title}</div>
        <div class="description">{@html description}</div>
      </div>
    {/each}
  </div>


</section>

<style lang="scss">
  .stack-intro > * + * {
    margin-block-start: 1.5rem;
  }

  .intro--title {
    padding: 0;
    font-size: var(--step-4);
    text-shadow: none;
    text-align: center;
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