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