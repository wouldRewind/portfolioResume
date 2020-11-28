const path = require("path")

module.exports = {
	mode: "production",
	entry: {
		main: "./index.js"
	},
	output: {
		path: path.resolve(__dirname,"dist"),
		filename: "main.bundle.js"
	},
	watch: true,
	devServer: {
		overlay: true,
		open: true
	}
}