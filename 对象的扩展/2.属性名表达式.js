/**
 * JavaScript定义对象的属性
 */
// 方法一 直接用标识符作为属性名
obj.foo = true;
// 方法二 用表达式作为属性名 要将表达式放在括号之内
obj['a' + 'bc'] = 123;

/**
 * 如果使用字面量方式定义对象(使用大括号)，在ES5中只能使用直接用标识符作为属性名定义属性
 */
var obj = {
    foo: true,
    abc: 123
};

/**
 * 用表达式作为对象的属性名，即把表达式放在方括号内
 */
let propKey = 'foo';
let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123
};

/**
 * 表达式还可用于定义方法名
 */
let obj = {
    ['h' + 'ello']() {
        return 'hi';
    }
};
obj.hello(); // "hi"

/**
 * 属性名表达式与简洁表示法 不能同时使用 会报错
 */
// 报错
const foo = 'bar';
const bar = 'abc';
const baz = { [foo] }; // Uncaught SyntaxError: Unexpected token '}'

// 正确
const foo = 'bar';
const baz = { [foo]: 'abc' };

/**
 * 属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]
 * [keyA] 和 [keyB] 得到的都是[object Object], 所以[keyB]会把[keyA]覆盖掉，而myObject最后只有一个[object Object]属性
 */
const keyA = { a: 1 };
const keyB = { b: 2 };
const myObject = {
    [keyA]: 'valueA',
    [keyB]: 'valueB'
};
myObject // {[object Object]: "valueB"}