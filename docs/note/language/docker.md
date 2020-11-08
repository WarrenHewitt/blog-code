- centeos 安装 docker `https://docs.docker.com/engine/install/centos/` 

如果提示 containerd 提示版本过低 `https://download.docker.com/linux/` 下载最新版的 containerd.io 和其它的一些 docker 资源

示例下载： `dnf install -y https://download.docker.com/linux/centos/8/x86_64/stable/Packages/containerd.io-1.3.7-3.1.el8.x86_64.rpm`

centos  重启后 需要重启 docker  `systemctl start docker.service | service docker start`

---

- 镜像：是由一系列的只读的层构建，每一层对应DockerFile里面的声明构成

- 容器： 与镜像的唯一区别在于容器的最上面那一层是可读可写的

- 启动 docker 服务  `service docker start`

- `systemctl restart docker`  重启docker服务,systemctl命令它实际上将 service 和 chkconfig 这两个命令组合到一起

当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载，默认是从 Docker Hub 公共镜像源下载

- `docker inspect containerName|containerID` 查看容器配置信息

- `docker images` 查看本机的镜像

- `docker ps` 查看容器 `-a` 查看所有容器 包括未运行的

- `docker pull nginx:latest` 安装 Nginx 镜像： 

- `docker start|stop|restart containerName` 启动|关闭|重启容器  

- `docker kill -s KILL containerName` 杀掉一个运行中的容器 并向容器发送一个信号  

- `docker build ./ -t imageName:1.0.0` 利用 Dockerfile 创建镜像 -t 后，表示打的标签  name:tag 或者 name 格式  **tag 不写默认为 latest**

基于路径./（当前路径）打包一个镜像，镜像的名字是 imageName ，版本号是1.0.0。会自动寻找Dockerfile来打包出一个镜像

- `docker create  --name containerName imageName:tag` 使用镜像 imageName 创建一个容器 并命名为 containerName

- `docker run --name containerName -d imageName:tag` ：创建一个容器,以后台模式启动,并命名为 containerName

```
-p 80:80 主机(宿主)端口:容器端口 容器端口默认80

-P 容器内部端口随机映射到主机的端口 【在服务器中一定要加上，否则默认的80端口无法访问】

-d 后台运行容器，并返回容器ID；

-v /data:/data    主机的目录 /data 映射到容器的 /data
```

- `docker rm -f containName containName` 强制删除一个或多个容器

- `docker image rm imageName:tag | docker rmi imageName:tag` 强制删除一个或多个容器

## docker 国内镜像

### 命令行

/etc/docker/daemon.json 创建或修改该文件，加如下内容，修改后重启 `systemctl restart docker.service`

```
{
    "registry-mirrors": ["https://almtd3fa.mirror.aliyuncs.com"]
}
```


### 客户端

打开docker桌面端 -> settings -> Docker Engine 添加如下配置

```json
"registry-mirrors": [
    "http://docker.mirrors.ustc.edu.cn",
    "https://almtd3fa.mirror.aliyuncs.com" // 最快
    "http://hub-mirror.c.163.com"
    "https://mirror.ccs.tencentyun.com",
    "http://registry.docker-cn.com",
],
"insecure-registries": [
    "registry.docker-cn.com",
    "docker.mirrors.ustc.edu.cn"
],
```

## docker 安装 nginx

方式一：Dockerfile

```shell
# 使用 Nginx 作为镜像
FROM nginx 

# # 将宿主机中的./index.html文件复制进容器里的 /usr/share/nginx/html/index.html(这个地址是固定的)
COPY ./index.html /user/share/nginx/html/index.html

# 容器对外暴露的端口
# 这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务
# 如果改为 83 也要同步修改 nginx 的默认端口为 83 否则，不会生效
EXPOSE 80 
```

方式二：

`docker run -d --name nginx-a -p 2022:80 -v /home/cicd/nginx/conf.d/default.conf:/etc/nginx/conf.d/default.conf -v /home/cicd/nginx/html:/usr/share/nginx/html -v /home/cicd/nginx/log:/var/log/nginx  nginx:latest`

这里一定都要配置  不然可能无法正常访问

default.conf 简单配置
```
server {
    listen       80;
    server_name  localhost;

    # location块
    location / {
        root   html;
        index  index.html index.htm;
    }
}
```

html 也要提前创建

---

### 宿主机访问虚拟机中的docker容器的服务

ifconfig 中的 docker0： 下的 dockerIP； ens33：下的 服务ip

以管理员运行 cmd 执行： `route -p add dockerIP mask 255.255.0.0 服务IP`  mask 后的掩码，参考 docker0 netmask 后的掩码


### 进入 docker容器

