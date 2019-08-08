const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const bodyParser = require('body-parser');
const mock = require('./mock');

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
});

module.exports = {
    mode: 'development',
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 3000,
        before(app) {
            mock(app, bodyParser);
        }
    },
    plugins: [
        htmlPlugin
    ],
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[path][name]-[local]-[hash:5]',
                        },
                    },
                }, 'sass-loader']
            },
            {
                test: /\.eot|svg|ttf|woff|woff2$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.join(__dirname, './src')
        }
    }
};