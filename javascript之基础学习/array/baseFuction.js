log('--------__base__--------');

var arr1 = new Array(1, 2, 3, 4, 5);
var arr2 = [6, 7, 8, 9];
var allArr = arr1.concat(arr2);

log(allArr);

var temp = allArr.join('-');
log(temp);

log('pop() 删除并返回数组的最后一个元素');
temp = allArr.pop();
log(temp);

log('push(9) 向数组的末尾添加一个或更多元素，并返回新的长度');
temp = allArr.push(9);
log(allArr);

log('shift() 删除并返回数组的第一个元素');
temp = allArr.shift();
log(allArr);

log('unshift(1) 删除并返回数组的第一个元素');
temp = allArr.unshift(1);
log(allArr);

log('splice(0, 1, 1) 删除元素，并向数组添加新元素');
temp = allArr.splice(0, 1, 1);
log(allArr);

log('slice(1, 4) 从某个已有的数组返回选定的元素');
temp = allArr.slice(1, 4);
log(temp);

log('reverse() 颠倒数组中元素的顺序');
temp = allArr.reverse();
log(allArr);

log('sort() 对数组的元素进行排序');
temp = allArr.sort(function (val1, val2) {
    return val2 - val1;
});
log(temp);

