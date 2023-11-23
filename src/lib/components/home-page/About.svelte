<script>
    import {aboutText, languageText } from "$lib/page-text/home-page/about.js";
    import { skillsJS, skillsCSS, skillsCollaboration } from "$lib/page-text/home-page/skillsData.js";
    import Skill from "./Skill.svelte";
</script>

<section class="container-me">
            
    <div class="main-grid stack">

        <div id="about" class="about-me about-grid center" style="--center-max-inline-size: 70ch">
            <div class="u: text-center | about-me--text">
                <h2>{aboutText.header}</h2>
                {#each aboutText.paragraphs as paragraph (paragraph)}
                    <p>{paragraph}</p>
                {/each}
            </div>
        </div>

        <div class="skills about-grid">

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
                        <p class="language-name">{language.name}</p>
                        <p class="language-level">{language.level}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>    

<style lang="scss">

.container-me {
    background: linear-gradient(310deg, #DD4B25f9 0%, #d9b504 99%);
}

.about-me {
    grid-column: 1 / -1;
    justify-items: end;
    color:  var(--background-main);
}

.about-me--text {
    display: flex;
    flex-direction: column;
    grid-column: 2 / -2;
}

.about-me--text p {
    font-weight: 500;
    line-height: 2;
    text-align: left;
}

.about-me--heading {
    padding: 0;
}

.about-grid {
  margin-top: 3rem;
}


/* ============================================================================================================
     ----------------------------------------------   Skills    ----------------------------------------------
=============================================================================================================== */

.skills {
    grid-column: 1 / -1;
    padding-inline: 2rem;
    color:  var(--background-main);
}

.stack-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    grid-column: 2 / -2;
    grid-row: 1;
    row-gap: 30px;
    column-gap: 20px;
    padding-block: 2em;
}

.languages {
    display: flex;
    flex-wrap: wrap;
    --threshold: 40rem;
    column-gap: 0.5rem;
    margin-block: 3rem;
}

.languages > *  {
    flex-grow: 1;
    flex-basis: calc((var(--threshold) - 100%) * 999);
}

.language {
    margin-block: 1em;
    display: flex;
    flex-direction: column;
}

.language-name {
    font-weight: 600;
    font-size: var(--step-2)
}

.language-level {
    font-weight: 400;
    font-size: var(--step-0)
}


</style>