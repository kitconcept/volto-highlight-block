<picture>
  <source align="right" media="(prefers-color-scheme: dark)" srcset="https://kitconcept.com/kitconcept-white.svg">
  <img align="right" width="300" alt="kitconcept, GmbH" src="https://kitconcept.com/kitconcept-black.svg">
</picture>

# Highlight block

[![npm](https://img.shields.io/npm/v/@kitconcept/volto-highlight-block)](https://www.npmjs.com/package/@kitconcept/volto-highlight-block)
[![](https://img.shields.io/badge/-Storybook-ff4785?logo=Storybook&logoColor=white&style=flat-square)](https://kitconcept.github.io/volto-highlight-block/)
[![Code analysis checks](https://github.com/kitconcept/volto-highlight-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-highlight-block/actions/workflows/code.yml)
[![Unit tests](https://github.com/kitconcept/volto-highlight-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-highlight-block/actions/workflows/unit.yml)

This add-on provides a block that features a big image picked from the images on the site on top and a kicker, title, and description editable inline.
It allows also to set colors on the background of the text area. It features seven customizable colors by default. See the block in action: [www.dlr.de](https://www.dlr.de/de/das-dlr).

## Compatibility

| volto-highlight-block version | Volto version | VLT version
|-------------|---------------|
|   3.x.x  |   >= Volto 17.0.0 |
|   4.x.x  |   >= Volto 17.18.0 or >=Volto 18.0.0-alpha.36  |
|   5.x.x  |   >= Volto 18.0.0  | >= VLT 8.x

## Customizable colors

The Highlight block lets you set a background color on the description (text) area, and ships with seven color palettes by default.

Each palette is an object with an internal `name`, a `label`, and a `style` object that sets two CSS custom properties: `--descriptionColor` (the background) and `--descriptionColor-foreground` (the text/foreground color). These are applied to the description area when the palette is selected.

```js
const HIGHLIGHT_COLORS = [
  {
    name: 'highlight-custom-color-1',
    label: 'Grey',
    style: {
      '--descriptionColor': '#ECEBEB',
      '--descriptionColor-foreground': '#000',
    },
  },
  {
    name: 'highlight-custom-color-2',
    label: 'Teal',
    style: {
      '--descriptionColor': '#306F7E',
      '--descriptionColor-foreground': '#fff',
    },
  },
  // ...
];
```

Override or add your own palettes via the block's config:

```js
config.blocks.blocksConfig.highlight.descriptionColors = HIGHLIGHT_COLORS;
```

## Upgrading from 4.x to 5.x

Version 5 changes how the description colors are defined and rendered. The selected color is still stored as the palette `name` (e.g. `highlight-custom-color-1`), so **existing content keeps its selection**, but if you customized the colors or the styling, note the following:

- **Palettes now carry their own `style`.** Each entry in `descriptionColors` must include a `style` object setting `--descriptionColor` (background) and `--descriptionColor-foreground` (text). The previous `{ name, label }` shape is no longer enough.
- **The `--highlight-custom-color-N` / `--highlight-custom-text-color-N` CSS custom properties are gone.** They are no longer read; remove any CSS that set them and move those values into each palette's `style` instead.
- **The volto-light-theme color fallback was removed.** Colors now come solely from the palette `style`.
- **The default palette changed** (e.g. the first color is now `Grey` instead of `Medium Blue`), so default content will render with different colors.

Version 5 also requires Volto 19 or later and adds an inline-editable **kicker** field above the title.

## Screenshots

![Highlight block](https://github.com/kitconcept/volto-highlight-block/raw/main/screenshot.jpg)

![Highlight block - edit mode](https://github.com/kitconcept/volto-highlight-block/raw/main/screenshot-edit.jpg)

## Installation

To install your project, you must choose the method appropriate to your version of Volto.


### Volto 17 and earlier

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-highlight-block
cd my-volto-project
```

Add `@kitconcept/volto-highlight-block` to your package.json:

```JSON
"addons": [
    "@kitconcept/volto-highlight-block"
],

"dependencies": {
    "@kitconcept/volto-highlight-block": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start volto with:

```
yarn start
```

### Volto 18 and later

Add `@kitconcept/volto-highlight-block` to your `package.json`:

```json
"dependencies": {
    "@kitconcept/volto-highlight-block": "*"
}
```

Add `@kitconcept/volto-highlight-block` to your `volto.config.js`:

```javascript
const addons = ['@kitconcept/volto-highlight-block'];
```

If this package provides a Volto theme, and you want to activate it, then add the following to your `volto.config.js`:

```javascript
const theme = '@kitconcept/volto-highlight-block';
```

## Test installation

Visit http://localhost:3000/ in a browser, login, and check the awesome new features.


## Development

The development of this add-on is done in isolation using a new approach using pnpm workspaces and latest `mrs-developer` and other Volto core improvements.
For this reason, it only works with pnpm and Volto 18 or later.


### Pre-requisites

-   [Node.js](https://6.docs.plone.org/install/create-project.html#node-js)
-   [Make](https://6.docs.plone.org/install/create-project.html#make)
-   [Docker](https://6.docs.plone.org/install/create-project.html#docker)


### Make convenience commands

Run `make help` to list the available commands.

```text
help                             Show this help
install                          Installs the add-on in a development environment
start                            Starts Volto, allowing reloading of the add-on during development
build                            Build a production bundle for distribution of the project with the add-on
i18n                             Sync i18n
ci-i18n                          Check if i18n is not synced
format                           Format codebase
lint                             Lint, or catch and remove problems, in code base
release                          Release the add-on on npmjs.org
release-dry-run                  Dry-run the release of the add-on on npmjs.org
test                             Run unit tests
ci-test                          Run unit tests in CI
backend-docker-start             Starts a Docker-based backend for development
storybook-start                  Start Storybook server on port 6006
storybook-build                  Build Storybook
acceptance-frontend-dev-start    Start acceptance frontend in development mode
acceptance-frontend-prod-start   Start acceptance frontend in production mode
acceptance-backend-start         Start backend acceptance server
ci-acceptance-backend-start      Start backend acceptance server in headless mode for CI
acceptance-test                  Start Cypress in interactive mode
ci-acceptance-test               Run cypress tests in headless mode for CI
```

### Development environment set up

Install package requirements.

```shell
make install
```

### Start developing

Start the backend.

```shell
make backend-docker-start
```

In a separate terminal session, start the frontend.

```shell
make start
```

### Lint code

Run ESlint, Prettier, and Stylelint in analyze mode.

```shell
make lint
```

### Format code

Run ESlint, Prettier, and Stylelint in fix mode.

```shell
make format
```

### i18n

Extract the i18n messages to locales.

```shell
make i18n
```

### Unit tests

Run unit tests.

```shell
make test
```

### Run Cypress tests

Run each of these steps in separate terminal sessions.

In the first session, start the frontend in development mode.

```shell
make acceptance-frontend-dev-start
```

In the second session, start the backend acceptance server.

```shell
make acceptance-backend-start
```

In the third session, start the Cypress interactive test runner.

```shell
make acceptance-test
```

## License

The project is licensed under the MIT license.

## Credits and Acknowledgements 🙏

This package is developed and maintained by [kitconcept GmbH](https://kitconcept.com) ❤️.
