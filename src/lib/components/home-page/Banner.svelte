<script>
  import { fly } from "svelte/transition";
  import { projectsText } from "$lib/pageText/home-page/projects";
  import ButtonsMacOS from "$lib/components/UI/ButtonsMacOS.svelte";

  $: projectHover = null;

  function setProjectHover(p) {
    projectHover = p;
  }

  // don't want to setProjectHover if user is flying around the screen
  // so user must stay on for 300ms before setProjectHover is called
  let hoverTimeout;

  function handleMouseOver(project) {
    // Multiple cards, so clear any existing timeout to prevent multiple triggers
    clearTimeout(hoverTimeout);

    hoverTimeout = setTimeout(() => {
      setProjectHover(project);
    }, 200);
  }

  // Every time the mouse leaves a card, clear the timeout
  // If setProjectHover hasn't already been called, it now can't be
  function handleMouseOut() {
    clearTimeout(hoverTimeout);
  }

  // red button or user scrolls down
  function clearProjectHover() {
    setTimeout(() => {
      projectHover = null;
    }, 100);
  }

  // should user not click red button (likely),
  // screen will reset whenever user scrolls.
  function handleScroll() {
    clearProjectHover();
  }

</script>

<svelte:window on:scroll={handleScroll} />

<!--TODO on projectHover the navBar disappears from DOM, so user has to press red button to return it. Terrible UX.
 a focusable NavBar needs adding to the MacOS bar... -->
<section class="u: pbs-step-0 pi-step-5 | c: banner">
    <div class="screen__container">
        <header class="screen">
            <div class="macos-bar">
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
                <div class="l: stack | u: pi-step-1" style="--block: 0; --space: var(--step-1); font-size: var(--step-0)"
                     in:fly="{{ y: -40, duration: 2000 }}">
                    <h1>Chris Mounsey-Logothetis</h1>
                    <div style="margin-block-start: 0">Front-end developer</div>

                    <nav>
                        <a href="/#about" class="u: in-size-fit">About</a>
                    </nav>

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
        </header>
    </div>
    <div class="projects">
        <h2>Blog</h2>
        <div class="flex-grid">
            {#each projectsText.projects as project (project)}
                <button
                    on:mouseover|stopPropagation={() => handleMouseOver(project)}
                    on:mouseout={handleMouseOut}
                    class="u: | c: card bg {project.bg}"
                    style=" background-size: cover; background-position: center; background-image: url({project.image});"
                >

                    <!--                    <img src={project.image} alt="{project.title}" class="u:">-->

                    <span class="c: card__text bg-background-secondary">
                        <div class="u: text-step--1">{project.title}</div>
                        <!--                        <p>{project.description}</p>-->

                    </span>
                </button>
            {/each}
        </div>
        <h2>Projects</h2>
        <div class="flex-grid">
            {#each projectsText.projects as project (project)}
                <button
                    on:mouseover|stopPropagation={() => setProjectHover(project)}
                    class="u: | c: card bg {project.bg}"
                    style=" background-size: cover; background-position: center; background-image: url({project.image});"
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
    font-size: var(--step-banner-h1);
  }

  h2 {
    font-size: var(--step-0);
  }

  //banner is adapted from Sidebar in https://every-layout.dev/layouts/sidebar/
  .banner {
    // default styles from every-layout
    display: flex;
    flex-wrap: wrap;
    gap: var(--step-5);

    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .screen__container {
    // default styles from every-layout
    flex-grow: 1;
    // my custom styles
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid 5px grey;
    border-radius: 16px;
    padding-block-start: 24px;
    min-inline-size: 350px;
    inline-size: 32vw;
    max-inline-size: 100vw;
    min-block-size: calc(350px / 1.1);
    block-size: calc(32vw / 1.1);
    max-block-size: calc(100vw / 1.1);
    position: relative; /* Add this to make the macOS bar position absolute relative to the screen div */
  }

  .contact {
    display: inline-flex;
    align-items: center;
    column-gap: 2rem;
  }

  a {
    color: var(--anchor);
  }

  // First use of hover and focus-visible
  a:hover {
    color: var(--light);
  }

  a:focus-visible {
    color: var(--primary);
    outline: 2px var(--js-yellow);
  }

  //Second use of hover and focus-visible to allow just the outline to change white when user has keyboard focus and mouse hover at same element
  a:hover {
    outline: white solid 2px;
  }

  a:focus-visible {
    outline-style: dashed;
  }

  ///////
  //RHS
  ///////

  .projects {
    // default styles from every-layout
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: 55%;
    // my custom styles
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  // only want blog/project cards to wrap on small screens
  .flex-grid {
    display: flex;
    flex-wrap: wrap;
    min-width: 100%;
    justify-content: center;
  }

  // on screens over 900px, big enough for screen on left, cards on right,
  // then the cards should always be in one line (e.g. nowrap)
  @media (min-width: 900px) {
    .flex-grid {
     flex-wrap: nowrap;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4% 2%;
    padding: var(--step-0);
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