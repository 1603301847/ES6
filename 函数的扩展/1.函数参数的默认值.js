// 基本用法
/**
 * 默认参数值
 * 函数默认参数 允许在没有值或undefined被传入时使用默认形参
 * 语法 function [name]([param1[ = defaultValue1 ][, ..., paramN[ = defaultValueN ]]]) {statements}
 * JavaScript 中函数的参数默认是undefined。
 * 然而，在某些情况下可能需要设置一个不同的默认值。
 * 这是默认参数可以帮助的地方。
 * 一般设置默认参数的方法是在函数体测试参数是否为undefined，如果是的话就设置为默认的值。
 */

// 如果在调用multiply时，参数b的值没有提供，那么它的值就为undefined。
// 如果直接执行 a * b，函数就会返回NaN。

function multiply(a, b) {
    return a * b;
}
multiply(5, 2); // 10
multiply(5); // NaN

// 如果只使用一个参数调用multiply，则b设置为1
function multiply(a, b) {
    b = (typeof b !== 'undefined') ? b : 1;
    return a * b;
}
multiply(5, 2); // 10
multiply(5); // 5

// 有了默认参数，函数体内不需要检查
function multiply(a, b = 1) {
    return a * b;
}
multiply(5, 2); // 10
multiply(5); //5

/**
 * ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。
 * 检查函数log的参数y有没有赋值，如果没有，则指定默认值为World。
 * 如果参数y赋值了，但是对应的布尔值为false，则该赋值不起作用。
 * 参数y等于空字符串，结果被改为默认值
 */
function log(x, y) {
    y = y || 'World';
    console.log(x, y);
}
log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World

/**
 * 通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值
 */
if (typeof y === 'undefined') {
    y = 'World';
}

/**
 * ES6允许为函数的参数设置默认值，即直接写在参数定义的后面
 */
function log(x, y = 'World') {
    console.log(x, y);
}
log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

/**
 * 参数变量x是默认声明的，在函数体中，不能用let或const再次声明，否则会报错
 */
function foo(x = 5) {
    let x = 1; // Error
    const x = 2; // Error
}

// 使用参数默认值时，函数不能有同名参数

// 不报错
function foo(x, x, y) {

}

// 报错
function foo(x, x, y = 1) {

} // Uncaught SyntaxError: Duplicate parameter name not allowed in this context



// 与解构赋值默认值结合使用
/**
 * 通过提供函数参数的默认值，可以避免函数没有提供参数报错
 * 如果没有提供参数，函数foo的参数默认为一个空对象
 */
function foo({ x, y = 5 } = {}) {
    console.log(x, y);
}
foo(); // undefined 5