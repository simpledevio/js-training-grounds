# JS Training Grounds

Quickstart tutorials for intermediate JS topics like React, TypeScript, Next.js, Tailwind, and more.

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run devo`            | Starts local dev server and opens browser        |
| `npm run devh`            | Starts local dev server exposed to network       |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm outdated`            | View outdated packages                           |
| `npx @astrojs/upgrade`    | Update Starlight                                 |

## Project Structure

**NOTE: To see all the files in the project inside VS Code, comment out the list of files in `.vscode/settings.json`.**

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## VS Code Extensions

For the best experience, you should install these extensions in VS Code.

- [Astro VS Code Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [MDX VS Code Extension](https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx)

## Resources

- [Starlight documentation](https://starlight.astro.build/)
- [Astro documentation](https://docs.astro.build)
- [Astro Discord server](https://astro.build/chat)
