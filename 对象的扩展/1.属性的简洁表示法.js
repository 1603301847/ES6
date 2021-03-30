/**
 * Object 构造函数创建一个对象包装器。
 * ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。
 *
 * 语法
 * // 对象初始化器（Object initialiser）或对象字面量（literal）
 * { [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }
 * // 以构造函数形式来调用
 * new Object([value])
 * 
 * 参数
 * nameValuePair1, nameValuePair2, ... nameValuePairN 成对的名称（字符串）与值（任何值），其中名称通过冒号与值分隔。
 * value 任何值。
 */

/**
 * foo 直接写在大括号里面。这时，属性名就是变量名，属性值就是变量值
 */
const foo = 'bar';
const baz = { foo };
baz // {foo: "bar"}

// 等同于
const foo = 'bar';
const baz = { foo: foo };
baz // {foo: "bar"}

function f(x, y) {
    return { x, y };
}
f(1, 2) // {x: 1, y: 2}
// 等同于
function f(x, y) {
    return { x: x, y: y };
}
f(1, 2) // {x: 1, y: 2}

// 方法可以简写
const o = {
    methods() {
        return "Hello!";
    }
};
// 等同于
const o = {
    method: function () {
        return "Hello!";
    }
};

/**
 * 简洁写法 实例
 */
let birth = '2000/01/01';
const Person = {
    name: "张三",
    birth, // 等同于 birth: birth
    hello() {
        console.log('我的名字是', this.name);
    } // 等同于 hello: function()...
};

/**
 * 函数的返回值 简洁写法
 */
function getPoint() {
    const x = 1;
    const y = 10;
    return { x, y };
}
getPoint(); // {x: 1, y: 10}

// CommonJS 模块输出一组变量
let ms = {};

function getItem(key) {
    return key in ms ? ms[key] : null;
}

function setItem(key, value) {
    ms[key] = value;
}

function clear() {
    ms = {};
}

module.exports = { getItem, setItem, clear };
// 等同于
// module.exports = {
//     getItem: getItem,
//     setItem: setItem,
//     clear: clear
// };

/**
 * 属性的赋值器(setter)和取值器(getter)采用简洁写法
 */
const cart = {
    _wheels: 4,
    get wheels() {
        return this._wheels;
    },
    set wheels(value) {
        if (value < this._wheels) {
            throw new Error('数值太小了！');
        }
        this._wheels = value;
    }
}

/**
 * 简洁写法在打印对象时也很有用
 */
let user = {
    name: 'test'
};

let foo = {
    bar: 'baz'
};

console.log(user, foo); // {name: "test"} {bar: "baz"}
console.log({ user, foo }); // {user: {name: "test"}, foo: {bar: "baz"}}

/**
 * 简写的对象方法不能用作构造函数，会报错
 * f是一个简写的对象方法，所以obj.f不能当作构造函数使用。
 */
const obj = {
    f() {
        this.foo = 'bar';
    }
};
new obj.f(); // Uncaught TypeError: obj.f is not a constructor