#! /bin/sh

# 确保脚本抛出遇到的错误
set -e

# 进入生成的文件夹
cd docs/.vuepress/dist

rm .git -f-r

cd -

git add -A
git commit -m 'regular update'
git pull
git push