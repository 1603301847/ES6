/**
 * finally() 方法返回一个Promise。
 * 在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。
 * 这为在Promise是否成功完成后都需要执行的代码提供了一种方式。
 * 这避免了同样的语句需要在then()和catch()中各写一次的情况。
 */
/**
 *  语法
 *  p.finally(onFinally);
    p.finally(function() {
    // 返回状态为(resolved 或 rejected)
    });
 */
/**
 * 参数
 * onFinally Promise结束后调用的Function
 * 
 * 返回值
 * 返回一个设置了finally回调函数的Promise对象
 */
/**
 * 调用内联函数时，不需要多次声明该函数或为该函数创建一个变量保存它。
 * 由于无法知道promise的最终状态，所以finally的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况。
 * 与Promise.resolve(2).then(() => {}, () => {}) （resolved的结果为undefined）不同，Promise.resolve(2).finally(() => {}) resolved的结果为 2。
 * 同样，Promise.reject(3).then(() => {}, () => {}) (resolved 的结果为undefined), Promise.reject(3).finally(() => {}) rejected 的结果为 3。
 * 注意: 在finally回调中 throw（或返回被拒绝的promise）将以 throw() 指定的原因拒绝新的promise.
 */

let isLoading = true;
fetch(myRequest).then(function (response) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
}).then(function (json) { }).catch(function (error) {
    console.log(error);
}).finally(function () {
    isLoading = false;
});

/**
 * finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。
 * 不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。
 */
// Promise.then(result => {...}).catch(error => {...}).finally(() => {...})

// 服务器使用 Promise 处理请求，然后使用finally方法关掉服务器。
server.listen(port).then(function () {

}).finally(server.stop);

/**
 * finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。
 * finally本质上是then方法的特例。
 * 如果不使用finally方法，同样的语句需要为成功和失败两种情况各写一次。有了finally方法，则只需要写一次。
 */
Promise.finally(() => {
    // 语句
});
// 等同于
Promise.then(result => {
    // 语句
    return result;
}, error => {
    // 语句
    throw error;
});

/**
 * 不管前面的 Promise 是fulfilled还是rejected，都会执行回调函数callback。
 */
Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};