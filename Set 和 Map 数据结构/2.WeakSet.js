/**
 * WeakSet 的成员只能是对象，而不能是其他类型的值。
 * WeakSet 对象允许你将弱保持对象存储在一个集合中。
 * 语法 new WeakSet([iterable])
 * 参数 如果传入一个可迭代对象作为参数，则该对象的所有迭代值都会被自动添加生成的WeakSet对象中。
 *      null被认为是undefined
 * WeakSet 对象是一些对象值的集合, 并且其中的每个对象值都只能出现一次。在WeakSet的集合中是唯一的
 */

// 向WeakSet添加一个数值和Symbol值，结果报错，因为WeakSet只能放置对象
const ws = new WeakSet();
ws.add(1); // Uncaught TypeError: Invalid value used in weak set at WeakSet.add(<anonymous>)
ws.add(Symbol()); // Uncaught TypeError: Invalid value used in weak set at WeakSet.add(<anonymous>)

/**
 * WeakSet和Set的区别
 * 与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值
 * WeakSet持弱引用：集合中对象的引用为弱引用。 
 * 如果没有其他的对WeakSet中对象的引用，那么这些对象会被当成垃圾回收掉。
 * WeakSet中没有存储当前对象的列表。 
 * WeakSet 是不可枚举的。
 */

/**
 * WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，
 * 也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，
 * 不考虑该对象还存在于 WeakSet 之中。
 * 
 * 因为垃圾回收机制依赖引用计数，如果一个值的引用次数不为0，垃圾回收机制就不会释放这块内存。
 * 结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。
 * WeakSet 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题。
 * 因此，WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。
 * 只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。
 * 
 * WeakSet 的成员是不适合引用的，因为它会随时消失。
 * 另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，
 * 运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，
 * 因此 ES6 规定 WeakSet 不可遍历。
 */

/**
 * WeakSet 是一个构造函数，可以使用new命令，创建 WeakSet 数据结构。
 */
const ws = new WeakSet();

/**
 * 作为构造函数，WeakSet 可以接受一个数组或类似数组的对象作为参数。
 * (实际上，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。)
 * 该数组的所有成员，都会自动成为 WeakSet 实例对象的成员。
 */
// a是一个数组，它有两个成员，也都是数组。将a作为 WeakSet 构造函数的参数，a的成员会自动成为 WeakSet 的成员。
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
ws // WeakSet {[1, 2], [3, 4]}

// a数组的成员成为 WeakSet 的成员，而不是a数组本身。数组的成员只能是对象。
// 数组b的成员不是对象，加入WeakSet就会报错
const b = [3, 4];
const ws = new WeakSet(b); // Uncaught TypeError: Invalid value used in weak set

/**
 * WeakSet 结构有以下三个方法
 * WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
 * WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
 * WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。
 */

/**
 * WeakSet 没有size属性，没有办法遍历它的成员。
 * 获取size和forEach属性，结果都不能成功
 */
const ws = new WeakSet();
ws.size // undefined
ws.forEach // undefined
ws.forEach(function (item) {
    console.log('WeakSet has ' + item); // Uncaught TypeError: ws.forEach is not a function
})

/**
 * WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。
 * WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。
 */