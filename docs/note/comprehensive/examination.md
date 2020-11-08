[toc]
[[toc]]

---

- 字节（Byte），一个字节代表八个比特（Bit）。1字节=1B。 1KB = 1024Byte = 1024*8 Bit

---

## 内核
ie **trident** || chrome，Safari **webkit** || firefox **gecko** || Opera **presto**  
chrome Opera 现在： Blink(基于webkit，Google与Opera Software共同开发)

## 兼容性
1. < !--[if IE]> 所有的IE可识别 <![endif]-- >   
    < !--[if lt IE 9]> IE9以下版本可识别 <![endif]-->   
	**ie10及以上无效**

## 清除浮动
- div style="clear:both;"//左右侧  
- parent:after{ content:"."; height:0; visibility:hidden;display:block;
clear:both;}
- 给包含浮动元素的父标签添加css属性 overflow:auto; zoom:1; zoom:1用于兼容IE6。

## undefined || not defined || null
var x; // 声明 x     
console.log(x); //output: undefined  
console.log(z); // 抛出异常: ReferenceError: z is not defined

---
typeof null //object  
null是一个表示"无"的对象，转为数值时为0；undefined是一个表示"无"的原始值，转为数值时为NaN。  
var a; Number(a); //NaN  
5 + undefined ;//NaN  
基本是同义的，null表示"没有对象"，即该处不应该有值。  
null 表示一个值被定义了，定义为“空值”；  
undefined 表示根本不存在定义。  
所以设置一个值为 null 是合理的，如  
objA.valueA = null;  
但设置一个值为 undefined 是不合理的  

- link 与 @import区别：1. CSS 提供的语法规则，只有导入样式表的作用，link是HTML提供的标签，可以定义 RSS、rel 连接属性等；2.加载页面时，link标签同时加载；@import在页面加载完毕后被加载；3.@import在 IE5+ 才能识别，link不存在兼容性问题；5.link可以用js插入，@import不可


## 提升用户体验
**ajax** ：表单验证时的实时验证，局部的dom改写。  
**字体** ：不同的字体会影响用户对站点权威性的信赖程度  
**加载速度**  ：  
1. 如今大多数浏览器在下载css/js时是并行的，但是单线程运行js的，这也就意味着一个js文件在被解析的同时浏览器不能对任何事件做出响应，直到浏览器弄明白这个js是干什么的才会转向下一个js文件；所以将js文件放尾部，优先下载了html/css等文件，这样会给用户一些错觉，认为网站已经加载。加载js时候会阻塞浏览器的渲染操作。window的 onload 方法里面执行添加script标签。
2. 保证代码的规范性避免404页面，保证每个资源能够正常加载。
3. 一个页面中如果频繁出现向其他域名请求数据，而且使用的是域名，则会出现频繁的DNS解析。
4. 公共库cdn资源，当其他网站也，使得很多访客的缓存中已经存在这些公共库的资源。第二张页面时，如果使用的是同一个外部css/js文件

**页面解构设计**
**细节**

## 垃圾回收
垃圾回收机制依赖引用计数，如果一个值的引用次数不为0，垃圾回收机制就不会释放这块内存，当使用了值之后未取消引用，可能导致内存泄漏

- 当没有变量指向某一内存 a={b:1}; a={c:2}; 存贮{b:1} 会被回收
- 函数调用完后，内部所有变量将被回收

## 内存泄漏
1. 全局变量不会被回收（除了退出浏览器），函数运行完之后，运行函数的内存区被回收。
2. 闭包。
3. DOM被删除或清空时，事件未清除导致的内存泄漏。
避免使用全局变量和函数  
var myvar = 0; // 336ms window.myvar = 0; // 2383ms  
var myfunc = function(){} // 3515ms window.myfunc = function(){} // 10151ms  
避免用new创建函数和数组；  
用对象方式比数组方式更快一点  
a[i] = value; // 1270ms obj[property] = value; // 960ms  

### 堆(heap) 栈(stack)

- 栈：自动分配内存，自动释放
- 堆：动态分配内存，大小不定也不自动释放空间


