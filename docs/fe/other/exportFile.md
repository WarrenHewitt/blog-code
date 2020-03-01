## 导出 Excel、PDF

### 下载图片

### 导出 Excel

https://www.cnblogs.com/youryida/p/9275615.html

// 两种方式导出的不同格式的excel在wps中没有问题，但是在office的excel中都有问题

// var tableHtml='<html><head><meta charset="UTF-8"></head><body><table><tr><td>only one</td></tr></table></body></html>';
// //base64 URL形式文件下载
// var oa = document.createElement('a');
// oa.href = 'data:application/vnd.ms-excel;base64,'+window.btoa(tableHtml);
// oa.download = 'htmltable-base64.xls';//通过A标签 设置文件名
// oa.click();

// var tableHtml='5656565';
// var excelBlob = new Blob([tableHtml], {type: 'text/plain'});
// var oa = document.createElement('a');
// oa.href = URL.createObjectURL(excelBlob);
// oa.download = 'htmltable-blob.doc';
// document.body.appendChild(oa);
// oa.click();


// 只能打印纯文字  只能在wps中打开，且代开会提示有乱码
const foo = 'nihao </br> dakoa';
const blob = new Blob([JSON.stringify(foo)], {type: "text/html"});
const fileName = `${new Date().valueOf()}.doc`;
const link = document.createElement('a');
link.href = window.URL.createObjectURL(blob);
link.download = fileName;
link.click();


https://parall.ax/products/jspdf

导出pdf
