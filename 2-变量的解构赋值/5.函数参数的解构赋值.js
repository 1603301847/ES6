/**
 * 函数的参数也可以使用解构赋值
 * 函数的add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。
 * 对于函数内部的代码来说参数就是x和y。
 */
function add([x, y]) {
    return x + y;
}
add([1, 2]); // 3

/**
 * 函数参数的解构也可以使用默认值
 */
[[1, 2], [3, 4]].map(([a, b]) => a + b); // [3,7]

/**
 * 函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。
 */
function move({ x = 0, y = 0 } = {}) {
    return [x, y];
}

move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

/**
 * 函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。
 */
function move({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
}

move({ x: 3, y: 8 }); // [3, 8]
move({ x: 3 }); // [3, undefined]
move({}); // [undefined, undefined]
move(); // [0, 0]

/**
 * undefined 会触发函数参数的默认值
 */
[1, undefined, 3].map((x = 'yes') => x); // [1,'yes',3]