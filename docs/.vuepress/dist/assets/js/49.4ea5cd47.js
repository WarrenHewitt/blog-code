(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{247:function(a,t,s){"use strict";s.r(t);var r=s(0),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#微信小程序"}},[a._v("微信小程序")]),s("ul",[s("li",[s("a",{attrs:{href:"#遇到的问题"}},[a._v("遇到的问题")])]),s("li",[s("a",{attrs:{href:"#app-json-全局配置"}},[a._v("app.json 全局配置")])]),s("li",[s("a",{attrs:{href:"#npm-相关"}},[a._v("npm 相关")])]),s("li",[s("a",{attrs:{href:"#收录提示"}},[a._v("收录提示")])]),s("li",[s("a",{attrs:{href:"#生命周期函数"}},[a._v("生命周期函数")])]),s("li",[s("a",{attrs:{href:"#组件内引用全局样式"}},[a._v("组件内引用全局样式")])]),s("li",[s("a",{attrs:{href:"#computed"}},[a._v("computed")])]),s("li",[s("a",{attrs:{href:"#behaviors"}},[a._v("behaviors")])]),s("li",[s("a",{attrs:{href:"#canvas-相关"}},[a._v("canvas 相关")])])])])])]),a._v(" "),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#微信小程序"}},[a._v("微信小程序")]),s("ul",[s("li",[s("a",{attrs:{href:"#遇到的问题"}},[a._v("遇到的问题")])]),s("li",[s("a",{attrs:{href:"#app-json-全局配置"}},[a._v("app.json 全局配置")])]),s("li",[s("a",{attrs:{href:"#npm-相关"}},[a._v("npm 相关")])]),s("li",[s("a",{attrs:{href:"#收录提示"}},[a._v("收录提示")])]),s("li",[s("a",{attrs:{href:"#生命周期函数"}},[a._v("生命周期函数")])]),s("li",[s("a",{attrs:{href:"#组件内引用全局样式"}},[a._v("组件内引用全局样式")])]),s("li",[s("a",{attrs:{href:"#computed"}},[a._v("computed")])]),s("li",[s("a",{attrs:{href:"#behaviors"}},[a._v("behaviors")])]),s("li",[s("a",{attrs:{href:"#canvas-相关"}},[a._v("canvas 相关")])])])])])]),s("p"),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"微信小程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序"}},[a._v("#")]),a._v(" 微信小程序")]),a._v(" "),s("ul",[s("li",[a._v("project.config.json 项目配置\n详见 工具 -> 项目配置文件")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{\n\t"miniprogramRoot": "miniprogram/", 小程序源代码文件夹\n\t"cloudfunctionRoot": "cloudfunctions/", 云开发的目录\n}\n')])])]),s("hr"),a._v(" "),s("h3",{attrs:{id:"遇到的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[a._v("#")]),a._v(" 遇到的问题")]),a._v(" "),s("ul",[s("li",[a._v('自定义弹窗防止底层内容滑动添加事件 catchtouchmove="catchMove" catchMove 是空函数即可')])]),a._v(" "),s("h3",{attrs:{id:"app-json-全局配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-json-全局配置"}},[a._v("#")]),a._v(" app.json 全局配置")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("创建页面：可以直接在app.json 中先配置好页面路径及名称，保存时，编辑器自动创建文件")])]),a._v(" "),s("li",[s("p",[a._v("pages 数组的第一个值为小程序的首页")])])]),a._v(" "),s("hr"),a._v(" "),s("ul",[s("li",[a._v("page.json 页面配置")])]),a._v(" "),s("h3",{attrs:{id:"npm-相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-相关"}},[a._v("#")]),a._v(" npm 相关")]),a._v(" "),s("ul",[s("li",[a._v("注意是在 miniprogramRoot 规定的文件夹下安装")]),a._v(" "),s("li",[a._v("安装了包之后，点击开发者工具中的菜单栏：工具 --\x3e 构建 npm")]),a._v(" "),s("li",[a._v("更多看： "),s("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm",target:"_blank",rel:"noopener noreferrer"}},[a._v("npm 支持"),s("OutboundLink")],1)])]),a._v(" "),s("h3",{attrs:{id:"收录提示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#收录提示"}},[a._v("#")]),a._v(" 收录提示")]),a._v(" "),s("ul",[s("li",[a._v("根据 sitemap 的规则[0]，当前页面 [pages/menu/menu] 将被索引\n"),s("ul",[s("li",[a._v("这个并不是报错，他只是一个提示，提示开发者哪些页面被微信收录了。代表这个页面可以在微信的搜索中被搜到")]),a._v(" "),s("li",[a._v("可以在项目配置中设置 "),s("code",[a._v("checkSiteMap：false")]),a._v(" 将其关闭\nsitemap.json")])])])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('{\n  "rules":[{\n    "action": "allow",\n    "page": "path/xx/xx"\n  }, {\n    "action": "disallow",\n    "page": "*"\n  }]\n}\n')])])]),s("h3",{attrs:{id:"生命周期函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期函数"}},[a._v("#")]),a._v(" 生命周期函数")]),a._v(" "),s("p",[a._v("执行顺序： onLoad -> onShow -> onReady")]),a._v(" "),s("h3",{attrs:{id:"组件内引用全局样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件内引用全局样式"}},[a._v("#")]),a._v(" 组件内引用全局样式")]),a._v(" "),s("p",[a._v("组件js文件，设置以下项")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Component({\n  options: {\n    styleIsolation: 'apply-shared'\n  }\n})\n")])])]),s("h3",{attrs:{id:"computed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[a._v("#")]),a._v(" computed")]),a._v(" "),s("ul",[s("li",[a._v("先安装 miniprogram-computed 安装后 computed 和 watch 都可用")])]),a._v(" "),s("h3",{attrs:{id:"behaviors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#behaviors"}},[a._v("#")]),a._v(" behaviors")]),a._v(" "),s("p",[a._v("用于组件间代码共享的特性，类似于一些编程语言中的“mixins”")]),a._v(" "),s("h3",{attrs:{id:"canvas-相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canvas-相关"}},[a._v("#")]),a._v(" canvas 相关")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("ctx.draw(true); 参数为true则保留当前画布上的内容，进行绘制")])]),a._v(" "),s("li",[s("p",[a._v("touches[0].x  在canvas中返回的是相对于canvas的x值")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);