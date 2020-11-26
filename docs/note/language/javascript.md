[toc]
[[toc]]

## Javascript

---

动、静态语言： 声明的变量是否可以存储不同类型的值，在编译阶段会检测类型

强、弱类型语言： 其产物是，是否允许不同类型值之间进行计算

js(动态弱类型语言)

c|c++ 编译型语言 将程序编译成机器语言

java python 解释型语言（java 将程序编译成字节码：理解为一种中间语言，再由JVM将字节码再翻译成机器语言）

---

- void 运算符 对给定的表达式进行求值，然后返回 undefined

- 放在运算符中的函数声明  在执行阶段是是找不到的  `if(function a() {}) { 找不到 a }`

---

- 全局变量 防止未定义 请用window.variable调用 如果不加window可导致报错，阻塞后续代码执行

---

- console 输出占位符
```js
console.log('String: %s, Int: %d,Float: %f, Object: %o', 'string', 1, 1.23, { name: 'name' })
console.log('%c红色%c绿色%c蓝色', 'color:red','color:green', 'color:blue')
// %c后要加空格，padding和line-height实测有效；兼容性不好，谷歌基本都支持
console.log('%c ', 'padding:0 1000px;line-height:1000px;background:url(httpxxxx) no-repeat') 

> location
> copy(location)
> ctrl + c  // 输出拷贝的 location
```

console.trace() 输出一个堆栈跟踪

---

- let 是块作用域，一个函数或一个for或if语句中，其定义的值并不会挂载到window上
- const 常量索引 只可以在声明的时候赋值 变量名在内存中的指针不会变，但是指向这个变量的值可以变  

实现 let 
```js
for(let i = 0; i<10 ;i++) {}  console.log(i) // i is not defined

// 实现, 换一个变量名
for(var _i = 0; _i<10; _i++) {}  console.log(i) // i is not defined

```

实现 const (原理：将其设置为window的属性时，重置其读写权限)
```js
function constFn(key, value) {
    window[key] = value
    Object.defineProperty(window, key, {
        enumerable: false,
        get() {
            return value
        },
        set() {
            throw new TypeError('Assignment to constant variable.')
        }
    })
}
constFn('name', 'hew')
console.log(name);
name = 'new name'
```

---

**节点操作**
- 注意Element 与 Node 区别
- 当把获取到的节点添加到DOM中的另外一个地方时，原位置的节点没有了，移动到文档片段也是同理；相当于移动节点位置

---

**document.createDocumentFragment()**
- 创建新的文档片段
- DocumentFragments 是属于DOM节点的

---

**MutationObserver 监听DOM是否被修改**
```js
var obs = new MutationObserver(function () {
    //这里是回调函数
    console.log('DOM被修改了！');
});
var article = document.getElementById('i12')
obs.observe(article, { attributes: true, childList: true, subtree: true });
// 打开注释可发现回调被执行
// article.innerHTML = '123'
```
---

zepto.min.js 加载新的模块  直接在 https://github.com/madrobby/zepto/tree/master/src 将需要的模块拷贝到min.js中

---

**try catch finaly**

- 如果catch和finally中再抛出异常需要外部再添加try-catch
- 它们任意一个中有return，都会阻塞其后续函数体内容执行，返回值会作为函数返回值

```js
try{

} catch (error) {
    // 这里没有作用域  只有参数有个相对的作用域
} finally {
    // 无论是否有异常，finally中的语句都会执行，即使try，catch中有return
}
```

**throw 方法：**

throw 表达式 

抛出的值可以是字符串，数字，布尔值，对象

用此方法抛出错误，后续的代码将不会执行，错误会被catch捕获，如果没有catch将其捕获，程序将终止
```js
// 抛出一个自定义的对象
class ValidateError {
    constructor(msg) {
        this.name = 'validateError';
        this.msg = msg;
    }
}

try{
    throw new ValidateError('throw error');
}catch(error){
    console.log(`${error.msg}-${error.name}`) // throw error-validateError
}
```

new Error([message[, fileName[, lineNumber]]])
- chrome 不支持后两个参数
- 用new和不用，输出的结果一样
- 还有其它类型错误：ReferenceError（引用错误）,TypeError(类型错误)，RangeError(范围错误) 等


---
**setTimeout | setInterval**

- setInterval 一定要确认清除
- 第三个及之后的参数都作为回调函数的参数
- 同时设置时间0  哪个代码在前 执行哪个

