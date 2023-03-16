<script>
 
 import {browser} from '$app/environment'
 import { onMount, tick } from 'svelte';
 let heading1
 let h1Styles
 let h1fSize

 onMount(() => {
    h1Styles = getComputedStyle(heading1)
    h1fSize = h1Styles.fontSize
})

function handleResize() {
    h1fSize = h1Styles.fontSize
}

</script>

<svelte:window on:resize={handleResize}
/>

<section>
    <h1 bind:this={heading1}>H1 Heading {h1fSize}</h1>
    <h2>H2 Heading</h2>
    <h3>H3 Heading</h3>
    <h4>H4 Heading</h4>
    <h5>H5 Heading</h5>
    <h6>H6 Heading</h6>
    <p>paragraph</p>
</section>

<style lang="scss">

    :root {
        --font-size-1: clamp(2rem, 1.8rem + 0.85vw, 2.75rem);
        --font-size-2: clamp(1.8rem, 1.6rem + 0.73vw, 2.45rem);
        --font-size-3: clamp(1.6rem, 1.5rem + 0.56vw, 2.1rem);
        --font-size-4: clamp(1.4rem, 1.3rem + 0.45vw, 1.8rem);
        --font-size-5: clamp(1.2rem, 1.1rem + 0.28vw, 1.45rem);
        --font-size-6: clamp(0.9rem, 0.9rem + 0.11vw, 1rem);
        --font-size-body: clamp(1rem, 0.9rem + 0.28vw, 1.4rem);;
    }

    h1 {
        font-size: var(--font-size-1);
        color: black;
    }

    h2 {
        font-size: var(--font-size-2);
        color: black;
    }

    h3 {
        font-size: var(--font-size-3);
        color: black;
    }

    h4 {
        font-size: var(--font-size-4);
        color: black;
    }

    h5 {
        font-size: var(--font-size-5);
    }

    h6 {
        font-size: var(--font-size-6);
    }

    p {
        font-size: var(--font-size-body);
    }

    section {
        padding: calc(8px + 1.5625vw);
    }

</style>