const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /(node_modules)/,
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css/,
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 9001
    },
    mode: 'development'
}