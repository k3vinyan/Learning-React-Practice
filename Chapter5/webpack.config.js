const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 9000
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin({})
    ],
    optimization: {
        minimize: false
    },
    mode: 'development'
    
}