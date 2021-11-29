const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: {
		app: "./src/index.js",
		gallery: "./src/pages/gallery/gallery.js",
		services: "./src/pages/services/services.js",
		contact: "./src/pages/contact/contact.js",
	},
	output: {
		filename: "[name].js",
		path: __dirname + "/dist",
		// path: path.resolve(__dirname, 'dist'),
		// filename: 'bundle.js'
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: "/node_modules/",
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						// options: { minimize: true },
					},
				],
			},
			{
				test: /\.(png|jpeg|svg|jpe?g|gif)$i/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: '[name].[ext]',
							output: 'img/',
							publicPath: 'img/'
						}
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				//esse array é interpretado de trás para frente
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			// {
			// 	test: /\.html$/,
			// 	use: [
			// 		{
			// 			loader: "file-loader",
			// 			options: {
			// 				name: "[name].[ext]",
			// 			},
			// 		},
			// 	],
			// 	exclude: path.resolve(__dirname, "src/index.html"),
			// },
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			filename: "index.html",
			template: "src/index.html",
			chunks:['app']
		}),
		new HtmlWebPackPlugin({
			filename: "gallery.html",
			template: "./src/pages/gallery/gallery.html",
			chunks: ['gallery'],
		}),
		new HtmlWebPackPlugin({
			filename: "services.html",
			template: "./src/pages/services/services.html",
			chunks: ['services'],
		}),
		new HtmlWebPackPlugin({
			filename: "contact.html",
			template: "./src/pages/contact/contact.html",
			chunks: ['contact'],
		}),

		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
};
