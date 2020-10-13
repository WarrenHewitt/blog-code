https://juejin.im/post/6844904009333997582#heading-8

- 镜像：是由一系列的只读的层构建，每一层对应DockerFile里面的声明构成

- 容器： 与镜像的唯一区别在于容器的最上面那一层是可读可写的

当运行容器时，使用的镜像如果在本地中不存在，docker 就会自动从 docker 镜像仓库中下载，默认是从 Docker Hub 公共镜像源下载

- `docker images` 查看本机的镜像

- `docker ps` 查看容器 `-a` 查看所有容器 包括未运行的

- `docker pull nginx:latest` 安装 Nginx 镜像： 

- `docker start|stop|restart containerName` 启动|关闭|重启容器  

- `docker kill -s KILL containerName` 杀掉一个运行中的容器 并向容器发送一个信号  

- `docker build ./ -t imageName:1.0.0` 利用 Dockerfile 创建镜像 -t 后，表示打的标签  name:tag 或者 name 格式  **tag 不写默认为 latest**

基于路径./（当前路径）打包一个镜像，镜像的名字是 imageName ，版本号是1.0.0。会自动寻找Dockerfile来打包出一个镜像

- `docker create  --name containerName imageName:tag` 使用镜像 imageName 创建一个容器 并命名为 containerName

- `docker run --name containerName -d imageName:tag` ：创建一个容器,以后台模式启动,并命名为 containerName

`-p` 127.0.0.1:80:80/tcp 主机(宿主)端口:容器端口 容器端口默认80

`-P`: 容器内部端口随机映射到主机的端口

- `docker rm -f containName containName` 强制删除一个或多个容器

## Dockerfile

```shell
# 使用 Nginx 作为镜像
FROM nginx 

# # 将宿主机中的./index.html文件复制进容器里的/usr/share/nginx/html/index.html
COPY ./index.html /user/share/nginx/html/index.html

# 容器对外暴露的端口
# 这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务
# 如果改为 83 也要同步修改 nginx 的默认端口为 83 否则，不会生效
EXPOSE 80 
```


