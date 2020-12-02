
[[toc]]
[toc]

---

## github  
- 直接访问版本号前7位也是可以访问的。  

### github 授权

github 头像下拉  -> settings -> Developer settings -> Personal access tokens -> Generate new token

Note 提示信息随意命名

勾选 repo 全部选项

勾选 admin:public_key 全部选项

勾选 admin:repo_hook 全部选项

以上的勾选 根据不同的情况会有所区别

点击生成，记得复制保存，这里只显示一次，刷新进入后 不再显示

`Travis CI` 只支持 Github，不支持其他代码托管服务

## gitlab

clone 时出现， fatal: unable to access 'http://xxxx/front-end/smart-safety-pc.git/': Could not resolve host: xxxx

其中的 xxxx 是一串表示仓库的字符 要将字符改为，当前域名



## git

crlf: "\r\n", windows系统的换行方式

lf: "\n", Linux系统的换行方式

- .gitignore  以斜杠“/”开头表示目录

- git subtree 实现一个仓库作为其他仓库的子仓库

- 上传空文件夹  添加 `.gitkeep` 文件即可

### 基础命令
- init 此命令初始化一个新本地仓库，它在工作目录下生成一个名为.git的隐藏文件夹

- add 将文件添加进暂存区
```
git add . 提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件

git add -u 提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)

git add -A(--all) 提交所有变化
```

- commit 将暂存区文件提交到当前分支

如果不填写注释信息会报错： Aborting commit due to empty commit message.

### 创建SSH

1. `cd ~/.ssh` : 查看用户根目录是否有 ssh 文件

2. `ssh-keygen` : 在 Windows 上，`ssh-keygen` 该程序包含于 MSysGit(也就是git-for-windows) 【输入命令后，一直回撤即可】

```
ssh-keygen 
-b：指定密钥长度
-e：读取openssh的私钥或者公钥文件
-C：添加注释
-f：指定用来保存密钥的文件名
-i：读取未加密的ssh-v2兼容的私钥/公钥文件，然后在标准输出设备上显示openssh兼容的私钥/公钥
-l：显示公钥文件的指纹数据
-N：提供一个新密语
-P：提供（旧）密语
-q：静默模式
-t：指定要创建的密钥类型(rsa和dsa; 都是非对称加密算法,DSA 只能用于数字签名，而无法用于加密；RSA 即可作为数字签名，也可以作为加密算法)
```

### Git Hooks 

实例查看本项目的 pre-push 文件

- 在初始化git时会在 `./git/hooks/` 中生成钩子脚本，默认加了 `.sample` 后缀，防止默认执行,是样本文件

- 安装一个钩子只需要去掉.sample拓展名即可


#### 本地钩子
- `pre-commit` 运行git commit 时被触发,不需要任何参数，以非0状态退出时将放弃整个提交

- `prepare-commit-msg` 在pre-commit钩子在文本编辑器中生成提交信息之后被调用;用来方便地修改自动生成的squash或merge提交

- `commit-msg` 它会在用户输入提交信息之后被调用。这适合用来提醒开发者他们的提交信息不符合你团队的规范

- `post-commit` commit-msg钩子之后立即被运行 。它无法更改git commit的结果，所以这主要用于通知用途

- `applypatch-msg` 执行git am命令时触发，常用于检查命令提取出来的提交信息是否符合特定格式

- `pre-applypatch` git am提取出补丁并应用于当前分支后，准备提交前触发，常用于执行测试用例或检查缓冲区代码

- `post-applypatch` git am提交后触发，常用于通知、或补丁邮件回复（此钩子不能停止git am过程）

- `post-checkout` 和post-commit钩子很像，但它在你用git checkout查看引用的时候被调用。这是用来清理你的工作目录中可能会令人困惑的生成文件

- `pre-rebase` git rebase发生更改之前运行

- `post-rewrite` 执行会替换commit的命令时触发，比如git rebase或git commit –amend

- `post-merge` 成功完成一次 merge行为后触发

- `pre-push` 执行git push命令时触发，可用于执行测试用例

- `pre-auto-gc` 执行垃圾回收前触发

#### 服务器钩子

- `pre-receive` 用git push向仓库推送代码时被执行
- `update` 在pre-receive之后被调用
- `post-receive` post-receive

