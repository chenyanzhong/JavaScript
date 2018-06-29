log('--------__call apply__--------');

// 等于 window.color = 'red'; 
var color = 'red';
var obj = { color: 'white' };

function sayColor() {
    log(this.color);
}

sayColor();

sayColor.call(this);
sayColor.call(window);
sayColor.call(obj);

sayColor.apply(this);
sayColor.apply(window);
sayColor.apply(obj);

var oSayColor = sayColor.bind(obj );
oSayColor();
