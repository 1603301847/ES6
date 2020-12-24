/**
 * 不能使用圆括号的情况
 * (1) 变量声明语句
 * 变量声明语句，模式不能使用圆括号
 */
let [(a)] =[1]; // Uncaught SyntaxError: Invalid destructuring assignment target
let { x:(c)} = { }; // Uncaught SyntaxError: Invalid destructuring assignment target
let({ x: c }) = {}; // Uncaught ReferenceError: let is not defined
let {(x: c)}={ }; // Uncaught SyntaxError: Unexpected token '('
let {(x): c}={ }; // Uncaught SyntaxError: Unexpected token '('
let { o:({ p: p })}={ o: { p: 2 } }; // Uncaught SyntaxError: Invalid destructuring assignment target

/**
 * (2) 函数参数
 * 函数参数也属于变量声明，因此不能带有圆括号
 */

function f([(z)]) {
    return z;
} // Uncaught SyntaxError: Invalid destructuring assignment target

function f([z,(x)]) {
    return x;
} // Uncaught SyntaxError: Invalid destructuring assignment target

/**
 * (3) 赋值语句的模式
 */

// 整个模式放在圆括号之中，导致报错。
({ p: a }) = { p: 42 }; // Uncaught SyntaxError: Invalid left-hand side in assignment
([a]) = [5]; // Uncaught SyntaxError: Invalid left-hand side in assignment

// 将一部分模式放在圆括号之中，导致报错。
[({ p: a }), { x: c }] = [{}, {}]; // Uncaught SyntaxError: Invalid destructuring assignment target

/**
 * 它们都是赋值语句，而不是声明语句
 */
[(b)] = [3];
({ p: (d) } = {});
[(parseInt.prop)] = [3];