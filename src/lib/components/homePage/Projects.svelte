<section id ="projects" class="projects main-grid">
    <div class="projects--heading">
        <h2 class="projects--h2">Projects</h2>
        <p>Each project has a page with more screenshots and information
            about how I built the site, what problems I had to solve and my future plans for it.</p>
    </div>  

    <div class="projects--box openai">
        <img src="/array_homescreen.png" class="product-image" alt="">
        <h3>Array reference with OpenAI</h3>
        <p>All the array methods on one page, with OpenAI generated summaries, syntax and examples.</p>
        <div class="projects--flex-btm-row">
            <p><strong>SvelteKit</strong></p>
            <p><a href="openAI-arrays.html"><strong>READ MORE ></strong></a></p>
        </div>
    </div>

    <div class="projects--box theatres">
        <img src="/theatres-landscape.png" class="product-image" alt="">
        <h3>Ancient Greek Theatres</h3>
        <p>A personal project to practice mobile-first web design. Vanilla JavaScript for switching tabs and a gallery. Working on a map API. </p>
        <div class="projects--flex-btm-row">
            <p><strong>Vanilla JS & CSS</strong></p>
            <p><a href="ancient-theatres.html"><strong>READ MORE ></strong></a></p>
        </div>
    </div>

    <!-- <div class="projects--box snake">
        <img src="img/snake-mistake.png" class="product-image" alt="">
        <h3>Snake on the Nokia 5510</h3>
        <p>As a kid I really wanted the Nokia 5510 with removable covers and snake. I wasn’t allowed it, so built it myself. </p>
        <div class="projects--flex-btm-row">
            <p><strong>Vanilla JS & CSS</strong></p>
            <p><a href="snake.html"><strong>READ MORE ></strong></a></p>
        </div>    
    </div> -->

</section>

<style lang="scss">

.projects {
    padding: 0 0.5em;
}    

.projects--h {
    margin-bottom: 0.25em;
}

.projects > p {
    font-size: 1.8rem;
}

.projects--box {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 5em 0;
    padding: 5em;
    border-radius: 20px;
}

.projects--box h3 {
    font-size: 2rem;
    margin: 0 0.5em 1em;
}

.projects--box p {
    margin: 0 auto 1em;
}

.projects--heading {
    grid-column: 2 / -2;
    grid-row: 1;
}

.projects--heading p {
    margin: 0;
    padding: 0;
}

.openai {
    grid-column: 2 / -2;
    grid-row: 3;
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);

    background: linear-gradient(180deg, rgba(132, 146, 202, 0.2) 0%, rgba(37, 75, 221, 0) 100%);
}

.theatres {
    grid-column: 2 / -2;
    grid-row: 4;
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
    background: linear-gradient(180deg, rgba(206, 198, 156, 0.2) 0%, rgba(234, 205, 55, 0) 100%);
}

.snake {
    grid-column: 2 / -2;
    grid-row: 5;
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
    background: linear-gradient(180deg, rgba(201, 167, 160, 0.2) 0%, rgba(221, 75, 37, 0) 100%);
}

.product-image {
    max-width: 100%;
    width: 50rem;
    margin: 0 auto 3em auto;
    border-radius: 7px;
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
}

.projects--box-stack-p {
    font-size: 2rem;
}

.projects--flex-btm-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media (min-width: 600px) {
    .projects--box {
        margin: 4em;
        border-radius: 20px;
    }

    .projects--box h3 {
        font-size: 3rem;
    }
    
    .projects--box p {
        max-width: 80%;
    }
    
}

@media (min-width: 750px) {

    .projects {
        margin-bottom: 15em;
    }

    .projects--heading {
        grid-column: 3 / -3;
        margin: 5em 0 9em 0;
        text-align: center;
    }

    .projects--h {
        font-size: 6rem;
        text-align: center;
    }

    .projects--box {
        border-radius: 20px;
        padding: 5em 8em
    }
    
    .projects--box p {
        max-width: 80%;
    }
    
}

@media (min-width: 1000px) {

    .projects {
        margin: 0 auto 17em;
    }

    .projects--heading {
        grid-column: 3 / -3;
        margin: 0.5em 0 3em 0;
        text-align: center;
    }

    .projects--h2 {
        font-size: 10rem;
        text-align: center;
        margin: 0.5em 0 0.25em 0;
    }

    .projects--heading p {
        font-size: 2rem;
        margin-bottom: 1em;
    }

    .projects--box {
        border-radius: 20px;
        padding: 5em;
    }

    .projects--box h3 {
        font-size: 3rem;
        margin: 0.5em 0;
    }
    
    .projects--box p {
        max-width: 80%;
        font-size: 2rem;
    }

    .product-image {
        margin-top: 0em;
        max-width: 80%;
        height: 270px;
    }
    
   

    .projects--flex-btm-row {
        flex-direction: row;
        margin: 40px 0;
    }
}

@media (min-width: 1200px) {

.projects--box {
    padding: 5em 3em;
}

    .openai {
        grid-column: 1 / 7;
        grid-row: 3;
        margin: 4em 6em 6em 2em;
    }
    
    .theatres {
        grid-column: 7 / 13;
        grid-row: 3;
        margin: 4em 2em 6em 6em;
    }
    
    .snake {
        grid-column: 1 / 7;
        grid-row: 4;
        margin: 4em 6em 6em 2em;
    }
}

</style>