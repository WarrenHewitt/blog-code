[toc]
[[toc]]

- 检测媒体 @media 后可用的查询 `window.matchMedia('print').addListener((res) => {});`

## HTML4

### 浏览器解析文档过程

1. 解析html文档，构建DOM树（遇到img标签就加载资源）
2. 加载样式，解析样式，构建样式规则树
3. 加载js，执行js代码
4. 把DOM树与样式树匹配构建渲染树（加载背景tupian）
5. 计算元素位置进行布局
6. 渲染绘制

DOM树里包含了所有HTML标签，包括display:none隐藏，还有用JS动态添加的元素等

render tree不包含隐藏的节点 (比如display:none的节点，还有head节点)，因为这些节点不会用于呈现，而且不会影响呈现的，所以就不会包含到 render tree中

重绘：render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color

回流：render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建

---

- input 标签相关操作：

disabled='disabled' 可用于option标签和input标签

readonly='readonly'用于input标签，不能修改的。仍然可以使用 tab 键切换到该字段，还可以选中或拷贝其文本。

input 标签设置属性 autofocus 自动获取焦点

inputElement.focus()

checked 在标签上只要出现就会被勾选，如果是用js代码设置 checked 的值为 true 或 false 即正常

---

p 标签中不能放块级元素,内联元素中不能放块级元素;

---

是用 img 来加载图片还是用背景图片：

1. 页面会先加载img图片，若图片大会影响后面的内容的加载
2. 如果用背景来加载图片的话，就不会影响到页面的显示效果
3. 图片比较重要且资源小就用img
4. alt属性有利于seo（搜索引擎优化）；更好的有利于seo用a标签加css的背景；

---

&nbsp占位符 


## 标签

- a
```
download: 添加该属性表示下载 href 内容而非导航，其值是下载文件的名称 
href: 可以是 http开头的地址也可以是  blob: URL(URL.createObjectURL创建) 或 data: URL(base64 的 URL) , tel: URLs, mailto URLs  等
```

- table 
```
属性:
colspan= 2  占多少列；
rowspan=2  占多少行；
align=left；   
cellspacing="0"：两个单元格之间空间的大小；
cellpadding="0"：单元的内容和边框之间的空间； 
border="1px"

样式：
border-collapse: collapse; 去掉 table 中边框间间隔，合并边框
```

`<colgroup>` 标签用于对表格中的列进行组合，以便对其进行格式化，样式设计。table内，caption元素之后,thead之前（https://www.runoob.com/try/try.php?filename=tryhtml_colgroup_test）

可以利用该标签，设置可拖动表格宽度

---

< abbr title='people's republic of china'>PRC< /abbr>

为浏览器拼写和检查和搜索引擎提供有用的信息。新增的结构标签：（由DIV派生出来）

section:页面中的一个内容区块（不用来布局，只用来划分网页）

article：定义页面独立的区域

aside：侧边栏内容

header：

hgroup：对网页或是区块（section）的标题进行整合

footer：定义section或是文档的页脚

nav：导航

figure：独立的流内容，图片等

mark:标记

progress：进度条（支持性不好）

time：定义公历的时间（24 小时制）或日期，时间和时区偏移是可选的。它的标注是给搜索引擎用的，方便搜索引擎生成更智能的的搜索结果。

(属性datetime='2013-10-18T09：00Z'，pubdate 告诉搜索引擎这是该文档或是文章的创建时间。)

T是分隔符Z表示UTC格式；

detais:点击显示具体内容

< details>< summary>总结< /summary>< p>kkk< /p>< /details>

datalist: < input id='myCar' list='car'/>< datalist id='car'>

< option value='12'>< /option>< /datalist>

用于输入时，提示预先存储的值。

pre: 定义预格式化的文本（保留文本中的空格和换行符）；通常用来包含代码。

---
video 和 audio

```
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
    您的浏览器不支持 video 标签。
</video>
```

---

## 属性

< html manifest= 'XX X.X X X'>缓存网页

---


脚本的加载顺序：先下载，再执行，再下载下一个，再执行；

< script defer>: 开启一个线程去下载js文件， DOM加载完毕后，才执行；

< script async>：开启一个线程去下载js文件，下载完成后立刻执行，而不是会等到DOM加载完成之后再执行；

---


< link rel='icon'  type='images/png'sizes='16\*16' href='images/delete.png'/>

图像通常可以使用任何被浏览器支持的图像格式

size:还可以为32\*32的；

type:gif,png,ico(image/vnd.microsoft.icon);

rel:shortcut icon

