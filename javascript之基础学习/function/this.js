log('--------__this__--------');

// 1.作为函数调用
function creep() {
    console.log('creep');
    return this;
}

var sneak = creep;
log(sneak() === window);
window.creep();

// 2.作为方法调用
var ninja1 = {
    skulk: creep
}
log(ninja1.skulk() === ninja1);

