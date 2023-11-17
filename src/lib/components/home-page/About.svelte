<script>
    import { skillsJS, skillsCSS, skillsCollaboration } from "../../skillsData.js";
    import Skill from "./Skill.svelte";
</script>

<section class="container-me">
            
    <div class="main-grid stack">

        <div id="about" class="about-me about-grid center" style="--center-max-inline-size: 70ch">
            <div class="u: text-center | about-me--text">
                <h2 class="about-me--heading">About Me</h2>
                <p>I’m a front-end developer, specialising in Svelte/Kit, and up-to-date with modern JavaScript and responsive CSS.</p>
                <p>JavaScript aside, I enjoy keeping up-to-date with modern CSS, working with UX/UI teams and designing myself with Figma. I've worked in Agile teams, with sprints, point estimation and backlog groomings, collaborating in GitHub and Jira.</p>
                <p>And once upon a time, I spent seven years as a lawyer in London. But my love for building stuff meant that the law wasn’t for me. So I first built and ran my own business, and it was there that I fell in love with web design and UX/UI, then code.</p>
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
                <div class="en">
                    <p class="language">ENGLISH</p>
                    <p class="language-level">Native Speaker</p>
                </div>
                <div class="gr">
                    <p class="language">GREEK</p>
                    <p class="language-level">Intermediate<br>Conversational</p>
                </div>
                <div class="jp">
                    <p class="language">JAPANESE</p>
                    <p class="language-level">Once conversational;<br>it’s been a long time</p>
                </div>
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
    //grid-column: 3 / -3;
    //grid-row: 2;
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

.languages p {
    margin: 0;
    padding: 0 0 10px 0;
}

.language {
    font-weight: 600;
    font-size: var(--step-2)
}

.language-level {
    font-weight: 400;
    font-size: var(--step-0)
}

.en, .gr, .jp {
    margin-block: 1em;
    display: flex;
    flex-direction: column;
}


</style>