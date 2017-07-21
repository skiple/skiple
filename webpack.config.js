var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		main: [
			'babel-polyfill',
			'./src/index.js'
		],
		vendor: ['jquery', 'tether', 'bootstrap']
	},
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'public/bundle.js'
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader?cacheDirectory=true',
					options: {
						presets: ['env', 'react']
					}
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('css-loader')
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader!sass-loader')
			},
			{
				test: /\.(ttf|otf)$/,
				loader: 'file-loader?name=public/fonts/[name].[ext]'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			container: path.resolve(__dirname, 'src/container'),
			components: path.resolve(__dirname, 'src/components/'),
			actions: path.resolve(__dirname, 'src/actions/'),
			reducers: path.resolve(__dirname, 'src/reducers/')
		}
	},
	devServer: {
		disableHostCheck: true,
		historyApiFallback: true
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'public/site.css',
			allChunks: true
		}),
		new webpack.ProvidePlugin({
			tether: "tether",
			Tether: "tether",
			"window.Tether": "tether",
			"window.jQuery": "jquery",
			$: "jquery",
			jQuery: "jquery",
			React: "react"
		}),
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'public/vendor.bundle.js', minChunks: Infinity })
	]
};
