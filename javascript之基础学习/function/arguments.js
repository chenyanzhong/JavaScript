log('--------__arguments__--------');

//arguments
function sum1(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * sum1(num - 1);
    }
}
log(sum1(6));

function sum2(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}
log(sum2(6));

function outer() {
    inner();
}
function inner() {
    log(inner.caller);
}
outer();

function inner() {
    // 严格模式下会报错
    log(arguments.callee.caller);
}
outer();
inner();




