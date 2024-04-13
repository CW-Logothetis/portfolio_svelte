<script>
  import { onMount } from "svelte";
  import About from "$lib/components/home-page/About.svelte";
  import Banner from "$lib/components/home-page/Banner.svelte";
  import NavBar from "../lib/components/NavBar/NavBar.svelte"; // A store to hold the visibility state of the navbar

  // Initial inspiration taken here, but then lost a lot of it when adapting for Svelte:
  // https://youtu.be/V-CBdlfCPic

  let primaryHeader;
  let showNavBar;
  let visuallyHidden = false;

  onMount(() => {
    const navObserver = new IntersectionObserver(
      ([entry]) => {
        console.log({ entry });
        // When the scrollWatcher is not fully visible, make the navbar sticky
        visuallyHidden = !entry.isIntersecting;
      },
      {
        root: null, // viewport
        threshold: 0.4, // callback when 100% of the target is visible or not
        rootMargin: "0px 0px 0px 0px" // trigger exactly when the target enters or exits the viewport
      }
    );

    navObserver.observe(showNavBar);
    console.log(navObserver);

    return () => {
      navObserver.unobserve(showNavBar);
    };
  });

</script>

<header
    class="primary-header"
    bind:this={primaryHeader}
    class:visually-hidden={visuallyHidden}
    aria-hidden={visuallyHidden ? 'true' : 'false'}
>
    <NavBar
        --bg-color="var(--background-main)"
        --color="var(--light-shade)"
    />
</header>

<div class="stack" style="--block: 0rem; --space: 0rem">
    <Banner />
    <div bind:this={showNavBar}>
        <About />
    </div>
</div>

<style lang="scss">

  // TODO need to add a permanent navBar for about, blog, projects, and for top of home page, only
  // and on the home bar it would be good to have a transition, but that's not possible with display:block-none
  // for now though, display:block-none is best for a11y as it hides the navBar visually, for keyboard users and screen readers
  // https://kittygiraudel.com/2021/02/17/hiding-content-responsibly/
  .primary-header {
    position: sticky;
    top: 0;
    background: #0a0c10;
    z-index: 1000;
    //opacity: 1; // Ensure default state has opacity set for transition
    display: block;
    transform: translateY(0); // Ensure default state has transform set for transition
    transition: ease 500ms, transform 500ms; // Apply transition to both properties
  }

  .visually-hidden {
    //opacity: 0; // Transition to this opacity
    display: none;
    transform: translateY(-50%); // Transition to this transform
    transition: ease 500ms, transform 500ms; // Apply transition to both properties
  }


</style>