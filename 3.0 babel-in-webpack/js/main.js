require('../styles/main.css');

import User from './demo1.js';

// function* g() {
//     yield 'a';
//     yield 'b';
//     yield 'c';
//     return 'ending';
// }

// var gen = g();
// console.log(gen.next()); // 返回Object {value: "a", done: false}

// for (let a of [1, 2, 3, 4]) {
//     console.log(a); // 打印出 1, 2, 3, 4
// }

// 使用
//let user = new User("zen", "ihuangmx@qq.com");
let user = User.register("zen", "ihuangmx@qq.com");
console.log(user.info); // zen ihuangmx@qq.com
user.name = "jack";
//console.log(user.name); 
console.log(user.info); // Jack ihuangmx@qq.com