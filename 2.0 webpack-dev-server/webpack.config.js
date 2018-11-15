const path = require('path');
// 提取css的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devServer: {
        port: 8088,
        contentBase: path.join(__dirname, "dist"),
        host: '127.0.0.1',
        headers: {
            'X-foo': '112233'
        },
        historyApiFallback: true,
        //hot: true,
        inline: false,
        open: true
    },
    entry: './js/main.js',
    output: {
        filename: 'bundle.js',
        // 将输出的文件都放在dist目录下
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    mode: 'development',
    module: {
        rules: [{
                // 使用正则去匹配要用该loader转换的css文件
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({
                    // 转换 .css文件需要使用的Loader
                    use: ['css-loader']
                })
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[name].[ext]'
                }
            }
        ]
    },
    resolve: {
        // modules: ['plugin', 'js']
    },
    plugins: [
        new ExtractTextPlugin({
            // 从js文件中提取出来的 .css文件的名称
            filename: `main.css`
        })
    ]
}