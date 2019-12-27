# 斐波拉契数列
> 利用生成器

f0 = 0; f1 = 1; fn = f(n-1) + f(n-2); n>=2
```js
function* fibonacci() {
    let [current, v] = [0, 1]
    console.log('斐波拉契数列(0-100): ');
    console.log(current);
    while (true) {
        [current, v] = [v, current + v]
        yield current
    }
}

for (const v of fibonacci()) {
    if(v > 100) break
    console.log(v);
}
```

# 判断字符是否回文

abcdcba 这就是回文

```js
var a = 'abcba';
var b = a.split('').reverse().join('')
if(a === b) // 相等即回文
```
# 数组相关
## 数组去重

### 利用对象表形式
```js
var arr=[],hash={},newArr=[];
for(var i=0;i<arr.length;i++) {
    if(!hash[arr[i]]) { 
        hash[arr[i]] = true;
        newArr.push(arr[i])
    }
}
console.log(newArr) // 去重后的数组
```
### 利用Set
```js
var a = [1,2,3,1,4,4,4]
var b = new Set(a)
console.log([...b]); // [1,2,3,4]
```

## 计算数组中任意两个数的和等于数组中某个值的组数
```js
const sum = 10;
const arr = [3, 2, 1, 7, 8, 1, 9, 1, 6];
const hashObj = {};
let count = 0;
let repeat = 0;
for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    /* 计算相同值个数 */
    if (hashObj[val]) {
        repeat++
    } else {
        hashObj[val] = 1;
    }
}

for (let j = 0; j < arr.length; j++) {
    if (hashObj[(sum - arr[j])]) {
        count++;
    }
}
/* 相加的原因是: 计算前面的两个1时都匹配了后面的相同的9；但是当计算9时，只匹配了前面的两个1中的其中一个 */
const result = (count + repeat) / 2
console.log('count: ', count);
console.log('repeat: ', repeat);
console.log(`总共有 ${result} 组数的和为10`);
```