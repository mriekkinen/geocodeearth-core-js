# About this fork

This repository is a fork of [geocodeearth/core-js](https://github.com/geocodeearth/core-js).

It is almost identical to the original, but adds a few minor changes which allow it to be used with other similar services. The original service is great (kudos), but the monthly fee may be a bit high for small open source projects.

# Geocode Earth Core JS

This repository contains the Geocode Earth Core API client for JavaScript. As it is still under development not all APIs are implemented yet and the API itself may change in the future.

## Implemented APIs

- Autocomplete (`/autocomplete`)

## Usage

```js
import { createAutocomplete } from 'geocode-earth-core'
const autocomplete = createAutocomplete('ge-abc123')
autocomplete('berlin').then(console.log)
```

### Params

`createAutocomplete` accepts parameters as a second argument, for example:

```js
createAutocomplete('ge-abc123', {
  size: 5,
  focusPoint: {
    lat: 52.520008,
    lon: 13.404954
  }
})
```

All available parameters can be found in `src/api/autocomplete/params.ts`.

## Build tooling

- We use [`esbuild`](https://esbuild.github.io/) to bundle the code
- Tests use [jest](https://jestjs.io/)
- [Standard](https://standardjs.com/) is used for linting.

## Commands

```bash
# creates ESM and CommonJS builds in `./dist`
$ npm run build

# runs tests
$ npm test

# removes dist folder
$ npm run clean

# run standard
$ npm run lint
$ npm run lint-fix # with auto fix
```
