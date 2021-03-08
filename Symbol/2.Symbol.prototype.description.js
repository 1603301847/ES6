/**
 * 创建 Symbol 的时候，可以添加一个描述。
 */
const sym = Symbol('foo'); // sym的描述就是字符串foo

// 读取这个描述需要将 Symbol 显式转为字符串
const sym = Symbol('foo');
String(sym); // "Symbol(foo)"
sym.toString(); // "Symbol(foo)"

// 属性 description 直接返回Symbol的描述
const sym = Symbol('foo');
sym.description; // "foo" 