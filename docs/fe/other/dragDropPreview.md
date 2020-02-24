[toc]

# 元素拖拽移动与拖拽文件上传及预览
> created at 2019-08-05

- 测试环境： win 10, chrome 76.0.3809.87

- [codepen在线演示](https://codepen.io/Hewitt/pen/WVXMgb)

## 所有代码与讲解

### html代码
```html
<h3>拖拽元素</h3>
<div class="drag-drop-container">
    <div class="drag" id="drag" draggable="true">被拖拽元素设置draggable="true"</div>
    <!-- 放置被拖拽元素 -->
    <div class="drop"></div>
</div>

<h3>拖拽上传文件</h3>
<div class="drop-file" id="dropFile"></div>

<h3>两种图片预览方式</h3>
<div id="dropResult"></div>
```

### js代码
```js
/*
  @des 元素拖动代码
*/
const dragEle = document.querySelector('#drag');
/* @des 放置区必须设置 ondragover和 ondrop 事件 */
const dropEle = document.querySelector('.drop');

dragEle.addEventListener('drag', function (event) {
    console.log('drag');
    event.preventDefault();
})

dropEle.addEventListener('drop', function (event) {
    console.log('drop', event.target.className);
    event.preventDefault();
    if (event.target.className === 'drop') {
        event.target.appendChild(document.getElementById(event.dataTransfer.getData('dragId')));
        /* @des 如下代码为直接获取在dragstart设置的html字符串 */
        // event.target.innerHTML = event.dataTransfer.getData('ele');
    }
})

/* 
 @des 设置拖拽时的图标,dataTransfer.setDragImage(img, xOffset, yOffset); 
 这里的img对象要先设置，如果在事件中设置无效，图片加载不及时
*/
const img = new Image();
img.src = './101.png';

dragEle.addEventListener('dragstart', function (event) {
    console.log('drag start');
    /* 
        @des 可以在开始拖拽事件中设置一些数据项，数据的类型为MIME，示例如下 
        event.dataTransfer.setData('text/plan', 'id value')
        event.dataTransfer.setData('text/html', ' <div class="drag-box">123456</div>')
        text/uri-list，Text，
        设置的键值也可以是其它任意变量名（a，b，c等）
        .....
    */
    event.dataTransfer.setData('dragId', event.target.id);
    event.dataTransfer.setData('ele', '<em>你好</em>');
    event.target.style.opacity = 1;
    event.dataTransfer.setDragImage(img, 10, 10);

    /*
        @des 设置拖动模式,copy,move,link
    */
    event.dataTransfer.dropEffect = "copy";
})

dropEle.addEventListener('dragover', function (event) {
    console.log('drag over');
    event.preventDefault();
})

dragEle.addEventListener('dragend', function (event) {
    console.log('drag end');
    event.target.style.opacity = '';
})

dragEle.addEventListener('dragenter', function (event) {
    event.preventDefault();
    console.log('drag enter');
})

/* 
    @des 拖动上传文件代码 
*/
const dropFile = document.querySelector('#dropFile');

dropFile.addEventListener('dragover', function (event) {
    event.preventDefault();
})
dropFile.addEventListener('drop', function (event) {
    // 一定要禁用浏览器默认事件，不然会在新窗口打开文件
    event.preventDefault()
    const file = event.dataTransfer.files;
    console.log(file);
    const reader = new FileReader();

    /* @des text 文本不能与图片文件一同上传，否则回报busy reading Blobs */
    for (let i = 0; i < file.length; i++) {
        /* @des 处理文件为text文本 */
        if(/txt/.test(file[i].name)) {
            reader.readAsText(file[i], 'utf-8');
            reader.onload = function(e) {
                const preEle = document.createElement('pre');
                preEle.innerHTML = e.target.result;
                document.querySelector('#dropResult').appendChild(preEle);
            }
        }
        /* @des 第一种预览图片方式 */
        if(/(jpg|png)/.test(file[i].name)) {
            reader.readAsDataURL(file[i])
            console.log(file[i]);
            reader.onload = function(e) {
                const imgEle = document.createElement('img');
                imgEle.src = e.target.result;
                document.querySelector('#dropResult').appendChild(imgEle);
            }
        }
        /* @des 第二种预览图片方式 */
        if(/(jpeg)/.test(file[i].name)) {
            const imgEle = document.createElement('img');
            const url = window.URL.createObjectURL(file[i]);
            imgEle.src = url;
            document.querySelector('#dropResult').appendChild(imgEle);
        }
    }
})
```

### css代码
```css
h3 {
    padding: 5px;
    border-left: 3px solid rgb(190, 189, 189);
    color: rgb(161, 161, 161);
    background-color: rgb(231, 231, 231);
}

.drag-drop-container {
    color: #fff;
    text-align: center;
}

.drag {
    display: inline-block;
    width: 360px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: rgb(40, 198, 247);
}

.drop {
    margin: 10px auto;
    width: 360px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: rgb(8, 130, 245)
}

.drop-file {
    margin: 10px auto;
    width: 300px;
    height: 300px;
    border: dotted 1px rgb(201, 200, 200);
    background-color: rgb(248, 248, 248);
}
#dropResult{
    text-align: center;
}
#dropResult img{
    margin: 10px;
    width: 100px;
}
```

参考:
- [拖拽](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/URL)

> 欢迎交流 [Github](https://github.com/WarrenHewitt/blog/issues)

