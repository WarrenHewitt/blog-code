[[toc]]
[toc]

# vue 实现原理及简单示例实现

> 创建时间：2020-09-11

[在线演示demo](https://codepen.io/Hewitt/pen/ExKQvOb)

---

主要理解、实现如下方法：

- `Observe` ：监听器 监听属性变化并通知订阅者

- `Watch` ：订阅者 收到属性变化，更新视图

- `Compile` ：解析器 解析指令，初始化模板，绑定订阅者，绑定事件

- `Dep` ：存放对应的所有 watcher 实例


>主要执行流程

右键点击图片，在新标签页打开，可查看更清晰图片

![img](../../.vuepress/public/p1.png)


>将watcher装入对应的dep实例的订阅列表中的过程

![img](../../.vuepress/public/p2.png)


## 相关html代码，用于被解析绑定数据

这里的代码即是compile中要解析的模板，解析其中的 `v-model`  `{{}}` `v-on` 等命令

```html
<div id="app">
    <p> 姓名：<input type="text" v-model="name"></p>
    <p>学号：<input type="text" v-model="number"></p>
    <p><span>学号：</span> <span>{{ number }}</span></p>
    <p><span>computed实现：</span> <span>{{ getStudent }}</span></p>

    <p>
        <button v-on:click="setData">事件绑定</button>
    </p>
</div>
```

## observer代码

为data数据添加 get、set 以便添加 watcher，和创建 Dep 实例，通知更新视图

```js
const defineProp = function(obj, key, value) {
    observe(value)

    /*
    * 预先为每一个不同属性创建一个独有的dep
    */
    const dep = new Dep()
    Object.defineProperty(obj, key, {
        get: function() {
            /*
            * 根据不同的属性创建且只在创建Watcher时调用
            */
            if(Dep.target) {
                dep.targetAddDep()
            }
            return value
        },
        set: function(newVal) {

            if(newVal !== value) {
                /*
                * 这里的赋值操作，是以便于get  方法中返回value,因为都是赋值后马上就会调用get方法
                */
                value = newVal
                /*
                * 通知监听的属性的所有订阅者
                */
                dep.notify()
            }
        }
    })
}

const observe = function(obj) {
    if(!obj || typeof obj !== 'object') return

    Object.keys(obj).forEach(function(key) {
        defineProp(obj, key, obj[key])
    })
}

```

## Dep代码

主要是将 watcher 放入 对应的 dep 订阅列表

```js
let UUID = 0
function Dep() {
    this.id = UUID++
    // 存放当前属性的所有的监听watcher
    this.subs = []
}
Dep.prototype.addSub = function(watcher) {
    this.subs.push(watcher)
}
// 目的是将当前 dep 实例 传入 watcher
Dep.prototype.targetAddDep = function() {
    // 这里 this 是实例化后的 dep
    Dep.target.addDep(this)
}
Dep.prototype.notify = function() {
    // 触发当前属性的所有 watcher
    this.subs.forEach(_watcher => {
        _watcher.update()
    })
}
Dep.target = null

```

## Watcher 代码

数据更新后，更新视图

```js
function Watcher(vm, prop, callback) {
    this.vm = vm
    this.prop = prop
    this.callback = callback
    this.depId = {}
    this.value = this.pushWatcher()
}

Watcher.prototype = {
    update: function() {
        /* 更新值的变化 */
        const value = this.vm[this.prop]
        const oldValue = this.value
        if (value !== oldValue) {
            this.value = value
            this.callback(value)
        }
    },
    // 目的是接收 dep 实例，用于将当前watcher实例放入 subs
    addDep: function(dep) {
        if(!this.depId.hasOwnProperty(dep.id)) {
            dep.addSub(this)
            this.depId[dep.id] = dep.id
        } else {
            console.log('already exist');
        }
    },
    pushWatcher: function() {
        // 存贮订阅器
        Dep.target = this
        // 触发对象的get监听，将上面赋值给 target 的this 加入到subs
        var value = this.vm[this.prop]
        // 加入完后就删除
        Dep.target = null
        return value
    }
}

```

## Compile 代码

解析html模板，创建代码片段，绑定数据事件

```js
function Compile(vm) {
    this._vm = vm
    this._el = vm._el
    this.methods = vm._methods
    this.fragment = null
    this.init()
}
Compile.prototype = {
    init: function() {
        this.fragment = this.createFragment()
        this.compileNode(this.fragment)

        // 当代码片段中的内容编译完了之后，插入DOM中
        this._el.appendChild(this.fragment)
    },

    // 根据真实的DOM节点，创建文档片段
    createFragment: function() {
        const fragment = document.createDocumentFragment()
        let child = this._el.firstChild
        while(child) {
            // 将节点加入到文档片段中后，该节点会被从原来的位置删除，相当于移动节点位置
            fragment.appendChild(child)
            child = this._el.firstChild
        }

        return fragment
    },

    compileNode: function(fragment) {
        let childNodes = fragment.childNodes;
        [...childNodes].forEach(node =>{
            if(this.isElementNode(node)) {
                this.compileElementNode(node)
            }

            let reg = /\{\{(.*)\}\}/
            // 获取节点下的所有文本内容
            let text = node.textContent

            // 判断是否已是纯文本节点，且文本内容是否有{{}}
            if(this.isTextNode(node) && reg.test(text)) {
                let prop = reg.exec(text)[1].trim()
                this.compileText(node, prop)
            }

            if(node.childNodes && node.childNodes.length) {
                // 递归编译子节点
                this.compileNode(node)
            }
        })
    },

    compileElementNode: function(element) {
        // 获取属性，只有元素节点有如下方法
        let nodeAttrs = element.attributes;
        [...nodeAttrs].forEach(attr => {
            let name = attr.name

            if(this.isDirective(name)) {
                /*
                * v-model 放在可接受input事件的标签上
                */
                let prop = attr.value
                if (name === 'v-model') {
                    /*
                    * 获取到的value 即为需要绑定的data
                    */
                    this.compileModel(element, prop)
                } else if(this.isEvent(name)) {
                    /*
                    * 绑定事件
                    */
                    this.bindEvent(element, name, prop)
                }
            }
        })
    },

    compileModel: function(element, prop) {
        let val = this._vm[prop]
        this.updateElementValue(element, val)
        new Watcher(this._vm, prop, value => {
            this.updateElementValue(element, value)
        })

        element.addEventListener('input', event => {
            let newValue = event.target.value
            if (val === newValue) return
            this._vm[prop] = newValue
        })
    },

    compileText: function(textNode, prop) {
        let text = ''
        if(/\./.test(prop)) {
            var props = prop.split('.')
            text = this._vm[props[0]][props[1]]
        } else {
            text = this._vm[prop]
        }

        this.updateText(textNode, text)

        console.log(text);

        new Watcher(this._vm, prop, (value) => {
            this.updateText(textNode, value)
        })
    },

    bindEvent: function(element, name, prop) {
        var eventType = name.split(':')[1]
        var fn = this._vm._methods[prop]
        element.addEventListener(eventType, fn.bind(this._vm))
    },

    /*
    * 判断属性是否为指令
    */
    isDirective: function (text) {
        return /v-/.test(text)
    },

    isEvent: function(text) {
        return /v-on/.test(text)
    },

    isElementNode: function(node) {
        // 元素节点返回1 文本节点(元素或属性中的文字)3 属性节点2(被废弃)
        return node.nodeType === 1
    },

    isTextNode: function(node) {
        return node.nodeType === 3
    },

    updateElementValue: function(element, value) {
        element.value = value || ''
    },

    updateText: function(textNode, value) {
        textNode.textContent = value || ''
    }
}

```

## vue 简要构造函数 

主要实现了数据的双向绑定，自定义事件，computed

```js
function FakeVue(options) {
    this._data = options.data
    this._methods = options.methods
    this._computed= options.computed
    this._el = document.querySelector(options.el)

    // 将 _data 中的属性代理到外层的vm上,这里只代理了_data的第一层属性
    Object.keys(this._data).forEach(key => {
        this._proxyData(key)
    })
    this._initComputed()
    this._init()
}
FakeVue.prototype._init = function() {
    // 开始递归监听对象的所有属性，直到属性值为值类型
    observe(this._data)
    new Compile(this)
}
FakeVue.prototype._proxyData = function(key) {
    Object.defineProperty(this, key, {
        get: function() {
            return this._data[key]
        },
        set: function (value) {
            this._data[key] = value
        }
    })
}
FakeVue.prototype._initComputed = function() {
    // 简单的实现: 将值挂载到跟上即可
    const computed = this._computed
    Object.keys(computed).forEach((v) => {
        Object.defineProperty(this, v, {
            get: computed[v],
            set: function (value) {}
        })
    })
}

```

##  创建vue实例

```js
try{
    let vm = new FakeVue({
        el: '#app',
        data: {
            name: 'warren',
            number: '10011',
            score: {
                math: 90
            }
        },

        computed: {
            getStudent: function() {
                return `${this.name}：学号是 ${this.number}`
            }
        },

        methods:{
            // 通过在compile中给元素绑定事件实现
            setData: function() {
                alert('name：'+this.name);
            }
        }
    });
} catch(error) {
    console.error(error)
}
```


## 结语

这是从作者的理解角度，阐述的一个简单的vue实现原理示例，希望对正在探索的你有所帮助

在这个示例中，主要的复杂点在于对 html 模板的解析，数据的双向绑定。

建议跟着代码的执行顺序了解整个过程，关键点的代码都有必要的注释，若发现问题请指正。

最后附上 vue [源码地址](https://github.com/vuejs/vue/tree/dev/src)，主要关注其中的 `core` 和 `compiler` 文件；

> 欢迎交流 [Github](https://github.com/WarrenHewitt/blog/issues)