/**
 * 有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。
 * 将 jQuery 生成的deferred对象，转为一个新的 Promise 对象
 */
const jsPromise = Promise.resolve($.ajax('/whatever.json'));

Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))

/**
 * Promise.resolve()方法的参数分成四种情况。
 * (1) 参数是一个Promise实例
 * 如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。
 *（2）参数是一个thenable对象
 * thenable对象指的是具有then方法的对象
 */
let thenable = {
    then: function (resolve, reject) {
        resolve(42);
    }
};
/**
 *（3）参数不是具有then()方法的对象，或根本就不是对象
 * 如果参数是一个原始值，或者是一个不具有then()方法的对象，则Promise.resolve()方法返回一个新的 Promise 对象，状态为resolved。
 * 
 *（4）不带有任何参数
 * Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。
 */
// 代码的变量p就是一个 Promise 对象
const p = Promise.resolve();

p.then(function () {
    // ...
});

/**
 * Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象。
 * 如果这个值是一个 promise ，那么将返回这个 promise ；
 * 如果这个值是thenable（即带有"then" 方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
 * 否则返回的promise将以此值完成。此函数将类promise对象的多层嵌套展平。
 */

/**
 * 语法     Promise.resolve(value);
 * 参数     value 将被Promise对象解析的参数，也可以是一个Promise对象，或者是一个thenable。
 * 返回值   返回一个带着给定值解析过的Promise对象，如果参数本身就是一个Promise对象，则直接返回这个Promise对象。
 */