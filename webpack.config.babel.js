import {HotModuleReplacementPlugin, NoErrorsPlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://0.0.0.0:8080',
        path.join(__dirname, 'src', 'index')
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.elm']
    },
    module: {
        loaders: [{
            test: /\.elm$/,
            loader: 'elm-webpack',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }],
        noParse: /\.elm$/
    },
    devtool: '#inline-source-map',
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        stats: {
            colors: true
        }
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        })
    ]
};