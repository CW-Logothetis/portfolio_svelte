<script>
  export let post;
</script>

<div class=" u: bg-background-secondary | e: card ">
    <article>
        <h3 class=" u: text-step-1 ">
            {post.blog_post_title}
        </h3>
        <p class=" u: text-step--1 ">
            {post.meta_description}
        </p>
        <a
            href="/blog/{post.slug}"
            aria-label="Read more about {post.blog_post_title}"
        >
            Read the post
        </a>
    </article>
</div>

<style lang="scss">
  .card {
    padding: 2rem;
    border-radius: 8px;
  }

  .card * + * {
    margin-block: 1.5rem;
  }
</style>

