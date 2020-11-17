# vue 和 react 的 diff 算法

本质是找出两个对象之间的差异，目的是尽可能复用节点

## vue diff

```js
function diff() {
    diffAttr(oldNode.attr, newNode.attr)
    diffChildren(oldNode.children, newNode.children)
}

function patchVNode() {
    
}
```

