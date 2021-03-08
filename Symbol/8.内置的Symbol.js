/**
 * Symbol值，指向语言内部使用的方法。
 */


/**
 * Symbol.hasInstance
 * 对象Symbol.hasInstance属性，指向一个内部方法。当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法。
 * foo instanceof Foo在语言内部，实际调用的是Foo[Symbol.hasInstance](foo)
 * 
 */