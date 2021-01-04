/**
 * 传统的 JavaScript 语言，输出模板通常是这样写的（下面使用了 jQuery 的方法）。
 */
$('#result').append(
    'There are <b>' + basket.count + '</b> ' +
    'items in your basket, ' +
    '<em>' + basket.onSale +
    '</em> are on sale!'
);

/**
 * 上面这种写法相当繁琐不方便，ES6 引入了模板字符串解决这个问题。
 */
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);

/**
 * 模板字符串是增强版的字符串，用反引号(`)标识。
 * 它可以当做普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
 * 模板字符串都是用反引号表示
 * 在模板字符串中需要使用反引号，则前面要用反斜杠转义
 */

/**
 * 普通字符串
 */
`In JavaScript '\n' is a line-feed.`
// "In JavaScript ' 
//' is a line-feed."

/**
 * 多行字符串
 */
    `In JavaScript this is
     not legal.`
// "In JavaScript this is
// not legal."

console.log(`string text line 1 string text line 2`); // string text line 1 string text line 2

/**
 * 字符串中嵌入变量
 */
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?` 

/**
 * 在模板字符串中需要使用反引号，则前面要用反斜杠转义
 */
let greeting = `\`Yo\`World!`;
greeting // "`Yo`World!"

