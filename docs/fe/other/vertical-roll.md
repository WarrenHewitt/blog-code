## 元素内容垂直方向循环滚动

- 方式一：只做内容循环滚动显示，没有交互
[在线演示codepen](https://codepen.io/Hewitt/pen/zYGoRop) 

---

- 方式二：有鼠标悬浮停止滚动，点击事件交互
[在线演示codepen](https://codepen.io/Hewitt/pen/YdjLwN)


原理及实现方式如下：

### 方式一

### css 代码
```css
.vertical-scroll{height:300px;overflow: hidden;}
/* 防止内容中的margin样式影响高度获取 */
.vs-content{ padding: 1px 0; }
```

#### html代码
```html
<div class="vertical-scroll">
    <div class="vs-content">
        <div>content</div>
        <img class="imgTag" src="https://cdn.pixabay.com/photo/2020/02/18/06/25/harvest-4858574_960_720.jpg" alt="no">
    </div>
</div>
```


#### js代码
```js
function setScrollAnimate() {
    /**
     * 滚动原理：将 .vs-content(视口，其高度要小于内容高度) 复制一份，将两份内容垂直排列，同时利用 css animation translateY 向上移动，
     * 当移动距离达到一个内容的高度，两个元素再同时复位到原始位置，以此重复循环（ps：被复制的内容不会在视口中完整的滚动显示一次，因为其顶部到达视口顶部时，
     * 刚好两个元素都滑动一个内容高度，此时非复制内容的顶部复位到了视口顶部，刚好与复制内容复位前一刻位置重合，以此达到循环滚动效果，所以，复制元素不必完整显示）
    */
    const content = document.querySelector('.vs-content');
    document.querySelector('.vertical-scroll').appendChild(content.cloneNode(true));
    /**
     * 获取内容高度
     * 如果内容中有图片一定确保图片加载完成，否则获取内容高度不准确
    */
    const imgEle = document.querySelector('.imgTag');

    imgEle.addEventListener('load', (e) => {
        insertStyle(content.clientHeight)
    })

    function insertStyle(h) {
        /**
         * 这里利用js插入样式的原因是要动态获取类容高度
         * 如果内容高度可以确定，可在style样式中直接写如下内容，不需用js注入
         */
        const t = 20000;
        const eleStyle = document.createElement('style');
        eleStyle.innerHTML = 
            '.vs-content{will-change:transform;animation: scrollAnimate '+ t +'ms linear infinite;}'+
            '@keyframes scrollAnimate{from{transform: translateY(0);}to{transform: translateY(-'+h+'px);}}';
        document.querySelector('head').appendChild(eleStyle);
    }
}

setScrollAnimate()
```

### 方式二

#### CSS
```css
ul,li {  padding: 0; margin: 0 }
.roll-box {
      height: 400px;
      background: #007acc;
      overflow: hidden;
      color: #fff;
 }
#roll li {
      height: 30px;
      border-bottom: 1px solid #ddd
}
```

#### HTML
```html
<div class="roll-box">
    <ul id="roll">
    </ul>
</div>
```

#### JS
```js
function getData() {
    var htmlStr = '';
    for (var i = 0; i < 20; i++) {
        htmlStr += '<li id="i-' + i + '">' + 'this is ' + i + '</li>'
    }

    return htmlStr;
}

(function roll() {
    var UL_HEIGHT = 400, LI_HEIGHT = 30;

    var ulObj = document.getElementById('roll');
    ulObj.innerHTML = getData();

    var height = ulObj.offsetHeight;
    var move = 0, oneSteep = 0.5;
    var clearIn = '', mouseOut = true;

    // 添加鼠标操作相关事件
    ulObj.addEventListener('mouseenter', function () {
        mouseOut = false
    });
    ulObj.addEventListener('mouseleave', function () {
        mouseOut = true
        animationRoll()
    });
    ulObj.addEventListener('click', function (e) {
        if (e.target.nodeName === 'LI') {
            alert('id is:' + e.target.id)
        }
    });

    // 滚动步骤
    // 1.将外部 ul 移动一个li的高度的距离 
    // 2.将移出的li元素放到最后，实现循环，并复原ul的移动距离。
    function animationRoll() {
        function moveFn () {
            if (mouseOut) {
                move += oneSteep;
                ulObj.setAttribute('style', 'margin-top:-' + move + 'px');
                if (move >= LI_HEIGHT) {
                    move = 0;
                    ulObj.setAttribute('style', 'margin-top:-' + move + 'px');
                    var temp = ulObj.children[0];
                    ulObj.removeChild(temp)
                    ulObj.appendChild(temp)
                }
                clearIn = window.requestAnimationFrame(moveFn)
            } else {
                window.cancelAnimationFrame(clearIn)
            }
        }
        window.cancelAnimationFrame(clearIn)
        clearIn = window.requestAnimationFrame(moveFn)
    }

    if (height > UL_HEIGHT) {
        animationRoll()
    } else {
        console.log(ulObj.offsetHeight);
    }
})()
```

> 欢迎交流 [Github](https://github.com/WarrenHewitt/blog/issues)