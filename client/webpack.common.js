const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].[hash].js',
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
      layouts: path.resolve(__dirname, 'src/layouts/'),
      components: path.resolve(__dirname, 'src/components/'),
      theme: path.resolve(__dirname, 'src/theme/'),
      static: path.resolve(__dirname, 'src/static/'),
      sharedHooks: path.resolve(__dirname, 'src/sharedHooks/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      constants: path.resolve(__dirname, 'src/constants/'),
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
        ],
      }
    ]
  }
}

