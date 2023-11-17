<script>
  import Step from "../UI/Step.svelte";
</script>

<section class="next-steps">
  <div class="main-grid">
    <h2 class="u: text-center | process--heading">Next Steps</h2>

    <Step text="Idea 1" colorClass="color-theatre" />

    <div class="process--step process--grid">
      <div class="step-bubble-l bubble-white">
        <p class="process--para">I have a map of the region and I intend to place clickable links on the names
          of the
          theatres.</p>
        <p class="process--para">The map allows people to get a sense of each theatre’s location in relation to
          the
          others, and also see which one is close to an airport or place they may be visiting.</p>
      </div>
      <div class="step-bubble-r bubble-5-green">
        <img src="/theatres-map-idea.png" class="process--image" alt="">
      </div>
    </div>

    <Step text="Idea 2" colorClass="color-theatre" />

    <div class="process--step process--grid">
      <div class="step-bubble-l bubble-4-green">
        <img src="/theatres-mapbox.png" class="process--image" alt="">
      </div>
      <div class="step-bubble-r bubble-white">
        <p class="process--para">I’ve used MapBox before to design maps, but not its API. </p>
        <p class="process--para">Customising map colours and labels, plus enabling users to plan a trip by car
          would be
          a great addition.</p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">

  .next-steps {
    background: linear-gradient(180deg, rgba(223, 223, 221, 0.3) 0%, rgba(62, 63, 62, 0.3) 25%, rgba(208, 209, 208, 0.3) 100%);
  }

  .process--heading {
    grid-column: 2 / -2;
  }

</style>