**requestAnimationFrame**
> [示例：](https://codepen.io/Hewitt/pen/VgZapr)
- 回调函数在重绘前调用
- 浏览器频率是16.7ms(1s/60)，setTime设置时间小于这个值时会出现帧丢失的情况
- 而requestAnimationFrame是不用设置时间的，设备的时间绘制间隔是好久，它就是好久
- 当页面没有激活的时候，它会被停止调用，而 setTimeOut 不会
- 回调函数：有一个参数，就是触发该函数的当前时间，可以打印出来

---
**表达式** 

是由运算元和运算符(可选)构成，并产生运算结果的语法结构(了解即可，不必纠结).

- 所有的表达式都有返回值(没有返回undefined)
- 函数调用是表达式
- this, null, arguments,变量，字面量（仅包括数字、布尔值、字符串、正则字面量） 
- 逗号表达式 `some = (1+1, 2+3, 9-8)`  给some 赋值 1，因为返回的是最后一个逗号后的计算值，注意这如果不加括号返回2


**语句**
- 典型的有循环语句和if语句，
- 使某事发生的指令，没有返回值
- 也可以是由大括号括起来的复合语句

---

 **ready 与 onload 的区别**

 $(document).ready()是在DOM结构载入完后执行的，而window.onload是在所有文件都加载完后执行的。
 ```js
 // 原生实现ready
if(document.addEventListener) {
    document.addEventListener('DOMContentLoaded', handler, false);
    document.addEventListener('readystatechange', handler, false); //IE9+
    window.addEventListener('load', handler, false);
}else if(document.attachEvent) {
    document.attachEvent('onreadystatechange', handler);
    window.attachEvent('onload', handler);
}

function handler() {
    //注销事件, 避免反复触发
    document.removeEventListener('DOMContentLoaded',arguments.callee, false);
}
```

---

- 正序遍历与反序遍历：反序更快 for(var i＝item.length; i--; ) 注意最后的分号,该方法会从length-1开始 

---

**continue | break | return  区分**
- break,continue是一起的，return 是函数返回语句，但是返回的同时也将函数停止。  
- break和continue这两个应用的范围是退出循环或者switch语句，在其他地方使用会导致错误.    
- continue(跳出本次循环)语句只能用在while语句、do/while语句、for语句、或者for/in语句的循环体内，在其它地方使用都会引起错误！

- return 后面必须紧跟语句，不能换行
- return 只能出现在函数体内 语法为：return 表达式。
- 无函数结果，语法为：return，把控制权返回给页面
- return false的作用一般是用来取消默认动作的，例如,默认情况下点击一个< a>元素。

---

- 文件，图片等数据类型
1. Blob : 表示一个不可变、原始数据的类文件对象
```
File 继承自 Blob

// array: ArrayBuffer, ArrayBufferView, Blob, DOMString
// options: { type: 'MIME', endings: 'native'(结束符会被更改为适合宿主操作系统文件系统的换行符) || 'transparent'(默认，保持blob中保存的结束符不变) }
const _Blob = new Blob( array, options ); 
```

2. 将图片转 base64
方法一：用 ajax 请求图片资源，设置返回值类型为Blob；或者获取input选择的图片
`xhr.responseType = 'blob';`
```js
let fr = new FileReader();
fr.readAsDataURL(blob);
fr.onloadend = function (e) {
    let base64 = e.target.result;
};
```

方法二：使用canvas
```js
ctx.drawImage(imgElement,176,0,300,150, 0, 150, 300, 150);
const base64 = canvas.toDataURL('image/png');
```

---

### cookie
1. document.cookie='name=hew;path=/;expires=UTCstring;max-age=秒'  //设置和获取  

---
var ojb=JSON.parse('[{"a":"0","b":"1"}]')  
//数字可以不加引号,并且可以是数组与对象的多重结合，也可以只有对象，里面只能用双引号  
```js
var ojb=JSON.parse('{"hew":"yes"}',function(key,value){  
    if(key=='hew'){
        return 'hew'+value;
    }  
    else{  
        return value;  
    }
});
console.log(ojb) // {hew: "hewyes"}
```
---
**stringify:**

syntax:JSON.stringify(value[, replacer[, space]]) **巴科斯范式(BNF)**
- value:数组与对象的结合;
- replacer:函数或是数组；一般设为null；
- space：缩进 | 空格 | 换行 （数字或\t 等）；大于 10，则文本缩进 10 个空格；一般设为4


### window

- 打开新的页面，并将其关闭
```js
var newTag = window.open('', '_blank')
newTag.print()
newTag.close();
```

- window.btoa(需要编码的字符串) 将字符串转base64  <=> window.atob(base64字符) 相反方法

- window.URL.createObjectURL(File 对象、Blob 对象、 MediaSource 对象)

静态方法会创建一个 DOMString(DOMString 是一个UTF-16字符串,如(`<a id="a"><b id="b">hey!</b></a>`)), 其中包含一个表示参数中给出的对象的URL,这个新的URL对象表示指定的 File 对象或 Blob 对象

可以用于预览图片,a标签下载等

---

- 获取元素计算后的样式
```js
window.getComputedStyle('Element').getPropertyValue('border'); // 返回的是样式设置值，如宽度是百分比，即返回百分比
window.getComputedStyle('Element')['border'];

element.computedStyleMap().get('border') // 实验性质的方法，返回的是真实渲染结果值，比如百分比宽度，返回确切数值
```

#### window.localStorage

任何格式存储的时候都会被自动转为字符串

Storage事件（未完）；

```js
localStorage.getItem(localStorage.key('第几个保存的值：比如0，1，2等值'))
sessionStorage.getItem(key) // 获取指定key本地存储的值
sessionStorage.setItem(key,value) //将value存储到key字段
sessionStorage.removeItem(key) // 删除指定key本地存储的值

// sessionStorage.length是sessionStorage的项目数
sessionStorage.clear(); //清除所有

// localStorage与上面相同。
// 或者直接设置值
localStorage.a = 3;
localStorage['a'] = 'sfsf';
```
---

#### location对象：
- location.search  // ?及之后的字符串,只有问号时返回空字符串。
- window.location.port  // 设置，获取端口号
- window.location.protocol  // 同上，协议部分
- window.location.hash  // 同上，#号后面的分段  
- window.location.host/hostname(不包含端口)  // 同上

获取url中的参数:
``` javascript
function getURLParameter(url,name){
        var regexp=new RegExp('(^|&amp;)'+name+'=([^&amp;]\*)(&amp;|$)','i');
        return url.substr(1).match(regexp)[2];
}
getURLParameter('?name=b&amp;password=d','password')
```

---
**instanceof**
- 要判断的值 instanceof Array|String  返回true或false 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链
- [1,2] instanceof Array 判断是否是数组
- data instanceof FormData 判断是否是 FormData

---
option标签在谷歌和ie低版本上是没有click事件的，一般对select都是用change事件；  
获取option的value和text用  
selectObj=document.getElementById('select');  
selectObj.value;  selectObj.options[selectObj.selectedIndex].text;
1. 可以直接获取到select对象执行以上操作；  
2. 事件中用this替代selectObj 即可；  
3. $(selectID).find("option:selected").text()  

---
火狐中是没有innerText，可以用textContent来代替（DOM3的标准）其它的浏览器也可以支持。

---
null:没有对象

undefined:表示缺少值（声明了变量但没有被赋值；调用函数时，应该提供的参数没有提供，该参数返回undefined；对象没有赋值的属性；函数没有返回值时；）

判断值是否为 undefined 可以 （1）直接判断,当变量没有声明时会出错;（2）使用 typeof 判断返回值是否为 'undefined';

---

### Object

- 键值 只能是字符或是 Symbol 如果是其它类型会强制转换为这字符

- 通过 `obj[key] = 'xx'` 添加、获取属性值时，属性名可以是任何字符串（包括只包含空格的字符串和空字符串）

- 对象转字符串 会默认调用 toString 方法  结果为字符串 `[[object Object]]`

---

- 可枚举属性 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Enumerability_and_ownership_of_properties

可以用 Object.keys() 获取

---

- delete 

可删除： 1. 可配置对象的属  2. 隐式申明的全局变量(没有用 var let const 声明)  3. const 或 let 申明的 tdz 中的（没有找到验证代码） 4. 修饰属性 configurable 为 false 的

不可删： 1. 从原型继承而来的属性

删数组： length 不会变 删掉的位置变为 empty  用 join 会保留空 `1,,3`

---

`obj.hasOwnProperty('b')`  判断 obj 对象是否有属性 b  返回布尔值

---

- Object.seal() 密封对象，可以修改属性值
- Object.freeze() 冻结对象，只冻结第一层，其它的都不能修改

---

- Object 获取键值方法
```javascript
let {keys,values,entries}=Object;// 返回的都是数组
let obj = { a: 1, b: 2, c: 3 };
for(let [key,value] of entries(obj){
    console.log([key, value]);
} // ['a', 1], ['b', 2], ['c', 3];
```

- `Object.assign(target, source)` 将souse复制到target ,所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

#### call() || apply() || bind()
前两者用法一样，除了传参方式  

用法如下：
```javascript
// 1.子构造函数调用父构造函数的方法
function Fn(name, age) {
	this.name = name;
    this.age = age;
}
function F1(name, age, num) {
    // 让Fn内部的 this 指向F1的实例对象,由于执行了Fn(),所以给实例对象也绑定了Fn中的属性
    Fn.call(this, name, age); 
    this.num = num;
}

var f1 = new F1(1, 2, 3)

console.log(f1.name, f1.age, f1.num); // 1，2，3

// 2.调用函数并指定上下文‘this’
var obj={name:1,age:2};
function f2(){
	console.log('other',this.name,this.age);
}
f2.call(obj); // other 1 2

// 3.使用apply和内置函数
Math.min.apply(null,[100,2,3])  // 返回 2
Math.max.apply(null|Math,[1,2,3]) // 返回3

Math.min(2, 3, 1) // 1
Math.max(1, 3, 2) // 3  不传参数返回 infinity （min 也是）

Array.prototype.push.apply(array1, array2);
```

**bind(Object,args,args…)**  

会创建一个新函数，第一个参数将作为它运行时的this。

bind 是返回对应函数，便于之后调用；apply 、call 则是立即调用 。

```javascript
var module = { x: 81,getX: function(a,b) { return this.x+a+b; }};
retrieveX=function(a,b){ return this.x+a+b; }
var boundGetX = retrieveX.bind(module,8,1);
boundGetX();  //90
```

#### 继承
```javascript
function Fn(name){
	this.name=name;
	this.type='test'
}
Fn.prototype.do=function(some){
	console.log('do:'+some);
}

function F1(name){
	Fn.call(this,name);// 不会继承原型方法
}
F1.prototype=Object.create(Fn.prototype)||new Fn(); // 用原型,即可以不用重复声明函数
F1.prototype.way=function(way){
	console.log(way)
}

var f1=new F1('koko');
console.log(f1.name);
f1.do('what')
f1.way('what way');
```

#### 面向对象的实现方式
```javascript
// 链式方法 
function Name() { }
Name.prototype = { f1: function (){console.log('f1'); return this; }, f2: function () {console.log('f2');return this;}}
var n = new Name();
n.f1().f2()
//还可以用构造函数的方式


//工厂模式
function createBlog(name, url) {
  var o = {};
  o.name = name;
  o.url = url;
  return o;
}

//构造模式
function Blog(name, url) {
  this.name = name;
  this.url = url;
}

//原型模式
function Blog() {}
Blog.prototype.name = 'wuyuchang';//只能这样创建
Blog.prototype.url = 'http://tools.jb51.net/';
Blog.prototype.friend = ['fr1', 'fr2', 'fr3', 'fr4'];
```
---
navigate.appName/userAgent/appVersion/platform  
IE:trident(-ms-);  
Firefox:gecko(-moz-);  
Chrome:webkit(-webkit-)  
Opera:presto(-o-)  
window.top.document.compatMode;返回模式（标准和怪异）

---

location.reload():当参数为false（默认）如果文档没有改变就从缓存中去取，如果改变就在此下载该文档；当参数为true，直接从服务器重新下载该文档。

---

document.documentElement:获取 HTML 元素对象  
document.body:获取body节点对象  
document.doctype获取< !DOCTYPE>    
document.title='name'获取或更改title标签值  
document.URL获取url  
document.domain获取域名（服务器端）  
document.referrer获取上一个URL(服务器端)  
document.forms  返回文档中的所有Form对象引用  
document.domain  获取域名不带端口

#### Number

- 用Number(参数)来创建数值对象，不推荐用new Number()

- Number('true') 返回 NaN

-  浮点数运算精度问题 `0.1+0.2=0.30000000000000004、1-0.9=0.09999999999999998 3*0.2=0.6000000000000001`

---

- Number.toFixed(n) 
```
返回字符串
n为0到20之间值; 
这里采用的是四舍六入五取偶：保留位后面是5，保留位是奇数则直接舍去后面数，保留位是偶数则进一位; 保留位后面不是5，按照正常四舍五入计算
(0.35).toFixed(1) // 0.3
(0.45).toFixed(1) // 0.5
```
#### Math对象

- Math.abs(X):返回X的绝对值；  
- Math.ceil(X):上舍入；  
- Math.floor(X):下舍入；  
- Math.round(X):四舍五入；  
- Math.pow(x, y):x的y次方
- Math.random(): 返回 [0，1) 之间的随机数  
- Math.sin(以弧度表示的角度)：（2*PI/360）度数，就是弧度

Math 调用方法返回值为： number

#### Date对象
- UTC 世界同一时间 || GMT 格林尼治标准时间 ：返回值相同。GMT 是一个时区，而 UTC 是一个时间标准。  
- Date()方法:不接受参数，  
  alert(Date())返回当前日期和时间字符串；  
- 创建Date对象的方法:new Date() 返回当前日期和时间  

new Date(毫秒数) 可以带毫秒数的参数，返回日期；这个毫秒数是1970年1月1日到返回日期之间的毫秒时间；  
new Date(‘October 13, 1975 11:13:00’)；  
new Date(‘2016-05-13T11:13:00’)；  
new Date(‘2016-05-13 11:13:00’);//在ios系统中可能报错    
new Date(‘2016/05/13 11:13:00’)；  
new Date(year, month, day, hours, minutes, seconds, milliseconds)  
参数可以不写全，但是最好是后面的参数不写全；也可以是放Date对象的字符串形式。 

- var d=new Date();返回的是对象  
d.getTime();指定的日期和时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数    

Date.parse(‘October 13, 1975 11:13:00’)||(d);   
 
这里可以用d当作参数的原因是d会自执行一下返回一个 datestring  

是Date对象的静态方法，不需要用dateObject(就是new出来的d).parse来调用     
    
var d=new Date() d.toISOString()。//2017-01-09T06:19:11.004Z     

- new Date(+new Date()+8*3600*1000).toISOString()  返回正确的时区时间，valueOf() 方法返回一个 Date 对象的原始值，等同于getTime() 。

- 时间大小比较（采用如下的js中的方法获取毫秒数来比较，不要直接比较，直接比较为错误方法）

```js
var d = new Date('2018-04-03T16:40:00'); 
console.log(d.getTime())
console.log(d.valueOf())
console.log(Date.now())
console.log(Date.parse('date string'))
console.log(Date.UTC(2018, 3, 3, 8, 40, 0))
// 当给定的时间一样，返回值相同
```


### 循环
---
```
for(var 变量 in 对象名 ){ 
    // 如果对象是 null 则会自动忽略 
    alert(变量) //返回对象键值对中的属性名  
    alert(对象名[变量])  //返回该变量对应的属性值  
}  
for(var 变量 in 数组名 ){  //不推荐
    alert(变量) //返回数组下标  
    alert(数组名[变量])  //返回对应下标的数组值  
}  
for...in 遍历（当前对象及其原型上的）每一个属性名称,而 for...of遍历（当前对象上的）每一个属性值  （可枚举与不可枚举）

for...of  不可以遍历原生对象 {a:1,b:2} 因为原生对象不具有 Iterator 接口
```

---
in 的用法  
判断数组是否有该索引  
alert(1 in array)  //这里的1表示下标  
判断某一属性是否在该对象中  
alert('name' in  Object)   //'name'表示属性名称  

---
**switch**  
- 用命令对象来替换switch
```javascript
function swichFn(n){
    let tempObject={
        '1':function(){alert(1)}
    }
    if(typeof tempObject[n] !== 'function' ) return false ;
    return tempObject[n]();
}

swichFn('1');
```

- 用查表法来替代switch
```javascript
let result=[0,1,2,3,4]
return result[value]
```

- 与if-else性能比较；switch较高，但是降低了空间利用率，提高了空间复杂度；但是在数量少的时候用if-else

### 事件

- ondblclick 双击事件

- onwheel  鼠标滚轮事件

- oncontextmenu  鼠标右键点击，一般用作更改右键弹出选项

- 内联事件 `onkeyup="handleEnter(event, type, this, '2333')">` 传递 event, 这里名称必须是event

- 判断输入回车
```js
inputElement.onkeyup=function() {
    if (event.keyCode == "13") {
　　　　// 判断回车
　　}
}
```

#### 事件说明
- onchange: 值有改变并且元素失去焦点时触发。  

- onblur: 只要失去焦点就触发。

- 支持 onload 的标签 `< body>, < frame>, < frameset>, < iframe>, < img>, < input type="image">, < link>, < script>, < style>`

- onscroll 事件 对div window都兼容; document，document.body,  document.documentElement 存在兼容问题 http://www.w3help.org/zh-cn/causes/SD9013
监听了window后可以获取html的 scrollTop

- '< div onclick="fn(\''+ param +'\')"></ div>' 内联事件传字符串需加引号并转义

- storage  同一个域名不同页面才有效

#### 事件移除
document.getElementById('id').removeEventListener('click',fn,false);  
这里必须写成fn的函数调用，因为要与添加事件时的函数为同一个函数。  
document.getElementById('id').onclick=function(){};  
document.getElementById('id').onclick=null;  
$('#').unbind('事件名称');参数可选

#### JS鼠标事件获取坐标
[参考地址](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent)

- clientX/Y: 触发点相对浏览器可视区域左上角距离，不随页面滚动而改变;浏览器都支持;  

- pageX/Y: 触发点相对文档区域左上角距离，不会随着页面滚动而改变,除IE6/7/8不支持外，其余浏览器均支持;  

- offsetX/Y,layerX/Y  点击位置相对于元素的内边距
```
内有其它元素,获取的 offsetX 值会被影响，处理方法是设置一个透明遮罩覆盖在顶部
firefox的event不支持 offsetX (新版的是支持的)属性，但是提供了layerX(相对于元素的外边距),如果设置了position为相对/绝对定位就相等。
IE所有版本，chrome，Safari均完美支持，Firefox不支持最新版支持
IE6/7/8不支持，opera不支持，IE9/10和Chrome、Safari均支持
```

- screenX/Y 触发点相对显示器屏幕左上角的距离，不随页面滚动而改变 所有浏览器均支持;  
Event.x/y相对于css中的绝对定位的位置，不会随滚动条的改变而改变。火狐不支持但有等效的pageX。

#### querySelector
querySelectorAll 返回的是一个 Static Node List(是一次对文档的快照，若是该快照下对文档有什么更改不会影响本次操作);  
document.querySelectorAll('选择符')：返回匹配元素集合。  
document.querySelector ('选择符')：返回匹配第一个元素。  
而 getElementsBy 系列的返回的是一个 Live Node List：  
var ul = document.getElementsByTagName('ul')[0],  
     lis = ul.getElementsByTagName("li");  
for(var i = 0; i < lis.length ; i++){   //这里就是lis.length在一直变化  
    ul.appendChild(document.createElement("li"));  
}  
每一次调用lis都会去遍历一下文档，最终会无限循环。  

HTMLCollection 和 NodeList 十分相似，都是一个动态的元素集合，每次访问都需要重新对文档进行查询。两者的本质上差别在于，HTMLCollection 是属于 Document Object Model HTML 规范，而 NodeList 属于 Document Object Model Core 规范。
所以在现代浏览器中，querySelectorAll 的返回值是一个静态的 NodeList 对象，而 getElementsBy 系列的返回值实际上是一个 HTMLCollection 对象 。

---

```
onunload和onbeforeunload事件  
最好body上添加事件  
onunload和一般的事件一样  
onbeforeunload:  
function a(){  
   return '返回文字'  
}  
< body onbeforeunload="return a()">  
Window||document.body.onbeforeunload=function(e){  
    e.returnValue='返回文字'  
}  
或是用addEventListener同样用returnValue
```

---

#### window.onerror
 function(message, source(文件), lineno(行), colno(列), error) { ... }

### Array

**ArrayLick 类数组**

Javascript中存在一种名为伪数组的对象结构。比较特别的是 arguments 对象，还有像调用 getElementsByTagName ,document.childNodes之类的，它们返回NodeList对象都属于伪数组。不能应用 Array下的 push , pop 等方法。

当给其定义了 push 方法后，是根据定义的length 在指定的下标处开始插入

```js
// 将类数组转化为数组
// Array.prototype.slice.call(arguments) || [].slice.call(arguments)
const obj={length:2,0:'first',1:'second'};
Array.prototype.slice.call(obj);//  ["first", "second"]
```

---

- Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例

将字符串、Set、Map arguments 转为数组

---

- Array.reduce(callback, 初始值(如果不设置默认为数组第一个值)) 对数组中的每个元素执行一个提供的reducer函数，将结果汇总为单个返回值

```js
var a = [2,5,8]
// accumulator 上一次返回的值 currentValue 当前值 index 当前正在处理的元素索引
console.log(a.reduce((accumulator, currentValue, index) => { 
    console.log(index); // index 从1开始，这里是没有设置初始值
    var r = accumulator
    if(index === 1) r = accumulator*10
    return 1
}));
// 返回 150
```

---

#### filter/map/forEach/some/every/find/findIndex/includes
- filter 返回符合条件的新数组,没有赋值或删除了的项，会被跳过

- map 返回新数组，数组项不变，但值可做修改

- console.log(arr.forEach(function(v){console.log('v',v)}));//返回undefind

- some 有返回值， some 的回调函数有一个返回 true，则返回true, 有true返回则结束循环

- every 有返回值， some 的回调函数每一个返回 true，则返回true, 有false返回则结束循环

- find 返回第一个符合的值

---

- findIndex(() => {}) 返回第一个符合的值的数组下标(没有返回-1与indexOf一致) 与 indexOf 区别为传入的参数，前者为函数,函数有利于匹配数组项为对象

indexOf(str) 参数可以是字符或字符串

---

- includes: [].includes('some value') // return true/false ,与indexOf相比，可以避免返回的0，判断时的错误

---

在表达式中：`var a = i++` a等于i原来的值，`var a = ++i` a等于i加1后的值；但最后i的值都会加1

---
splice(x,y,z1,z2,z3,z4....):会直接对当前数组进行修改；  
取出从下标为x（下标从0开始）开始的y个数组值，进行修改；  
z参数不加：就删除数组中的这几个数；相当于用空来替换这些数  
y参数为0：在x前面插入z； 
y参数为1：将x替换为z；  
该方法返回被删的数组值；

---
slice(start,end)(字符串也有这个方法，用法相同):会返回一个新的数组；不对原数组进行修改;

start||end=-1表示最后一个元素。  
'abcdef'.slice(0,-2)      //'abcde'  
'abcdef'.slice(-2,-1)    
start和end都为下标（下标从0开始）；返回包含下标start但不包含下标end的数组；

---
array.join('!');将数组的每个元素放到一个字符串中，不传参就用逗号隔开(此时与toString() 方法一样),传就用该符号。  

`array.push(element1[, ...[, elementN]]);` 末尾压栈，返回**数组长度**；通过索引值来添加比push方法更快  
array.pop(); 末尾出栈，返回去掉的值 

array.shift() 对头出栈，返回去掉的值
array.unshift() 对头入栈，返回数组长度

array.reverse();逆向排序的数组  

``` javascript
const arr = [1,55,6,2]
function compare(a,b) { 
    // 这里是从大到小排列
    if (a > b) {
        return -1; 
    }else if(a < b) {
        return 1; 
    }else{
        return 0;
    }
}
// compare(a,b) 重点关注返回值即刻
// 返回0 位置不变
// 返回负数 a放到b之前（这里输入a，b参数不代表a就在b之前）
// 返回正数 a放到b之后 （简单理解为升序）
arr.sort(compare);
// 默认小到大排列（即没有compare函数）按照数组元素对应的字符串的 Unicode 从小到大进行排序。  

// 比较数字可以简单的使用(升序)
function compareNumber(a,b) { 
    return a - b
}
```

**reverse和sort都不返回新数组，且都是对数组才能操作**

arrayA.concat(arrayB); 返回拼接后的新数组，不会覆盖数组间重复的值

var newArray = [].concat(arr1,arr2,arr3)

---

### Function

- 一种特殊的 命名函数表达式

```js
var fnName = function fn() {
    // 这里可以调用 fn  fnname
}
// 这里只能调用 fnName
```

---

- 异步编程
  1. 函数回调
  2. 事件监听
  3. Promises
  4. generator(ES6)
  5. async/await(ES7)
  6. 发布/订阅, 将订阅的回调函数，循环的去执行

---

- 高阶函数 满足：接收函数作为参数或输出一个函数

---
- Function() 构造函数   
函数实际上是功能完整的对象 。Function类可以表示开发者定义的任何函数。用Function类直接创建函数的语法如下：   
var function_name = new Function(arg1, arg2, ..., argN, function_body)   
参数必须是字符串,最后一个参数是函数主体（要执行的代码）

---

同名的变量声明，后者会被忽略；同名的函数声明，前者会被覆盖；同名的函数声明和变量声明，提升函数声明会提升到变量声明之前，变量会被忽略，所以结果是函数声明有效，**注意是声明，并没有赋值**

---
- 变量提升
1. 变量提升，就是把变量提升提到函数的top的地方  
    (function(){  
        alert(a);  // undefind  
        var a=12;  
    })()   
2. 函数提升，把整个函数都提到当前域的top位置，只有声明函数可以提升，表达式函数不能 

将函数声明提到函数同级作用域或全局作用域最前面，将函数定义提升到作用域最前面，

注意函数作用域和块级作用域

```js
function a() {  
    b();  //可以执行  
    function b(){} // 当运行到定义位置时，会将函数名变量同步到与函数同级作用域，如有同名变量会覆盖其值；可类比为 块级作用域的let不提升，不影响上层作用域
    // 如果是非函数的块级作用域，运行到定义位置时就会覆盖全局的同名变量
}

var a = 0
if(true) {
    a = 10
    console.log(a, window.a) // 10 0
    function a() {} // 此处运行后 才会覆盖全局同名变量
    console.log(a, window.a) // 10 10
    a = 20
    console.log(a, window.a) // 20 10 这里的a是函数声明的a 与 window.a 不一样
}
```
3. let 不会变量提升；作用域是块级；不允许同一域重复声明；当在申明前使用，会报错 'Cannot access before initialization'
---

IIFE: Immediately Invoked Function Expression，意为立即调用的函数表达式 (自执行函数),因为原来只有函数作用域和全局作用域，执行一段代码，又不想污染当前作用域，所以用立即执行函数将其包裹起来，既隔离出了独立的作用域，又能立即执行

```js
(function() {} ());
(function(){})();
(()=>{})() // 只有这一种  

!function(){}()  
// 感叹号将函数变为了函数表达式，也可用+-||等代
```

---
构造：
``` javascript
function A(){
    var a1=1;//私有属性
    this.a2=2;//公有属性
    this.aaa=function(){
        alert(a1);//在实例化中是可以访问该私有属性的
    }
}

A.prototype.a2 = 3 // 这个在实例化后会被  this.a2 覆盖
A.a3=3; // 静态属性  
var obj = new A()
obj.constructor.a3 // 实例中 只能这样访问
```

**this指向**
- this指的是调用函数的对象。  
- 在函数中用this设置的属性只有在实例化后才能调用。但是在外部用prototype设置的属性可以用prototype来调用。  
- 当构造函数没有返回对象时，会默认返回this,当返回了其它的除变量外，也会默认返回当前构造函数的this。  
- 当参数是匿名函数时，属于全局调用，所以调用对象是window，如setTimeout（function（）{}，1000）。

- `(foo.bar = foo.bar)(); (foo.bar, foo.bar)()` 这种形式的经过逗号和等号运算符后 就是纯粹的函数了，没有对象引用，内部this指向window

`(foo.bar)()` 这里的括号只是改变了运算顺序，这里实则没有什么影响，相当于 `foo.bar()`


### String

- 字符串存储的大小：理论最大长度是2^53-1

- 定义的字符串中需要用到 `\` 需要将其转义写为 `\\` 

- 数字 Number 的最大最小范围：Number.MAX_VALUE Number.MIN_VALUE

Number类型统一按浮点数处理，64位存储，整数是按最大54位来算最大最小数的，否则会丧失精度；某些操作（如数组索引还有位操作）按32位处理

- `+` 操作是将该元素转换为number类型，转换不了就返回NaN。

- Number.toString(param) param 可以是2-32

- 数字转字符串

toString() 最慢；1 + '' 字符串拼接 和 `` 模板字符串 都更快，速度基本相同 

- 字符串转数字
  1. Number(new Date()|new Boolean()|'123');  
  2. parseInt(该参数会被强制转化为字符串 | 注意科学计数法, radix(一定要指定一个,不指定就会有不同的默认(一般是10)))  解析一个字符串并**返回指定基数的十进制整数** 返回的是十进制
      - https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt
      - `parseInt('2+9', 10)` 返回2 因为遇到非指定基数的字符就不解析了
        
  3. parseInt(0.0000008) === 8  //true

  4. parseFloat(一个参数); 

  6. `+'10'` | `~~'10'`  // 10 

- ~ (按位非运算) 与 ~~ 
```
~x 等同于 -(x+1)
~~x 等同于 -(-(x+1)+1)

应用： if([].indexOf(x) > -1) {} => if(~[].indexOf(x)) {}  判断条件结果相同  后者结果为0 表示没有匹配到

向下取整 ~~1.23 => 1  比 parseInt 效率相对较高

```

- 位运算
1. 逻辑位运算：&(与) |(或) ^(异或，两个位相同为0，相异为1) ~(非 取反)

示例：0与1互换 
`const fn = (n) => (n^1)`

2. 移位运算符 <<(左移)  >>(右移) >>>(无符号右移)

求 2^n 值： `2^3 = 1<<3 = 32`

求一个数的1/2：`8/2 = 8>>1 = 4` 前提是2的倍数

--- 

- 字符串之间不能用三元运算符来拼接
```js
var str = '<div class="d-p-people">'+n===1?n:2+'</div>'  
```

- substring(start,end)  
若end比start小，会先交换这两个参数，若有负数变为0, end 下标取不到

substr(start, length)  // 建议不使用，将来会被废弃

---

- charAt: `"Hello world!".charAt(1)`  //e 

---
当字符数少，且连接数量小于1000时就可以用"+"来连接字符串即可，若是过大，就用数组的join方式来连接，主要是考虑到老浏览器的速度比较慢；

---
toLocaleLowerCase()和toLowerCase()区别主要是前者会根据地区的语言环境来进行编码。toUpperCase()

---
字符串中可以用正则表达式的方法：  
1. str.match();  
不设置全局，只返回第一个匹配值,并且返回子表达式的值。和属性index,input。  
设置全局，只返回所有的匹配值，不返回子表达式的值。  
var str='name=hew;a=c;name=hi';  
console.log(str.match(/name=([^;]+)(;|$)/g))  
//返回 ["name=hew;", "name=hi"]  

2. str.search();  //返回匹配字符开始的位置，没有返回-1  
3. str.replace(字符|正则，替换值|函数);  函数返回值为替代值，当用字符时不是全局替换，函数第一个参数为匹配结果字符，然后依次是子表达式值…,出现位置，被匹配字符串。返回被替换过后的新字符串  
4. str.split();   //以传入的字符或正则匹配的字符分割成数组，并删除该字符，必填，没有默认  
5. substr 

## es6

### 字符串

${${}}  //能嵌套

**字符串方法**

>repeat(n):字符串重复次数
- n.123 //取整 'r'.repeat(2.23) // 'rr'
- `-1<n<0`  //取0
- n=NaN  //取0
- n=字符串  //转换为数字
- n=负数（-1等）或Infinity  //报错

---
includes(), startsWith(), endsWith()  //都返回boolean值

---
trim(): 两端删除空白字符,去掉换行

#### 标签模板
```js
const str = `a${12}b${34}`
const fn = () => {}
// 函数方式调用
fn`str` 
// 相当于fn(['a','b',''], 12, 34)
```

### class

```js
class Test {
    constructor(x) {
        /* 对应es5 的构造函数 */
        this.name = 12222
        this.x = x || 'original x'

        /* 这里类似使用原来的构造函数添加 prototype */
        this.__proto__.m = 23333 
    }

    /* 类的所有方法都是定义在类的prototype上 */
    getX() {
        return this.x
    }
}

new Test().getX()   // 'original x'
```

#### 静态属性和方法
- 静态属性： 在属性前加 static(草案阶段) 或是  ClassName.propertyName = 'xx'(目前只支持这个方法) 方式设置
- 在方法前加 static
- 只能通过类来调用 不能被子类继承（静态方法）,静态方法中的this指向类而非实例

#### 继承
super ：表示父类的构造函数，用来新建父类的this对象

super(参数) 这里的参数是传给父类的构造函数

子类必须在 constructor 方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。constructor 中this指向实例

ES6 的继承机制，先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this


#### 单向链表

```js
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class ListNode {
    constructor() {
        this.length = 0
        /* 头指针 */
        this.head = null
    }

    append(value) {
        const node = new Node(value)
        if(this.head) {
            let endHead = this.head
            /* 找到最后一个 node */
            while(endHead.next) {
                endHead = endHead.next
            }
            endHead.next = node
        } else {
            this.head = node
        }

        this.length++
    }
}
```

---

### Promise
一种异步编程解决方案，语法上是一个对象。

```js
var promise=new Promise(function(resolve,reject){
    // 一些操作，然后判断是 resolve  还是 reject
    resolve('这里传递的参数将在then中接收')
})
```
1. 三种状态Pending，Resolve，Rejected   

2. var promise=new Promise(function(resolve,reject){})。   
resolve和reject由js引擎提供。    
resolve将Promise对象的状态从“未完成”变为“成功”    
reject将Promise对象的状态从“未完成”变为“失败”  

3. promise.then(function(value){//success}), function(value){//failure});   
then()方法作用是：为Promise实例添加状态改变时的回调函数，分别为resolve和reject指定回掉方法。   
Promise.prototype.then()。  
then()中返回的值将会被作为参数传递给下一个then(),**如果上一个then返回的是一个Promise对象**，这时后一个回调函数(即then)，会等待该Promise的状态改变来调用回调函数。

4. catch()  
Promise对象的错误具有冒泡性质，会一直向后传递，直到被捕获为止。     
一般来说，不要在then中定义使用Reject状态的回调函数，而是用catch。

5. Promise.all([])  返回一个Promise实例

```js
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))