```
docker exec -it 容器id或容器名称  /bin/bash   【表示进入容器的 /bin/bash 目录,固定这个地址进入，否则会报错】

-i 即使没有附加也保持STDIN（标准输入） 打开,以交互模式运行容器，通常与 -t 同时使用；
-t 为容器重新分配一个伪输入终端，通常与 -i 同时使用；

容器中无法使用 vim 在容器中执行以下命令

apt-get update

apt-get install vim

```

退出容器，输入 `exit`

### docker 容器群管理

docker-compose  安装示例 https://docs.docker.com/compose/install/

- docker-compose.yml 配置

```shell
version: '3'  # 这里要查看与 docker engin 对应的版本来修改
services:                                      # 集合
  docker_jenkins:
    user: root                                 # 避免一些权限问题 所以使用了root
    restart: always                            # 重启方式
    image: jenkins/jenkins:latest              # 指定服务所使用的镜像
    container_name: jenkins                    # 容器名称
    ports:                                     # 对外暴露的端口定义
      - 8080:8080
      - 50000:50000
    volumes:                                   # 卷挂载路径
      - /home/jenkins/jenkins_home/:/var/jenkins_home  # 映射 Jenkins 在容器中的文件
      - /var/run/docker.sock:/var/run/docker.sock
      - /usr/bin/docker:/usr/bin/docker                # 为了可以在容器内使用docker命令
      - /usr/local/bin/docker-compose:/usr/local/bin/docker-compose
  docker_nginx:
    restart: always
    image: nginx
    container_name: nginx
    ports:
      - 8090:80
      - 80:80
      - 433:433
    volumes:
      - /home/nginx/conf.d/:/etc/nginx/conf.d
      - /home/webserver/static/jenkins/dist/:/usr/share/nginx/html
```

`docker-compose up -d`  后台创建并运行所有容器


## jenkins 相关

先下载镜像 `docker pull jenkins/jenkins`推荐这个库 jenkins/jenkins 官方维护； jenkins/jenkins:lts 表示长期支持

1. 创建文件夹 `mkdir /var/jenkins_home` 用于映射容器中的文件,也是相当于当前容器的jenkins的安装目录

2. 添加权限 `chown -R 1000 /var/jenkins_home` 目录的拥有者为root用户，而容器中jenkins用户的 uid 为 1000

3. 创建和运行容器： `docker run -d --name containerName -p 2014:8080 -p 2015:50000 -v /var/jenkins_home:/var/jenkins_home jenkins/jenkins:latest`  容器的 8080 和 50000 端口是固定的 映射的 容器地址也是固定的 


浏览器进入 2014端口 ； 如果是虚拟机 ip是 docker的ip

---

- jenkins 插件下载慢处理

    1. 先查找 jenkins 的安装目录下的 default.json 文件 不知道安装目录可以用 `find / -name default.json` 查找

    2. 替换文件中的内容，可以用命令 
    `sed -i 's/www.google.com/www.baidu.com/g' default.json`
    `sed -i 's/updates.jenkins-ci.org\/download/mirrors.tuna.tsinghua.edu.cn\/jenkins/g' default.json`

    3. 重启 jenkins， 安装

- 下载 jenkins 插件

```
# docker exec -it jenkins-tutorials bash
# cd /var/jenkins_home/war/WEB-INF/detached-plugins
# wget http://ftp.icm.edu.pl/packages/jenkins/plugins/cloudbees-folder/6.9/cloudbees-folder.hpi

注意更换版本,在此查看 http://ftp.icm.edu.pl/packages/jenkins/plugins/cloudbees-folder/latest/cloudbees-folder.hpi
```

### 配置 github 相关,实现代码更新，自动构建

1. Jenkins 系统配置 启用Hook URL

2. 配置Github项目仓库；进入一个项目仓库，添加 webhook

3. Jenkins 配置 github

具体的操作请网上搜索参考

ssh插件来远程登录服务器，运行脚本 插件 `SSH Agent`
    

```shell
pwd

# 压缩所有文件
tar -zcvf package.tar.gz *
    
```

SSH Publishers 配置 

```
cd /home/cicd/nginx/html/

tar -zxvf package.tar.gz

rm -rf package.tar.gz
```

### gitee 

1. 安装 jenkins

2. 安装插件 gitee

3. 配置 gitee 插件 ；点添加 选择 gitee api 令牌

<!-- 45c5f7f92aac774ce3090cc9ab6b94c0 -->

3. gitee 创建仓库

webhooks  需要域名或公共 ip

Jenkins 的两个映射文件 /var/jenkins_home  和 /var/jenkins_home_gitee/

Nginx 的映射文件 /home/cicd/nginx/
