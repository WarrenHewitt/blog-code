(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{263:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bat-和-sh-语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bat-和-sh-语法"}},[t._v("#")]),t._v(" .bat 和 .sh 语法")]),t._v(" "),e("h2",{attrs:{id:"bat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bat"}},[t._v("#")]),t._v(" .bat")]),t._v(" "),e("p",[t._v("bat文件是dos下的批处理文件")]),t._v(" "),e("blockquote",[e("p",[t._v("更多命令： https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands")])]),t._v(" "),e("p",[t._v("执行bat文件： 在bat文件所在目录，打开命令行输入 xxx.bat 如果是 powershell ./xxx.bat")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("echo")]),t._v(" 其有回声的意思；功能类似 print， 回显当前命令，并换行输出 echo 后面的字符")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("echo off")]),t._v(" 其之后的所有命令都不在命令行输出显示，只输出结果；但不会关闭自身的回显，可在其前面加 @")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("echo on")]),t._v(" 与 echo off 相反")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("@")]),t._v(" 加在每个命令行的最前面，表示运行时不显示这一行的命令行")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("call")]),t._v(" 调用批处理文件（防止直接调用其它批处理文件执行完毕后，无法执行当前文件下的后续代码）")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("pause")]),t._v(" 暂停，输入任意键后继续")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("rem")]),t._v("  注释")])])]),t._v(" "),e("h3",{attrs:{id:"实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),e("ul",[e("li",[t._v("进入某个文件夹执行命令")])]),t._v(" "),e("p",[t._v("方式一：(相关代码演示："),e("code",[t._v("/node-koa仓库下/batTest")]),t._v(")")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@ echo off\ncd test\nnode test.js\n")])])]),e("p",[t._v("方式二： (完整代码演示 "),e("code",[t._v("/blog-notes仓库下/python.md")]),t._v(")")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('@echo off\nstart cmd /k "cd C:\\Users\\XXX\\Desktop\\getIP && python ip.py"\n')])])]),e("h2",{attrs:{id:"sh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sh"}},[t._v("#")]),t._v(" sh")]),t._v(" "),e("p",[t._v("实例查看当前项目的根目录下 deploy.sh 文件")]),t._v(" "),e("p",[t._v("Shell 脚本（shell script），是一种为 shell 编写的脚本程序")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("windows 下执行 .sh 文件 可以用 git bash 执行 ./xx.sh 来运行")])]),t._v(" "),e("li",[e("p",[t._v("分号为代码块标识")])]),t._v(" "),e("li",[e("p",[t._v("&& 左边返回真后右边代码才会执行")])])]),t._v(" "),e("h3",{attrs:{id:"命令替换"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#命令替换"}},[t._v("#")]),t._v(" 命令替换")]),t._v(" "),e("p",[t._v("输出结果暂时保存,在适当的地方输出")]),t._v(" "),e("p",[t._v("执行的命令用其包裹")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$() 和 ``\n\n# `` 嵌套时需要转义\n\n# $() 不是所有的 shell 都能使用\n\n")])])]),e("ul",[e("li",[e("strong",[t._v("赋值语句两边不能有空格")])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('#! /bin/sh   #!告诉系统该脚本需要什么解释器来执行  可以不跟内容，也可以引用其它解释器路径\nname=hew  右边若有空格的话，需要加上引号（单引号或双引号都是可以的）\necho $name  用$获取变量值\n\n# 获取工作目录\n# pwd (print name of current/working directory)\ndir="$(pwd)"\n# 返回/e/practice\n\ndir="$0"\n# 返回 ./gitT/a.sh\n\ndir="$(dirname "$0")"\n# 返回 ./gitT\n\n# 获取绝对地址\ndir=$(cd "$(dirname "$0")";pwd)\nDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"\n\n一下两项操作,一般写在 shell 代码逻辑之前\nset -x 会在执行每一行 shell 脚本时，把执行的内容输出来\nset -e  会在执行出错时结束程序，就像其他语言中的“抛出异常”一样  \n')])])])])}),[],!1,null,null,null);s.default=n.exports}}]);