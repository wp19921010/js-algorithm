/**
 * 第二个数开始往前比
 * 比它大就往后排
 * 以此类推进行到最后一个数
 */
const arr93: number[] = [2, 4, 5, 3, 1];

for (let i = 1; i < arr93.length; i += 1) {
    const temp = arr93[i];
    let j = i;
    while (j > 0) {
        if (arr93[j - 1] > temp) {
            arr93[j] = arr93[j - 1]
        } else {
            break
        }
        j -= 1;
    }
    arr93[j] = temp;
}

console.log(arr93)