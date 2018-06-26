### Promise实现原理

#### 1 函数雏形
我们先来看个简单的例子,如下:
```
new Promise(function (resolve) {
            resolve('Hello World');
        }).then(function (value) {
            console.log('then = ' + value);
        })
```
根据这个我们先制作Promise的雏形,

```
function Promise(fn) {
            var value = null;
            var callbacks = [];

            this.then = function (onFulfilled) {
                callbacks.push(onFulfilled);
                return this;
            }

            function resolve(newValue) {
                setTimeout(function () {
                    callbacks.forEach(function (callback) {
                        callback(newValue);
                    });
                });
            }

            fn(resolve);

        }
        
 new Promise(function (resolve) {
            resolve('Hello World');
        }).then(function (value) {
            console.log('then = ' + value);
        })
 // 输入then = Hello World
```

这样会得到一个可以输出的Promise,我们来解释几个问题<br/>
1.为什么在resolve里面使用setTimeout()?<br/>
如果不使用 setTimeout , resolve里面任务会在then之前就执行完毕, 无法存储then里面的事件,造成数组为空,
所以setTimeout 作为宏任务使事件滞后,使then事件可以被注册

#### 2 引入状态值

```

```
