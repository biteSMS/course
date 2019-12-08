# **Web前端第七节课**

## 一些基本概念

### 像素

像素是指由图像的小方格组成的，这些小方块都有一个明确的位置和被分配的色彩数值，小方格颜色和位置就决定该图像所呈现出来的样子。

图片、电子屏幕（手机、电脑）就是由无数个具有特定颜色和特定位置的小方块拼接而成。

像素可以作为图片或电子屏幕的最小组成单位。

### 分辨率

分辨率指含有的像素数。

iPhone XS Max 的分辨率分别为 2688 x 1242。这表示手机分别在垂直和水平上所具有的像素点数。

一张图片的分辨率为 800 x 400。这表示图片分别在垂直和水平上所具有的像素点数为 800 和 400。

### 设备独立像素 (dip)

智能手机发展非常之快，在几年之前，我们还用着分辨率非常低的手机，比如下面左侧的白色手机，它的分辨率是  320x480，我们可以在上面浏览正常的文字、图片等等。

但是，随着科技的发展，低分辨率的手机已经不能满足我们的需求了。很快更高分辨率的屏幕诞生了，比如下面的黑色手机，它的分辨率是 640x940，正好是白色手机的两倍。

理论上来讲，在白色手机上相同大小的图片和文字，在黑色手机上会被缩放一倍，因为它的分辨率提高了一倍。这样，岂不是后面出现更高分辨率的手机，页面元素会变得越来越小吗？

<img src="http://cdn.pannnda.com/course/mobile/assets/dip1.png" style="zoom:40%;" />

然而，事实并不是这样的，我们现在使用的智能手机，不管分辨率多高，他们所展示的界面比例都是基本类似的。

<img src="http://cdn.pannnda.com/course/mobile/assets/dip2.png" style="zoom:40%;" />

所以我们必须用一种单位来同时告诉不同分辨率的手机，它们在界面上显示元素的大小是多少，这个单位就是设备独立像素(Device Independent Pixels)，简称 DIP。

比如列表的宽度为 300 个像素，那么在一条水平线上，白色手机会用 300 个物理像素去渲染它，而黑色手机实际上会用 600 个物理像素去渲染它。实际上我们可以说：列表的宽度为 300 个设备独立像素。

打开 chrome 的开发者工具，我们可以模拟各个手机型号的显示情况，每种型号上面会显示一个尺寸，比如 iPhone X 显示的尺寸是 375x812，实际 iPhone X 的分辨率会比这高很多，这里显示的就是设备独立像素。

### 设备像素比 (dpr)

设备像素比(device pixel ratio)简称dpr，即物理像素和设备独立像素的比值。

浏览器为我们提供了 window.devicePixelRatio 来帮助我们获取 dpr。

实际上，从苹果提出视网膜屏幕开始，才出现设备像素比这个概念，因为在这之前，移动设备都是直接使用物理像素来进行展示。

![](./assets/dpr.jpeg)

### CSS 像素

在写 CSS 时，我们用到最多的单位是 px，即 CSS 像素，当页面缩放比例为 100% 时，一个 CSS 像素等于一个设备独立像素。

但是 CSS 像素是很容易被改变的，当用户对浏览器进行了放大，CSS 像素会被放大，这时一个CSS 像素会跨越更多的物理像素。

`页面的缩放系数 = CSS像素 / 设备独立像素`。

### 视口

视口(viewport)代表当前可见的计算机图形区域。在 Web 浏览器术语中，通常与浏览器窗口相同，但不包括浏览器的 UI。

一般我们所说的视口共包括三种：布局视口、视觉视口和理想视口，它们在屏幕适配中起着非常重要的作用。

**布局视口**

<img src="http://cdn.pannnda.com/course/mobile/assets/layout.png" style="zoom:50%;" />

布局视口(layout viewport)：当我们以百分比来指定一个元素的大小时，它的计算值是由这个元素的包含块计算而来的。当这个元素是最顶级的元素时，它就是基于布局视口来计算的。

所以，布局视口是网页布局的基准窗口，在 PC 浏览器上，布局视口就等于当前浏览器的窗口大小（不包括borders 、margins、滚动条）。

在移动端，布局视口被赋予一个默认值，大部分为 980px，这保证 PC 的网页可以在手机浏览器上呈现，但是非常小，用户可以手动对网页进行放大。

我们可以通过调用`document.documentElement.clientWidth / clientHeight`来获取布局视口大小。

**视觉窗口**

<img src="http://cdn.pannnda.com/course/mobile/assets/visual.png" style="zoom:50%;" />

