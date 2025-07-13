// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'JS Training Grounds',
			social: [{
				icon: 'github', label:'GitHub', href: 'https://github.com/simpledevio/js-training-grounds',
			}],
			sidebar: [
				{
					label: 'Introduction',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About', slug: 'about' },
						{ label: 'Support Us', slug: 'support-us' },
					],
				},
				{
					label: 'Quickstarts',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'React', slug: 'guides/react' },
						{ label: 'Vue 3', slug: 'guides/vue-3' },
						{ label: 'Svelte 5', slug: 'guides/svelte-5' },
						{ label: 'Angular', slug: 'guides/angular' },
						{ label: 'Tailwind (Coming Soon)', slug: 'guides/tailwind' },
						{ label: 'TypeScript (Coming Soon)', slug: 'guides/typescript' },
						{ label: 'Next.js (Coming Soon)', slug: 'guides/next-js' },
						{ label: 'Sass (Coming Soon)', slug: 'guides/sass' },
						// { label: 'Contributing Guide (Coming Soon)', slug: 'guides/contributing-guide' },
					],
				},
				{
					label: 'Contributing',
					items: [
						{ label: 'Markdown', slug: 'guides/markdown' },
						{ label: 'Contributing Guide', slug: 'guides/contributing-guide' },
					],
				}
			],
			expressiveCode: {
        // Replace the default themes with a custom set of bundled themes
        themes: ['starlight-light', 'dark-plus'],
				useStarlightUiThemeColors: true,
      },
			lastUpdated: true,
			pagination: false,
		}),
	],
});
