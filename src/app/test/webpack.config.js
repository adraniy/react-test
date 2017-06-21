module.exports = {
    entry: ['babel-polyfill', './index.js'],
    output: {
        filename: '../../main/webapp/static/bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    cache: true
};