<!--Note the home page has a header in the Banner component.
header.svelte is the traditional navbar - with a <nav> like - for other page layouts-->

<script>
  import { fade } from 'svelte/transition';
  import ContactLinks from "./ContactLinks.svelte";
</script>

  <div class="c: nav-bar" transition:fade>
  <div
    class="l: center | u: text-step--1"
  >
    <div class="with-sidebar">
      <div>
        <a href="/" class="logo-link button text-only">Chris Mounsey-Logothetis</a>
      </div>
      <ContactLinks />
    </div>
  </div>

</div>


<style lang="scss">

  /* LAYOUT */
  .nav-bar {
    position: sticky;
    top: 0;
    z-index: 10;

    background-color: var(--bg-color, transparent);
    padding-block: 2dvh;
    min-height: var(--min-height, 50px);
  }

  .with-sidebar {
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: center;
    column-gap: 1rem;
    row-gap: 1rem;

    & > :first-child {
      min-inline-size: 58%;
      flex-grow: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      column-gap: 2rem;
      row-gap: 1rem;
    }

    & > :last-child {
      flex-grow: 5;
      justify-content: flex-end;
    }
  }

  /* Styles for links */

  .logo-link {
    font-weight: 700;
  }

</style>