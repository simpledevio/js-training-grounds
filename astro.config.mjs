// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'JS Training Grounds',
			social: {
				github: 'https://github.com/simpledevio/js-training-grounds',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About', slug: 'about' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Vue 3', slug: 'guides/vue-3' },
						{ label: 'React (Coming Soon)', slug: 'guides/react' },
						{ label: 'Svelte 5 (Coming Soon)', slug: 'guides/svelte-5' },
						// { label: 'TypeScript (Coming Soon)', slug: 'guides/typescript' },
					],
				},
			],
			expressiveCode: {
        // Replace the default themes with a custom set of bundled themes
        themes: ['starlight-light', 'dark-plus'],
				useStarlightUiThemeColors: true,
      },
			lastUpdated: true,
		}),
	],
});
