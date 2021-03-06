const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    target: 'web',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['src', 'node_modules'],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        publicPath: '/',
        compress: true,
        host: '0.0.0.0',
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ],
    },
    plugins: [
        new UnusedFilesWebpackPlugin({
            ignore: [
                'node_modules/**/*',
                'package-lock.json',
                'package.json',
                'README.md',
                'tsconfig.json',
                'webpack.config.js'
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
};
