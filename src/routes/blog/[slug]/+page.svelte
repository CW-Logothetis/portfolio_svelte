<script>
	import BlogPost from '$lib/components/blog/BlogPost.svelte';
	export let data;

	let featured_image_url = data.post.featured_image_url;
	let post_body = data.post.post_body;
	let published_date = data.post.published_date;
	let blog_post_title = data.post.blog_post_title;
	let meta_description = data.post.meta_description;
	let author = data.post.author
	let tags = data.post.tags;
	let slug = data.post.slug;
	let prev = data.prev;
	let next = data.next;
</script>

<svelte:head>
	<link rel="canonical" href="https://www.cognitivplus.com/blog/{slug}">
	<meta name="description" content="{meta_description}">
	<title>{blog_post_title}</title>
</svelte:head>

<BlogPost
	{featured_image_url}
	{published_date}
	{post_body}
	{blog_post_title}
	{author}
	{tags}
	{prev}
	{next}
/>
