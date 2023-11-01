<section class="container-me">
            
    <div class="main-grid">

        <div id="about" class="about-me about-grid">
            <div class="about-me--text">
                <h2 class="about-me--heading">About Me</h2>
                <p>I’m a front-end developer, specialising in Svelte/Kit, and up-to-date with ES6 JS and beyond.</p>
                <p>JavaScript aside, I enjoy keeping up-to-date with modern CSS, working with UX/UI teams and designing myself with Figma.</p> 
                <p>I've worked in Agile teams, with sprints, point estimation and backlog groomings, collaborating in GitHub and Jira.</p>
                <p>And once upon a time, I spent seven years as a lawyer in London. But my love for building stuff meant that the law wasn’t for me.</p>
                <p>So I first built and ran my own business, and it was there that I fell in love with web design and UX/UI, then code.</p>
            </div>
            
            <!-- Might put social profile photo in here on desktop-->
            <!-- <div class="circle"></div> -->
            <!-- <img class="about-me--image" src="" alt=""> -->

        </div>

        <div class="skills about-grid">

            <div class="stack-flex">
                <div class="skill-box skill-box__js">
                    <i class="stack-link js fab fa-js"></i>
                    <p>JavaScript</p>
                </div>
                <div class="skill-box">
                    <a
                        title="Rich Harris, MIT &lt;http://opensource.org/licenses/mit-license.php&gt;, via Wikimedia Commons" 
                        href="https://commons.wikimedia.org/wiki/File:Svelte_Logo.svg"
                        class="stack-link">
                        <img 
                            class='svelte' 
                            alt="Svelte Logo" 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/256px-Svelte_Logo.svg.png">
                    </a>   
                    <p>SvelteKit</p>
                </div>    
                <div class="skill-box">
                    <a   
                        title="Facebook, BSD &lt;http://opensource.org/licenses/bsd-license.php&gt;, via Wikimedia Commons" 
                        href="https://commons.wikimedia.org/wiki/File:GraphQL_Logo.svg">
                        <img
                            class='graphQL stack-link'     
                            alt="GraphQL Logo" 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/128px-GraphQL_Logo.svg.png">
                    </a>   
                    <p>GraphQL</p>
                </div>  
            </div>
            <div class="stack-flex">
                <div class="skill-box">
                    <i class="stack-link html5 fab fa-html5"></i>
                    <p>HTML5</p>
                </div>   
                <div class="skill-box">
                    <i class="stack-link css3 fab fa-css3-alt"></i>
                    <p>CSS3</p>
                </div>    
                <div class="skill-box">
                    <i class="stack-link fab fa-bootstrap"></i>
                    <p>Bootstrap</p>
                </div>    
                <div class="skill-box">
                    <i class="stack-link fab fa-sass"></i>
                    <p>SASS/SCSS</p>
                </div>    
                <div class="skill-box">
                    <i class="stack-link figma fab fa-figma"></i>
                    <p>Figma</p>
                </div>     
            </div>
            <div class="stack-flex">
                <div class="skill-box">
                    <i class="stack-link git fab fa-git-alt"></i>
                    <p>Git</p>
                </div>    
                <div class="skill-box">
                    <i class="stack-link fab fa-github"></i>
                    <p>GitHub</p>
                </div>   

                <div class="skill-box">
                    <img class='stack-link lens' src='/logo_lens.png' alt='lens logo'/>  
                    <p>k8s Lens</p>
                </div>  

                
                <div class="skill-box">
                    <i class="stack-link fab fa-jira"></i>
                    <p>Jira</p>
                </div>    
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
    margin: 2em auto;
}

.about-me {
    grid-column: 1 / -1;
    justify-items: end;
    margin: 10em 5em 5em 5em;
    color:  var(--background-main);
}

.about-me--text {
    display: flex;
    flex-direction: column;
    grid-column: 2 / -2;
}

.about-me--text p {
    font-weight: 500;
    margin: 0.5em 0;
}

.about-me--heading {
    margin: 0 auto;
    padding: 0;
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
    margin-bottom: 5em;
    padding: 2em;
}

.stack-flex p {
    font-weight: 500;
}

.skill-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 2em;
    width: 70px;
}

.stack-link {
    font-size: var(--step-0);
    opacity: 0.8;
    margin: 0 0 10px 0;
    padding: 0;
}

.js {
    color: var(--js-yellow);  
}

.svelte {
    width: 35px;
}

.graphQL {
    width: 42px;
}

.html5 {
    color: var(--hero-html);
}

.css3 {
    color: var(--hero-css);
}

.figma {
    color: var(--hero-css);
}

.fa-sass {
    height: 43px;
}

.git {
    color: #DD4B25;
}

.lens {
    width: 40px;
}

.languages {
    grid-column: 3 / -3;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 7em;
}

.languages p{
    margin: 0;
    padding: 0 0 10px 0;
}

.language {
    font-weight: 600;
    font-size: var(--step--1)
}

.language-level {
    font-weight: 400;
    font-size: 1.8rem;
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
        margin: 1em 0 2em 0;
    }
}

@media (min-width: 700px) {
    .container-me {
        margin: 2em auto;
        padding-bottom: 7em;
    }
    
    .about-grid {
        display: block;
    }

    .about-me {
        grid-column: 3 / -3;
        
        margin: 5em 0 3em 0;
        padding: 2em 0;
    
        color:  var(--background-main);
    }

    .skills {
        grid-column: 2 / -2;
        margin: 0;
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
        margin: 7em 0 4em 0;   
    }

    .about-me--heading {

    }

    .skills {
        grid-column: 3 / -3;
        margin: 0 0 5em 0;
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
        margin: 10em 0 5em 0;   
    }

    .about-me--heading {

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