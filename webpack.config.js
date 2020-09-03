"use strict";

var webpack = require("webpack");
var path = require("path");

module.exports = {
    target: "web",
    entry: [
        "!file?name=index.html!./index.html",
        "./index.js",
    ],
    output: {
        path: path.resolve("dst"),
        filename: "bundle.js",
        pathinfo: true,
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel?stage=0" },
            { test: /\.json$/, loader: "json" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.less$/, loader: "style!css!less" },
            { test: /\.(eot|gif|svg|ttf|woff2?)(\?.*)?$/, loader: "url?limit=10000" },
            { test: /\.png$/, loader: "url-loader?mimetype=image/png&limit=10000" },
        ]
    },
    debug: true,
    devtool: "source-map",
};
