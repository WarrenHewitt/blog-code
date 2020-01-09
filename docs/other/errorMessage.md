# 报错信息总结

- axios net::ERR_BLOCKED_BY_CLIENT  (检查是否广告插件拦截)

- cannot find global value 'promise'.ts2468 (修改ts配置文件的 target 值为 es6)

# 服务端报错信息
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

## svn

报错： Previous operation has not finished; run 'cleanup' if it was interrupted

执行命令 `svn cleanup` 如果被拒绝，查看是否有文件没有关闭