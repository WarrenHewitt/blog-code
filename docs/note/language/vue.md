[[toc]]
[toc]


# Vue


## vue-2
- `__ob__: Observer` vue设置的数据监听器，一般不可枚举

- 重置数据到初始化状态
```js
/* 只能用assign 否者会报错 Use nested data properties instead */
Object.assign(this.$data , this.$options.data())

/* 当data数据中有用到 this.props this.methods中的方法 需要重新绑定 this; 因为这些属性没有挂载在$options上，所以直接赋值会是undefined*/
Object.assign(this.$data, this.$options.data.call(this));
```

- data 选项必须是一个函数，因为可以返回对对象的独立拷贝，避免相互影响

- `Vue.component( id, [definition] )`  注册或获取全局组件

- 虚拟 DOM 
    1. 需要适配上层 API 对 dom 的操作，所以需要具有普适性，所以不是最优性能实现，但是比所有的都直接操作DOM要更好，保障了性能的下限
    2. 跨平台，因为本质是js对象，，可以做服务端渲染 weex 等
    3. 有些高性能应用中，无法极致优化，比如vscode手动操作DOM进行的性能优化

### 自定义组件用 v-model
父组件：
```
<ChildComponent v-model="select"></ChildComponent>

data() {
    return {
        select: 0
    }
}
```

子组件：
```
model: {
    prop: 'sel', // 与下面 props 中的 sel 一致
    event: 'anyName' // 用于 this.$emit('anyName', '参数') 触发
},
props: {
    sel: {
        type: Number, // 用于接收父组件 v-model 中的值
        default: 0
    },
}
```

### 计算属性
computed 不能传参

默认只有getter
```js
computed: {
    testComputed: {
        get() {
            return this.name // name变动时调用 getter
        },

        set(v) {
            this.name = v
        }
    }
}

this.testComputed = 'new name' // 触发setter
```

### 事件处理
```
<button @click="fn('some string', $event)"></button>

// 如果这里 fn 没有参数传递  那么在 method 中的 fn 默认第一个参数为 even 

// 获取 原始 DOM 事件
methods: { fn(str, event) {}}
```

组件中，可以用 $on,$once 监听所有的生命周期钩子函数，如监听组件的 updated 钩子函数可以写成 `this.$on('hook:updated', () => {})` 其他周期函数同理

在组件外部监听组件生命周期函数
```
@hook:created 监听组件的 created 生命钩子函数 同理 其它周期函数也可以这样 监听
<SomeCustomComponent @hook:created="someFn" />
```

#### 自定义事件
1. 自定义事件名，会被转换为全小写；camelCase 或 PascalCase 与 kebab-case，永远不会相同；推荐使用 kebab-case 命名


### watch处理 

- immediate: 表示初始化监听时，立即触发一次，从而不必在 created 等钩子函数中去获取第一次传入的 prop 值
- deep: 当监听的是对象时，并且父组件只是修改了对象某个属性值，并没有修改引用地址，则需要设置deep进行监听，当修改了对象引用，则不需要

---
- 无论何时，绑定的数据对象上 message 属性发生了改变，插值处的内容都会更新;通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。

- 过滤器函数总接受表达式的值作为第一个参数。

- 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。

- Vue 2.x 中，过滤器只能在 mustache 绑定和 v-bind 表达式（从 2.1.0 开始支持）中使用，因为过滤器设计目的就是用于文本转换。为了在其他指令中实现更复杂的数据变换，你应该使用计算属性。

- 然而，不同的是计算属性是基于它们的依赖进行缓存的，计算属性只有在它的相关依赖发生改变时才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。

- `v-if v-show` 说明
    - v-else 元素必须紧跟在 v-if 或者 v-else-if 元素的后面——否则它将不会被识别
    - v-if 条件块内的事件监听器和子组件适当地被销毁和重建
    - v-show 元素总是会被渲染，并且只是简单地基于 CSS 进行切换
    - elementUI 的 dialog 使用的是 v-show

- v-model后不能跟表达式

---

- `v-bind="$attrs"  v-on="$listeners"`

`$attr：`  包含了父作用域中 不作为 prop 被识别和获取的属性,在孙一级中定义prop获取或者不设置prop，直接用this.$attrs获取,两者只能选其一(使用示例参考 vue-admin table)

