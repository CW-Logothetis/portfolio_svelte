<script>
  import NavBar from "$lib/components/NavBar/NavBar.svelte";
  import "$lib/scss/global.scss";
</script>

<!--
    NavBar is reused for Header and Footer so, for accessibility & semantic reasons,
    the header and footer HTML elements are best written in this layout file as wrappers.
    Otherwise, the NavBar component would have <header> used in the footer.
-->
<header>
    <NavBar />
</header>

<main>
    <slot />
</main>

<footer>
    <NavBar
      --bg-color = "var(--nav-link)"
      --min-height = "20vh"
      --color = "var(--light)"
    />
</footer>
