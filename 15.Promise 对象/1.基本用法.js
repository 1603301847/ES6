/**
 * ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。
 * Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。
 * 它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
 */
const promise = new Promise(function (resolve, reject) {
    // ... some code

    if (/* 异步操作成功 */) {
        resolve(value);
    } else {
        reject(error);
    }
});

/**
 * resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），
 * 在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，
 * 将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，
 * 并将异步操作报出的错误，作为参数传递出去。
 * 
 * Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
 */
promise.then(function (value) {
    // success
}, function (error) {
    // failure
});

/**
 * then方法可以接受两个回调函数作为参数。
 * 第一个回调函数是Promise对象的状态变为resolved时调用，
 * 第二个回调函数是Promise对象的状态变为rejected时调用。
 * 这两个函数都是可选的，不一定要提供。
 * 它们都接受Promise对象传出的值作为参数。
 */

 /**
  * 如果调用resolve函数和reject函数时带有参数，那么它们的参数会被传递给回调函数。
  * reject函数的参数通常是Error对象的实例，表示抛出的错误；
  * resolve函数的参数除了正常的值以外，还可能是另一个 Promise 实例
  * 
  * p1和p2都是 Promise 的实例，但是p2的resolve方法将p1作为参数，即一个异步操作的结果是返回另一个异步操作。
  */
const p1 = new Promise(function (resolve, reject) {
    // ...
});

const p2 = new Promise(function (resolve, reject) {
    // ...
    resolve(p1);
})

