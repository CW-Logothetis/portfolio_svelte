<header class="center">
    <div class="with-sidebar">
        <div>
            <a href="/" class="logo-link">Chris W. Logothetis</a>
            <nav class="navigation">
                <a href="/#about" class="nav-link">about me</a>
                <a href="/#projects" class="nav-link">projects</a>
            </nav>
        </div>

        <div class="contact">
            <a href="mailto:cwlogo@pm.me" class="nav-link">  <span class="visually-hidden">Email:</span> cwlogo@pm.me</a>
            <a href="https://www.linkedin.com/in/christopher-logothetis" class="nav-link">
                <span class="visually-hidden">LinkedIn:</span>
                <i class="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/CW-Logothetis" class="nav-link">
                <span class="visually-hidden">GitHub:</span>
                <i class="fab fa-github" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</header>

<style lang="scss">

  /* LAYOUT */
  header {
    padding-block-start: 1rem;
    min-height: 50px;
  }

  .center {
    box-sizing: content-box;
    margin-inline: auto;
    text-align: center;
    max-inline-size: 120ch;
    padding-inline: 5%;
  }

  .with-sidebar {
    display: flex;
    flex-wrap: wrap-reverse;
    column-gap: 1rem;
    row-gap: 0.5rem;
  }

  .with-sidebar > :first-child {
    min-inline-size: 58%;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 2rem;
  }

  .with-sidebar > :last-child {
    flex-grow: 5;
    justify-content: flex-end;
  }

  .navigation {
    flex-grow: 1;
    justify-content: flex-end;
  }

  .navigation, .contact {
    display: inline-flex;
    align-items: center;
    column-gap: 2rem;
  }

  /* Typography  */
  * {
    font-size: var(--step--1);
  }


  /* Styles for links */

  .logo-link, .nav-link {
    color: var(--nav-link);
    text-decoration: none;
  }

  .logo-link {
    font-weight: 700;
  }

  .nav-link {
    font-weight: 500;
  }

  .contact > .nav-link {
    font-size: var(--step--2);
    font-weight: 500;
    color: #08438BFF;
  }

  .logo-link:hover,
  .logo-link:focus,
  .nav-link:hover,
  .nav-link:focus {
    color: var(--hero-css);
    opacity: 0.9;
    outline: #254BDDD4 solid 2px;
    outline-offset: 4px;
  }

  .logo-link:focus,
  .nav-link:focus {
    outline-style: dashed;
  }

</style>