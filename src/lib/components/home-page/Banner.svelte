<script>
  import { goto } from "$app/navigation";
  import { fade, fly } from "svelte/transition";
  import { projectsText } from "$lib/pageText/home-page/projects";
  import ButtonsMacOS from "$lib/components/UI/ButtonsMacOS.svelte";

  $: projectHover = null;
  $: isMaximized = false;

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
  function clearProjectHover(delay = 100) {
    setTimeout(() => {
      projectHover = null;
      isMaximized = false;
    }, delay);
  }

  function toggleMaximize() {
    isMaximized = !isMaximized; // Toggle the maximized state
  }

  // should user not click red button (likely),
  // screen will reset whenever user scrolls,
  // but only IF screen is not maximized.
  // TODO set this with intersectionObserver when use scrolls to About in +page.svelte
  function handleScroll() {
   !isMaximized && clearProjectHover(200);
  }

  function navigateToProject(project) {
    goto(project.url); // Assuming `project.url` is the URL you want to navigate to
  }

  function handleKeyUp(event, project) {
    if (event.key === "Enter" || event.key === " ") { // Check if the pressed key is 'Enter' or 'Space'
      navigateToProject(project);
    }
  }

</script>

<svelte:window on:scroll={handleScroll} />

<!--TODO on projectHover the navBar disappears from DOM, so user has to press red button to return it. Terrible UX.
 a focusable NavBar needs adding to the MacOS bar... -->
<section class="u: pbs-step-0 pi-step-5 | c: banner">
    <div class={isMaximized ? 'screen__container maximized' : 'screen__container'}>
        <header class={isMaximized ? 'screen max' : 'screen' }>
            <div class="macos-bar">
                <ButtonsMacOS
                    {clearProjectHover}
                    {toggleMaximize}
                    {projectHover}
                />
            </div>
            {#if projectHover}
                <div class="project-info c: bg {projectHover.bg}">
                    <div class="project-image-container">
<!-- `{#key}` block forces Svelte to recreate the `<img>` if `projectHover.image` changes i.e. it's a completely new element and thus triggers the fade transition.-->
<!-- Without the #key, the image will only fade in when projectHover is first set to true, and not when projectHover.image changes if user hovers over another card.-->
                        {#key projectHover.image}
                            <img src={projectHover.image} alt="{projectHover.title}" class="project-image" in:fade="{{ duration: 200 }}" />
                        {/key}
                    </div>
                    <div class="project-title-description stack" style="--block: 0.5rem; --space: 0">
                        <h3 class="u: text-step-1">{projectHover.title}</h3>
                        <p>{projectHover.description}</p>
                        <p class="u: text-step--1">{projectHover.stack}</p>
                        <a href="{projectHover.url}" class="u: button link in-size-fit">Read the post &gt;</a>
                    </div>
                </div>
                <!--                TODO add hidden <nav> so always there and consistent for screen readers-->
            {:else}
                <div class="l: stack | u: pi-step-1"
                     style="--block: 0; --space: var(--step-2); font-size: var(--step-0)"
                     in:fly="{{ y: -40, duration: 2000 }}">
                    <h1>Chris Mounsey-Logothetis</h1>
                    <div style="margin-block-start: 0">Front-end developer</div>

                    <div class="u: text-step--1 w-500 | c: contact">
                        <a href="mailto:cwlogo@pm.me" class="u: no-underline button link"> <span
                            class="U: visually-hidden">Email:</span> cwlogo@pm.me </a>
                        <a href="https://www.linkedin.com/in/christopher-logothetis"
                           class="u: no-underline button link">
                            <span class="visually-hidden">LinkedIn:</span>
                            <i class="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/CW-Logothetis" class="u: no-underline button link">
                            <span class="visually-hidden">GitHub:</span>
                            <i class="fab fa-github" aria-hidden="true"></i>
                        </a>
                    </div>

                    <nav>
                        <a href="/#about" class="u: in-size-fit button solid">About</a>
                    </nav>
                </div>
            {/if}
        </header>
    </div>
    <div class="projects">
        <!--        <h2>Projects</h2>-->
        <div class="flex-grid">
            {#each projectsText.projects as project (project)}
                <div
                    on:mouseover|stopPropagation={() => handleMouseOver(project)}
                    on:mouseout={handleMouseOut}
                    on:focus={() => handleMouseOver(project)}
                    on:blur={handleMouseOut}
                    on:click={() => navigateToProject(project)}
                    on:keyup={(event) => handleKeyUp(event, project)}
                    class="u: | c: card bg {project.bg}"
                    style=" background-size: cover; background-position: center; background-image: url({project.image});"
                    aria-label={`Details about ${project.title}`}
                    role="button"
                    tabindex="0"
                >
                    <article class="c: card__text bg-background-secondary {project.card_bg}">
                        <div class="u: text-step--1">{project.title}</div>
                    </article>
                </div>
            {/each}
        </div>
    </div>

</section>

<style lang="scss">

  h1 {
    font-size: var(--step-banner-h1);
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
    //50px is height of navBar
    margin-block-start: -60px;
  }

  .screen__container {
    // default styles from every-layout
    flex-grow: 1;
    // my custom styles
    display: flex;
    justify-content: center;
    align-items: center;
    transition: width 0.5s ease; /* Smooth transition for width change */
    width: auto; /* Default width */
  }

  .screen__container.maximized {
    width: 90vw; /* Set width to 90% of the viewport width when maximized */
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

  .screen.max {
    inline-size: 50vw;
    max-inline-size: 100vw;
    block-size: calc(50vw / 1.1);
    max-block-size: calc(100vw / 1.1);
  }

  .contact {
    display: inline-flex;
    align-items: center;
    column-gap: 2rem;
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
    height: 250px;
    width: 200px;
    cursor: pointer;

    &:hover {
      border: solid 3px var(--hero-css) !important;
    }

    &:focus-visible {
      background: var(--js-yellow);
      color: var(--primary);
      outline: dashed var(--js-yellow) 3px;
      outline-offset: 5px;
    }

    &:active {
      transform: translateY(15px); /* Consistent tactile feedback across interactive elements */
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

  .project_bg {
    background: linear-gradient(220deg, rgba(61, 48, 143, 1) 0%, rgba(37, 75, 221, 1) 100%);
  }

  .blog_bg {
    background: linear-gradient(220deg, rgb(47, 52, 42) 0%, rgb(21, 21, 23) 100%);
  }

  .cognitiv {
    background: linear-gradient(220deg, rgba(143, 48, 81, 0.51) 0%, rgba(0, 7, 37, 0.8) 100%);
    border-radius: 16px;
  }

  .openai {
    background: linear-gradient(220deg, rgba(130, 139, 175, 0.2) 0%, rgba(37, 75, 221, 0.8) 100%);
    border-radius: 16px;
  }

  .theatres {
    background: linear-gradient(220deg, rgba(131, 110, 224, 0.2) 0%, rgba(23, 22, 19, 0.93) 100%);
    border-radius: 16px;
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
    height: 80%;
    overflow: hidden; /* hide any excess image */
    position: relative; /* make the image position absolute relative to the container */
  }

  .project-image {
    position: absolute; /* makes the image fill the width of the container */
    top: 0;
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