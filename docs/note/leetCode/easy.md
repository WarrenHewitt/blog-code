**简单难度**

> 自己做过的题，整理说明，以便后续查看

---

- 判断整数是否回文

[url](https://leetcode-cn.com/problems/palindrome-number/)
```js
function(x) {
   if ( x < 0 ) return false
    const xStr = `${x}`
    /* 将数字变为字符串，将字符串变为数组，将数组反序，再变为字符串 */
    return xStr.split().reverse().join('') === xStr
};
```

---

- 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标

[url](https://leetcode-cn.com/problems/two-sum/)
```js
function(nums, target) {
    var v = 0, ti = 0, l = nums.length, obj = {}

    // 利用目标值减去当前值，如果差值在 obj 中存在，证明前面有数值和当前数值的和为目标值
    for (var j = 0; j < l; j++) {
        v = target - nums[j];
        
        if (obj[v]) return [obj[v] - 1, j];

        // 将被减后差值没有出现在 obj 中，的值作为属性，放入 obj 对象中
        obj[nums[j]] = j + 1;
    }
};
```

---

- 罗马数字转整数

[url](https://leetcode-cn.com/problems/roman-to-integer/)
```js
function(s) {
    let num = 0
    const len = s.length
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    for (let i = 0; i < len; i++) {
        const val = s[i]
        const valNext = s[i + 1] || 0
        // 当前面的数比后面的数小时，就要减去前面较小的值
        if (obj[val] < obj[valNext]) {
            num += obj[valNext] - obj[val] 
            i++
        } else {
            num += obj[val]
        }
    }

    return num
};
```

---

- 最长公共前缀

[url](https://leetcode-cn.com/problems/longest-common-prefix/)
```js
function(strs) {
    let length = strs.length
    if(length === 0) return ''
    if(length === 1) return strs[0] || ''
    if(strs.some(v => v === '')) return ''
    const loop = (baseIndex) => {
        // 以数组中的第一个字符串的第一个字符作为开始
        let base = strs[0][baseIndex]
        if(!base) return baseIndex
        let end = false
        for (i = 1; i < length; i++) {
            if (strs[i][baseIndex] !== base) {
                end = true
                break
            }
        }
        if (end) {
            return baseIndex
        } else {
            return loop(baseIndex + 1)
        }
    }
    const re = loop(0)
    return re > 0 ? strs[0].slice(0, re) : ''
};
```

---

- 合并两个有序链表

[url](https://leetcode-cn.com/problems/merge-two-sorted-lists/)

js 链表 查看: 笔记>javascript
```js
function(l1, l2) {
    if(!l1) {
        return l2
    } else if(!l2) {
        return l1
    } else if (l1.val < l2.val) {
        // 当前节点选择较小的节点,较大的节点继续进行下一轮比较
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};
```