`$listeners：` 包含了父作用域中传入的 v-on 事件监听器，除了原生事件，可以是 click 等事件也可以是自定义事件，可以 this.$listeners.click() this.$emit('click') 两种方式调用(使用示例参考 vue-admin table)

---


### 生命周期 
- destroyed ： 如果有定时器，在该钩子函数中务必清除
https://www.jianshu.com/p/a20f2023c78a

### mixin

- data对象的数据会进行递归合并，并在发生冲突时以组件数据优先

- 同名钩子函数将合并为一个数组，都将被调用。混入对象的钩子将在组件自身钩子之前调用

- 值为对象的选项，例如 methods、computed、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

- 可以将一些公共方法，比如获取store中数据，放入mixin中，抽取成公共的mixin使用


### props：
- 同步且不变，可以直接在created等钩子函数直接获取值，而不是得到子组件设置的默认 porp 值；
- 异步，只能在watch中监听prop，从而获取值
- 当子组件中需要修改当前的prop时，可以利用watch监听其变化，在data中设置一个新的变量，以供子组件修改赋值
- 修改props 两种方式
    - 通过 $emit 回掉父组件的函数修改
    - 通过 .sync 修饰符方式 (父子组件是时刻也是必须保持一致)


### 插槽 slot

- v-slot:name 简写 #name
- `<slot>这里的内容是默认内容，当父级有内容传入时，将会被替换</slot>`
- 作用域插槽：
    - 让父级可以使用子插槽组件中的数据
    -  v-slot 只能添加在 `<template> `上
    
#### 定义 slot 组件

主要操作：
1. 设置插槽名称
2. 绑定作用域插槽数据
```html
<template>
    <div>
        <slot >这是默认接收</slot>
        <slot v-bind:data1="data1">这是默认作用域</slot>
        <!-- 具名插槽 -->
        <slot name="name"></slot>
        <!-- 作用域插槽：让父级可以使用子插槽组件中的数据 -->
        <slot name="scopedSlotData1" v-bind:data1="data1">
            {{ data1 }}
        </slot>
        <slot name="scopedSlot" v-bind:data1="data1" v-bind:data2="data2">
            {{ data1.name }}{{ data1.name }}
        </slot>
    </div>
</template>
<script>
export default { data () { data1: { name: 'warren1' } data2: { name: 'warren2' } } }
</script>
```

#### 引用 slot

为**具名插槽**和**作用域插槽**引入了一个新的统一的语法 (即 v-slot 指令)

主要操作：
1. 使用哪个插槽
2. 是否使用子组件的数据
```html
<template>
    <div>
        <MySlot>
            <!-- 使用具名插槽 -->
            <template v-slot:name>new name</template>

            <!-- 作用域插槽简写 v-slot: default="data" === v-slot="data"  -->
            <template v-slot="data">
                {{ data }}
                <!-- 这里显示显示 { data1: { name: 'warren1' } } 没有具名的slot (即上面定义的第二个slot)-->
            </template>

            <template v-slot:scopedSlotData1="data">
                {{ data }}
                <!-- 这里显示显示 { data1: { name: 'warren1' } } -->
            </template>
            <template v-slot:scopedSlot="data">
                <!-- 这里的 data  可以修改为任意名称 -->
                <!-- 下面的 {{}} 将会被替换为 { "data1": { "name": "warren1" }, "data2": { "name": "warren2" } } -->
                ：<b>{{ data }}</b>
            </template>
        </MySlot>
    </div>
</template>
<script>
import MySlot from './mySlot.vue'
export default { components: { MySlot }, data () { } }
</script>
```

## Vue Test Utils 

https://vue-test-utils.vuejs.org/zh/

mocha：对测试过程进行描述 (语句中的describe和it等方法)

chai：断言库，即各种判断(expect方法)

Karma: 一个启动浏览器运行测试并生成报告的测试运行器

sinon: 模拟与其它系统或函数对接，主要有三个方法 spy stub mock

cypress: Fast, easy and reliable testing for anything that runs in a browser.


## vue-cli

- assets 目录一般主要放样式代码 会被webpack编译

- 最好用相对路径

