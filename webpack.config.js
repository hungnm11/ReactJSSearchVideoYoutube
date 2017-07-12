const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].bundle.css');
const bootstrapEntryPoints = require('./webpack.bootstrap.config.js');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['lodash', 'bootstrap/dist/css/bootstrap.css'],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    extractCSS
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {presets: ['es2015']},
        }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { module: true }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: { limit: 1000 }
        }]
      },
      {
        test: /\.(sass|scss)$/,
        loader: extractCSS.extract(['css-loader','sass-loader'])
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    noInfo: true,
    watchContentBase: true,
    hot: true
  },
  devtool: "cheap-eval-source-map",
  devtool: "inline-source-map"

};