# .bat 和 .sh 语法

## .bat

bat文件是dos下的批处理文件

> 更多命令： https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands

执行bat文件： 在bat文件所在目录，打开命令行输入 xxx.bat 如果是 powershell ./xxx.bat

- `echo` 其有回声的意思；功能类似 print， 回显当前命令，并换行输出 echo 后面的字符

- `echo off` 其之后的所有命令都不在命令行输出显示，只输出结果；但不会关闭自身的回显，可在其前面加 @

- `echo on` 与 echo off 相反

- `@` 加在每个命令行的最前面，表示运行时不显示这一行的命令行

- `call` 调用批处理文件（防止直接调用其它批处理文件执行完毕后，无法执行当前文件下的后续代码）

- `pause` 暂停，输入任意键后继续

- `rem`  注释

### 实例
- 进入某个文件夹执行命令

方式一：(相关代码演示：`/node-koa仓库下/batTest`)

```
@ echo off
cd test
node test.js
```

方式二： (完整代码演示 `/blog-notes仓库下/python.md`)
```
@echo off
start cmd /k "cd C:\Users\XXX\Desktop\getIP && python ip.py"
```

## sh

Shell 脚本（shell script），是一种为 shell 编写的脚本程序

文档：https://www.runoob.com/linux/linux-shell.html

- windows 下执行 .sh 文件 可以用 git bash 执行 ./xx.sh 来运行


```
#! /bin/sh   #!告诉系统该脚本需要什么解释器来执行  可以不跟内容，也可以引用其它解释器路径
name=hew  赋值语句两边不能有空格  右边若有空格的话，需要加上引号（单引号或双引号都是可以的）
echo $name  用$获取变量值


一下两项操作,一般写在 shell 代码逻辑之前
set -x 会在执行每一行 shell 脚本时，把执行的内容输出来
set -e  会在执行出错时结束程序，就像其他语言中的“抛出异常”一样  
```