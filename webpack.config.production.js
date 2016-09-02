const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config({path: '.env-prod'});

module.exports = {
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MD list',
      template: path.resolve('src', 'index.template.ejs'),
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(process.env.ENV),
        'NODE_ENV': JSON.stringify('production'),
        'API_KEY': JSON.stringify(process.env.API_KEY),
        'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
        'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
        'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
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
