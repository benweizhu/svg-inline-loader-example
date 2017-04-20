const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.svg$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'svg-inline-loader'
        }
      }, {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: ['style-loader','css-loader?minimize&importLoaders=2', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};
