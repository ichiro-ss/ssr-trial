var fs = require('fs');
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

  module.exports = {
  mode: "production",

  entry: "./server/index.js",

  externals: nodeModules
};
