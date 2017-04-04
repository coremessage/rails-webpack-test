// Note: You must restart bin/webpack-watcher for changes to take effect
/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */

const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { join, resolve } = require('path')
const { sync } = require('glob')
const { readdirSync } = require('fs')
const { env, paths, publicPath, loadersDir } = require('./configuration.js')
const assetPath = './app/assets/'

module.exports = {
  entry: {
    app: [
      assetPath + 'javascripts/index.es6',
      assetPath + 'stylesheets/index.es6',
      ...sync(assetPath + 'images/**/*.jpg')
    ],
    vendor: ['turbolinks']
  },
  output: {
    filename: 'bundle.[name].js',
    path: resolve(paths.output)
  },
  module: {
    rules: readdirSync(loadersDir).map((file) => require(join(loadersDir, file)))
  },
  plugins: [
    new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(env))),
    new ExtractTextPlugin(env.NODE_ENV === 'production' ? '[name]-[hash].css' : '[name].css'),
    new ManifestPlugin({
      fileName: 'manifest.json',
      publicPath,
      writeToFileEmit: true
    })
  ]
}
