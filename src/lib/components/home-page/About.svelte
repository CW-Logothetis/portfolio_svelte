<script>
  import { aboutText, languageText } from "$lib/pageText/home-page/about.js";
  import { skillsJS, skillsCSS, skillsCollaboration } from "$lib/pageText/home-page/skillsData.js";
  import Skill from "./Skill.svelte";
</script>

<section class="bg" id="about">

    <div class="l: stack | u: color-light">

        <div
            class="l: center | u: text-center | c: about-me__text"
            style="--center-max-inline-size: 70ch"
        >
            <h2>{aboutText.header}</h2>
            {#each aboutText.paragraphs as paragraph (paragraph)}
                <p>{paragraph}</p>
            {/each}
        </div>

        <div class="l: center | c: tech" style="--center-max-inline-size: 120ch">

            <div class="c: stack-flex">
                {#each skillsJS as skill}
                    <Skill
                        {skill}
                    />
                {/each}
            </div>
            <div class="c: stack-flex">
                {#each skillsCSS as skill}
                    <Skill
                        {skill}
                    />
                {/each}
            </div>
            <div class="c: stack-flex">
                {#each skillsCollaboration as skill}
                    <Skill
                        {skill}
                    />
                {/each}
            </div>

            <div class="u: text-center | c: languages">
                {#each languageText as language}
                    <div class="c: language">
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
    background: linear-gradient(
                    180deg,
                    var(--background-main) 0%,
                    #444477 50%,
                    #555577 100%
    );
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

  .tech,
  .languages {
    margin-block: 5rem;
  }

  .stack-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 2rem;
    column-gap: 5rem;
    padding-block: 2em;
    max-width: 900px;
  }

  .languages {
    display: flex;
    flex-wrap: wrap;
    --threshold: 35rem;
    column-gap: 5vw;
    row-gap: 3vh;
    background-color: rgba(39, 65, 98, 0.04);
    box-shadow: var(--box-shadow);
    border-radius: 20px;
    padding: 3vw;
    color: #f1f1ff;

    & > * {
      flex-grow: 1;
      flex-basis: calc((var(--threshold) - 100%) * 999);
    }
  }

  .language {
    margin-block: 1em;
    display: flex;
    flex-direction: column;
  }

</style>