const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))
```

串行promise (异步引入高德地图，参见 vue-admin -> utils)
```js
const loadA = new Promise((resolve, reject) => {
    console.log('promise 1 start');
    resolve(1)
})
const loadB = new Promise((resolve, reject) => {
    console.log('promise 2 start');
    setTimeout(() => {
        resolve(2)
    }, 2000);
})

function a() {
    return loadA.then((r) => {
        console.log('promise 1 end', r);
        return loadB
    }).then((r) => {
        console.log('promise 2 end', r);
        return 'finish'
    })
}

a().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
```

---

### Map/Weakmap Set/Weakset

[更多用法 参考](https://es6.ruanyifeng.com/#docs/set-map)

- map 和 set 有 forEach 方法可以用

1. Set: 和数组类似但是，但是成员唯一，不能使用下标方式获取值
```js
var set=new Set(参数)   // 这里的参数可以是数组或类似数组的对象{0:'a',1:'b',2:'c'}。  
// 在set内部两个NAN是相等的，两个对象总是不等的
// 四个方法：  
set.add(value) // 添加值 返回set结构本身  
set.delete(value) // 删除值 返回布尔值，表示是否成功  
set.has(value) // 检测是否为set成员 返回布尔值  
set.clear() // 清除所有成员 没有返回值
```

2. WeakSet 
   - 成员只能是对象
   - 构造函数可以接收一个数组为参数，数组的成员将被设置为 WeakSet 的成员，所以数成员必须为对象
   - WeakSet 中的对象都为弱引用，及当检测到值没有被其它地方引用时，会直接回收内存，不考虑 WeakSet 还在引用
   - 不能遍历

3. Map 是键值对的形式的，但是键的形式不只是字符  
```js
const map = new Map([['name', 'hew'], ['code', 10001] ]) // 构造函数接受一个数组，数组的成员是表示键值对的数组
const obj = { key: 'kk' }
map.set(obj, 'add a object key')
console.log(map.get(obj))  // add a object key
console.log(map.get('name')) // hew
```

4. WeakMap 
   - 只接受对象作为键名 
   - 键名所指向的对象，不计入垃圾回收机制

---
### 函数

---
function a(b,c=1){}

- 定义了默认值的参数，应该是函数的尾参数,非尾部的参数设置默认值，实际上这个参数是没法省略的,除非用undefined代替，以触发该参数等于默认值。
- 设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。初始化结束，作用域消失。不设置参数默认值时，不会出现的。

---
(param,..)=>{}  
- 不支持new方法。  
- 不会改变指向对象（例如call，apply方法）  
- 箭头函数没有它自己的this值，它内部的this继承自外层作用域(箭头函数绑定父级上下文)，但是function函数是无论你需不需要都会自动接收一个this，  
- 在定义对象方法的时候必须用非箭头函数定义，这些函数会从调用者的作用域获取一个有意义的this
- 内部的this 总是指向函数定义生效时所在的对象，而不是指向运行时所在的作用域。  

a={  
    name:()=&gt;{this}  //这里的this指window，类似匿名函数  
}

### 扩展运算符
多个参数（用于函数调用）或者多个元素（用于数组字面量(直接使用的数据值如1,2)）或者多个变量（用于解构赋值）。  
```js
var args=[1,2,3]  
var fn=function(){};  
fn(…args);  

