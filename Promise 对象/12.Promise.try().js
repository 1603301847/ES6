/**
 * 不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管f是否包含异步操作，
 * 都用then方法指定下一步流程，用catch方法处理f抛出的错误。
 */
// 如果f是同步函数，那么它会在本轮事件循环的末尾执行。
Promise.resolve().then(f);

// 函数f是同步的，但是用 Promise 包装了以后，就变成异步执行了。
const f = () => console.log('now');
Promise.resolve().then(f);
console.log('next');
/**
 * 打印结果
 * next
 * now
 */

/**
 * 让同步函数同步执行，异步函数异步执行，并且让它们具有统一的 API
 */

// 1.使用aysn函数
const f = () => console.log('now');
(async () => f())();
console.log('next');
/**
 * 打印结果
 * now
 * next
 */
// 第二行是一个立即执行的匿名函数，会立即执行里面的async函数，
// 因此如果f是同步的，就会得到同步的结果；如果f是异步的，就可以用then指定下一步
(async () => f())().then(...)

    // async () => f()会吃掉f()抛出的错误。所以，如果想捕获错误，要使用promise.catch方法。
    (async () => f())().then(...).catch(...)

// 2.使用new Promise()
// 使用立即执行的匿名函数，执行new Promise()。这种情况下，同步函数也是同步执行的。
const f = () => console.log('now');
(
    () => new Promise(
        resolve => resolve(f())
    )
)();
console.log('next');
/**
 * 打印结果
 * now
 * next
 */

/**
 * database.users.get()返回一个 Promise 对象，如果抛出异步错误，可以用catch方法捕获
 */
function getUsername(userId) {
    return database.users.get({ id: userId }).then(function (user) {
        return user.name;
    }).catch(function (e){
        console.log(e);
    });
}

/**
 * 但是database.users.get()可能还会抛出同步错误,这时不得不用try...catch去捕获
 */
try {
    database.users.get({ id: userId }).then(...).catch(...)
} catch (e) {
    // ...
}
// 可以统一用promise.catch()捕获所有同步和异步的错误。
Promise.try(() => database.users.get({ id: userId })).then(...).catch(...)

// Promise.try就是模拟try代码块，就像promise.catch模拟的是catch代码块。