/**
 * Array.of()方法用于将一组值，转换为数组。
 */
Array.of(3, 11, 8); // [3, 11, 8]
Array.of(3); // [3]
Array.of(3).length // 1



/**
 * Array()方法没有参数、一个参数、三个参数时，返回的结果都不一样。
 * 只有当参数个数不少于2个时，Array()才会返回由参数组成的新数组。
 * 参数只有一个正整数时，指定数组的长度
 */
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]

// Array.of()基本可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载

// Array.of()总是返回参数值组成的数组。如果没有参数，就返回一个空数组。
Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]

// Array.of()方法可以用下面的代码模拟实现
function ArrayOf() {
    return [].slice.call(arguments);
}