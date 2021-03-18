/**
 * 尾调用 指某个函数的最后一步是调用另一个函数
 * 函数f的最后一步是调用函数g
 */
function f(x) {
    return g(x);
}

// 以下情况不属于尾调用
function f(x) {
    let y = g(x);
    return y;
} // 调用函数之后还有赋值操作

function f(x) {
    return g(x) + 1;
} // 调用后还有操作

function f(x) {
    g(x);
}
// 等同于
function f(x) {
    g(x);
    return undefined;
}

// 尾调用不一定出现在函数尾部，只要是最后一步操作即可。
// 函数m和n都属于尾调用，因为它们都是函数f的最后一步操作。
function f(x) {
    if (x > 0) {
        return m(x);
    }
    return n(x);
}



// 尾调用优化
/**
 * 尾调用之所以与其他调用不同，就在于它的特殊的调用位置。
 * 函数调用会在内存形成一个“调用记录”，又称"调用帧"，保存调用位置和内部变量等信息。
 * 如果在函数A的内部调用函数B，那么在A的调用帧上方，还会形成一个B的调用帧。
 * 等到B运行结束，将结果返回到A，B的调用帧才会消失。
 * 如果函数B内部还调用函数C，那就还有一个C的调用帧。
 * 所有的调用帧，就形成一个"调用栈"。
 * 
 * 尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，
 * 因为调用位置、内部变量等信息都不会再用到了，
 * 只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。
 */
function f() {
    let m = 1;
    let n = 2;
    return g(m + n);
}
f();
// 等同于
function f() {
    return g(3);
}
f();
// 等同于
g(3);
/**
 * 如果函数g不是尾调用，函数f就需要保存内部变量m和n的值、g的调用位置等信息。
 * 但由于调用g之后，函数f就结束了，所以执行到最后一步，完全可以删除f(x)的调用帧，只保留g(3)的调用帧。
 */

/**
 * 尾调用优化 即只保留内层函数的调用帧。
 * 如果所有函数都是尾调用，那么完全可以做到每次执行时，调用帧只有一项，节省内存。
 * 只有不再用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行"尾调用优化"
 */
// 函数不会进行尾调用优化，因为内层函数inner用到了外层函数addOne的内部变量one。
function addOne(a) {
    var one = 1;
    function inner(b) {
        return b + one;
    }
    return inner(a);
}



// 尾递归
/**
 * 函数调用自身，称为递归。
 * 如果尾调用自身，就称为尾递归。
 * 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生"栈溢出"错误。
 * 但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。
 */



// 递归函数的改写 
/**
 * 把所有用到的内部变量改写成函数的参数。
 * 
 * 柯里化：将多参数的函数转换成单参数的形式。
 */



// 严格模式
/**
 * ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。
 * 这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。
 * ——func.arguments：返回调用时函数的参数。
 * ——func.caller：返回调用当前函数的那个函数。
 * 尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。
 * 严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。
 */
function restricted() {
    'use strict';
    restricted.caller; // Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them at restricted
    restricted.arguments;
}
restricted();

// 尾递归优化的实现
// 正常的递归函数
// sum是一个递归函数，参数x是需要累加的值，参数y控制递归次数。一旦指定sum递归 100000 次，就会报错，提示超出调用栈的最大次数。
function sum(x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1);
    } else {
        return x;
    }
}
sum(1, 100000); // Uncaught RangeError: Maximum call stack size exceeded

// 蹦床函数（trampoline）可以将递归执行转为循环执行
// 接受一个函数f作为参数。只要f执行后返回一个函数，就继续执行。
// 注意，这里是返回一个函数，然后执行该函数，而不是函数里面调用函数，这样就避免了递归执行，从而就消除了调用栈过大的问题。
function trampoline(f) {
    while (f && f instanceof Function) {
        f = f();
    }
    return f;
}

// 将原来的递归函数，改写为每一步返回另一个函数。
// sum函数的每次执行，都会返回自身的另一个版本。
function sum(x, y) {
    if (y > 0) {
        return sum.bind(null, x + 1, y - 1);
    } else {
        return x;
    }
}
// 使用蹦床函数执行sum，就不会发生调用栈溢出。
trampoline(sum(1, 100000)) // 100001