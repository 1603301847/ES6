/**
 * ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。
 */
// 以前，为变量赋值，只能直接指定值。
let a = 1;
let b = 2;
let c = 3;

/**
 * ES6 允许写成下面这样 
 * 可以从数组中提取值，按照对应位置，对变量赋值。
*/
let [a, b, c] = [1, 2, 3];

/**
 * 这种写法属于"模式匹配"，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
 */
let [foo, [bar], baz] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [, , third] = ["foo", "bar", "baz"];
third // baz

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // 2,3,4

//如果解构不成功，变量的值就等于undefined
let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []

let [foo] = [];
foo // undefined

let [bar, foo] = [1];
bar // 1
foo // undefined

// 另一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4

/**
 * 如果等号的右边不是数组（或者严格地说，不是可遍历的结构），那么将会报错。
 */
// 报错 因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），要么本身就不具备Iterator接口（最后一个表达式）。
let [foo] = 1; // Uncaught TypeError: 1 is not iterable
let [foo] = false; // Uncaught TypeError: false is not iterable
let [foo] = NaN; // Uncaught TypeError: NaN is not iterable
let [foo] = undefined; // Uncaught TypeError: undefined is not iterable
let [foo] = null; // Uncaught TypeError: null is not iterable
let [foo] = {}; // Uncaught TypeError: {} is not iterable

// 对Set结构，也可以使用数组的解构赋值。
let [x, y, z] = new Set(['a', 'b', 'c']);
x // "a"
y // "b"
z // "c"

/**
 * 数据结构据有 Iterator 接口，都可以采用数组形式的解构赋值。
 * fibs 是一个 Generator 函数，原生具有 Iterator 接口。解构赋值会依次从这个接口获取值。 
 */
function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
sixth // 5

/**
 * 解构赋值允许指定默认值
 */
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a'];
x // "a"
y // "b"

let [x, y = 'b'] = ['a', undefined];
x // "a"
y // "b"

/**
 * ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
 * 如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。
 */
let [x = 1] = [undefined];
x // 1
let [x = 1] = [null];
x // null

/**
 * 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
 * 因为x能取到值，所以函数f根本不会执行。
 */
function f() {
    console.log('aaa');
}
let [x = f()] = [1];

let x;
if ([1][0] === undefined) {
    x = f();
} else {
    x = [1][0];
} // 1

// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [x = 1, y = x] = [];
x // 1
y // 1

let [x = 1, y = x] = [2];
x // 2
y // 2

let [x = 1, y = x] = [1, 2];
x // 1
y // 2

/**
 * x用y做默认值时，y还没声明
 */
let [x = y, y = 1] = []; // Uncaught ReferenceError: y is not defined




