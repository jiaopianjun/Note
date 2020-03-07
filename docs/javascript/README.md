---
title: Javascript基础知识
lang: zh
sidebarDepth: 2
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---

## 第一章 javascript字符串

###### 1.0、字符串基本数据类型

    
```
1、javascript字符串可以是一个基本数据类型或者一个对象
2、与JavaScript中其他四种数据类型并列：数字、布尔、null 和 undefined
3、作为基本数据类型，字符串也是JavaScript直接量：这是一个集合，包含数字 数组 对象和正则表达式、数字和布尔值的直接量格式
    
```
###### 1.0、字符串对象

```
1、字符串对象叫做string，与其他JavaScript对象一样，它拥有预先构建到对象类型中的一组属性
2、可以使用JavaScript的new运算符来实例化一个string对象，从而创建一个新的对象实例：

   var city = new String("This is pin")

3、一旦实例化了，可用的字符串属性的任何一个，都可以通过字符串进行访问，例如：

   var lcCity = city.toLowerCase(); // 将字符串中的大写字母转换成小写   结果：this is pin
   
4、如果你没有使用new来访问String构造函数，将会创建一个字符串直接量，而不是一个String对象

    var city = String("Ar. louis");

5、如果需要在一个直接量上访问String 对象方法：让JavaScript引擎创建了一个String对象，用它包含了字符串直接量，执行方法调用，然后丢弃掉string对象

6、与使用字符串直接量相比，使用String的时候，要依赖于具体环境，除非你计划使用String对象属性，否则应该尽可能地使用字符串直接量，如果你要使用String方法，那么将字符串创建为对象。
```
###### 1.1、连接两个或多个 字符串 

```
1、问题：想要把两个或者多个字符串合并为一个
   解决方案：
       使用相加（+）运算符来连接字符串
       
       var str1 = 'ming tian';
       var str2 = 'qu na li';
       var str3 = str1 + str2;    // ming tian qu na li
       
2、有一个内建的string 方法，可以连接多个字符串，这就是concat,它接受一个或者多个字符串参数，其中每一个都连接到字符串对象的末尾；
    
    var str = "" .concat("ni","shi","yi","zhu")  //ni shi yi zhu
```
###### 1.2、连接字符串和另一种数据类型


```
1、问题：想要把一个字符串和另一种数据类型（如数字）连接起来
   解决方案：
   
   使用与连接字符串的时候完全相同的运算符  +  或者 += 
   var num = 131
   var str = "ni shi shui"
   var strr2 = str + num  //ni shi shui 131
   
2、注意点：

    当把一个字符串和其他数据类型相加的时候，过程有所不同。在其他数据类型的情况下，如布尔或者数字，   js引擎先将其他数据转换为一个字符串，然后在将其连接
```
###### 1.3、条件比较字符串

```
1、问题：想要比较两个字符串看看是否相同

   解决方案：
   
   使用 ==  运算符来判断
   
   如果遇到大小写混合的例子可以先使用 toLowerCase 或 toUpperCase 将字符串转换为大写或者小写来比对，这两个方法不接受任何参数。
   
2、有时候，不想让自动数据发生转化，想要在比较的值拥有不同的数据类型时，比较失败，如果一个值是字符直接量，e
```



