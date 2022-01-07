/**
 * 遍历数组。
 * 找到跟目标值相等的元素就返回它的下标
 */
const arr96 = [1, 2, 3, 4, 5]

function sequentialSearch(arr, item) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
}

const res96 = sequentialSearch(arr96, 4)
console.log(res96)