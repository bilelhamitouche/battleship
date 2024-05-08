const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
	test: /\.css$/i,
	use: ['style-loader', 'css-loader'],
      },
      {
	test: /\.js$/i,
	exclude: /node_modules/,
	use: {
	  loader: "babel-loader",
	  options: {
	    presets: [ '@babel/preset-env' ],
	  },
	},
      },
      {
	test: /\.(png|jpg|jpeg|svg|gif)$/i,
	type: 'asset/resource',
      },
      {
	test: /\.(woff|woff2|ttf|otf|eot)$/i,
	type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ],
};
