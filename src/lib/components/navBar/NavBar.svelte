<!--This is an old navBar with a <nav> for Projects and blog-->
<!--The <nav> is not used whilst the Projects and blog pages are re-designed -->

<script>
  import { fade } from 'svelte/transition';
</script>

  <div class="c: nav-bar" transition:fade>
  <div
    class="l: center | u: text-step--1"
    style=""
  >
    <div class="with-sidebar">
      <div>
        <a href="/" class="logo-link">Chris Mounsey-Logothetis</a>
<!--        <nav>-->
<!--          <a href="/blog" class="nav-link">blog</a>-->
<!--          <a href="/projects" class="nav-link">projects</a>-->
<!--        </nav>-->
      </div>

      <div class="u: text-step--1 w-500 | c: contact">
        <a href="mailto:cwlogo@pm.me"> <span class="visually-hidden">Email:</span> cwlogo@pm.me</a>
        <a href="https://www.linkedin.com/in/christopher-logothetis">
          <span class="visually-hidden">LinkedIn:</span>
          <i class="fab fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/CW-Logothetis">
          <span class="visually-hidden">GitHub:</span>
          <i class="fab fa-github" aria-hidden="true"></i>
        </a>
      </div>
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

  nav, .contact {
    display: inline-flex;
    align-items: center;
    column-gap: 2rem;
  }

  nav {
    flex-grow: 1;
    justify-content: flex-end;
  }

  /* Styles for links */

  a {
    opacity: 0.9;
    color: var(--color, var(--nav-link));
    text-decoration: none;
  }

  a:hover {
    color: var(--color, var(--hero-css));
  }

  a:focus-visible {
    color: var(--primary, var(--hero-css));
  }

  a:hover {
    outline: var(--color, var(--hero-css)) solid 2px;
    outline-offset: 4px;
  }

  a:focus-visible {
    outline-style: dashed;
  }

  .logo-link {
    font-weight: 700;
  }

  .nav-link {
    font-weight: 500;
  }

  .contact > a {
    color: var(--anchor);
  }

  .contact > a:hover {
    color: var(--light);
  }

  .contact > a:focus-visible {
    color: var(--primary);
  }

</style>