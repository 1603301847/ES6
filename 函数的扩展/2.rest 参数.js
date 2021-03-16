/***
 * ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
 * rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
 * 语法 function(a, b, ...theArgs) { // ... }
 * 函数如果求最后的一个命名参数以...为前缀，则它将成为一个由剩余参数组成的真数组，
 * 其中从0（包括）到theArgs.length（排除）的元素由传递给函数的实际参数提供。
 * theArgs将收集该函数的第三个参数（因为第一个参数被映射到a，而第二个参数映射到b）和所有后续参数。
 */

/**
 * rest参数代替arguments变量
 */

// arguments变量的写法
function sortNumbers() {
    return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();

/**
 * arguments对象不是数组，而是一个类似数组的对象。
 * 为了使用数组的方法，必须使用Array.prototype.slice.call先将其转为数组。
 * rest 参数就不存在这个问题，它就是一个真正的数组，数组特有的方法都可以使用。
 */

/**
 * rest参数之后不能再有其他参数(即只能是最后一个参数，否则会报错)。
 */
function f(a, ...b, c) { // 报错 Uncaught SyntaxError: Rest parameter must be last formal parameter
    // ...
}
/**
 * 函数的length属性，不包含rest参数
 */
(function (a) { }).length // 1
(function (...a) { }).length // 0
(function (a, ...b) { }).length // 1


/**
 * rest参数和arguments对象的区别
 * rest参数只包含那些没有对应形参的实参，而arguments对象包含了传给函数的所有实参
 * arguments对象不是一个真正的数组，而rest参数是Array的情况下，这意味着方法，如sort，map， forEach或pop可以在其上直接施用
 * arguments对象还有一些附加的属性 （如callee属性）
 */