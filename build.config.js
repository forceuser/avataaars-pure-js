/* global __dirname */
const path = require("path");
const webpack = require("webpack");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	entry: {
		"avataaars-pure": path.resolve(__dirname, "./index.js"),
		// "avataaars-pure.min": path.resolve(__dirname, "../index.js"),
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].js",
		library: "Avataaar",
		libraryTarget: "umd",
	},
	devtool: "source-map",
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: [{
				loader: "babel-loader",
				options: {
					presets: ["env"],
					plugins: [],
				},
			}],
		}],
	},
	plugins: [
	],
};