### 怎么恢复 `git add .`操作后，删除的工作区的文件；

前提是在删除后没有 `git add` 操作

- git reset head 文件地址加名称 
- git checkout -- 文件地址加名称

---

### 状态

A：在本地新增的文件（服务器上没有）  
C：文件的一个新拷贝  
D：本地删除的文件（服务器上还在）  
M：文件的内容或mode被修改  
R：文件名被修改  
T：文件类型被修改  
U：文件没有被合并（你需要完成合并才能提交）  
X：未知状态  
搜索：man git diff-files。

---
- Linux或Mac系统使用LF作为行结束符

---
### git 相关配置

配置用户名和邮件地址：`可以随便改` 这个与代码上传 拖取时输入的账号密码无关,
```
git config --global user.name 'username'
git config --global user.email 'email'
```

查看系统、当前用户、当前仓库配置： 

```
git config --system --list
git config --global --list
git config --local --list
```

用户信息列表：`git config --global --list`    

修改: `git config -- global user.name '其它' `

---

- 解决 git 默认不区分文件名大小写问题

`git config core.ignorecase false`

---

git clone 会默认将本地与远程分支进行追踪

---

当在merge时产生了冲突（branchname|Marging）  
执行git add filename|. ,git commit –m ‘message’,再次将工作区的更改提交到本地仓库-区，告诉Git 冲突已解决。



### 分支操作

新建分支时会基于当前所在分支commit的内容新建。所以新建的分支会包含所有所基于的分支内容。

---
- git branch  //显示所有分支（*表示当前所在分支） 
    
- git branch branchName //创建新分支        
 
- git checkout -f branchName // 强行切换分支

- git checkout –b branchName  //创建新分支并切换到该分支
    
- git branch –d branchName   //删除分支

- git branch -D branchName // 强行删除分支


#### 远程分支操作

- git remote add anyname url  anyname为别名。

url: 远程仓库地址链接  如：https://github.com/WarrenHewitt/blog-code.git

一般 anyname 默认为 origin，当设置完成后，在推送代码时可以直接 git push anyname branchName 托送代码到指定仓库的指定分支

当用git clone时默认的anyname为origin。

---

- git push origin [localbranch | HEAD(就是当前活跃分支的游标)] : remotebranch (当远程和本地分支相同时可以简写：git push origin branchname)  

这里的 origin 可以替代为 url 仓库地址

---

- git push origin  localbranch : remotebranch 创建远程分支 确保本地已有 localbranch 分支
- git push origin  :remotebranch  删除远程分支 || git push origin --delete remotebranch

- git pull origin remotebranch:localbranch  表示获取远程分支的更新与本地分支合并.
- git pull origin remotebranch  表示与当前本地分支合并;

  相当于 git fetch origin 和git merge origin/remotebranch

---

- 取消最近一次的commit： `git reset --soft HEAD^`

- 查看某个作者的所有commit: `git log --author=name -5`  

- 完成撤销,同时将代码恢复到commit_id对应版本 `git reset --hard commit_id`

- 完成撤销,不对代码修改进行撤销 `git reset commit_id `
---

- 更新远程跟踪分支：
    - `git fetch origin` 获取远程的所有分支，不然branch -a 查看不到新的远程分支

    - `git fetch origin master` 只取回特定分支的更新

---
- git branch命令的 **-r** 选项，可以用来查看远程分支，**-a**选项查看所有分支

---
- 打tag 前请先commit； git tag -a v1.1.1 -m 'describe'； git push --tags；然后git push； 否者当前分支对应的远程分支没有接收到本地最新代码

---
- 拉取远程分支并创建本地分支
  - `git checkout -b localBranch origin/originBranch`
  - `git fetch origin originBranchName:localBranchName`  区别是不会切换到本地新分支


#### 存储与清理

不想提交脏的状态

git stash 或 git stash save '备注信息'
// 将你没有提交的内容全部存储；当前分支也不会保留这部分内容，只有重新apply才会将这些内容放入当前分支

git stash list // 查看存储的列表，按时间降序排列

git stash pop // 和 apply 功能一致，但会将stash列表中的信息进行删除

git stash apply // 应用最近的存储

git stash apply stash@{值} // 查看列表获取的值

git stash drop stash@{值} // 移除某个暂存

git stash clear // 清空本地暂存栈信息



