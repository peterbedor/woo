const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './scripts/app.js'
	},
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: '[name].bundle.js'
	},
	devServer: {
		contentBase: './public',
		historyApiFallback: true
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Development'
		})
	],
    module: {
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
	stats: {
		colors: true
	}
};
