log('--------__es6__--------');
log('复制对象');
var a1 = [1, 2];
var a2 = a1.concat();
a2.push('复制对象', 'es5');
log(a1);
log(a2);

var a3 = [...a1];
a3.push('复制对象', 'es6');
log(a3);

log('合并数组');
a2 = a1.concat(a2);
a2.splice(4, 1, '合并数组');
log(a2);

a3 = [...a1, ...a3];
a3.splice(4, 1, '合并数组');
log(a3);

log('获取数值');
var temp = a2.slice(1, 2);
log(temp);

[one, two, ...rest] = a2;
log(two);

log('转化对象');
let arrayLike = {
    '0': 'a',
    '1': 'b',
    length: 3
};
// ES5的写法
arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
log(arr1);
// ES6的写法 Array.from
// 两类对象:类似数组的对象（array-like object）和
// 可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
log(arr2);

log('copyWithin');
arr2 = [1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]
log(arr2);

log('find() 和 findIndex()');
log('只返回第一个找到的');
var num = [1, 5, 10, 15].find(function (value, index, arr) {
    return value > 9;
})
log(num);
