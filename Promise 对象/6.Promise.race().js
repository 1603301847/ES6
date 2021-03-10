/**
 * Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
 * 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
 * 那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
 */
const p = Promise.race([p1, p2, p3]);

/**
 * Promise.race()方法的参数与Promise.all()方法一样，如果不是 Promise 实例，就会先调用Promise.resolve()方法，将参数转为 Promise 实例，再进一步处理。
 */
