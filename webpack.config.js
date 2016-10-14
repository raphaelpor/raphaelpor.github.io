const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './src/app.js',
  output: {
    path: './build/',
    filename: 'app.bundle.js'
  },
  devServer: {
    inline: true
  },
  module: {
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'es2017', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }
    ]
  },
  eslint: {
    failOnWarning: true,
    failOnError: true,
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new CopyWebpackPlugin([
      { from: './css/**/*', to: './' },
      { from: './assets/svg/sprites.svg', to: './assets/svg/sprites.svg' },
      { from: './favicon.png', to: './' },
    ])
  ],
}
