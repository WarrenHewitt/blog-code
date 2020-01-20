(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{262:function(t,a,i){"use strict";i.r(a);var e=i(0),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("[toc]")]),t._v(" "),i("hr"),t._v(" "),i("h2",{attrs:{id:"github"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[t._v("#")]),t._v(" github")]),t._v(" "),i("ul",[i("li",[t._v("直接访问版本号前7位也是可以访问的。")])]),t._v(" "),i("h2",{attrs:{id:"git"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" git")]),t._v(" "),i("ul",[i("li",[t._v(".gitignore  以斜杠“/”开头表示目录")])]),t._v(" "),i("h3",{attrs:{id:"基础命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[t._v("#")]),t._v(" 基础命令")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("init 此命令初始化一个新本地仓库，它在工作目录下生成一个名为.git的隐藏文件夹")])]),t._v(" "),i("li",[i("p",[t._v("add 将文件添加进暂存区")])])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git add . 提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件\n\ngit add -u 提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)\n\ngit add -A(--all) 提交所有变化\n")])])]),i("ul",[i("li",[t._v("commit 将暂存区文件提交到当前分支")])]),t._v(" "),i("h3",{attrs:{id:"创建ssh"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#创建ssh"}},[t._v("#")]),t._v(" 创建SSH")]),t._v(" "),i("ol",[i("li",[i("p",[i("code",[t._v("cd ~/.ssh")]),t._v(" : 查看用户根目录是否有 ssh 文件")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("ssh-keygen")]),t._v(" : 在 Windows 上，"),i("code",[t._v("ssh-keygen")]),t._v(" 该程序包含于 MSysGit(也就是git-for-windows) 【输入命令后，一直回撤即可】")])])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("ssh-keygen \n-b：指定密钥长度\n-e：读取openssh的私钥或者公钥文件\n-C：添加注释\n-f：指定用来保存密钥的文件名\n-i：读取未加密的ssh-v2兼容的私钥/公钥文件，然后在标准输出设备上显示openssh兼容的私钥/公钥\n-l：显示公钥文件的指纹数据\n-N：提供一个新密语\n-P：提供（旧）密语\n-q：静默模式\n-t：指定要创建的密钥类型(rsa和dsa; 都是非对称加密算法,DSA 只能用于数字签名，而无法用于加密；RSA 即可作为数字签名，也可以作为加密算法)\n")])])]),i("h3",{attrs:{id:"钩子"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#钩子"}},[t._v("#")]),t._v(" 钩子")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("在初始化git时会在 "),i("code",[t._v("./git/hooks/")]),t._v(" 中生成钩子脚本，默认加了 "),i("code",[t._v(".sample")]),t._v(" 后缀，防止默认执行")])]),t._v(" "),i("li",[i("p",[t._v("安装一个钩子只需要去掉.sample拓展名即可")])])]),t._v(" "),i("h4",{attrs:{id:"本地钩子"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#本地钩子"}},[t._v("#")]),t._v(" 本地钩子")]),t._v(" "),i("ul",[i("li",[i("p",[i("code",[t._v("pre-commit")]),t._v(" 运行git commit 时被触发,不需要任何参数，以非0状态退出时将放弃整个提交")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("prepare-commit-msg")]),t._v(" 在pre-commit钩子在文本编辑器中生成提交信息之后被调用;用来方便地修改自动生成的squash或merge提交")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("commit-msg")]),t._v(" 它会在用户输入提交信息之后被调用。这适合用来提醒开发者他们的提交信息不符合你团队的规范")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("post-commit")]),t._v(" commit-msg钩子之后立即被运行 。它无法更改git commit的结果，所以这主要用于通知用途")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("applypatch-msg")]),t._v(" 执行git am命令时触发，常用于检查命令提取出来的提交信息是否符合特定格式")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("pre-applypatch")]),t._v(" git am提取出补丁并应用于当前分支后，准备提交前触发，常用于执行测试用例或检查缓冲区代码")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("post-applypatch")]),t._v(" git am提交后触发，常用于通知、或补丁邮件回复（此钩子不能停止git am过程）")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("post-checkout")]),t._v(" 和post-commit钩子很像，但它在你用git checkout查看引用的时候被调用。这是用来清理你的工作目录中可能会令人困惑的生成文件")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("pre-rebase")]),t._v(" git rebase发生更改之前运行")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("post-rewrite")]),t._v(" 执行会替换commit的命令时触发，比如git rebase或git commit –amend")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("post-merge")]),t._v(" 成功完成一次 merge行为后触发")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("pre-push")]),t._v(" 执行git push命令时触发，可用于执行测试用例")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("pre-auto-gc")]),t._v(" 执行垃圾回收前触发")])])]),t._v(" "),i("h4",{attrs:{id:"服务器钩子"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#服务器钩子"}},[t._v("#")]),t._v(" 服务器钩子")]),t._v(" "),i("ul",[i("li",[i("code",[t._v("pre-receive")]),t._v(" 用git push向仓库推送代码时被执行")]),t._v(" "),i("li",[i("code",[t._v("update")]),t._v(" 在pre-receive之后被调用")]),t._v(" "),i("li",[i("code",[t._v("post-receive")]),t._v(" post-receive")])]),t._v(" "),i("h3",{attrs:{id:"怎么恢复-git-add-操作后，删除的工作区的文件；"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#怎么恢复-git-add-操作后，删除的工作区的文件；"}},[t._v("#")]),t._v(" 怎么恢复 "),i("code",[t._v("git add .")]),t._v("操作后，删除的工作区的文件；")]),t._v(" "),i("p",[t._v("前提是在删除后没有 "),i("code",[t._v("git add")]),t._v(" 操作")]),t._v(" "),i("ul",[i("li",[t._v("git reset head 文件地址加名称")]),t._v(" "),i("li",[t._v("git checkout -- 文件地址加名称")])]),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("husky npm包")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('"husky": {\n  "hooks": {\n    "pre-commit": "npm run lint-staged"\n  }\n}\n')])])]),i("h3",{attrs:{id:"状态"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#状态"}},[t._v("#")]),t._v(" 状态")]),t._v(" "),i("p",[t._v("A：在本地新增的文件（服务器上没有）"),i("br"),t._v("\nC：文件的一个新拷贝"),i("br"),t._v("\nD：本地删除的文件（服务器上还在）"),i("br"),t._v("\nM：文件的内容或mode被修改"),i("br"),t._v("\nR：文件名被修改"),i("br"),t._v("\nT：文件类型被修改"),i("br"),t._v("\nU：文件没有被合并（你需要完成合并才能提交）"),i("br"),t._v("\nX：未知状态"),i("br"),t._v("\n搜索：man git diff-files。")]),t._v(" "),i("hr"),t._v(" "),i("ul",[i("li",[t._v("Linux或Mac系统使用LF作为行结束符")])]),t._v(" "),i("hr"),t._v(" "),i("h3",{attrs:{id:"git-相关配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-相关配置"}},[t._v("#")]),t._v(" git 相关配置")]),t._v(" "),i("p",[t._v("配置用户名和邮件地址：可以随便改")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git config --global user.name 'username'\ngit config --global user.email 'email'\n")])])]),i("p",[t._v("查看系统、当前用户、当前仓库配置：")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git config --system --list\ngit config --global --list\ngit config --local --list\n")])])]),i("p",[t._v("用户信息列表："),i("code",[t._v("git config --global --list")])]),t._v(" "),i("p",[t._v("修改: "),i("code",[t._v("git config -- global user.name '其它'")])]),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("git clone 会默认将本地与远程分支进行追踪")]),t._v(" "),i("hr"),t._v(" "),i("p",[t._v("当在merge时产生了冲突（branchname|Marging）"),i("br"),t._v("\n执行git add filename|. ,git commit –m ‘message’,再次将工作区的更改提交到本地仓库-区，告诉Git 冲突已解决。")]),t._v(" "),i("h3",{attrs:{id:"分支操作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#分支操作"}},[t._v("#")]),t._v(" 分支操作")]),t._v(" "),i("p",[t._v("新建分支时会基于当前所在分支commit的内容新建。所以新建的分支会包含所有所基于的分支内容。")]),t._v(" "),i("hr"),t._v(" "),i("ul",[i("li",[i("p",[t._v("git branch  //显示所有分支（*表示当前所在分支）")])]),t._v(" "),i("li",[i("p",[t._v("git branch branchName //创建新分支")])]),t._v(" "),i("li",[i("p",[t._v("git checkout -f branchName // 强行切换分支")])]),t._v(" "),i("li",[i("p",[t._v("git checkout –b branchName  //创建新分支并切换到该分支")])]),t._v(" "),i("li",[i("p",[t._v("git branch –d branchName   //删除分支")])]),t._v(" "),i("li",[i("p",[t._v("git branch -D branchName // 强行删除分支")])])]),t._v(" "),i("h4",{attrs:{id:"远程分支操作"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#远程分支操作"}},[t._v("#")]),t._v(" 远程分支操作")]),t._v(" "),i("ul",[i("li",[t._v("git remote add anyname url  anyname为别名。")])]),t._v(" "),i("p",[t._v("url: 远程仓库地址链接  如：https://github.com/WarrenHewitt/blog-code.git")]),t._v(" "),i("p",[t._v("一般 anyname 默认为 origin，当设置完成后，在推送代码时可以直接 git push anyname branchName 托送代码到指定仓库的指定分支")]),t._v(" "),i("p",[t._v("当用git clone时默认的anyname为origin。")]),t._v(" "),i("hr"),t._v(" "),i("ul",[i("li",[t._v("git push origin [localbranch | HEAD(就是当前活跃分支的游标)] : remotebranch (当远程和本地分支相同时可以简写：git push origin branchname)")])]),t._v(" "),i("p",[t._v("这里的 origin 可以替代为 url 仓库地址")]),t._v(" "),i("hr"),t._v(" "),i("ul",[i("li",[i("p",[t._v("git push origin  localbranch : remotebranch 创建远程分支 确保本地已有 localbranch 分支")])]),t._v(" "),i("li",[i("p",[t._v("git push origin  :remotebranch  删除远程分支 || git push origin --delete remotebranch")])]),t._v(" "),i("li",[i("p",[t._v("git pull origin remotebranch:localbranch  表示获取远程分支的更新与本地分支合并.")])]),t._v(" "),i("li",[i("p",[t._v("git pull origin remotebranch  表示与当前本地分支合并;")]),t._v(" "),i("p",[t._v("相当于 git fetch origin 和git merge origin/remotebranch")])])]),t._v(" "),i("hr"),t._v(" "),i("ul",[i("li",[i("p",[t._v("取消最近一次的commit： "),i("code",[t._v("git reset --soft HEAD^")])])]),t._v(" "),i("li",[i("p",[t._v("查看某个作者的所有commit: "),i("code",[t._v("git log --author=name")])])]),t._v(" "),i("li",[i("p",[t._v("完成撤销,同时将代码恢复到commit_id对应版本 "),i("code",[t._v("git reset --hard commit_id")])])]),t._v(" "),i("li",[i("p",[t._v("完成撤销,不对代码修改进行撤销 "),i("code",[t._v("git reset commit_id")])])])]),t._v(" "),i("hr"),t._v(" "),i("ul",[i("li",[t._v("更新远程跟踪分支：\n"),i("ul",[i("li",[i("p",[i("code",[t._v("git fetch origin")]),t._v(" 获取远程的所有分支，不然branch -a 查看不到新的远程分支")])]),t._v(" "),i("li",[i("p",[i("code",[t._v("git fetch origin master")]),t._v(" 只取回特定分支的更新")])])])])]),t._v(" "),i("hr"),t._v(" "),i("ul",[i("li",[t._v("git branch命令的 "),i("strong",[t._v("-r")]),t._v(" 选项，可以用来查看远程分支，"),i("strong",[t._v("-a")]),t._v("选项查看所有分支")])]),t._v(" "),i("hr"),t._v(" "),i("ul",[i("li",[t._v("打tag 前请先commit； git tag -a v1.1.1 -m 'describe'； git push --tags；然后git push； 否者当前分支对应的远程分支没有接收到本地最新代码")])]),t._v(" "),i("hr"),t._v(" "),i("ul",[i("li",[t._v("拉取远程分支并创建本地分支\n"),i("ul",[i("li",[i("code",[t._v("git checkout -b localBranch origin/originBranch")])]),t._v(" "),i("li",[i("code",[t._v("git fetch origin originBranchName:localBranchName")]),t._v("  区别是不会切换到本地新分支")])])])]),t._v(" "),i("h4",{attrs:{id:"存储与清理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#存储与清理"}},[t._v("#")]),t._v(" 存储与清理")]),t._v(" "),i("p",[t._v("不想提交脏的状态")]),t._v(" "),i("p",[t._v("git stash 或 git stash save '备注信息'\n// 将你没有提交的内容全部存储；当前分支也不会保留这部分内容，只有重新apply才会将这些内容放入当前分支")]),t._v(" "),i("p",[t._v("git stash list // 查看存储的列表，按时间降序排列")]),t._v(" "),i("p",[t._v("git stash apply // 应用最近的存储")]),t._v(" "),i("p",[t._v("git stash apply stash@{值} // 查看列表获取的值")]),t._v(" "),i("p",[t._v("git stash drop stash@{值} // 移除某个暂存")])])}),[],!1,null,null,null);a.default=v.exports}}]);