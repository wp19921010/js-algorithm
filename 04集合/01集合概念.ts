// 去重
const arr41 = [1, 2, 2, 2];
// @ts-ignore
const arr42 = [...new Set(arr41)];
console.log(arr42);

// 判断元素是否在集合中
const set = new Set(arr41);
const has = set.has(3);
console.log(has);

// 求交集
const set2 = new Set([2, 3]);
// @ts-ignore
const set3 = new Set([...set].filter(item => set2.has(item)));
console.log(set3);
