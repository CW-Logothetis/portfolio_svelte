import { posts } from '$lib/blogText/data';
import { getAllTags } from '$lib/helpers/tags';

export function load() {

    let tags = getAllTags(posts);

    for (const post of posts) {
        // post.featured_image_url = '/../' + post.featured_image_url;
        const date = new Date(post.published_date.toString());
        const datestr = date.toLocaleString("en-US", { month: "long" }) +
            ' ' + date.toLocaleString("en-US", { day: "2-digit" }) + ', ' +
            date.toLocaleString("en-US", { year: "numeric" });
        post.published_date = datestr;
    }

    return {
        posts: posts.map((post) => ({
            name: post.name,
            blog_post_title: post.blog_post_title,
            post_seo_title: post.post_seo_title,
            post_language: post.post_language,
            slug: post.slug,
            author: post.author,
            tags: post.tags,
            meta_description: post.meta_description,
            published_date: post.published_date,
            last_modified_date: post.last_modified_date,
            post_body: post.post_body,
            featured_image_url: post.featured_image_url,
            status: post.status,
            archived: post.archived
        })),
        tags: tags
    };
}