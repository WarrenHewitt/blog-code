[toc]

# markdown
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

用户配置说明

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
    "eslint.enable": true,
    "eslint._legacyModuleResolve": true,
    "eslint.alwaysShowStatus": true,
    // 在保存时自动修复
    "eslint.autoFixOnSave": true,
    // 使如下语言生效
    "eslint.validate": [ 
        "javascript",
        "javascriptreact",
        "html",
        { "language": "vue", "autoFix": true }
    ],
    // 地址中为双斜线
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",

    // 装了插件后可以不配置
    "markdown.styles": [
        "C:\\Program Files (x86)\\Microsoft VS Code\\github.css"
    ],

    // 拼写检测支持vue文件
    "cSpell.enabledLanguageIds": [
        "vue"
    ],

    // Path intellisense 识别路径中的特殊符号，以便于给出子目录提示
    "path-intellisense.mappings": {
		"@": "${workspaceRoot}/src"
    },
}
```

## 插件迁移

使用 setting sync 插件

插件主要步骤如下：
- 上传配置
1. 基本同下

- 下载已有的gist配置
1. ctrl+shift+p 输入 sync 选择 reset 
2. ctrl+shift+p 输入 sync 选择 download 会要求登录，点击登录github即可(目的是获取token)
3. ctrl+shift+p 输入 sync 选择 advance options ->继续选择setting， 输入gist id (打开对应gist，在url上可找到)（）
4. 重复上面的步骤2

## snippets

共享也是用setting sync

- 位置 C:\Users\hewei\AppData\Roaming\Code\User\snippets

- 自定义 
https://code.visualstudio.com/docs/editor/userdefinedsnippets

ctrl+shift+p => configure user snippets => 选择对应的语言进行编写

body用数组，每一项的值表示一行代码

.vue文件中写的js代码片段还是要写到JavaScript.json中，而不是写到vue.json中

---

- ctrl+d 选中当前单词 连续操作可选中下一个相同单词

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


### bottom-anchor

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