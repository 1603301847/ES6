/**
 * Object.assign()方法用于对象的合并，将源对象(source)的所有可枚举属性
 * 复制到目标对象(target)。
 */
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
console.log(target); // {a: 1, b: 2, c: 3}

/**
 * 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
 */
const target1 = { a: 1, b: 1 };
const source3 = { b: 2, c: 2 };
const source4 = { c: 3 };
Object.assign(target, source3, source4);
console.log(target); // {a: 1, b: 2, c: 3}

/**
 * 如果只有一个参数，Object.assign()会直接返回该参数。
 */
const obj = { a: 1 };
console.log(Object.assign(obj) === obj); // true

/**
 * 如果该参数不是对象，则会先转成对象，然后返回。
 */
console.log(typeof Object.assign(2)); // object

/**
 * 由于undefined和null无法转成对象，所以如果它们作为参数，就会报错
 */
Object.assign(undefined); // Uncaught TypeError: Cannot convert undefined or null to object
Object.assign(null); // Uncaught TypeError: Cannot convert undefined or null to object

/**
 * 如果非对象参数出现在源对象的位置(即非首参数)，那么处理规则有所不同。
 * 首先，这些参数都会转成对象，如果无法转成对象，就会跳过
 * 如果undefined和null不在首参数，就不会报错
 */
let obj = { a: 1 };
Object.assign(obj, undefined) === obj; // true
Object.assign(obj, null) === obj; // true

/**
 * 其他类型的值(即数值、字符串和布尔值)不在首参数，也不会报错。
 * 但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
 */
const v1 = 'abc';
const v2 = true;
