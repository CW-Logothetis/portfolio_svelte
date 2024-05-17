<!--TODO: Old home page component. Keep for future '/projects' page-->

<script>
  import { projectsText } from "$lib/pageText/homePage/projects";
</script>

<section
  id="projects"
  class="l: stack center | u: text-center | e: projects"
>
  <div class="l: center" style="--center-max-inline-size: 70ch">
    <h2>{projectsText.heading}</h2>
    <p>{projectsText.intro}</p>
  </div>

  <div class="flex-grid">
    {#each projectsText.projects as project (project)}
      <div class="u: | c: card bg {project.bg}">

        <img src={project.image} alt="{project.title}" class="u:">

        <div class="c: card__text">
          <h3 class="u: text-step-1">{project.title}</h3>
          <p>{project.description}</p>

          <div class="c: card__btm-row">
            <p><strong>{project.stack}</strong></p>
            <p class="u: mbs-zero w-600">
              <a class="u: color-hero-css" href={project.link}>READ MORE ></a>
            </p>
          </div>

        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">

  .flex-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    --threshold: 80ch;
  }

  .flex-grid > * {
    flex: 1 1 30ch;
    flex-basis: calc((var(--threshold) - 100%) * 999);
    max-width: 50ch;
  }

  .projects {
    display: flex;
    margin-block-end: 5rem;
  }

  .card {
    display: flex;
    flex-direction: column;
    margin: 4% 2%;
    padding: var(--step-3);
    border-radius: var(--radius-l);
    transition: transform .4s;

    img {
      // screenshots should be same dimension so that max-height isn't needed
      max-height: 200px;
      max-width: 350px;
      margin: 0 auto;
      border-radius: var(--radius-s);
    }
  }

  .card > * + * {
    margin-top: 3rem;
  }

  .card__text > * + * {
    margin-top: 1.5rem;
  }

  .card__btm-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .cognitiv {
    background: linear-gradient(220deg, rgba(61, 48, 143, 0.51) 0%, rgba(37, 75, 221, 0) 100%);
  }

  .openai {
      background: linear-gradient(220deg, rgba(130, 139, 175, 0.2) 0%, rgba(37, 75, 221, 0) 100%);
  }

  .theatres {
      background: linear-gradient(220deg, rgba(206, 198, 156, 0.2) 0%, rgba(234, 205, 55, 0) 100%);
  }

</style>