/**
 * 模板字符串可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。
 */
alert`hello`
// 等同于
alert(['hello'])

/**
 * 标签模板其实不是模板，而是函数调用的一种特殊形式。
 * "标签"指的是函数，紧跟在后面的模板字符串就是它的参数。
 * 如果模板字符串里面有变量，会将模板字符串先处理成多个参数，再调用函数。
 * 
 * 模板字符串前面有一个标识名tag，它是一个函数。
 * 整个表达式的返回值，就是tag函数处理模板字符串后的返回值。
 */
let a = 5;
let b = 10;

function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);

    return "OK";
}

tag`Hello ${a + b} world ${a * b}`;
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);

// Hello
//  world
//  
// 15
// 50
// "OK"

/**
 * 将各个参数按照原来的位置拼合回去
 */
let total = 30;
let msg = passthru`The total is ${total} (${total * 1.05} with tax)`;

function passthru(literals) {
    let result = '';
    let i = 0;
    console.log(literals, arguments);

    while (i < literals.length) {
        result += literals[i++];
        console.log(result);
        if (i < arguments.length) {
            result += arguments[i];
        }
        console.log(result);
    }

    return result;
}

msg // "The total is 30 (31.5 with tax)"
// The total is                         53行
// The total is 30                      57行
// The total is 30(                     53行
// The total is 30(31.5                 57行
// The total is 30(31.5 with tax)       53行
// The total is 30(31.5 with tax)       57行

function passthru(literals, ...values) {
    let output = "";
    let index;
    for (index = 0; index < values.length; index++) {
        output += literals[index] + values[index];
    }

    output += literals[index]
    return output;
}