- 在样式文件中引入图片，注意路径应该按照，引入样式的那个.vue文件为相对路径

- "lint": "vue-cli-service lint" ： 执行该命令，eslint 校验并修复文件中的错误

- 在js中动态控制图片加载用 `require('地址')` 获取图片后赋值给src

- CSS Pre-processors：选择CSS 预处理类型：sass 或less

- Linter / Formatter：选择eslint 标准，以及是否在保存时格式化代码

- 图片资源放到assets，不要放到public中否则打包出来的图片会是两份

- 其它的js资源可以放到public中

- `vue inspect > output.js` 输出当前vue-cli默认的webpack配置
- 在开发模式时，环境变量 process.env.NODE_ENV 为 development；打包时为 production
- 生产环境部署：https://cn.vuejs.org/v2/guide/deployment.html
- 环境变量和模式 (webpack-pure和node-koa项目中有相关实例内容)
  - 链接https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F
  - 可以在命令行传参
  - 有固定的参数

- TypeScript 配置
    - Use class-style component syntax: 是否使用 使用 类 风格的组件语法
    - Use Babel alongside TypeScript for auto-detected polyfills? ：是否使用babel做转义（建议是使用20200924）

---

husky 和 yorkie 包的安装 会对 .git/hooks里的钩子进行了更改

husky npm 包 
```json
"husky": {
  "hooks": {
    "pre-commit": "npm run lint-staged"
  }
}
```

yorkie 是fork husky 而来，具体说明 https://cli.vuejs.org/zh/guide/cli-service.html#git-hook

lint-staged 的作用是每次提交只检查本次提交所修改的文件

`"vue-cli-service lint --no-eslintrc -c .eslintrcCommit.js"` 利用修改默认配置文件，使用指定配置文件，在提交时做校验(与开发时的lint不同在于，不允许提交有console.log的代码)

一般是设置了在保存文件时，就进行 eslint 语法校验，这里的 githoots 是在 commit 时，再进行一次 eslint 语法校验（因为用的是 vue-cli-service lint）

代码检测与规范参考： https://juejin.im/post/6844904013368934407#heading-22


### 脚手架打包出来的文字图标不显示

修改webpack.base.conf.js 的
```js
{
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
        limit: 100000, // 这里的值改大一点
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
    }
}
```

## vue-loader

- 在style中用别名引入scss文件时，如果报错，在别名前~

- `@import '@/x/x/x.scss'`;  引用文件时，不加后缀可能导致编译错误

- 深度作用域 
```
.a >>> .b (实际使用中效果没有deep好)
.a /deep/ .b  (容易报错)
.a ::v-deep .b  (最新版，vue/cli 4.4.1,只有这个有效)
```

## 深入响应式原理
 - 非侵入性的响应式系统
 - 数据模型为js对象，对其修改时，视图更新

### 如何追踪变化

- vue将接收的data全部用Object.defineProperty把属性转为getter/setter(导致不支持ie8以及一下)

- 属性被访问和修改时通知变化

- 每个组件实例都有对应的watcher实例对象（它会在组件渲染的过程中把属性记录为依赖，当依赖的setter被调用时，会通知watcher重新计算，从而使相关组件更新）

### 检测变化的注意事项

- 只有在data对象上的属性才是响应式的

- 改变对象和数组的一些情况不会被检测到更新

- 要用到的状态，提前在data对象中声明

### 异步更新队列

## vue router

- router-view 与路由表中的 children 有关

- router.push 改为了 Promise

- 导航守卫的钩子中  
```
next() // 进行管道中的下一个钩子
next({ path: '/' })  // 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航
// 以上两个的区别，前者表示，路由完成，显示对应页面；后者表示，需要开启一个新的路由过程，与跳转路由相似
```

### keep-alive

1. include 名称匹配的组件会被缓存，包含的是组件的name属性值 
2. 通过同一个 router-view 进入的路由间切换, keep-alive 都有效,都会缓存页面。
3. 只要通过keep-alive下的路由(前提是要包含在include中) ，每次都会触发activated, 只有第一次进入会触发mounted（切换过router-view入口 再进入也会触发mounted）
4. 注意include 如果用字符串值，后面名称与逗号之间不要有空格
5. exclude 优先级更高
```js
beforeRouteLeave (to, from, next) {
    /** 这里主要是重置数据，当要去往的地址是新增、编辑、详情这些时，即可以不用重置数据 */
    if (!['routeName'].includes(to.name)) { this.key = '数据重置了' }
    next()
},

activated () { /** @des 这里更新表格数据等 */ },

created () { /** 这里请求不需要频繁更新的数据 */ },
```
 
