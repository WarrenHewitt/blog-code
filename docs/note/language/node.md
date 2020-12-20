[[toc]]
[toc]

---

> node 与 Deno 异同

- node为js的运行平台；Deno为 js和ts的运行平台

- Deno 采用沙箱模式运行代码，某些权限需要配置添加

---

后端认证方式：

1. 传统的 session 认证

用户认证记录保存在内存中的话，用户下次请求必须要请求在这台服务器上,才能拿到授权的资源，服务端的开销会明显增大，这样在分布式的应用上，相应的限制了负载均衡器的能力

2. 基于 token 的鉴权

不需要去考虑用户在哪一台服务器登录 ，客户端存储token，并在每次请求时附送上这个token值 服务端验证token值，并返回数据 ；服务端要支持CORS(跨来源资源共享)策略

3. Json web token (JWT)  

Header头部，Payload负载和Signature签名 三部分生成token

一种标准 特别适用于分布式站点的单点登录（用户只需要登录一次就可以访问所有相互信任的应用系统）

token需要查库验证token 是否有效，而JWT不用查库或者少查库

利用 secret 来加密和解密  所以千万不能泄露

## yarn

1. yarn add 安装包 

2. yarn remove 卸载包

## npm

- 换源 `npm install --registry=https://registry.npm.taobao.org`

- 引入包中的某个文件 `import xx from '包名/xx/xx/x'` 该地址会被解析为 `./node_modules/包名/xx/xx/x.js`

- npm  ls  –g  --depth=1 2>/dev/null | grep generator-
列出npm全局安装的包,npm包一般会依赖别的包所以是按照树状来显示的; depth 限制往下一层目录，后面是过滤错误信息。 

- process.env 为none的全局变量

- npm 传递参数 
```
scripts 命令："npmRun": "node"
执行：npm run npmRun -- a.js  -> node a.js
```  

- npm update packageName

- 安装指定版本 `npm install packageName@3.1.2`


 #### npm-shrinkwrap.json和package-lock.json区别
- shrinkwrap 向后兼容npm版本2,3和4
- package-lock 只能被npm 5+识别
- 可以通过运行npm shrinkwrap package-lock.json将现有的package-lock.json转换为npm-shrinkwrap.json
- shrinkwrap应该用于库来保证安装程序包的每个人都获得完全相同的所有依赖项版本
- package-lock允许安装程序包的人使用与package.json指定的版本范围兼容的任何版本的依赖项
- npm install 操作会自动生成package-lock文件 并且更新该文件
- 如果是用的cnpm安装的包 注意要 npm install 操作一次 更新package-lock文件


#### package.json中：

devdependencies表示开发过程中依赖的包

dependencies表示项目在生产环境中依赖的包    

- 尖括号只限大版本号: 比入^0.1.1,如果有小于1.0.0的版本都可自动更新，超过就保持0.9.9

- 波浪号表示只监控最小版本号的更新（如~0.1.2,当有大于该版本号且小于0.2.0才更新）  
  
```
"engines":{  
  "node":">=0.10.0"  
} //便是node版本需求  
```
"script":{
  "test":"grunt test"    
}  
npm start 和 npm test 可以直接用；其它用npm run 

npm install 默认两个下的都安装，--production 只安装dependences的 

#### npx
1. 调用项目内部安装的模块
```
node-modules/.bin/项目

npx 项目
```

2. 避免全局安装模块
```
npx create-react-app my-react
```
运行后会先下载create-react-app到临时目录，用过后删除

3. 使用不同版本的none
原理是使用npm的node模块，用后就删除
```
npx node@0.12.8 -v

npx -p node@8 npm run build
npx -p m1 -p m2
```
-p 指定要安装的模块  可多个

4. 执行github源码
```
npx http://some path
```
必须包含package.json和入口文件


## node

### windows安装
> 如果不是安装在c盘需要设置环境变量

### 模块的分类
1. 一．核心模块
2. 二．文件模块
3. 三．第三方模块

### 基础信息

node中的map()、forEach()、for()循环有一个特性：当其函数里面里面有回调它就变成异步

Node里面没有全局命名空间的概念

url.parse('http://www.imooc.com/video/6710')

protocol:'http:',表示底层的协议

slashes:true,有没有协议后面的双斜线;

host:ip地址或是域名;

port:端口

hostname:主机名;

还可以加传两个参数

第二个参数:默认false，设置为true，就会用queryString来解析query的字符串，会将query的值解析为对象模式;

第三个参数:默认false,设置为true,就会对没有明确协议的url进行正确解析;

url.format({});生成一个url地址;

url.resolve('http://baidu.com'，'/a/b/c');

