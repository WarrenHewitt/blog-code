[[toc]]


# ElementUI Tree 组件，实现自定义勾选父子选项


> 创建时间：2020-11-02

## 为什么要自定义实现勾选，而不是采用其自带的勾选？

1. 当设置了：复选框 和 `check-strictly = false(默认)` 父子关联，会出现：

    - 选中父级，勾选所有子选项；取消父级选中，同时取消子选项勾选
    - 选中子选项，父选项变为半选中状态，如果勾选所有子选项，父选项为选中状态

2. 当设置了：复选框 和 `check-strictly = true` 父子无关联，会出现：

    - 父级的选中和取消选中，都不会对子选项的状态有任何的影响
    - 子选项的选中和取消，都不会对父选项的状态有任何的影响

综合上述现象：**如果想单独只选中父选项，不选择任一子选项**，功能无法实现，所以采用自定义勾选


## 实现步骤

既然使用自定义勾选，所以采用 `check-strictly = true` 父子无关联

html 代码
```html
<el-tree
    ref="cusTreeRef"
    show-checkbox
    check-strictly
    default-expand-all
    node-key="id"
    :data="treeData"
    :props="defaultProps"
    @check="handleCheck">
</el-tree>
<p>
    <b>当前选中</b> <span>{{ cusChecked }}</span>
</p>
```

vue 代码
```js
data () {
    return {
        defaultProps: {
            children: 'children',
            label: 'label'
        },
        treeData: [{
            id: 1,
            label: '一级 1',
            children: [{
                id: 4,
                label: '二级 4',
                children: [{
                    id: 9,
                    label: '三级 9'
                }, {
                    id: 10,
                    label: '三级 10',
                    children: [{
                        id: 11,
                        label: '四级级 11'
                    }, {
                        id: 12,
                        label: '四级级 12'
                    }]
                }]
            }]
        }],
        cusChecked: []
    }
}

handleCheck (currentNode, treeStatus) {
    console.log(currentNode, treeStatus)
    /**
     * @des 根据父元素的勾选或取消勾选，将所有子级处理为选择或非选中状态
     * @param { node: Object }  当前节点
     * @param { status: Boolean } （true ： 处理为勾选状态 ； false： 处理非选中）
     */
    const setChildStatus = (node, status) => {
        /* 这里的 id children 也可以是其它字段，根据实际的业务更改 */
        this.$refs.cusTreeRef.setChecked(node.id, status)
        if (node.children) {
            /* 循环递归处理子节点 */
            for (let i = 0; i < node.children.length; i++) {
                setChildStatus(node.children[i], status)
            }
        }
    }
    /* 设置父节点为选中状态 */
    const setParentStatus = (nodeObj) => {
        /* 拿到tree组件中的node,使用该方法的原因是第一次传入的 node 没有 parent */
        const node = this.$refs.cusTreeRef.getNode(nodeObj)
        if (node.parent.key) {
            this.$refs.cusTreeRef.setChecked(node.parent, true)
            setParentStatus(node.parent)
        }
    }

    /* 判断当前点击是选中还是取消选中操作 */
    if (treeStatus.checkedKeys.includes(currentNode.id)) {
        setParentStatus(currentNode)
        setChildStatus(currentNode, true)
    } else {
        /* 取消选中 */
        if (currentNode.children) {
            setChildStatus(currentNode, false)
        }
    }

    this.cusChecked = [...this.$refs.cusTreeRef.getCheckedKeys()]
}
```

代码核心功能说明： 

1. 判断点击是选中操作，还是取消选中操作

2. 如果是选中，则递归的去选中其父级，以及其所有子选项

3. 如果是取消选中，则递归的将子选项的状态改为非选中


> 欢迎交流 [Github](https://github.com/WarrenHewitt/blog/issues)

