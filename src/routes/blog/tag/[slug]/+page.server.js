import { redirect } from '@sveltejs/kit';
import { posts } from '$lib/shared/blog/data';
import { getAllTags } from '$lib/helpers/tags';

export function load({ params }) {

    let tags = getAllTags(posts);
    let tagSlug = params.slug;
    let tag = tagSlug.replaceAll('-', ' ');

    let filteredPosts;

    if (!tags) {
        filteredPosts = posts;
    } else {
        filteredPosts = posts.filter((post) => post.tags?.includes(tag));
    }

    if (filteredPosts.length >  0) {
        return { filteredPosts, tags, tag};
    }

    throw redirect(303, '/blog');
}