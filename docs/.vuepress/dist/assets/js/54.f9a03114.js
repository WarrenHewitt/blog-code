(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{260:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#react"}},[t._v("React")]),r("ul",[r("li",[r("a",{attrs:{href:"#组件"}},[t._v("组件")])]),r("li",[r("a",{attrs:{href:"#hook"}},[t._v("Hook")])])])]),r("li",[r("a",{attrs:{href:"#redux"}},[t._v("Redux")]),r("ul",[r("li",[r("a",{attrs:{href:"#redux杂项"}},[t._v("redux杂项")])]),r("li",[r("a",{attrs:{href:"#基本概念"}},[t._v("基本概念")])])])]),r("li",[r("a",{attrs:{href:"#react-router"}},[t._v("react-router")])]),r("li",[r("a",{attrs:{href:"#create-react-app"}},[t._v("create-react-app")])]),r("li",[r("a",{attrs:{href:"#学习使用ant-design-pro"}},[t._v("学习使用ant design pro")])])])]),t._v(" "),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#react"}},[t._v("React")]),r("ul",[r("li",[r("a",{attrs:{href:"#组件"}},[t._v("组件")])]),r("li",[r("a",{attrs:{href:"#hook"}},[t._v("Hook")])])])]),r("li",[r("a",{attrs:{href:"#redux"}},[t._v("Redux")]),r("ul",[r("li",[r("a",{attrs:{href:"#redux杂项"}},[t._v("redux杂项")])]),r("li",[r("a",{attrs:{href:"#基本概念"}},[t._v("基本概念")])])])]),r("li",[r("a",{attrs:{href:"#react-router"}},[t._v("react-router")])]),r("li",[r("a",{attrs:{href:"#create-react-app"}},[t._v("create-react-app")])]),r("li",[r("a",{attrs:{href:"#学习使用ant-design-pro"}},[t._v("学习使用ant design pro")])])])]),r("p"),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"react"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react"}},[t._v("#")]),t._v(" React")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("当input设置了value，但是没有设置onChange时会报错，可设置defaultValue或把onChange事件加上")])]),t._v(" "),r("li",[r("p",[t._v("ReactDOM.render(< div>当要添加多个标签时要用div包含在内</ div>,容器元素对象)")])]),t._v(" "),r("li",[r("p",[t._v("jsx中写js的代码用{}括起来；之外可以正常用；")])]),t._v(" "),r("li",[r("p",[t._v("react推荐使用内联样式")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("引入图片")])]),t._v(" "),r("ol",[r("li",[t._v("css 设置背景图")]),t._v(" "),r("li",[t._v("src=\"require('xx/xx/x.jpg')\"")]),t._v(" "),r("li",[t._v("import logo from './public/logo.png';")])])])]),t._v(" "),r("hr"),t._v(" "),r("ul",[r("li",[r("p",[t._v("React.createElement(标签名|函数组件|class组件, { ...props }, children)")])]),t._v(" "),r("li",[r("p",[t._v("React.cloneElement(createElement创建的元素)")])])]),t._v(" "),r("hr"),t._v(" "),r("ul",[r("li",[t._v("HOC: 参见 react-admin ；（与公共组件区别，主要是公共组件应该是多地方引用相同的组件，而不需要修改公共组件内容）")])]),t._v(" "),r("hr"),t._v(" "),r("ul",[r("li",[t._v("在 create-react-app 中使用 装饰器：")])]),t._v(" "),r("ol",[r("li",[t._v("npm run eject")]),t._v(" "),r("li",[t._v("配置babel")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('"plugins": [\n    [\n        "@babel/plugin-proposal-decorators", 这里的插件，create-react-app 已经安装\n        {\n            "legacy": true\n        }\n    ]\n]\n')])])]),r("ol",{attrs:{start:"3"}},[r("li",[t._v('勾选 vscode 中的 typescript 配置 "javascript.implicitProjectConfig.experimentalDecorators": true')])]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),r("p",[t._v("组件中 this 两种方式调用当前组件")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("// 方式一：\nconstructor(props) {\n  this.handleClick = this.handleClick.bind(this);\n}\n\n// 方式二：利用箭头函数\nonChange = () => {\n    console.log(this);\n}\n")])])]),r("ol",[r("li",[t._v("function component")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("function Welcome(props) {  \n  return < h1>Hello, { props.name}< /h1>;  \n}\n")])])]),r("ol",{attrs:{start:"2"}},[r("li",[t._v("es6语法")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("class Welcome extends React.Component {  \n  render() {  \n    return < h1>Hello, {this.props.name}< /h1>;  \n  }}\n")])])]),r("ul",[r("li",[r("p",[t._v("组件类名必须大写，且只能包含一个顶层标签")])]),t._v(" "),r("li",[r("p",[t._v("通过this.props.属性名，来获取参数")])]),t._v(" "),r("li",[r("p",[t._v("属性名class要用className，for要用htmlFor")])]),t._v(" "),r("li",[r("p",[t._v("复合组件要用div标签包含起来")])]),t._v(" "),r("li",[r("p",[t._v("this.props的属性与组件的属性一一对应，但是this.props.children例外，它表示组件的所有子节点，它会返回undefind，object，array类型的值，所以react提供了React.Children来处理它可以用React.Children.map()，来遍历就不用担心返回的是什么类型的值。")])])]),t._v(" "),r("hr"),t._v(" "),r("p",[r("strong",[t._v("ref和findDOMNode")])]),t._v(" "),r("ul",[r("li",[t._v("在节点上设置ref属性，然后用this.refs.属性名即可获取到真实的节点")]),t._v(" "),r("li",[t._v("ref添加到Compoennt上获取的是Compoennt实例，添加到原生HTML上获取的是DOM")]),t._v(" "),r("li",[t._v("ReactDOM.findDOMNode，当参数是DOM，返回值就是该DOM（这个没啥卵用）；当参数是Component获取的是该Component render方法中的DOM，返回的都是DOM")])]),t._v(" "),r("hr"),t._v(" "),r("p",[r("strong",[t._v("对于表单value")]),t._v("\n不能用this.props来获取，只能用event.target.value获取")]),t._v(" "),r("hr"),t._v(" "),r("p",[r("strong",[t._v("组件的生命周期")]),t._v("\nmounting：已插入真实的DOM"),r("br"),t._v("\nupdating：正在被重新渲染"),r("br"),t._v("\nunmounting：已移除真实的DOM"),r("br"),t._v("\nwill:函数在进入状态之前，did：函数在进入状态之后"),r("br"),t._v("\ncomponentWillMount()"),r("br"),t._v("\ncomponentDidMount()"),r("br"),t._v("\ncomponentWillUpdate(object nextProps, object nextState)"),r("br"),t._v("\ncomponentDidUpdate(object prevProps, object prevState)"),r("br"),t._v("\ncomponentWillUnmount()"),r("br"),t._v("\nMounted：组件被render解析，生成对应DOM节点并被插入浏览器DOM结构的过程。"),r("br"),t._v("\nUpdate：mounted的组件被重新render的过程。"),r("br"),t._v("\nUnmounted：组件对应的DOM节点被从DOM结构中移除的过程。"),r("br"),t._v("\n每一个状态都封装了相应的hook（钩子）函数")]),t._v(" "),r("hr"),t._v(" "),r("p",[r("strong",[t._v("状态state")]),r("br"),t._v("\n初始状态用getInitialState对象赋值"),r("br"),t._v("\ngetInitialState:function(return {状态名:值})"),r("br"),t._v("\n该对象可以用this.state获取"),r("br"),t._v("\n用this.setState修改该对象，每次修改都会重新调用this.render方法重新渲染"),r("br"),t._v("\n在渲染是修改了state或props会陷入死循环。")]),t._v(" "),r("hr"),t._v(" "),r("p",[r("strong",[t._v("props和state")]),r("br"),t._v("\nprops是不可以改变的")]),t._v(" "),r("p",[t._v("赋初值一般用于 props 未赋值，但又不能为 null 的情况")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("组件名.defaultProps = {\n  key: value\n};\n")])])]),r("hr"),t._v(" "),r("p",[t._v("组件的属性类型判断，验证props 使用 prop-types 库")]),t._v(" "),r("h3",{attrs:{id:"hook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hook"}},[t._v("#")]),t._v(" Hook")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("不编写 class 的情况下使用 state 以及其他的 React 特性")])]),t._v(" "),r("li",[r("p",[t._v("只能放到函数组件中，如（useParams）")])])]),t._v(" "),r("h2",{attrs:{id:"redux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" Redux")]),t._v(" "),r("h3",{attrs:{id:"redux杂项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redux杂项"}},[t._v("#")]),t._v(" redux杂项")]),t._v(" "),r("p",[t._v("Action 发出以后，Reducer 立即算出 State，这叫做同步；Action 发出以后，过一段时间再执行 Reducer，这就是异步。")]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("react-router 和react-router-dom 只要引用一个就行了，不同之处就是后者比前者多出了 < Link> < BrowserRouter> 这样的 DOM 类组件。"),r("br"),t._v("\n因此我们只需引用 react-router-dom 这个包就行了。当然，如果搭配 redux ，你还需要使用 react-router-redux。")]),t._v(" "),r("hr"),t._v(" "),r("h3",{attrs:{id:"基本概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),r("p",[t._v("store"),r("br"),t._v("\n保存数据的地方，可看成一个容器，整个应用只能有一个store"),r("br"),t._v("\nredux提供了createStore函数接收一个函数参数，返回新的store对象")]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("state"),r("br"),t._v("\nstore对象包含了所有数据，如果想得到某个时点的数据就要对store生成快照，这种时点的数据结合就叫state"),r("br"),t._v("\n当前时刻的state可以用store.getState()获得一个state对应一个view")]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("action"),r("br"),t._v("\nstate的变化会导致view的变化，但是用户只能看到view，所以state的变化是view导致的，  action就是view发出的通知，告知state要变了"),r("br"),t._v("\naction是一个对象，type属性是必须的，其它的随意"),r("br"),t._v("\nstore.dispatch()是view发出action的唯一方法，可接受一个action对象作为参数。")]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("reducer"),r("br"),t._v("\nstore接收到action后，必须给出一个新的state，view才会变化，这就是reducer过程。"),r("br"),t._v("\nreducer函数接收state和action参数，返回一个新的state。"),r("br"),t._v("\nstore.dispatch()方法会触发reducer的自执行")]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("subscribe"),r("br"),t._v("\n可以用subscribe函数监听store，一旦state发生变化就自动执行这个函数，该方法返回一个函数，调用这个函数就可以接触监听。")]),t._v(" "),r("h2",{attrs:{id:"react-router"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-router"}},[t._v("#")]),t._v(" react-router")]),t._v(" "),r("ul",[r("li",[r("code",[t._v("exact")]),t._v(" 精准定位路由 匹配 '/' 跟路由时作用明显")])]),t._v(" "),r("h2",{attrs:{id:"create-react-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-react-app"}},[t._v("#")]),t._v(" create-react-app")]),t._v(" "),r("ul",[r("li",[t._v("修改端口：\n创建 "),r("code",[t._v(".env")]),t._v(" 文件")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("PORT=3006\n")])])]),r("h2",{attrs:{id:"学习使用ant-design-pro"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#学习使用ant-design-pro"}},[t._v("#")]),t._v(" 学习使用ant design pro")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://pro.ant.design/index-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档地址 https://pro.ant.design/index-cn"),r("OutboundLink")],1)]),t._v(" "),r("ul",[r("li",[t._v("修改端口号h和关闭自动打开浏览器：\n"),r("ul",[r("li",[t._v('修改package.json的"start": "cross-env port=5656 browser=none APP_TYPE=site umi dev"中，注意不要放到最后')]),t._v(" "),r("li",[t._v("修改node_modules/af-webpack/lib/dev.js中的如下代码")])])])]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEFAULT_PORT")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PORT")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5656")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改默认值")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _openBrowser"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urls"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localUrlForBrowser"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注释该行")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);