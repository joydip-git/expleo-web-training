const pathModule = require('path')
const htmlPluginModule = require('html-webpack-plugin')
const cleanPluginModule = require('clean-webpack-plugin')

const webpackConfigObj = {
    entry: {
        main: pathModule.resolve(__dirname, 'source', 'index.js'),
        calc: pathModule.resolve(__dirname, 'source', 'calculation.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: pathModule.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.(html|htm)$/,
            use: 'html-loader'
        }]
    },
    plugins: [
        new htmlPluginModule({
            template: pathModule.resolve(__dirname, 'index.html')
        }),
        new cleanPluginModule.CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        })
    ],
    devServer: {
        contentBase: pathModule.resolve(__dirname, 'dist'),
        port: 3000,
        compress: true
    },
    devtool: 'inline-source-map'
}
module.exports = webpackConfigObj;