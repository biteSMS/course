# ES6+

## 指数操作符

在ES7中引入了指数运算符`**`，`**`具有与`Math.pow(..)`等效的计算结果。

## Object

### Object.values()

`Object.values()`是一个与`Object.keys()`类似的新函数，但返回的是Object自身属性的所有值，不包括继承的值。

### Object.entries()

`Object.entries()`函数返回一个给定对象自身可枚举属性的键值对的数组。

### Object.getOwnPropertyDescriptors()

`Object.getOwnPropertyDescriptors()`函数用来获取一个对象的所有自身属性的描述符。

## Array

### Array.prototype.includes()

`includes()` 函数用来判断一个数组是否包含一个指定的值，如果包含则返回 `true`，否则返回`false`。

### Array.prototype.flat()

`flat()` 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

### Array.prototype.flatMap()

`flatMap()` 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。

```js
var arr1 = [1, 2, 3, 4]

arr1.map(x => [x * 2])
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2])
// [2, 4, 6, 8]

// 只会将 flatMap 中的函数返回的数组 “压平” 一层
arr1.flatMap(x => [[x * 2]])
// [[2], [4], [6], [8]]
```

## 异步

### Promise.prototype.finally()

在某些情况下，你想要在无论Promise运行成功还是失败，运行相同的代码，例如清除，删除对话，关闭数据库连接等。`.finally()`允许你指定最终的逻辑

```js
doSomething()
  .then(doSomething1)
  .then(doSomething2)
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    // finish here!
  })
```

### async/await

async/await是一种用于处理js异步操作的语法糖，可以帮助我们摆脱回调地狱，编写更加优雅的代码。

- 异常捕获
- 并行处理

### 异步迭代

ES2018引入异步迭代器（asynchronous iterators），这就像常规迭代器，除了`next()`方法返回一个Promise。因此`await`可以和`for...of`循环一起使用，以串行的方式运行异步操作。

```js
async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}
```

## Rest/Spread 属性

ES6引入了Rest参数和扩展运算符。三个点（...）仅用于数组。Rest参数语法允许我们将一个不定数量的参数表示为一个数组。展开操作符以相反的方式工作，将数组转换成可传递给函数的单独参数。

```js
//Rest
restParam(1, 2, 3, 4, 5);
function restParam(p1, p2, ...p3) {
  // p1 = 1
  // p2 = 2
  // p3 = [3, 4, 5]
}

//Spread
const values = [99, 100, -1, 48, 16];
console.log( Math.max(...values) ); // 100
```

ES9为对象解构提供了和数组一样的Rest参数（）和展开操作符

用途：

- 函数参数传递
- 浅拷贝对象、合并对象
- 将类数组对象转为真正的数组

## 正则表达式

### 命名捕获组

ES9允许命名捕获组使用符号`?<name>`，在打开捕获括号`(`后立即命名

### 反向断言

目前JavaScript在正则表达式中支持使用?=进行先行断言（lookahead）。这意味着匹配会发生，但不会有任何捕获，并且断言没有包含在整个匹配字段中。ES2018引入以相同方式工作但是匹配前面的反向断言（lookbehind），使用?<=进行反向断言。

## BigInt

BigInt 表示一个可以表示任意精度的新的数字原始类型。

