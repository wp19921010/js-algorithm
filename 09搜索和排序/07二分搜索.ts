/**
 * 从数组的中间元素开始，如果中间元素正好是目标值，则搜索结束。
 * 如果目标值大于或者小于中间元素，则在大于或小于中间元素的那一半数组中搜索。
 */

const arr97 = [1, 2, 3, 4, 5]

function binarySearch(arr, item) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = arr[mid];

        if (element < item) {
            low = mid + 1;
        } else if (element > item) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}

const res97 = binarySearch(arr97, 2)
console.log(res97)