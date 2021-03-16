/**
 * 箭头函数表达式的语法比函数表达式更简洁，并且没有自己的this，arguments，super或new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。
 * (param1, param2, …, paramN) => { statements }
 * (param1, param2, …, paramN) => expression
 * 
 * //相当于：(param1, param2, …, paramN) =>{ return expression; }
 * // 当只有一个参数时，圆括号是可选的:
 * (singleParam) => { statements }
 * singleParam => { statements }
 * 
 * // 没有参数的函数应该写成一对圆括号。
 * () => { statements }
 * 
 * //加括号的函数体返回对象字面量表达式：
 * params => ({foo: bar})
 * 
 * //支持剩余参数和默认参数
 * (param1, param2, ...rest) => { statements }
 * (param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }
 * 
 * //同样支持参数列表解构
 * let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c; 
 * f();  // 6
 */

/**
 * 在箭头函数出现之前，每一个新函数根据它是被如何调用的来定义这个函数的this值：
 * 如果是该函数是一个构造函数，this指针指向一个新的对象
 * 在严格模式下的函数调用下，this指向undefined
 * 如果是该函数是一个对象的方法，则它的this指针指向这个对象
 */

/**
 * 基本用法
 * ES6 允许使用 "箭头" (=>) 定义函数
 */
var f = v => v;
// 等同于
var f = function (v) {
    return v;
}

/**
 * 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
 */
var f = () => 5;
// 等同于
var f = function () { return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function (num1, num2) {
    return num1 + num2;
};

/**
 * 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
 */
var sum = (num1, num2) => { return num1 + num2; }

/**
 * 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。
 */
let getTempItem = id => { id: id, name: "Temp" }; // 报错

let getTempItem = id => ({ id: id, name: "Temp" }); // 不报错

/**
 * 特殊情况，可以运行，但会得到错误的结果。
 * 原始意图是返回一个对象{ a: 1 }，但是由于引擎认为大括号是代码块，所以执行了一行语句 a: 1。
 * 这时，a可以被解释为语句的标签，因此实际执行的语句是1;，然后函数就结束了，没有返回值。
 */
let foo = () => { a: 1 };
foo(); // undefined

/**
 * 如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
 */
let fn = () => void doesNotReturn();

/**
 * 箭头函数可以与变量解构结合使用
 */
const full = ({ first, last }) => first + ' ' + last;
// 等同于
function full(person) {
    return person.first + ' ' + person.last;
}

/**
 * 箭头函数使得表达更加简洁
 */
const isEven = n => n % 2 === 0;
const square = n => n * n;

/**
 * 箭头函数的一个用处是简化回调函数
 */
// 正常函数写法
[1, 2, 3].map(function (x) {
    return x * x;
});

// 箭头函数写法
[1, 2, 3].map(x => x * x);

// 正常函数的写法
var result = values.sort(function (a, b) {
    return a - b;
});

// 箭头函数写法
var result = values.sort((a, b) => a - b);

/**
 * rest参数与箭头函数结合
 */
const numbers = (...nums) => nums;
numbers(1, 2, 3, 4, 5);

const headAndTail = (head, ...tail) => [head, tail];
headAndTail(1, 2, 3, 4, 5);