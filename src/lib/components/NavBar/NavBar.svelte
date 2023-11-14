<div class="nav-bar">
    <div class="center">
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
    </div>

</div>

<style lang="scss">

  /* LAYOUT */
  .nav-bar {
    background-color: var(--bg-color, transparent);
    padding-block-start: 3dvh;
    min-height: var(--min-height, 50px);
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
    row-gap: 1rem;
  }

  .with-sidebar > :first-child {
    min-inline-size: 58%;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 2rem;
    row-gap: 1rem;
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

  a {
      opacity: 0.8;
  }

  .logo-link, .nav-link {
    color: var(--color, var(--nav-link));
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
    color: var(--color, var(--hero-css));
  }

  .logo-link:hover,
  .logo-link:focus,
  .nav-link:hover,
  .nav-link:focus {
    color: var(--color, var(--hero-css));
    opacity: 1;
    outline: var(--color, var(--hero-css)) solid 2px;
    outline-offset: 4px;
  }

  .logo-link:focus,
  .nav-link:focus {
    outline-style: dashed;
  }

</style>