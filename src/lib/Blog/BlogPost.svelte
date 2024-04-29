<script>
  import { createTagSlug } from "$lib/helpers/tags";

  export let post_body, blog_post_title, tags;

  $: styles = `
    <style>

        #blog_content {
            padding-inline: 5%;
        }

        #blog_content section {
            margin-block-end: 5rem;
        }

        #blog_content h2 {
            font-size: var(--step-2);
            margin-block-end: 1rem;
        }

        #blog_content h3 {
            font-size: var(--step-1);
            margin-block: 3rem 0.5rem;
        }

        #blog_content p {
            margin-block-end: 1.5rem;
        }

        #blog_content li {
            /*margin-block-end: 1rem;*/
        }

        #blog_content img {
            margin-block: 3rem;
            image-rendering: crisp-edges;
            transition: transform .4s;
            border: solid 1px grey;
            border-radius: var(--radius-s);
            background-color: var(--light-shade);
        }

        /*#blog_content img:hover {*/
        /*    -ms-transform: scale(1.15); !* IE 9 *!*/
        /*    transform: scale(1.15);*/
        /*}*/

        #blog_content figcaption {
            font-size: var(--step--1);
            opacity: 0.5;
        }

        #blog_content pre, #blog_content details {
            max-inline-size: 90ch;
            padding: 1rem;
            font-size: var(--step--1);
            line-height: 34px;
            background: var(--background-secondary);
            border-top: none;
            border-radius: var(--radius-s);
            overflow-x: auto;
        }

        #blog_content details > p {
            margin-block: 1rem;
            font-size: var(--step--1);
            line-height: 24px;
        }

    </style>
`;
</script>

{@html styles}

<article>
    <header class="bg-background-secondary">
        <div class="center flow" style="">

            <h1 class="">{blog_post_title}</h1>

            <!--    <div class="">-->
            <!--		<img-->
            <!--			src={featured_image_url}-->
            <!--			alt={blog_post_title}-->
            <!--			class=""-->
            <!--		/>-->
            <!--		<div class=""></div>-->
            <!--	</div>-->
            <!--            <div class="">-->
            <!--                {#if tags}-->
            <!--                    {#each tags as tag}-->
            <!--                        <a-->
            <!--                            data-sveltekit-reload-->
            <!--                            href={'/blog/tag/' + createTagSlug(tag)}-->
            <!--                            style="margin-inline-end: 1rem"-->
            <!--                            >{tag}</a-->
            <!--                        >-->
            <!--                    {/each}-->
            <!--                {/if}-->
            <!--            </div>-->
        </div>
    </header>

    <div class="center flow" style="--center-max-inline-size: 80ch">
        <div class="stack" style="--block: 0rem; --space: 0rem" id="blog_content">
            {@html post_body}
        </div>
    </div>
</article>

<style lang="scss">
  h1 {
    font-size: var(--step-4);
  }

  h2 {
    font-size: var(--step-3);
  }
</style>