## 学习interview map 笔记
[https://yuchengkai.cn/docs/zh/frontend/](https://yuchengkai.cn/docs/zh/frontend/)

## js
### 类型

- 基本类型 `string boolean number null undefined symbol` 

- 引用类型 `object array function`

- 变量,基本数据类型在栈,对象在堆
[事例查看，已解决](https://juejin.im/post/5a61ab6a51882573385fcebc)

- 基本类型(Symbol)和引用类型(Object，array等)
```js
const symbol = Symbol('接受一个字符串参数，以作区分用') // 独一无二的
let s = Symbol('s')
s // Symbol(s)
```

- NaN属于number，两个 NaN === NaN 返回false

- 字面量只有在使用的时候才会变成对应的类型
```js
let a = 1    // 此时只是字面量
a.toString() // 此时变为引用类型
```

### typeof
- 返回的值都是小写,有number,boolean,string,function,object,undefined
- 当变量没有定义时可以用 if(typeof variable === 'undefined') 来判断，若直接判断则会报错阻碍程序后续执行
- Array,null 返回 object
```js
let a = null
Object.prototype.toString.call(a) // "[object Null]"
typeof a // object
```

### 类型转换
- 条件判断时，除了undefined,null,NaN,'',0,-0,false其它值都转换为true

### 对象转基本类型
- 先调valueOf()然后调toString(),且都可以被重写
```js
let a = {
    [Symbol.toPrimitive](){
        return 9 //只能返回Number String，优先级更高
    },
    valueOf(){
        return 'you are'
    },
    toString(){
        return 'SB'
    }
}
console.log(a+a.toString()) 
// 没有重写valueOF 返回 SBSB
// 没有重写toString 返回 you are[object Object]
// 返回 you areSB
// 有了toPrimitive方法，即不返回valueOf的值
```

### 逗号操作符

对它的每个操作数求值（从左到右），并返回最后一个操作数的值
```js
var a,b;
a=(b=1,2);
console.log(a);//2
console.log(b);//1
```

### 四则运算
- 赋值运算符是右结合性的
A = B = C = D  等价于 A = (B = (C = D))

先计算左边的表达式（计算的值为内存中的地址），再计算右边的表达式，然后再将右边返回的值赋值给左边返回的对应的地址

- 加法中，其中一个是字符串，另一个也会转为字符串，其它运算，只要其中一方是数字，就会都转为数字

- 加法运算会触发三种类型转换：
  转换为原始值，转换为数字（ + 'b' 等于NaN），转换为字符串

### 比较运算
UTF-8 就是在互联网上使用最广的一种 Unicode 的实现方式

JavaScript语言采用Unicode字符集，但是只支持一种编码方法，UCS-2

charCodeAt(): 返回0到65535之间的整数

Unicode前128个编码单元等于ascii值

英文数字，按照ASCII码比较

中文是按照Unicode编码比较的

## 原型

### `__proto__` 和 constructor prototype

- constructor 和 `__proto__` 是对象独有的
- prototype 是函数独有的，但函数也是一种对象，所以函数都拥有上诉属性

`constructor`
> 指向对象的构造函数
> Function这个对象比较特殊，它的构造函数就是它自己（因为Function可以看成是一个函数，也可以是一个对象）
> 所有函数和对象最终都是由Function构造函数得来，所以constructor属性的终点就是Function这个函数

`__proto__`
> 指向创建该对象的构造函数的原型, 在其 constructor 属性的 name 属性值，表示原型名；
> 这样一层一层的构成了原型链
> 当访问一个对象的属性值时，也会按照该方式一层一层的找，直到 `__proto__` 指向 null

`prototype` 
> 指向函数的原型对象（也是当前函数所创建的实例的原型对象）  所以构造函数的prototype 和实例的 `__proto__` 指向同一个原型对象
> 作用：实例共享属性和方法

### new
自己实现new（未完成）

发生以下四个步过程：

- 新生成了一个对象
- 链接到原型
- 绑定 this
- 返回新对象

优先级：new Foo() 的优先级大于 new Foo，前者是函数，后者是对象

### this
指向调用函数前的对象

- 优先级：有函数调用的会覆盖指向window的，用new创建的优先级最高

- 箭头函数没有this，它的 this 只取决于他外面的第一个不是箭头函数的函数的 this

---

## 执行上下文
变量提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升

## 闭包
一个函数X返回另一个函数Y，且Y使用了X的变量，Y就被称为闭包，X已经出了调用栈，Y能调用X的变量原因是X的变量此时已存贮在堆上，JS引擎通过逃逸分析哪些变量
需要存贮在堆上，哪些需要存贮在栈上。

```js
for ( let i=1; i<=5; i++) {
	setTimeout( function timer() {
		console.log(i);
	}, i*1000 );
}

// 原因是let有个块级作用域，每一次循环都新声明了一个i；引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算
// 而var是声明被提升到全局
// for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
```

## 深浅拷贝
### 浅拷贝

不会拷贝对象的子对象

- Object.assign(target, source)
- 展开运算符 ...

### 深拷贝

对对象以及对象的所有子对象进行递归拷贝

- JSON.parse(JSON.stringify(object)) ：会忽略undefined，不能解决循环引用， 不能序列化函数
- lodash
- MessageChannel

- 形如 `[{ a:1, b:2 }]` 的对象数组，简单的深拷贝实现
```js
const arr = [{ a:1, b:2 }]
const result = arr.map(item => ({ ...item }))
```


## 模块化
- ES6
- CommonJs 是 Node 独有的规范
- AMD 是由 RequireJS 提出的

CommonJs模块输出的是一个值的拷贝，ES6模块输出的是值的引用。
CommonJs模块是运行时加载，ES6模块是编译时输出接口。

require、动态 import() 运行在 JS 运行阶段；静态 import 运行在编译阶段；
require 同步执行，动态 import()异步执行 返回 promise；静态 import 运行在编译阶段，总是最先执行；
require、静态 import、动态 import()都是有缓存的；

import() 是 es6 动态引入新规范


## 事件
- 任意事件触发后三个阶段：捕获（window到目标）-> 目标 -> 冒泡。addeventListener(,,false默认(冒泡阶段执行)||true)

```html
<div id="outDiv">
  <button id="btn">按钮</button>
</div>
```
```js
document.getElementById('btn').addEventListener('click',() => {
  console.log('button 冒泡阶段')
}, false)

document.getElementById('outDiv').addEventListener('click',() => {
  console.log('外层 div 捕获阶段')
}, true)

// 点击按钮返回
// 外层 div 捕获阶段
// button 冒泡阶段
```

>attachEvent('onclick',function(){}) //兼容ie8   

addeventListener('click',function(){},false) //w3c

## event对象
1. event.stopPropagation传播():阻止事件传递(相同)，不管是冒泡还是捕获；IE8以及以下版本用event.cancelBubble冒泡 =true;
2. event.target   返回触发此事件的元素(可用于事件委托),IE下是event.srcElement;
3. 添加的事件函数中用return false来实现stopPropagation()和preventDefault()的功能。

- 同一节点同时注册冒泡和捕获事件，按注册代码先后顺序执行
- addEventListener(),第三个参数如果是对象
```
{
    capture: Boolean  // 和直接输Boolean一样
    once: Boolean // 回调只执行一次
    passive: Boolean // 永远不会调用preventDefault    
}
```

- stopPropagation 可以阻止冒泡和捕获
- stopImmediatePropagation() 可以阻止在同一元素上的后执行的事件，比如挂载了多个click当执行到有该方法的事件回调后，后面的事件即被阻止

## 事件委托优缺点
1. 减少事件注册，节省内存。
2. 子对象动态绑定。
3. 若把所有事件用代理方式容易出现误判。

## event loop

主线程从"任务队列"中读取事件，这个过程是循环不断的

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop

进程 ： 运行的程序就是一个进程，比如正在运行的浏览器，它会有一个进程。
线程 ： 程序中独立运行的代码段。一个进程 由单个或多个 线程 组成，线程是负责执行代码的。

对象被分配在一个堆中

"任务队列"是一个事件的队列（也可以理解成消息的队列）

- js执行过程中会产生执行环境，这些环境会被顺序加入到执行栈中。
- 遇到异步代码，会被挂起并加入到Task(有多种)队列中
- 执行栈空了后，Event loop 便从Task队列中拿出需要执行的放入执行栈执行
- setTimeout后面的是异步函数，即便设置了0秒延迟，也是在同步之后执行，HTML5规定延迟不得小于4ms，不足自动增加，和浏览器也有关联，设置的时间代表了消息被实际加入到队列后才计算的延迟时间,而不是从代码执行到 setTimeout 就开始计算延迟时间
- 不同任务源会被分配到不同Task队列，任务源分为微任务（micro task：es6中叫jobs）和宏任务（macro task：es6中叫task）

    微任务：promise process.nextTick Object.observe MutationObserver ; process.nextTick优先级大于promise.then 如果微任务中又有微任务加入 也会在宏任务前执行

    宏任务：script setTimeout  setInterval setImmediate I/O UI rendering

await后面的表达式会先执行一遍，将await后面的代码加入到微任务中

- 一次EventLoop顺序：
    - 执行同步代码（属于宏任务）
    - 执行栈为空，查询是否有微任务要执行
    - 执行微任务
    - 若有需要，渲染UI
    - 下一轮的EventLoop，执行宏任务的异步代码

```js
setTimeout(() => {
    console.log('set timeout 中的宏任务');
}, 0)

setTimeout(() => {
    console.log('set timeout ： 2000');
}, 2000)

var c = new Promise((res) => {
    console.log('in promise 同步任务');
    res('params')
})

c.then((r) => {
    console.log('微任务 in promise then:' + r);
    var ak = new Promise((re) => {
        console.log('promise in promise');
        re()
    })

    ak.then(() => {
        console.log('promise in promise then');
    })
})

console.log('script 中的宏任务');
// in promise 同步任务
// script 中的宏任务
// 微任务 in promise then:params
// promise in promise
// promise in promise then
// set timeout 中的宏任务
// set timeout ： 2000
```

## 存储
cookie（4K）：删除 同名加max-age=0

localStorage(5M)，sessionStorage（页面关闭就清理）:可保存的数据大小与浏览器有关

indexDB（无限）

## Service worker
[https://yuchengkai.cn/docs/zh/frontend/browser.html#service-worker](https://yuchengkai.cn/docs/zh/frontend/browser.html#service-worker)

## 渲染机制
1. 处理html并构建DOM树
2. 处理css构建CSSOM树
3. 将DOM与CSSOM合并成一颗渲染树
4. 根据渲染树来布局(layout)，计算每个节点的位置
5. 调用GPU绘制，合成图层，显示

构建CSSOM树
- 会阻塞渲染，直到构建完成。
- 十分消耗性能
- 所以应尽量保证层级扁平
- css选择器层级越多，执行越慢，最好用id，class

html解析到script标签，会暂停构建DOM，完成后继续。如果头引入了css，会等解析完样式才会执行js

## load与DOMContentLoaded
Load 事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕。

DOMContentLoaded 事件触发代表初始的 HTML 被完全加载和解析

## 图层
- 普通文档流看成一个图层
- 不同的图层渲染互不影响
- 某些频繁需要渲染的建议单独生成一个新图层，提高性能
- 不可生成过多图层，会有反效果

以下方法可产生新图层
- 3D变化，translate3d，translateZ
- will-change
- video，iframe标签
- 动画实现opacity动画转换
- position：fixed

## 重绘和回流
重绘：不会影响布局的样式改变

回流：布局或者几何属性需要改变，必定产生重绘

和EventLoop关系
- EventLoop执行完microtasks后，会判断是否需要document需要更新
- 判断有无resize和scroll事件需要触发
- 判断是否有media query
- 更新动画并发送事件
- 判断是否有全屏操作事件
- 执行requestAnimationFrame回调
- 执行IntersectionObserver回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
- 更新界面
- 以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 requestIdleCallback 回调

减少重绘和回流
- 使用translate代替top
- visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）
- 批量更改后一次修改DOM
- 不要在循环里反复获取DOM节点属性（如node.style.offsetTop）
- 不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局
- 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame
- css查找避免深度过深（找到符合匹配规则的节点就加入结果集；直到根元素html都没有匹配，则不再遍历这条路径，从下一个最右边的规则开始）。css查询规则是从最右边开始。
- 将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 video 标签

## 性能
### 网络相关
DNS预解析： 
```
<link rel="dns-prefetch" href="//delai.me">  
```
1. 对静态资源域名需要手动做dns prefetching
2. 对js里会发起的跳转需要手动做dns prefetching
3. 不用对超链接做,浏览器会自动做
4. 对重定向跳转的新域名做手动dns prefetching

最优方法：通过js初始化一个iframe异步加载一个页面，而这个页面里包含本站所有的需要手动dns prefetching的域名

### 缓存
- 强缓存
两种方式：
- Expires：Wed, 22 Oct 2018 08:41:00 GMT 改时间后过期
- Cache-Control： max-age=30 30s后过期，HTTP/1.1 优先级高于Expire

通过配置web服务器的方式，让web服务器在响应资源的时候统一添加Expires和Cache-Control Header。

- 协商缓存
如果缓存过期了，我们就可以使用协商缓存来解决问题。协商缓存需要请求，如果缓存有效会返回 304。

- 使用 HTTP / 2.0
- 预加载

### gzip 压缩

- 客户端浏览器存在兼容问题
```
Response Headers
Accept-Encoding: gzip
```

- tomcat 可配置

- nginx 可配置

- koa 用 koa-compress express 用 compression，使用webpack插件compression-webpack-plugin 将资源文件压缩为.gz文件，并且根据客户端的需求按需加载

- 压缩后可能文件反而变大，所以用其它方式压缩过的可不必再压缩

---

```js
<link rel="preload" href="http://example.com">
```
....等[https://yuchengkai.cn/docs/zh/frontend/performance.html#cdn](https://yuchengkai.cn/docs/zh/frontend/performance.html#cdn)

---

## 安全
### XSS(cross-site scripting) 

代码注入的一种
分为三种：反射型，存储行，DOM-base
```js
var a = document.createElement('script')
a.innerText = 'alert(1)'
document.getElementById('ss').append(a)
```

### CSRF
钓鱼网站中加入如下代码，链接为一个get请求，
```
<img src="http://localhost:2500/api/names/?name=hew" alt="no">
```
防范
- Get 请求不对数据进行修改
- 不让第三方网站访问到用户 Cookie
- 阻止第三方网站请求接口
- 请求时附带验证信息，比如验证码或者 token

### 密码安全
密码加盐，只能保证用户真实密码不会泄露，对于暴力访问破解，可以使用验证码拖延时间，或是限制访问次数

采用crypto包 处理
```js
import CryptoJS from 'crypto-js'
CryptoJS.MD5('123').toString()
CryptoJS.SHA1('123').toString() // 注意方法名的大小写

```

- MD5 信息摘要算法（Message-Digest Algorithm）：把一个任意长度的字节串变换成一定长的十六进制数字串
- SHA 安全哈希算法（Secure Hash Algorithm）

框架知识
angluar
- 脏数据检测
触发事件调用$digest(遍历所有数据观察者，判断值是否变化),有变化调用$watch,然后再调$digest,2<=循环<=10，可批量检测出更新值再统一更新UI。

vue
- 数据劫持
Object.definedProperty() 实现双向绑定

---

M: 数据及数据的获取，页面模板等

V: html css

C: js 及 js操作框架

mvc: c中直接获取元素节点进行渲染

mvp：通过view提供的接口进行渲染

mvvm： 数据双向绑定


## 原码 反码 补码
```
用8位二进制表示，最高位就是符号位所以表示的范围就为：[1111 1111, 0111 1111],即[-127, 127]

正数为0, 负数为1

原码：符号位加上值的绝对值 

反码：正数的反码是其本身； 负数的反码是在其原码的基础上, 符号位不变，其余各位取反

补码：正数的补码就是其本身；负数的补码是在其原码的基础上, 符号位不变, 其余各位取反, 最后+1
```


## 页面相关拦截

1. 拦截 ajax 请求：修改 XMLHttpRequest 原型或重写 XMLHttpRequest 

2. 拦截 a 标签，将 a 标签的 src属性值替换，并加上点击事件

3. 拦截点击事件，可以在父元素上添加事件，缺点是只能在捕获阶段拦截，而且拦截后，若直接阻止传递，原本挂载的事件也无法执行


