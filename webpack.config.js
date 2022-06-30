const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@templates': path.resolve(__dirname, 'src/templates'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './public/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin(),
    ]
}