const path = require('path');
// 提取css的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './js/main.js',
    output: {
        // 将所有依赖的模块合并输出到一个叫bundle.js文件内
        filename: 'bundle.js',
        // 将输出的文件都放在dist目录下
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            // 用正则去匹配以 .css结尾的文件，然后需要使用loader进行转换
            test: /\.css$/,
            // use: ['style-loader', { //'css-loader?minimize'
            //     loader: 'css-loader',
            //     options: {
            //         minimize: true
            //     }
            // }] //Loader的执行顺序是由后往前的 
            loaders: ExtractTextPlugin.extract({
                // 转换 .css文件需要使用的Loader
                use: ['css-loader']
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            // 从js文件中提取出来的 .css文件的名称
            filename: `main.css`
        })
    ]
}