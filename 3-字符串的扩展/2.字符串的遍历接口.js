/**
 * ES6为字符串添加了遍历器接口，使得字符串可以被for..of循环遍历
 */
for (let codePoint of 'foo') {
    console.log(codePoint)
}
// "f"
// "o"
// "o"

/**
 * 字符串text只有一个字符，但是for循环会认为它包含两个字符(都不可打印)，而for...of循环会正确识别出这一个字符
 */
let text = String.fromCodePoint(0x20BB7);
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}
// �
// �
for (let i of text) {
    console.log(i);
}
// 𠮷