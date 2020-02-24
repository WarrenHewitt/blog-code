## 正则匹配

> phone number 电话号码
```js
/^(1[356789]\d|14[57])\d{8}$/
```

> replace all non-numeric characters and starting with 0 替换所有0和非数字字符串
```js
replace(/^[^1-9]+|[^\d]+/g, '')
```

> integer 整数
```js
/(^-[1-9]|^0$|^[1-9])\d*$/
```

> positive integer 正整数
```js
/^[1-9]\d*$/
```

> 只包含数字字母中文
```js
/^([\u4e00-\u9fa5]|[A-Za-z0-9])+$/
```

> 删除前后空格
```js
replace(/((^\s+)|(\s+$))/g,'')

// 用 .trim() 同效
```

> cookie
或使用：https://github.com/js-cookie/js-cookie
```js
function getCookieValue(key) {
  var reg = new RegExp(`${key}=([^&]*)`, 'i')
}
```

> positive (integers or decimals) 正数和零
```js
/(^0|^[1-9]\d*)([.]\d+)?$/
```

> Remove the leading and trailing Spaces 删除首尾空格
```js
string.replace(/(^\s*|\s*$)/g, '')
```

## 相关概念及语法
两种创建方式：  
```js
const regexp1 = new RegExp('12','g');  
const regexp2 = /12/g;  //不适用于要用到变量，但是适用于有转义的，主要因为字符不加引号。  
```
- g:全局匹配  。查找所有的匹配而非在找到第一个匹配后就停止；  
- i:不分大小写；  
- m:多行匹配；

---

```js
// 分组可以用 $1, $2, $3, $4, $5, $6, $7, $8, $9来获取 只有1-9 
var str = '1-2-3-4-5-6-7-8-9'
var ab = /(\d+)-(\d)-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)-(\d+)/.exec(str)
console.log('regexp', RegExp.$9); // 9
var cd = /1-2-(.{3})/.exec(str)
// 值被更新了
console.log('regexp', RegExp.$1); // 3-4
```

- 用选择'或'|时 ，要用（）分组将所有的内容括起来；
- \$ 符号表示这个字符串的结束,并不是从字符最后面开始匹配.  
/^1\d{1}$/ 表示匹配以1开始的任意两位数(因为匹配完一位数字后,就表示要匹配的字符串结束了),而不是123这种还要从后面来匹配一次。

- \u4e00-\u9fa5表示在unicode表中的第一个汉字和最后一个汉字  
\un:匹配n，其中n是一个用四个十六进制数字表示的Unicode字符。例如，\u00A9匹配版权符号（©）。

- 多种字符的匹配或：[0-9a-zA-Z]。  
[025]:表示匹配数字0，2，5。

- {} {n} 匹配n次；{n,} 最少匹配n次；{n,m} 最少 n次 最多 m次

- \s: 匹配任何空白字符，包括空格、制表符、换页符等等; \S: 非空白字符

- \w 任意一个字母或数字或下划线，也就是 A~Z,a~z,0~9,_ 中任意一个

- \b:匹配单词边界
- \d：匹配数字。  
- .：表示匹配单个字符，除了换行和结束。

---
var str = 'a123'

前瞻：查找1前面的a
- /a(?=1)/.exec(str) 匹配返回的结果是：a

负前瞻：查找后面不是2的a
- /a(?!2)/.exec(str) 匹配返回的结果是：a

后顾：查找1后面的2
- /(?<=1)2/.exec(str) 匹配返回的结果是：2

负后顾：查找前面不是a的2
- /a(?<!a)2/.exec(str) 匹配返回的结果是：2

() 表示捕获分组，`(?:)` 非捕获分组
- /a(?:1)/.exec(str) 匹配返回的结果是：a1

都为非捕获

---
RegExpObject.exec(字符串)：  

没有匹配值返回null，并把lastIndex（属于RegExpObject）置为0； 

当没有用到分组时，返回的数组只有匹配到的第一个字符串，若分组再依次返回分组。

当使用了RegExpObject匹配了一次，必须把RegExpObject的lastIndex重新 

置为0，不然它会从新的字符串的lastIndex位开始匹配；（全局模式下）  

非全局模式下，与match()方法返回结果一样；  

exec()还会返回两个属性，index（匹配字符的起始下标），input（被匹配的
字符串）  

全局模式下用循环只要返回的不是null就一直循环匹配；这种方法获取的信息是最全的，因为每一个匹配值的位置等都有，但match()只返回一个数组；  

RegExp.test()    检测到有就返回true
