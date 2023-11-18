const path = require('path');
const webpack = require('webpack');

// this is module object

module.exports = {
    entry: [
        '@babel/polyfill',
        path.resolve(__dirname, 'themes/simple/javascript/react/index.jsx'),
        path.resolve(__dirname, 'themes/simple/scss/custom.scss')
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
            },
            {
                test: /\.scss$/,
                use: [
                    {
                    loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }           
        ]
    }
}