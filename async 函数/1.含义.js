/**
 * async函数是使用async关键字声明的函数。
 * async函数是AsyncFunction构造函数的实例， 并且其中允许使用await关键字。
 * async和await关键字让我们可以用一种更简洁的方式写出基于Promise的异步行为，而无需刻意地链式调用promise。
 */

/**
 * 语法
 * async function name([param[, param[, ... param]]]) {
 *  statements
 * }
 * 
 * 参数  name       函数名称
 *      param       要传递给函数的参数的名称
 *      statements  包含函数主体的表达式。可以使用await机制
 * 
 * 返回值 一个Promise 这个promise要么会通过一个由async函数返回的值被解决，要么会通过一个从async函数中抛出的（或其中没有被捕获到的）异常被拒绝。
 */