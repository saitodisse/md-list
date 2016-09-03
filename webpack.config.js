const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config({path: '.env-dev'});

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
      title: 'md list',
      template: path.resolve('src', 'index.template.ejs'),
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'API_KEY': JSON.stringify(process.env.API_KEY),
        'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
        'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
        'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
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
        plugins: [
          'inferno',
          ['module-alias', [
            { 'src': 'src', 'expose': '~' },
          ]],
        ]
      }
    }]
  }
};
