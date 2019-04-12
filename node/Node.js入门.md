# Node.js入门

## 为什么要学node？

开发环境是离不开Node的。前端的大部分工具链都是Node上的，例如Webpack、Babel、SASS、LESS等等等等，以及这些工具的插件。熟悉Node，能够更好的使用这些工具。Node.js除了能够辅助大前端开发外，还可以编写Web应用，封装Api，组装RPC服务等。和其它技术相比， Node.js 简单易学，性能好、部署容易，能够轻松处理高并发场景下的大量服务器请求。

## node可以做什么？

- node中间层（允许前端来做网站路由、页面渲染、提高首页加载速度、SEO优化）
- 服务器端（PayPal、Uber、Ebay……）
- 跨平台桌面应用（Visual Studio Code、Skype、Atom……）
- 命令行程序
- 其它奇技淫巧
- ……

## npm

NPM（node package manager），通常称为node包管理器。顾名思义，它的主要功能就是管理node包，包括：安装、卸载、更新、查看、搜索、发布等。npm不需要单独安装。在安装Node的时候，会连带一起安装。

### npm init

npm init用来初始化生成一个新的`package.json`文件。

#### package.json

定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。

| 字段            | 含义                                   |
| --------------- | -------------------------------------- |
| dependencies    | 项目运行所依赖的模块                   |
| devDependencies | 项目开发所需要的模块                   |
| main            | 加载的入口文件                         |
| config          | 添加命令行的环境变量                   |
| engines         | 指明了该项目所需要的node.js版本        |
| bin             | 指定各个内部命令对应的可执行文件的位置 |
| scripts         | 用于指定脚本命令                       |

```json
{
  "name": "demo",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "node build/dev-server.js",
    "build": "node build/build.js",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit/specs",
    "pretest": "npm run lint",
    "posttest": "echo 'Finished running tests'"
  },
  "dependencies": {
    "vue": "^2.2.2",
    "vue-router": "^2.2.0"
  },
  "devDependencies": {
    "autoprefixer": "^6.7.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^7.1.1",
    "babel-loader": "^6.2.10",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-preset-env": "^1.2.1",
    "babel-preset-stage-2": "^6.22.0",
    "babel-register": "^6.22.0"
  },
  "bin": {
    "someTool": "./bin/someTool.js"
  }
}
```

### npm scripts

npm不仅可以用于模块管理，还可以用于执行脚本。package.json文件有一个scripts字段，可以用于指定脚本命令，供npm直接调用。

`npm run`为每条命令提供了`pre-`和`post-`两个钩子（hook）。以`npm run lint`为例，执行这条命令之前，npm会先查看有没有定义prelint和postlint两个钩子，如果有的话，就会先执行`npm run prelint`，然后执行`npm run lint`，最后执行`npm run postlint`。

### npm search

npm search命令用于搜索npm仓库，它后面可以跟字符串，也可以跟正则表达式。

### npm install

Node模块采用npm install命令安装。每个模块可以全局安装，也可以本地安装。全局安装指的是将一个模块安装到系统目录中，各个项目都可以调用。一般来说，全局安装只适用于工具模块，比如eslint和create-react-app。“本地安装”指的是将一个模块下载到当前项目的node_modules子目录，然后只有在项目目录之中，才能调用这个模块。

| 参数            |                                 |
| --------------- | ------------------------------- |
| --save / -S     | 模块名将被添加到dependencies    |
| --save-dev / -D | 模块名将被添加到devDependencies |
| -g              | 将模块安装到全局环境中          |

install命令总是安装模块的最新版本，如果要安装模块的指定版本，可以在模块名后面加上@和版本号。

一旦安装了某个模块，就可以在代码中用`require`命令加载这个模块。

### cnpm

