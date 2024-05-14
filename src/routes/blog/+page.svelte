<script>
  import { onMount } from "svelte";
  import BlogCard from "$lib/Blog/BlogCard.svelte";

  export let data;

  let loadingRef; // intersection observer binds to this

  let page = 0;
  let posts = [];
  let isLoading = false;
  const debounceDelay = 500;

  /**
   * Fetches a chunk of posts based on the current "page" number and updates the posts array.
   * Sets a loading state and debounces the loading indicator to prevent flickering.
   */
  async function fetchPosts() {
    isLoading = true;
    const newPosts = data.posts.slice(page * 8, (page + 1) * 8);
    if (newPosts.length > 0) {
      posts = [...posts, ...newPosts]; // Create a new array to trigger Svelte reactivity
      page++;
    }
    // Not set up DB, so data will be v quick and might have flicker. So, debounce to mimic load.
    setTimeout(() => {
      isLoading = false;
    }, debounceDelay);
  }

  /**
   * Sets up an IntersectionObserver to fetch more posts when the loadingRef element is in view.
   * Cleans up the observer when the component is destroyed.
   */
  onMount(() => {
    fetchPosts();

    const loadingObserver = new IntersectionObserver((entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          fetchPosts();
        }
      },
      {
        root: null, // viewport
        threshold: 1, // callback when 100% of the target is visible or not
        rootMargin: "0px 0px 0px 0px" // trigger exactly when the target enters or exits the viewport
      });

    loadingObserver.observe(loadingRef);

    return () => {
      loadingObserver.disconnect(); // Clean up when component destroyed
    };
  });

</script>

<svelte:head>
    <link rel="canonical" href="https://www.cwlogo.vercel.app/blog" />
    <meta
        name="description"
        content="Notes from my projects both at work and for pleasure."
    />
    <title>Blog</title>
</svelte:head>


<div class="l: center flow" style="--center-max-inline-size: 110ch">
    <div>
        <h1 class="u: text-step-3">Blog</h1>
        <h2 class="u: text-step-2">Learning in public</h2>
        <p class="u: text-step-0">
            Articles about work and personal projects.
        </p>
    </div>

    <div class="e: post__grid">
        {#each posts as post}
            <BlogCard {post} />
        {/each}
        {#if isLoading}
            <p>...Loading</p>
        {/if}
    </div>
    <span bind:this={loadingRef}></span>
</div>


<style lang="scss">
  .post__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 32px;
  }
</style>