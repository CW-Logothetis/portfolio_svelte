<script>
  import NavBar from "$lib/components/NavBar/NavBar.svelte";
  import "$lib/scss/global.scss";

</script>

<!--
    NavBar is reused for Header and Footer so, for accessibility & semantic reasons,
    the header and footer HTML elements are best written in this layout file as wrappers.
    Otherwise, the NavBar component would have <header> used in the footer.
-->
<!--<header>-->
<!--    <NavBar-->
<!--        &#45;&#45;bg-color = "var(&#45;&#45;background-main)"-->
<!--        &#45;&#45;color = "var(&#45;&#45;light-shade)"-->
<!--    />-->
<!--</header>-->

<main class="bg-background-main color-light-shade">
    <slot />
</main>

<!--TODO Don't really need a footer with a sticky navbar. Considering to add all Hero animation component here-->
<!--<footer>-->
<!--    <NavBar-->
<!--      &#45;&#45;bg-color = "var(&#45;&#45;background-secondary)"-->
<!--      &#45;&#45;min-height = "15vh"-->
<!--      &#45;&#45;color = "var(&#45;&#45;light)"-->
<!--    />-->
<!--</footer>-->
