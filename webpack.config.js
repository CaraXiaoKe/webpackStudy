var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: __dirname + "/app/main.js",
	output:{
		path: __dirname + "/build",
		filename: "[name].js?v=[hash]"
	},
	devtool: 'eval-source-map',
	devServer: {
	    // contentBase: "./",//本地服务器所加载的页面所在的目录
	    colors: true,//终端中输出结果为彩色
	    historyApiFallback: true,//不跳转
	    inline: true,
	    hot:true
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
				loader:"style!css?modules!postcss"
			}
		]
	},
	postcss: [
    	require('autoprefixer')
  	],
  	plugins: [
    	new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
    	new HtmlWebpackPlugin({
      		template: __dirname + "/index.html"
    	}),
    	new webpack.HotModuleReplacementPlugin()
  	]
}