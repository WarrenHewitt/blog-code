(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{251:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("[toc]")]),t._v(" "),a("h1",{attrs:{id:"scrapy-自学入门demo分享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scrapy-自学入门demo分享"}},[t._v("#")]),t._v(" scrapy 自学入门demo分享")]),t._v(" "),a("blockquote",[a("p",[t._v("本文基于python 3.7.0，win10平台； 2018-08")])]),t._v(" "),a("blockquote",[a("p",[t._v("完整项目代码："),a("a",{attrs:{href:"https://github.com/WarrenHewitt/python-scrapy",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/WarrenHewitt/python-scrapy"),a("OutboundLink")],1)])]),t._v(" "),a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("h2",{attrs:{id:"安装python"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装python"}},[t._v("#")]),t._v(" 安装python")]),t._v(" "),a("ol",[a("li",[t._v("官网下载 https://www.python.org/")]),t._v(" "),a("li",[t._v("注意环境变量是否配置成功")])]),t._v(" "),a("h2",{attrs:{id:"安装scrapy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装scrapy"}},[t._v("#")]),t._v(" 安装scrapy")]),t._v(" "),a("blockquote",[a("p",[t._v("为了安装顺利，请备好梯子")])]),t._v(" "),a("ul",[a("li",[t._v("pip install Scrapy")])]),t._v(" "),a("p",[a("strong",[t._v("安装过程中注意以下报错信息：")])]),t._v(" "),a("p",[a("strong",[t._v('Microsoft Visual C++ 14.0 is required. Get it with "Microsoft Visual C++ Build Tools"')])]),t._v(" "),a("p",[t._v("解决办法：")]),t._v(" "),a("ol",[a("li",[t._v("https://www.lfd.uci.edu/~gohlke/pythonlibs/#twisted 下载对应版本twisted的whl文件")]),t._v(" "),a("li",[t._v("cp：表示python版本")]),t._v(" "),a("li",[t._v("amd64：表示64位")]),t._v(" "),a("li",[t._v("下载后在文件目录下执行： pip install Twisted-18.7.0-cp37-cp37m-win_amd64.whl(文件名)")])]),t._v(" "),a("h1",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),a("ul",[a("li",[t._v("创建scrapy：scrapy startproject youName")]),t._v(" "),a("li",[t._v("创建spider："),a("code",[t._v("scrapy genspider <name> <domain>")]),t._v(" // 在项目跟目录执行")])]),t._v(" "),a("h2",{attrs:{id:"配置settings-py文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置settings-py文件"}},[t._v("#")]),t._v(" 配置settings.py文件")]),t._v(" "),a("ol",[a("li",[t._v("如果抓取的内容包含中文可配置：FEED_EXPORT_ENCODING = 'utf-8'")]),t._v(" "),a("li",[t._v("报错误信息403：把USER_AGENT加上（可在网站请求头信息中查看）")])]),t._v(" "),a("h2",{attrs:{id:"编写items-py文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写items-py文件"}},[t._v("#")]),t._v(" 编写items.py文件")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" scrapy\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NovelItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    content "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Field"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("这些即你需要保存的字段名")]),t._v(" "),a("h2",{attrs:{id:"编写spider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写spider"}},[t._v("#")]),t._v(" 编写spider")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" scrapy\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 引入自定义的items")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" myTest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" NovelItem\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# # 继承scrapy.Spider")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NovelSpider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Spider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 爬虫名")]),t._v("\n    name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'novel_spider'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许的域名")]),t._v("\n    allowed_domains "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.danmeila.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 入口url 扔到调度器里面去")]),t._v("\n    start_urls "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.danmeila.com/chapter/20180406/29649.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        movieList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//*[@id=\"container\"]/div[3]/div[2]/div[2]/div/div/ul/li'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        novelContent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NovelItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" movieList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.danmeila.com'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.//a/@href'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract_first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            \n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" scrapy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content_a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" novelContent "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dont_filter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 放到管道里否则 pipeline获取不到")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果你发现拿到的内容一直为空，注意是否被过滤了，即dont_filter没有设置")]),t._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("content_a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        novelContent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        novelContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xpath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//*[@id=\"J_article\"]/div[1]/h1/text()'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("extract_first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("yield")]),t._v(" novelContent\n")])])]),a("p",[t._v("注意以下几点：")]),t._v(" "),a("ul",[a("li",[t._v("采用xpath编写，在浏览器中可以直接查看元素，找到要爬取内容的标签，右键选copy xpath")]),t._v(" "),a("li",[t._v("extract_first()的使用；text() 获取文本；@属性名  获取属性值")]),t._v(" "),a("li",[t._v("在父节点下使用xpath路径前要加./")]),t._v(" "),a("li",[t._v("去除换行空格用 xpath('normalize-space('.//div/text()')')")])]),t._v(" "),a("h2",{attrs:{id:"执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行"}},[t._v("#")]),t._v(" 执行")]),t._v(" "),a("p",[t._v("导出为json： scrapy crawl your-spider-name -o test.json")]),t._v(" "),a("p",[t._v("如果出现报错信息：")]),t._v(" "),a("ul",[a("li",[t._v("async语法错误，把用到该名称作为参数的文件全部作修改 把这个参数名改为其它即可")]),t._v(" "),a("li",[t._v("报错 No module named 'win32api'： 到https://pypi.org/project/pypiwin32/#files（下载文件pypiwin32-223-py3-none-any.whl 执行 pip install pypiwin32-223-py3-none-any.whl ）")])]),t._v(" "),a("blockquote",[a("p",[t._v("欢迎交流 "),a("a",{attrs:{href:"https://github.com/WarrenHewitt/blog/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);