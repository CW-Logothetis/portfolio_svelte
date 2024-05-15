import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

export default defineConfig ({

	plugins: [
		enhancedImages(),
		sveltekit()
	],
	css: {
		preprocessorOptions: {
			scss: {
				// additionalData: '@use "src/variables.scss" as *;'
			}
		}
	},
	// Vitest Configuration
	test: {
		environment: 'jsdom', // jsdom simulates browser, cf 'node'
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
