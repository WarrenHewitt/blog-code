## div 方式实现

```
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

<div id="range">
    <div class="icon">100*100</div>
</div>

const main = document.getElementById('range');
const icon = document.querySelector('.icon');
let move = false;
let deltaLeft = 0, deltaTop = 0;

icon.addEventListener('mousedown', function (e) {
    /*
    * @des deltaLeft 即移动过程中不变的值
    */
    deltaLeft = e.clientX-e.target.offsetLeft;
    deltaTop = e.clientY-e.target.offsetTop;
    move = true;
})

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

main.addEventListener('mouseup', function (e) {
    move = false;
    console.log('mouseup');
})
```


## canvas实现

```
<canvas id="canvas" className="cus-canvas"  width="1300" height="600"></canvas>

let mouseDown = false;
let deltaX = 0;
let deltaY = 0;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const cw = canvas.width, ch = canvas.height;
const rect = {
    x: 20,
    y: 20,
    width: 200,
    height: 100
}

// const canvasLeft = canvas.getBoundingClientRect().left;

/** 画矩形 */
ctx.rect(rect.x, rect.y, rect.width, rect.height)
ctx.stroke();

// ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);

// ctx.font="30px Arial";
// ctx.fillText("这是文字",10,50);

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
        clearRect()
        strokeRect()
    }
};  
canvas.onmouseup = function(e){ 
    mouseDown = false
};  

/** isPointInPath 方法不支持 fillRect(),strokeRect() */
console.log(ctx.isPointInPath(20, 20))


// setTimeout(() => {
//     /** 这里如果不调用 beginPath 历史的矩形会重新被绘制 */
//     ctx.beginPath() 
//     ctx.rect(rect.x +100, rect.y+100, rect.width, rect.height)
//     ctx.stroke();
// }, 4000)

function clearRect() {
        /** 清除指定区域 */
    ctx.clearRect(0, 0, cw, ch)
}

function strokeRect() {
    ctx.beginPath() 
    ctx.rect(rect.x, rect.y, rect.width, rect.height)
    ctx.stroke();
}
```

### 移动端
```css
 body{margin:0;overscroll-behavior-y: contain;}
.draw-board {
    width: 100%;
    height: 300px;
    background-color: rgb(213, 252, 245);
}
```

```html
<canvas id="drawBoard" class="draw-board" height="300px"></canvas>
<div>
    <button onclick="handleClear()">清除</button>
</div>
```

```js
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
canvas.addEventListener('touchstart', function(e) {
    sx = e.touches[0].clientX - cl;
    sy = e.touches[0].clientY - ct;
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