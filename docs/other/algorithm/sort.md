[toc]
[[toc]]

排序名称|最快时间|最慢时间|空间复杂度
--|--|--|--|--|
冒泡排序 | O(n) | O(n^2) | O(1) 
选择排序 |  O(n^2) | O(n^2) | O(1) 
插入排序 | O(n) | O(n^2) | O(1) 
布尔 | O(n) | O(n^2) | O(1) 
堆 | O(n) | O(n^2) | O(1) 
归并 | O(n) | O(n^2) | O(1) 
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


 function shellSort(array) {
        console.time('s2')

            let len = array.length,
                temp,
                gap = 1;
            while(gap < len/3) {
                gap =gap*3+1;
            }

            while(gap>0) {
                for (let i = gap; i < len; i++) {
                    let current = array[i]
                    let endIndex = i - gap
                    while(endIndex>=0 && array[endIndex] > current) {
                        array[endIndex + gap] = array[endIndex]
                        endIndex -= gap
                    }
                    array[endIndex+gap] = current
                }
                console.log('gap', gap);
                gap = Math.floor(gap/3)
            }
            console.timeEnd('s2');
            console.log(array);
            return array
        }


    function insertionSort(array) {
        console.time('s1')
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
            /* 因为上面的 while 循环中多减了 1 所以这里加上 */
            array[endIndex+1] = current
        }
        console.timeEnd('s1');
        return array
    }

    const a1 = []
    for (let k = 0; k < 5; k++) {
        a1.push(Math.random())
    }
    // const a2 = []
    // for (let k = 0; k < 100000; k++) {
    //     a2.push(Math.random())
    // }

    // console.log(shellSort(a1));
    // console.log(insertionSort(a2));
    shellSort([1,2,67,3,56,4,6,1,34,12])
    // insertionSort(a2)