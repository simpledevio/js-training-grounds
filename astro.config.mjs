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
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Vue 3', slug: 'guides/vue-3' },
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
        // themes: ['dark-plus'],
      },
		}),
	],
});
