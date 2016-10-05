const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const plugins = [
  new LiveReloadPlugin(),
  new HtmlWebpackPlugin({
    title: 'renderer check',
    template: path.resolve('..', '..', 'src', 'index.template.ejs'),
    inject: 'body'
  }),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'API_KEY': JSON.stringify(process.env.API_KEY),
      'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
      'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
      'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
      'ELASTIC_SEARCH_URI': JSON.stringify(process.env.ELASTIC_SEARCH_URI),
    }
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
}

module.exports = {
  entry: path.resolve('main.js'),
  output: {
    path: path.resolve('dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      }
    }]
  },
  plugins: plugins
};

