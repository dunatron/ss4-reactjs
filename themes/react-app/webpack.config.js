const webpack = require('webpack');
const path = require('path');

const THEME_NAME = 'react-app'; // Define SilverStripe Theme Name

var srcPath  = path.join(__dirname, './src/'),
    distPath = path.join(__dirname, './dist/');

module.exports = {
  watch: false,
  cache: true,
  context: srcPath,
  entry: {
    app: './index.js',
  },
  watchOptions: {
    poll: true
  },
  output: {
    path: path.resolve(__dirname, distPath),
    publicPath: '/themes/'+THEME_NAME+'/dist/',
    filename: '[name].bundle.js',
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ['.js', '.jsx'],
  },
  plugins: [],


  module: {


    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          // options not needed as babel-loader uses .babelrc file
          //options: { presets: ['es2015', 'stage-2', 'react'] },
        }],
      },
      {
        test: /\.jsx$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          // options not needed as babel-loader uses .babelrc file
          //options: { presets: ['es2015', 'stage-2', 'react'] },
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], //Loaders are
        // processed in reverse array order. That means css-loader will run before style-loader.
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg|gif|png)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 1,
              useRelativePath: false,
              svgo: {
                quality: 10
              }
            }
          }
        ]
      }

    ],


    loaders: [

    ]


  }
};