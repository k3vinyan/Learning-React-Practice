const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const config = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.css/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 9000
    },
    plugins:[new HtmlWebpackPlugin({
        title: 'Color App',
        app: 'app',
        template: 'src/assets/indexTemplate.html'
    })],
    mode: 'development'

}

module.exports = config