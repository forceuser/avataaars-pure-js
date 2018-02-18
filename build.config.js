/* global __dirname */
const path = require("path");

module.exports = {
	entry: {
		"avataaars-pure": path.resolve(__dirname, "./src/index.js"),
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
