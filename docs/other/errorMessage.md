## 报错信息总结

- axios net::ERR_BLOCKED_BY_CLIENT  (检查是否广告插件拦截)

- cannot find global value 'promise'.ts2468 (修改ts配置文件的 target 值为 es6)

- [Vue Warn]: Error compiling template  在模板中出现了 script 标签 应该将其放到模板外 

- 利用push 跳转路由，当重复点击跳转同一个路由地址, 提示错误 NavigationDuplicated 

解决方法：（在后续版本会修复）
```js
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    /* 添加 catch 不向上抛出错误 */
    return originalPush.call(this, location).catch(err => err)
}
```

- `%E2%80%8B` 一个看不见的字符 ZERO-WIDTH SPACE 如果出现在了url中会导致接口 404


## 服务端报错信息
- 403 权限访问此站，服务器收到请求但拒绝提供服务
- 502： bad gateway 错误的网关

- 400：
```
1、bad request 意思是 "错误的请求"；
2、invalid hostname 意思是 "不存在的域名"。

可能为客户端错误请求导致，如请求数据问题，如post的body没传(注意这里不是传空)
```

- 415：
```
不支持的媒体类型
1. 可能是user-agent 被拒绝（爬虫）
2. 请求方式与服务端提供的不一致，比如服务端get，客户端用post请求
3. 添加请求类型 content-type
```

- throw er; // Unhandled 'error' event ：请检测是否为端口被占用
- EADDRINUSE : 给定的地址已经被使用
## git

- fatal: unable to access 'https://github.com/WarrenHewitt/blog.git/': OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443

检查是否是开了代理

- cannot lock ref 'HEAD': unable to resolve reference 'refs/heads/master': reference broken 或是在push的时候电脑重启，导致git文件损毁

解决办法：在新的文件夹下重新拉取该项目，将拿到的 .git 文件替换到项目中

## svn

报错： Previous operation has not finished; run 'cleanup' if it was interrupted

执行命令 `svn cleanup` 如果被拒绝，查看是否有文件没有关闭

## vscode

vetur 1261 :  File name … differs from already included file name … only in casing ；保证自己文件引用没有错后，将vscode重启一下
