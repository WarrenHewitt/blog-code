[[toc]]
[toc]

# node 删除和复制文件或文件夹

> 创建时间：2019-08-12

> 注意：在win10，v10.16.1 环境运行无问题

---

首先引入相关包(会在使用处具体说明)：
```js
const fs = require('fs')
const path = require('path')
const child_process = require('child_process')
const fsEx = require('fs-extra')
/**
 * @des 该包为实验性API
 */
const fsPromises = require('fs').promises
```

## 对文件的操作

### 复制文件

这里列出三种方式：
1. 使用 writeFileSync 和 readFileSync 结合
2. 使用 copyFileSync
3. 使用promises的copyFile方法

其中的同步或异步方法可酌情更改，实现代码如下
```js
/**
 * @param { copiedPath: String } (被复制文件的地址，相对地址)
 * @param { resultPath: String } (放置复制文件的地址，相对地址)
 */
function copyFile(copiedPath, resultPath) {
    copiedPath = path.join(__dirname, copiedPath)
    resultPath = path.join(__dirname, resultPath)

    try {
        /**
         * @des 方式一
         */
        // fs.writeFileSync(resultPath, fs.readFileSync(copiedPath))
        /**
         * @des 方式二
         */
        // fs.copyFileSync(copiedPath, resultPath)
        console.log('success');
    } catch (error) {
        console.log(error);
    }
    /**
     * @des 方式三
     */
    fsPromises.copyFile(copiedPath, resultPath)
        .then(() => {
            console.log('success');
        }).catch((err) => {
            console.log(err);
        });
}
```

### 删除文件

使用 `unlinkSync` 方法，实现代码如下
```js
/**
 * @param { delPath：String } （需要删除文件的地址）
 * @param { direct：Boolean } （是否需要处理地址）
 */
function deleteFile(delPath, direct) {
    delPath = direct ? delPath : path.join(__dirname, delPath)
    try {
        /**
         * @des 判断文件或文件夹是否存在
         */
        if (fs.existsSync(delPath)) {
            fs.unlinkSync(delPath);
        } else {
            console.log('inexistence path：', delPath);
        }
    } catch (error) {
        console.log('del error', error);
    }
}
```

## 对文件夹(目录)的操作

以下代码有引用，复制文件相关方法

### 复制文件夹

使用了两种方式：
1. child_process
2. 递归的读取文件和文件夹再在指定地址创建

实现代码和释意如下：
```js
/**
 * @des 参数解释同上
 */
function copyFolder(copiedPath, resultPath, direct) {
    if(!direct) {
        copiedPath = path.join(__dirname, copiedPath)
        resultPath = path.join(__dirname, resultPath)
    }

    function createDir (dirPath) {
        fs.mkdirSync(dirPath)        
    }

    if (fs.existsSync(copiedPath)) {
        createDir(resultPath)
        /**
         * @des 方式一：利用子进程操作命令行方式
         */
        // child_process.spawn('cp', ['-r', copiedPath, resultPath])

        /**
         * @des 方式二：
         */
        const files = fs.readdirSync(copiedPath, { withFileTypes: true });
        for (let i = 0; i < files.length; i++) {
            const cf = files[i]
            const ccp = path.join(copiedPath, cf.name)
            const crp = path.join(resultPath, cf.name)  
            if (cf.isFile()) {
                /**
                 * @des 创建文件,使用流的形式可以读写大文件
                 */
                const readStream = fs.createReadStream(ccp)
                const writeStream = fs.createWriteStream(crp)
                readStream.pipe(writeStream)
            } else {
                try {
                    /**
                     * @des 判断读(R_OK | W_OK)写权限
                     */
                    fs.accessSync(path.join(crp, '..'), fs.constants.W_OK)
                    copyFolder(ccp, crp, true)
                } catch (error) {
                    console.log('folder write error:', error);
                }

            }
        }
    } else {
        console.log('do not exist path: ', copiedPath);
    }
}
```

### 删除文件夹

递归文件和文件夹，逐个删除

实现代码如下：
```js
function deleteFolder(delPath) {
    delPath = path.join(__dirname, delPath)

    try {
        if (fs.existsSync(delPath)) {
            const delFn = function (address) {
                const files = fs.readdirSync(address)
                for (let i = 0; i < files.length; i++) {
                    const dirPath = path.join(address, files[i])
                    if (fs.statSync(dirPath).isDirectory()) {
                        delFn(dirPath)
                    } else {
                        deleteFile(dirPath, true)
                    }
                }
                /**
                * @des 只能删空文件夹
                */
                fs.rmdirSync(address);
            }
            delFn(delPath);
        } else {
            console.log('do not exist: ', delPath);
        }
    } catch (error) {
        console.log('del folder error', error);
    }
}
```

## 执行示例

### 目录结构
```
|- index.js(主要执行代码)
|- a
    |- a.txt
    |- b.txt
|- c
    |- a.txt
    |- b.txt
|- p
    |- a.txt
    |- b.txt
```

根据传入的参数不同，执行相应的方法

```js
/**
 * @des 获取命令行传递的参数
 */
const type = process.argv[2]

function execute() {
    /**
     * @des 请根据不同的条件传递参数
     */
    if (type === 'copyFile') {
        copyFile('./p/a.txt', './c/k.txt')
    }

    if (type === 'copyFolder') {
        copyFolder('./p', './a')
    }

    if (type === 'delFile') {
        deleteFile('./c/ss.txt')
    }

    if (type === 'delFolder') {
        deleteFolder('./a')
    }
}

execute()
```

### 命令行传参数
```js
/**
 * @des 命令行传参
 * 执行 node ./xxx/index.js 111 222
 * 输出：
 * 0: C:\Program Files\nodejs\node.exe
 * 1: G:\GitHub\xxx\xxxx\index.js
 * 2: 111
 * 3: 222
 */
process.argv.forEach((val, index) => {
   console.log(`${index}: ${val}`);
});
```

## 利用 fs-extra 实现

> 这是对fs相关方法的封装，使用更简单快捷

```js
/**
 * @des fs-extra 包实现
 * api参考: https://github.com/jprichardson/node-fs-extra
 */

function fsExtra() {
    async function copy() {
        try {
            await fsEx.copy(path.join(__dirname + '/p'), path.join(__dirname + '/d'))
            console.log('success');
        } catch (error) {
            console.log(error);
        }
    }

    copy()
}
```

可执行源码： [github 链接](https://github.com/WarrenHewitt/node-koa/tree/master/practice/moveFileOrFloder)

> 欢迎交流 [Github](https://github.com/WarrenHewitt/blog/issues)
