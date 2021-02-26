/**
 * JavaScript字符串允许直接输入字符，以及输入字符的转义形式。
 * "中"的Unicode码点是U+4e2d
 */
'中' === '\u4e2d' // true

/**
 * JavaScript 规定有5个字符，不能在字符串里面直接使用，只能使用转义形式。
 * U+005C: 反斜杠
 * U+000D: 回车
 * U+2028: 行分隔符
 * U+2029: 段分隔符
 * U+000A: 换行符
 * 字符串里面不能直接包含反斜杠，一定要转义写成\\或者\u005c
 */
/**
 *  JSON 格式允许字符串里面直接使用 U+2028（行分隔符）和 U+2029（段分隔符）
 * 服务器输出的 JSON 被JSON.parse解析，就有可能直接报错
 */
const json = "\u2028";
JSON.parse(json); // 报错 Uncaught SyntaxError: Unexpected token   in JSON at position 0 at JSON.parse

/**
 * JSON 格式已经冻结（RFC 7159），没法修改了。为了消除这个报错，ES2019 允许 JavaScript 字符串直接输入 U+2028（行分隔符）和 U+2029（段分隔符）
 * 模板字符串现在就允许直接输入这两个字符。另外，正则表达式依然不允许直接输入这两个字符，这是没有问题的，因为 JSON 本来就不允许直接包含正则表达式。
 */
const PS = eval("'\u2029'"); // ""