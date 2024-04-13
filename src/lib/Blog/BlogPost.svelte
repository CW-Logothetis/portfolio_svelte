<script>
  import { createTagSlug } from "$lib/helpers/tags";

  export let featured_image_url;
  export let post_body;
  export let published_date;
  export let blog_post_title;
  export let author;
  export let tags;
  export let prev;
  export let next;

  $: styles = `<style>
                    
                  #blog_content > * {
                    max-width: 75ch;
                  }

                  #blog_content div {
                    margin-bottom: 0.8rem;
                  }

                  #blog_content p {
                    margin-bottom: 0.5rem;
                    
                  }
                    
                  #blog_content a {
                    text-decoration: none;
                    font-weight: 700;
                    color: var(--primary);
                  }

                  #blog_content a:hover, 
                  #blog_content a:active, 
                  #blog_content a:focus {
                    color: var(--medium-blue);
                  }

                  #blog_content img {
                    margin: 1.5rem 0;
                  }

                  iframe {
                    margin: 0 auto;
                  }

                </style>`;
</script>

{@html styles}

<div class="bg-background-secondary" style="min-width: 100%">
    <div class="center flow" style="--center-max-inline-size: 110ch">
        <h1 class="">{blog_post_title}</h1>

        <!--    <div class="">-->
        <!--		<img-->
        <!--			src={featured_image_url}-->
        <!--			alt={blog_post_title}-->
        <!--			class=""-->
        <!--		/>-->
        <!--		<div class=""></div>-->
        <!--	</div>-->
        <!--    <div class="">-->
        <!--        {#if tags}-->
        <!--            {#each tags as tag}-->
        <!--                <a-->
        <!--                    data-sveltekit-reload-->
        <!--                    href={'/blog/tag/' + createTagSlug(tag)}-->
        <!--                    class=""-->
        <!--                    >{tag}</a-->
        <!--                >-->
        <!--            {/each}-->
        <!--        {/if}-->
        <!--    </div>-->
    </div>
</div>

<div class="center flow" style="--center-max-inline-size: 110ch">
    <div class="stack" style="--block: 1.5rem; --space: 1.5rem" id="blog_content">{@html post_body}</div>
</div>