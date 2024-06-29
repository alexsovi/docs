# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

Useful guide: https://docusaurus.io/docs/markdown-features

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Add new localization

1. Add new locale to `docusaurus.config.js`
2. Generate localization with `npm run write-translations -- --locale $new-locale`
3. Remove obsolete files (e.g. `_category_.json`)
4. `npm run start -- --locale $new-locale`
5. You're ready to translate the wiki

More: https://docusaurus.io/docs/i18n/tutorial