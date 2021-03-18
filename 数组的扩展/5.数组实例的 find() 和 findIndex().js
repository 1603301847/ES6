/**
 * 数组实例的find方法，用于找出第一个符合条件的数组成员。
 * 它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。
 * 如果没有符合条件的成员，则返回undefined。
 */

// 找出数组中第一个小于0的成员
[1, 4, -5, 10].find((n) => n < 0) // -5

// find方法的回调函数可以接受三个参数，当前的值，当前的位置，原数组
[1, 5, 10, 15].find(function (value, index, arr) {
    return value > 9
}) // 10

// findIndex返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
[1, 5, 10, 15].findIndex(function (value, index, arr) {
    return value > 9;
})

// find 函数接收了第二个参数person对象，回调函数中的this对象指向person对象
function f(v) {
    return v > this.age;
}
let person = { name: 'John', age: 20 };
[10, 12, 26, 15].find(f, person); // 26

// indexOf方法无法识别数组的NaN成员，findIndex方法可以借助Object.is方法
[NaN].indexOf(NaN) // -1

[NaN].findIndex(y => Object.is(NaN, y)); // 0