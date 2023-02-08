<section id="bugs" class="bugs main-grid">
    <h2 class="bugs--heading process--heading">Bugs and Solutions</h2>
    <div class="bugs--para">
        <p>Hero images need compressing. Possibly with TinyJPG or Compress JPG.</p>
        <p>It’s difficult using text over hero images that don’t have large light or dark areas. And the image moves a lot when it resizes for different screens. Quick fix will be enlarging text and lowing the opacity of the hero images. </p>
    </div>
</section>

<style lang="scss">

.bugs {
    align-content: center;
    margin: 0em auto 2em auto;
    padding: 5em 0;
    background-color: var(--background-main);
    min-height: 50vh;
}

.bugs--heading {
    grid-column: 2 / -2;

    margin: 0;
    margin-bottom: 0.5em;
    padding: 0;

    text-align: center;
    text-shadow: none;
}

.bugs--para {
    grid-column: 2 / -2;

    margin: 0;
    padding: 0;

    text-align: center;
}

.bugs--para p {
    margin-bottom: 4em;
}

.bugs li {
    font-size: 1.6em;
    padding-bottom: 1em;
}

.text-align-left {
    text-align: left;
    margin-left: -2em;
}


    @media (min-width: 700px) {

        .bugs--para {
            grid-column: 2 / -2;
        }

        .bugs--para p {
            font-size: 1.8rem;
        }
    }

    @media (min-width: 800px) {

        .bugs--heading {
            margin-bottom: 0.5em;
        }

        .bugs--para {
            grid-column: 3 / -3;
        }

        .bugs--para p {
            margin-bottom: 3em;
            font-size: 1.8rem;
        }

        .bugs--para li {
            font-size: 1.8em;
            padding-bottom: 2em;
        }

    }
    @media (min-width: 1050px) {
        
        .bugs{
        min-height: 90vh;
        }

        .bugs--para p {
            margin-bottom: 3em;
            font-size: 2.4rem;
        }

    }
</style>