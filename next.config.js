const bsconfig = require('./bsconfig.json');
const withCSS = require('@zeit/next-css');
const withTM = require("next-transpile-modules");
const config = {
  target: 'serverless',
  pageExtensions: ["jsx", "js", "bs.js"],
  transpileModules: ["bs-platform"].concat(bsconfig["bs-dependencies"])
};

module.exports = withTM(withCSS(config));

