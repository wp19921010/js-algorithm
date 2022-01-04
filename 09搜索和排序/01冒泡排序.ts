/**
 * 比较所有相邻元素，如果第一个比第二个大则交换它们。
 * 一轮下来，可以保证最后一个数最大。
 * 执行n-1轮，就可以完成排序。
 */
const arr91: number[] = [5, 4, 3, 2, 1];

for (let i = 0; i < arr91.length - 1; i++) {
    for (let j = 0; j < arr91.length - 1 - i; j++) {
        if (arr91[j] > arr91[j + 1]) {
            const temp = arr91[j];
            arr91[j] = arr91[j + 1];
            arr91[j + 1] = temp;
        }
    }
}

console.log(arr91)