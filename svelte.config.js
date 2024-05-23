import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: true
		}),
		vitePreprocess({})
	],

	kit: {
		adapter: adapter(),
		files: {
			lib: 'src/lib'
		}
	}
};

export default config;
