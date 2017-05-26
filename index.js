/* global module */
module.exports = function(context, opts) {
  if(opts === undefined) opts = {};

  var lscOpts = opts.stdlib == null ? {} : { stdlib: opts.stdlib };

  return {
    plugins: [
      [require('@oigroup/babel-plugin-lightscript'), lscOpts],

      // es7, not yet on node7
      require('babel-plugin-syntax-trailing-function-commas'),
      require('babel-plugin-transform-es2015-modules-commonjs'),
      require('babel-plugin-syntax-async-functions'),
      require('babel-plugin-transform-class-properties'),
      require('babel-plugin-transform-object-rest-spread'),

      // technically not es7, will need an update soonish, see https://github.com/babel/babel/issues/2645
      require('babel-plugin-transform-decorators-legacy').default,

      // react (c/p from babel-preset-react)
      require("babel-plugin-transform-react-jsx"),
      require("babel-plugin-transform-flow-strip-types"),
      // not necessary b/c lightscript does this:
      // require("babel-plugin-syntax-flow"),
      // require("babel-plugin-syntax-jsx"),
      require("babel-plugin-transform-react-display-name"),
    ],
    presets: [
      opts.env === false ? null : [require("babel-preset-env"), opts.env || {}]
    ].filter(Boolean)
  }
};
