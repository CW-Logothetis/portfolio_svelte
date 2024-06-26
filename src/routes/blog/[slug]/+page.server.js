import { error } from '@sveltejs/kit';
import { posts } from '$lib/pageText/blog/data';

export function load({params}) {

    const post = posts.find((post) => post.slug === params.slug);

    const index = posts.indexOf(post);

    // The order in which the posts are displayd is reversed in respect with the
    // index. The 0th is the newer and (posts.legnth - 1) is the oldest.
    const prev = (post !== posts.length - 1) ? posts[index + 1]: undefined;
    const next = (post !== 0) ? posts[index - 1]: undefined;

    if (!post) error(404);
    
    return {post, prev, next};
}