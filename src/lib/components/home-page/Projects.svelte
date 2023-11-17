<section class="projects stack center">
    <div class="u: text-center | projects--heading center" style="max-inline-size: 70ch">
        <h2 id="projects" class="projects--h2">Projects</h2>
        <p>Each project has a page with more screenshots and information
            about how I built the site, what problems I had to solve and my future plans for it.</p>
    </div>

    <div class="flex-grid">
        <div class="u: text-center | projects--box openai">
            <img src="/array_homescreen.png" class="product-image" alt="">
            <div class="projects--box__text">
                <h3>Array reference with OpenAI</h3>
                <p>All the array methods on one page, with OpenAI generated summaries, syntax and examples.</p>
                <div class="projects--flex-btm-row">
                    <p><strong>SvelteKit</strong></p>
                    <p><a href="../openai"><strong>READ MORE ></strong></a></p>
                </div>
            </div>
        </div>

        <div class="u: text-center | projects--box theatres">
            <img src="/theatres-landscape.png" class="product-image" alt="">
            <div class="projects--box__text">
                <h3>Ancient Greek Theatres</h3>
                <p>Practicing mobile-first web design. Vanilla JS for switching tabs and a gallery.</p>
                <div class="projects--flex-btm-row">
                    <p><strong>Vanilla JS & CSS</strong></p>
                    <p><a href="../ancient-theatres"><strong>READ MORE ></strong></a></p>
                </div>
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
    </div>


</section>

<style lang="scss">

  h3 {
    font-size: var(--step-2);
  }

  .flex-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    //gap: var(--step-6);
    --threshold: 80ch;
  }

  .flex-grid > * {
    flex: 1 1 30ch;
    flex-basis: calc((var(--threshold) - 100%) * 999);
    max-width: 50ch;
  }

  .projects {
    padding: 0 0.5em;
    display: flex;
  }

  .projects--box {
    display: flex;
    flex-direction: column;
    margin: var(--step-5) 5%;
    padding: var(--step-5);
    border-radius: 20px;
    transition: transform .4s;
  }

  .projects--box:hover {
    -ms-transform: scale(1.01); /* IE 9 */
    -webkit-transform: scale(1.01); /* Safari 3-8 */
    transform: scale(1.05);
  }

  .projects--box > * + * {
    margin-top: 3rem;
  }

  .projects--box__text > * + * {
    margin-top: 1.5rem;
  }

  .projects--heading p {
    margin: 0;
    padding: 0;
  }

  .openai {
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
    background: linear-gradient(180deg, rgba(132, 146, 202, 0.2) 0%, rgba(37, 75, 221, 0) 100%);
  }

  .theatres {
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
    background: linear-gradient(180deg, rgba(206, 198, 156, 0.2) 0%, rgba(234, 205, 55, 0) 100%);
  }

  .product-image {
    // screenshots should be same dimension so that max-height isn't needed
    max-height: 260px;
    border-radius: 7px;
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
  }

  .projects--flex-btm-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

</style>