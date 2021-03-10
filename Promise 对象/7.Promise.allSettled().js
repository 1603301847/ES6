/**
 * Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。
 */

/**
 * 该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，
 * 并带有一个对象数组，每个对象表示对应的promise结果。
 * 当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它。
 * 相比之下，Promise.all() 更适合彼此相互依赖或者在其中任何一个reject时立即结束。
 */

/**
 * 语法 Promise.allSettled(iterable);
 * 参数 iterable 一个可迭代的对象，例如Array，其中每个成员都是Promise。
 * 返回值 一旦所指定的 promises 集合中每一个 promise 已经完成，无论是成功的达成或被拒绝，未决议的 Promise将被异步完成。那时，所返回的 promise 的处理器将传入一个数组作为输入，该数组包含原始 promises 集中每个 promise 的结果。
 * 对于每个结果对象，都有一个 status 字符串。如果它的值为 fulfilled，则结果对象上存在一个 value 。如果值为 rejected，则存在一个 reason 。value（或 reason ）反映了每个 promise 决议（或拒绝）的值。
 */

/**
 * 对服务器发出三个请求，等到三个请求都结束，不管请求成功还是失败，加载的滚动图标就会消失。
 */
const promises = [
    fetch('/api-1'),
    fetch('/api-2'),
    fetch('/api-3'),
];

await Promise.allSettled(promises);
removeLoadingIndicator();

/**
 * 该方法返回的新的 Promise 实例，一旦结束，状态总是fulfilled，不会变成rejected。
 * 状态变成fulfilled后，Promise 的监听函数接收到的参数是一个数组，每个成员对应一个传入Promise.allSettled()的 Promise 实例
 */

// 返回值的用法
const promises = [fetch('index.html'), fetch('https://does-not-exist/')];
const results = await Promise.allSettled(promises);
// 过滤出成功的请求
const successfulPromise = results.filter(p => p.status === 'fulfilled');
// 过滤出失败的请求，并输出原因
const errors = results.filter(p => p.status === 'rejected').map(p => p.reason);

/***
 * Promise.all()无法确定所有请求都结束。
 * Promise.allSettled()
 */
const urls = [];
const requests = urls.map(x => fetch(x));
try {
    await Promise.all(requests);
    console.log('所有请求都成功。');
} catch {
    console.log('至少一个请求失败，其他请求可能还没结束');
}