var arr1 = [0, 1, 2];  
var arr2 = [3, 4, 5];  
arr1.push(...arr2);  
```

- 数组

`[...a, ...b]` 不会覆盖重复的值， 不同于对象

```js
var [a, [[b], c]] = [1, [[2], 3]];  

var [,,third] = ['a', 'b', 'c'];  
console.log(third); // c

const [first, ...rest] = ['a', 'b', 'c'];
console.log(rest); // ['b', 'c']
...rest 这种给数组机构赋值的，只能放在最后

```

- 对象
```js
var { foo: foos, bar: bar } = { foo: 'lorem', bar: 'ipsum' };
console.log(foos) //lorem   
// 当变量名和后面属性名一致时可以简化  
var { foo, bar } = { foo: "lorem", bar: "ipsum" };

// {...Object1,...Object2}: 后一个对象的属性会覆盖前一个对象的相同属性  
// 详见 Object.assign() 

const { a: a, b:b=9, c='no c' } = { a: 12, b: null } 
console.log(a, b,c); // 12, null on o
// 当被赋予的值是null时，是不会用默认值将其覆盖的，默认值只会赋值为undefined的情况,当没有属性c时才会使用默认值
// Babel是将其解析为判断值是否等于void 0 也就是undefined
```

- 剩余操作符（the rest operator）  
```js
var [a,…b]=[1,2,3,4];  
console.log(b)  //[2,3,4] 
```

---

### 模块功能
ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";。  
- es6 模块不是对象  而是通过export输出的代码
- es6 模块是在编译时加载
- export var m=1 ;export function f(){};(正确);  
  var m=1;export m;(错误)  
  注意与内部变量建立一一对应关系.  
  推荐用法 export {m,f};  
  var n = 1;  
  export {n as m};  
- export 命名可以出现在任何位置，必须是模块顶层。

- 引入的同一个模块，如果不做拷贝，当修改其原始值时，会影响所有引用该模块的地方

---
export 与 export default 的区别在于import的时候是不是需要用{}，后者不用。

---
- import '模块名' // 表示引入并执行该模块，多次重复调用只执行一次 `import a.js`
- import 后的文件位置的.js可以省略
- 由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。

---
整体加载
- 当没有默认导出时要用 * 防止报错  import * as api from './controllers/api'
- import * as **obj** from 'somefile';(被引入文件是输出多个export，通过该方法集合为一个对象)
- 是可以静态分析的，所以不允许运行时改变
- 允许 obj= 'hello';

---
export default
- 因为多了个default  所以可以理解为将default与模块内部的变量进行了对应 。

```
export {add as default}; 等同于export default add;     

