console.log('function');

function log(msg) {
    console.log(msg);
}
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

var ninja2 = {
    skulk: creep
}
log(ninja2.skulk() === ninja2);

// 3.作为对象调用
// 创建一个新对象
// 
function obj() {
    return this;
}
var c = new obj();
log(c === window);
log(c.__proto__);

function NIinja() {
    this.skult = function () {
        return this;
    }
}
var n1 = new NIinja();
var n2 = new NIinja();
log(n1.skult() === n1);
log(n2.skult() === n2);
