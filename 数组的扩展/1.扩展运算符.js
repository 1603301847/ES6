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

// ES5 的写法
new (Date.bind.apply(Date, [null, 2015, 1, 1]))
// ES6 的写法
new Date(...[2015, 1, 1]);



// 3.扩展运算符的运算
/**
 * (1) 复制数组
 * 数组是复合的数据类型，直接复制，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。
 */
// a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。
const a1 = [1, 2];
const a2 = a1;

a2[0] = 2;
a1 // [2, 2]

/**
 * (2) 合并数组
 * a3和a4是用两种不同方法合并而成的新数组，但是它们的成员都是对原数组成员的引用，这就是浅拷贝。
 * 如果修改了引用指向的值，会同步反映到新数组。
 */

const a1 = [{ foo: 1 }];
const a2 = [{ bar: 1 }];

const a3 = a1.concat(a2);
const a4 = [...a1, ...a2];

a3[0] === a1[0] // true
a4[0] === a1[0] // true

/**
 * (3) 与解构赋值结合
 * 扩展运算符可以与解构赋值结合起来，用于生成数组。
 */

// ES5 的写法
a = list[0], rest = list.slice(1)

// ES6 的写法
[a, ...rest] = list

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
const [...butLast, last] = [1, 2, 3, 4, 5]; // Uncaught SyntaxError: Rest element must be last element
const [first, ...middle, last] = [1, 2, 3, 4, 5]; // Uncaught SyntaxError: Rest element must be last element

/**
 * (4) 字符串
 * 扩展运算符还可以将字符串转为真正的数组
 */
[...'hello'] // ["h", "e", "l", "l", "o"]

// JavaScript会将四个字节的 Unicode字符，识别为2个字符，采用扩展运算符就没有这个问题。
'x\uD83D\uDE80y'.length // 4
[...'x\uD83D\uDE80y'].length // 3

let str = 'x\uD83D\uDE80y';
str.split('').reverse().join(''); // "y��x"
[...str].reverse().join(''); // "y🚀x"

/**
 * (5) 实现Iterator接口的对象
 * 任何定义了遍历器(Iterator)接口的对象，都可以用扩展运算符转为真正的数组。
 * querySelectorAll方法返回的是一个NodeList对象。它不是数组，而是一个类似数组的对象。
 * 扩展运算符可以将其转为真正的数组，原因就在于NodeList对象实现了Iterator
 */
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];

/**
 * 没有部署 Iterator 接口的类似数组的对象，扩展运算符就无法将其转为真正的数组
 * arrayLike是一个类似数组的对象，但是没有部署 Iterator 接口，扩展运算符就会报错。
 * 可以使用Array.from方法将arrayLike转为真正的数组。
 */
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

let arr = [...arrayLike]; // Uncaught TypeError: arrayLike is not iterable



/**
 * (6) Map 和 Set 结构，Generator 函数
 * 扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 Map 结构。
 */
// 如果对没有Iterator接口的对象，使用扩展运算符，将会报错
const obj = { a: 1, b: 2 };
let arr = [...obj]; // Uncaught TypeError: obj is not iterable