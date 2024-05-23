<script>
  import { goto } from "$app/navigation";
  import { fade, fly } from "svelte/transition";
  import { blogsText, projectsText } from "$lib/pageText/homePage/projects";
  import ButtonsMacOS from "$lib/components/UI/ButtonsMacOS.svelte";
  import ContactLinks from "../header/ContactLinks.svelte";

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
    goto(project.url);
  }

  function handleKeyUp(event, project) {
    if (event.key === "Enter" || event.key === " ") {
      navigateToProject(project);
    }
  }

</script>

<svelte:window on:scroll={handleScroll} />

<!--TODO on projectHover the nav disappears from DOM, so user has to press red button to return it. Terrible UX.
 a focusable nav needs adding to the MacOS bar... -->
<section class="u: pbs-step-0 pi-step-5 | e: banner">

<!--///////////////// LHS //////////////////-->

    <div class={isMaximized ? 'screen__container maximized' : 'screen__container'}>
        <div class={isMaximized ? 'screen max' : 'screen' }>
            <div class="e: macos-bar">
                <ButtonsMacOS
                    {clearProjectHover}
                    {toggleMaximize}
                    {projectHover}
                />
            </div>
            {#if projectHover}
                <div class="c: bg {projectHover.bg} | e: project-info ">
                    <div class="e: project-image-container">
                        <!-- `{#key}` block forces Svelte to recreate the `<img>` if `projectHover.image` changes
                              i.e. it's a completely new element and thus triggers the fade transition.-->
                        <!-- Without the #key, the image will only fade in when projectHover is first set to true,
                             and not when projectHover.image changes if user hovers over another card.-->
                        {#key projectHover.image}
                            <picture>
                                <source
                                    sizes={projectHover.picture.sizes}
                                    srcset={projectHover.picture.srcset}
                                    type={projectHover.picture.type}
                                />
                                <img
                                    class="e: project-image"
                                    in:fade|global="{{ duration: 200 }}"
                                    loading="lazy"
                                    height={projectHover.picture.height}
                                    width={projectHover.picture.width}
                                    src={projectHover.picture.fallback_img}
                                    alt={projectHover.picture.alt}
                                />
                            </picture>
                        {/key}
                    </div>
                    <div class="l: stack | e: project-title-description" style="--block: 0.5rem; --space: 0">
                        <h3 class="u: text-step-1">{projectHover.title}</h3>
                        <p class="u: text-step-0">{projectHover.description}</p>
                        <div style="display: flex; align-items: center; justify-content: space-between">
                            <p class="u: text-step--1">{projectHover.stack}</p>
                            <a href="{projectHover.url}" class="u: in-size-fit | c: button link">Read the post &gt;</a>
                        </div>
                    </div>
                </div>

        <!-- TODO add hidden <nav> so always there and consistent for screen readers-->
            {:else}
                <header class="l: stack | u: pi-step-1"
                     style="--block: 0; --space: var(--step-2); font-size: var(--step-0)"
                     in:fly|global="{{ y: -40, duration: 2000 }}">
                    <h1>Chris Mounsey-Logothetis</h1>
                    <div style="margin-block-start: 0">Front-end developer</div>
                    <ContactLinks />
                    <nav>
                        <a href="/#about" class="u: in-size-fit | c: button solid">About</a>
                    </nav>
                </header>
            {/if}
        </div>
    </div>

    <!--///////////////// RHS //////////////////-->
<!-- next gen images won't work in IE, so use url() then image-set(url())
     https://developer.mozilla.org/en-US/docs/Web/CSS/image/image-set -->
    <div class="e: projects">
        <h2 class="u: text-step-2">Projects</h2>
        <div class="u: mbs-step--2 | e: flex-grid">
            {#each projectsText.projects as project (project)}
                <div
                    on:mouseover|stopPropagation={() => handleMouseOver(project)}
                    on:mouseout={handleMouseOut}
                    on:focus={() => handleMouseOver(project)}
                    on:blur={handleMouseOut}
                    on:click={() => navigateToProject(project)}
                    on:keyup={(event) => handleKeyUp(event, project)}
                    class="e: card bg {project.bg}"
                    style="
                        background-image: url({project.thumbnail_fallback});
                        background-image: image-set(url({project.thumbnail_next_gen}));
                    "
                    aria-label={`Details about ${project.title}`}
                    role="button"
                    tabindex="0"
                >
                    <article class="u: bg-background-secondary | e: card__text {project.card_bg}">
                        <div class="u: text-step--1">{project.title}</div>
                    </article>
                </div>
            {/each}
        </div>

        <h2 class="u: mbs-step-5 text-step-2">Blog Posts</h2>
        <div class="u: mbs-step--2 | e: flex-grid">
            {#each blogsText.projects as project (project)}
                <div
                    on:mouseover|stopPropagation={() => handleMouseOver(project)}
                    on:mouseout={handleMouseOut}
                    on:focus={() => handleMouseOver(project)}
                    on:blur={handleMouseOut}
                    on:click={() => navigateToProject(project)}
                    on:keyup={(event) => handleKeyUp(event, project)}
                    class="e: card bg {project.bg}"
                    style="
                        background-image: url({project.thumbnail_fallback});
                        background-image: image-set(url({project.thumbnail_next_gen}));
                    "
                    aria-label={`Details about ${project.title}`}
                    role="button"
                    tabindex="0"
                >
                    <article class="u: bg-background-secondary | e: card__text {project.card_bg}">
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

  //banner is adapted from Sidebar in https://every-layout.dev/layouts/sidebar/
  .banner {
    // default styles from every-layout
    display: flex;
    flex-wrap: wrap;
    gap: var(--step-5);
    // my custom styles
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    //50px is height of nav
    margin-block-start: -60px;
  }

  ///////////////// LHS //////////////////

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
    position: relative;
  }

  .screen.max {
    inline-size: 50vw;
    max-inline-size: 100vw;
    block-size: calc(50vw / 1.1);
    max-block-size: calc(100vw / 1.1);
  }

  ///////////////// RHS //////////////////

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

  .project-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .project-image-container {
    display: flex;
    justify-content: center;
    height: 80%;
    overflow: hidden; /* hide any excess image */
    position: relative;
  }

  .project-image {
    position: absolute; /* image fills the width of the container */
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    height: auto;
  }

  .project-title-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60%; /* Set the height of the title and description container re: the screen div */
    padding: 1rem;
  }

  // only want text/project cards to wrap on small screens
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
    margin: 2%;
    padding: var(--step-0);
    border-radius: var(--radius-l);
    border: solid 3px grey;
    transition: transform .4s;
    height: 210px;
    width: 200px;
    cursor: pointer;
    background-size: cover;
    background-position: center;

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
      transform: translateY(15px);
    }

  }

  .card__text {
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

</style>