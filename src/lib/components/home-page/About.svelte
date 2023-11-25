<script>
  import { aboutText, languageText } from "$lib/page-text/home-page/about.js";
  import { skillsJS, skillsCSS, skillsCollaboration } from "$lib/page-text/home-page/skillsData.js";
  import Skill from "./Skill.svelte";
</script>

<section class="bg">

  <div class="l: stack | u: color-light">

    <div class="l: center | u: text-center | c: about-me__text" style="--center-max-inline-size: 70ch">
      <h2>{aboutText.header}</h2>
      {#each aboutText.paragraphs as paragraph (paragraph)}
        <p>{paragraph}</p>
      {/each}
    </div>

    <div class="l: center | c: skills" style="--center-max-inline-size: 120ch">

      <div class="stack-flex">
        {#each skillsJS as skill}
          <Skill
            {skill}
          />
        {/each}
      </div>
      <div class="stack-flex">
        {#each skillsCSS as skill}
          <Skill
            {skill}
          />
        {/each}
      </div>
      <div class="stack-flex">
        {#each skillsCollaboration as skill}
          <Skill
            {skill}
          />
        {/each}
      </div>

      <div class="u: text-center | languages">
        {#each languageText as language}
          <div class="language">
            <p class="u: text-step-2 w-600">{language.name}</p>
            <p class="u: w-400">{language.level}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style lang="scss">

  .bg {
    background: linear-gradient(310deg, #DD4B25f9 0%, #d9b504 99%);
  }

  /* ============================================================================================================
     ----------------------------------------------  Intro    ----------------------------------------------
=============================================================================================================== */

  .about-me__text {
      display: flex;
      flex-direction: column;

      p {
          font-weight: 500;
          line-height: 1.6;
          text-align: left;
      }
  }

  /* ============================================================================================================
       ----------------------------------------------   Skills    ----------------------------------------------
  =============================================================================================================== */

  .stack-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 2rem;
    column-gap: 7rem;
    padding-block: 2em;
    max-width: 900px;
  }

  .languages {
    display: flex;
    flex-wrap: wrap;
    --threshold: 40rem;
    column-gap: 0.5rem;
    margin-block: 3rem;
  }

  .languages > * {
    flex-grow: 1;
    flex-basis: calc((var(--threshold) - 100%) * 999);
  }

  .language {
    margin-block: 1em;
    display: flex;
    flex-direction: column;
  }

</style>