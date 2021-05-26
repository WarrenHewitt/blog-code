[[toc]]
[toc]

## ajax

```javascript
function ajaxFn() {
    // IE5,6用 new ActiveXObject('Microsoft.XMLHTTP');
    var xhr=new XMLHttpRequest();
    /* 所有的浏览器都支持该事件 */
    xhr.onreadystatechange=function(){//这个事件函数放在哪里都可
        if(xhr.readyState===4){//针对open方法可以调用并且接受了全部响应数据
            if(xhr.status===200){//响应的http状态
                console.log(xhr.responseText);
            }
        }
    };
    /* 可以用onload替代上面的onreadystatechange */
    xhr.onload=function(){
        // 处理取回的数据(在 xhr.response 中找到)
    }
    xhr.timeout = 2000; // 超时时间，单位是毫秒(设置的超时值，在请求头中不显示)
    
    /* @des get方式 */
    xhr.open('get','https://aa.cc.com/api',true); // true表示异步,当设置为同步时，一旦发出，后续的所有代码不再执行，等待接口返回
    xhr.send(null);//将请求发送到服务器

    /* @des post方式 */
    xhr.open('post', '.com/api',true);
    xhr.setRequestHeader('Content-type','application/json'); 
    xhr.setRequestHeader('Auther','hewitt'); 
    xhr.send(JSON.stringify(data));

    /* @des 设置返回值的格式 */
    // xhr.responseType = 'json';
} 
```
status 200表示成功，304表示 资源没有修改可以直接使用浏览器缓存

必须在调用open()方法之后且调用send()方法之前调用setRequestHeader()


## fetch

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

## 将对象转换为query String所需格式

```js
function objectToQueryString(obj) {
    const arr = [];
    Object.keys(obj).forEach(key => {
        if(obj[key]) arr.push(`${key}=${obj[key]}`)
    })
    return arr.join('&')
}
```

## 一维数组和二维数组相互转换

```js
/* 一维数组转二位数组 */
function oneDimensionalToTwo(array, length) {
    if(!array.length || !length || array.length < length) return array
    const newArr = []
    let j = -1
    for (let i = 0; i < array.length; i++) {
        if(i%length === 0) {
            j++
            newArr[j] = []
        }
        newArr[j].push(array[i])
    }
    return newArr
}

/* 一维数组转二位数组 */
// 参考 js 笔记中的 flat 方法
```


## 批量动态插入元素
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

## time format 时间格式化
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

    const dateString = `${y}${dateSeparator}${addZeroCharacter(mon)}${dateSeparator}${addZeroCharacter(day)}`
    const timeString = `${addZeroCharacter(h)}${timeSeparator}${addZeroCharacter(m)}${timeSeparator}${addZeroCharacter(s)}`

    const commandObj = {
        dateTimeZh: () => {
            return `${y}年${addZeroCharacter(mon)}月${addZeroCharacter(day)}日 ${addZeroCharacter(h)}时${addZeroCharacter(m)}分${addZeroCharacter(s)}秒`
        },
        date: () => dateString,
        time: () => timeString,
        dateTime: () => `${dateString} ${timeString}`
    }

    return commandObj[type]()
}

/**
 * 转换为中文日期格式
 * t 格式为 2020-03-13 13:36:02
*/
function timeZh(t) {
    var str = t.slice(0,4) + '年'
    str += t.slice(5,7) + '月'
    str += t.slice(8,10) + '日 '
    str += t.slice(11,13) + '时'
    str += t.slice(14,16) + '分'
    str += t.slice(17) + '秒'
    return str;
}

/**
 * 返回今天星期几
*/
function weekZh() {
    const week = new Date().getDay()
    const map = new Map([[0, '日'], [1, '一'],[2, '二'],[3, '三'],[4, '四'],[5, '五'],[6, '六']])
    return `星期${map.get(week)}`;
}

/**
 * 返回上午下午
*/
function timeNowPeriodZh() {
    const now = new Date()
    const hour = now.getHours() 
    let str = ''
    if (hour < 12){
        str='上午'
    } else if (hour < 14){
        str = '中午'
    } else if (hour < 18){
        str = '下午'
    } else if (hour < 23){
        str = '晚上'
    } 
    return str
}

