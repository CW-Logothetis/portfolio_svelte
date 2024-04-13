<script>
	import { onMount } from 'svelte';
	import BlogCard from '$lib/Blog/BlogCard.svelte';
	import { createTagSlug } from '$lib/helpers/tags.js';

	export let data;

	let loadingRef;

	let page = 0;

	let posts = [];

	let newPosts = [];

	let tags = data.tags;

	async function fetchPosts() {
		newPosts = await data.filteredPosts.filter(
			(value, index) => index >= page * 10 && index < (page + 1) * 10
		);
	}

	onMount(async () => {
		await fetchPosts();
		page++;
		const loadingObserver = new IntersectionObserver(async (entries) => {
			const first = entries[0];
			if (first.isIntersecting) {
				await fetchPosts();
				page++;
			}
		});
		loadingObserver.observe(loadingRef);
	});

	$: posts = [...posts, ...newPosts];
</script>


<svelte:head>
	<link rel="canonical" href="https://www.cognitivplus.com/blog/tag/{data.tag}" />
	<meta
		data-i18n-key="blog.meta.description"
		name="description"
		content="Discover the latest in AI Document review technology at the Cognitiv+ blog. Stay informed on the latest trends and developments in this rapidly changing field, and learn how to apply AI to your own work and life."
	/>
	<title>Blog</title>
</svelte:head>



<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-4xl">
			<h1 class="text-3xl font-bold tracking-tight text-[var(--black)] sm:text-4xl mb-8">Cognitiv+ Blog</h1>
			<h2 class="text-lg mt-1 tracking-tight text-[var(--black)] sm:text-xl mb-2">News and trends on legal document review and artificial intelligence.</h2>
			<p class="text-lg leading-6 text-[var(--dark-grey)] mb-10">
				Discover the latest in AI Document review technology at the Cognitiv+ blog. Stay informed on the latest trends and developments in this rapidly changing field, and learn how to apply AI to your own work and life. Learn how to grow your business with our expert advice.
			</p>
			
			{#if tags}
			<div class="mt-4 flex flex-wrap gap-2">
				{#each tags as tag}
				<a
				data-sveltekit-reload
				href={'/blog/tag/' + createTagSlug(tag)}
				class="relative rounded-full leading-2 bg-[var(--light-grey)] mr-2  px-3  py-1.5 font-medium text-xs text-[var(--dark-grey)] hover:bg-gray-50 transition-background-color duration-200"
				>{tag}</a
				>
				{/each}
			</div>
			{/if}
			
			<h3 class="mt-12 text-center font-bold text-[var(--dark-grey)]">{data.tag}</h3>
			<div class="space-y-20 lg:mt-4 lg:space-y-20">
				{#each posts as post}
					<BlogCard {post} />
				{/each}
				{#if newPosts.length}
					<p bind:this={loadingRef} class="loading">...Loading</p>
				{/if}
			</div>
		</div>
	</div>
</div>

