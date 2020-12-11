/**
 *  变量提升
 *  if代码块内部内层变量tmp覆盖if代码块外部外层变量tmp
 */
var tmp = new Date();
function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}
f(); // undefined

/**
 * 用来计数的循环变量泄露为全局变量
 */
var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i]); // h e l l o
}
console.log(i); // 5

/**
 * let 实际上为JavaScript新增了块级作用域
 * 外层代码块不受内层代码块的影响。
 * 如果两次都使用var定义变量n，最后输出的值是10。
 */
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5
}

/**
 * 代码中使用了一个五层的块级作用域，每一层都是一个单独的作用域。
 * 第四层的作用域无法读取第五层的内部变量。
 */
{
    {
        {
            {
                { let insane = 'Hello World' }
                console.log(insane); // Uncaught ReferenceError: insane is not defined
            }
        }
    }
}

/**
 * 内层作用域可以定义外层作用域的同名变量
 */
{
    {
        {
            {
                let insane = 'Hello World';
                { let insane = 'Hello World' }
            }
        }
    }
} // undefined

/**
 *  块级作用域之中，函数声明语句的行为类似于let，在块级作用域之外不可用
 * 在if内声明的函数f会被提升到函数头部  
 */
function f() {
    console.log('I am outside!');
}
(function () {
    function f() {
        console.log('I am inside!');
    }
    if (false) {
    }
    f();
}()); // I am inside!

/**
 * 允许在块级作用域内声明函数
 * 函数声明类似于var，即会提升到全局作用域或函数作用域的头部
 * 同时，函数声明还会提升到所在块级作用域的头部
 */
function f() {
    console.log('I am outside!');
}
(function () {
    if (false) {
        function f() {
            console.log('I am inside!');
        }
    }
    f();
}()); // Uncaught TypeError: f is not a function

/**
 * 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。
 * 如果确实需要，也应该写成函数表达式，而不是函数声明语句。
 */

// 块级作用域内部的函数声明语句，建议不要使用
{
    let a = 'secret';
    function f() {
        return a;
    }
}

// 块级作用域内部，优先使用函数表达式
{
    let a = 'secret';
    let f = function () {
        return a;
    }
}

/**
 * ES6的块级作用域必须有大括号，如果没有大括号，JavaScript引擎就认为不存在块级作用域。
 */

// 没有大括号，所以不存在块级作用域，而let只能出现在当前作用域的顶层，所以报错。
if (true) let x = 1; //报错  Uncaught SyntaxError: Lexical declaration cannot appear in a single-statement context

// 有大括号，所以块级作用域成立。
if (true) {
    let x = 1;
} // 不报错 undefined

/**
 * 函数声明也是如此，严格模式下，函数只能声明在当前作用域的顶层。
 */
'use strict'; // 环境的顶部使用'use strict'后面的代码会按照严格模式的语法进行解析
if (true) {
    function f() {}
} // 不报错 undefined

'use strict';
if (true)
    function f() { } // 报错 Uncaught SyntaxError: In strict mode code, functions can only be declared at top level or inside a block.