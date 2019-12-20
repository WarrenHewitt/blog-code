---
title: GitHub Hexo 搭建纯前端博客页面
date: 2019-12-20 13:23:30
tags:
---


## 搭建过程

前置条件：有github账号，会创建github page；了解node；了解git；

1. 安装 【参考 `https://hexo.io/zh-cn/docs/`】 
   - 先安装 git 与 node
   - 不用先全局安装 hexo , 直接初始化项目 `npx hexo init anyName`  进入初始化的文件, `npm i` 安装包

2. 查看 package.json 中的scripts下的命令，运行 `npm run server` 即可在浏览器查看默认内容与主题
 
3. 配置根目录下的 `_config.yml`， 注意修改添加如下内容
```
url: https://warrenhewitt.github.io/blog/ 这个地址是创建的 github page 地址
root: /blog/ 要加上该二级目录

deploy:
  type: git
  repo: https://github.com/WarrenHewitt/blog.git 当前hexo生成的内容需要上传到的github仓库地址，即上面创建的github page的仓库地址
  branch: master
```

4. 配置本地git 用户信息

```
git config --global user.name 'username'
git config --global user.email 'email'
```

5. 生成SSH 
```
1. `cd ~/.ssh` : 查看用户根目录是否有 ssh 文件

2. `ssh-keygen` ：生成 密钥 SSH key

3. github创建SSH在setting中，title随意填即可，key值来源查看第四步

4. 第二步中会生成一个文件，并会打印文件地址(一般是C:\Users\Administrator\.ssh\id_rsa.pub)，其内容为github创建SSH的key所需内容（或是使用cat ~/.ssh/id_rsa.pub将文件内容打印到命令行，复制即可）

5. 测试是否与github连接正常 ssh -T git@github.com  出现 Hi .... 即成功
```

6. 运行 `npm run deploy` 目的是将hexo生成的内容推送到指定github仓库【参考：https://hexo.io/zh-cn/docs/one-command-deployment 】

7. 打开创建的 github page，查看效果即可


## Hexo 一些常规操作



