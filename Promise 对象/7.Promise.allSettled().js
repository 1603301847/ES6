/**
 * Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。
 */

/**
 * 该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，
 * 并带有一个对象数组，每个对象表示对应的promise结果。
 * 当您有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个promise的结果时，通常使用它。
 * 相比之下，Promise.all() 更适合彼此相互依赖或者在其中任何一个reject时立即结束。
 */