const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const config = {
    entry:'./src/components/',
    output:'./components/'
};

module.exports = {
    entry: {
        vendor: ['jquery','lodash'],
        home: config.entry+'home/home.js',
        list: config.entry+'list/list.js'
    },
    output: {
        filename: './js/[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    plugins:[
        new CleanWebpackPlugin(),
        new CopyPlugin([
            { from: './src/assets', to: './assets' }
        ]),
        new HtmlWebpackPlugin({
            title: '首页',
            template: config.entry+'home/home.html',
            filename: config.output+'home/home.html',
            chunks: ['home',"vendor"]
        }),
        new HtmlWebpackPlugin({
            title: '列表页',
            template: config.entry+'list/list.html',
            filename: config.output+'list/list.html',
            chunks: ['list',"vendor"]
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
            chunkFilename: '[name].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        })
    ],
    optimization:{
        splitChunks:{
            chunks:'all',
            name: 'vendor'
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use:[
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use:[
                    'xml-loader'
                ]
            }

        ]
    }
};