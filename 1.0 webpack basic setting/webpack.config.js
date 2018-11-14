const path = require('path');

module.exports = {
    entry: './js/main.js',
    output: {
        // 将所有依赖的模块合并输出到一个叫bundle.js文件内
        filename: 'bundle.js',
        // 将输出的文件都放在dist目录下
        path: path.resolve(__dirname, './dist')
    }
}