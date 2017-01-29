var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
console.log(process.NODE_ENV,__dirname);
module.exports = {
	entry: __dirname + "/app/main.js",
	output:{
		path: __dirname + "/build",
		filename: "[name].js?v=[hash]"
	},
	module:{
		loaders:[
			{
				test:/\.json$/,
				loader:"json"
			},
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:"babel"
			},
			{
				test:/\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
			}
		]
	},
	postcss: [
    	require('autoprefixer')
  	],
  	plugins: [
    	new HtmlWebpackPlugin({
      		template: __dirname + "/index.html"
    	}),
    	new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.optimize.UglifyJsPlugin(),
    	new ExtractTextPlugin("[name].css?v=[hash]")
  	]
}