const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = 'production';


console.log(devMode)

module.exports={
    mode: devMode,
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, '../entrega'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                /*use: ['style-loader', 'css-loader'],*/
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'/*,
                    'postcss-loader',
                    'sass-loader',*/
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            minify: {
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ]
}