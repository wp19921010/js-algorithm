/**
 * 找到数组中最小的值，选中它并将其放置在第一位。
 * 接着找到第二小的值，选中它并将其放置在第二位。
 * 以此类推，执行n-1轮。
 * 把小的往前放
 * 数组变换过程：
 [ 5, 4, 1, 2, 3 ]
 [ 1, 4, 5, 2, 3 ]
 [ 1, 2, 5, 4, 3 ]
 [ 1, 2, 3, 4, 5 ]
 * 循环过程：i => j
 0 => 0, 1, 2, 3, 4
 1 => 1, 2, 3, 4
 2 => 2, 3, 4
 3 => 3, 4
 */
const arr92: number[] = [5, 4, 1, 2, 3];

for (let i = 0; i < arr92.length - 1; i += 1) {
    let indexMin = i;

    for (let j = i; j < arr92.length; j += 1) {
        if (arr92[j] < arr92[indexMin]) {
            indexMin = j;
        }
    }

    // indexMin: 2, 3, 4, 3

    if (indexMin !== i) {
        const temp = arr92[i];
        arr92[i] = arr92[indexMin];
        arr92[indexMin] = temp;
    }
}

// console.log(arr92)