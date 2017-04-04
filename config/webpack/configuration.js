// Common configuration for webpacker loaded from config/webpack/paths.yml

const { join, resolve } = require('path')
const { env } = require('process')
const { readFileSync } = require('fs')

const configPath = resolve('config', 'webpack')
const loadersDir = join(__dirname, 'loaders')
const paths = require(join(configPath, 'paths.json'))
const devServer = require(join(configPath, 'development.server.json'))
const publicPath = env.NODE_ENV !== 'production' && devServer.enabled ?
  `http://${devServer.host}:${devServer.port}/` : `/${paths.output.replace('public/', '')}/`

module.exports = {
  devServer,
  env,
  paths,
  loadersDir,
  publicPath
}