视觉视口(visual viewport)：用户通过屏幕真实看到的区域。

视觉视口默认等于当前浏览器的窗口大小（包括滚动条宽度）。

当用户对浏览器进行缩放时，不会改变布局视口的大小，所以页面布局是不变的，但是缩放会改变视觉视口的大小。

例如：用户将浏览器窗口放大了 200%，这时浏览器窗口中的 CSS 像素会随着视觉视口的放大而放大，这时一个 CSS 像素会跨越更多的物理像素。

所以，布局视口会限制你的 CSS 布局而视觉视口决定用户具体能看到什么。

我们可以通过调用`window.innerWidth / innerHeight`来获取视觉视口大小。

**理想视口**

布局视口在移动端展示的效果并不是一个理想的效果，所以理想视口(ideal viewport)就诞生了：网站页面在移动端展示的理想大小。能完美适配移动设备的viewport。即不需要用户缩放和横向滚动条就能正常的查看网站的所有内容，显示的文字的大小是合适的。

当页面缩放比例为 100% 时，1 单位的 CSS 的 pixel 是严格相等于 1 单位的设备 pixel，即 CSS 像素 = 设备独立像素，理想视口 = 视觉视口。

我们可以通过设置 Meta viewport 来实现。

**Meta viewport**

`<meta>`标签元素表示那些不能由其它HTML元相关元素之一表示的任何元数据信息，它可以告诉浏览器如何解析页面。

