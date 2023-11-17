<script>
  import Step from "../UI/Step.svelte";
</script>

<section class="next-steps">
    <div class="main-grid">
        <h2 class="process--heading">Next Steps</h2>

        <Step text="Idea 1" colorClass="color-theatre" />

        <div class="process--step process--grid">
            <div class="step-bubble-l bubble-white">
                <p class="process--para">I have a map of the region and I intend to place clickable links on the names
                    of the
                    theatres.</p>
                <p class="process--para">The map allows people to get a sense of each theatre’s location in relation to
                    the
                    others, and also see which one is close to an aiport or place they may be visiting.</p>
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


  @media (min-width: 700px) {
    .next-steps {
      background: linear-gradient(180deg, rgba(223, 223, 221, 0.3) 0%, rgba(62, 63, 62, 0.3) 25%, rgba(208, 209, 208, 0.3) 100%);
    }
  }

  p {
    font-size: var(--step-0);
  }

  .process {
    background: linear-gradient(180deg, rgba(223, 223, 221, 0.3) 0%, rgba(62, 63, 62, 0.3) 25%, rgba(208, 209, 208, 0.3) 100%);
  }

  .process--heading {
    grid-column: 2 / -2;
    text-shadow: none;
    text-align: center;
  }

  .process--step {
    grid-column: 2 / -2;
    display: flex;
    flex-direction: column;
  }

  .step-bubble-l {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 25em;
    padding: 0.75em;
    background-color: var(--background-main);
    border-radius: 20px 20px 0 0;
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
  }

  .step-bubble-r {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-height: 25em;
    padding: 1em;
    background-color: var(--background-main);
    border-radius: 0 0 20px 20px;
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
  }

  .bubble-5-green {
    background-color: var(--theatre-green-5)
  }

  .bubble-4-green {
    background-color: var(--theatre-green-4)
  }

  .bubble-3-green {
    background-color: var(--theatre-green-3)
  }

  .bubble-2-green {
    background-color: var(--theatre-green-2)
  }

  .bubble-1-green {
    background-color: var(--theatre-green-1)
  }

  .bubble-5-blue {
    background-color: var(--theatre-blue-5)
  }

  .bubble-4-blue {
    background-color: var(--theatre-blue-4)
  }

  .bubble-3-blue {
    background-color: var(--theatre-blue-3)
  }

  .bubble-2-blue {
    background-color: var(--theatre-blue-2)
  }

  .bubble-1-blue {
    background-color: var(--theatre-blue-1)
  }

  .bubble-yellow {
    background-color: var(--js-yellow);
  }

  .bubble-orange {
    background-color: #DD4B25;
  }

  .bubble-blue {
    background-color: #254BDD;
  }

  .bubble-pink {
    background-color: #ba7dc5;
  }

  .process--para {
    margin: 0 2em;
    padding: 1em 0;
  }

  .process--image {
    width: 90%;
    margin: 4em auto;
    border-radius: 7px;
    box-shadow: 6.7px 13.4px 13.4px hsl(0deg 0% 0% / 0.29);
    transition: transform .4s;
  }

  .process--image:hover {
    -ms-transform: scale(2); /* IE 9 */
    -webkit-transform: scale(2); /* Safari 3-8 */
    transform: scale(2);
  }

  .enlarge-image {
    width: 100% !important;
  }

  .no-zoom:hover {
    -ms-transform: scale(1); /* IE 9 */
    -webkit-transform: scale(1); /* Safari 3-8 */
    transform: scale(1);
  }

  .border-grid {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }


  @media (min-width: 700px) {

    .process {
      background: linear-gradient(180deg, rgba(250, 250, 249, 0.1) 0%, rgba(41, 54, 34, 0.2) 50%, rgba(15, 23, 11, 0.2) 100%);
    }

    .process--step {
      flex-direction: row;
    }

    .step-bubble-l {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      min-height: 0;
      padding: 2em;
      border-radius: 20px 0 0 20px;
    }

    .step-bubble-r {
      grid-column: 7/13;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      width: 50%;
      min-height: 0;
      padding: 2em;
      border-radius: 0 20px 20px 0;
    }

  }

</style>