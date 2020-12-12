/**
 * 顶层对象，在浏览器环境指的是 window 对象，在 Node 指的是 global 对象。
 * 顶层对象的赋值与全局变量的赋值，是同一件事
 */
window.a = 1;
a // 1
a = 2;
window.a // 2

