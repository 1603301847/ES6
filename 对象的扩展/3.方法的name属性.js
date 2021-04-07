/**
 * 函数的name属性，返回函数名。对象方法也是函数，因此也有name属性。
 * 方法的name属性返回函数名 即方法名
 */
const person = {
    sayName() {
        console.log('hello!');
    },
};
person.sayName.name // "sayName"

/**
 * 如果对象的方法使用了取值函数(getter)和存值函数(setter)
 * name属性不是在该方法上面，而是该方法的属性的描述对象的get 和 set属性上面，
 * 返回值是方法名前加上get和set
 */
const obj = {
    get foo() { },
    set foo(x) { }
};
obj.foo.name // Uncaught TypeError: Cannot read property 'name' of undefined

const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');
descriptor.get.name // "get foo"
descriptor.set.name // "set foo"

/**
 * bind方法创造的函数，name属性返回bound加上原函数的名字
 * Function构造函数创造的函数，name属性返回anonymous
 */
(new Function()).name

var doSomething = function () {
        
};
doSomething.bind().name // "bound doSomething"

/**
 * 如果对象的方法是一个 Symbol 值，那么name属性返回的是这个 Symbol 值的描述。
 * key1对应的 Symbol 值有描述，key2没有
 */
const key1 = Symbol('description');
const key2 = Symbol();
let obj = {
    [key1]() { },
    [key2]() { },
};
obj[key1].name // "[description]"
obj[key2].name // ""