[toc]
[[toc]]

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

### 遇到的问题

- 自定义弹窗防止底层内容滑动添加事件 catchtouchmove="catchMove" catchMove 是空函数即可

- touch 相关事件返回的 `touches` 和 `changedTouches` 前者表示停留在屏幕上时的点信息，后者表示在屏幕上移动变化时的点信息；touchmove 和 touchend 优选后者，否者某些情况无法获取点位信息

### app.json 全局配置

- 创建页面：可以直接在app.json 中先配置好页面路径及名称，保存时，编辑器自动创建文件

- pages 数组的第一个值为小程序的首页

---

- page.json 页面配置


### npm 相关

- 注意是在 miniprogramRoot 规定的文件夹下安装
- 安装了包之后，点击开发者工具中的菜单栏：工具 --> 构建 npm
- 更多看： [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)


### 收录提示
- 根据 sitemap 的规则[0]，当前页面 [pages/menu/menu] 将被索引
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