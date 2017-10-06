const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
<<<<<<< HEAD
	entry: {
		app: './scripts/woo.js'
	},
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: '[name].bundle.js'
	},
	devServer: {
		contentBase: './public'
	},
	module: {
=======
    entry: {
		app: './scripts/woo.js'
	},
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].bundle.js'
    },
	devServer: {
		contentBase: './public'
	},
    module: {
>>>>>>> e0d8f5ce0577a65b1f0ee86d0d62ffa5536fe56b
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             }
         ]
     },
<<<<<<< HEAD
	stats: {
		colors: true
	},
	watch: true
};
=======
     stats: {
         colors: true
     },
	 watch: true
};
>>>>>>> e0d8f5ce0577a65b1f0ee86d0d62ffa5536fe56b
