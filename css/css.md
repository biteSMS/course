## Grid 布局

网格布局（Grid）是最强大的 CSS 布局方案。它将网页划分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。

![1](/Users/bibi/Desktop/course/css/assets/1.png)

Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是**一维布局**。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是**二维布局**。Grid 布局远比 Flex 布局强大。

### 基本概念

#### 容器和项目

采用网格布局的区域，称为"容器"（container）。容器内部采用网格定位的子元素，称为"项目"（item）。注意：项目只能是容器的顶层子元素，不包含项目的子元素。Grid 布局只对项目生效。

#### 行和列

容器里面的水平区域称为"行"（row），垂直区域称为"列"（column）。

#### 单元格

行和列的交叉区域，称为"单元格"（cell）。

#### 网格线

划分网格的线，称为"网格线"（grid line）。水平网格线划分出行，垂直网格线划分出列。

### 容器属性

#### display

`display: grid | inline-grid;`

####grid-template-columns、grid-template-rows

容器指定了网格布局以后，接着就要划分行和列。`grid-template-columns`属性定义每一列的列宽，`grid-template-rows`属性定义每一行的行高。

- **repeat()**

  `repeat()`接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。

- **auto-fill**

  使用`auto-fill`关键字表示自动填充。

- **fr**

  为了方便表示比例关系，网格布局提供了`fr`关键字（fraction 的缩写，意为"片段"）。

- **minmax()**

  `minmax()`函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。

- **auto**

  `auto`关键字表示由浏览器自己决定长度。

#### grid-template-areas 

`grid-template-areas`属性用于定义区域。

####grid-gap

`grid-gap`属性设置行与列的间距。

#### grid-auto-flow

放置顺序由`grid-auto-flow`属性决定，默认值是`row`，即"先行后列"。也可以将它设成`column`，变成"先列后行"。

####justify-items、align-items、place-items

`justify-items`属性设置单元格内容的水平位置（左中右），`align-items`属性设置单元格内容的垂直位置（上中下）。`place-items`属性是`align-items`属性和`justify-items`属性的合并简写形式。

- start：对齐单元格的起始边缘。
- end：对齐单元格的结束边缘。
- center：单元格内部居中。
- stretch：拉伸，占满单元格的整个宽度（默认值）。

![3](/Users/bibi/Desktop/course/css/assets/3.png)

![4](/Users/bibi/Desktop/course/css/assets/4.png)

####justify-content、align-content、place-content

设置整个内容区域在容器里面的水平或垂直位置。

- start - 对齐容器的起始边框。

- end - 对齐容器的结束边框。

- center - 容器内部居中。

- stretch - 项目大小没有指定时，拉伸占据整个网格容器。

- space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。

- space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。

- space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。

![5](/Users/bibi/Desktop/course/css/assets/5.png)

### 项目属性

####grid-column-start、grid-column-end、grid-row-start、grid-row-end

- `grid-column-start`属性：左边框所在的垂直网格线
- `grid-column-end`属性：右边框所在的垂直网格线
- `grid-row-start`属性：上边框所在的水平网格线
- `grid-row-end`属性：下边框所在的水平网格线

**`span`**

表示"跨越"，即左右边框（上下边框）之间跨越多少个网格。

####grid-column、grid-row

是上边属性的合并简写形式。

####grid-area

`grid-area`属性指定项目放在哪一个区域。

####justify-self、align-self、place-self

作用于单个项目。

## 响应式布局

响应式布局是2010年提出的一个概念，简而言之，就是一个网站能够兼容多个终端。这个概念是为解决移动互联网浏览而诞生的。随着显示屏幕越来越大，网站页面设计也变化多端，为了适应显示屏大小，响应式布局也就应运而生。

但现在web程序变得愈发丰富和复杂，而产品对移动端的重视也超过了pc端，如果仅用响应式布局实现适配，代码的复杂度和兼容性都难以维护，并且很容易造成代码冗余。开发成本和另开发一款程序接近，因此，独立开发出一款针对移动端的web程序已近变成了很多公司最佳方案。当我们只是开一款功能单一的展示性程序时，如静态页面，那么响应式布局可能是最优选。所以响应式布局开始从最流行的方案变成一种折中方案。

[示例地址](http://www.liquidapsive.com/)