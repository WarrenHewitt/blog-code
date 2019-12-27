[toc]
# 微信小程序

- project.config.json 项目配置
详见 工具 -> 项目配置文件
```
{
	"miniprogramRoot": "miniprogram/", 小程序源代码文件夹
	"cloudfunctionRoot": "cloudfunctions/", 云开发的目录
}
```

---

- app.json 全局配置

pages 数组的第一个值为小程序的首页

---

- page.json 页面配置


## npm 相关

- 注意是在 miniprogramRoot 规定的文件夹下安装
- 安装了包之后，点击开发者工具中的菜单栏：工具 --> 构建 npm
- 更多看： [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)


## 收录提示
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

## 组件内引用全局样式

设置
```
options: {
  styleIsolation: 'apply-shared'
},
```



## 遇到的问题

- 自定义弹窗防止底层内容滑动添加事件 catchtouchmove="catchMove" catchMove 是空函数即可