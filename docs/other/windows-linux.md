[toc]
## 常用命令

- cd ~ 【跳转到当前用户的跟目录】

- cd - 【返回到上一次的工作目录】

- rmdir 【命令用来删除空目录】

- mkdir 【创建目录】

- echo 'test' > ts.txt  【创建文件,并写入'test'】

- echo 'test add' >> ts.txt  【追加内容】

- mv name1 name2 将文件或文件夹改名

- `find / -name fileName ` 命令用来在指定目录下查找文件docker 

- `sed -i 's/xx/yy/g' fileName`  -i 表示插入  s 表示取代，这里是利用正则将文件中的xx替换为yy

--- 

- `df -h` 查看磁盘占用情况

- 压缩: `tar -zcvf 压缩文件名.tar.gz 被压缩文件名`

- 解压: `tar -zxvf 压缩文件名.tar.gz`

- `mv /xx  /yy`  将文件夹或文件 xx 放到 yy 文件夹下

- rm 地址 参数 【删除一个目录中的一个或多个文件或目录】 
```
-f：强制删除文件或目录；
-r或-R：递归处理，将指定目录下的所有文件与子目录一并处理；
-d：直接把欲删除的目录的硬连接数据删除成0，删除该目录；
-i：删除已有文件或目录之前先询问用户；
--preserve-root：不对根目录进行递归操作；
-v：显示指令的详细执行过程。
``` 
`rm -f *` 删除当前目录下的文件，只能删文件

`rm -rf *` 递归删除当前目录下的文件和文件夹

---

- cat options file 【显示文件内容】

- `vi filename ` 打开或新建文件

- `touch filename ` 用于修改文件或者目录的时间属性，若文件不存在，系统会建立一个新的文件

- `ifconfig` 查看 ip 地址


## Linux

#### vi vim 操作

vim 需要安装在 centOS 上

```
按ESC键跳到命令模式，然后：
:w 保存文件但不退出vi.
:w file 将修改另外保存到file中，不退出vi.
:w! 强制保存，不推出vi.
:wq 保存文件并退出vi.
:wq! 强制保存文件，并退出vi.
:q 不保存文件，退出vi.
:q! 不保存文件，强制退出vi

a    //在当前光标位置的右边添加文本 
i    //在当前光标位置的左边添加文本 
A    //在当前行的末尾位置添加文本 
I    //在当前行的开始处添加文本(非空字符的行首) 
O    //在当前行的上面新建一行 
o    //在当前行的下面新建一行
```

### centOS

- 上一页：shift +pageup
- 下一页：shift +pagedown

- `uname -r 或 -a` 查看 centos 内核版本 和是否是64位（带有64就是64位）

- reboot          普通重启
- shutdown -r now 立刻重启(root用户使用)

安装 node

先到官网下载 Linux 安装包  https://nodejs.org/en/download/  

下载后上传到服务器，解压

添加环境变量，在 `/ect/profile` 文件最后添加 `export PATH=$PATH:/安装地址（也就是解压缩地址）/bin`

使配置生效 `source /etc/profile`


#### curl

是一个利用URL规则在命令行下工作的文件传输工具，支持文件的上传和下载，习惯称url为下载工具

curl由于可自定义各种请求参数所以在模拟web请求方面更擅长

#### wget

yum -y install wget 安装

命令用来从指定的URL下载文件，wget由于支持ftp和Recursive所以在下载文件方面更擅长

`wget --limit-rate=300k url`  下载限速

#### systemctl命令

是系统服务管理器指令

``

#### dnf

DNF是新一代的rpm软件包管理器。它取代了yum，正式成为 Fedora 22 的包管理器。

#### yum

在Fedora和RedHat以及CentOS中的Shell前端软件包管理器

- `yum list installed` 查看已安装的包

- `yum info packageName` 查看包信息

- `yum install -y yum-utils` 安装 yum-utils 包

- `yum-config-manager` 这个命令在 yum-utils 包里，管理yum配置选项和存储库

- `yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo` 给 yum 添加一个仓库

---

## windows下的相关操作

1. hosts文件所在位置：`C:\Windows\System32\drivers\etc`

- 查看是否固态硬盘： 右键任意盘 -> 属性 -> 工具 -> 优化

### 快捷键

- win + s ：搜索  （calculator 计算器）

- win + e ：打开‘此电脑’或‘快速访问’（切换方式 win + e -> '查看' -> '选项' -> '常规' (修改第一项即可)）

- Ctrl + t ： 打开新的标签页，并跳转到该标签页	


### win + r ：可使用的命令

- control.exe(简写输入control即可) 控制面板

- taskmgr 任务管理器
    - 在启动选项卡中可以禁止或开启开机启动项

- notepad 记事本

- cmd 命令窗口

- regedit 打开注册表

- shell:startup 打开放置开机启动项的文件夹（如开机执行脚本，批处理等）

- msconfig : 打开 "系统设置" 

- mspaint 打开画板

- dxdiag  查看电脑硬件信息


### 修改账户名称

方式一：
1. 进入控制面板
2. 进入用户账户
3. 再次选择用户账户
4. 选择更改账户名称

方式二：
1. 打开计算机管理（右键此电脑，win + s 搜索）
2. 本地用户组
3. 用户
4. 右键用户，重命名

### 截屏

- win + shift + s  可选，不可编辑

- alt + printscreen 只截取当前最上方激活的窗口

- win + printscreen 所有界面

- win + w 功能最多的截图方式


### 打开 "系统属性"
1. 此电脑(右键) -> 高级系统设置

2. win + r -> 运行 `sysdm.cpl`

### 添加 "环境变量"
- 系统变量：对所有用户有效
- 用户变量：对当前用户有效

- 进入 -> 系统属性 -> 高级 -> 环境变量 -> Path -> 编辑 -> 新建

### 添加和删除开机密码

按win键 -> 右键用户 -> 点击 "更改用户设置" -> 登录选项

- 添加：直接添加即可
- 删除：输入原密码，不输入新密码，点击完成即可

### 调整鼠标灵敏度
进入控制面板 -> 外观和个性化 -> 更改鼠标指针

### 卸载
- 在控制面板卸载中卸载
- 以上方法找不到，可在注册表中ctrl + f 查找(比较麻烦)
- 用360  

### 分屏操作
- 选中软件 win + 左右箭头
- 在上面基础上，上下箭头 四分屏

- win + ctrl + d 新建桌面窗口
- win + ctrl + 左右箭头 切换窗口上下箭头最大最小化

### 切换半角全角输入法
当切换到英文输入法时，输出的字母或字符还是有问题

- shift + 空格

### 关闭vpn软件导致无法连接正常网络

1. 打开控制面板
2. 打开网络和internet
3. 打开网络和共享中心
4. 打开internet选项
5. 选择连接
6. 点击局域网设置
7. 勾选自动检测设置，和使用自动配置脚本