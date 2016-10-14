const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        loader: ExtractTextPlugin.extract(
          'style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        )
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules']
  },
  eslint: {
    failOnWarning: true,
    failOnError: true,
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    HTMLWebpackPluginConfig,
    new CopyWebpackPlugin([
      { from: './css/**/*', to: './' },
      { from: './assets/**/*', to: './' },
      { from: './favicon.png', to: './' },
    ])
  ],
}
