/**
 * const声明一个只读的常量。一旦声明，常量的值就不能改变。
 * const声明的变量不能改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
 */
const PI = 3.1415;
PI // 3.1415

PI = 3; // 报错 Uncaught TypeError: Assignment to constant variable.

/**
 * 对于const来说，只声明不赋值，就会报错。
 */
const foo; // 报错 Uncaught SyntaxError: Missing initializer in const declaration

/**
 * const的作用域与let命令相同：只在声明所在的块级作用域内有效。
 */
if (true) {
    const MAX = 5;
}
MAX // 报错 Uncaught ReferenceError: MAX is not defined

/**
 * const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
 */
if (true) {
    console.log(MAX); // 常量MAX声明之前就调用，结果就报错 VM445:2 Uncaught ReferenceError: Cannot access 'MAX' before initialization
    const MAX = 5;
}

/**
 * const声明的常量，也与let一样不可重复声明
 */
var message = "Hello!"; // undefined
let age = 25; // undefined

const message = "GoodBye!"; // 报错 Uncaught SyntaxError: Identifier 'message' has already been declared
const age = 30; // 报错 Uncaught SyntaxError: Identifier 'age' has already been declared

/**
 * const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
 * 对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
 */
const a = 1; // 常量一旦声明就不可以修改
console.log(a); // 1
a = 2; // 报错 Uncaught TypeError: Assignment to constant variable.
console.log(a);

/**
 * 对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，
 * const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。
 * 
 * 简单来说就是不能将其声明为其他对象或重新给它赋值，但是可以进行添加修改删除属性
 */
// 常量 foo 储存的是一个地址，这个地址指向一个对象
// 不可变的只是这个地址，即不能把foo指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性。 
const foo = {}; 

// 为 foo 添加一个属性，可以成功
foo.prop = 123;
foo.prop // 123

// 将 foo 指向另一个对象 就会报错 
foo = {}; // Uncaught TypeError: Assignment to constant variable.

/**
 * 常量 a 是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错。
 */
const a = [];
a.push('Hello'); // 1
a.length = 0; // 0
a = ['Dave']; // 报错 Uncaught TypeError: Assignment to constant variable.

/**
 * Object.freeze方法 冻结对象 
 * 常量 foo 指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错
*/ 
const foo = Object.freeze({}); 

// 常规模式时，下面一行不起作用
// 严格模式时，改行会报错
foo.prop = 123;

// 除了将对象本身冻结，对象的属性也应该冻结
var constantize = (obj) => {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, i) => {
        if (typeof obj[key] === 'object') {
            constantize(obj[key]);
        }
    })
}

/**
 * ES6声明变量的六种方法：var命令 function命令 let命令 const命令 import命令 class命令
 */