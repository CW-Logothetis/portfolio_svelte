<script>
  import { onMount } from "svelte";
  import BlogCard from "$lib/Blog/BlogCard.svelte";
  import { createTagSlug } from "$lib/helpers/tags.js";

  export let data;

  let loadingRef;

  let page = 0;

  let posts = [];

  let newPosts = [];

  let tags = data.tags;

  async function fetchPosts() {
    newPosts = await data.filteredPosts.filter(
      (value, index) => index >= page * 10 && index < (page + 1) * 10
    );
  }

  onMount(async () => {
    await fetchPosts();
    page++;
    const loadingObserver = new IntersectionObserver(async (entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        await fetchPosts();
        page++;
      }
    });
    loadingObserver.observe(loadingRef);
  });

  $: posts = [...posts, ...newPosts];
</script>


<svelte:head>
    <link rel="canonical" href="https://www.cwlogo.vercel.app/blog/tag/{data.tag}" />
    <meta
        data-i18n-key="blog.meta.description"
        name="description"
        content="Notes from my projects both at work and for pleasure."
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
        <div class="">
            {#each tags as tag}
                <a
                    data-sveltekit-reload
                    href={'/blog/tag/' + createTagSlug(tag)}
                    class=""
                >{tag}</a
                >
            {/each}
        </div>
    {/if}

    <h3 class="">{data.tag}</h3>
    <div class="">
        {#each posts as post}
            <BlogCard {post} />
        {/each}
        {#if newPosts.length}
            <p bind:this={loadingRef} class="loading">...Loading</p>
        {/if}
    </div>
</div>


