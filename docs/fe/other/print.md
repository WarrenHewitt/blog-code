
> 2020-02-19 | chrome 79.0.3945.130 测试无问题  未做兼容测试

原理为调用 `window.print()` 方法，但是该方法只能对当前页面全部打印，所以有了以下方案来解决局部打印

1. 利用 iframe 将需要打印的元素和样式注入 再调用打印
```js
// 示例代码
function print () {
    let ifElement = document.getElementById('ifId')
    const addHtmlPrint = () => {
        const content = ifElement.contentWindow || ifElement.contentDocument
        content.document.body.innerHTML = this.detailTable
        const styleEle = document.createElement('style')
        /* 
          * 去掉打印时的页头和页脚
        */
        styleEle.innerHTML = '@media print {@page { margin: 0mm 10mm; }  添加其它样式}'
        content.document.getElementsByTagName('head')[0].appendChild(styleEle)

        /* 保障 iframe 中资源加载完成，图片要用 img 形式引入 */
        /* 如果没有动态加载新内容 或有兼容问题，可以去掉 onload 直接调用 print */
        ifElement.onload = () => {
            content.print()
        }
    }
    this.getDetailTable()

    if (ifElement) {
        // 删除的原因是，复用会影响，插入iframe中的onload事件
        document.body.removeChild(ifmEle)
    }
    ifElement = document.createElement('iframe')
    ifElement.setAttribute('id', 'ifId')
    ifElement.setAttribute('style', 'display:none')
    document.body.appendChild(ifElement)

    addHtmlPrint()
}

/* 当连续打印时需要做延时处理，防止后一个覆盖前一个打印 */
let i = 0
const executeFn = () => {
    list[i]()
    i++
    if (i < list.length) {
        setTimeout(() => {
            executeFn()
        }, 2000)
    }
}

executeFn()
```

2. 利用 @media print，在当前页面设置打印操作时需要隐藏的元素
```css
@media print{
    /* 这里将不需要打印的元素设置为不显示 */
    .hidden-element{
        display:none;
        /* visibility:hidden; */
    }
    /*纸张设置为宽1200px 高800px*/
    @page{
        size:1200px 800px;
    }
}
```

---

- `<link href="/example.css" media="print" rel="stylesheet" />`  标注打印时才会采用的样式

- 监听打印事件 `window.addEventListener('beforeprint|| afterprint', ()=> {});`

最后推荐一个插件：`https://printjs.crabbly.com/#documentation`


> 欢迎交流 [Github](https://github.com/WarrenHewitt/blog/issues)