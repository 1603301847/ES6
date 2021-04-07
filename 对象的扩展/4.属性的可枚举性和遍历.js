/**
 * 可枚举性
 * 对象的每个属性都有一个描述对象(Descriptor),用来控制该属性的行为
 * Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象
 */
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo');