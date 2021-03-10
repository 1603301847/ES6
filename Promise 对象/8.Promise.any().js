/**
 * Promise.any() 接收一个Promise可迭代对象，只要其中的一个 promise 成功，就返回那个已经成功的 promise 。
 * 如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise。
 */

/**
 * 语法     Promise.any(iterable);
 * 参数     iterable 一个可迭代的对象, 例如 Array。
 * 返回值   如果传入的参数是一个空的可迭代对象，则返回一个 已失败（already rejected） 状态的 Promise。
 *         如果传入的参数不包含任何 promise，则返回一个 异步完成 （asynchronously resolved）的 Promise。
 *         其他情况下都会返回一个处理中（pending） 的 Promise。 
 *         只要传入的迭代对象中的任何一个 promise 变成成功（resolve）状态，
 *         或者其中的所有的 promises 都失败，那么返回的 promise 就会 异步地（当调用栈为空时） 变成成功/失败（resolved/reject）状态。
 *
 *  这个方法用于返回第一个成功的 promise 。只要有一个 promise 成功此方法就会终止，它不会等待其他的 promise 全部完成。
 * 不像 Promise.all() 会返回一组完成值那样（resolved values），我们只能得到一个成功值（假设至少有一个 promise 完成）。
 * 当我们只需要一个 promise 成功，而不关心是哪一个成功时此方法很有用的。
 * 同时, 也不像 Promise.race() 总是返回第一个结果值（resolved/reject）那样，这个方法返回的是第一个 成功的 值。
 * 这个方法将会忽略掉所有被拒绝的 promise，直到第一个 promise 成功。
 */

/**
 * 成功（Fulfillment）：
 * 当任何一个被传入的 promise 成功的时候, 无论其他的 promises 成功还是失败，此函数会将那个成功的 promise 作为返回值 。
 * 如果传入的参数是一个空的可迭代对象, 这个方法将会同步返回一个已经完成的 promise。
 * 如果传入的任何一个 promise 已成功, 或者传入的参数不包括任何 promise, 那么 Promise.any 返回一个异步成功的 promise。
 * 
 * 失败/拒绝（Rejection）：
 * 如果所有传入的 promises 都失败, Promise.any 将返回异步失败，和一个 AggregateError 对象，
 * 它继承自 Error，有一个 error 属性，属性值是由所有失败值填充的数组。
 */

/**
 * Promise.any()抛出的错误，不是一个一般的错误，而是一个 AggregateError 实例。
 * 它相当于一个数组，每个成员对应一个被rejected的操作所抛出的错误。
 */
new AggregateError() extends Array -> AggregateError

const err = new AggregateError();
err.push(new Error("first error"));
err.push(new Error("second error"));
throw err;

/***
 * 捕捉错误时，如果不用try...catch结构和await命令
 */
Promise.any(promises).then(
    (first) => {

    },
    (error) => {

    }
);