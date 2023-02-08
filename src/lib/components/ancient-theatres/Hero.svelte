<section class="main-grid">
    <img src="/theatres-hero.png" class="project-hero" alt="">
</section>

<style lang="scss">

.project-hero {
    grid-column: 2/-2;
    width: 100%;
    max-width: 1200px;
    margin: 2em auto 7em auto;
    border-radius: 7px;
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
}

@media (min-width: 400px) {
    .project-hero {
        margin: 0 auto 7em auto;
    }
}

@media (min-width: 700px) {
    .project-hero {
        margin: 0 auto 11em auto;
    }
}

@media (min-width: 900px) {
    .project-hero {
        margin: 5em auto 12em auto;
    }
}

@media (min-width: 1050px) {
    .project-hero {
        grid-column: 1/-1;
        margin: 0 auto 20em auto;
    }
}

</style>