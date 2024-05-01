<script>
  import { aboutText } from "$lib/pageText/home-page/about";
  import { onMount } from "svelte";

  let currentRole;
  let enlargeCurrentRole = false;

  onMount(() => {
    const navObserver = new IntersectionObserver(
      ([entry]) => {
        console.log({ entry });
        // When the scrollWatcher is not fully visible, make the navbar sticky

        enlargeCurrentRole = entry.isIntersecting;
        console.log({enlargeCurrentRole})
      },
      {
        root: null, // viewport
        threshold: 0.8, // callback when 100% of the target is visible or not
        rootMargin: "0px 0px 0px 0px" // trigger exactly when the target enters or exits the viewport
      }
    );

    navObserver.observe(currentRole);
    console.log(navObserver);

    return () => {
      navObserver.unobserve(currentRole);
    };
  });
</script>

<section class="bg mbs-step-5">

    <div class="l: stack | u: color-light" style="--block: 4rem; --space: 0rem">

        <div
            class="l: center | u: text-center | c: about-me__text"
            style="--center-max-inline-size: 80ch"
        >
            <h2>{aboutText.header}</h2>
            {#each aboutText.paragraphs as paragraph (paragraph)}
                <p>{paragraph}</p>
            {/each}
        </div>

        <div class="l: center | c: grid-container" style="--center-max-inline-size: 80ch">
            <h3 class="grid-item item0">Skills</h3>
            <div class="grid-item item0"></div>
            <div class="grid-item item1">JS | Frameworks:</div>
            <div class="grid-item item2">JavaScript, TypeScript, SvelteKit, React</div>
            <div class="grid-item item3">API:</div>
            <div class="grid-item item4">REST, GraphQL</div>
            <div class="grid-item item5">CSS:</div>
            <div class="grid-item item6">SCSS/SASS, Tailwind, Bootstrap</div>
            <div class="grid-item item7">Collaboration:</div>
            <div class="grid-item item8">GitHub, Jira, Confluence, Figma, FigJam</div>
            <div class="grid-item item9">CMS:</div>
            <div class="grid-item item10">WordPress, HubSpot</div>
        </div>

        <div class="l: center e: enlarge"   class:enlargeCurrentRole={enlargeCurrentRole} style="--center-max-inline-size: 80ch" bind:this={currentRole} >
            <h3>Current role</h3>
            <div class="container">
                <div class="left">
                    <div>2022 - Present</div>
                    <a
                        class="u: in-size-fit c: button outline"
                        href="/cv_mounsey-logothetis.pdf"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Open my CV in a new window as a PDF"
                    >
                        Open CV (pdf)
                        <i class="c: fa fa-external-link-alt | e: open-new-window" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="right">
                    <h4>Front-end developer - Cognitiv+</h4>
                    <h5 class="w-500">MVP DEVELOPMENT: </h5>
                    <p>Front end for a new web app, replacing an Angular front end.
                        Transformed Figma designs into a fully functional interface with <strong>SvelteKit, SCSS, Bootstrap, and GraphQL</strong>.</p>
                    <h5 class="w-500"> FUNCTIONAL DESIGN OVERHAUL FOR v1.0: </h5>
                    <p>Conducted a re-think of the MVP's core features following user and sales team feedback.
                        Created mock-ups in <strong>Figma</strong> and flow diagrams using <strong>FigJam</strong> to remedy confusing steps and layouts reported by older users.</p>
                    <h5 class="w-500">LLM INTEGRATION: </h5>
                    <p>Designed and built an internal SvelteKit app for the CEO to test prompts,
                        score them (human evaluation) and save them for later comparison against other prompts.
                        Now designing a new feature for summarising and chatting with contracts</p>
                    <h5 class="w-500">CMS TRANSITION: </h5>
                    <p>Responsible for website migration from <strong>WordPress</strong> to <strong>HubSpot</strong>. Then later supervised an intern in downscaling HubSpot to a custom SvelteKit and <strong>Tailwind UI website.</p>
                    <h5 class="w-500">MISC: </h5>
                    <p><strong>Playwright</strong> end-to-end testing. <strong>GitHub</strong> version control and code reviews.
                        Deploy with <strong>Lens.</strong> <strong>Agile with Jira</strong> (fortnightly sprints, weekly backlog grooming, assisted CTO with story and ticket writing).
                        Docs with <strong>Confluence.</strong></p>
                    <div class="pills">
                        <div>SvelteKit</div>
                        <div>GraphQL</div>
                        <div>Figma</div>
                        <div>Github</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">

  h3 {
    font-weight: 300;
  }

  .bg {
    background: linear-gradient(
                    180deg,
                    var(--background-main) 0%,
                    #444477 70%,
                    rgba(253, 147, 56, 0.55) 100%
    );
  }

  /* ============================================================================================================
     ----------------------------------------------  Intro    ----------------------------------------------
=============================================================================================================== */

  .about-me__text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    row-gap: 1.5rem;

    p {
      font-weight: 500;
      line-height: 1.6;
      text-align: left;
    }
  }

  /* ============================================================================================================
       ----------------------------------------------   Skills    ----------------------------------------------
  =============================================================================================================== */

  .tech {
    margin-block-end: 4rem;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1.618fr;
    row-gap: 1.5rem;
    //width: 100%; /* this will make the grid items take up at least the width of their content */
  }

  .item0 {
    grid-row: 1;
  }

  .item1 {
    grid-row: 2;
  }

  .item2 {
    grid-row: 2;
    grid-column: 2;
  }

  .item3 {
    grid-row: 3;
  }

  .item4 {
    grid-row: 3;
    grid-column: 2;
  }

  .item5 {
    grid-row: 4;
  }

  .item6 {
    grid-row: 4;
    grid-column: 2;
  }

  .item7 {
    grid-row: 5;
  }

  .item8 {
    grid-row: 5;
    grid-column: 2;
  }

  .item9 {
    grid-row: 6;
  }

  .item10 {
    grid-row: 6;
    grid-column: 2;
  }

  .grid-item:nth-child(odd) {
    font-weight: 300;
  }

  .grid-item:nth-child(even) {
    font-weight: 500;
    min-width: 0; /* Remove the fixed min-width */
    word-wrap: break-word; /* Ensure long words do not overflow */
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 900px) {
    .enlarge {
      transition: transform 0.1s ease, background-color 0.5s ease;
      padding: 2rem;
      border-radius: 20px;
    }

    .enlargeCurrentRole {
      transform: scale(1.05);
      background-color: rgba(0, 0, 0, 0.68);
      color: var(--light);
      padding: 2rem;
      border-radius: 20px;
    }
  }

  .left {
    flex: 1;
    align-items: flex-start;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }


  .right {
    flex: 1.618;
    display: flex;
    flex-direction: column;

    & h1 {
      margin-block-end: 1rem;
    }

    & h4 {
      margin-block-end: 1rem;
    }

    & h5 {
      margin-block: 0;
    }

    & p {
      font-size: var(--step--1);
      margin-block-end: 1rem;
    }
  }

  .pills {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
  }

  .pills div {
    font-size: var(--step--1);
    padding: 5px 10px;
    border-radius: 20px;
    border: solid var(--light) 1px;
  }

  .open-new-window {
    margin-inline-start: 0.5rem;
  }

</style>