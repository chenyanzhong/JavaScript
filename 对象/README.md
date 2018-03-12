# 对象



#### 1. 理解对象
#### 1.1 属性类型

writable: 是否能修改属性的值
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
```
#### 1.2 属性方法

  
#### 2. 创建对象
#### 2.1 工厂模式
#### 2.2 原型模式