import { default as xxx } from 'modules'; 等同于import xxx from 'modules';

可同时引入default内容和单个内容 import a, { each } from 'export';
```
---

扩展运算符内部调用的是数据结构的 Iterator 接口，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符

---

### 函数扩展
1. 尾递归（只存在一个帧调用，所以效率高，不会出现栈溢出的情况）


尾调用：一个函数执行的最后一步是将另外一个函数调用并返回

每个函数在调用另一个函数的时候，并没有 return 该调用，所以JS引擎会认为你还没有执行完，会保留你的调用帧，所以在return后调用函数，不需要保留外层函数的调用记录
```js
function a(p){
  return b(p);
}
```

### 数组的扩展
1. 扩展运算符与函数参数结合
2. 当参数是数组时不再依赖apply拆分数组为参数
3. 任何 Iterator 接口的对象，都可以通过...扩展运算符转为真正的数组

---

### Proxy | defineProperty | defineProperties

**拦截** 对目标对象的访问
#### Proxy(target,handler)

target：要拦截的对象

handler：值为对象，拦截行为

Proxy 是针对Proxy实例的，并不针对目标对象(target)

如果handler不设拦截，访问proxy就等同与 target

```js
const target = {
    name: 'hew'
}
const handler = {
    // 三个参数，receiver表示操作行为所针对的对象，一般就是proxy实例
    get(target,key,receiver){
        if(key in target) {
            return target[key]
        } else {
            throw new ReferenceError(`${key}, does not exist`)
        }
    },
    // 严格模式下，如果没有返回true会报错
    // 如果目标对象的属性为writadble，那相对于该属性，set方法失效
    set(target, key, value) {
        if (key === 'age') {
            if(!Number.isInteger(value)) throw new TypeError('is not integer')
            if(value>10) throw new RangeError('need less than 10')
        }

        target[key] = value
    },

    // 拦截函数的调用，call，apply操作
    apply(target, ctx, args) {
        return args
    },

    deleteProperty(target, key) {
        console.log('delete', key);
        delete target[key]
        return true
    }
}

