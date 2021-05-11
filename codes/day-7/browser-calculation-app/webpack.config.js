//webpack.js --> this file
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanPlugin = require('clean-webpack-plugin')

const webpackConfigObject = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            use: ['css-loader', 'style-loader']
        }, {
            test: /\.(html|htm)$/,
            use: 'html-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new cleanPlugin.CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        port: 4000,
        compress: true
    }
}
module.exports = webpackConfigObject;