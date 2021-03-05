/**
 * ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
 * Set本身是一个构造函数，用来生成 Set 数据结构。
 */

/**
 * Set 结构的实例有以下属性。
 * Set.prototype.constructor：构造函数，默认就是Set函数。
 * Set.prototype.size：返回Set实例的成员总数。
 * 
 * Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。
 * Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
 * Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
 * Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
 * Set.prototype.clear()：清除所有成员，没有返回值。
 */

// 去除数组的重复成员
[...new Set(array)]

/**
 * 向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。
 * Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，
 * 它类似于精确相等运算符（===），主要的区别是向 Set 加入值时认为NaN等于自身，
 * 而精确相等运算符认为NaN不等于自身。
 */

/**
 * 看看在判断是否包括一个键上面，Object结构和Set结构的写法不同。
 */
// 对象的写法
const properties = {
    'width': 1,
    'height': 1
};
if (properties[someName]) {
    // do something
}
// Set的写法
const properties = new Set();
properties.add('width');
properties.add('height');
if (properties.has(someName)) {
    // do something
}

/**
 * Set 结构的实例有四个遍历方法，可以用于遍历成员。
 * Set.prototype.keys()：返回键名的遍历器
 * Set.prototype.values()：返回键值的遍历器
 * Set.prototype.entries()：返回键值对的遍历器
 * Set.prototype.forEach()：使用回调函数遍历每个成员
 * 需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。
 */

/**
 * （1）keys()，values()，entries()
 * keys方法、values方法、entries方法返回的都是遍历器对象。
 * 由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。
 */

// Set 结构的实例默认可遍历，它的默认遍历器生成函数就是它的values方法。

Set.prototype[Symbol.iterator] === Set.prototype.values // true

// 扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构。

/**
 * Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
 * Set对象是值的集合，你可以按照插入的顺序迭代它的元素。
 * Set中的元素只会出现一次，即 Set 中的元素是唯一的。
 */