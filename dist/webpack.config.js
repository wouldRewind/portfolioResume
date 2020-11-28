var path = require("path");
module.exports = {
    mode: "production",
    entry: {
        main: "./index.ts"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.bundle.js"
    },
    watch: true,
    devServer: {
        overlay: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
