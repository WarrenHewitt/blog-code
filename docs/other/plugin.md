## 包、插件 介绍

- 使用html方式生成类似ppt的演讲稿 [reveal](https://github.com/hakimel/reveal.js)

- 当页面滑动到某个元素时，该元素显示一些动画效果： [scrollreveal](https://github.com/jlmakes/scrollreveal) 

- 打印：打印将服务端的 pdf 文件进行打印；打印html内容；打印图片；打印JSON字符串；[Pring.js](https://github.com/crabbly/Print.js)

- vue项目打印 https://github.com/Power-kxLee/vue-print-nb

- 视频播放 [video](https://github.com/videojs/video.js)

- 将内容放入剪切板 [clipboard](https://github.com/zenorocha/clipboard.js)

- 利用js实现页面滚动，放弃浏览器的原生滚动，并且实现如picker等效果组件 [better-scroll](https://github.com/ustbhuangyi/better-scroll)

- 可视化算法学习工具 [algorithm-visualizer](https://github.com/algorithm-visualizer/algorithm-visualizer) 

----

- 获取设备指纹 [fingerprintjs2](https://github.com/Valve/fingerprintjs2)

- 生成 符合 RFC(Requests for Comments) 规则的 uuid(Universally Unique Identifier) [uuid](https://github.com/uuidjs/uuid)
```
构成：由一组32位数的16进制数字所构成
格式：以连字号分为五段，表现形式为8-4-4-4-12

xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
M 表示 UUID版本，目前只有1，2，3，4，5五个版本
N 数字的一至三个最高有效位表示 UUID 变体，目前只有 8，9，a，b 

v1：timestamp + MAC 地址
v2：在1的基础上升级，更安全
v3：namespace + 输入内容 进行MD5
v4：基于随机数
v5：namespace + 输入内容 SHA1

```

- 加密字符 [crypto](https://github.com/brix/crypto-js)

---

- axios  数据请求 [axios](https://github.com/axios/axios) 

   - axios 可以自动判断上传的数据是否是formdata，从而修改 content-type, 只需要设置 request config 的 data `{ data: FormData }`

---

- 操作cookie [js-cookie](https://github.com/js-cookie/js-cookie)

---

- 与Android和IOS一套通信规则 [DSBridge](https://github.com/wendux/DSBridge-Android)

---

- git Hooks 操作，阻止不符合的commit和push [Husky](https://github.com/typicode/husky)

---

- 富文本操作 [full-featured](https://www.tiny.cloud/docs/demo/full-featured/)

- 富文本操作，轻量 [wangEditor](https://github.com/wangfupeng1988/wangEditor)

---

- 生成二维码 [qrCode](https://github.com/soldair/node-qrcode)

- 导入 导出 电子表格 [sheetjs](https://github.com/SheetJS/sheetjs)

- 文件上传,分片、压缩等 [webuploader](https://github.com/fex-team/webuploader)

----

- react 框架 [mirror](https://github.com/mirrorjs/mirror)

---

- driver.js  引导页 指引用户学习 项目中有哪些操作

---


### 图片处理相关

- 裁切图片：[PhotoClip](https://github.com/baijunjie/PhotoClip.js) pc和移动端都支持，方式为移动底部图片，裁剪框不动

- 裁切图片：[cropperjs](https://fengyuanchen.github.io/cropperjs/) pc和移动端都支持，移动裁剪框，功能更强大

- 图片浏览：[fancyBox](https://github.com/fancyapps/fancyBox) pc和移动端都支持，单张大图浏览，可滑动切换图片,功能与 PhotoSwipe 有一些区别且基于jquery

- 图片浏览：[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) pc和移动端都支持，单张大图浏览，可滑动切换图片,移动端更友好

- 图片浏览：[viewerjs](https://github.com/fengyuanchen/viewerjs) pc和移动端都支持，功能更多，适合pc端

- 内容（包括文字图片）滑动/切换 轮播：[swiper](https://github.com/nolimits4web/swiper) 移动端现代浏览器

- 内容（包括文字图片）滑动/切换 轮播：[slick](https://github.com/kenwheeler/slick) 适合pc端,自动播放时会有点不流畅

- 内容（包括文字图片）滑动/切换 轮播：[OwlCarousel2](https://github.com/OwlCarousel2/OwlCarousel2) 适合pc端

- 压缩图片：[localResizeIMG](https://github.com/think2011/localResizeIMG) (已不再维护，但已有的功能基本满足需求)

### 格式化时间

- [momentjs](https://github.com/moment/moment) 更大更全

- [dayjs](https://github.com/iamkun/dayjs) 文件更小

### 测试相关

- [cypress](https://github.com/cypress-io/cypress) 测试浏览器内容

- [eruda](https://github.com/liriliri/eruda) 移动端显示 console

- [vConsole](https://github.com/Tencent/vConsole) 移动端显示 console


### node 相关

- 文件的操作，封装简化 fs 的方法 [fs-extra](https://github.com/jprichardson/node-fs-extra)

- `browserslist`包 是在不同的前端工具之间共用目标浏览器和 node 版本的配置工具。用于 Autoprefixer Babel 等

两个地址 [一](https://juejin.cn/post/6844903669524086797)  [github地址](https://github.com/browserslist/browserslist)

```
last 2 versions
not dead 
// 注意 如果是这么用 可能在vue项目中 Autoprefixer 可能就不会加前缀了，因为 很多需要加前缀的浏览器会被判定为已经死了，所以不用加前缀了，可以 把 not dead 改为 not ie<=10
```

- PostCSS 转换CSS的工具，有许多插件，例如autoprefixer,cssnext以及CSS Modules


### 其它

- uniSignature https://github.com/sintrb/uniSignature 用于uni-app的签名组件，支持H5、小程序、APP，可导出svg矢量图片

- api 处理 [地址](https://github.com/Tencent/APIJSON)

- Strapi is the open-source Headless CMS(Content Management System) 提供内容的处理接口  不提供业务层
 属于低代码一种实现