< link rel='shortcut icon' href='http://www.baidu.com/favicon.ico' mce\_href='http://www.baidu.com/favicon.ico' type='image/x-icon'>

---
< link rel='dns-prefetch' href='//g.tbcdn.cn'>

在加载网页时对网页中的域名进行解析缓存，这样在你单击当前网页中的连接时就无需进行DNS的解析

---
< base href = 'http ://www.w3school.com.cn/i/' />

< base target='_blank' />

会在所有的URL（img link a...）前面加上base的href内容，并且跳转方式会用base的target值


---

- 列表

``` html
<!-- 描述说明性质的列表 -->
<dl> <dt>Name 类似标题</dt> <dd>Warren 这里会缩进</dd> <dl/>

<!-- 属性 type = 1，a，A，i，I 显示的序号类型-->
<!-- 属性 start = 2 表示从2开始 -->
<!-- 属性 reversed = true 表示是否反序显示 -->
<!-- li 中的 value 属性 重新定义序号的值 -->
<ol reversed="true" start='5' type='I'><li value="2"></li></ol>

```

---
`< input type='file' multiple(多选文件)/>` 元素的files属性则是一个FileList对象，
该对象是一个类数组对象，files[0] (表示第一个文件),files[1].........等，一个file对象就是一个Blob。有name，type，size（files[0].name）是火狐的标准+谷歌也可以。
当没有加multiple时 只有一个文件也是用files[0]来获取

Filereader对象，图片预览等

返回的值在 r.target.result中

accept: MIME类型，多个之间用逗号隔开

---
全局属性：

data-*：自定义属性;

hidden='hidden'隐藏元素;

spellcheck='true/false'检查有无拼写错误；

tableindex='1'设置按tab键的时候跳转顺序；

contentEditable=true用contentEditable来让元素的内容可以编辑，还提供了一个javascript方法，window.document.designMode='on/off'让所有的内容是否可以修改。react 开发环境会包warring

## meta
**全屏**
< meta name="apple-mobile-web-app-capable" content="yes" > 

如果content设置为yes，Web应用会以全屏模式运行，反之，则不会。你可以通过只读属性window.navigator.standalone来确定网页是否以全屏模式显示。

兼容性： iOS 2.1 +

< meta name='apple-mobile-web-app-status-bar-style' content='blank'>

除非你先使用apple-mobile-web-app-capable指定全屏模式，否则这个meta标签不会起任何作用。

如果content设置为default，则状态栏正常显示。如果设置为blank，则状态栏会有一个黑色的背景。如果设置为blank-translucent，则状态栏显示为黑色半透明。如果设置为default或blank，则页面显示在状态栏的下方，即状态栏占据上方部分，页面占据下方部分，二者没有遮挡对方或被遮挡。如果设置为blank-translucent，则页面会充满屏幕，其中页面顶部会被状态栏遮盖住（会覆盖页面20px高度，而iphone4和itouch4的Retina屏幕为40px）。默认值default。

兼容性:iOS 2.1 +

---

< meta http-equiv='Pragma'content='no-cache'>

禁止浏览器从本地计算机的缓存中访问该页面

---
< meta charset="UTF-8"> 大小写都可以

---
< meta http-equiv="refresh" content="3;url="http://ww.baidu.com">

---
< meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no, minimum-scale=1, maximum-scale=1" >

---

< meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />  
IE=edge告诉IE使用最新的引擎渲染网页，chrome=1则可以激活Chrome Frame ；

所以使用X-UA-Compatible标签强制IE8采用低版本方式渲染。 有些因素会自动触发兼容性文档视图，这个时候设置X-UA-Compatible就可以防止这个自动触发的行为。

---

## embed

AllowScriptAccess:naver/aways    参数可以防止从一个域中承载的 SWF文件访问来自另一个域的 HTML页面中的脚本。

allowNetworking:

all: SWF 文件中允许使用所有网络API;

internal: SWF 文件可能不调用浏览器导航或浏览器交互API，但是它会调用任何其它网络API.

none: SWF 文件可能不调用浏览器导航或浏览器交互API，并且它无法使用任何SWF 到 SWF 通信 API

---

## 与 dom 操作相关

