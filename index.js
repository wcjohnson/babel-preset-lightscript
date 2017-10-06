const pluginNames = [
  // es7, not yet on node7
  'babel-plugin-syntax-trailing-function-commas',
  'babel-plugin-transform-es2015-modules-commonjs',
  'babel-plugin-syntax-async-functions',
  'babel-plugin-transform-object-rest-spread',
  // technically not es7, will need an update soonish, see https://github.com/babel/babel/issues/2645
  'babel-plugin-transform-decorators-legacy',
  'babel-plugin-transform-class-properties',
  // react (c/p from babel-preset-react)
  'babel-plugin-transform-react-jsx',
  'babel-plugin-transform-flow-strip-types',
  'babel-plugin-transform-react-display-name'
]

/* global module */
module.exports = function(context, opts) {
  if(opts === undefined) opts = {};

  // Assemble list of plugins
  const excludedPlugins = opts.disablePlugins || [];
  const actualPluginNames = pluginNames.filter((x) => excludedPlugins.indexOf(x) === -1);
  const plugins = actualPluginNames.map((x) => {
    const maybePlugin = require(x);
    return maybePlugin.__esModule ? maybePlugin['default'] : maybePlugin;
  })

  // Add LightScript first
  var lscOpts = Object.assign({}, opts);
  delete lscOpts.env;
  delete lscOpts.disablePlugins;
  plugins.unshift([require('@oigroup/babel-plugin-lightscript'), lscOpts])

  return {
    plugins: plugins,
    presets: [
      opts.env === false ? null : [require("babel-preset-env"), opts.env || {}]
    ].filter(Boolean)
  }
};
