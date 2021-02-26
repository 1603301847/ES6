/**
 * Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。
 * 它的作用是为 Promise 实例添加状态改变时的回调函数。
 * 前面说过，then方法的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数，它们都是可选的。
 * then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。
 * 因此可以采用链式写法，即then方法后面再调用另一个then方法。
 * 
 * then() 方法返回一个 Promise。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。
 */

/**
 *  语法
 *  p.then(onFulfilled[, onRejected]);
 *  p.then(value => {
        // fulfillment
    }, reason => {
        // rejection
    });
 */

/**
 * 参数
 * onFulfilled 可选 当 Promise 变成接受状态（fulfilled）时调用的函数。
 * 该函数有一个参数，即接受的最终结果（the fulfillment  value）。
 * 如果该参数不是函数，则会在内部被替换为 (x) => x，即原样返回 promise 最终结果的函数
 * 
 * onRejected 可选  当 Promise 变成拒绝状态（rejected）时调用的函数。
 * 该函数有一个参数，即拒绝的原因（rejection reason）。  
 * 如果该参数不是函数，则会在内部被替换为一个 "Thrower" 函数 (it throws an error it received as argument)。
 */

 /**
  * 返回值
  * 当一个 Promise 完成（fulfilled）或者失败（rejected）时，返回函数将被异步调用（由当前的线程循环来调度完成）。
  * 具体的返回值依据以下规则返回。如果 then 中的回调函数：
  * 
  * 返回了一个值，那么 then 返回的 Promise 将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。
  * 
  * 没有返回任何值，那么 then 返回的 Promise 将会成为接受状态，并且该接受状态的回调函数的参数值为 undefined。
  * 
  * 抛出一个错误，那么 then 返回的 Promise 将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。
  * 
  * 返回一个已经是接受状态的 Promise，那么 then 返回的 Promise 也会成为接受状态，
  * 并且将那个 Promise 的接受状态的回调函数的参数值作为该被返回的Promise的接受状态回调函数的参数值。
  * 
  * 返回一个已经是拒绝状态的 Promise，那么 then 返回的 Promise 也会成为拒绝状态，
  * 并且将那个 Promise 的拒绝状态的回调函数的参数值作为该被返回的Promise的拒绝状态回调函数的参数值。
  * 
  * 返回一个未定状态（pending）的 Promise，那么 then 返回 Promise 的状态也是未定的，
  * 并且它的终态与那个 Promise 的终态相同；同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的。
  * 
  * 由于 then 和 Promise.prototype.catch() 方法都会返回 promise，它们可以被链式调用——这同时也是一种被称为复合（ composition） 的操作。
  */