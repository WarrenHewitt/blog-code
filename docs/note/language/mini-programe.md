[[toc]]
[toc]

---

## 微信小程序

- project.config.json 项目配置
详见 工具 -> 项目配置文件
```
{
	"miniprogramRoot": "miniprogram/", 小程序源代码文件夹
	"cloudfunctionRoot": "cloudfunctions/", 云开发的目录
}
```
---

- `background-image: url(base64 | http-url)` 不支持使用本地图片地址 

- .wxss 文件中 `page{ background: #fff }` 默认有个 page 标签 可设置当前页的页面背景色等

- 单位最好用 rpx   1px = 2rpx

- 页面跳转
  - `wx.reLaunch({ url: 'test?id=1' })` 关闭所有页面，打开到应用内的某个页面
  - `wx.navigateTo({ url: 'path?a=1&b=2' })` 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面, 参数也是跟在url后面


- image 标签  要设置高度 否则图片不会显示  图片地址可以动态加载


### 遇到的问题

- 自定义弹窗防止底层内容滑动添加事件 catchtouchmove="catchMove" catchMove 是空函数即可

- touch 相关事件返回的 `touches` 和 `changedTouches` 前者表示停留在屏幕上时的点信息，后者表示在屏幕上移动变化时的点信息；touchmove 和 touchend 优选后者，否者某些情况无法获取点位信息

### 事件

https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html

- 传递参数只能用  data-xx="" 形式的自定义参数 不能直接在绑定的内联函数上传递(和vue不同); 参考 /mini-programe 小程序的 content 模块
```html
<view bindtap="onGetData" data-status="data1">
  <view data-status="data2"></view>
</view>
```

```js
onGetData(event) {
  event.currentTarget.dataset, // 事件绑定的那个元素上的数据 data1
  event.target.dataset // 触发事件的那个元素 data2
},
```

- detail  自定义事件所携带的数据；dialog组件的取消和确认操作的表示放在detail中


### wxml

- `wx:key="index"` 

- 获取元素 `wx.createSelectorQuery()` 注意在自定义组件或包含自定义组件的页面中，应使用 `this.createSelectorQuery()` 来代替

### 页面配置

https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html#%E9%85%8D%E7%BD%AE%E9%A1%B9

单个页面的 .json 文件
```json
{
  "navigationBarTitleText": "页面顶部标题" 如果没有正常显示，检查app.json中是否有这个页面
}
```

- 每个页面顶部标题也可以动态修改  `wx.setNavigationBarTitle({ title: '' })`

- 每个页面顶部的 Bar 样式修改 setNavigationBarColor

### 页面周期函数

https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html

- onHide  wx.navigateTo 或底部 tab 切换到其他页面

- onUnload  wx.redirectTo或wx.navigateBack到其他页面时

### app.json 全局配置

- 创建页面：可以直接在app.json 中先配置好页面路径及名称，保存时，编辑器自动创建文件

- pages 数组的第一个值为小程序的首页

- 配置底部菜单 tabBar

```js
{
  "style": "v2" // 使用最新版样式  
  "useExtendedLib": {
      "kbone": true, // 引入 kbone
      "weui": true // 引入 weUI
  }
  // 使用位置等相关信息 要先授权
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序展示"
    }
  }
}
```

---

- page.json 页面配置

### WXS

.wxs 文件
```js
var a = 'hello';
var fn = function(p) { return (a + ' ' + p); }
module.exports = { a: a, fn: fn }
```

```html
<!-- module的值为，调用时的名称 -->
<wxs src="./test.wxs" module="ts" />

<view>调用 wxs 方法结果:</view>
<view>{{ ts.fn('world') }}</view>
```


### npm 相关

- 注意是在 miniprogramRoot 规定的文件夹下安装
- 安装了包之后，点击开发者工具中的菜单栏：工具 --> 构建 npm
- 更多看： [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)


### 生命周期函数

执行顺序： onLoad -> onShow -> onReady

### 组件内引用全局样式

组件js文件，设置以下项
```
Component({
  options: {
    styleIsolation: 'apply-shared'
  }
})
```

### computed

- 先安装 miniprogram-computed 安装后 computed 和 watch 都可用 

### behaviors

用于组件间代码共享的特性，类似于一些编程语言中的“mixins”


### canvas 相关

- ctx.draw(true); 参数为true则保留当前画布上的内容，进行绘制

- touches[0].x  在canvas中返回的是相对于canvas的x值


### 收录提示
- `根据 sitemap 的规则[0]，当前页面 [pages/menu/menu] 将被索引`
  - 这个并不是报错，他只是一个提示，提示开发者哪些页面被微信收录了。代表这个页面可以在微信的搜索中被搜到
  - 可以在项目配置中设置 `checkSiteMap：false` 将其关闭
sitemap.json
```
{
  "rules":[{
    "action": "allow",
    "page": "path/xx/xx"
  }, {
    "action": "disallow",
    "page": "*"
  }]
}
```