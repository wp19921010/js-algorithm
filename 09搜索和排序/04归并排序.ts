/**
 * 分：把数组劈成两半，再递归地对子数组进行"分"操作，直到分成一个个单独的数。
 * 合：把两个数合并为有序数组，再对有序数组进行合并，直到全部子数组合并为一个完整数组。
 * 新建一个空数组res, 用于存放最终排序后的数组。
 * 比较两个有序数组的头部,较小者出队并推入res中。
 * 如果两个数组还有值，就重复第二步。
 */

const arr94: number[] = [2, 4, 5, 3, 1];

function mergeSort(list) {
    const rec = (arr) => {
        if (arr.length === 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid, arr.length);
        const orderLeft = rec(left);
        const orderRight = rec(right);
        const res = [];

        while (orderLeft.length || orderRight.length) {
            if (orderLeft.length && orderRight.length) {
                res.push(orderLeft[0] < orderRight[0] ? orderLeft.shift() : orderRight.shift())
            } else if (orderLeft.length) {
                res.push(orderLeft.shift())
            } else if (orderRight.length) {
                res.push(orderRight.shift())
            }
        }

        return res;
    }

    return rec(list);
}

const res = mergeSort(arr94);
console.log(res)