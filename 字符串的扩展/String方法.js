/**
 * String.fromCharCode()方法 接受一个指定的Unicode值，然后返回一个字符串
*/
var n = String.fromCharCode(65); // A

/**
 * String.fromCodePoint()方法 返回Unicode编码对应的字符信息
 */
String.fromCharCode(0x20BB7); // "ஷ"

/**
 * String.length()方法 返回字符串字符编码单元的数量
 */
var a = "Mozilla";
console.log(a.length); // 7

/**
 * String.prototype()方法 表示String原型对象
 */

 /**
  * String.raw()方法 用于返回一个斜杠都被转义(即斜杠前面再加一个斜杠)的字符串，往往用于模板字符串的处理方法。
  * 
  */
String.raw`Hi\n${2 + 3}!` // "Hi\n5!"
String.raw`Hi\u000A!`; // "Hi\u000A!"
String.raw({ raw: ['foo', 'bar'] }, 1 + 2) // "foo3bar"
String.raw`foo${1 + 2}bar` // "foo3bar"
