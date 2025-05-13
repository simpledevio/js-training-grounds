// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import astroExpressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'JS Training Grounds',
			social: {
				github: 'https://github.com/simpledevio/js-training-grounds',
			},
			sidebar: [
				// { slug: 'about' },
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
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
			expressiveCode: {
        // Replace the default themes with a custom set of bundled themes:
        // "dracula" (a dark theme) and "solarized-light"
        // themes: ['light-plus', 'dark-plus'],
        themes: ['starlight-light', 'dark-plus'],
				useStarlightUiThemeColors: true,
      },
		}),
	],
});
