const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      IMG_API: JSON.stringify('http://pics.avs.io'),
      PRODUCTION: JSON.stringify(true),
      GRAPHQL_API: JSON.stringify('http://localhost:3000/graphql') // TODO: add valid API
    }),
  ]
})