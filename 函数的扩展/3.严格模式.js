/**
 * 函数内部可以设定为严格模式
 */
function doSomething(a, b) {
    'use strict';
    // code
}

/**
 * 只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显示设定为严格模式，否则会报错。
 */

// 报错 Uncaught SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
function doSomething(a, b = a) {
    'use strict';
    // code
}

// 报错 Uncaught SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
const doSomething = function ({ a, b }) {
    'use strict';
    // code
}

// 报错 Uncaught SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
const doSomething = (...a) => {
    'use strict';
    // code
}

const obj = {
    // 报错 Uncaught SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
    doSomething({ a, b }) {
        'use strict';
        // code
    }
}

/**
 * 这样规定的原因是，函数内部的严格模式，同时适用于函数体和函数参数。
 * 但是，函数执行的时候，先执行函数参数，然后再执行函数体。
 * 
 * 只有从函数体之中，才能知道参数是否应该以严格模式执行，但是参数却应该先于函数体执行。
 */

/**
 * 参数value的默认值是八进制数070，但是严格模式下不能用前缀0表示八进制，所以应该报错。
 * 实际上，JavaScript 引擎会先成功执行value = 070，然后进入函数体内部，发现需要用严格模式执行，这时才会报错。
 */

function doSomething(value = 070) { // 报错 Uncaught SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
    'use strict';
    return value;
}

/**
 * 设定全局性的严格模式
 */
'use strict';

function doSomething(a, b = a) {
    // code
}

/**
 * 把函数包在一个无参数的立即执行函数里面
 */
const doSomething = (function () {
    'use strict';
    return function (value = 42) {
        return value;
    }
}());