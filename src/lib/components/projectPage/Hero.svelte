<script>
    export let heroImage
</script>

<section class="l: center">
    <enhanced:img src="{heroImage.src}?w=1280;640;400&format=webp&lossless" sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" class="e: project-hero" alt="{heroImage.alt}" />
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