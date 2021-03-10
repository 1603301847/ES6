/**
 * Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
 * Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
 * 另外，Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。
 */
const p = Promise.all([p1, p2, p3]);

/**
 * p的状态由p1、p2、p3决定，分成两种情况。
 * （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
 * （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
 */

/**
 * booksPromise和userPromise是两个异步操作，只有等到它们的结果都返回了，才会触发pickTopRecommendations这个回调函数。
 */
const databasePromise = connectDatabase();

const booksPromise = databasePromise
    .then(findAllBooks);

const userPromise = databasePromise
    .then(getCurrentUser);

Promise.all([
    booksPromise,
    userPromise
])
    .then(([books, user]) => pickTopRecommendations(books, user));

/**
 * Promise.all() 方法接收一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入，
 * 并且只返回一个Promise实例， 那个输入的所有promise的resolve回调的结果是一个数组。
 * 这个Promise的resolve回调执行是在所有输入的promise的resolve回调都结束，或者输入的iterable里没有promise了的时候。
 * 它的reject回调执行是，只要任何一个输入的promise的reject回调执行或者输入不合法的promise就会立即抛出错误，
 * 并且reject的是第一个抛出的错误信息。
 */

/**
 * 语法 Promise.all(iterable);
 * 参数 iterable 一个可迭代对象，如Array或String
 * 返回值   如果传入的参数是一个空的可迭代对象，则返回一个已完成（already resolved）状态的 Promise。
 *         如果传入的参数不包含任何 promise，则返回一个异步完成（asynchronously resolved） Promise。
 *         其它情况下返回一个处理中（pending）的Promise。这个返回的 promise 之后会在所有的 promise 都完成或有一个 promise 失败时异步地变为完成或失败
 */ 