/**
 * (1)交换变量的值
 */
let x = 1;
let y = 2;
[x, y] = [y, x]; // [2,1]

/**
 * (2) 从函数返回多个值
 * 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回
 */
// 返回一个数组
function example() {
    return [1, 2, 3];
}
let [a, b, c] = example();
example(); // [1,2,3]

// 返回一个对象
function example() {
    return {
        foo: 1,
        bar: 2
    };
}
let { foo, bar } = example();
example(); // {foo:1, bar: 2}

/**
 * (3) 函数参数的定义
 * 解构赋值可以方便地将一组参数与变量名对应起来
 */
// 参数是一组有次序的值
function f([x, y, z]) {

}
f([1, 2, 3]);

// 参数是一组无次序的值
function f({ x, y, z }) {

}
f({ z: 3, y: 2, x: 1 });

/**
 * (4) 提取JSON数据
 * 解构赋值对提取JSON对象中的数据，尤其有用。
 */
let jsonData = { 
    id: 42,
    status: "OK",
    data: [867, 3509]
}
let { id, status, data: number } = jsonData;
console.log(id, status, data); // 42,"OK",[867,5309]

/**
 * (5) 函数参数的默认值
 * 指定函数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句
 */
jQuery.ajax = function (url, {
    async = true,
    beforeSend = function () { },
    cache = true,
    complete = function () { },
    crossDomain = false,
    global = true,
} = {}) { };

// ƒ (url,{
// async = true,
//     beforeSend = function () { },
//     cache = true,
//     complete = function () { },
//     crossDomain = false,
//     global = true,
//  } = {}) { }

/**
 * (6) 遍历 Map 结构
 * 任何部署了Iterator接口的对象，都可以用for...of循环遍历。
 * Map 结构原生支持Iterator接口，配合变量的解构赋值，获取键名和键值就非常方便。
 */
const map = new Map();
map.set('first', 'hello'); // Map(1) {"first" => "hello"}
map.set('second', 'world'); // Map(2) {"first" => "hello", "second" => "world"}
for (let [key, value] of map) {
    console.log(key + "is" + value);
}
// first is hello
// second is world

/**
 * 如果只想获取键名，或者只想获取键值
 */
// 获取键名
for (let [key] of map) {
    
}
// 获取键值
for (let [, value] of map) {
    
}

/**
 * 输入模块的指定方法
 * 加载模块时，往往需要指定的输入哪些方法。解构赋值使得语句非常清晰
 */
const { SourceMapConsumer, SourceNode } = require("source-map");