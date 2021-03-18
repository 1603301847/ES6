/**
 * fill方法使用给定值，填充一个数组。
 * fill方法用于空数组的初始化，数组中已有的元素，会被全部抹去
 */
['a', 'b', 'c'].fill(7) // [7, 7, 7]

new Array(3).fill(7) // [7, 7, 7]

// fill方法从1号位开始，向原数组填充7，到2号位之前结束
['a', 'b', 'c'].fill(7, 1, 2) // ["a", 7, "c"]

let arr = new Array(3).fill({ name: "Mike" });
arr[0].name = "Ben";
arr // [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

let arr = new Array(3).fill([]);
arr[0].push(5);
arr // [[5], [5], [5]]