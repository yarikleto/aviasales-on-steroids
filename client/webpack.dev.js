const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    port: 9000,
    hot: true,
    overlay: {
      errors: true
    },
    clientLogLevel: 'none'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      IMG_API: JSON.stringify('http://pics.avs.io'),
      PRODUCTION: JSON.stringify(false),
      GRAPHQL_API: JSON.stringify('http://localhost:3000/graphql')
    }),
  ]
})
