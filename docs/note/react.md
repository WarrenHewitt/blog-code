[toc]
[[toc]]

---

## React

- 当input设置了value，但是没有设置onChange时会报错，可设置defaultValue或把onChange事件加上

- ReactDOM.render(< div>当要添加多个标签时要用div包含在内</ div>,容器元素对象)

- jsx中写js的代码用{}括起来；之外可以正常用；

- react推荐使用内联样式

---

- React.createElement(标签名|函数组件|class组件, { ...props }, children)

- React.cloneElement(createElement创建的元素)

---

- HOC: 参见 react-admin ；（与公共组件区别，主要是公共组件应该是多地方引用相同的组件，而不需要修改公共组件内容）

---

- 在 create-react-app 中使用 装饰器： 
1. npm run eject  
2. 配置babel
```
"plugins": [
    [
        "@babel/plugin-proposal-decorators", 这里的插件，create-react-app 已经安装
        {
            "legacy": true
        }
    ]
]
```
3. 勾选 vscode 中的 typescript 配置 "javascript.implicitProjectConfig.experimentalDecorators": true

---

### 组件

组件中 this 两种方式调用当前组件
```
// 方式一：
constructor(props) {
  this.handleClick = this.handleClick.bind(this);
}

// 方式二：利用箭头函数
onChange = () => {
    console.log(this);
}
```


1. function component  
```
function Welcome(props) {  
  return < h1>Hello, { props.name}< /h1>;  
}
```
2.  es6语法  
```
class Welcome extends React.Component {  
  render() {  
    return < h1>Hello, {this.props.name}< /h1>;  
  }}
```

- 组件类名必须大写，且只能包含一个顶层标签  

- 通过this.props.属性名，来获取参数  

- 属性名class要用className，for要用htmlFor  

- 复合组件要用div标签包含起来  

- this.props的属性与组件的属性一一对应，但是this.props.children例外，它表示组件的所有子节点，它会返回undefind，object，array类型的值，所以react提供了React.Children来处理它可以用React.Children.map()，来遍历就不用担心返回的是什么类型的值。

---
**ref和findDOMNode**
- 在节点上设置ref属性，然后用this.refs.属性名即可获取到真实的节点
- ref添加到Compoennt上获取的是Compoennt实例，添加到原生HTML上获取的是DOM
- ReactDOM.findDOMNode，当参数是DOM，返回值就是该DOM（这个没啥卵用）；当参数是Component获取的是该Component render方法中的DOM，返回的都是DOM


---
**对于表单value**
不能用this.props来获取，只能用event.target.value获取

---

**组件的生命周期**
mounting：已插入真实的DOM  
updating：正在被重新渲染  
unmounting：已移除真实的DOM  
will:函数在进入状态之前，did：函数在进入状态之后  
componentWillMount()  
componentDidMount()  
componentWillUpdate(object nextProps, object nextState)  
componentDidUpdate(object prevProps, object prevState)  
componentWillUnmount()  
Mounted：组件被render解析，生成对应DOM节点并被插入浏览器DOM结构的过程。  
Update：mounted的组件被重新render的过程。  
Unmounted：组件对应的DOM节点被从DOM结构中移除的过程。  
每一个状态都封装了相应的hook（钩子）函数  

---
**状态state**  
初始状态用getInitialState对象赋值  
getInitialState:function(return {状态名:值})  
该对象可以用this.state获取  
用this.setState修改该对象，每次修改都会重新调用this.render方法重新渲染  
在渲染是修改了state或props会陷入死循环。

---
**props和state**  
props是不可以改变的  

赋初值一般用于 props 未赋值，但又不能为 null 的情况
```
组件名.defaultProps = {
  key: value
};
```

---
组件的属性类型判断，验证props 使用 prop-types 库 

### Hook

- 不编写 class 的情况下使用 state 以及其他的 React 特性

- 只能放到函数组件中，如（useParams）

## Redux
### redux杂项
Action 发出以后，Reducer 立即算出 State，这叫做同步；Action 发出以后，过一段时间再执行 Reducer，这就是异步。

---
 react-router 和react-router-dom 只要引用一个就行了，不同之处就是后者比前者多出了 < Link> < BrowserRouter> 这样的 DOM 类组件。  
因此我们只需引用 react-router-dom 这个包就行了。当然，如果搭配 redux ，你还需要使用 react-router-redux。

---
### 基本概念
store  
保存数据的地方，可看成一个容器，整个应用只能有一个store  
redux提供了createStore函数接收一个函数参数，返回新的store对象

---
state  
store对象包含了所有数据，如果想得到某个时点的数据就要对store生成快照，这种时点的数据结合就叫state  
当前时刻的state可以用store.getState()获得一个state对应一个view

---
action  
state的变化会导致view的变化，但是用户只能看到view，所以state的变化是view导致的，  action就是view发出的通知，告知state要变了  
action是一个对象，type属性是必须的，其它的随意  
store.dispatch()是view发出action的唯一方法，可接受一个action对象作为参数。

---
reducer  
store接收到action后，必须给出一个新的state，view才会变化，这就是reducer过程。  
reducer函数接收state和action参数，返回一个新的state。  
store.dispatch()方法会触发reducer的自执行

---
subscribe  
可以用subscribe函数监听store，一旦state发生变化就自动执行这个函数，该方法返回一个函数，调用这个函数就可以接触监听。


## react-router

- `exact` 精准定位路由 匹配 '/' 跟路由时作用明显

## create-react-app

- 修改端口：
创建 `.env` 文件

```
PORT=3006
```

## 学习使用ant design pro

[文档地址 https://pro.ant.design/index-cn](https://pro.ant.design/index-cn)

- 修改端口号h和关闭自动打开浏览器：
    - 修改package.json的"start": "cross-env port=5656 browser=none APP_TYPE=site umi dev"中，注意不要放到最后
    - 修改node_modules/af-webpack/lib/dev.js中的如下代码
```js
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 5656; // 修改默认值
(0, _openBrowser.default)(urls.localUrlForBrowser); // 注释该行
```