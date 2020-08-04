[[toc]]
[toc]
## 时间和空间算法复杂度
- 用 O 表示 
- `O(1)<O(logn)<O(n)<O(nlogn)<O(n²)<O(n³)<O(2ⁿ)<O(n!)`

```
for(i=1; i<=n; ++i)
{
   xxx;
   sss;
   ...
}
```
- 假设一行代码的时间为1，以上代码时间就为 1+x*n 当其中x为常量 n无限大时 记得出时间复杂度O(n)
### 常见的时间复杂度(从小往大)：
T(n) = O(f(n))

- 常量 O(1)
```
var i = 1;
var j = 2;
```

- 对数 O(logN)
```
var i = 1;
while(i<n)
{
    i = i * 2;
}
循环x次 i达到n  n=2^x => x = log2n
```

- 线性 O(n) 如上for循环

- 线性对数 O(nlogN)
```
for(j=1; j<n; j++)
{
    i = 1;
    while(i<n)
    {
        i = i * 2;
    }
}
n*O(logN) => O(nlogN)
```

- 平方 O(n^2) 嵌套的两个for循环
- 立方 O(n^3)
- N次方 O(n^N)
- 指数 O(2^n)

### 空间复杂度

1. 固定部分： 指令空间（即代码空间）、数据空间（常量、简单变量）等所占的空间，这部分属于静态空间

2. 可变空间：动态分配的空间，以及递归栈所需的空间等，这部分的空间大小与算法有关

算法占用的内存包括：代码所占空间、输入输出数据占用空间、变量占用的空间

算法的空间复杂度：是计算整个算法的辅助空间单元的个数

S(n) = O(f(n))

- 常用的

- O(1) 常量级 执行时，变量所需要的临时空间不会变化，没有空间的改变
```
var i = 1
var j = 2
var x = i + j 
```

- O(n) 递归  每次调用都新建了变量
```js
 fun(n) {  
    var a = 1  
    if(){
        console.log(n)
    } else {
        fun(n-1);
    }
} 
```

## 斐波拉契数列
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

## 判断字符是否回文

abcdcba 这就是回文

```js
var a = 'abcba';
var b = a.split('').reverse().join('')
if(a === b) // 相等即回文
```

## 不利用变量交换两个数

```js
var a = 1, b = 2;
a = a + b;
b = a - b;
a = a - b;

// 或者
a = a ^ b;
b = a ^ b;
a = a ^ b;
```

## 数组相关

### 数组去重
#### 利用对象表形式
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
#### 利用Set
```js
var a = [1,2,3,1,4,4,4]
var b = new Set(a)
/* 一定要将Set转为数组 */
console.log([...b]); // [1,2,3,4]
```

### 计算数组中任意两个数的和等于数组中某个值的组数

- 先将所有不同的值保存为对象的键值
- 再循环用和减去数组中的每一个值，将差值作为键值，判断是否能获取到对应值 

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

### 获取数组中 top three

- 一次循环，三次判断该值是否落在，前三值的区间

```js
function getTopThree(arr) {
    var f = 0, fi = 0;
    var s = 0, si = 0;
    var t = 0, ti = 0;
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if (e >= f) {
            t = s;
            ti = si
            s = f;
            si = fi
            f = e;
            fi = i
        } else if (e >= s) {
            t = s;
            ti = si
            s = e;
            si = i;
        } else if (e >= t) {
            t = e
            ti = i
        }
    }
    // 返回前三的值及其下标
    return [[f, s, t], [fi, si, ti]]
}

```

### 判断一个数是否在数组某两个数之间，或包含在数组中

- 一次循环，判断大于或是等于即可

```js
function findValueBetweenInArray() {
    var a = [1.2,1.434,3,5.6,7.9]
    var target = 5
    var index = [0, 0]
    var have = false
    if(a[0] > target || target>a[a.length-1]) {
        console.log('不在数组中');
        return 
    }
    for (let i = 0; i < a.length; i++) {
        if(a[i] > target) {
            index = [i-1,i]
            break;
        }
        if(a[i] === target){
            index[0] = i
            have = true
        }
    }
    if(have) {
        console.log(`有该数，下标${index[0]}`);
    } else {
        console.log(`在${a[index[0]]}与${a[index[1]]}之间`);
    }
}
```

### 获取指定数组中的某一范围内的值
```js
function getRangeValue(orange, startValue, endValue) {
    const length = orange.length
    let startIndex = 0, endIndex = length-1;
    startValue = startValue || orange[0];
    endValue = endValue || orange[endIndex];
    /* 获取起始值下标 */
    for (let i = 0,len=orange.length; i < len; i++) {
        if(orange[i] >= startValue) { startIndex = i; break; }
    }
    /* 获取结尾值下标 */
    for (let j = startIndex,len=orange.length; j < len; j++) {
        if(orange[j] >= endValue) { endIndex = j; break; }
    }
    return orange.slice(startIndex, endIndex+1)
}
```

### 返回某一指定范围内固定步长的数组

```js
function getRange(start, end, steep) {
    const arr = [];
    let val = start;
    while(val < end) {
        arr.push(val)
        val += steep
    }
    return arr
}
```

### 获取一组数中的波峰
频谱相关
```js
function findPeak(arr) {
    // 满足一阶导数为0，并且满足二阶导数为负；而波谷点，则满足一阶导数为0，二阶导数为正
    const peak = []
    const len = arr.length
    const tempArr = []
    // 一阶求导,获取每个点的斜率
    for (let i = 0; i < len; i++){
        if (arr[i + 1] - arr[i]>0) {
            // 表示向上倾斜，斜率为正
            tempArr[i] = 1;
        } else if (arr[i + 1] - arr[i] < 0){
            // 表示向下倾斜，斜率为负
            tempArr[i] = -1;
        } else {
            // 出现了水平线，或是超过了数组边界
            tempArr[i] = 0;
        }
    }
    // 处理水平的点位
    for (let i = len - 1; i >= 0; i--) {
        // 判断最后一个数是不是0
        if (tempArr[i] == 0 && i == len - 1){
            tempArr[i] = 1;
        } else if (tempArr[i] == 0){
            if (tempArr[i + 1] >= 0) { 
                // 将水平位置的点斜率设置为向上 
                tempArr[i] = 1;
            } else{
                // 将水平位置的点斜率设置为向下
                tempArr[i] = -1;
            }
        }
    }

    for (i = 0; i < len; i++){
        // 当 i+1 为波峰时，其对应的值减去 i 个值必为 -2
        // 当 i+1 为波谷时，其对应的值减去 i 个值必为 2  注意除去最后一个数被误判位波谷的情况
        if (tempArr[i + 1] - tempArr[i] == -2) peak.push(arr[i + 1]);
    }

    return peak
}
```