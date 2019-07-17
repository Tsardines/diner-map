const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
var $ = require("jquery");

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'DinerMap.txt',
    inject: 'body'
});

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: './scripts/DinerMap.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    },  {
      test: /\.(png|jpg|gif|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
            outputPath: '/SiteAssets/images/anl_la/',
            name: '[name].[ext]'
          }
        }]
      }
    ],
  },
    devServer: {
        disableHostCheck: true
    },
    //devtool: 'cheap-module-eval-source-map', // this helps to browser to point to the exact file in the console, helps in debug
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        historyApiFallback: true // this prevents the default browser full page refresh on form submission and link change
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
    })]
}