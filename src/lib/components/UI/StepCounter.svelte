<script>
  export let text = "";
  export let colorClass = "";
</script>

<div class="border-grid">
  <div class={`empty-box empty-box-1 ${colorClass}`}></div>
  <div class={`step-number ${colorClass}`}>{text}</div>
  <div class={`empty-box empty-box-2 ${colorClass}`}></div>
</div>

<style lang="scss">

  .border-grid {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  .empty-box {
    height: 3em;
    margin-top: 0.2em;
  }

  .empty-box-1 {
    grid-column: 1/4;
    grid-row: 1;
    border-right: dashed 1px;
  }

  .empty-box-2 {
    grid-column: 1/4;
    grid-row: 3;
    border-right: dashed 1px;
  }

  .step-number {
    grid-column: 3/5;
    grid-row: 2;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 7em;

    font-weight: 600;

    border: 2px solid;
    border-radius: 20px;
  }

  .color-theatre, .color-theatre {
    border-color: var(--theatre-green-3);
    color: var(--theatre-green-3);
  }

  .color-chingu, .color-chingu {
    border-color: var(--theatre-blue-3);
    color: var(--theatre-blue-3);
  }

</style>