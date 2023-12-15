<div class="c: nav-bar">
  <div
    class="l: center | u: text-step--1"
    style="--center-max-inline-size: 120ch"
  >
    <div class="with-sidebar">
      <div>
        <a href="/" class="logo-link">Chris W. Mounsey-Logothetis</a>
        <nav>
          <a href="/#about" class="nav-link">about me</a>
          <a href="/#projects" class="nav-link">projects</a>
        </nav>
      </div>

      <div class="u: text-step--2 w-500 | c: contact">
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
    background-color: var(--bg-color, transparent);
    padding-block-start: 4dvh;
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

  a:hover,
  a:focus {
    color: var(--color, var(--hero-css));
  }

  a:hover {
    outline: var(--color, var(--hero-css)) solid 2px;
    outline-offset: 4px;
  }

  a:focus {
    outline-style: dashed;
  }

  .logo-link {
    font-weight: 700;
  }

  .nav-link {
    font-weight: 500;
  }

  .contact > a {
    color: var(--color, var(--hero-css));
  }

</style>