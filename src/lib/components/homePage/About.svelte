<script>
    import { skillsJS, skillsCSS, skillsCollaboration } from "../../skillsData.js";
    import Skill from "./Skill.svelte";
</script>

<section class="container-me center" style="--center-max-inline-size: 100%">
            
    <div class="main-grid stack">

        <div id="about" class="about-me about-grid">
            <div class="about-me--text">
                <h2 class="about-me--heading">About Me</h2>
                <p>I’m a front-end developer, specialising in Svelte/Kit, and up-to-date with ES6 JS and beyond.</p>
                <p>JavaScript aside, I enjoy keeping up-to-date with modern CSS, working with UX/UI teams and designing myself with Figma.</p> 
                <p>I've worked in Agile teams, with sprints, point estimation and backlog groomings, collaborating in GitHub and Jira.</p>
                <p>And once upon a time, I spent seven years as a lawyer in London. But my love for building stuff meant that the law wasn’t for me.</p>
                <p>So I first built and ran my own business, and it was there that I fell in love with web design and UX/UI, then code.</p>
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
            <div class="languages">
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
    //margin: 2em auto;
}

.about-me {
    grid-column: 1 / -1;
    justify-items: end;
    //margin: 10em 5em 5em 5em;
    color:  var(--background-main);
}

.about-me--text {
    display: flex;
    flex-direction: column;
    grid-column: 2 / -2;
    text-align: center;
}

.about-me--text p {
    font-weight: 500;
    line-height: 2;
    text-align: left;
}

.about-me--heading {
    //margin: 0 auto;
    padding: 0;
}

.about-grid {
  margin-top: 5rem;
}


/* ============================================================================================================
     ----------------------------------------------   Skills    ----------------------------------------------
=============================================================================================================== */

.skills {
    grid-column: 1 / -1;
    color:  var(--background-main);
}

.stack-flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    grid-column: 2 / -2;
    grid-row: 1;
    row-gap: 30px;
    //margin-bottom: 5em;
    padding-block: 2em;
}

.languages {
    grid-column: 3 / -3;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    text-align: center;
    //margin-bottom: 7em;
}

.languages p{
    margin: 0;
    padding: 0 0 10px 0;
}

.language {
    font-weight: 600;
    font-size: var(--step-2)
}

.language-level {
    font-weight: 400;
    font-size: var(--step-1)
}

.en, .gr, .jp {
    margin-bottom: 3em;
}

.en {
    display: flex;
    flex-direction: column;
}

.gr {
    display: flex;
    flex-direction: column;
}

.jp {
    display: flex;
    flex-direction: column;
}

@media (min-width:600px) {
    .skills {
        //margin: 1em 0 2em 0;
    }
}

@media (min-width: 700px) {
    .container-me {
        //margin: 2em auto;
        //padding-bottom: 7em;
    }

    .about-me {
        grid-column: 3 / -3;
        
        //margin: 5em 0 3em 0;
        //padding: 2em 0;
    
        color:  var(--background-main);
    }

    .skills {
        grid-column: 2 / -2;
        //margin: 0;
    }

    .stack-link {
        padding: 0;
    }

    .stack-flex {
        margin-bottom: 3em;
        padding: 1em;
    }

    .languages {
        grid-column: 4 / -4;
        grid-row: 2;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 7em;
        margin-bottom: 0em;
    }

    .en, .gr, .jp {
        width: 27%;
    }

    .language-level {
        font-weight: 400;
    }
}

@media (min-width: 1000px) {

    .about-me {
        grid-column: 3 / -3;
        //margin: 7em 0 4em 0;
    }

    .about-me--heading {

    }

    .skills {
        grid-column: 3 / -3;
        //margin: 0 0 5em 0;
        padding: 0;
    }

    .stack-flex {
        display: flex;
        flex-direction: row;
        grid-row: 1;
        margin: 0em -7em 5em;
    }

    .stack-flex p {

        font-weight: 600;
    }

    .skill-box {
        margin-left: 3em;
        margin-right: 3em;
    }

    .stack-link {

        opacity: 0.8;  
    }

    .svelte {
        width: 53px;
    }

    .graphQL {
        width: 64px;
    }

    .fa-sass {
        height: 62px;
    }

    .lens {
        width: 60px;
    }

    .languages {
        grid-column: 3 / -3;
        grid-row: 2;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 7em -3em 0;
    }

    .languages p{
        margin: 0em;
        padding: 0;
    }

    .en, .gr, .jp {
        width: 33%;
    }

    .language-level {

        padding: 0;
        margin:0;
    }
}

@media (min-width: 1200px) {

    .about-me p {
        font-weight: 500;
        letter-spacing: -.02rem;
    }

    .about-me {
        grid-column: 3 / -3;
        //margin: 10em 0 5em 0;
    }

    .about-me--text p{
        line-height: normal;
    }

    .skills {
        grid-column: 3 / -3;
        padding: 0;
    }

    .stack-flex {
        display: flex;
        flex-direction: row;
        grid-row: 1;
        margin: 0 -3em;
        padding-bottom: 5em;
    }

    .stack-link {

        opacity: 0.8;
    }

    .svelte {
        width: 60px;
    }

    .graphQL {
        width: 128px;
    }

    .fa-sass {
        height: 74px;
    }

    .lens {
        width: 69px;
    }

    .languages {
        grid-column: 3 / -3;
        grid-row: 2;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .languages p {

        margin: 0;
    }

    .en, .gr, .jp {
        width: 33%;
    }

    .language-level {

    }

}

</style>