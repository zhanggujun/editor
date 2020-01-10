# MarkdownEditor

> 一个基于[svelte](https://www.npmjs.com/package/svelte)，[marked](https://www.npmjs.com/package/marked)，[xss](https://www.npmjs.com/package/xss)，[highlight.js](https://www.npmjs.com/package/highlight.js)的简单markdown编辑器。参考自[Houfeng大神](https://github.com/Houfeng)的[mditor](https://www.npmjs.com/package/mditor)，感谢大神，之前写自己博客的时候用过一段时间大神的编辑器，感觉挺好用的。后面想着，要不自己也照着写一个，然后就开始撸了。
> 本来想着完全靠拼字符串的方式来搞，后面一看大神用了自己写的一个mvvm框架，[mokit](https://www.npmjs.com/package/mokit)，正好那天在npm看到[svelte](https://www.npmjs.com/package/svelte)这个框架，于是就拿着来用了。写的过程一言难尽，能力有限，还有很多待优化的地方。

[![npm](https://img.shields.io/npm/v/@zhanggujun/editor)](https://www.npmjs.com/package/@zhanggujun/editor)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@zhanggujun/editor)](https://www.npmjs.com/package/@zhanggujun/editor)
[![npm](https://img.shields.io/npm/dm/@zhanggujun/editor)](https://www.npmjs.com/package/@zhanggujun/editor)
[![GitHub issues](https://img.shields.io/github/issues/zhanggujun/editor)](https://github.com/zhanggujun/editor/issues)
[![npm](https://img.shields.io/npm/l/@zhanggujun/editor)](https://www.npmjs.com/package/@zhanggujun/editor)

## Demo

To view a demo online:
https://codesandbox.io/s/amazing-moore-9t0ln

## 引入

``` bash
npm install @zhanggujun/editor --save
```

``` javascript
import { MdCreate } from '@zhanggujun/editor'
import "@zhanggujun/editor/dist/editor.min.css"
```

Or use directly from a CDN
``` html
<link href="https://unpkg.com/@zhanggujun/editor@1.0.8/dist/editor.min.css"/>
<script src="https://unpkg.com/@zhanggujun/editor@1.0.8/dist/editor.min.js"></script>
```

## 使用

### MdMarked 
> 内置markdown解析，依赖marked，highlight.js。参数为string,xssOptions(非必传，默认展示iframe)

```html
<div id="box"></div>

<script>
  const { MdMarked } from '@zhanggujun/editor'
  import "@zhanggujun/editor/dist/editor.min.css"
  const string = '> markdown字符串'
  const xssOptions = { ... }
  document.getElementById('#box').innerHTML = MdMarked(string,{ xssOptions }).html
  or
  document.getElementById('#box').innerHTML = MdMarked(string).html
</script>
```

### MdCreate

> 默认配置
```html
<div id="box"></div>

<script>
  cosnt toolbar = [
    'undo',
    'redo',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'quote',
    'code',
    'orderedlist',
    'unorderedlist',
    'link',
    'table',
    'line',
    'image'
  ]
  const mditor = new MdEditor.MdCreate('#box',{
    height:400, // 编辑器高度(默认400)
    value: '', // 初始值(默认空字符串)
    xss:{}, // xss过滤(默认配置了显示iframe，如果传空对象{}或者true，就按照默认值配置，传false不进行xss配置)
    scroll:true, // 滚动条滚动的时候，是否左右联动(左边滚动右边跟随，右边滚动左边跟随)，传入false，右边滚动左边不跟随(默认true)
    fullscreen:false, // 是否全屏(默认false)
    splitscreen:true, // 是否分屏(默认true)
    preview:false, // 预览(默认false)
    placeholder: '输入内容 ...', // 编辑器没有内容是textarea显示的placeholder(默认'输入内容 ...')
    toolbar // 工具条配置(默认展示toolbar数组里边的内容，具体配置如下)
  })
  // 运行过程中更改mditor的默认配置
  mditor.editor.height = 500 // 改变高度
  mditor.editor.value = '这是新的值' // 改变内容
  ...
  mditor.editor.toolbar = ['h1'] // 改变工具条配置
</script>
```
> 一些简单的方法
```html
<div id="box"></div>
<script>

  const mditor = new MdEditor.MdCreate('#box')
  
  // toolbar方法
  
  // has(name)
  cosnt hasItem = mditor.toolbar.has('undo') // 参数为工具按钮的name属性
  
  // add(item) 参数item为一个对象，内hander属性为函数
  // 可以在里边写需要对按钮进行操作的事件，key为快捷键(以+号连接) name和icon必传。icon使用的阿里的iconfont
  const item = {
    name:'insert',
    icon:'icon-xxx',
    key:'shift+alt+s',
    title:'xxxx',
    handler:function(){
      // dosomething
    }
  }
  mditor.toolbar.add(_addItem)
  
  //del 
  mditor.toolbar.del(name)
  
  //replace(name,item) 替换某个按钮,item同add
  mditor.toolbar.replace(name,item)
  
  //get(name) 获得一个按钮
  const getItem = mditor.toolbar.get(name)
  
  // set(item) 设置按钮(name属性相同则替换，不同则添加)
  const getItem = mditor.toolbar.get(name)
  getItem.handler = () => { //dosomething }
  mditor.toolbar.set(getItem)
    
  // editor方法
  
  // insertAfterText(text) 在光标之后添加内容
  mditor.insertAfterText('hello word')
  
  // insertBeforeText(text) 光标之前添加内容
  mditor.insertBeforeText('before')

  // setText(text)  重新设置编辑器的值
  mditor.setText('我是重置的值')

  // getText() 获取编辑器值(字符串)
  cosnt text = mditor.getText()
  console.log(text)
    
</script>
```

## 配置

### 参数

参数 | 类型 | 说明 | 默认值 
------- | ------- | ------- | -------  
height | Number | 编辑器高度 | 400 
value | String | 编辑器初始化内容 | '' 
xss | Object&#124;Boolean | xss配置，传入false为不配置，[具体可以参考xss配置](https://www.npmjs.com/package/xss) | 默认显示iframe   
scroll | Boolean | 动条滚动的时候，是否左右联动(左边滚动右边跟随，右边滚动左边跟随)，传入false，右边滚动左边不跟随 | true
fullscreen | Boolean | 是否全屏 | false
splitscreen | Boolean | 是否分屏 | true
preview | Boolean | 预览 | false
placeholder | String | 编辑器没有内容时的占位符 | 输入内容 ...
toolbar | Array | 默认展示的工具栏 | 具体如下表

> 表中的参数代表的是内部标识的name，内部的方法会使用name做一些其他的操作

参数&#124;name | 对应功能 
------- | -------
undo | 撤销
redo | 重做
bold | 粗体/加粗
italic | 斜体
underline | 下划线
strikethrough | 删除线/中划线
h1 | H1
h2 | H2
h3 | H3
h4 | H4
h5 | H5
h6 | H6
quote | 引用
code | 代码
orderedlist | 有序列表
unorderedlist | 无序列表
link | 链接
table | 表格
line | 分割线/hr
image | 图片

### 工具栏方法 mditor.toolbar.xxx

> 参数中name为上表中的参数字段，都是String类型
> item为Object类型,其中icon和name字段是必填的，其他的为选填

方法名 | 参数 | 说明 | 返回值  
------- | ------- | ------- | ------- 
has | name&#124;String | 检查按钮是否包含name相同的配置 | Boolean
add | item&#124;Object | 添加一个按钮 | undefined  
del | name&#124;String | 删除一个按钮 | undefined  
replace | (name&#124;String,item&#124;Object) | 替换一个按钮 | undefined  
set | item&#124;Obejct | 设置一个按钮(有name相同的工具条就替换，没有就添加) | undefined
get | name&#124;String | 获得一个按钮 | Object    

### 编辑器方法 mditor.xxx

方法名 | 参数 | 说明 | 返回值  
------- | ------- | ------- | -------  
insertAfterText | text&#124;String | 在光标之后插入内容 | undefined  
insertBeforeText | text&#124;String | 在光标之前插入内容 | undefined 
setText | text&#124;String | 重新设置编辑器的内容 | undefined  
getText | - | 获取编辑器的内容 | 编辑器的内容&#124;String

## 快捷键
> 由于使用框架+个人能力问题，目前只有在同一个页面实例一个编辑器的时候，快捷键有用。。。😳，会自动区分平台使用对应的键值。(PS:缩进和撤销缩进(tab/shift+tab)在所有实例里边都能用)

快捷键 | 对应功能
------- | -------
ctrl/command + z | 撤销
ctrl/command + shift + z | 重做
shift+alt+b | 粗体
shift+alt+i | 斜体
shift+alt+e | 下划线
shift+alt+d | 删除线
shift+alt+1 | H1
shift+alt+2 | H2
shift+alt+3 | H3
shift+alt+4 | H4
shift+alt+5 | H5
shift+alt+6 | H6
shift+alt+q | 引用
shift+alt+c | 代码
shift+alt+o | 有序列表
shift+alt+u | 无序列表
shift+alt+l | 链接
shift+alt+t | 表格
shift+alt+h | 分割线
shift+alt+p | 图片
shift+alt+s | 分屏
shift+alt+v | 预览
shift+alt+f | 全屏

## 关于快捷键与编辑过程中的一些自动处理
- 在添加有序/无序列表、引用的时候，直接敲回车键，会自动保持上一行的标识符
- > 无序列表自动添加- , * ,+ ,等标识
  > 有序列表自动添加序号
  > 引用内容自动添加> 符号
  > 如果换行之后不输入内容再次敲回车，则删除标识符并跳转到下一行由用户控制输入
  
- 自动和上一行保持缩进一致
- 默认设置了一些快捷键

## License
[MIT](https://opensource.org/licenses/MIT)
