const bsconfig = require('./bsconfig.json');
const fs = require("fs");

const transpileModules = ["rescript"].concat(bsconfig["bs-dependencies"]);
const withTM = require("next-transpile-modules")(transpileModules);

function patchResDeps() {
  ['rescript'].concat(bsconfig['bs-dependencies']).forEach((resDep) => {
    fs.writeFileSync(`./node_modules/${resDep}/index.js`, '');
    const json = require(`./node_modules/${resDep}/package.json`);
    json.main = 'index.js';
    fs.writeFileSync(
      `./node_modules/${resDep}/package.json`,
      JSON.stringify(json, null, 2),
    );
  });
}
patchResDeps(); // update package.json and create empty `index.js` before transpiling

const config = {
  target: "serverless",
  pageExtensions: ["jsx", "js"],
  env: {
    ENV: process.env.NODE_ENV,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    if (!isServer) {
      // We shim fs for things like the blog slugs component
      // where we need fs access in the server-side part
      config.resolve.fallback = {
        fs: 'empty'
      }
    }
    return config
  },
  future: {
    webpack5: true
  }
};

module.exports = withTM(config);
