/**
 * Symbol值，指向语言内部使用的方法。
 */


/**
 * Symbol.hasInstance
 * 对象Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。
 * foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)
 * 
 */

/**
 * Symbol.species\
 * Symbol.species属性就是为了解决这个问题而提供的。现在，我们可以为MyArray设置Symbol.species属性。
 * 由于定义了Symbol.species属性，创建衍生对象时就会使用这个属性返回的函数，作为构造函数。
 * 定义Symbol.species属性要采用get取值器。
 */
class MyArray extends Array {
    static get [Symbol.species]() { return Array; }
}
/**
 * 默认的Symbol.species属性等同于下面的写法。
 * 
    static get[Symbol.species]() {
        return this;
    }

 * Symbol.species的作用在于，实例对象在运行过程中，需要再次调用自身的构造函数时，会调用该属性指定的构造函数。
 * 它主要的用途是，有些类库是在基类的基础上修改的，那么子类使用继承的方法时，作者可能希望返回基类的实例，而不是子类的实例。
 */