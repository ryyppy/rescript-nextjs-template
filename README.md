# ReScript / NextJS Starter

This is a NextJS based template with following setup:

- Full Tailwind v2 config & basic css scaffold (+ production setup w/ purge-css & cssnano)
- [ReScript](https://rescript-lang.org) + React
- Some ReScript Bindings for Next to get you started
- Preconfigured Dependencies: `@rescript/react`

**Note:** This setup is based on the `v1` `package-lock` format utilized by `npm@6`. If you want to use the newer `v2` version, delete the `package-lock.json` file and install the dependencies with `npm@7`.

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
npx postcss styles/main.css -o test.css

# Production
NODE_ENV=production npx postcss styles/main.css -o test.css
```

## Test production setup with Next

```
# Make sure to uncomment the `target` attribute in `now.json` first, before you run this:
npm run build
PORT=3001 npm start
```

## Tips

### ES6 vs CommonJS

This template is complying to the ES6 module format, and therefore compiles ReScript code to `mjs` files. In case you want to use this template with the old `commonjs` format, do the following changes:

1) Set `package-specs` and `suffix` to the following configuration:

```json
{
  //...
  "package-specs": {
    "module": "commonjs",
    "in-source": true
  },
  "suffix": ".bs.js",
}
```

2) Replace all import paths in `pages` that refer to `src/MyResFile.mjs` to `src/MyResFile.bs.js`

```diff
// pages/_app.js
+import ResApp from "src/App.mjs"
+import ResApp from "src/App.bs.js"
```

Done. You are now running on commonjs modules.

### Don't be afraid to adapt your Next bindings

We ship some general bindings for `NextJS`, but we try to keep them simple. Some use-cases and APIs might not be reflected yet, so feel free to adapt the file as you see fit for your app.

As with every file fork, if you keep the changes git trackable, it's pretty straight-forward to pull in upstream changes later on.

### Fast Refresh & ReScript

Make sure to create interface files (`.resi`) for each `page/*.res` file.

Fast Refresh requires you to **only export React components**, and it's easy to unintenionally export other values that will disable Fast Refresh (you will see a message in the browser console whenever this happens).

For the 100% "always-works-method", we recommend putting your ReScript components in e.g. the `src` directory, and re-export them in plain `pages/*.js` files instead (check out the templates initial `pages` directory to see how we forward our React components to make sure we fulfill the Fast-Refresh naming conventions).

### Filenames with special characters

ReScript supports filenames with special characters: e.g. `pages/blog/[slug].res`, but be aware that you can't access these these modules within other modules (since there is no syntax to express modules with e.g. `[` characters). Also don't forget to create an additional `.resi` file to comply to Fast Refresh rules.

## Q & A

### Why are the generated `.mjs` files tracked in git?

In ReScript, it's a good habit to keep track of the actual JS output the compiler emits. It allows quick sanity checking if we made any changes that actually have an impact on the resulting JS code (especially when doing major compiler upgrades, it's a good way to verify if production code will behave the same way as before the upgrade).

This will also make it easier for your Non-ReScript coworkers to read and understand the changes in Github PRs, and call you out when you are writing inefficient code.

If you want to opt-out, feel free to remove all compiled `.mjs` files within the `src` directory and add `src/**/*.mjs` in your `.gitignore`.

### How trustworthy is this template?

This template was created through our learnings of building the [ReScript Documentation Platform](https://rescript-lang.org) (which is built in NextJS), and is maintained by one of the ReScript core team members. It irregularly receives updates depending on demand and urgency (e.g. important changes in the `Next.res` bindings, or package dependencies).
