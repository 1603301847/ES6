/**
 * 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
 * 
 * Number.prototype.toString() 
 * toString()方法返回指定Number对象的字符串表示形式
 * 
 * Boolean.prototype.toString()
 * toString() 方法返回指定的布尔对象的字符串形式
 * 
 * 数值和布尔值的包装对象都有toString属性，因此变量s都能取到值
 */
let { toString: s } = 123;
s === Number.prototype.toString // true

let { toString: s } = true;
s === Boolean.prototype.toString // true

/**
 * 解构赋值的规则是，等号右边的值不是对象或数组，就先将其转为对象。
 * 由于undefined和null无法转为对象，所以它们进行解构赋值，都会报错。
 */
let { prop: x } = undefined; // Uncaught TypeError: Cannot destructure property 'prop' of 'undefined' as it is undefined.
let { prop: y } = null; // Uncaught TypeError: Cannot destructure property 'prop' of 'null' as it is null.
