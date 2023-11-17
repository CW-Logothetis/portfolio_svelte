<script>
  import Step from "../UI/Step.svelte";
</script>

<section class="process">

  <div class="main-grid">

    <h2 class="u: text-center | process--heading">Process</h2>

    <Step text="Step 1" colorClass="color-theatre" />

    <div class="flex-grid process--step process--grid">
      <div class="step-bubble-l bubble-white">
        <p class="process--para">With Figma, I laid out detailed plans for the home page and then a template to
          be used
          for each of the theatres.</p>
        <p class="process--para">I started mobile first, then adjusted sizes and also layout of element for
          tablet and
          laptop/desktop with landscape orientation.</p>
      </div>
      <div class="step-bubble-r bubble-5-green">
        <img src="/theatres-figma.png" class="process--image" alt="">
      </div>
    </div>

    <Step text="Step 2" colorClass="color-theatre" />

    <div class="process--step process--grid">
      <div class="step-bubble-l bubble-4-green">
        <img src="/theatres-grid.png" class="process--image" alt="">
      </div>
      <div class="step-bubble-r bubble-white">
        <p class="process--para">The home page was relatively straightforward, with a hero image, some
          introductory text
          and then a timeline.</p>
        <p class="process--para">Everything is set out with CSS Grid, with empty columns for margins and easy
          alignment.</p>
        <p class="process--para">The timeline’s dividing line is a border to the right of the dates. It needed a
          little
          adjustment with different media queries.</p>
      </div>
    </div>

    <Step text="Step 3" colorClass="color-theatre" />

    <div class="process--step process--grid">
      <div class="step-bubble-l bubble-white">
        <p class="process--para">The template for the theatre could have had a long scroll, but I added a vanilla
          JavaScript tab menu.</p>
      </div>
      <div class="step-bubble-r bubble-3-green">
        <img src="/theatres-tabs.png" class="process--image" alt="">
      </div>
    </div>

    <Step text="Step 4" colorClass="color-theatre" />

    <div class="process--step">
      <div class="step-bubble-l bubble-2-green">
        <img src="/theatres-photos.png" class="process--image" alt="">
      </div>
      <div class="step-bubble-r bubble-white">
        <p class="process--para">The photo gallery allowed me to use a little more JavaScript. And in the future
          I’ll
          add a lightbox to enlarge the photos; on mobile they’re too small.</p>
        <p class="process--para">The thumbnails are in a grid so that they’ll wrap on smaller screens.</p>
      </div>
    </div>

  </div>
</section>


<style lang="scss">

  .process {
    background: linear-gradient(180deg, rgba(223, 223, 221, 0.3) 0%, rgba(62, 63, 62, 0.3) 25%, rgba(208, 209, 208, 0.3) 100%);
  }

  .process--heading {
    grid-column: 2 / -2;
  }

</style>