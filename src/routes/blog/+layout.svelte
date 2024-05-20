<script>
  import Header from "$lib/components/header/Header.svelte";
  import "$lib/scss/global.scss";
</script>

<header class="primary-header">
    <Header
        --bg-color = "var(--background-main)"
        --color = "var(--light-shade)"
    />
</header>

<main class="bg-background-main color-light-shade">
    <slot />
</main>

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

</style>


