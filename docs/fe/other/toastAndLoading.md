[[toc]]
[toc]

# 加载loading、进度条、页面弹窗toast
> create-at 2019-04-04

**都采用单例模式，原生js实现**

兼容老版本浏览器内核，请将用es6语法的地方作修改

## loading 加载

代码: 样式全部通过js创建style标签注入head中，若需修改，请修改loadignStyle和loadignChildStyle 的值即刻。
```js
const loading = (() => {
    let loadingEle  = null
    return (status) => {
        if(!loadingEle) {
            const divEle = document.createElement('div')
            const styleEle = document.createElement('style')
            // 底部遮罩样式
            const loadignStyle = '.loading{position: fixed;z-index: 1000;left: 0;top:0;width: 100%;height: 100%;background-color: rgba(0,0,0, .6)}'
            // loading动画样式
            const loadignChildStyle = '.loading div{position: absolute;width: 30px;height: 30px;top: 50%;left: 50%;margin: -15px 0 0 -15px;border: 1px solid #fff;border-right: 1px solid transparent;border-radius: 50%;animation: loading 1s linear infinite;}'
            divEle.setAttribute('class', 'loading')
            divEle.innerHTML = '<div></div>'
            styleEle.innerHTML = `${loadignStyle} ${loadignChildStyle} @keyframes loading {to {transform: rotate(360deg)}}`
            document.querySelector('head').append(styleEle)
            document.querySelector('body').append(divEle)
            loadingEle = divEle
        } else {
            // 控制loading的显示与隐藏
            const dispalyStatus = status ? 'block': 'none';
            loadingEle.setAttribute('style', `display:${dispalyStatus}`)
        }
    }
})()
```

任意可调用loading函数的地方调用即刻；显示传入参数true，不显示不传参数或传false。

## 进度条

控制进度条的百分比，以及是否完成，和完成后的操作

[在线示例](https://codepen.io/Hewitt/pen/mdJabme)

css 代码

```css
.loading-mask{
  position: fixed;
  top: 0;
  left: 0;
  height: 220px;
  right: 0;
}
.loading-num{
  position: absolute;
  height: 30px;
  width: 50px;
  left: 50%;
  top: 50%;
  margin: -40px 0 0 -25px;
  text-align: center;
}
.loading-line{
  position: absolute;
  height: 1px;
  width: 0;
  top: 50%;
  left:0;
  background-color: rgb(214, 114, 114);
}
.rotate{
  position: absolute;
  height: 10px;
  width: 10px;
  top: 40%;
  right: 0;
  border: 1px solid rgb(214, 114, 114);
  border-right: 0;
  border-radius: 50%;
  animation: rotate 1s infinite;
}
button{
  padding: 6px 15px;
  border: 0;
  color: #fff;
  background-color: rgb(214, 114, 114);
}
@keyframes rotate { from { transform: rotate(0); } to{ transform: rotate(360deg);} }
```

html代码

```html
<div class="loading-mask">
  <div class="loading-line"></div>
  <div class="rotate"></div>
  <div class="loading-num">0%</div>
</div>
<div style="margin-top: 300px;">
  <button onclick="stExecute(10)">10%</button>
  <button onclick="stExecute(40)">40%</button>
  <button onclick="stExecute(80)">80%</button>
  <button onclick="stExecute(100)">100%</button>
  <button onclick="stExecute('done')">done</button>
</div>
```

js 代码

```js
var n = 0;
var DURING = 2000;
var clearSI = '';
var percentEle = document.querySelector('.loading-num');
var lineEle = document.querySelector('.loading-line');

function cusLoading(n){
  var styleText = 'transition: width '+DURING+'ms;width:'+n+'%';
  lineEle.setAttribute('style', styleText);
}

function setNumber(percent) {
  clearInterval(clearSI)
  var time = DURING/percent

  clearSI = setInterval(function() {
    n++;
    percentEle.innerHTML = n + '%';
    if(n==percent){ clearInterval(clearSI) }
  }, time)
}

function stExecute(percent) {
  if(percent === 'done'){
    clearInterval(clearSI);
    percentEle.innerHTML = '100%';
    lineEle.setAttribute('style', 'transition: width 50ms;width: 100%;');
  } else {
    cusLoading(percent)
    setNumber(percent)
  }
  if(percent === 100) {
    setTimeout(() => {
      percentEle.setAttribute('style', 'display:none')
      lineEle.setAttribute('style', 'transition: top 1s, height 1s;top:0;height:100%;width:100%;')
    }, DURING);
  }
}
```

## toast 弹窗

```js
const toast = (() => {
    let once = null
    let clearTime
    return (text, time) => {
        if(!time || time<1000 ) time = 1500
        const update = () => {
            once.innerHTML = text || ''
            once.setAttribute('style', 'position: fixed;left: 50%;z-index: 9000;max-width: 300px;padding: 5px 12px;-webkit-transform: translateX(-50%);text-align: center;border-radius: 4px;font-size: 14px;color: #fff;background-color: rgba(0,0,0,0.6);')
            clearTime = setTimeout(() => {
                once.setAttribute('style', 'display:none')
                clearTimeout(clearTime)
            }, time);
        }
        if(!once) {
            const bodyEle = document.querySelector('body')
            const div = document.createElement('div');
            bodyEle.appendChild(div)
            once = div
            update()
        } else {
            update()
        }
    }
})()
```
参数：text(弹窗文本) time(显示时常) 时间默认或小于1000时设置为1500毫秒

任意可调用的地方调用 toast 方法即可


> 欢迎交流 [Github](https://github.com/WarrenHewitt/blog/issues)