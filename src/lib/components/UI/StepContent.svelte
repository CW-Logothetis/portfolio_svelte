<script>
  export let text;
  export let colorClass;
  export let image;
  export let alt;
  export let isOddStep;

  // generate paragraphs
  function getParagraphs(text) {
    return text.map(p => `<p class="c: process--para">${p}</p>`).join('');
  }
</script>

{#if isOddStep}
    <div class="c: step-bubble-l 'bubble-white'">
        {@html getParagraphs(text)}
    </div>
    <div class="c: step-bubble-r {colorClass}">
        <enhanced:img src="{image}?w=1280;640;400" sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" class="process--image" alt="{alt}" />
    </div>
{:else}
    <div class="c: step-bubble-l {colorClass}">
        <enhanced:img src="{image}?w=1280;640;400" sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px" class="process--image" alt="{alt}" />
    </div>
    <div class="c: step-bubble-r bubble-white">
        {@html getParagraphs(text)}
    </div>
{/if}