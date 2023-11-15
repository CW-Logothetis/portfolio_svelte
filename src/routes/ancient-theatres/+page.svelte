<script>
  import Bugs from "$lib/components/ancient-theatres/Bugs.svelte";
  import Hero from "$lib/components/ancient-theatres/Hero.svelte";
  import Intro from "$lib/components/ancient-theatres/Intro.svelte";
  import Process from "$lib/components/ancient-theatres/Process.svelte";
  import NextSteps from "$lib/components/ancient-theatres/NextSteps.svelte";
  import "$lib/scss/global.scss";

  let techStack = [
    { title: 'Stack:', description: 'Vanilla JS - CSS - Git/Github' },
    { title: 'Design:', description: 'Figma - VS Code - Chrome Dev Tools' },
    { title: 'Demo:', description: '<a href="https://ancient-theatres.netlify.app/" class="intro--para-col-2" target="_blank" rel="noreferrer">Netlify</a>' }
  ];
</script>

<div>
  <Intro>
    <span slot="heading">Ancient Greek Theatres</span>
    <div slot="intro-para">
      <p>As I’m a bit of a history nut, I’ve visited quite a few of the archaeological sites in Greece and the southern Balkans. So when I was thinking of a personal project to test my Figma and responsive design skills, I thought this would be a good fit. Especially as I have my own photographs to use.</p>
      <p>There are over a hundred Greek and then Roman theatres, so I just selected five from the Greek period, but nipped over the border into modern day Albania to show two that are relatively unknown.</p>
      <p>Note: as the aim here was to practice web design, the theatre pages use placeholder or duplicated text.</p>
    </div>

    <div slot="tech-stack">
      {#each techStack as { title, description }}
        <div class="line">
          <div class="title">{title}</div>
          <div class="description">{@html description}</div>
        </div>
      {/each}
    </div>

    <div slot="descriptions">


    </div>


  </Intro>

  <Hero />
  <Process />
  <Bugs />
  <NextSteps />
</div>