### 移动端 画板实现
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