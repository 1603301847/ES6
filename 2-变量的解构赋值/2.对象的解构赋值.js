/**
 * 解构不仅可以用于数组，还可以用于对象
 */
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

/**
 * 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
 * 等号左边的两个变量的次序，与等号右边两个同名属性的次序不一致，但是对取值完全没有影响。
 */
let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

/**
 * 变量没有对应的同名属性，导致取不到值，最后等于undefined
 */
let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // undefined

/**
 * 如果解构失败，变量的值等于undefined
 * 等号右边的对象没有foo属性，所以变量foo取不到值，所以等于undefined
 */
let { foo } = { bar: 'baz' };
foo // undefined

/**
 * Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多
*/
let { log, sin, cos } = Math;
Math // Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}

/*
 将console.log赋值到log变量
*/
const { log } = console;
log('hello') // hello

/**
 * 如果变量名与属性名不一致
 */
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // aaa

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // "hello"
l // "world"

/**
 * 对象的解构赋值是内部机制，是先找到同名属性，然后再赋值给对应的变量。
 * 真正被赋值的是后者，而不是前者
 */
let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

/**
 * foo是匹配模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。
 */
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
foo // Uncaught ReferenceError: foo is not defined

/**
 * p是模式，不是变量，因此不会被赋值。
 */
let obj = {
    p: [
        'Hello',
        {
            y: 'World'
        }
    ]
};
let { p: [x, { y }] } = obj;
x // "Hello"
y // "World"

/**
 * p作为变量赋值
 */
let obj = {
    p: [
        'Hello',
        {
            y: 'World'
        }
    ]
};
let { p, p: [x, { y }] } = obj;
x // "Hello"
y // "World"
p // ["Hello", {y: "World"}]

/**
 * 三次解构赋值，分别是对loc、start、line三个属性的解构赋值。注意，最后一次对line属性的解构赋值之中，只有line是变量，loc和start都是模式，不是变量。
 */
const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
let { loc, loc: { start }, loc: { start: { line } } } = node;
line // 1
loc // Object {start: Object}
start // Object {line: 1, column: 5}

/**
 * 嵌套赋值
 */
let obj = {};
let arr = [];
({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
obj // {prop: 123}
arr // [true]

/**
 * 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
 * 等号左边对象foo属性，对应一个子对象。该子对象的bar属性，解构时就会报错。
 * foo这时等于undefined，再取子属性就会报错。
 */
let { foo: { bar } } = { baz: 'baz' }; // Uncaught TypeError: Cannot read property 'bar' of undefined

/**
 * Object.setPrototypeOf 将一个指定的对象的原型设置为另一个对象或者null(既对象的[[Prototype]]内部属性)
 * 对象的解构赋值可以取到继承的属性
 * 对象obj1的原型对象是obj2。foo属性不是obj1自身的属性，而是继承自obj2的属性，解构赋值可以取到这个属性。 
 */
const obj1 = {};
const obj2 = { foo: 'bar' };
Object.setPrototypeOf(obj1, obj2);
const { foo } = obj1;
foo // "bar"

/**
 * 对象的解构也可以指定默认值
 */
var { x = 3 } = {};
x // 3

var { x, y = 5 } = { x: 1 };
x // 1
y // 5

var { x: y = 3 } = {};
y // 3

var { x: y = 3 } = { x: 5 };
y // 5 

var { message: msg = 'Something went wrong' } = {};
msg // "Something went wrong"

/**
 * 默认值生效的条件是对象的属性值严格等于undefined
 * 属性x等于null，因为null与undefined不严格相等，所以是个有效的赋值，导致默认值3不会生效。
 */
var { x = 3 } = { x: undefined };
x // 3
var { x = 3 } = { x: null };
x // null

/**
 * 错误的写法
 * 因为JavaScript引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免JavaScript将其解释为代码块，才能解决这个问题。
 */
let x;
{ x } = { x: 1 }; // 报错 Uncaught SyntaxError: Unexpected token '='

/**
 * 正确的写法
 * 将整个解构赋值语句，放在一个圆括号里面，就可以正确执行。
 */
let x;
({ x } = { x: 1 }); // {x: 1}

/**
 * 解构赋值允许等号左边的模式之中，不放置任何变量名。
 */
({} = [true, false]); // [true,false]
({} = 'abc'); // "abc"
({} = []); // []

/**
 * 由于数组本质是特殊对象，因此可以对数组进行对象属性的解构。
 */
// 数组arr的0键对应的值是1，[arr.length - 1]就是2键，对应的值是3.
let arr = [1, 2, 3];
let { 0: first, [arr.length - 1]: last } = arr;
first // 1
last // 3