



## todo

- 输入结果和返回的结果顺序
- 提前结束磁盘上的寻找,目前是要找到顶层
- 支持自定义定制寻找的目录


## publish
npm publish --access=public


## tag

 打标签
git tag 1.0.2

查看本地标签
git tag

推送本地所有tag到仓库
git push tags

删除tag
git tag -d <tag_name>

同步删除仓库tag
git push oriigin :refs/tags/<tag_name>