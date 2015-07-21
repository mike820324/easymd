module.exports = {
    entry: "./app/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                loader: "babel",
                test: /\.jsx?$/,
                exclude: /(node_modules| bower_components)/
            }
        ]
    }
};
