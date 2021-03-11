/**
 * Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
 */

// 生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行。
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
    console.log(s); // 出错了
});

/**
 * Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。
 * Promise.reject()方法的参数是一个字符串，后面catch()方法的参数e就是这个字符串。
 */
Promise.reject('出错了').catch(e => {
    console.log(e === '出错了') // true
})

/**
 * Promise.reject()方法返回一个带有拒绝原因的Promise对象。
 */

/**
 * 语法   Promise.reject(reason);
 * 参数   reason 表示Promise被拒绝的原因
 * 返回值 一个给定原因了的被拒绝的Promise
 * 静态函数Promise.reject返回一个被拒绝的Promise对象。
 * 通过使用Error的实例获取错误原因reason对调试和选择性错误捕捉很有帮助。
 */