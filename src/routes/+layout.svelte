<script>
  import NavBar from "$lib/components/NavBar/NavBar.svelte";
  import "$lib/scss/global.scss";
</script>

<!--
    Because NavBar is reused for Header and Footer, for accessibility & semantic reasons,
    the HTML elements are best in this layout file as wrappers.
-->
<header>
    <NavBar />
</header>

<main>
    <slot />
</main>

<footer>
    <NavBar
      --bg-color = "var(--primary)"
      --min-height = "130px"
      --color = "var(--js-yellow)"
    />
</footer>
