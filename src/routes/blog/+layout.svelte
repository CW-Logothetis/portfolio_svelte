<script>
  import NavBar from "$lib/components/header/NavBar.svelte";
  import "$lib/scss/global.scss";

</script>

<!--
    header was originally reused for Header and Footer so, for accessibility & semantic reasons,
    the header and footer HTML elements are best written in this layout file as wrappers.
    Otherwise, the header component would have <header> used in the footer.
    TODO: refactor if decide definitively not to have footer
-->
<header>
    <NavBar
        --bg-color = "var(--background-main)"
        --color = "var(--light-shade)"
    />
</header>

<main class="bg-background-main color-light-shade">
    <slot />
</main>

