<script>
  import { onMount } from "svelte";
  import BlogCard from "$lib/Blog/BlogCard.svelte";
  import { createTagSlug } from "$lib/helpers/tags";

  export let data;

  let loadingRef;

  let page = 0;
  let posts = [];
  // tags come in as a Set, which svelte can't iterate over in each block
  $: tags = Array.from(data.tags);
  let isLoading = false; // New variable to track loading state
  const debounceDelay = 500;

  // Dynamically import images
  // const imageModules = import.meta.glob('$lib/img/blog/featured_images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}', {
  // 	eager: true, // Instantly imports all matched modules.
  // });

  /**
   * Fetches a chunk of posts based on the current "page" number and updates the posts array.
   * (TODO: it's not really a page - bad name)
   * Sets a loading state and debounces the loading indicator to prevent flickering.
   */
  async function fetchPosts() {
    isLoading = true;
    const newPosts = data.posts.slice(page * 8, (page + 1) * 8);
    if (newPosts.length > 0) {
      posts = [...posts, ...newPosts]; // Create a new array to trigger reactivity
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
        console.log({ entries });
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
  $: console.log({ posts });
</script>

<svelte:head>
    <link rel="canonical" href="https://www.cognitivplus.com/blog" />
    <meta
        data-i18n-key="blog.meta.description"
        name="description"
        content="Discover the latest in AI Document review technology at the Cognitiv+ blog. Stay informed on the latest trends and developments in this rapidly changing field, and learn how to apply AI to your own work and life."
    />
    <title>Blog</title>
</svelte:head>


<div class="center flow" style="--center-max-inline-size: 110ch">
    <div>
        <h1 class="text-step-3">Blog</h1>
        <h2 class="text-step-2">Learning in public</h2>
        <p class="text-step-0">
            Articles about work and personal projects.
        </p>
    </div>

    {#if tags}
        <div class="text-step--1">
            {#each tags as tag}
                <a
                    data-sveltekit-reload
                    href={'/blog/tag/' + createTagSlug(tag)}
                    class=""
                >
                    {tag}
                </a>
            {/each}
        </div>
    {/if}

    <div class="c: post__grid">
        {#each posts as post}
            <BlogCard {post} />
        {/each}
        {#if isLoading}
            <p class="loading">...Loading</p>
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