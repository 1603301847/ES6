/**
 * Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
 *
 * catch() 方法返回一个Promise，并且处理拒绝的情况。它的行为与调用Promise.prototype.then(undefined, onRejected) 相同。
 *
 */

/**
 * 语法
 * p.catch(onRejected);

   p.catch(function (reason) {
   // 拒绝
   });
 */

/**
 * 参数
 * onRejected
 * 当Promise 被rejected时,被调用的一个Function。 该函数拥有一个参数：reason    rejection 的原因。
 * 如果 onRejected 抛出一个错误或返回一个本身失败的 Promise ，  通过 catch() 返回的Promise 被rejected；否则，它将显示为成功（resolved）。
 */

/**
 * 返回值：一个Promise
 */

/**
 * 描述：catch方法可以用于您的promise组合中的错误处理。
 */

/**
 * Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
 */
getJSON('/posts.json').then(function (posts) {
    // ...
}).catch(function (error) {
    // 处理 getJSON 和 前一个回调函数运行时发生的错误
    console.log('发生错误！', error);
});

/**
 * getJSON()方法返回一个 Promise 对象，如果该对象状态变为resolved，则会调用then()方法指定的回调函数；
 * 如果异步操作抛出错误，状态就会变为rejected，就会调用catch()方法指定的回调函数，处理这个错误。
 * 另外，then()方法指定的回调函数，如果运行中抛出错误，也会被catch()方法捕获。
 */
p.then((val) => console.log('fulfilled:', val))
    .catch((err) => console.log('rejected', err));

// 等同于
p.then((val) => console.log('fulfilled:', val))
    .then(null, (err) => console.log("rejected:", err));