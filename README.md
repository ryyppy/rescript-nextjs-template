# ReScript NextJS Starter

This is a NextJS based template with following setup:

- Full Tailwind config & basic css scaffold (+ production setup w/ purge-css & cssnano)
- [ReScript](https://rescript-lang.org) + React
- Basic ReScript Bindings for Next
- Preconfigured Dependencies: `reason-react`

## Development

Run ReScript in dev mode:

```
npm run res:start
```

In another tab, run the Next dev server:

```
npm run dev
```

## Useful commands

Build CSS seperately via `postcss` (useful for debugging)

```
# Devmode
postcss styles/main.css -o test.css

# Production
NODE_ENV=production postcss styles/main.css -o test.css
```

## Test production setup with Next

```
# Make sure to uncomment the `target` attribute in `now.json` first, before you run this:
npm run build
PORT=3001 npm start
```

