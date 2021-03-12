// 1.含义
/**
 * 扩展运算符是三个点(...) 
 */

/**
 * 扩展运算符与正常的函数参数结合使用
 */
function f(v, w, x, y, z) { }
const args = [0, 1];
f(-1, ...args, 2, ...[3]);

/**
 * 扩展运算符后面还可以放置表达式
 */
const arr = [
    ...(x > 0 ? ['a'] : []),
    'b',
];

/***
 * 如果扩展运算符后面是一个空数组，则不产生任何效果
 */
[...[], 1]
// [1]

/**
 * 只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错
 * 扩展运算符放在圆括号里面，前面两种情况会报错，扩展运算符所在的括号不是函数调用
 */
(...[1, 2]); // Uncaught SyntaxError: Unexpected token '...'

console.log((...[1, 2])); // Uncaught SyntaxError: Unexpected token '...'

console.log(...[1, 2]); // 1 2



// 2.替代函数的apply方法
/**
 * 由于扩展运算符可以展开数组，所以不在需要apply方法，将数组转为函数的参数
 */
// ES5 的写法
function f(x, y, z) {

}
var args = [0, 1, 2];
f.apply(null, args);

// ES6 的写法
function f(x, y, z) {

}
let args = [0, 1, 2];
f(...args);