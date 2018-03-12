# 对象

#### 1. 理解对象
#### 1.1 属性类型

writable: 是否能修改属性的值</br>
configurable 能否通过delete删除属性从而定义属性，能否修改属性特性

```
let person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "name",
});
// 下面会报错，因为writable代表不可以重写
person.name = "newName";
```

```
Object.defineProperty(person, "name", {
    configurable: false,
    value: "name",
});
// 之后不能调用defineProperty在进行设置，不然会报错
```

#### 1.2 属性方法

##### 1.2.1 Object.defineProperty(obj, prop, descriptor)
方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象

```
let obj = new Object();
Object.defineProperty(obj, 'name', {
    value: 'name'
})
console.log(obj.name)  //name
``` 

##### 1.2.2 Object.defineProperties(obj, props)
方法直接在一个对象上定义一个或多个新的属性或修改现有属性，并返回该对象

``` 
let obj = new Object();
Object.defineProperties(obj, {
    name: {
        value: 'name',
    },
    age: {
        value: 18,
    }
})
// name, 18
console.log(obj.name, obj.age);
``` 

#### 2. 创建对象
#### 2.1 工厂模式
#### 2.2 原型模式

