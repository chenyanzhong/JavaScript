log('--------__call apply__--------');

function log(msg) {
    console.log(msg);
}

function add(num1, num2) {
    return num1 + num2;
}

function curriedAdd(num2) {
    return add(5, num2);
}

log(add(2, 3));
log(curriedAdd(3));

function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    console.log(args);
    return function () {
        var innerArgs = Array.prototype.slice.call(arguments);
        console.log(innerArgs);
        var finalArgs = args.concat(innerArgs);
        console.log(finalArgs);
        return fn.apply(null, finalArgs);
    }
}

// 柯里化
// 定义：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数
var curriedAdd = curry(add, 5);
log(curriedAdd(3));

function addX(y) {
    return function (x) { return x + y; };
}
var newAdd = addX(2);
console.log(newAdd(1));


function add(num1, num2) {
    return num1 + num2;
}

function handle(y) {
    return function (x) {
        return x + y;
    }
}
let handleNum1 = handle(2);
log(handleNum1(1));
