/**
 * 在模板字符串之中，放置了一个常规模板。该模板使用<%...%>放置 JavaScript 代码，使用<%= ... %>输出 JavaScript 表达式。
 */
let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
// "
// < ul >
//   <% for (let i = 0; i < data.supplies.length; i++) { %>
//     <li><%= data.supplies[i] %></li>
//   <% } %>
//  </ul >
//  "

/**
 * 将其转换为JavaScript表达式字符串
 */
echo('<ul>');
for (let i = 0; i < data.supplies.length; i++) {
  echo('<li>');
  echo(data.supplies[i]);
  echo('</li>');
};
echo('</ul>'); // Uncaught ReferenceError: echo is not defined

/**
 * 转换使用正则表达式
 * replace()方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
 */
let evalExpr = /<%=(.+?)%>/g;
let expr = /<%([\s\S]+?)%>/g;

template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');

template = 'echo(`' + template + '`);';
// "echo(`echo(`
//     <ul>
//     `); 
//  $l 
//  echo(`
//     <li>`); 
//  echo( $l ); 
//  echo(`</li >
//     `); 
//  $l 
//  echo(`
// </ul >
//     `);`); "

/**
 * 将template封装在一个函数里面返回
 */
let script =
  `(function parse(data){
  let output = "";

  function echo(html){
    output += html;
  }

  ${template}

  return output;
})`;

return script; // Uncaught SyntaxError: Illegal return statement










/**
 * 1.通过模板字符串，生成正式模板的实例
 */
let template = `
<ul>
  <% for(let i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
/**
 * 2.编写模板编译函数compile
 */
function compile(template) {
  const evalExpr = /<%=(.+?)%>/g;
  const expr = /<%([\s\S]+?)%>/g;

  template = template
    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    .replace(expr, '`); \n $1 \n  echo(`');

  template = 'echo(`' + template + '`);'; // undefined

  let script =
    `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${template}

    return output;
  })`;

  return script;
}
/**
 * 3.使用compile函数
 */
let parse = eval(compile(template));
document.getElementById('box').innerHTML = parse({ supplies: ["broom", "mop", "cleaner"] });
/**
 * 4.页面使用
 */
<div id="box"></div>

//   <ul>
//     <li>broom</li>
//     <li>mop</li>
//     <li>cleaner</li>
//   </ul>