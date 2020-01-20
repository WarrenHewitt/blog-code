[toc]

## 公用方法

### ajax

```javascript
function ajaxFn() {
    // IE5,6用 new ActiveXObject('Microsoft.XMLHTTP');
    var xhr=new XMLHttpRequest();
    
    /* @des get方式 */
    xhr.open('get','https://aa.cc.com/api',true);（true表示异步）//规定请求的内容
    xhr.send(null);//将请求发送到服务器

    /* @des post方式 */
    xhr.open('post', '.com/api',true);
    xhr.setRequestHeader('Content-type','application/json'); 
    xhr.send(JSON.stringify(data));

    /* @des 设置返回值的格式 */
    // xhr.responseType = 'json';

    xhr.onreadystatechange=function(){//这个事件函数放在哪里都可
        if(xhr.readyState==4){//针对open方法可以调用并且接受了全部响应数据
            if(xhr.status==200){//响应的http状态
                alert(xhr.responseText);
            }
        }
    };
} 
```
status 200表示成功，304表示 资源没有修改可以直接使用浏览器缓存

必须在调用open()方法之后且调用send()方法之前调用setRequestHeader()


### fetch

```js
fetch('http://localhost:1025/121', {
        /* @des 凭证 */
        credentials:'include',
        headers: { 'Content-Type': 'image/jpeg|application/json' }, 
        method: 'get',
        mode: "cors",
    }).then(function (response) {
        /* @des 必须先返回一个数据格式*/
        // response.formData() || response.json()
        return response.text();
    }).then(function (data) {
        console.log(data);
    })

// 包含cookie:"omit"（默认）,"same-origin"以及"include"
// 默认情况下 fetch不会接受或者发送cookies
```


### 批量动态插入元素
```js
const loopInsert = (element, attribute, parent) => {
    const s = document.createElement(element);
    for (let n = 0; n < attribute.length; n++) {
        s[attribute[n].key] = attribute[n].value;
    }
    document.querySelector(parent).appendChild(s);
};

const attribute = [
    { key: 'href', value: `/a/css/b.css` }
    { key: 'rel', value: `stylesheet` }
];

loopInsert('link', attribute, 'head');

```

### time format 时间格式化
moment.js | Day.js(https://github.com/iamkun/dayjs)
```js
function formatTime(data = {}) {
    const {
        time: time = Date(),
        type: type = 'dateTime',
        dateSeparator: dateSeparator = '-',
        timeSeparator: timeSeparator = ':'
    } = data 
    const timeObj = (typeof time) === 'object' ? time : new Date(time)
    const addZeroCharacter = (n) => n < 10 ? `0${n}` : n

    let y = timeObj.getFullYear(),
        mon = timeObj.getMonth() + 1,
        day = timeObj.getDate(),
        h = timeObj.getHours(),
        m = timeObj.getMinutes(),
        s = timeObj.getSeconds();
    let re = ''

    const dateString = `${y}${dateSeparator}${addZeroCharacter(mon)}${dateSeparator}${addZeroCharacter(day)}`
    const timeString = `${addZeroCharacter(h)}${timeSeparator}${addZeroCharacter(m)}${timeSeparator}${addZeroCharacter(s)}`

    const commandObj = {
        date: () => dateString,
        time: () => timeString,
        dateTime: () => `${dateString} ${timeString}`
    }

    return commandObj[type]()
}

function formatTime() {
    var timeObj = new Date();
    var y = timeObj.getFullYear(),
        mon = timeObj.getMonth() + 1,
        day = timeObj.getDate(),
        h = timeObj.getHours(),
        m = timeObj.getMinutes(),
        s = timeObj.getSeconds();

    if(mon < 10) mon = '0' + mon
    if(day < 10) day = '0' + day
    if(h < 10) h = '0' + h
    if(m < 10) m = '0' + m
    if(s < 10) s = '0' + s

    return y + '-' + mon + '-' + day + ' ' + h + ':' + m + ':' + s;
}
```

### 浏览器全屏
```js
function fullScreen() {
    // 方法必须放到用户触发的事件里面  
    e.click(function(){  
        document.documentElement.webkitRequestFullScreen();  
        document.webkitExitFullScreen();//退出全屏  
    })  
    // 除了opera不加前缀，还有moz；ie暂不支持；  
    // IE中用  
    function a(){  
        var b=new ActiveXObject("Wscript.shell");  
        b.sendKeys("{F11}");  
    }  
    a()
}
```

### 复制内容

#### 简单实现
```html
<textarea cols="20" rows="10" id="content">用户定义的代码区域</textarea>
<input type="button" onClick="copy()" value="点击复制代码" />
```

```js
function copy() {
    var ele = document.getElementById('content');
    ele.select(); 
    document.execCommand('copy');
    alert('已复制，可贴粘');
}
```

#### 使用插件 clipboard.js

https://github.com/zenorocha/clipboard.js

### 递归遍历树
```js
const tree = [
    {
        id: 1,
        label: '一级 1',
        children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
                id: 9,
                label: '三级 1-1-1'
            }, {
                id: 10,
                label: '三级 1-1-2'
            }]
        }]
    }, {
        id: 2,
        label: '一级 2',
        children: [{
            id: 5,
            label: '二级 2-1'
        }, {
            id: 6,
            label: '二级 2-2'
        }]
    }, {
        id: 3,
        label: '一级 3',
        children: [{
            id: 7,
            label: '二级 3-1'
        }, {
            id: 8,
            label: '二级 3-2'
        }]
    }]

const loopTree = (data) => {
    const tempArr = [];
    data.forEach(v => {
        const tempObj = {}
        tempObj.id = v.id
        tempObj.label = `new ${v.label}`
        if(v.children && v.children.length) {
            tempObj.list = loopTree(v.children)
        }
        tempArr.push(tempObj)
    })
    return tempArr
}

console.log(loopTree(tree));
```

### 返回顶部按钮

```js
(function() {
    var divEle = document.createElement('div');
    var style = 'cursor:pointer;position:fixed;width:60px;height:60px;background:rgba(210,210,210,.5);bottom:30%;right:10%;text-align:center;line-height:60px;color:#fff;border-radius:50%';
    divEle.setAttribute('style', style);

    divEle.innerHTML = 'Top';
    document.body.append(divEle)

    divEle.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
})()
```

### 保留小数点后N位

```js
/**
 * @param { number: Number } 要处理的数
 * @param { n: Number } 保留的小数点位数
*/
function afterDecimalPoint(number, n){
    if(typeof number === 'number') {
        const digit = Math.pow(10, n);
        /** 严格的四舍五入 */
        number = Math.round(number * digit)/digit;
        /** 非严格的四舍五入（具体查看toFixed说明） */
        number = number.toFixed(2)
        return number;
    }
    console.error('请输入Number类型');
    return false;
}
```

### 获取随机颜色 16进制 rgb rgba模式

```js
/**
 * type：可以为 rgb rgba 默认不传，表示返回6位16进制
*/
function randomColor(type){
    if(/rgb/.test(type)) {
        const getVal = () => {
            /** 这里使用256的原因同下 */
            return Math.floor(Math.random() * 256);
        }
        const a = Math.random().toFixed(1);
        let rgba = `rgba(${getVal()}, ${getVal()}, ${getVal()}`;
        if(/rgba/.test(type)) rgba += `, ${a})`
        return rgba;
    } else {
        /** 16777215 转换为16进制是 ffffff 所以用 16777216 保证能取到白色 */
        const color = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
        /** 这里填充的值随意设置 */
        return color.padEnd(7, 'f');
    }
}
```