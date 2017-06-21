module.exports = {
    entry: './index.js',
    output: {
        filename: '../../main/webapp/bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    cache: true
};