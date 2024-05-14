<script>
    export let heroImage
</script>

<section class="l: center">
    <img src="{heroImage.src}" class="e: project-hero" alt="{heroImage.alt}" >
</section>

<style lang="scss">

.project-hero {
    width: 100%;
    max-width: 1000px;
    margin-inline: auto;
    border-radius: var(--radius-s);
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
}

</style>