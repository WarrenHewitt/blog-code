[[toc]]
[toc]

## 介绍

Nginx 是介于客户端与服务端的

> 特点：
    1. 稳定性极强, 7*24小时不间断运行
    2. 丰富的配置示例
    3. 占用内存小，并发能力强（50000以上并发）

tomcat 150个并发


## 安装

windows 安装： 

- 下载，解压到任意目录，进入包含 `Nginx.exe` 的目录，打开命令窗口，进入到该目录，运行 `start nginx`

如果启动失败 可以进入 logs 文件夹中的 error.log 文件产看是否有错误原因

启动成功后在任务管理器可以看到 nginx 的进程

- 浏览器访问 `http://127.0.0.1/`  或 `locahost`


其它的一些操作

```
nginx -s stop 立即停止nginx,不保存相关信息

nginx -s quit 正常退出nginx,并保存相关信息

nginx -s reload 重启: 改变了配置等
```

---

## 配置文件

> root 与 alias 的区别:

主要在于怎么解释 location 后面的 url

root的处理结果是：root路径＋location路径

alias的处理结果是：使用alias路径替换location路径 （注意alias后面视情况是否要用 '/' 结束）

示例： 假设访问地址是 /t/x.html
```shell
location /t/ {
    root http://www.xx.xx/   
    # 映射为  http://www.xx.xx/t/x.html

    alias http://www.xx.xx/   
    # 映射为  http://www.xx.xx/x.html
}   
```

---

- 一个 server 块中可以有多个 location

- 更多默认配置和查看新安装的 Nginx 的 nginx.conf 文件

```shell

#user  nobody;
worker_processes  1;
#pid        logs/nginx.pid;


# 以上为全局块 
# worker_processes 数值越大，Nginx 并发能力越强
# error_log  错误日志存放的位置
# pid  一般不用关注  Nginx 运行的标志

events {
    worker_connections  1024;
}

# events块  
# worker_connections 数值越大，Nginx 并发能力越强（这里的数据值一般是运维人员根据服务器来配置， worker_processes 也是如此）


# 以下为http块
# include 引入一个外部的文件 mime.types 里面放着大量的媒体类型

http {
    include       mime.types;
    # 这里是默认使用的媒体类型
    default_type  application/octet-stream;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    gzip on;

    # 禁止IE使用gzip 以免假死
    gzip_disable "MSIE [1-6].";

    # 不压缩小于256字节的文件
    gzip_min_length 256; 

    # gzip_vary on;
    # gzip_proxied any;

    # gzip压缩比，1压缩比最小处理速度最快，9压缩比最大但处理速度最慢(传输快但比较消耗cpu)
    gzip_comp_level 2;
    
    # gzip_buffers 16 8k;
    # gzip_http_version 1.1;

    # 表示压缩的文件类型
    # gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;



    # server块
    # 这里的server块也可以通过 include 方式加载，可将server块独立开来，因为后期主要修改几乎为server块
    server {
        # Nginx 监听的端口号
        listen       80;
        # Nginx接收请求的的域名
        server_name  localhost;

        # location块
        location / {
            # 重定向到指定地址
            # proxy_pass http://localhost:2500/page/one;
            
            # 将接收到的请求，根据 html  这个地址去查找静态资源
            root   html;
            # 默认去上面的路径中查找 index.html 或者 index.htm
            index  index.html index.htm;
        }
    }
}
```

### 关于 location 的路径映射

优先级：

(location = ) > (location /xxx/xx/x) > (location ^~) > (location ~, ~*) > (location /起始路劲) > (location /)

1. `=` 匹配

```shell
location = / {
    # 精准匹配 主机域名后面不能带任何的字符串
}
```

2. 通用匹配
```shell
location /xxx {
    # 匹配所有以 /xxx 开头的路径
}
```

3. 正则匹配
```shell
location ~/xxx {
    # 匹配所有以 /xxx 开头的路径
}
```

4. 匹配开头路径
```shell
location ^~/xxx {
    # 匹配所有以 /xxx 开头的路径
}
```

5. 匹配结尾
```shell
location ~* \.(gif|jpg)$ {
    # 匹配所有以 .gif 或 .jpg 结尾的路径
}
```

## 反向代理

正向代理:
1. 代理服务器是由客户端设立的
2. 客户端了解代理服务器和目标服务器是谁
3. 帮助实现突破访问权限、提高访问速度、对目标服务器隐藏客户端的ip


反向代理:

1. 反向代理服务器放在服务端
2. 客户端不知道访问的是哪一台服务器
3. 达到负载均衡，并且可以隐藏服务器的真正ip


## 负载均衡

根据相应的算法决定请求是发给哪个服务器

处理策略：

1. 轮询
轮流给每一个服务器派发 客户端的请求，平均分配

```shell
upstream myServer {
    # server ip:port;
    server localhost:2500;
    server localhost:1112;
}
server {
    location / {
        proxy_pass http://myServer;
    }
}
```

2. 权重
根据具体的服务器的处理能力，派发客户端的请求

只需加上 weight
```shell
upstream myServer {
    server localhost:2500 weight=10;
    server localhost:1112 weight=2;
}
```

3. ip_hash
对请求ip 进行相关的处理，然后请求指定的服务器，如果ip 不变，请求的服务器将一直不变
```shell
upstream myServer {
    ip_hash;
    # 下面是否加权重与 ip_hash无关
    server localhost:2500 weight=10;
    server localhost:1112 weight=2;
}
```


## 动静分离

动态资源 静态资源 分离

动态资源交给服务器，静态资源自己处理

Nginx 并发能力公式： `worker_processes * worker_connections / (4 | 2)` = 最终并发能力

动态资源除以4（因为多了请求服务器数据和接收服务器数据），静态资源除以2

1. 动态资源代理
```shell
location / {
    proxy_pass  url;
}
```

2. 静态资源代理
```shell
location / {
    root 静态资源路径;
    index  默认访问路径下的什么资源;
    autoindex on; # 表示展示静态资源全部内容 以列表的形式
}

# 存在目录 /static/static 和 /static/image 
# 以下配置生效
location /static {
    root static;
    index index.html;
}

location /image {
    root static;
    autoindex on;
}
```

## 集群

搭建集群后，使用Nginx做反向代理服务器
