<section id="introduction" class="intro">
           
    <div class="main-grid">
        <h1 class="intro--title">Array Methods & OpenAI</h1>
        <p class="intro--para">Since I was first learning to code, I wanted a quick reference for array methods.</p>
        <p class="intro--para">MDN docs were far too advanced for a begginer. And there are a thousand blogs and tutorials and cheatsheets online doing some methods. But I couldn't remember which methods were even available.</p>
        <p class="intro--para">So I had the idea to summarise MDN docs for each method, then allow me to select methods for comparison.</p>
        <p class="intro--para">I never got around to it - too much content to write. But now OpenAI can do the content for me.</p>
    </div>

    <div class="intro--stack main-grid">
        <p class="intro--para-col-1"><strong>Stack:</strong></p>
        <p class="intro--para-col-2 moveX-col-2">SvelteKit (FE and server) - GitHub</p>
        <p class="intro--para-col-1"><strong>Live Site:</strong></p>
        <p class="intro--para-col-2"><a href="https://openai-arrays.netlify.app/" class="intro--para-col-2" target="_blank" rel="noreferrer">Netlify</a></p>
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