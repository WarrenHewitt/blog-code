## canvas 和 svg 相关使用说明

### canvas
- 默认背景色为透明 

- canvas 绘制的宽高不受css样式控制，要直接在标签上给设置，或是获取到canvas标签对象(canvasObj)，再设置(canvasObj.width = 1000)

- getContext() 方法返回一个用于在画布上绘图的环境；现在只有“2d”;

- 渐变的效果发生在所规定的坐标之间，之外的就会用相应的纯色填充。

- .save()和.restore()之间定义的方法或定义只作用于他们之间

- 判断点是否在矩形内 ctx.isPointInPath(20, 20) 方法不支持 fillRect(),strokeRect()

- ctx.lineCap='round'; 线条条末端线帽的样式

- ctx.lineJoin='round'; 线条边角，折角的类型

- canvasElement.toDataURL(type, encoderOptions); 
```
返回：一个包含图片展示的 Data URLs(data:[<mediatype>][;base64],<data>)
type: 默认为 image/png
encoderOptions: 当图片格式为 image/jpeg 或 image/webp时，可从 0 到 1 的区间选择图片的质量。超出范围，取默认值0.92。
```

- 绘制文本：
```js
ctx.font='16px Arial'; // 与css的font属性一致，这里要设置字体
ctx.fillStyle="#FF0000"; // 可以是颜色，渐变，图片
ctx.fillText('Hello World!',50,50);
```

- ctx.drawImage()：将图片绘制到canvas上
```
注意图片是否已经加载完毕
参数：
1. (Element, 相对画布x位置, 相对画布y位置)
2. (Element, 相对画布x位置, 相对画布y位置, 图宽, 图高)
3. (Element, 图像x位置，图像y位置,裁切图的宽度，裁切图的高度,相对画布x位置，相对画布y位置,图宽，图高)
```

- Path2D 用于复制重用路径
```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var path1 = new Path2D();
path1.rect(10, 10, 100,100);
var path2 = new Path2D(path1);
path2.moveTo(220, 60);
ctx.stroke(path2);
```

- 设置宽高
```
window.addEventListener("resize", ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}, false);
```

- #### canvas 转图片

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle='#36fde4';
ctx.fillRect(0, 0 , canvas.width, canvas.height)

ctx.beginPath()
ctx.strokeStyle='#fff';
ctx.moveTo(0,0)
ctx.lineTo(150,150)
ctx.lineTo(300,0)
ctx.stroke()

ctx.font='20px Arial'
ctx.fillStyle='#fff';
ctx.fillText('这是签名',115,50);
/**
    1. 这一步放入启动的服务中测试，否则会报错：canvas没有toDataURL方法
    2. canvas 设置的 css 样式 不会被输出
*/
const dataURL = canvas.toDataURL('image/png')
var imgEle = document.createElement('img')
imgEle.src = dataURL
document.body.appendChild(imgEle)
```

### svg

```html
<svg width="900" height="600" version="1.1" xmlns="http://www.w3.org/2000/svg" style="background-color: rgb(5, 216, 216);">
    <!-- x:矩形左上角的x位置 y:矩形左上角的y位置 rx:圆角的x方位的半径 ry:圆角的y方位的半径 -->
    <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="2"/>
    <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="2"/>
    
    <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="2"/>
    <ellipse cx="75" cy="75" rx="20" ry="2" stroke="red" fill="transparent" stroke-width="2"/>
    
    <!-- 标注起点，终点的坐标 -->
    <line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="2"/>
    <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145, 300 300" stroke="orange" fill="transparent" stroke-width="2"/>
    <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180" stroke="green" fill="transparent" stroke-width="2"/>
    
    <path d="M20,230 Q40,205 50,230 T90,230" fill="red" stroke="blue" stroke-width="2"/>

    <!-- 大写表示绝对位置，小写表示相对位置（相对的是上一个绘画结束点） -->
    <!-- H V 表示在上一个绘制结束点，向水平或垂直方向延伸到指定x位置或y位置 -->
    <path d="M110 20, L 120 40, H 200, V 200" fill="none" stroke="white" stroke-width="2"/>

    <!-- Z 表示连接起点与终点 -->
    <path d="M 120 60, L 120 100, L 160 100, Z" fill="pink" stroke="pink" stroke-width="2"/>
    <!-- 
        A 参数：
        1. 水平方向半径(椭圆的其中一个半径)，会根据终点位置进行自动比例换算 
        2. 垂直方向半径 
        3. 弧线所在椭圆绕x轴旋转角度 
        4. 1表示大角度弧线 0表示小角度弧线 
        5. 1表示从起点到终点弧线绕中心顺时针 0表示逆时针 
        6. 终点x 
        7. 终点y 
    -->
    <path d="M 310 100, L 310 5, A 700 700 0 0 0 580 100" fill="green" stroke="pink" stroke-width="2"/>

    <!-- C 三次贝塞尔曲线: 贝塞尔第一个控制点xy坐标 贝塞尔第二个控制点xy坐标 终点xy坐标 -->
    <path d="M 300 220, L 300 150, C 310 190 390 210 450 220" fill="orange" stroke="pink" stroke-width="2"/>

    <!-- S 在上一个贝塞尔曲线后连接贝塞尔曲线构成完整光滑曲线: 贝塞尔第二个控制点xy坐标 终点xy坐标  这里的第一个控制点自动为上一个贝塞尔曲线的第二个控制点的对称点-->
    <path d="M 0 310 ,C 25 360 75 360 100 310 ,S 175 260 200 310" fill="orange" stroke="pink" stroke-width="2"/>
    
    <!-- Q 二次贝塞尔曲线: 控制点xy坐标 终点xy坐标 -->
    <path d="M 0 380 ,Q 60 450 120 380" fill="orange" stroke="pink" stroke-width="2"/>

    <!-- T 在前一个二次贝塞尔曲线后追加一个二次贝塞尔曲线，构成完整光滑曲线: 追击的终点xy坐标 -->
    <path d="M 0 500 ,Q 60 530 120 500 T 240 500" fill="orange" stroke="pink" stroke-width="2"/>
</svg>
```

### echarts

其它一些用法说明参考 vue-admin => src => views => thirdPartService => chart

- 可以用 `elemetDOM.removeAttribute('_echarts_instance_')`  移除元素与echarts的绑定