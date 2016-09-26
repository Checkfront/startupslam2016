var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    'babel-polyfill',
    './app/index.js',
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js",
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['react-hot', 'jsx?harmony'], include: path.join(__dirname, 'src')},
      { test: /\.js$/, include: __dirname + '/app', loader: "babel-loader"},
      { test: /\.scss$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap') },
    ]
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('styles.css', {allChunks: true}),
    new webpack.HotModuleReplacementPlugin(),
  ]
};