[http://baidu.com/a/b/c](http://baidu.com/a/b/c)

HTTP:

浏览器搜索自身DNS缓存，如果有就看有没有过期如果过期就结束，就开始搜索操作系统的DNS缓存，若也没有就读去本地Host文件，若也没有浏览器就会发起一个DNS系统调用（一般是运营商的），运营商服务器会产看自身的缓存，一直逐层请求解析DNS

About:DNS

chrome://net-internals/#dns

---

node的全局对象global   相当于浏览器中的window

---

cheerio是nodejs的抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现。适合各种Web爬虫程序。

---

官方建议对一个事件不要设置超过十个监听器。太多的话可能会导致内存泄露（内存空间使用后没有收回）。

var eventsEmitter=require('events').EventEmitter;

var life=new eventsEmitter();

life.on('e1',function(w){
    console.log('事件1是:'+w);
});

life.emit('e1',11);

更改监听数量

life.setMaxListeners(数量);

查看是否被监听过

life.emit()会返回一个布尔boolean值;如果监听返回true；移除某个事件

life.removeListener('事件名'，具名函数名f)

life.on(事件名，函数名f);

批量移除

life.removeAllListeners(事件名);

某个事件的个数;

life.listeners(事件名).length或

eventsEmitter.listenerCount(life（实例化）,事件名)

---

__dirname nodejs的全局变量，指向当前执行脚本所在目录。

`console.log(__dirname) // C:\folder1\folder2`

path.join()  也可以用 `../`

`console.log(path.join(__dirname, 'a', 'b')) // C:\folder1\folder2\a\b`

path.resolve() 任意一个参数是以`/`开头都直接转到根目录 `../` 是会在上一个参数的基础上返回上一级目录进行拼接
```
console.log(path.resolve()); // G:\GitHub\webpack-pure
console.log(path.resolve('a/b', 'c')); // G:\GitHub\webpack-pure\a\b\c
console.log(path.resolve('a/b', 'c', '/k')); // G:\k
console.log(path.resolve('a/b/c', '../m')); // G:\GitHub\webpack-pure\a\b\m
```

- __dirname：返回运行文件所在的目录
- path.resolve('./')：当前运行命令所在的目录
- process.cwd()：当前运行命令所在的目录

- path.basename(__dirname)  获取当前文件夹名称

- path.sep  // 平台特定的路径片段分隔符  (例如windows是: \ )

---

module.exports=add和 exports.add=add 推荐使用后者;

module.exports=与exports=的区别

module.exports=exports={}//是按照这个方式赋值

当先设置了module.exports, `exports.属性` 将失效

require() 返回的是module.exports

把一个对象封装到模块当中

module.exports=function(){  
     this.name='hew';  
} //用require获取到的是一个函数方法

多个模块

exports.login=function(){}  //用require获取到的是一个对象

如{  
    name:function{},login:function(){}  
}

---
exports是模块公开的接口

require用于从外部获取一个模块接口及获取模块的exports对象

---
#### 常见的Content-Type

application/x-www-form-urlebcoded 常见的form提交  post提交时可以将 contenttype改为该值

multipart/form-data 不对字符编码 在对文件上传时必须使用该值

application/json json格式数据提交

text/xml  提交xml格式数据

#### Request Method 

> GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS, TRACE

- PUT是修改了整条记录，不变的字段也重写，PATCH只是修改一个字段 局部修改

- OPTIONS: 询问服务器支持的方法。当浏览器发现，是一个非简单请求，就自动发出一个"预检"请求，"预检"请求用的请求方法是OPTIONS

- 当header 的content-type 类型是以下类型时不触发options
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain



### 定时器
[参考](http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html)

setTimeout()

setInterval()

setImmediate()

process.nextTick() 是在本轮循环执行的，所有异步任务里最先执行的

1. 同步任务比异步任务早执行
2. 异步任务  
   - 本轮循环（event loop，js处理异步任务的方式）
   - 次轮循环
   - 本轮循环早于次轮循环

process.nextTick()和Promise()的回调函数追加在本轮循环，即同步任务一旦执行完，就开始执行。

setTimeout，setInterval，setImmediate 追加在次轮循环

#### 微任务

promise的回调会进入异步任务的"微任务"队列

微任务队列追加在process.nextTick队列之后，也是属于本轮循环

> 只有前一个队列执行完了之后才能执行下一个队列

#### 事件循环

[https://yuchengkai.cn/docs/zh/frontend/browser.html#node-%E4%B8%AD%E7%9A%84-event-loop](https://yuchengkai.cn/docs/zh/frontend/browser.html#node-%E4%B8%AD%E7%9A%84-event-loop)

事件初始化，会先完成下面事情：

同步任务

发出异步请求

规划定时器生效的时间

执行process.nextTick()等等

---
事件循环会无限次地执行，只有异步任务的回调函数队列清空了，才停止。

每一轮六个阶段依次执行

1. timers:
  执行setTimeout 和setInterval,他们设置的时间并不是准确的执行时间，而是到了事件后，尽快的执行，因为系统可能因为其它而被耽误
  范围[1, 2147483647]，不在设为1

2. I/O callbacks:
  执行除了 close 事件，定时器和 setImmediate 的回调

3. idle, prepare:
  idle, prepare 阶段内部实现

4. poll

5. check

6. close callbacks

---

### 包学习

- child_process 参见 `node-koa/practice/`


## express

var express=require(express);

var app=express();启动一个web服务器，将实例赋值给一个变量叫app

express()是express模块导出的一个入口函数。

---

## koa

- koa-static 当设置的目录下有index.html, 访问根路径时，会默认渲染index.html
- koa-multer 处理上传的文件
- koa-bodyparser 解析上传的json(基本)
- 使用koa2-cors时 要把app.use(cors())放在最前面
- 中间件中有 next 会先执行它之前的代码，执行完最后一个中间件后会逆序执行各个中间件 next 之后的代码


### graphql 实现

- 安装 apollo-server-koa 和 koa，看提示再安装graphql

#### 学习

- 是一个用于 API 的查询语言，通过定义类型和类型上的字段来创建的，然后给每个类型上的每个字段提供解析函数

---

### koa-router 
- /page/:id  利用 ctx.params.id 获取

### request
- ctx.request.query：获取query string参数 以{ key:value } 形式返回



