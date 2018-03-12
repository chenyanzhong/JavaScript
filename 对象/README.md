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
#### 2.1 工厂模式 及 构造函数模式
``` 
function createPerson(name) {
    let obj = new Object();
    obj.name = name;
    obj.sayName = function () {
        console.log(this.name);
    }
    return obj;
}
let person = createPerson("工厂");
person.sayName();
``` 

``` 
function Person(name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name);
    }
}
let person = new Person("构造器");
person.sayName();
``` 
上述方式可以构建需要的对象，但涉及到方法的构建会发现每次需要对方法进行重新构建，我们就可以通过原型解决这个问题

#### 2.2 原型模式

``` 
function Person() {

}
Person.prototype.name = "name";
Person.prototype.sayName = function () {
    console.log(this.name);
};

let person = new Person();
person.sayName();

let person2 = new Person();
person2.sayName();
// true
console.log(person.sayName === person2.sayName);
``` 
上述两个对象，调用sayName的指针都相等，说明可以减少方法的构建
但如果prototype设置常量会发现存在下面的问题
``` 
function Person() {

}
Person.prototype.friends = ['a', 'b', 'c'];

let person = new Person();
console.log("person.friends = " + person.friends);
person.friends.push('d');
console.log("person.friends = " + person.friends);

let person2 = new Person();
console.log("person2.friends = " + person2.friends);
// 输出
// person.friends = a,b,c
// person.friends = a,b,c,d
// person2.friends = a,b,c,d
``` 

会发现改了对象一，对象二的常量也会随之共享，这是将会存在很大的问题

#### 2.3 组合模式

我们可以用组合模式解决这个常量这个问题

``` 
function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function () {
    console.log(this.name);
};
let person2 = new Person("name");
person2.sayName();
```

组合模式可以解决常量共享及方法新建的问题，这个是我们常见的创建方式

#### 2.3 动态原型模式

在原本的状态加个判断，进一步优化，当没调用这个方法则不新建方法

```
function Person(name) {
    this.name = name;
    if (typeof this.sayName != "function") {
        Person.prototype.sayName = function () {
            console.log(this.name);
        }
    }
}
let person = new Person("name");
person.sayName();
```
