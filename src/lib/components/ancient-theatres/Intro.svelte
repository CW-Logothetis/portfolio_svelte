<section id="introduction" class="intro">
           
    <div class="main-grid">
        <h1 class="intro--title">Ancient Greek Theatres</h1>
        <p class="intro--para">As I’m a bit of a history nut, I’ve visited quite a few of the archaeological sites in Greece and the southern Balkans. So when I was thinking of a personal project to test my Figma and responsive design skills, I thought this would be a good fit. Especially as I have my own photographs to use.</p>            
        <p class="intro--para">There are over a hundred Greek and then Roman theatres, so I just selected five from the Greek period, but nipped over the border into modern day Albania to show two that are relatively unknown.</p>            
        <p class="intro--para">Note: as the aim here was to practice web design, the theatre pages use placeholder or duplicated text.</p>
    </div>

    <div class="intro--stack main-grid">
        <p class="intro--para-col-1"><strong>Stack:</strong></p>
        <p class="intro--para-col-2">Vanilla JS - CSS - Git/Github</p>
        <p class="intro--para-col-1"><strong>Design:</strong></p>
        <p class="intro--para-col-2">Figma - VS Code - Chrome Dev Tools</p>
        <p class="intro--para-col-1"><strong>Live Site:</strong></p>
        <p class="intro--para-col-2"><a href="https://ancient-theatres.netlify.app/" class="intro--para-col-2" target="_blank" rel="noreferrer">Netlify</a></p>
    </div>
</section>

<style lang="scss">

.intro {
    margin: 0em auto;
}

.intro--title {
    grid-column: 2 / -2;
    margin: 1em 0 0.6em 0;
    padding: 0;
    font-size: 4rem;
    text-shadow: none;
    text-align: center;
}

.intro--sm-title {
    margin: 2em 0 1.6em 0;
    font-size: 2.5rem;
}

.intro--stack {
    margin: 3em auto 3em auto;
}

.intro--para {
    grid-column: 2 / -2;
    margin: 0 0 2em 0;
    padding: 0;
}

.intro--para-col-1 {
    grid-column: 2/5;
    margin: 0.5em 0;
}

.intro--para-col-2 {
    grid-column: 5/11;
    margin: 0.5em 0;
}

.moveX-col-2 {
    grid-column: 6/12;
}
@media (min-width: 370px) {
    .intro--sm-title {
        margin: 2em 0 1.6em 0;
        font-size: 3.5rem;
    }
}
@media (min-width: 400px) {
    
    .intro--title, .intro--sm-title{
        font-size: 4rem;
    }
}

@media (min-width: 700px) {
    
    .intro--title, .intro--sm-title {
        grid-column: 3 / -3;
        margin: 1.5em 0 0.6em 0;
        font-size: 4rem;
    }

    .intro--stack {
        margin: 3em auto 8em auto;
    }

    .intro--para {
        grid-column: 3 / -3;
    }

    .intro--para-col-1 {
        grid-column: 3/5;
    }

    .chingu-intro-note {
        margin-top: -3em;
        margin-bottom: 6em;
    }
}

@media (min-width: 900px) {
    
    .intro--title{
    font-size: 6.5rem;
    }

    .intro--para-col-1 {
        grid-column: 3/4;
        margin: 0.5em 0;
    }

    .intro--para-col-2 {
        grid-column: 5/8;
        margin: 0.5em 0;
    }

    .chingu-intro-note {
        margin-top: -3em;
        margin-bottom: 2em;
    }
}

@media (min-width: 1050px) {
    
    .intro--title, .intro--sm-title{
    grid-column: 3/-3;
    margin: 0.75em 0 0.6em 0;
    font-size: 7rem;
    text-align: left;
    }

    .intro--sm-title {
        font-size: 4rem;
    }

    .intro--para {
        font-size: 1.8rem;
    }

    .intro--para-col-1 {
        font-size: 2rem;
    }

    .intro--para-col-2 {
        grid-column: 5/9;
        font-size: 2rem;
    }

    .intro--stack {
        margin-bottom: 10em;
    }

    .chingu-intro-note {
        margin-top: -3em;
        margin-bottom: 8em;
    }
}

@media (min-width: 1800px) {
    
    .intro--title, .intro--sm-title{
    font-size: 9rem;
    }
}


</style>