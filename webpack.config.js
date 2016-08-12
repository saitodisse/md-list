const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3001',
        secure: false
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MD list',
      template: path.resolve('src', 'index.template.ejs'),
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      include: path.resolve('src'),
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0'],
        plugins: ['inferno']
      }
    }]
  }
};