[MDN DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

- 元素的插入

```
parentElement.insertBefore(Element, 在父元素中的某个子元素); // 在元素插入到指定元素前面

Element.appendChild(Element); // 在元素内部最后插入元素

ParentNode.prepend(Node,DOMString,...); // 在元素内部第一个元素前插入节点 IE不支持所以建议用 insertBefore 替代
if(parentNode.prepend) {
    parentNode.prepend(Element);
} else {
    var firstNode = parentNode.childNodes[1];
    parentNode.insertBefore(Element, firstNode);
}
```

---

- `node.parentElement`  `node.parentElement` (an Element node, a Document node, or a DocumentFragment node.) 兼容性都好

---

- 元素的动画 `Element.animate` 参考 [骰子](https://codepen.io/Hewitt/pen/ymJoRr)

---

- 移除元素 `Node.removeChild(childNode)` 兼容性好

---

- `document.querySelector('#id').cloneNode(true)`  true表示子节点也clone，返回新 Node

- 获取原始图片的真实宽高，非css样式修改后的宽高
```js
// 注意是要在 onload 加载后才能调用
var width = htmlImageElement.naturalWidth  
var height = htmlImageElement.naturalHeight
// htmlImageElement 可以是 document.querySelector 等类似方法获取的 img 元素 也可以是 new Image() 创建的元素
```

### 元素宽高,与滑动条

- 获取 img 标签宽高：`htmlImageElement.width | height` htmlImageElement 提供了特别的属性和方法

- window.innerWidth | innerHeight 只能通过window调用获取当前显示区域宽高，如果是在iframe中则获取当前所在iframe的显示区域宽高 (都兼容)

- htmlElement.clientWidth | clientHeight 包括内边距（兼容性好）

- htmlElement.offsetWidth | offsetHeight 包括内边距和边框的宽度

- 返回元素相对于父元素的位置，element.offsetLeft 和 offsetTop，用了position更精确。

- window.screen.width 获取电脑屏幕宽度  (兼容ie10，有问题)

- htmlElement.scrollHeight  所有内容包括未被滚动到的 没有滚动条时 scrollHeight 和 clientHeight 相同

- element.scrollIntoView({ behavior: "smooth"});//js原生，让元素滚动到可见区域

- element.scrollLeft/scrollTop 来设置或获取滑动条的位置; 只能作用于元素上，window上无效

- pageXOffset(scrollX)/pageYOffset(scrollY) 只能作用于 window 上, 推荐 pageXOffset，兼容ie9；只读属性

- 谷歌的页面滚动是用的body，火狐是用的html；

- 谷歌:当 scrollTop 的值小于1时会直接返回0，所以用y=1除以a的x次方指数函数来趋近0来由快到慢的滑动。

- window.scroll() 和 window.scrollTo() 用法一致  参数为两种形式（1）配置对象 （2）(x,y) 值

- `Element.getBoundingClientRect()`  元素的大小及其相对于视口的位置(当页面滑动后，值会更改) 兼容良好
```
x: 推荐用left
y: 推荐用top
top: 距视口顶部距离
left: 距视口左边距离
width: 元素宽度
height: 元素高度
right: 元素右边距离视口左边的距离
bottom: 元素底部距离视口顶部的距离
```


### iframe

- window.parent 当使用了多个 .parent  超出了实际层级，会返回最后一个层级，不会报错

- window.parent.document.getElementById();
在chrome中window.parent.document 要在服务器上才能使用。

- 获取当前的内嵌页面url,就直接在该页面使用window.location.href即可。
- 父页面查找子页面的元素：
```
// 跨域会有问题
// 注意要放入 onload 中  等待子页面加载完成才能获取
document.getElementById('iframeId').contentWindow.[document||document.body||document.getElementById('子页面ID')]；
```

- 子页面查找父页面元素。
- 不同域可以在两个页面都设置document.domain='主域名'。
- 父子窗口传递消息
```js
// 父窗口
document.getElementById('iframeId').contentWindow.postmessage('')
// 子窗口iframe中使用
window.onmessage=function(e){e.data}
```


## Html5 消息通知

Notification（首字母大写） 或 刷新title

谷歌测试时,要启用本地服务的方式

Notification.requestPermission(function(permission){}),方法要用onclick等用户操作方法来调用。

在手机上只有火狐的实现了

## 预览pdf

```html
<!-- 方式一 -->
<embed src="./pdf.pdf" type="application/pdf" width="100%" height="100%" internalinstanceid="81" />
            
<!-- 方式二 -->
<iframe src="./pdf.pdf" width="100%" height="100%">
    当前浏览器不支持在线预览PDF，请<a href="./pdf.pdf">下载 PDF</a>
</iframe>


<!-- 方式三 -->
<object data="./pdf.pdf" type="application/pdf" width="100%" height="100%">
    当前浏览器不支持在线预览PDF，请<a href="./pdf.pdf">下载 PDF</a>
</object>
```






