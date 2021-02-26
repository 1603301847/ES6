/*
let命令
let命令所声明的变量，只在let命令所在的代码块内有效
*/
{
    var a = 1;
    let b = 10;
}
console.log(a); // 1
console.log(b); // Uncaught ReferenceError: b is not defined





/* i只在for循环体内有效 在循环体外引用会报错 */
for (let i = 0; i < 10; i++) {
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
}
console.log(i); // Uncaught ReferenceError: i is not defined


/**
 * 代码中存在两个全局变量，数组a与循环变量i，数组中每个元素保存着一个匿名函数，该函数引用了循环变量i。
 * 
 * 数组a的函数内部的console.log(i),里面的i指向的就是全局的i。
 * 
 */

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}
a[0](); // 10
a[6](); // 10
console.log(i); // 10

/**
 * let 声明的变量仅在块级作用域内有效
 * 代码中变量i是局部变量
 */
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    }
}
a[0](); // 0
a[6](); // 6
console.log(i); // 10

/**
 * 函数内部的变量i与循环变量i不在同一个作用域
 */
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
// abc
// abc
// abc

/**
 * var声明变量foo，发生了变量提升
 * 变量声明提前了，但赋值没有提前
 */
console.log(foo); // undefined
var foo = 2;

/**
 * let声明变量bar，不会发生变量提升
 * 变量声明之前，变量bar不存在
 */
// ReferenceError（引用错误） 对象代表当一个不存在的变量被引用时发生的错误。
console.log(bar); // Uncaught ReferenceError: bar is not defined
let bar = 2;

/**
 * 如果在区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。
 * 凡是在声明之前使用这些变量，就会报错。
 */
var tmp = 123;
if (true) {
    tmp = 'abc'; // Uncaught ReferenceError: Cannot access 'tmp' before initialization
    let tmp;
}

/**
 * 代码中，在let命令声明变量tmp之前，都属于变量tmp的"死区"
 */
if (true) {
    tmp = 'abc'; // Uncaught ReferenceError: Cannot access 'tmp' before initialization
    console.log(tmp); // Uncaught ReferenceError: Cannot access 'tmp' before initialization

    let tmp;
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123 
}

/**
 * 变量x使用let命令声明，所以在声明之前，都属于x的“死区”，只要用到该变量就会报错。因此，typeof运行时就会抛出一个ReferenceError。
 */
typeof x; // Uncaught ReferenceError: x is not defined
let x;

/**
 * underclared_variable 未声明的变量
 */
typeof underclared_variable // undefined

/**
 * 参数x默认值等于另一个参数y，而此时y还没声明
 */
function bar(x = y, y = 2) {
    return [x, y];
}
bar(); // 报错 Uncaught SyntaxError: Identifier 'bar' has already been declared

/**
 * x已经声明，y的值是x
 */
function bar(x = 2, y = x) {
    return [x, y];
}
bar(); //[2,2]


var x = x; // undefined
/**
 * 使用let声明变量时，只要变量在还没有声明完成前使用，就会报错。
 */
let x = x; //报错 Uncaught SyntaxError: Identifier 'x' has already been declared

/** 不允许重复声明 */
function func() {
    let a = 10;
    var a = 1;
} // 报错 Uncaught SyntaxError: Identifier 'a' has already been declared

/** let 不允许在相同作用域内，重复声明相同的一个变量 */
function func() {
    let a = 10;
    let a = 1;
}

/** 不能再函数内部重新声明参数 */
function func(arg) {
    let arg;
}
func(); // 报错 Uncaught SyntaxError: Identifier 'arg' has already been declared

function func(arg) {
    {
        let arg;
    }
}
func(); // undefined