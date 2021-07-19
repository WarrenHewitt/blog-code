[[toc]]
[toc]
## canvas画板多端实现

> 创建时间： 2020-03-01；测试：chrome v80.0.3987.122 正常 | 小程序 2.10.2 正常

[PC端演示](https://codepen.io/Hewitt/pen/mdJqNEz)

### 移动端实现
```css
 body{margin:0;overscroll-behavior-y: contain;}
.draw-board {
    width: 100%;
    height: 300px;
    background-color: rgb(213, 252, 245);
}
```

html代码

```html
<canvas id="drawBoard" class="draw-board" height="300px"></canvas>
<div>
    <button onclick="handleClear()">清除</button>
</div>
```

js 代码

```js
/* 实测利用贝塞尔曲线画的线在 lineWidth 较小时，效果与当前方法基本相当 */
let mouseDown = false;
const canvas = document.getElementById('drawBoard');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;

const rect = canvas.getBoundingClientRect();
/** canvas标签距离屏幕适口的位置 */
const cl = rect.left;
const ct = rect.top;

const randomColor = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return color.padEnd(7, 'f');
}

/** 记录起始位置 */
let sx = '', sy = '';
const draw = (x, y) => {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = randomColor();
    ctx.moveTo(sx, sy);
    /** 将结束位置设置为下一次起始位置 */
    sx = x - cl;
    sy = y - ct;
    ctx.lineTo(sx, sy)
    ctx.stroke();
}
// // PC端使用只需将对应事件名更改即可,同时需要添加判断，是否鼠标已按下
canvas.addEventListener('touchstart', function(e) {
    sx = e.touches[0].clientX - cl;
    sy = e.touches[0].clientY - ct;
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round';
    ctx.shadowBlur = 1;
    ctx.shadowColor = 'rgb(0, 0, 0)';
})
canvas.addEventListener('touchmove', (e) => {
    draw(e.touches[0].clientX, e.touches[0].clientY)
})
canvas.addEventListener('touchend', (e) => {
    console.log('end');
})

/** 清除画布 */
handleClear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
```

### 小程序端实现方式

#### wxml 代码

```html
<canvas type="2d" id="drawBoard" class="draw-board" bindtouchstart="handleTouchStart" bindtouchmove="handleTouchMove" bindtouchend="handleTouchEnd"  ></canvas>
```

#### js代码

```js
let canvas = null;
let ctx = null;
/** 是否点击开始 */
let start = false;
/** 记录起始位置 */
let startX = 0;
let startY = 0;
let canvasWidth = 0;
let canvasHeight = 0;

function handleDraw(x, y) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  /** 将结束位置设置为下一次起始位置 */
  startX = x;
  startY = y;
  ctx.lineTo(x, y);
  ctx.stroke();
}

Page({
  data: {},

  onReady: function () {
    const query = wx.createSelectorQuery()
    query.select('#drawBoard')
      .fields({ node: true, size: true })
      .exec((res) => {
        canvas = res[0].node
        ctx = canvas.getContext('2d')

        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#5e5e5e';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        // 使用阴影 消除锯齿
        ctx.shadowBlur = 2;
        ctx.shadowColor = '#5e5e5e';
        canvasWidth = canvas.width;
        canvasHeight = canvas.height;
      })
  },

  handleTouchStart(e) {
    startX = e.touches[0].x;
    startY = e.touches[0].y;
  },

  handleTouchMove(e) {
      // 注意此处是 changedTouches
    handleDraw(e.changedTouches[0].x, e.changedTouches[0].y)
  },

  handleTouchEnd(e) {
  },

  handleClear() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  }
})
```

> 欢迎交流 [Github](https://github.com/WarrenHewitt/blog/issues)