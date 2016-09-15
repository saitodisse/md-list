const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

require('dotenv').config({path: '.env-dev'});

const plugins = [
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
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));
}

module.exports = {
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'main.js'
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
        plugins: [
          ['module-alias', [
            { 'src': 'src', 'expose': '~' },
          ]],
        ],
      }
    }]
  },
  plugins: plugins
};

// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   devtool: 'eval-source-map',
//   entry: path.resolve('src', 'main.js'),
//   output: {
//     path: path.resolve('dist'),
//     filename: 'main.js',
//     publicPath: '/'
//   },
//   devServer: {
//     host: '0.0.0.0',
//     port: 3000,
//     proxy: {
//       '/api/*': {
//         target: 'http://localhost:3001',
//         secure: false
//       }
//     }
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'md list',
//       template: path.resolve('src', 'index.template.ejs'),
//       inject: 'body'
//     }),
//     new webpack.DefinePlugin({
//       'process.env': {
//         'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
//         'API_KEY': JSON.stringify(process.env.API_KEY),
//         'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
//         'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
//         'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
//       }
//     })
//   ],

//   module: {
//     loaders: [{
//       test: /\.js?$/,
//       include: path.resolve('src'),
//       loader: 'babel',
//       query: {
//         presets: ['es2015', 'stage-0'],
//         plugins: [
//           'react',
//           ['module-alias', [
//             { 'src': 'src', 'expose': '~' },
//           ]],
//         ]
//       }
//     }]
//   }
// };