[淘宝NPM镜像](http://npm.taobao.org/)

## CommonJS

模块化结构：AMD、CMD、CommonJS、ES6

NodeJS是`CommonJS`规范的主要实践者。它有四个重要的环境变量为模块化的实现提供支持：`module、exports、require、global`。 实际用时，使用`module.exports`定义对外输出的API，用`require`来引用模块。

### 模块定义

```js
function fn() {}
exports.propName = fn;
module.exports = fn;
```

一个`module`对象代表模块本身，`exports`是`module`的属性。一般通过在`exports`上挂载属性即可定义导出，也可以直接给`module.exports`赋值来定义导出(推荐)。

### 模块引用

```js
const fs = require('fs');
```

![img](http://www.runoob.com/wp-content/uploads/2014/03/nodejs-require.jpg)

## 基本模块

> 因为Node.js是运行在服务区端的JavaScript环境，服务器程序和浏览器程序相比，最大的特点是没有浏览器的安全限制了，而且，服务器程序必须能接收网络请求，读写文件，处理二进制内容，所以，Node.js内置的常用模块就是为了实现基本的服务器功能。这些模块在浏览器环境中是无法被执行的，因为它们的底层代码是用C/C++在Node.js运行环境中实现的。

### global

JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

- __filename

  __filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径。

- __dirname

  __dirname 表示当前执行脚本所在的目录。

- console

- setTimeout / clearTimeout

- setInterval / clearInterval

- exports

- module

- require()

- process

  process 是一个全局变量，即 global 对象的属性。

  | process.argv | 返回一个数组，由命令行执行脚本时的各个参数组成。它的第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。 |
  | ------------ | ------------------------------------------------------------ |
  | process.env  | 返回一个对象，成员为当前 shell 的环境变量。                  |
  | ……           | ……                                                           |

### fs

Node.js内置的`fs`模块就是文件系统模块，负责读写文件。和所有其它JavaScript模块不同的是，`fs`模块同时提供了异步和同步的方法。

#### 同步

```js
//同步读文件
var fs = require('fs');
try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(err)
}

//同步写文件
var fs = require('fs');
try {
    var data = 'Hello, Node.js';
	fs.writeFileSync('output.txt', data);
    console.log('ok.')
} catch (err) {
    console.log(err)
}
```

#### 异步

```js
//异步读文件
var fs = require('fs');
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

//异步写文件
var fs = require('fs');
var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
```

异步读取时，传入的回调函数接收两个参数，当正常读取时，`err`参数为`null`，`data`参数为读取到的String。当读取发生错误时，`err`参数代表一个错误对象，`data`为`undefined`。这也是Node.js标准的回调函数：第一个参数代表错误信息，第二个参数代表结果。后面我们还会经常编写这种回调函数。

#### Stream

```js
//下面是一个从文件流读取文本内容的示例：
var fs = require('fs');
// 打开一个流:
var rs = fs.createReadStream('sample.txt', 'utf-8');
rs.on('data', function (chunk) {
    console.log(`DATA:${chunk}`);
});
rs.on('end', function () {
    console.log('END');
});
//要注意，data事件可能会有多次，每次传递的chunk是流的一部分数据。
```

`pipe()`方法可以把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了，下面是一个简易的复制文件程序：

```js
var fs = require('fs');
var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');
rs.pipe(ws);
```

### http

提供HTTP服务器功能。

用Node.js实现一个HTTP服务器程序非常简单。我们来实现一个最简单的Web程序`hello.js`，它对于所有请求，都返回`Hello world!`：

```js
var http = require('http');
// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, {'Content-Type': 'text/html'});
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello world!</h1>');
});
// 让服务器监听8080端口:
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
```

`request`对象封装了HTTP请求，我们调用`request`对象的属性和方法就可以拿到所有HTTP请求的信息；`response`对象封装了HTTP响应，我们操作`response`对象的方法，就可以把HTTP响应返回给浏览器。

### path

处理文件路径，可以方便地构造目录。

```js
var path = require('path');
// 解析当前目录:
var path1 = path.resolve('./foo', 'bar', 'index.html');
// 返回: '/Users/bibi/foo/bar/index.html'
var path2 = path.join('/foo', 'bar', 'index.html');
// 返回：'/foo/bar/index.html'
```

### url

解析URL。

```js
//通过parse()方法将一个字符串解析为一个Url对象：
var url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
//结果如下：
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/path/to/file',
  path: '/path/to/file?query=string',
  href: 'http://user:pass@host.com:8080/path/to/file?query=string#hash'
}

url.format(urlObj)　//format这个方法是将传入的url对象编程一个url字符串并返回
```

## 实现简易文件服务器

```js
var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');
// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir: ' + root);
// 创建服务器:
var server = http.createServer(function (request, response) {
    // 获得URL的path，类似 '/css/bootstrap.css':
    var pathname = url.parse(request.url).pathname;
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css':
    var filepath = path.join(root, pathname);
    // 获取文件状态:
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            fs.createReadStream(filepath).pipe(response);
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
```

## 参考

> [《JavaScript 标准参考教程（alpha）》](http://javascript.ruanyifeng.com/)，by 阮一峰
>
> [node.js教程 -菜鸟教程](http://www.runoob.com/nodejs/nodejs-tutorial.html)
>
> [Node.js 中文文档](http://nodejs.cn/api/)
>
> [web系列之模块化——AMD、CMD、CommonJS、ES6 整理&&比较](https://juejin.im/post/5bd0773051882576c51de038#heading-4)
>
> [node.js -廖雪峰](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434501245426ad4b91f2b880464ba876a8e3043fc8ef000)
>
> 《Node.js实战 第2版》