/* 返回当前月份的前n个月组成的数组 */
const getMonth = (n = 0, separator = '-') => {
    const time = new Date()
    let y = time.getFullYear()
    let m = time.getMonth()

    const ym = () => (`${y}${separator}${m}`)
    const allM = [ym()]

    for (let i = 0; i < n; i++) {
        m--
        if (m === 0) {
            y--
            m = 12
        }
        allM.push(ym())
    }
    return allM
}
```

## 浏览器全屏
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

## 浏览器类别和版本

```js
/**
 * @return [浏览器名称, 版本]
*/
function browserInfo() {
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return ['msie', (tem[1] || '')];
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'opera').split(' ');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return [M[0].toLocaleLowerCase(), Number(M[1])];
}
```


## 复制内容

### 简单实现
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

复制粘贴时带上作者等信息
```js
// copy、cut、paste 事件
document.body.oncopy = e => {
    /*
        clipboardData对象:用于访问以及修改剪贴板中的数据
        getData()、setData()、clearData()
    */
    e.preventDefault(); 
    let clipboardData = (e.clipboardData || window.clipboardData); // 兼容处理
    copyContent = window.getSelection(0).toString()
    combineContent = `${copyContent} \n 作者：warren \n 时间：2020-08-03 \n`
    if (e.clipboardData) {
        return clipboardData.setData('text/plain', combineContent)
    } else {
        // IE
        return window.clipboardData.setData("text/plain", combineContent);
    }
}
```


### 使用插件 clipboard.js

https://github.com/zenorocha/clipboard.js

## 形如 'a.b.c' 的方式获取对象值

```js
 const getObjectValue = (data,path) => {
    try {
        return path.split('.').reduce((result, current) => result[current], data)
    } catch {
        return undefined
    }
}
```

## 递归

### 简单的深拷贝,包含数组和对象的值
```js
const deepCopy = (beCopied) => {
    /* 拷贝数组 */ 
    if(beCopied instanceof Array) {
        const arr = []
        for (let i = 0; i < beCopied.length; i++) {
            if(typeof beCopied[i] === 'object') {
                arr[i] = deepCopy(beCopied[i])
            } 
            arr[i] = beCopied[i]
        }
        return arr
    } else if (typeof beCopied === 'object') {
        /* 拷贝对象 */ 
        const obj = {}
        for (let key in beCopied) {
            if(typeof beCopied[key] === 'object') {
                obj[key] = deepCopy(beCopied[key])
            } else {
                obj[key] = beCopied[key]
            }
        }
        return obj
    } else {
        return beCopied
    }
}
```


### 遍历树
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

const loopTree = (data, level) => {
    const tempArr = [];
    data.forEach(v => {
        const tempObj = {}
        tempObj.id = v.id
        tempObj.label = `new ${v.label}-level:${level}`
        if (v.children && v.children.length) {
            tempObj.list = loopTree(v.children, level+1)
        }
        tempArr.push(tempObj)
    })
    return tempArr
}

console.log(loopTree(tree, 0));
```

## 判断数组内容是否相同

当前只针对简单的基础类型数组值判断
```js
const equalArray = (arr1, arr2) => {
    if(!(arr1 instanceof Array) || !(arr2 instanceof Array)) return false
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) { 
        if(!arr2.includes(arr1[i])) return false
    }
    return true
}
```

## 滑动到页面指定位置

- 返回顶部按钮

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
            behavior: 'smooth'
        });
    })
})()
```

- 滑动到页面底部

```js
function scrollToPageBottom(){
    var s = document.body.scrollHeight || document.documentElement.scrollHeight;
    var c = window.innerHeight;
    var px = s-c; // 表示滑到底部
    if(window.scrollTo) {
        window.scrollTo({
            top: px,
            behavior: "smooth"
        });
    } else {
        document.body.scrollTop = document.documentElement.scrollTop = px;
    }
}
```

- 任意元素滑动到页面顶部

```js
function backToTop(element) {
    var v = element.getBoundingClientRect().top+window.pageYOffset
    if(/msie/i.test(navigator.userAgent)) {
        window.scrollTo(0,v)
    } else {
        window.scroll({
            top: v,
            behavior: 'smooth'
        })
    }
}
```

## 保留小数点后N位

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
        /** 非严格的四舍五入（具体查看 笔记 => javascript toFixed说明） */
        number = number.toFixed(2)
        return number;
    }
    console.error('请输入Number类型');
    return false;
}
```

## 将中文数字转为数字

```js
function zhToNumber(str) {
    var zhNumber = { '零': 0, '一': 1, '二': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9 }
    var zhLevel = { '十': 10, '百': 100, '千': 1000, '万': 10000, '亿': 100000000 }

    var count = 0
    /* 亿或万前面的一段数字 */
    var tempNum = 0
    var len = str.length
    for (let i = 0; i < len; i++) {
        var current = str[i]
        if(current === '零') continue
        /* 只有亿和万前面可以包含许多级数字，所以以它们两个来分段划分数字 */
        if(current === '万' || current === '亿') {
            /* 把前面一段数字乘以对应的单位 */
            count += tempNum * zhLevel[current]
            tempNum = 0
        } else {
            var next = str[i+1]
            if (next && next !== '万' && next !== '亿') {
                tempNum +=  zhNumber[current] * zhLevel[next]
                i++
            } else {
                /* 下一位不存在或是万或亿的情况 */
                tempNum += zhNumber[current]
            }
        }
    }
    return count + temp
}
zhToNumber('四十二亿九千四百九十六万七千二百零九')
```

## 获取随机颜色 16进制 rgb rgba模式

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
        /** 16777215 (2的24次方) 转换为16进制是 ffffff 所以用 16777216 保证能取到白色 */
        const color = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
        /** 这里填充的值随意设置  防止位数不够的情况 */
        return color.padEnd(7, 'f');
    }
}
```

## 简单生成随机字符串

```js
function randomStr() {
    return Math.random().toString(32).slice(2)
}
```

或者使用 uuid 插件  参考插件 [uuid](https://warrenhewitt.github.io/blog/other/plugin.html)

## 检测用户是否打开了控制台

```js
function checkOpenDevTool() {
    let element = document.createElement('div');
    Object.defineProperty(element, 'id', {
        get: function () {
            window.location.href = 'https://www.baidu.com'
        }
    });
    // 原理为开发者工具会自动读取元素id的特性  针对chrome 72 以上版本
    // debug 输出的信息不会显示，只有在打开显示级别在verbose的情况下，才会显示
    console.debug(element);
}
```