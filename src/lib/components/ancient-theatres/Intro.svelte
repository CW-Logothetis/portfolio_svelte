<section id="introduction" class="intro">

  <div class="center" style="--center-max-inline-size: 70ch">
    <h1 class="intro--title">
      <slot name="heading">
        <span class="missing">Missing h1</span>
      </slot>
    </h1>
    <div class="intro--para">
      <slot name="intro-para">
        <span class="missing">Missing intro p</span>
      </slot>
    </div>
  </div>

  <div
    class="intro-container center"
    style="--center-max-inline-size: 70ch"
  >
    <slot name="tech-stack"> <span class="missing">Missing tech</span></slot>
  </div>


</section>