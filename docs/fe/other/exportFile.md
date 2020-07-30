## 导出Excel、PDF和下载图片

> 创建时间： 2020-03-16；测试：chrome v80.0.3987.122 正常 

### 导出 Excel （利用xlsx）

- 安装 xlsx 引入包 `import XLSX from 'xlsx/dist/xlsx.mini.min.js';`

实现原理：将其描述表格的 JSON 按照电子表格的协议转换为为压缩的 zip 字符，再通过一系列方法将其转换为 Blob URL;(相关原理代码如下)

```js
function blobify(strData) {
    var buf = new ArrayBuffer(strData.length), view = new Uint8Array(buf);
    for (var i=0; i!=strData.length; ++i) view[i] = strData.charCodeAt(i) & 0xFF;
    return buf;
}
var excelBlob = new Blob([blobify(data)], {type:"application/octet-stream"});
var blobURL=URL.createObjectURL(excelBlob);
```

一些说明
```js
var workbook = XLSX.readFile('test.xlsx');
// 将一个 worksheet 添加到 workbook
var ws_name = "SheetJS";
/* make worksheet */
var ws_data = [
  [ "S", "h", "e", "e", "t", "J", "S" ],
  [  1 ,  2 ,  3 ,  4 ,  5 ]
];
var ws = XLSX.utils.aoa_to_sheet(ws_data);

// s 意为 start ，即开始的单元格
// e 意为 end ，即结束的单元格
// r 是 row ，表示行号，从 0 计起
// c 是 col ，表示列号，从 0 计起

// !ref"表示显示的范围，例：A1到E3

/* Add the worksheet to the workbook */
XLSX.utils.book_append_sheet(wb, ws, ws_name);

var wb = XLSX.utils.book_new()  // 返回 { SheetNames: [], Sheets: {} };

// SheetNames excel表格的 sheet 名称列表
// Sheets excel表格的对应 sheet 内容列表
```

相关业务实现代码如下：

```js
exportData = () => {
    /**
     * @des 生成excel
     * @param { Array } data ([[name, score],['hew', 80]]) 
     * @param { String } name 表格名称
     */
    const fn = (data, name) => {
        name = name || 'table';
        /** 设置文件名以及格式, 默认xlsx */
        const filename = /\./.test(name) ? name : `${name}.xlsx`;
        /** Excel第一个sheet的名称 */
        const wsName = 'sheet'; 
        const newBook = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(data);
        /** 将数据添加到工作薄 */
        XLSX.utils.book_append_sheet(newBook, ws, wsName);  
        XLSX.writeFile(newBook, filename);
    }

    fn([
        ['h1','h2','h3', 'h4'], 
        [1,2,3,4],
        [true, false, null, 5],
        [true, false, null, '中文'],
    ], '表格')
}
```

详细实现demo  参考 react-admin -> third -> sheetJS

### 导出PDF 

#### 利用打印

- 在浏览器弹出的打印页面，点击选择目标打印机，选择另存为PDF

####  引入 jspdf 和 html2canvas

`import * as jsPDF from 'jspdf'`

`import html2canvas from 'html2canvas';`
html2canvas 原理是读取DOM，并根据规则在画布上绘制，但部分css样式是无法实现的

- 主要代码

```js
 html2canvas(document.querySelector('.need-pdf')).then((canvas) => {
    let canvasWidth = canvas.width
    let canvasHeight = canvas.height
    // a4纸的尺寸[595.28,841.89]
    let pageHeight = canvasWidth / 592.28 * 841.89
    let imgWidth = 595.28
    let imgHeight = 592.28 / canvasWidth * canvasHeight
    let pageData = canvas.toDataURL('image/jpeg', 1.0)

    let pdf = new jsPDF('', 'pt', 'a4')
    if (canvasHeight < pageHeight) {
        // 参数说明：图片数据，格式，距左边距，距上边距，图宽，图高，...(其它参数)  这里的单位都和上面创建pdf实例时一致
        pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight)
    } else {
        // 分页操作，以下操作方式较为粗糙，分页处直接分割内容 
        let theRestHeight = canvasHeight;
        let y = 0;
        while (theRestHeight > 0) {
            // 原理是将同一张图放在不同页面，但上移不同的距离，实现分页
            pdf.addImage(pageData, 'JPEG', 0, y, imgWidth, imgHeight)
            theRestHeight -= pageHeight
            y -= 841.89
            if (theRestHeight > 0) {
                pdf.addPage()
            }
        }
    }
    pdf.save('table.pdf')
})
```



### 下载图片

- 利用 a 标签

IE存在兼容问题，必须是同源图片(非同源会在新标签页打开)，download属性值要跟图片格式
```html
<a href="xxx" alt="no" download="new-name.jpg">下载图片</a>
```

```js
const downloadFile = (url, download) => {
    const aEle = document.createElement('a')
    aEle.setAttribute('href', url)
    aEle.setAttribute('download', download || 'name')
    document.body.appendChild(aEle)
    aEle.click()
}
```

- 如果是放 cdn 或是 图片服务器（服务器也要设置允许跨域）

```js
const canvasEle = document.createElement('canvas');
const ctx = canvasEle.getContext('2d');

const imgEle = new Image();
imgEle.setAttribute('crossOrigin', 'anonymous'); 
imgEle.onload = function() {
    canvasEle.width = this.width;
    canvasEle.height = this.height;
    ctx.drawImage(this, 0 , 0, this.width, this.height);

    const aEle = document.createElement('a');
    aEle.setAttribute('href', canvasEle.toDataURL('image/jpeg'));
    aEle.setAttribute('download', 'cross.jpg');
    aEle.click();
}
imgEle.src = 'xxx.jpg';
```

- 利用 ajax 请求，要求也是同上，只是不需要兼容 crossOrigin
```js
function dl() {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var url = URL.createObjectURL(this.response);
        var img = new Image();
        img.onload = function () {
            const aEle = document.createElement('a');
            aEle.setAttribute('href', canvasEle.toDataURL('image/jpeg'));
            aEle.setAttribute('download', 'cross.jpg');
            aEle.click();
            // 释放内存
            URL.revokeObjectURL(url);
        };
        img.src = url;
    };
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.send();
}
```

> 欢迎交流 [Github](https://github.com/WarrenHewitt/blog/issues)