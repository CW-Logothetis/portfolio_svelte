<script>

</script>

<section class="hero main-grid">

  <div class="hero--name-flexbox">
      <h1 class="hero-title hi">
          Hi,<br>
          I'm<br>
          Chris<br>
          Logothetis
      </h1>
  </div>

  <div class="hero--stack-flexbox">
    <p class="hero-js stroke-text front-animate fade-in-out"></p>
    <p class="hero-html stroke-text end-animate fade-in-out"></p>
    <p class="hero-css stroke-text dev-animate fade-in-out"></p>
  </div>

</section>

<style lang="scss">

  h1, .hero-js, .hero-html, .hero-css {
    margin: 0;
    padding: 0;
  }

  .hero-js, .hero-html, .hero-css {
    font-size: var(--step-5);
    font-weight: 900;
    letter-spacing: -4px;
    text-align: right;
  }

  .hero-js {
    color: var(--background-main);
    grid-column: 5/-2;
    grid-row: 1;
  }

  .hero-html {
    color: var(--background-main);
    grid-column: 8/-2;
    grid-row: 2;
  }

  .hero-css {
    color: var(--background-main);
    grid-column: 8/-2;
    grid-row: 3;
  }

  .hi {
    grid-column: 2/-2;
    grid-row: 2;
  }

  .hero {
    min-height: calc(100dvh - 50px);
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    overflow: hidden;
  }

  .hero--name-flexbox {
    margin-top: 0;
    grid-column: 2/-2;
    grid-row: 1/4;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .hero--stack-flexbox {
    grid-column: 2/-2;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  /* ------------------------------------------------------------------------------------------------------  */
  /* -------------------------------------------   ANIMATIONS   -------------------------------------------- */
  /* ------------------------------------------------------------------------------------------------------  */


  /* Looks great with text-stroke, and I tested it on chrome and safari on MacBook, where it worked.
  But a friend tried it on Chrome and it didn't work. Nor on old iPhone. MDN shows all modern browsers ok with it,
  but warns that it's not standard. Have commented out text-stroke. I need to save it in a branch and clean up main. */

  .fade-in-out {
    opacity: 1;
    -webkit-opacity: 1;
    animation: fadein 4s linear 0s infinite;
    -webkit-animation: fadein 4s linear 0s infinite;
    animation-delay: 2s;
    -webkit-animation-delay: 2s;
  }

  .hero-js {
    -webkit-text-stroke: 4px var(--js-yellow);
  }

  .hero-html {
    -webkit-text-stroke: 4px var(--hero-html);
  }

  .hero-css {
    -webkit-text-stroke: 4px var(--hero-css);
  }

  @keyframes fadein {
    0%, 100% {
      opacity: 1
    }
    50% {
      opacity: 0
    }
  }

  .front-animate {
    display: inline;
    margin: 0;
    padding: 0;
    border: 0;
  }

  .front-animate:before {
    content: 'FRONT';
    letter-spacing: -4px;
    -webkit-text-stroke: 4px var(--js-yellow);
    -webkit-animation-name: front-animate;
    animation-name: front-animate;
    -webkit-animation-duration: 8s;
    animation-duration: 8s;
    animation-delay: 2.7s;
    -webkit-animation-delay: 2.7s;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
  }

  @keyframes front-animate {
    0% {
      content: 'FRONT';
      -webkit-text-stroke: 5px var(--js-yellow)
    }
    50% {
      content: 'JavaScript';
      letter-spacing: -3px;
      -webkit-text-stroke: 5px var(--js-yellow)
    }
    100% {
      content: 'FRONT';
      -webkit-text-stroke: 5px var(--js-yellow)
    }
  }

  @-webkit-keyframes front-animate {
    0% {
      content: 'FRONT';
      -webkit-text-stroke: 5px var(--js-yellow)
    }
    50% {
      content: 'JavaScript';
      letter-spacing: -3px;
      -webkit-text-stroke: 5px var(--js-yellow)
    }
    100% {
      content: 'FRONT';
      -webkit-text-stroke: 5px var(--js-yellow)
    }
  }

  .end-animate {
    display: inline;
    margin: 0;
    padding: 0;
    border: 0;
  }

  .end-animate:before {
    content: 'END';
    letter-spacing: -4px;
    -webkit-text-stroke: 5px var(--hero-html);
    -webkit-animation-name: end-animate;
    -webkit-animation-duration: 8s;
    animation-name: end-animate;
    animation-duration: 8s;
    animation-delay: 2.7s;
    -webkit-animation-delay: 2.7s;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
  }

  @keyframes end-animate {
    0% {
      content: 'END';
      -webkit-text-stroke: 5px var(--hero-html)
    }
    50% {
      content: 'HTML5';
      letter-spacing: -3px;
      -webkit-text-stroke: 5px var(--hero-html)
    }
    100% {
      content: 'END';
      -webkit-text-stroke: 5px var(--hero-html)
    }
  }

  @-webkit-keyframes end-animate {
    0% {
      content: 'END';
      -webkit-text-stroke: 5px var(--hero-html)
    }
    50% {
      content: 'HTML5';
      letter-spacing: -3px;
      -webkit-text-stroke: 5px var(--hero-html)
    }
    100% {
      content: 'END';
      -webkit-text-stroke: 5px var(--hero-html)
    }
  }

  .dev-animate {
    display: inline;
    margin: 0;
    padding: 0;
    border: 0;
  }

  .dev-animate:before {
    content: 'dev';
    letter-spacing: -4px;
    -webkit-text-stroke: 5px var(--hero-css);
    -webkit-animation-name: dev-animate;
    -webkit-animation-duration: 8s;
    animation-name: dev-animate;
    animation-duration: 8s;
    animation-delay: 2.7s;
    -webkit-animation-delay: 2.7s;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
  }

  @keyframes dev-animate {
    0% {
      content: 'dev';
      -webkit-text-stroke: 5px var(--hero-css)
    }
    50% {
      content: 'CSS3';
      letter-spacing: -3px;
      -webkit-text-stroke: 5px var(--hero-css)
    }
    100% {
      content: 'dev';
      -webkit-text-stroke: 5px var(--hero-css)
    }
  }

  @-webkit-keyframes dev-animate {
    0% {
      content: 'dev';
      -webkit-text-stroke: 5px var(--hero-css)
    }
    50% {
      content: 'CSS3';
      letter-spacing: -3px;
      -webkit-text-stroke: 5px var(--hero-css)
    }
    100% {
      content: 'dev';
      -webkit-text-stroke: 5px var(--hero-css)
    }
  }


  h1 {
    font-size: var(--step-7);
  }

  .hero-js, .hero-html, .hero-css {
    font-size: var(--step-8);
  }


  .hero-js {
    -webkit-text-stroke: 3px var(--js-yellow);
  }

  .hero-html {
    -webkit-text-stroke: 3px var(--hero-html);
  }

  .hero-css {
    -webkit-text-stroke: 3px var(--hero-css);
  }


  @media (min-height: 650px) {

    .hero-js {
      -webkit-text-stroke: 3px var(--js-yellow);
    }

    .hero-html {
      -webkit-text-stroke: 3px var(--hero-html);
    }

    .hero-css {
      -webkit-text-stroke: 3px var(--hero-css);
    }
  }

  @media (min-width: 1020px) {


    .hero--stack-flexbox {
      grid-column: -4;
    }

    .hero--name-flexbox {
      grid-column: 3;
    }
  }

  @media (min-width: 1020px) and (min-height: 1300px) {

    .hero--stack-flexbox {
      grid-column: -4;
    }

    .hero--name-flexbox {
      grid-column: 3;
    }
  }

  @media (min-width: 1200px) {

    .hero-js, .hero-html, .hero-css {
      letter-spacing: -0.75rem;
    }
    .hero-js {
      -webkit-text-stroke: 6px var(--js-yellow);
    }

    .hero-html {
      -webkit-text-stroke: 6px var(--hero-html);
    }

    .hero-css {
      -webkit-text-stroke: 6px var(--hero-css);
    }

  }

  @media (min-width: 1800px) {

    .hero-js, .hero-html, .hero-css {
      letter-spacing: -0.75rem;
    }

    .hero-js {
      grid-column: 5/-3;
    }

    .hero-html {
      grid-column: 8/-3;
    }

    .hero-css {
      grid-column: 8/-3;
    }
  }

  @media (min-width: 600px) and (max-height: 700px) {
    .hero-js, .hero-html, .hero-css {
      letter-spacing: -0.75rem;
    }

    .hero-js {
      -webkit-text-stroke: 8px var(--js-yellow);
      grid-column: 5/-3;

    }

    .hero-html {
      -webkit-text-stroke: 8px var(--hero-html);
      grid-column: 8/-3;

    }

    .hero-css {
      -webkit-text-stroke: 8px var(--hero-css);
      grid-column: 8/-3;

    }
    .hero-js {
      grid-column: 5/-3;
    }

    .hero-html {
      grid-column: 8/-3;
    }

    .hero-css {
      grid-column: 8/-3;
    }

    .hero--name-flexbox {
      margin-top: 1em;
    }

    .hero--stack-flexbox {
      margin-top: -4em;
    }
  }
</style>