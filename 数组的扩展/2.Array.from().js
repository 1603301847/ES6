/**
 * Array.from方法用于将两类对象转为真正的数组：类似数组的对象 和 可遍历的对象 包括 数据结构Set和Map
  常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，以及函数内部的arguments对象。
  Array.from都可以将它们转为真正的数组。
 */

// NodeList对象
/**
 * querySelectorAll方法返回的是一个类似数组的对象，可以将这个对象转为真正的数组，再使用filter方法。
 */
let ps = document.querySelectorAll('p');
Array.from(ps).filter(p => {
    return p.textContent.length > 100;
});

// arguments对象
function foo() {
    var args = Array.from(arguments);
}



/**
 * 部署了 Iterator 接口的数据结构，Array.from都能将其转为数组
 * 字符串和 Set 结构都具有 Iterator 接口，因此可以被Array.from转为真正的数组。
 */
Array.from('hello') // ["h", "e", "l", "l", "o"]

let namesSet = new Set(['a', 'b'])
Array.from(namesSet); // ["a", "b"]

/**
 * 如果参数是一个真正的数组，Array.from会返回一个一模一样的新数组。
 */
Array.from([1, 2, 3]) // [1, 2, 3]

/**
 * 扩展运算符（...）也可以将某些数据结构转为数组。
 */
// arguments对象
function foo() {
    const args = [...arguments];
}

// NodeList对象
[...document.querySelectorAll('div')];

/**
 * 扩展运算符背后调用的是遍历器接口，如果一个对象没有部署这个接口，就无法转换。
 * Array.from方法还支持类似数组的对象。
 * 所谓类似数组的对象，本质特征只有一点，即必须有length属性。
 * 因此，任何有length属性的对象，都可以通过Array.from方法转为数组，而此时扩展运算符就无法转换。
 */
//  Array.from返回了一个具有三个成员的数组，每个位置的值都是undefined。
// 扩展运算符转换不了这个对象。
Array.from({ length: 3 }); // [undefined, undefined, undefined]

// 对于还没有部署该方法的浏览器，可以用Array.prototype.slice方法替代。
const toArray = (() => Array.from ? Array.from : obj => [].slice.call(obj))();

// Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);

Array.from([1, 2, 3], (x) => x * x); // [1, 4, 9]

// 将数组中布尔值为false的成员转为0
Array.from([1, , 2, , 3], (n) => n || 0) // [1, 0, 2, 0, 3]

// 返回各种数据的类型
function typeOf() {
    return Array.from(arguments, value => typeof value);
}
typeOf(null, [], NaN); // ["object", "object", "number"]

/**
 * 如果map函数里面用到了this关键字，还可以传入Array.from的第三个参数，用来绑定this。
 * Array.from()可以将各种值转为真正的数组，并且还提供map功能。
 * 只要有一个原始的数据结构，你就可以先对它的值进行处理，然后转成规范的数组结构，进而就可以使用数量众多的数组方法。
 */
// Array.from的第一个参数指定了第二个参数运行的次数。
Array.from({ length: 2 }, () => 'jack') //  ["jack", "jack"]

/**
 * Array.from()的另一个应用是，将字符串转为数组，然后返回字符串的长度。
 * 因为它能正确处理各种 Unicode 字符，可以避免 JavaScript 将大于\uFFFF的 Unicode 字符，算作两个字符的 bug。
 */
function countSymbols(string) {
    return Array.from(string).length;
}