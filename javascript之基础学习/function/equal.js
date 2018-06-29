log('--------__equal__--------');

function log(msg) {
    console.log(msg);
}

// 等价函数
function __equal__(fn) {
    return function (...args) {
        return fn.apply(this, args);
    }
}
//第一种
function add(x, y) {
    return x + y
}
var addnew1 = __equal__(add);
log(add(1, 2));
log(addnew1(1, 2));

function __watch__(fn) {
    return function (...args) {
        log('wathced');
        var ret = fn.apply(this, args);
        return ret;
    }
}
var addwatch = __watch__(add);
log(addwatch(1, 5));


//第二种
let obj2 = {
    x: 1,
    y: 2,
    add: function () {
        console.log(this)
        return this.x + this.y
    }
}

var addnew2 = __equal__(obj2.add);
log(obj2.add()); //3
log(addnew2.call(obj2)); //3

// 节流（throtle）函数
function throttle(fn, wait) {
    var timer = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => timer = null, wait);
            console.log(timer)
            return fn.apply(this, args)
        }
    }
}

function logT() {
    console.log("throttle clicked")
}

var throttleF = throttle(logT, 5000);
throttleF();
throttleF();
throttleF();