### 处理保存页面状态
- 最好一个模块有一个单独的 router-view 
- 在 activated 中请求需要实时更新的数据 
- 在 beforeRouteLeave 中处理和当前需要保存状态页面走同一个 router-view 的页面，否则在这些页面间切换，页面的状态也会被保留（data中的数据）


## vue-3

- 组件不强制要求唯一跟标签

### 语法

> setup

- 在 beforCreate 之后 created 之前执行，并且替换了这两个周期函数

- 两个参数：
    - props 使用时不要直接用es6的解构，如果要用，可以用 toRefs 处理后解构
    - context  上下文对象，这个上下文对象中包含了一些有用的属性 如 slots


> reactive() 

创建响应数据  类似原来的 data 数据 

> ref()

根据给定的值创建，响应式的数据对象，返回一个包含 value 属性的对象

将创建的值挂载到 reactive 上，可以不用通过 .value 直接访问，因为被展开为原始的值

用 isRef 来判断是否是 ref() 创建的值


> toRefs() 

将 reactive() 创建出来的响应式对象，转换为每个属性节点都是 ref() 类型的响应式数据

> computed() 

用来创建计算属性，computed() 函数的返回值是一个 ref 的实例

> provide() 和 inject()

可以实现嵌套组件之间的数据传递。在 setup() 函数中使用。父级组件中使用 provide() 函数向下传递数据；子级组件中使用 inject() 获取上层传递过来的数据。

- 返回 state 时 如果要解构对象，需要用 toRefs 处理一下

---

- ref() ： 返回值是一个对象，这个对象上只包含一个 .value 属性; 目的是让一些定义的基本数据类型，可以成为相应式的数据,当挂载到 reactive() 上时，会自动把响应式数据对象展开为原始的值，不需通过 .value 就可以直接被访问


---

## 包

- Vue Class Component ：使用类的形式写 vue 组件 [地址](https://class-component.vuejs.org/)


## vuex

- 实践使用参见 `vue-admin/src/store`

公用数据，在组件中获取store中数据，若store中没有则等待其从服务器拉去数据
```js
async mounted () {
    try {
        /* actionGetSomeData 中有异步数据请求 */
        await this.actionGetSomeData()
    } catch (error) {
        console.log(error)
    }
    /* 这里调用的方法需要等待store中的数据来改变界面显示 */
    this.someMethodsUpdateView()
},
```

commit 触发 mutation store.commit('name')

dispatch 触发 action store.dispatch('increment')


- `namespaced: true` 命名空间

两个用法 `store.dispatch('模块名/actionSetUserInfo')`  `...mapState('模块名', ['roles'])`

## vue-loader

- 在style中用别名引入scss文件时，如果报错，在别名前~

- `@import '@/x/x/x.scss'`;  引用文件时，不加后缀可能导致编译错误

- 深度作用域 
```
.a >>> .b (实际使用中效果没有deep好)
.a /deep/ .b  (容易报错)
.a ::v-deep .b  (最新版，vue/cli 4.4.1,只有这个有效)
```

## elementUI

- 表单重置  `this.$refs.ruleForm.resetFields()`  只会清除 新输入的数据 ；当在data上配置表单数据时设置了初始化值时，该默认值是不会被清除的，并且修改该默认值，重置后的值也是初始值

- 当表单数据有多层嵌套对象时，在设置prop时要将 嵌套关系用字符串形式 赋值

- 动态表格列，需要用 `template` 来包裹
```vue
<template v-if="judge"> <el-table-column prop="prop" label="name"></el-table-column> </template>
```

- `el-cascader` 需要点击两次才能选中，其中一个原因是，多次赋值操作；解决办法为，保证只有在初始化时进行一次赋值操作


## iview

- iview 引起的BUG, 在table中使用drop down 被遮挡，将外层的class重置
```
.ivu-table-wrapper{
    overflow: visible;
}
```

