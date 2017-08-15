var webpack = require('webpack'); 
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(["css", "sass"])
            }

        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new webpack.ProvidePlugin({jQuery: 'jquery'}),
    ],
};