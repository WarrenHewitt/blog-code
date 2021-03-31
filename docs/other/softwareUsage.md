[toc]

# markdown 语法

| 居左 | 居右 | 居中 |
| :- | -: | :-: |
| aaaaaaaa  | bbbbbbbb | cccccccc |
```
| 居左 | 居右 | 居中 |
| :- | -: | :-: |
| aaaaaaaa  | bbbbbbbb | cccccccc |
```
---

[跳转到指定标题](#bottom-anchor) 
`[跳转到指定标题](#bottom-anchor)`

# vscode

安装路径： C:\Users\hewei\AppData\Local\Programs\Microsoft VS Code


## `jsconfig.json` 文件配置

https://code.visualstudio.com/docs/languages/jsconfig  示例参考 /vue-admin

文件所在目录下的所有js代码做出个性化支持

- 可以排除 `node_modules` 文件夹 提升性能

- 让vscode可以识别webpack配置的别名，这样可完成文件跳转配置

配置完成后要重启一下当前vscode项目

> 示例在 `vue-admin` 项目中

---

## 用户配置说明

settings.json（可用setting sync共享）
```json
{
    // 定义 VSCode 的显示语言
    // 请参阅 https://go.microsoft.com/fwlink/?LinkId=761051，了解支持的语言列表
    // 更改此值需要重启 VSCode
    "locale":"en-US",
    "workbench.colorTheme": "Monokai",
    //eslint 配置解释可以setting查看
    "editor.fontSize": 15,
    /* 改为在setting中设置 */
    "eslint.enable": true,
    "eslint._legacyModuleResolve": true,
    "eslint.alwaysShowStatus": true,
    // 在保存时自动修复
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
        "source.fixAll.eslint": true
    },
    // 使如下语言生效
    "eslint.validate": [ 
        "javascript",
        "javascriptreact",
        "html",
        "vue",
    ],
    // 地址中为双斜线
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",

    // 装了插件后可以不配置
    "markdown.styles": [
        "C:\\Program Files (x86)\\Microsoft VS Code\\github.css"
    ],

    // 拼写检测支持vue文件
    "cSpell.enabledLanguageIds": [
        "vue",
        "html"
    ],

    // Path intellisense 识别路径中的特殊符号，以便于给出子目录提示
    "path-intellisense.mappings": {
		"@": "${workspaceRoot}/src"
    },

    // vue-helper Element-UI, VUX, IVIEW  扩展  以及组件、函数文件跳转
    "vue-helper.alias": {
        "@": "src/*"
    }
}
```

## 快捷键

- ctrl+d 选中当前单词 连续操作可选中下一个相同单词


## 插件

### 插件使用

- ESLint ： 代码风格校验

- Live Server：启动一个本地服务，访问相关 html 文件

- Setings Sync：插件同步，查看下面的 插件迁移 介绍

- Draw.io：画流程图插件

- svg viewer：svg 图片查看

- vetur：vue 插件

- EditorConfig for Visual Studio Code  设置代码规范

- code spell checker: 检查拼写 注意添加要检测的文件 "cSpell.allowCompoundWords": true  允许使用一些网络单词

### 插件迁移

使用 setting sync 插件

安装后 按说明 先使用 github 登录，再进行以下操作

插件主要步骤如下：
- 上传配置
1. 基本同下

- 下载已有的gist配置
1. ctrl+shift+p 输入 sync 选择 reset 
2. ctrl+shift+p 输入 sync 选择 download 会要求登录，点击登录github即可(目的是获取token)
3. ctrl+shift+p 输入 sync 选择 advance options ->继续选择setting， 输入gist id (打开对应gist，在url上可找到)（）
4. 重复上面的步骤2

- 更新
1. ctrl+shift+p 输入 sync 选择 update/upload  根据提示操作即可 

## snippets

共享也是用setting sync

- 位置 C:\Users\hewei\AppData\Roaming\Code\User\snippets

- 自定义 
https://code.visualstudio.com/docs/editor/userdefinedsnippets

ctrl+shift+p => configure user snippets => 选择对应的语言进行编写

body用数组，每一项的值表示一行代码

.vue文件中写的js代码片段还是要写到JavaScript.json中，而不是写到vue.json中

---
**Ctrl+P**

- 直接输入文件名，快速打开文件

- ? 列出当前可执行的动作  相当于帮助

- ! 显示Errors或Warnings，也可以Ctrl+Shift+M

- : 跳转到行数，也可以Ctrl+G直接进入

- @ 跳转到symbol（搜索变量或者函数），也可以Ctrl+Shift+O直接进入

- @:根据分类跳转symbol，查找属性或函数，也可以Ctrl+Shift+O后输入:进入

- `#` 根据一级标题二级标题查找，markdown标题，也可以Ctrl+T


# shadowsocks

monocloud 添加pac：在安装目录中找到pac.txt 在rules数组中加入网址 "||google.com"


# photoshop cc
1. 官网下载
2. 登录安装
3. 在百度云下载补丁
4. 断网替换(C:\Program Files\Adobe\Adobe Photoshop CC 2019/Photoshop.exe)
5. 结束

# intelliJ

## 快捷键

| 键                    | 功能 |
| - | - |
| ctrl + d              | 复制当前行或选中的内容 |
| Ctrl + n              | 根据输入的类名查找类文件 |
| ctrl  + shift  上下键 | 移动当前行 |
| alt   + shift  上下键 | 移动当前行 |
| shift + enter         | 向下换行 |
| ctrl  + alt   + enter | 向上换行 |
| ctrl  + x 或 ctrl + y | 删除当前行 |

- 生成 Getter Setter 重写 toString() 方法， 菜单栏 => code -> Generate 或是 右键 -> Generate

## 激活(推荐用社区版)

- 微信公众号 “读书写诗” 或 百度网盘/intellij/压缩包，查看里面readMe使用

---

# Chrome
## DevTools
- Network: 查看gzip原始文件大小，将鼠标悬浮到 size 上 
- Performance: 解析 JS、计算样式、重绘等页面加载等
- Memory: 页面 JS 对象和相关联的 DOM 节点的内存分布情况
- Security: 检测当面页面的安全性
- LightHouse：对页面的加载进行分析，然后给出性能的建议

- 类比 ：$ document.querySelector $$ document.querySelectorAll


实验性功能： `chrome://flags/`

## 插件

插件列表 `chrome://extensions/`

## 快捷键

- ctrl + shift + D 切换控制台显示位置
- ctrl + [ 和 ctrl + ] 切换面板
- f6 将焦点锁定到地址栏
- ctrl + n 打开新窗口。 
- ctrl + t 打开新标签页
- ctrl + 1 2 3  ... 跳转不同标签
- alt + 左右箭头 返回上一页下一页

# github 页面快捷键

常用：

- T 检索文件
- L 跳转到代码指定行
- S 或 /  搜索框获得焦点

# MobaXterm
- 创建session

    - 选择 Session 

    - 选择 SSH

    - 输入 Remote host ； 勾选 Specify username 并输入 账号

    - 点击 ok ；双击 创建的 session 然后输入密码 （这里会提示输入一个密码保存，可以随便设置一个，保存记住即可）

    - 找到对应的文件夹替换文件，完成上线

---

1. 给session 加上备注

编辑 session 选择 Bookmark settings

修改 Session name

2. 同步命令行和Sftp的地址

编辑 session 选择 Advanced SSH settings  勾选 Follow SSH path

