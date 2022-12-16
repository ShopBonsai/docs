# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```
$ yarn
```

## Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## API Documentation

OpenAPI documentation will be specified in `.json` files (see spec folder). Run `yarn re-gen` to read out the spec files and regenerate the API documentation under `/api`. 

## Deployment

Deployments to https://docs.shopbonsai.ca happen automatically once your pull request gets merged into the `main` branch.
