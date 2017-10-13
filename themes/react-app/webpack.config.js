const webpack = require('webpack');
const path = require('path');

var srcPath  = path.join(__dirname, '/src/'),
  distPath = path.join(__dirname, '/dist/');

module.exports = {
  watch: false,
  cache: true,
  context: srcPath,
  entry: {
    app: './index.js',
  },
  output: {
    path: distPath,
    filename: '[name].bundle.js',
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ['.js', '.jsx'],
  },
  plugins: [

  ],


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

      // Loaders for other file types go here
      {
        test: /\.(woff|woff2|ttf|eot|svg|gif|png)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
        loader: 'url-loader?limit=100000&name=fonts/[name].[ext]',
      },

    ],


    loaders: [

    ]


  }
};