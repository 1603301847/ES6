/**
 * Map 对象保存键值对，并且能够记住键的原始插入顺序。
 * 任何值(对象或者原始值) 都可以作为一个键或一个值。
 * 
 * 一个Map对象在迭代时会根据对象中元素的插入顺序来进行
 * 一个  for...of 循环在每次迭代后会返回一个形式为[key，value]的数组。
 */

/**
 * 键的相等
 * 键的比较是基于 sameValueZero 算法
 * NaN 是与 NaN 相等的（虽然 NaN !== NaN），剩下所有其它的值是根据 === 运算符的结果判断是否相等。
 * 在目前的ECMAScript规范中，-0和+0被认为是相等的
 */

/**
 * Objects 和 maps 的比较
 * Objects 和 Maps 类似的是，它们都允许你按键存取一个值、删除键、检测一个键是否绑定了值。
 */

// 将一个 DOM 节点作为对象data的键，但是由于对象只接受字符串作为键名，所以element被自动转为字符串[object HTMLDivElement]
const data = {};
const element = document.getElementById('myDiv');
data[element] = 'metadata';     // "metadata"
data['[object HTMLDivElement]']