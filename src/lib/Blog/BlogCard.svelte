<script>
  import { createTagSlug } from "$lib/helpers/tags";

  export let post;
</script>

<div class="l: | u: bg-background-secondary | c: card " style="">
    <article class="">
        <a href="/blog/{post.slug}">
            <h3 class="text-step-1">
                {post.blog_post_title}
            </h3>
            <p class="text-step--1">
                {post.meta_description}
            </p>
            {#if post.tags}
                {#each post.tags as tag}
                    <a
                        data-sveltekit-reload
                        href={'/blog/tag/' + createTagSlug(tag)}
                        class="text-step--1"
                    >{tag}</a
                    >
                {/each}
            {/if}
            <div>Read more</div>
        </a>
    </article>
</div>

<style lang="scss">
  .card {
    padding: 2rem;
    border-radius: 8px;
  }
</style>

