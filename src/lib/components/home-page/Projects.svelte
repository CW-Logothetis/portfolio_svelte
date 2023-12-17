<script>
  import { projectsText } from "$lib/page-text/home-page/projects.js";
</script>

<section
  id="projects"
  class="l: stack center | u: text-center | c: projects"
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
          <h3 class="u: text-step-2">{project.title}</h3>
          <p>{project.description}</p>

          <div class=" u: switcher | c: card__btm-row" style="--gap: var(--step--2); --threshold: 25ch">
            <p><strong>{project.stack}</strong></p>
            <p class="u: mbs-zero"><a href={project.link}><strong>READ MORE ></strong></a></p>
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
    margin: var(--step-4) 5%;
    padding: var(--step-4);
    border-radius: var(--radius-l);
    transition: transform .4s;

    img {
      // screenshots should be same dimension so that max-height isn't needed
      max-height: 260px;
      border-radius: var(--radius-s);
    }
  }

  .card:hover {
    -ms-transform: scale(1.01); /* IE 9 */
    -webkit-transform: scale(1.01); /* Safari 3-8 */
    transform: scale(1.05);
  }

  .card > * + * {
    margin-top: 3rem;
  }

  .card__text > * + * {
    margin-top: 1.5rem;
  }

  .card__btm-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .openai {
      background: linear-gradient(220deg, rgba(132, 146, 202, 0.2) 0%, rgba(37, 75, 221, 0) 100%);
  }

  .theatres {
      background: linear-gradient(220deg, rgba(206, 198, 156, 0.2) 0%, rgba(234, 205, 55, 0) 100%);
  }

</style>