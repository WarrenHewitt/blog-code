[toc]
[[toc]]

排序名称|最快时间|最慢时间|空间复杂度
--|--|--|--|--|
冒泡排序 | O(n) | O(n^2) | O(1) 
选择排序 |  O(n^2) | O(n^2) | O(1) 
插入排序 | O(n) | O(n^2) | O(1) 
希尔排序 | O(n*log2n) | O(n^2) | O(1) 
归并排序 | O(nlogn) | O(n) | O(n) 
堆 | O(n) | O(n^2) | O(1) 
快速 | O(n) | O(n^2) | O(1) 

以上时间和空间复杂度会根据算法的优化有所不同

## 冒泡排序

原理：依次比较两个相邻的元素，将较大的放到右边（升序排列）

一轮循环只找到一个最值，然后通过多次这样的循环（所以有两层嵌套循环），获得一个排序结果

以下是经过简单优化的算法实现：

```js
function bubbling(arr) {
    const len = arr.length
    let sorted = true
    /* 每找到一个最值，需要一次循环 */
    for (let i = 0; i < len; i++) {
        /* 必须每轮循环前，假设是排好序后的数组，防止只需要前几次循环就排好的情况 */ 
        sorted = true
        /* 这里的循环是找出当前轮的最值 */
        /* len-1-i 保障 j+1 能取到，同时放到最后的数，不用参与下一轮的循环，因为它已经是上一轮找出的最值 */
        for (let j = 0; j < len-1-i; j++) {
            if(arr[j]>arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                sorted = false
            }
        }
        /* 如果是已经排好序了就直接退出循环，此时最优时间复杂度 O(n) */
        if(sorted) break
    } 
}
```

## 选择排序

原理：从**剩余**未排序序列中找到最小（大）元素，放置在已排序序列的末尾位置，以此循环，直到所有元素均排序完毕

```js
function selectionSort(array) {
    let len = array.length
    for (let i = 0; i < len; i++) {
        /* 默认开始的第一个值的位置放置下一个最小值 */
        let minIndex = i
        /* 查找剩余数值中的最小值，从 i + 1 开始的目的是避免与自身进行一次比较 */
        for (let j = i + 1; j < len; j++) {
            if(array[minIndex] > array[j]) {
                minIndex = j
            }
        }
        /* 将最小值和当前位置(i)的值进行交换 */
        let temp = array[minIndex]
        array[minIndex] = array[i]
        array[i] = temp
    }
    return array
}
```


## 插入排序

原理： 将未排序队列中的数值，逐个与已排序队列中的数进行比较，当出现大于或小于已排序队列中的某个数时，进行插入操作

```js
function insertionSort(array) {
    let len = array.length
    for (let i = 1; i < len; i++) {
        /* 记录当前未排序的数，该数将会和有序数列中的数进行比较 */
        let current = array[i]
        /* 有序数列的最后一个数（如果是从小到大排列，也就是最大的数） */
        let endIndex = i - 1 
        while (endIndex >=0 && array[endIndex] > current) {
            /* 将有序数列中的数，逐一与当前未排序数进行比较直到，找出比当前未排序数小的数即停止 */
            array[endIndex + 1] = array[endIndex]
            endIndex--
        }
        /* 将最后一个往后移动空出来的位置赋值为，当前未排序数 */
        array[endIndex+1] = current
    }
    return array
}
```

## 希尔排序

原理：

插入排序的一种优化

1. 设置一个增量，将数组中的数按此增量进行分组（比如增量为4，那下标为0，4，8...的数为一组）
2. 对分组的数进行插入排序
3. 缩小增量
4. 重复步骤1、2、3，直到增量为1
5. 当增量为1时，对整个数组进行一次插入排序，输出最后结果

时间复杂度与增量选取有关,以下算法时间复杂度为 O(n^(3/2))

非稳定排序（2个相等的数，在排序完成后，原来在前面的数还是在前面，即为稳定排序）

```js
function shellSort(array) {
    let len = array.length, gap = 1;
    /* 此处获取一个最大增量，增量的获取方法不固定，这里采用比较常见的方式，一定要保证最后能取到1 */
    while(gap < len/3) {
        gap = gap*3+1;
    }

    /* 每更新一次增量就进行一次插入排序 */
    while(gap>0) {
        /* 以下逻辑与插入排序一致，当增量变为1时即完全一致 */
        for (let i = gap; i < len; i++) {
            /* 这里要循环到数组最后是因为要保障当前分组中的每一个数都经过排序，所以当前分组靠前的数据会被与后面的数据进行多次排序 */
            let current = array[i]
            let endIndex = i - gap
            while(endIndex>=0 && array[endIndex] > current) {
                array[endIndex + gap] = array[endIndex]
                endIndex -= gap
            }
            array[endIndex+gap] = current
        }
        gap = Math.floor(gap/3)
    }
    return array
}
```

分治法：把一个复杂的问题分成两个或更多的相同或相似的子问题，再把子问题分成更小的子问题……直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并

## 归并排序

原理：将当前数组，递归分组，比较大小后再一一合并分组，是采用分治法的一个应用

1. 获取一个中间位置的值，然后以该位置为中心点分组
2. 递归进行分组
3. 比较当前两个分组，将其合并为一个数组

```js
function mergeSort(array) {
    const len = array.length
    if(len<2) return array
    const middle = Math.floor(len/2)
    
    /* 取中间值进行分组 */
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    /* 递归分组 */
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const result = []
    /* 两个分组都有值时，逐个进行比较 */
    while (left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    /* 只有一个分组时，表明其全部为最大值，直接全部放入结果数组即可 */
    if(left.length){
        result.push(...left)
    }

    if(right.length){
        result.push(...right)
    }
    return result
}
```

## 快速排序


- 方式一：
需要 O(n) 的额外存储空间，也就跟归并排序一样

但是代码更清晰的体现快排的思想
```js
function quickSort (array) {
    if (array.length < 2) return array;
    const pivot = array[0];
    let left = []
    let right = []
    for (let i = 1, length = array.length; i < length; i++) {
        if(array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}
```
