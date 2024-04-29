export function getAllTags(posts) {
    let tags = new Set();

    posts.forEach((post) => {
        post.tags?.forEach((t) => {tags.add(t)});
    });

    return tags;
}

export function createTagSlug(tag) {
    return tag.replaceAll(' ', '-').replaceAll('+', '%2B');
}