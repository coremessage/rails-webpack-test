/* eslint global-require: 0 */
// Note: You must run bin/webpack for changes to take effect

const webpack = require('webpack')
const merge = require('webpack-merge')
const sharedConfig = require('./shared.js')

module.exports = merge(sharedConfig, {
  output: {
    filename: 'bundle.[name]-[chunkhash].js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
})
