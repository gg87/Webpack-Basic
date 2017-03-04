var HtmlwebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        vendor: ['babel-polyfill', 'lodash'], 
        main: './src/main.js'
    },
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            },
            { 
                test: /\.hbs$/, 
                loader: 'handlebars-loader' 
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Webpack-Basic',
            template: 'src/index.html'
        }),
        new CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js"
        })
    ]
};