我们可以借助`<meta>`元素的 viewport 来帮助我们设置视口、缩放等，从而让移动端得到更好的展示效果。

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
```

| `Value`         | 可能值                 | 描述                                                      |
| --------------- | ---------------------- | --------------------------------------------------------- |
| `width`         | 正整数或`device-width` | 以`pixels`（像素）为单位， 定义布局视口的宽度。           |
| `initial-scale` | `0.0 - 10.0`           | 定义页面初始缩放比率。                                    |
| `minimum-scale` | `0.0 - 10.0`           | 定义缩放的最小值；必须小于或等于`maximum-scale`的值。     |
| `maximum-scale` | `0.0 - 10.0`           | 定义缩放的最大值；必须大于或等于`minimum-scale`的值。     |
| `user-scalable` | `yes / no`             | 如果设置为 `no`，用户将不能放大或缩小网页。默认值为 yes。 |

为了在移动端让页面获得更好的显示效果，我们必须让布局视口、视觉视口都尽可能等于理想视口。

`device-width`就等于理想视口的宽度，所以设置`width=device-width`就相当于让布局视口等于理想视口。

### CSS 单位 rem

在 [W3C](http://www.w3.org/TR/css3-values/#rem-unit) 规范中是这样描述`rem`的:

> font size of the root element.

简单的理解，rem 就是相对于根元素`<html>`的 font-size 来做计算。

## 移动端适配方案

### flexible 方案

[flexible 方案](https://github.com/amfe/lib-flexible)是阿里早期开源的一个移动端适配解决方案，引用 flexible 后，我们在页面上统一使用 rem 来布局。

上面的代码中，将`html`节点的`font-size`设置为页面`clientWidth`(布局视口)的`1/10`，即`1rem`就等于页面布局视口的`1/10`，这就意味着我们后面使用的`rem`都是按照页面比例来计算的。如此一来，页面中的元素，都可以通过`rem`单位来设置。他们会根据`html`元素的`font-size`值做相应的计算，从而实现屏幕的适配效果。

对于视觉稿上的元素尺寸换算，只需要原始的`px值`除以`rem基准值`即可。

在实际生产当中，每个布局都要计算非常繁琐，我们可以借助许多插件和工具来帮我们计算，例如 vscode 的插件和 PostCSS 的 px2rem 插件等。

随着时代在变化，前端技术在不断的变化，viewport 单位得到众多浏览器的兼容， 上面这种方案现在已经被官方弃用。Flexible 已经不是最佳方案，Flexible 已经完成了他自身的历史使命，我们可以放下 Flexible，拥抱新的变化。

### vw、vh方案

`vh、vw`方案即将视觉视口宽度 `window.innerWidth`和视觉视口高度 `window.innerHeight` 等分为 100 份。

上面的`flexible`方案就是模仿这种方案，因为早些时候`vw`还没有得到很好的兼容。

- `vw(Viewport's width)`：`1vw`等于视觉视口的`1%`
- `vh(Viewport's height)` :`1vh` 为视觉视口高度的`1%`

<img src="http://cdn.pannnda.com/course/mobile/assets/vw.png" style="zoom:40%;"/>

Flexible 的设计其实就为后面转换 vw 单位做了伏笔，这是设计者强大之处，当初设计的时候就有vw的影子存在。以前的 Flexible 方案是通过 JavaScript 来模拟`vw`的特性，那么到今天为止，`vw`已经得到了众多浏览器的支持，也就是说，可以直接考虑将`vw`单位运用于我们的适配布局中。

这里的比例关系我们也不用自己换算，我们可以使用 PostCSS 的 postcss-px-to-viewport 插件帮我们完成这个过程。写代码时，我们只需要根据 UI 给的设计图写 px 单位即可。

碰到`vw`和`px`混合使用的时候，可以结合`calc()`函数一起使用。

## 横屏适配

<img src="http://cdn.pannnda.com/course/mobile/assets/landscape.png" style="zoom:40%;"/>

很多时候我们要对横屏和竖屏显示不同的布局，所以我们需要检测在不同的场景下给定不同的样式

### JavaScript 检测

`window.orientation`:获取屏幕旋转方向

```js
window.addEventListener("resize", ()=>{
    if (window.orientation === 180 || window.orientation === 0) { 
      // 正常方向或屏幕旋转180度
        console.log('竖屏');
    };
    if (window.orientation === 90 || window.orientation === -90 ){ 
       // 屏幕顺时钟旋转90度或屏幕逆时针旋转90度
        console.log('横屏');
    }  
}); 
```

### CSS 检测横屏

```css
@media screen and (orientation: portrait) {
  /*竖屏...*/
} 
@media screen and (orientation: landscape) {
  /*横屏...*/
}
```

## 适配 iPhone X

### 安全区域

安全区域指的是一个可视窗口范围，处于安全区域的内容不受圆角（corners）、齐刘海（sensor housing）、小黑条（Home Indicator）影响，如下图所示：

<img src="http://cdn.pannnda.com/course/mobile/assets/safe-area.png" style="zoom:70%;" />

### viewport-fit

iOS11 新增特性，苹果公司为了适配 iPhoneX 对现有 Meta viewport 标签的一个扩展，用于设置网页在可视窗口的布局方式

| 值             | 描述                                                 |
| -------------- | ---------------------------------------------------- |
| auto / contain | 可视窗口完全包含网页内容。页面内容显示在安全区域内。 |
| cover          | 网页内容完全覆盖可视窗口。页面内容充满屏幕。         |

```html
<meta name="viewport" content="viewport-fit=cover">
```

<img src="http://cdn.pannnda.com/course/mobile/assets/viewport-fit.png" style="zoom:50%;" />

## 移动端事件

最基本的 touch 事件包括4个事件

| touch 事件  | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| touchstart  | 当在屏幕上按下手指时触发                                     |
| touchmove   | 当在屏幕上移动手指时触发                                     |
| touchend    | 当在屏幕上抬起手指时触发                                     |
| touchcancel | 当一些更高级别的事件发生的时候（如电话接入或者弹出信息）会取消当前的touch操作，即触发touchcancel。一般会在touchcancel时暂停游戏、存档等操作。 |

移动端的 click 事件比 PC 端上的 click 事件响应的慢 300ms

这是由于浏览器为了能够实现双击缩放，需要判断用户在第一次触碰屏幕之后，是否在 300ms 之内再次点击，有则表明用户希望缩放和放大，所以 click 事件会推迟到 300ms 之后运行。

移动端事件触发顺序：在移动端，手指点击一个元素，会经过：touchstart > touchmove > touchend > click

### 点击穿透

这个问题在当有一个绝对定位或固定定位元素绑定了 touch 事件，那么覆盖在他之下的具有点击特性的元素也会被触发。

这是由于我们按钮绑定的事件是 touch 事件，a 标签是 click 事件，在 touch 事件触发后，我们弹出框的遮罩层就消失了，但这时候的 click 事件就被 a 标签给捕获到了，形成了击穿的效果。

有以下解决方法：

- **统一使用 click 事件**

- **阻止默认事件**

  ```js
  button.addEventListener('touchstart', function(e) {
    button.style.display = 'none'
    e.preventDefault()
  })
  ```

  在执行 touchstart 和 touchend 事件时，隐藏执行完隐藏命令后，立即阻止后续事件。

- **[fastclick 库](https://github.com/ftlabs/fastclick)**

  fastclick.js 的实现原理是在检测到 touchend 事件的时候，会通过 DOM 自定义事件立即出发模拟一个 click 事件，并把浏览器在 300ms 之后真正的 click 事件阻止掉。