const proxy = new Proxy(target, handler)
console.log(proxy);
```

- Object.defineProperty

Object.defineProperty(obj, 属性名称, descriptor),在现有对象上新建一个属性，或修改现有属性，并返回这个对象

Object.defineProperties(obj, props)

只能对属性进行数据劫持，所以需要深度遍历整个对象

对于数组不能监听到数据的变化

```js
Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

props: {
    property: descriptor
}
descriptor: {
    configurable: 默认false；表示属性是否能删除，以及除writeable以外的属性可否被修改；
    writable:  // 默认 false 属性值可否被修改
    enumerable: // 默认 false  属性是否可以被 for...in 和 Object.keys() 获取
    value: 属性值
    get() {
        // 这里注意 又使用 obj.key  形成死循环
    }
    set() {}  当设置了get或set后不能设置value或writeable
}
```

---

### Object.create(proto, [propertiesObject])

proto: 新对象的__proto__

propertiesObject：可选参数，添加到原型上的枚举属性，以及这些属性的描述，名称等，且对应Object.defineProperties()的第二个参数

返回值：指定了原型对象和属性的新对象
```js
const a = Object.create({
    name: 'hew'
}, {
    age: {
        set(value){
            console.log("can't set", value);
            return value
        },
        get() {
            return 250
        }
    }
})
a.age=12  // can't set 12
console.log(a) // { age: 250, get age: f, get age: f, _proto_: { name: 'hew' } }

