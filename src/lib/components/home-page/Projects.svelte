<script>
    import { projectsText } from "$lib/page-text/home-page/projects.js";
</script>

<section class="projects stack center">
    <div class="u: text-center | projects--heading center" style="max-inline-size: 70ch">
        <h2 id="projects" class="projects--h2">{projectsText.heading}</h2>
        <p>{projectsText.intro}</p>
    </div>

    <div class="flex-grid">
        {#each projectsText.projects as project (project)}
            <div class="u: text-center | projects--box openai">
                <img src={project.image} class="product-image" alt="">
                <div class="projects--box__text">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div class="projects--flex-btm-row">
                        <p><strong>{project.stack}</strong></p>
                        <p><a href={project.link}><strong>READ MORE ></strong></a></p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>

<style lang="scss">

  h3 {
    font-size: var(--step-2);
  }

  .flex-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    //gap: var(--step-6);
    --threshold: 80ch;
  }

  .flex-grid > * {
    flex: 1 1 30ch;
    flex-basis: calc((var(--threshold) - 100%) * 999);
    max-width: 50ch;
  }

  .projects {
    padding: 0 0.5em;
    display: flex;
  }

  .projects--box {
    display: flex;
    flex-direction: column;
    margin: var(--step-5) 5%;
    padding: var(--step-5);
    border-radius: 20px;
    transition: transform .4s;
  }

  .projects--box:hover {
    -ms-transform: scale(1.01); /* IE 9 */
    -webkit-transform: scale(1.01); /* Safari 3-8 */
    transform: scale(1.05);
  }

  .projects--box > * + * {
    margin-top: 3rem;
  }

  .projects--box__text > * + * {
    margin-top: 1.5rem;
  }

  .projects--heading p {
    margin: 0;
    padding: 0;
  }

  .openai {
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
    background: linear-gradient(180deg, rgba(132, 146, 202, 0.2) 0%, rgba(37, 75, 221, 0) 100%);
  }

  .theatres {
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
    background: linear-gradient(180deg, rgba(206, 198, 156, 0.2) 0%, rgba(234, 205, 55, 0) 100%);
  }

  .product-image {
    // screenshots should be same dimension so that max-height isn't needed
    max-height: 260px;
    border-radius: 7px;
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
  }

  .projects--flex-btm-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

</style>