## 拖拽普通标签位置或拖拽canvas中的文本框位置

> 创建时间： 2020-03-01；测试：chrome v80.0.3987.122 正常

### 1. 实现鼠标拖动标签元素到任意位置

[演示地址](https://codepen.io/Hewitt/pen/orOgLW)

- css 代码
```css
#range {
    position: relative;
    width: 600px;
    height: 400px;
    margin: 10px;
    background-color: rgb(133, 246, 250);
}

.icon {
    position: absolute;
    height: 100px;
    width: 100px;
    cursor: move;
    background-color: #ff9204;
    user-select: none;
}
```

- html代码
```html
<div id="range">
    <div class="icon">100*100</div>
</div>
```

- js代码

```js
const main = document.getElementById('range');
const icon = document.querySelector('.icon');
let move = false;
let deltaLeft = 0, deltaTop = 0;

// 拖动开始事件，要绑定在被移动元素上
icon.addEventListener('mousedown', function (e) {
    /*
    * @des deltaLeft 即移动过程中不变的值
    */
    deltaLeft = e.clientX-e.target.offsetLeft;
    deltaTop = e.clientY-e.target.offsetTop;
    move = true;
})

// 移动触发事件要放在，区域控制元素上
main.addEventListener('mousemove', function (e) {
    if (move) {
        const cx = e.clientX;
        const cy = e.clientY;
        /** 相减即可得到相对于父元素移动的位置 */   
        let dx = cx - deltaLeft
        let dy = cy - deltaTop

        /** 防止超出父元素范围 */
        if (dx < 0) dx = 0
        if (dy < 0) dy = 0
        if (dx > 500) dx = 500
        if (dy > 300) dy = 300
        icon.setAttribute('style', `left:${dx}px;top:${dy}px`)
    }
})

// 拖动结束触发要放在，区域控制元素上
main.addEventListener('mouseup', function (e) {
    move = false;
    console.log('mouseup');
})
```

### 2. canvas绘制文本框，并实现鼠标将其拖拽移动到任意位置

- css 代码

```css
.cus-canvas{
    background: rgb(50, 204, 243);
}

.input-ele{
    display: none;
    position: fixed;
    width: 180px;
    border: 0;
    background-color: #fff;
}
```

- html 代码
```html
<div>
    <canvas id="canvas" class="cus-canvas"  width="800" height="600"></canvas>
    <input id="inputEle" class="input-ele"/>
</div>
```

- js代码

实现原理为记录鼠标移动的位置，不断的重绘矩形框和文本内容

```js
let mouseDown = false;
let deltaX = 0;
let deltaY = 0;
let text = 'hello'
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const cw = canvas.width, ch = canvas.height;
const rect = {
    x: 20,
    y: 20,
    width: 150,
    height: 50
}

/** 设置文字和边框样式 */
ctx.font="16px Arial";
ctx.fillStyle = "#fff"; 
/** 设置为 center 时，文字段的中心会在 fillText的 x 点 */
ctx.textAlign = 'center';
ctx.lineWidth = '2';
ctx.strokeStyle = '#fff';

strokeRect()

const inputEle = document.getElementById('inputEle');
inputEle.onkeyup =  function(e) {
    if(e.keyCode === 13) {
        text = inputEle.value
        strokeRect()
        inputEle.setAttribute('style', `display:none`)
    }
}

canvas.ondblclick = function(e){ 
    inputEle.setAttribute('style', `left:${e.clientX}px;top:${e.clientY}px;display:block`);
    inputEle.focus();
}

canvas.onmousedown = function(e){ 
    /** 获取视口左边界与canvas左边界的距离 加上 鼠标点击位置与canvas左边界的长度，这个值是相对移动过程中不变的值 */
    deltaX=e.clientX - rect.x;
    deltaY=e.clientY - rect.y;
    mouseDown = true
};  

const judgeW = cw-rect.width, judgeH = ch-rect.height;

canvas.onmousemove = function(e){ 
    if(mouseDown) {
        /** 相减即可获得矩形左边界与canvas左边界之间的长度 */
        let dx = e.clientX-deltaX; 
        let dy = e.clientY-deltaY; 
        if(dx < 0) {
            dx = 0;
        } else if (dx > judgeW) {
            dx = judgeW;
        }
        if(dy < 0) {
            dy = 0;
        } else if(dy > judgeH) {
            dy = judgeH;
        }
        rect.x = dx;
        rect.y = dy; 
        strokeRect()
    }
};  
canvas.onmouseup = function(e){ 
    mouseDown = false
};  

/** 清除指定区域 */
function clearRect() {
    ctx.clearRect(0, 0, cw, ch)
}

/** 画矩形 */
function strokeRect() {
    clearRect()

    /** 这里如果不调用 beginPath 历史的矩形会重新被绘制 */
    ctx.beginPath() 
    ctx.rect(rect.x, rect.y, rect.width, rect.height)
    ctx.stroke();
    // 设置字体内容，以及在画布上的位置
    ctx.fillText(text, rect.x + 70, rect.y + 30);
}
```

> 欢迎交流 [Github](https://github.com/WarrenHewitt/blog/issues)