<script>

  export let post_body, blog_post_title;

   /**
   * as the blog content is inserted via Svelte's @html post_body,
   * any CSS in this component's style block won't work.
   * This 'styles' is a method to set CSS just for this file, instead of having to add them to the global stylesheet
   */

  $: styles = `
    <style>

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

        #blog_content img {
            margin-block: 3rem;
            image-rendering: crisp-edges;
            transition: transform .4s;
            border: solid 1px grey;
            border-radius: var(--radius-s);
            background-color: var(--light-shade);
        }

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
    <header class="u: bg-background-secondary">
        <div class="l: center flow">
            <h1>{blog_post_title}</h1>
        </div>
    </header>

    <div class="l: center flow" style="--center-max-inline-size: 80ch">
        <div class="l: stack" style="--block: 1rem; --space: 1rem" id="blog_content">
            {@html post_body}
        </div>
    </div>

    <footer style="min-height: 100px"></footer>
</article>

<style lang="scss">
  h1 {
    font-size: var(--step-4);
  }
</style>