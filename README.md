# Highlight block by kitconcept

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-highlight-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-highlight-block)
[![Build Status](https://github.com/kitconcept/volto-highlight-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-highlight-block/actions)
[![Build Status](https://github.com/kitconcept/volto-highlight-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-highlight-block/actions)
[![Build Status](https://github.com/kitconcept/volto-highlight-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-highlight-block/actions)

![kitconcept GmbH](https://github.com/kitconcept/volto-blocks/raw/master/kitconcept.png)

This add-on provides a block that features a big image picked from the images on the site on top and a title and description editable inline.

### Prerequisites

- Docker
- Node 18 (e.g. via nvm)

### Build a project

Run

````
make build-addon
````

or, alternatively for building all and start the dev instances:

Run

````
make dev
````

### Start developing

Run

````
make start-dev
````

## Develop locally

Developing locally you lack the `node_modules` folder.

Run

```
make install-local
```

It will add `@plone/volto` as a local dependency, and immediatelly back to the original (via git checkout). For this feature to work, your add-on needs to be versioned already. After this action, the ESlint, Prettier, stylelint will work again in your IDE.

### Stop Backend (Docker)

Once you are finished, you should shut down the backend.

Run

````
make stop-backend-docker
````

## Run Acceptance tests

Run

```
make start-test-acceptance-server
```

It starts both the backend and frontend in development mode.

They run in foreground, so for stopping it, press CTRL+C.

For status:

```
make status-test-acceptance-server
```
