<script>
  import { onMount } from "svelte";
  import About from "$lib/components/homePage/About.svelte";
  import Banner from "$lib/components/homePage/Banner.svelte";
  import Header from "../lib/components/header/Header.svelte";

  // Initial inspiration taken here, but then lost a lot of it when adapting for Svelte:
  // https://youtu.be/V-CBdlfCPic

  let primaryHeader;
  let showHeader;
  let displayHeader = false;

  onMount(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        // When the scrollWatcher is not fully visible, make the navbar sticky
        displayHeader = entry.isIntersecting;

      },
      {
        root: null, // viewport
        threshold: 0.4, // callback when 40% of the target is visible or not
        rootMargin: "0px 0px 0px 0px" // trigger exactly when the target enters or exits the viewport
      }
    );

    headerObserver.observe(showHeader);

    return () => {
      headerObserver.unobserve(showHeader);
    };
  });

</script>

<!--a11y
    - offscreen content should be hidden from assistive technology with
      display: none or aria-hidden="true" -->
<div
    class="primary-header"
    bind:this={primaryHeader}
    class:displayHeader={displayHeader}
    aria-hidden={displayHeader ? 'false' : 'true'}
>
    {#if displayHeader}
        <Header
            --bg-color="var(--background-main)"
            --color="var(--light-shade)"
        />
    {/if}
</div>

<div class="stack" style="--block: 0rem; --space: 3rem">
    <Banner />
    <div bind:this={showHeader} id="about">
        <About />
    </div>
</div>

<style lang="scss">

  // Would be good to have an opacity transition and for transformY to work, but that's not possible with display:block-none
  // for now though, display:block-none is best for a11y as it hides the header visually, for keyboard users and screen readers
  // https://kittygiraudel.com/2021/02/17/hiding-content-responsibly/
  .primary-header {
    position: sticky;
    top: 0;
    background: transparent;
    //z-index: 1000;
    min-height: 60px
    //opacity: 1; // Ensure default state has opacity set for transition
    //transform: translateY(0); // Ensure default state has transform set for transition
    //transition: ease 500ms, transform 500ms; // Apply transition to both properties
  }

  .displayHeader {
    display: block;
    background: #0a0c10;
    //opacity: 0; // Transition to this opacity
    //transform: translateY(-50%); // Transition to this transform
    //transition: ease 500ms, transform 500ms; // Apply transition to both properties
  }

</style>