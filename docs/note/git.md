
[toc]
[[toc]]

---

## github  
- 直接访问版本号前7位也是可以访问的。  

## git

- init 此命令初始化一个新本地仓库，它在工作目录下生成一个名为.git的隐藏文件夹

- add 将文件添加进暂存区

- commit 将暂存区文件提交到当前分支

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

### 钩子

在 ./git/hooks/ 中，加了 .sample 的文件表示不执行的文件

---

可以在 ./git/hooks/ 的文件中修改  禁掉或启用检测

---

.gitignore  
以斜杠“/”开头表示目录

---

怎么恢复 `git add .`操作后，删除的工作区的文件；

前提是在删除后没有 `git add` 操作

- git reset head 文件地址加名称 
- git checkout -- 文件地址加名称

---

husky npm包
```
"husky": {
  "hooks": {
    "pre-commit": "npm run lint-staged"
  }
}
```

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

配置用户名和邮件地址：可以随便改
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

- git remote add anyname url  定义了一个本地的anyname远程端，这个anyname远程端指向url所代表的远程端。当用git clone时默认的anyname为origin。 

- git push origin [localbranch | HEAD(就是当前活跃分支的游标)] : remotebranch (当远程和本地分支相同时可以简写：git push origin branchname)  

- git push origin  localbranch : remotebranch 创建远程分支 确保本地已有branchname分支
- git push origin  :remotebranch  删除远程分支 ||   
- git push origin --delete remotebranch

- git pull origin remotebranch:localbranch  表示获取远程分支的更新与本地分支合并.
- git pull origin remotebranch  表示与当前本地分支合并;

  相当于 git fetch origin 和git merge origin/remotebranch

---

- 取消最近一次的commit： `git reset --soft HEAD^`

- 查看某个作者的所有commit: `git log --author=name`

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

git stash apply // 应用最近的存储

git stash apply stash@{值} // 查看列表获取的值

git stash drop stash@{值} // 移除某个暂存

