<script>
  import { fly } from "svelte/transition";
  import { projectsText } from "$lib/pageText/home-page/projects";
  import ButtonsMacOS from "$lib/components/UI/ButtonsMacOS.svelte";

  $: projectHover = null;

  function setProjectHover(p) {
    projectHover = p;
  }

  function clearProjectHover() {
    setTimeout(() => {
      projectHover = null;
    }, 100);
  }

  function handleScroll() {
    clearProjectHover();
  }

</script>

<svelte:window on:scroll={handleScroll} />

<section class="l: c: banner" style="--center-max-inline-size: 1200ch">
    <div class="screen">
        <div class="macos-bar">
<!--            <button class="close-button" on:click={() => clearProjectHover()}></button>-->
<!--            <button class="minimize-button" disabled></button>-->
<!--            <button class="zoom-button" disabled></button>-->
            <ButtonsMacOS
                {clearProjectHover}
                {projectHover}
            />
        </div>
        {#if projectHover}
            <div class="project-info c: bg {projectHover.bg}">
                <div class="project-image-container">
                    <img src={projectHover.image} alt="{projectHover.title}" class="project-image" />
                </div>
                <div class="project-title-description">
                    <h3 class="u: text-step-1">{projectHover.title}</h3>
                    <p>{projectHover.description}</p>
                </div>
            </div>
        {:else}
            <div class="u: pi-step-1" in:fly="{{ y: -40, duration: 3000 }}">
                <h1>Chris Mounsey-Logothetis</h1>
                <div class="mbs-step-0">Front end developer</div>
                <div class="u: text-step--1 w-500 | c: contact">
                    <a href="mailto:cwlogo@pm.me"> <span class="visually-hidden">Email:</span> cwlogo@pm.me</a>
                    <a href="https://www.linkedin.com/in/christopher-logothetis">
                        <span class="visually-hidden">LinkedIn:</span>
                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/CW-Logothetis">
                        <span class="visually-hidden">GitHub:</span>
                        <i class="fab fa-github" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        {/if}
    </div>

    <div class="projects">
        <h2>Blog</h2>
        <div class="flex-grid">
            {#each projectsText.projects as project (project)}
                <button
                    on:mouseover|stopPropagation={() => setProjectHover(project)}
                    class="u: | c: card bg {project.bg}"
                    style=" background-size: cover;  background-image: url({project.image});"
                >

                    <!--                    <img src={project.image} alt="{project.title}" class="u:">-->

                    <span class="c: card__text bg-background-secondary">
                        <div class="u: text-step-0">{project.title}</div>
                        <!--                        <p>{project.description}</p>-->

                    </span>
                </button>
            {/each}
        </div>
    </div>

</section>

<style lang="scss">

  h1 {
    font-size: var(--step-4);
  }
  h2 {
    font-size: var(--step-0);
  }

  .banner {
    display: flex;
    flex-wrap: wrap;
    box-sizing: content-box;
    align-items: center;
    justify-content: center;
    padding-inline: 5%;
    //min-width: 100%;
    min-height: 100vh;
  }

  .screen__container {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    padding-block-start: 24px;
    //max-inline-size: 800px;
    min-inline-size: 500px;
    inline-size: 32vw;
    max-inline-size: 50%;
    min-block-size: calc(500px / 1.3);
    block-size: calc(32vw / 1.3); /* "Golden ratio" based off screen flex being 32% */

  }

  .screen {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    border: solid 5px grey;
    border-radius: 16px;
    padding-block-start: 24px;
    //max-inline-size: 800px;
    min-inline-size: 500px;
    inline-size: 32vw;
    max-inline-size: 50%;
    min-block-size: calc(500px / 1.3);
    block-size: calc(32vw / 1.3); /* "Golden ratio" based off screen flex being 32% */
    position: relative; /* Add this to make the macOS bar position absolute relative to the screen div */
  }

  .screen > * + * {
    //margin-block-start: 1rem;
  }

  .contact {
    display: inline-flex;
    align-items: center;
    column-gap: 2rem;
  }

  .contact > a {
    color: var(--anchor);
  }

  .contact > a:hover {
    color: var(--light);
  }

  .contact > a:focus-visible {
    color: var(--primary);
  }

  a:hover {
    outline-color: dashed 1px var(--white);
  }

  ///////
  //RHS
  ///////

  .projects {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .flex-grid {
    display: flex;
    flex-wrap: wrap;
    min-width: 90%;
    justify-content: center;
  }

  //.flex-grid > * {
  //  flex: 1 1 30ch;
  //  flex-basis: calc((var(--threshold) - 100%) * 999);
  //  max-width: 50ch;
  //}

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4% 2%;
    padding: var(--step-3);
    border-radius: var(--radius-l);
    border: solid 3px grey;
    transition: transform .4s;
    height: 200px;
    width: 150px;

    &:hover {
      border: solid 3px white !important;
    }

    &:focus-visible {
      background: var(--js-yellow);
      color: var(--primary);
      outline: dashed var(--js-yellow) 3px;
      outline-offset: 3px;
    }

  }

  .card > * + * {
    //margin-top: 3rem;
  }

  .card__text {
    background: linear-gradient(220deg, rgba(61, 48, 143, 1) 0%, rgba(37, 75, 221, 1) 100%);
    border-radius: 10px;
    padding: 7%;
    color: white;
    font-weight: bold;
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

  .project-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .project-image {
    //aspect-ratio: 1.618 / 1;
    //inline-size: 100%;
  }

  .project-image-container {
    display: flex;
    justify-content: center;
    height: 80%; /* Set the height of the image container to 70% of the screen div */
    overflow: hidden; /* Add this to hide any excess image */
    position: relative; /* Add this to make the image position absolute relative to the container */
  }

  .project-image {
    position: absolute; /* Add this to make the image fill the width of the container */
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
    max-width: 100%;
    height: auto;
  }

  .project-title-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40%; /* Set the height of the title and description container to 30% of the screen div */
    padding: 1rem;
  }

</style>