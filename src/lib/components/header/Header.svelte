<!--  Note:
      this Header.svelte is the traditional header/nav bar
      But the home page has it's own "header" in the Banner component.
-->

<script>
  import { fade } from 'svelte/transition';
  import ContactLinks from "./ContactLinks.svelte";
</script>

  <div class="e: header" transition:fade>
  <div
    class="l: center | u: text-step--1"
  >
    <div class="with-sidebar">
      <div>
        <a href="/" class="u: w-700 | c: button text-only">Chris Mounsey-Logothetis</a>
<!--    Space to add NavLinks component when project and blog pages are ready-->
<!--    <slot></slot>-->
      </div>
      <ContactLinks />
    </div>
  </div>

</div>


<style lang="scss">

  /* LAYOUT */
  .header {
    z-index: 10;
    background-color: var(--bg-color, transparent);
    padding-block: 2dvh;
    min-height: var(--min-height, 50px);
  }

  .with-sidebar {
    display: flex;
    flex-wrap: wrap-reverse;
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

</style>