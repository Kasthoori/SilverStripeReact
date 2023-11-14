const path = require('path');
const webpack = require('webpack');

// this is module object

module.exports = {
    entry: [
        '@babel/polyfill',
        path.resolve(__dirname, 'themes/simple/javascript/react/index.jsx')
    ],
    output: {
        filename: 'javascript/bundle.js',
        path: path.resolve(__dirname, 'themes/simple')
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader'
                }
            }         
        ]
    }
}