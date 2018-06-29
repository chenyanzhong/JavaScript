log('--------__functor__--------');

//函子（Functor）我们来实现链式调用
class Num {

    constructor(value) {
        this.value = value;
    }

    add5() {
        return new Num(this.value + 5)
    }

    double() {
        return new Num(this.value * 2)
    }

    getValue() {
        return this.value;
    }

    static of(value) {
        return new Num(value);
    }
}

var num = Num.of(2).add5().double().getValue();
log('Num = ' + num);


// 换种思路能不能传人函数
class Functor {

    constructor(value) {
        this.value = value;
    }

    map(fn) {
        return Functor.of(fn(this.value))
    }

    getValue() {
        return this.value;
    }

    static of(value) {
        return new Functor(value);
    }

}

function double(x) {
    return x * 2
}

function add5(x) {
    return x + 5
}

num = Functor.of(5).map(add5).map(double).getValue();
log('Functor = ' + num);


// Maybe 函子 链式函数
class Maybe {

    constructor(value) {
        this.value = value;
    }

    map(fn) {
        return this.value ? Maybe.of(fn(this.value)) : Maybe.of(null);
    }

    getValue() {
        return this.value;
    }

    static of(val) {
        return new Maybe(val);
    }
}

var a = Maybe.of('to_upper_case').map(function (s) {
    return s.toUpperCase();
}).getValue();
log('Maybe = ' + a);

class Maybe2 {

    constructor(value) {
        this.value = value;
    }

    map(fn) {
        return this.value ? Maybe2.of(fn(this.value)) : Maybe2.of(null);
    }

    getValue() {
        return this.value;
    }

    chain(fn) {
        return this.map(fn).getValue();
    }

    static of(value) {
        return new Maybe2(value);
    }

}

let toUpperCase = str => str.toUpperCase();
let html = function (id) {
    return function (innerHTML) {
        Maybe2
            .of(document.getElementById(id))
            .map(dom => {
                dom.innerHTML = innerHTML;
            })
        return innerHTML;
    }
}

var may = Maybe2.of(Maybe2.of('str')).getValue().map(toUpperCase).getValue();
log(may);

let htmlText = html('text');
htmlText('html text change');

var may = Maybe2.of(Maybe2.of('str')).getValue().map(toUpperCase).getValue();
log(may);

may = Maybe2.of('被修改的值').map(toUpperCase).chain(function (val) {
    htmlText(val);
});
log(may);