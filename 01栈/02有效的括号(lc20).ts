/*
* 输入："(]"
* 输出：false
* 新建一个栈
* 扫描字符串，遇左括号入栈，遇到和栈顶括号类型匹配的右括号出栈，类型不匹配直接判定为不合法。
* 最后栈空了就合法，否则就不合法。
* */
const isValid = function (s) {
    if (s.length % 2 === 1) return false

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const c = s[i];

        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else {
            const t = stack[stack.length - 1];
            if (
                (t === '(' && c === ")") ||
                (t === '{' && c === "}") ||
                (t === '[' && c === "]")
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid("(]"));