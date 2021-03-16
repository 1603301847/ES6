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

/**
 * 箭头函数使用注意点
 * (1) 函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
 * (2) 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
 * (3) 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用rest参数代替
 * (4) 不可以使用yield命令，因此箭头函数不能作Generator函数。
 * this对象的指向是可变的，但是箭头函数中，它是固定的。
 */

/**
 * this指向的固定化，并不是因为箭头函数内部有绑定this的机制，
 * 实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
 * 正是因为它没有this，所以也就不能用作构造函数。
 */

// 箭头函数转成ES5的代码如下
// ES6
function foo() {
    setTimeout(() => {
        console.log('id: ', this.id);
    }, 1000);
}
// ES5
function foo() {
    var _this = this;
    setTimeout(function () {
        console.log('id: ', _this.id);
    }, 100);
}
// 转换后的 ES5 版本清楚地说明了，箭头函数里面根本没有自己的this，而是引用外层的this。


/**
 * 不适用场合
 * 由于箭头函数使得this从“动态”变成“静态”
 * 第一个是定义对象的方法，且该方法内部包括this。
 */
// 代码中，cat.jumps()方法是一个箭头函数，这是错误的。
// 调用cat.jumps()时，如果是普通函数，该方法内部的this指向cat；
// 如果写成上面那样的箭头函数，使得this指向全局对象，因此不会得到预期结果。
// 这是因为对象不构成单独的作用域，导致jumps箭头函数定义时的作用域就是全局作用域。
const cat = {
    lives: 9,
    jumps: () => {
        this.lives--;
    }
}
/**
 * 第二个是需要动态this的时候，也不应使用箭头函数。
 */
var button = document.getElementById('press');
button.addEventListener('click', () => {
    this.classList.toggle('on');
});

/**
 * 如果函数体很复杂，有许多行，或者函数内部有大量的读写操作，不单纯是为了计算值，
 * 这时也不应该使用箭头函数，而是要使用普通函数，这样可以提高代码可读性。
 */

// 箭头函数还有一个功能，就是可以很方便地改写 λ 演算。
// λ演算的写法
fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)))

// ES6的写法
var fix = f => (x => f(v => x(x)(v)))
    (x => f(v => x(x)(v)));

// 与严格模式的关系
// 鉴于 this 是词法层面上的，严格模式中与 this 相关的规则都将被忽略。 严格模式的其他规则依然不变.
var f = () => { 'use strict'; return this; };
f() === window; // 或者 global

// 使用 new 操作符 箭头函数不能用作构造器，和 new一起用会抛出错误。
var Foo = () => { };
var foo = new Foo(); // Uncaught TypeError: Foo is not a constructor

// 使用prototype属性 箭头函数没有prototype属性。
var Foo = () => { };
console.log(Foo.prototype); // undefined

// 使用 yield 关键字
// yield 关键字通常不能在箭头函数中使用（除非是嵌套在允许使用的函数内）。因此，箭头函数不能用作函数生成器。

// 函数体 箭头函数可以有一个 "简写体" 或常见的 "块体" 
// 在一个简写体中，只需要一个表达式，并附加一个隐式的返回值。在块体中，必须使用明确的return语句。
// 简写体 省略return
var func = x => x * x;
// 常规编写 明确的返回值
var func = (x, y) => { return x + y; };

// 返回对象字面量 记住用params => {object:literal}这种简单的语法返回对象字面量是行不通的。
var func = () => { foo: 1 }; //undefined
var func = () => { foo: function() { } }; // Uncaught SyntaxError: Function statements require a function name

// 花括号({})里面的代码被解析为一系列语句（即 foo 被认为是一个标签，而非对象字面量的组成部分）。
// 用圆括号把对象字面量包起来：
var func = () => ({ foo: 1 });

// 换行：箭头函数在参数和箭头之间不能换行
var func = ()
    => 1; // Uncaught SyntaxError: Unexpected token '=>'

// 可以通过在 ‘=>’ 之后换行，或者用 ‘( )’、'{ }'来实现换行
var func = (a, b, c) =>
    1;

var func = (a, b, c) => (
    1
);

var func = (a, b, c) => {
    return 1
};

var func = (
    a,
    b,
    c
) => 1;

// 解析顺序 虽然箭头函数中的箭头不是运算符，但箭头函数具有与常规函数不同的特殊运算符优先级解析规则。
callback = callback || function () { }; // ƒ () {}

callback = callback || () => { }; // Uncaught SyntaxError: Malformed arrow function parameter list

callback = callback || (() => { });    // ƒ () {}

let empty = () => { }; // 空的箭头函数返回undefined

(() => 'foobar')(); // "foobar" 这是一个立即执行函数表达式

var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b; // undefined

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b); // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2); // [10, 12, 26, 0, 2, 36, 46]

Promise.then(a => {
    // ...
}).then(b => {
    // ...
});

setTimeout(() => {
    console.log('I happen sooner');
    setTimeout(() => {
        console.log('I happen later');
    }, 1);
}, 1);

// 箭头函数也可以使用条件（三元）运算符：
var simple = a => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

let max = (a, b) => a > b ? a : b;

// 箭头函数内定义的变量及其作用域
// 常规写法
var greeting = () => { let now = new Date(); return ("Good" + ((now.getHours() > 17) ? " evening." : " day.")); }
greeting(); // "Good day."
console.log(now); // Uncaught ReferenceError: now is not defined

// 参数括号内定义的变量是局部变量（默认参数）
var greeting = (now = new Date()) => "Good" + (now.getHours() > 17 ? " evening." : " day.");
greeting(); // "Good day."
console.log(now); // Uncaught ReferenceError: now is not defined

// 对比：函数体内{}不使用var定义的变量是全局变量
var greeting = () => { now = new Date(); return ("Good" + ((now.getHours() > 17) ? " evening." : " day.")); }
greeting(); // "Good day."
console.log(now); // Tue Mar 16 2021 16:03:07 GMT+0800 (中国标准时间)

// 对比：函数体内{} 用var定义的变量是局部变量
var greeting = () => { var now = new Date(); return ("Good" + ((now.getHours() > 17) ? " evening." : " day.")); }
greeting(); //"Good day."
console.log(now); // Uncaught ReferenceError: now is not defined

// 箭头函数也可以使用闭包：
// 标准的闭包函数
function A() {
    var i = 0;
    return function b() {
        return (++i);
    };
};
var v = A();
v(); // 1
v(); // 2

// 箭头函数体的闭包（ i=0 是默认参数）
var Add = (i = 0) => { return (() => (++i)) };
var v = Add();
v(); // 1
v(); // 2
// 因为仅有一个返回，return及括号()也可以省略
var Add = (i = 0) => () => (++i);
var v = Add();
v(); // 1
v(); // 2

// 箭头函数递归
var fact = (x) => (x == 0 ? 1 : x * fact(x - 1));
fact(5); // 120