```

---

### 装饰器 Decorator
参考 `react-admin/src/pages/practice/decorator.js`

- 装饰类时：添加的静态属性是 name 时，可能报错，不能修改只读属性

- 装饰类方法：提供了三个参数 target, name, descriptor


---

## ES7-ES8

### es7

- includes：参考上文

- 求幂 Math.pow() 的简洁写法 ** 
Math.pow(3, 3) === 3 ** 3

### es8
- String.prototype.padStart(总长度, 被填充字符串：默认空格) // 返回新的字符串 
'789'.padStart(10, '123')  // "1231231789"

- padEnd() 参数同上，是在字符串尾部添加

- String.prototype.padEnd(总长度, 被填充字符串)
'123'.padEnd(5, '789')  // "12378"

- Object.entries()
`Object.entries({ a: 1, b: 2 }) // [['a', 1], ['b', 2]]`

- Object.values()

- 异步函数 async/await 

- Object.getOwnPropertyDescriptors(obj) // 返回对象所有自身属性（非继承属性）的描述对象

【es5】Object.getOwnPropertyDescriptor(obj, key) // 返回某个对象属性的描述对象

### es2019

- 展平数组

flat(展平层级:数字(默认1)或Infinity)  会过滤数组中的空值 返回新数组

flatMap(() => {}): 对原数组执行一个map操作，然后再执行flat 只能展开一层数组  返回新数组
```js
[1,2,[3,,5,[6,7,,9]]].flat(infinity) // [1,2,3,5]
```

- Object.fromEntries() 将键值对数组转换为对象

```js
Object.fromEntries([['name', 'hew']])

Object.fromEntries(new Map([['name', 'hew'], ['scope', '12']]))  // {name: 'hew', scope: '12'}

Object.fromEntries(new URLSearchParams('name=hew&scope=12')) // {name: 'hew', scope: '12'}
```

- 删除字符串开头的空格

' abcdefg'.trimStart() 同 trimLeft()

'abcdefg  '.trimEnd() 同 trimRight()


- try catch 中 catch的参数可以省略

- Symble 加了一个description的只读属性 返回描述

