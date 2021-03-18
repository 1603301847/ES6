/**
 * toString()方法返回函数代码本身，以前会省略注释和空格。
 */
// 函数foo的原始代码包含注释，函数名foo和圆括号之间有空格，但是toString()方法都把它们省略了。
function /* foo comment */ foo() { }

foo.toString()
// function foo() {}

// 修改后的toString()方法，明确要求返回一模一样的原始代码。
function /* foo comment */ foo() { }

foo.toString()
// "function /* foo comment */ foo () {}"