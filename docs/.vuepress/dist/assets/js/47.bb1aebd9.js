(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{226:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#html4"}},[t._v("HTML4")]),e("ul",[e("li",[e("a",{attrs:{href:"#浏览器解析文档过程"}},[t._v("浏览器解析文档过程")])])])]),e("li",[e("a",{attrs:{href:"#标签"}},[t._v("标签")])]),e("li",[e("a",{attrs:{href:"#属性"}},[t._v("属性")])]),e("li",[e("a",{attrs:{href:"#meta"}},[t._v("meta")])]),e("li",[e("a",{attrs:{href:"#embed"}},[t._v("embed")])]),e("li",[e("a",{attrs:{href:"#与-dom-操作相关"}},[t._v("与 dom 操作相关")]),e("ul",[e("li",[e("a",{attrs:{href:"#元素宽高-与滑动条"}},[t._v("元素宽高,与滑动条")])]),e("li",[e("a",{attrs:{href:"#iframe"}},[t._v("iframe")])])])]),e("li",[e("a",{attrs:{href:"#html5-消息通知"}},[t._v("Html5 消息通知")])]),e("li",[e("a",{attrs:{href:"#预览pdf"}},[t._v("预览pdf")])])])]),t._v(" "),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#html4"}},[t._v("HTML4")]),e("ul",[e("li",[e("a",{attrs:{href:"#浏览器解析文档过程"}},[t._v("浏览器解析文档过程")])])])]),e("li",[e("a",{attrs:{href:"#标签"}},[t._v("标签")])]),e("li",[e("a",{attrs:{href:"#属性"}},[t._v("属性")])]),e("li",[e("a",{attrs:{href:"#meta"}},[t._v("meta")])]),e("li",[e("a",{attrs:{href:"#embed"}},[t._v("embed")])]),e("li",[e("a",{attrs:{href:"#与-dom-操作相关"}},[t._v("与 dom 操作相关")]),e("ul",[e("li",[e("a",{attrs:{href:"#元素宽高-与滑动条"}},[t._v("元素宽高,与滑动条")])]),e("li",[e("a",{attrs:{href:"#iframe"}},[t._v("iframe")])])])]),e("li",[e("a",{attrs:{href:"#html5-消息通知"}},[t._v("Html5 消息通知")])]),e("li",[e("a",{attrs:{href:"#预览pdf"}},[t._v("预览pdf")])])])]),e("p"),t._v(" "),e("ul",[e("li",[t._v("检测媒体 @media 后可用的查询 "),e("code",[t._v("window.matchMedia('print').addListener((res) => {});")])])]),t._v(" "),e("h2",{attrs:{id:"html4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html4"}},[t._v("#")]),t._v(" HTML4")]),t._v(" "),e("h3",{attrs:{id:"浏览器解析文档过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器解析文档过程"}},[t._v("#")]),t._v(" 浏览器解析文档过程")]),t._v(" "),e("ol",[e("li",[t._v("解析html文档，构建DOM树（遇到img标签就加载资源）")]),t._v(" "),e("li",[t._v("加载样式，解析样式，构建样式规则树")]),t._v(" "),e("li",[t._v("加载js，执行js代码")]),t._v(" "),e("li",[t._v("把DOM树与样式树匹配构建渲染树（加载背景tupian）")]),t._v(" "),e("li",[t._v("计算元素位置进行布局")]),t._v(" "),e("li",[t._v("渲染绘制")])]),t._v(" "),e("p",[t._v("DOM树里包含了所有HTML标签，包括display:none隐藏，还有用JS动态添加的元素等")]),t._v(" "),e("p",[t._v("render tree不包含隐藏的节点 (比如display:none的节点，还有head节点)，因为这些节点不会用于呈现，而且不会影响呈现的，所以就不会包含到 render tree中")]),t._v(" "),e("p",[t._v("重绘：render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color")]),t._v(" "),e("p",[t._v("回流：render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建")]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[t._v("input 标签相关操作：")])]),t._v(" "),e("p",[t._v("disabled='disabled' 可用于option标签和input标签")]),t._v(" "),e("p",[t._v("readonly='readonly'用于input标签，不能修改的。仍然可以使用 tab 键切换到该字段，还可以选中或拷贝其文本。")]),t._v(" "),e("p",[t._v("input 标签设置属性 autofocus 自动获取焦点")]),t._v(" "),e("p",[t._v("inputElement.focus()")]),t._v(" "),e("p",[t._v("checked 在标签上只要出现就会被勾选，如果是用js代码设置 checked 的值为 true 或 false 即正常")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("p 标签中不能放块级元素,内联元素中不能放块级元素;")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("是用 img 来加载图片还是用背景图片：")]),t._v(" "),e("ol",[e("li",[t._v("页面会先加载img图片，若图片大会影响后面的内容的加载")]),t._v(" "),e("li",[t._v("如果用背景来加载图片的话，就不会影响到页面的显示效果")]),t._v(" "),e("li",[t._v("图片比较重要且资源小就用img")]),t._v(" "),e("li",[t._v("alt属性有利于seo（搜索引擎优化）；更好的有利于seo用a标签加css的背景；")])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("&nbsp占位符")]),t._v(" "),e("h2",{attrs:{id:"标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[t._v("#")]),t._v(" 标签")]),t._v(" "),e("ul",[e("li",[t._v("a")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("download: 添加该属性表示下载 href 内容而非导航，其值是下载文件的名称 \nhref: 可以是 http开头的地址也可以是  blob: URL(URL.createObjectURL创建) 或 data: URL(base64 的 URL) , tel: URLs, mailto URLs  等\n")])])]),e("ul",[e("li",[t._v("table")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('属性:\ncolspan= 2  占多少列；\nrowspan=2  占多少行；\nalign=left；   \ncellspacing="0"：两个单元格之间空间的大小；\ncellpadding="0"：单元的内容和边框之间的空间； \nborder="1px"\n\n样式：\nborder-collapse: collapse; 去掉 table 中边框间间隔，合并边框\n')])])]),e("p",[e("code",[t._v("<colgroup>")]),t._v(" 标签用于对表格中的列进行组合，以便对其进行格式化，样式设计。table内，caption元素之后,thead之前（https://www.runoob.com/try/try.php?filename=tryhtml_colgroup_test）")]),t._v(" "),e("p",[t._v("可以利用该标签，设置可拖动表格宽度")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("< abbr title='people's republic of china'>PRC< /abbr>")]),t._v(" "),e("p",[t._v("为浏览器拼写和检查和搜索引擎提供有用的信息。新增的结构标签：（由DIV派生出来）")]),t._v(" "),e("p",[t._v("section:页面中的一个内容区块（不用来布局，只用来划分网页）")]),t._v(" "),e("p",[t._v("article：定义页面独立的区域")]),t._v(" "),e("p",[t._v("aside：侧边栏内容")]),t._v(" "),e("p",[t._v("header：")]),t._v(" "),e("p",[t._v("hgroup：对网页或是区块（section）的标题进行整合")]),t._v(" "),e("p",[t._v("footer：定义section或是文档的页脚")]),t._v(" "),e("p",[t._v("nav：导航")]),t._v(" "),e("p",[t._v("figure：独立的流内容，图片等")]),t._v(" "),e("p",[t._v("mark:标记")]),t._v(" "),e("p",[t._v("progress：进度条（支持性不好）")]),t._v(" "),e("p",[t._v("time：定义公历的时间（24 小时制）或日期，时间和时区偏移是可选的。它的标注是给搜索引擎用的，方便搜索引擎生成更智能的的搜索结果。")]),t._v(" "),e("p",[t._v("(属性datetime='2013-10-18T09：00Z'，pubdate 告诉搜索引擎这是该文档或是文章的创建时间。)")]),t._v(" "),e("p",[t._v("T是分隔符Z表示UTC格式；")]),t._v(" "),e("p",[t._v("detais:点击显示具体内容")]),t._v(" "),e("p",[t._v("< details>< summary>总结< /summary>< p>kkk< /p>< /details>")]),t._v(" "),e("p",[t._v("datalist: < input id='myCar' list='car'/>< datalist id='car'>")]),t._v(" "),e("p",[t._v("< option value='12'>< /option>< /datalist>")]),t._v(" "),e("p",[t._v("用于输入时，提示预先存储的值。")]),t._v(" "),e("p",[t._v("pre: 定义预格式化的文本（保留文本中的空格和换行符）；通常用来包含代码。")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("video 和 audio")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<video width="320" height="240" controls>\n    <source src="movie.mp4" type="video/mp4">\n    <source src="movie.ogg" type="video/ogg">\n    您的浏览器不支持 video 标签。\n</video>\n')])])]),e("hr"),t._v(" "),e("h2",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),e("p",[t._v("< html manifest= 'XX X.X X X'>缓存网页")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("脚本的加载顺序：先下载，再执行，再下载下一个，再执行；")]),t._v(" "),e("p",[t._v("< script defer>: 开启一个线程去下载js文件， DOM加载完毕后，才执行；")]),t._v(" "),e("p",[t._v("< script async>：开启一个线程去下载js文件，下载完成后立刻执行，而不是会等到DOM加载完成之后再执行；")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("< link rel='icon'  type='images/png'sizes='16*16' href='images/delete.png'/>")]),t._v(" "),e("p",[t._v("图像通常可以使用任何被浏览器支持的图像格式")]),t._v(" "),e("p",[t._v("size:还可以为32*32的；")]),t._v(" "),e("p",[t._v("type:gif,png,ico(image/vnd.microsoft.icon);")]),t._v(" "),e("p",[t._v("rel:shortcut icon")]),t._v(" "),e("p",[t._v("< link rel='shortcut icon' href='http://www.baidu.com/favicon.ico' mce_href='http://www.baidu.com/favicon.ico' type='image/x-icon'>")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("< link rel='dns-prefetch' href='//g.tbcdn.cn'>")]),t._v(" "),e("p",[t._v("在加载网页时对网页中的域名进行解析缓存，这样在你单击当前网页中的连接时就无需进行DNS的解析")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("< base href = 'http 😕/www.w3school.com.cn/i/' />")]),t._v(" "),e("p",[t._v("< base target='_blank' />")]),t._v(" "),e("p",[t._v("会在所有的URL（img link a...）前面加上base的href内容，并且跳转方式会用base的target值")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("< ol reversed(倒序) start='5' (从5开始) type='1，a，A，i，I'>;")]),t._v(" "),e("hr"),t._v(" "),e("p",[e("code",[t._v("< input type='file' multiple(多选文件)/>")]),t._v(" 元素的files属性则是一个FileList对象，\n该对象是一个类数组对象，files[0] (表示第一个文件),files[1].........等，一个file对象就是一个Blob。有name，type，size（files[0].name）是火狐的标准+谷歌也可以。\n当没有加multiple时 只有一个文件也是用files[0]来获取")]),t._v(" "),e("p",[t._v("Filereader对象，图片预览等")]),t._v(" "),e("p",[t._v("返回的值在 r.target.result中")]),t._v(" "),e("p",[t._v("accept: MIME类型，多个之间用逗号隔开")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("全局属性：")]),t._v(" "),e("p",[t._v("data-*：自定义属性;")]),t._v(" "),e("p",[t._v("hidden='hidden'隐藏元素;")]),t._v(" "),e("p",[t._v("spellcheck='true/false'检查有无拼写错误；")]),t._v(" "),e("p",[t._v("tableindex='1'设置按tab键的时候跳转顺序；")]),t._v(" "),e("p",[t._v("contentEditable=true用contentEditable来让元素的内容可以编辑，还提供了一个javascript方法，window.document.designMode='on/off'让所有的内容是否可以修改。react 开发环境会包warring")]),t._v(" "),e("h2",{attrs:{id:"meta"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[t._v("#")]),t._v(" meta")]),t._v(" "),e("p",[e("strong",[t._v("全屏")]),t._v('\n< meta name="apple-mobile-web-app-capable" content="yes" >')]),t._v(" "),e("p",[t._v("如果content设置为yes，Web应用会以全屏模式运行，反之，则不会。你可以通过只读属性window.navigator.standalone来确定网页是否以全屏模式显示。")]),t._v(" "),e("p",[t._v("兼容性： iOS 2.1 +")]),t._v(" "),e("p",[t._v("< meta name='apple-mobile-web-app-status-bar-style' content='blank'>")]),t._v(" "),e("p",[t._v("除非你先使用apple-mobile-web-app-capable指定全屏模式，否则这个meta标签不会起任何作用。")]),t._v(" "),e("p",[t._v("如果content设置为default，则状态栏正常显示。如果设置为blank，则状态栏会有一个黑色的背景。如果设置为blank-translucent，则状态栏显示为黑色半透明。如果设置为default或blank，则页面显示在状态栏的下方，即状态栏占据上方部分，页面占据下方部分，二者没有遮挡对方或被遮挡。如果设置为blank-translucent，则页面会充满屏幕，其中页面顶部会被状态栏遮盖住（会覆盖页面20px高度，而iphone4和itouch4的Retina屏幕为40px）。默认值default。")]),t._v(" "),e("p",[t._v("兼容性:iOS 2.1 +")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("< meta http-equiv='Pragma'content='no-cache'>")]),t._v(" "),e("p",[t._v("禁止浏览器从本地计算机的缓存中访问该页面")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v('< meta charset="UTF-8"> 大小写都可以')]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v('< meta http-equiv="refresh" content="3;url="http://ww.baidu.com">')]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v('< meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no, minimum-scale=1, maximum-scale=1" >')]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("< meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />"),e("br"),t._v("\nIE=edge告诉IE使用最新的引擎渲染网页，chrome=1则可以激活Chrome Frame ；")]),t._v(" "),e("p",[t._v("所以使用X-UA-Compatible标签强制IE8采用低版本方式渲染。 有些因素会自动触发兼容性文档视图，这个时候设置X-UA-Compatible就可以防止这个自动触发的行为。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"embed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#embed"}},[t._v("#")]),t._v(" embed")]),t._v(" "),e("p",[t._v("AllowScriptAccess:naver/aways    参数可以防止从一个域中承载的 SWF文件访问来自另一个域的 HTML页面中的脚本。")]),t._v(" "),e("p",[t._v("allowNetworking:")]),t._v(" "),e("p",[t._v("all: SWF 文件中允许使用所有网络API;")]),t._v(" "),e("p",[t._v("internal: SWF 文件可能不调用浏览器导航或浏览器交互API，但是它会调用任何其它网络API.")]),t._v(" "),e("p",[t._v("none: SWF 文件可能不调用浏览器导航或浏览器交互API，并且它无法使用任何SWF 到 SWF 通信 API")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"与-dom-操作相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#与-dom-操作相关"}},[t._v("#")]),t._v(" 与 dom 操作相关")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN DOM"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("元素的插入")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("parentElement.insertBefore(Element, 在父元素中的某个子元素); // 在元素插入到指定元素前面\n\nElement.appendChild(Element); // 在元素内部最后插入元素\n\nParentNode.prepend(Node,DOMString,...); // 在元素内部第一个元素前插入节点 IE不支持所以建议用 insertBefore 替代\nif(parentNode.prepend) {\n    parentNode.prepend(Element);\n} else {\n    var firstNode = parentNode.childNodes[1];\n    parentNode.insertBefore(Element, firstNode);\n}\n")])])]),e("hr"),t._v(" "),e("ul",[e("li",[e("code",[t._v("node.parentElement")]),t._v(" "),e("code",[t._v("node.parentElement")]),t._v(" (an Element node, a Document node, or a DocumentFragment node.) 兼容性都好")])]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[t._v("元素的动画 "),e("code",[t._v("Element.animate")]),t._v(" 参考 "),e("a",{attrs:{href:"https://codepen.io/Hewitt/pen/ymJoRr",target:"_blank",rel:"noopener noreferrer"}},[t._v("骰子"),e("OutboundLink")],1)])]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[t._v("移除元素 "),e("code",[t._v("Node.removeChild(childNode)")]),t._v(" 兼容性好")])]),t._v(" "),e("hr"),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("document.querySelector('#id').cloneNode(true)")]),t._v("  true表示子节点也clone，返回新 Node")])]),t._v(" "),e("li",[e("p",[t._v("获取原始图片的真实宽高，非css样式修改后的宽高")])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意是要在 onload 加载后才能调用")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" width "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" htmlImageElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("naturalWidth  \n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" height "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" htmlImageElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("naturalHeight\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// htmlImageElement 可以是 document.querySelector 等类似方法获取的 img 元素 也可以是 new Image() 创建的元素")]),t._v("\n")])])]),e("h3",{attrs:{id:"元素宽高-与滑动条"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元素宽高-与滑动条"}},[t._v("#")]),t._v(" 元素宽高,与滑动条")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("获取 img 标签宽高："),e("code",[t._v("htmlImageElement.width | height")]),t._v(" htmlImageElement 提供了特别的属性和方法")])]),t._v(" "),e("li",[e("p",[t._v("window.innerWidth | innerHeight 只能通过window调用获取当前显示区域宽高，如果是在iframe中则获取当前所在iframe的显示区域宽高 (都兼容)")])]),t._v(" "),e("li",[e("p",[t._v("htmlElement.clientWidth | clientHeight 包括内边距（兼容性好）")])]),t._v(" "),e("li",[e("p",[t._v("htmlElement.offsetWidth | offsetHeight 包括内边距和边框的宽度")])]),t._v(" "),e("li",[e("p",[t._v("返回元素相对于父元素的位置，element.offsetLeft 和 offsetTop，用了position更精确。")])]),t._v(" "),e("li",[e("p",[t._v("window.screen.width 获取电脑屏幕宽度  (兼容ie10，有问题)")])]),t._v(" "),e("li",[e("p",[t._v("htmlElement.scrollHeight  所有内容包括未被滚动到的 没有滚动条时 scrollHeight 和 clientHeight 相同")])]),t._v(" "),e("li",[e("p",[t._v('element.scrollIntoView({ behavior: "smooth"});//js原生，让元素滚动到可见区域')])]),t._v(" "),e("li",[e("p",[t._v("element.scrollLeft/scrollTop 来设置或获取滑动条的位置; 只能作用于元素上，window上无效")])]),t._v(" "),e("li",[e("p",[t._v("pageXOffset(scrollX)/pageYOffset(scrollY) 只能作用于 window 上, 推荐 pageXOffset，兼容ie9；只读属性")])]),t._v(" "),e("li",[e("p",[t._v("谷歌的页面滚动是用的body，火狐是用的html；")])]),t._v(" "),e("li",[e("p",[t._v("谷歌:当 scrollTop 的值小于1时会直接返回0，所以用y=1除以a的x次方指数函数来趋近0来由快到慢的滑动。")])]),t._v(" "),e("li",[e("p",[t._v("window.scroll() 和 window.scrollTo() 用法一致  参数为两种形式（1）配置对象 （2）(x,y) 值")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("Element.getBoundingClientRect()")]),t._v("  元素的大小及其相对于视口的位置(当页面滑动后，值会更改) 兼容良好")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("x: 推荐用left\ny: 推荐用top\ntop: 距视口顶部距离\nleft: 距视口左边距离\nwidth: 元素宽度\nheight: 元素高度\nright: 元素右边距离视口左边的距离\nbottom: 元素底部距离视口顶部的距离\n")])])]),e("h3",{attrs:{id:"iframe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iframe"}},[t._v("#")]),t._v(" iframe")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("window.parent 当使用了多个 .parent  超出了实际层级，会返回最后一个层级，不会报错")])]),t._v(" "),e("li",[e("p",[t._v("window.parent.document.getElementById();\n在chrome中window.parent.document 要在服务器上才能使用。")])]),t._v(" "),e("li",[e("p",[t._v("获取当前的内嵌页面url,就直接在该页面使用window.location.href即可。")])]),t._v(" "),e("li",[e("p",[t._v("父页面查找子页面的元素：")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 跨域会有问题\n// 注意要放入 onload 中  等待子页面加载完成才能获取\ndocument.getElementById('iframeId').contentWindow.[document||document.body||document.getElementById('子页面ID')]；\n")])])]),e("ul",[e("li",[t._v("子页面查找父页面元素。")]),t._v(" "),e("li",[t._v("不同域可以在两个页面都设置document.domain='主域名'。")]),t._v(" "),e("li",[t._v("父子窗口传递消息")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父窗口")]),t._v("\ndocument"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iframeId'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("postmessage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子窗口iframe中使用")]),t._v("\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"html5-消息通知"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html5-消息通知"}},[t._v("#")]),t._v(" Html5 消息通知")]),t._v(" "),e("p",[t._v("Notification（首字母大写） 或 刷新title")]),t._v(" "),e("p",[t._v("谷歌测试时,要启用本地服务的方式")]),t._v(" "),e("p",[t._v("Notification.requestPermission(function(permission){}),方法要用onclick等用户操作方法来调用。")]),t._v(" "),e("p",[t._v("在手机上只有火狐的实现了")]),t._v(" "),e("h2",{attrs:{id:"预览pdf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预览pdf"}},[t._v("#")]),t._v(" 预览pdf")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 方式一 --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("embed")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./pdf.pdf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("application/pdf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("internalinstanceid")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("81"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 方式二 --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./pdf.pdf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    当前浏览器不支持在线预览PDF，请"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./pdf.pdf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("下载 PDF"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("iframe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 方式三 --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("object")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./pdf.pdf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("application/pdf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    当前浏览器不支持在线预览PDF，请"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./pdf.pdf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("下载 PDF"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("object")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);