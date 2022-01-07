const a31 = {
    val: 'a',
    next: undefined
};
const b31 = {
    val: 'b',
    next: undefined
};
const c31 = {
    val: 'c',
    next: undefined
};

const d31 = {
    val: 'd',
    next: undefined
};

const e31 = {
    val: 'e',
    next: undefined
};

a31.next = b31;
b31.next = c31;
c31.next = d31;

// 遍历链表
let p31 = a31;
while (p31) {
    console.log(p31.val);
    p31 = p31.next;
}

// 插入
c31.next = e31;
e31.next = d31;

// 删除
c31.next = d31;
