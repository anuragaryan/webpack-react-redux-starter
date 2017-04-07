const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname + 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    stats: 'errors-only'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '/dist'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Client starter code',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index.ejs'
    }),
    new ExtractTextPlugin('app.css')
  ]
}
