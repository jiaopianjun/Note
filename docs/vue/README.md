---
title: Vue基础教程
lang: zh
sidebarDepth: 2
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---

## 1.如何构建一个Vue项目
```
1.首先安装node  npm install node
2.安装vue脚手架  vue-cli    npm install -g vue-cli
3.新建vue项目  vue init webpack newblog
4.进入项目  cd newblog   npm install  下载依赖模块
5.npm run dev 运行项目
6.npm run build  打包项目
```
## 2.Vue实例

### 1.如何创建
```
    var vm = new Vue({
       el: '#example', //挂载DOM 表示在这个id 范围内可以使用vue方法
       data:{
        text:'实例' //vue 数据 可以用在视图当中
       },
       created:function(){ // 生命周期钩子函数
          console.log(this.text) // this指向vm 实例
       }
    })
    例如： <p>{{data}}</p>   结果====  <p>实例</p>
```

### 2.生命周期钩子函数
```
    beforecreated // 实例创建之前
    created // 实例创建后
    beforemounted // 实例挂载之前
    mounted // 实例挂载后
    beforeupdate // 实例更新之前
    update // 实例更新后
    beforedestory // 实例销毁之前
    destory // 实例销毁后
 
    生命周期钩子的 this 上下文指向调用它的Vue实例 
    
    注意： 不要在选项属性或者回调函数中使用箭头函数
```

### 3.模板语法
#### 3.1 文本
  ```
    <span> {{text}} </span> v-once  // 设置后text数据更新变化  这里都不会在变动
  ```
#### 3.2 原始 Html
```
    比如说  text 的值是 <span>2</span>  现在你要插入一个 div 中  用  <div v-html="text"></div>
```
#### 3.3 特性
```
    v-bind   例如   <div v-bind:id="id"></div> 或者 <div :id="id"></div>
```
#### 3.4 使用JavaScript 表达式
```
    {{ text + 1}}
```
#### 3.5 指令
```
    v-for 循环  v-if 将dom移除页面隐藏  v-show 页面隐藏 dom display:none
```
#### 3.6 参数
```
    比如 href id class 可以写成 :href :id :class  这个用到的是 v-bind
    还有 click focus blur 可以写成 @click @focus @blur 这个用到的是 v-on
```
#### 3.7 修饰符
```
    修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
    例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()：
    <form v-on:submit.prevent="onSubmit">...</form>
```   

### 4.计算属性和侦听器

#### 4.1 计算属性
```
    在 computed 中书写计算的方法和脚本
    我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
```
#### 4.2 计算属性 vs 侦听属性
```
    Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch——特别是如果你之前使用过 AngularJS。然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调。
```
#### 4.3 侦听器
```
    虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
```

### 5.Class 与 Style 绑定
```
  操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是属性，所以我们可以用 v-bind 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。
```
#### 5.1 绑定 HTML Class
```
    <div v-bind:class="{ active: isActive }"></div>
```
##### 5.1.1 与普通样式共存 
```
div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"></div>
结果为：<div class="static active"></div>
```
##### 5.1.2 也可以绑定一个方法
```
    <div v-bind:class="classObject"></div>
    data: {
      isActive: true,
      error: null
    },
    computed: {
      classObject: function () {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal'
        }
      }
    }
```
####  5.2 数组语法
```
    我们可以把一个数组传给 v-bind:class，以应用一个 class 列表：
        <div v-bind:class="[activeClass, errorClass]"></div>
        data: {
          activeClass: 'active',
          errorClass: 'text-danger'
        }
        渲染结果为： <div class="active text-danger"></div>
        也可以根据条件来切换class 的演示  可以用 三元表达式 例如：
           <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
           或者这样写：
           <div v-bind:class="[{ active: isActive }, errorClass]"></div>
        这样 errorClass 一直存在  而activeClass只有当isActive为true的时候才存在
```
####  5.3 用在组件上
```
    当在一个自定义组件上使用 class 属性时，这些类将被添加到该组件的根元素上面。这个元素上已经存在的类不会被覆盖。
    例如：
        Vue.component('my-component', {
          template: '<p class="foo bar">Hi</p>'
        })
        <my-component class="baz boo"></my-component>
        渲染为： <p class="foo bar baz boo">Hi</p>
```

### 6.绑定内联样式

#### 6.1 对象语法
```
  v-bind:style 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名：
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    data: {
      activeColor: 'red',
      fontSize: 30
    }
    或者也可以绑定一个对象属性
    <div v-bind:style="styleObject"></div>
    data: {
      styleObject: {
        color: 'red',
        fontSize: '13px'
      }
    }
```

#### 6.2 数组语法
```
    v-bind:style 的数组语法可以将多个样式对象应用到同一个元素上：
    <div v-bind:style="[baseStyles, overridingStyles]"></div>
```
#### 6.3 自动添加前缀
```
当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。
```
#### 6.4 多重值
```
    可以为 style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：
        <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
        这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 display: flex。
```

### 7.条件渲染
#### 7.1 v-if
```
<h1 v-if="ok">Yes</h1>
<h1 v-else>No</h1>
```
#### 7.2 v-else
```
用在  v-if 之后 充当 if else
```
#### 7.3 v-if-else
```
用在 v-if 之后  充当 if else if
```
#### 7.4 用 key 管理可复用的元素
#### 7.5 v-show
```
根据条件展示元素的选项  dom 等于  display：none
注意，v-show 不支持 <template> 元素，也不支持 v-else。
```
#### 7.6 v-if 
```
v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
```
#### 7.7 v-if 与 v-for 一起使用
```
v-for 比 v-if 优先级更高
```

### 8.列表渲染

#### 8.1 v-for 把一个数组对应为一组元素
```
v-for 指令根据一组数组的选项列表进行渲染。v-for 指令需要使用 item in items 形式的特殊语法，items 是源数据数组并且 item 是数组元素迭代的别名。
实例：
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
    或者：
    <ul id="example-2">
      <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    或者：
    <div v-for="item of items"></div>
    
    var example1 = new Vue({
      el: '#example-1',
      data: {
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ]
      }
    })
结果：
    Foo
    Bar
```
#### 8.2 一个对象的 v-for 
``` 
    可以用 v-for 通过一个对象的属性来迭代，可以提供第二个的参数为键名，第三个参数为索引
    <div v-for="(value, key, index) in object">
      {{ index }}. {{ key }}: {{ value }}
    </div>
```
#### 8.3 key
```
    为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一 key 属性。理想的 key 值是每项都有的且唯一的 id。这个特殊的属性相当于 Vue 1.x 的 track-by ，但它的工作方式类似于一个属性，所以你需要用 v-bind 来绑定动态值 (在这里使用简写)：
    <div v-for="item in items" :key="item.id">
      <!-- 内容 -->
    </div>
```
#### 8.4 数组更新检测
```
    push()
    pop()
    shift()
    unshift()
    splice()
    sort()
    reverse()
```
#### 8.5 注意事项
```
    Vue不能检测修改数组长度 以及 利用索引改变值的状态变化
    可以通过 set 来 提交更新
```
#### 8.6 对象更改检测注意事项
```
    还是由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除：所以可以使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性。
```
#### 8.7 显示过滤/排序结果
```
    有时，我们想要显示一个数组的过滤或排序副本，而不实际改变或重置原始数据。在这种情况下，可以创建返回过滤或排序数组的计算属性。
```
#### 8.8 v-for with v-if
```
    当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。
```

### 9.事件处理
#### 9.1 监听事件
```
    用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码
    写法： <div v-bind:click="dj"></div> 或者 <div @/click="dj"></div>
```
#### 9.2 事件处理方法 
```
    可以在 methods 中定义方法 然后调用
```
#### 9.3 内联处理器中的方法
```
    <div id="example-3">
      <button v-on:click="say('hi')">Say hi</button>
      <button v-on:click="say('what')">Say what</button>
    </div>
    new Vue({
      el: '#example-3',
      methods: {
        say: function (message) {
          alert(message)
        }
      }
    })
    结果:  点击say hi 弹出 hi  点击say what  弹出 what
    
    有时也需要在内联语句处理器中访问原始的 DOM 事件。可以用特殊变量 $event 把它传入
    
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    
    // ...
    methods: {
      warn: function (message, event) {
        // 现在我们可以访问原生事件对象
        if (event) event.preventDefault()
        alert(message)
      }
    }
```
#### 9.4 事件修饰符
```
    在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。
    为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。

    .stop
    .prevent
    .capture
    .self
    .once
    .passive
    
    <!-- 阻止单击事件继续传播 -->
    <a v-on:click.stop="doThis"></a>
    
    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>
    
    <!-- 修饰符可以串联 -->
    <a v-on:click.stop.prevent="doThat"></a>
    
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    
    <!-- 添加事件监听器时使用事件捕获模式 -->
    <!-- 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理 -->
    <div v-on:click.capture="doThis">...</div>
    
    <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
    <!-- 即事件不是从内部元素触发的 -->
    <div v-on:click.self="doThat">...</div>
    
    <!-- 点击事件将只会触发一次 -->
    <a v-on:click.once="doThis"></a>
    
    <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
    <!-- 而不会等待 `onScroll` 完成  -->
    <!-- 这其中包含 `event.preventDefault()` 的情况 -->
    <div v-on:scroll.passive="onScroll">...</div>
```   
#### 9.5 按键修饰符
```
   在监听键盘事件时，我们经常需要检查常见的键值。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
   
   <!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
   <input v-on:keyup.13="submit">
   
   记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：
        <!-- 同上 -->
        <input v-on:keyup.enter="submit">
        
        <!-- 缩写语法 -->
        <input @keyup.enter="submit">
   全部的按键别名：
    .enter
    .tab
    .delete (捕获“删除”和“退格”键)
    .esc
    .space
    .up
    .down
    .left
    .right
```  
#### 9.6 自动匹配按键修饰符
```
    你也可直接将 KeyboardEvent.key 暴露的任意有效按键名转换为 kebab-case 来作为修饰符：

    <input @keyup.page-down="onPageDown">
    
    在上面的例子中，处理函数仅在 $event.key === 'PageDown' 时被调用
```   
#### 9.7 系统修饰键
```
   可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。
    .ctrl
    .alt
    .shift
    .meta
    
   例如：
        <!-- Alt + C -->
        <input @keyup.alt.67="clear">
        
        <!-- Ctrl + Click -->
        <div @click.ctrl="doSomething">Do something</div>
   
    .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。

        <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
        <button @click.ctrl="onClick">A</button>
        
        <!-- 有且只有 Ctrl 被按下的时候才触发 -->
        <button @click.ctrl.exact="onCtrlClick">A</button>
        
        <!-- 没有任何系统修饰符被按下的时候才触发 -->
        <button @click.exact="onClick">A</button>
```       
#### 9.8 鼠标按钮修饰符
```
    .left
    .right
    .middle
```

### 10 表单输入绑定

#### 10.1 基础用法

```
    你可以用 v-model 指令在表单 <input> 及 <textarea> 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
```

#### 10.2 文本

```
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
```    

#### 10.3 多行文本

```
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
```

#### 10.4 复选框    

```
    单个复选框，绑定到布尔值：
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
     true
    多个复选框，绑定到同一个数组：
    
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
            
    new Vue({
      el: '#example-3',
      data: {
        checkedNames: []
      }
    })
```

#### 10.5 单选按钮  

``` 
    <div id="example-4">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    new Vue({
      el: '#example-4',
      data: {
        picked: ''
      }
    })
```

#### 10.6 选择框 

```
    注意：单选绑定到一个对象
      <div id="example-5">
        <select v-model="selected">
          <option disabled value="">请选择</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>
      new Vue({
        el: '...',
        data: {
          selected: ''
        }
      })
    多选：绑定到一个数组
        <div id="example-6">
          <select v-model="selected" multiple style="width: 50px;">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <br>
          <span>Selected: {{ selected }}</span>
        </div>
        new Vue({
          el: '#example-6',
          data: {
            selected: []
          }
        })
    
    用 v-for 渲染的动态选项：
      <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected }}</span>
      new Vue({
        el: '...',
        data: {
          selected: 'A',
          options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
          ]
        }
      })
```

#### 10.7 值绑定   

```  
  对于单选按钮，复选框及选择框的选项，v-model 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：
  <!-- 当选中时，`picked` 为字符串 "a" -->
  <input type="radio" v-model="picked" value="a">
  
  <!-- `toggle` 为 true 或 false -->
  <input type="checkbox" v-model="toggle">
  
  <!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
  <select v-model="selected">
    <option value="abc">ABC</option>
  </select>
```           

#### 10.8 复选框

```     
  <input type="checkbox" v-model="toggle" true-value="yes" false-value="no">
  // 当选中时
  vm.toggle === 'yes'
  // 当没有选中时
  vm.toggle === 'no'
```    

#### 10.9 单选按钮    

```
    <input type="radio" v-model="pick" v-bind:value="a">
    // 当选中时
    vm.pick === vm.a
```    

#### 10.10 选择框的选项 

```
  <select v-model="selected">
      <!-- 内联对象字面量 -->
    <option v-bind:value="{ number: 123 }">123</option>
  </select>
  
  // 当选中时
  typeof vm.selected // => 'object'
  vm.selected.number // => 123 
```   

#### 10.11 修饰符  

```    
    .lazy
    在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 (除了上述输入法组合文字时)。你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步：
    
    <!-- 在“change”时而非“input”时更新 -->
    <input v-model.lazy="msg" >
    .number
    如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：
    
    <input v-model.number="age" type="number">
    这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。
    
    .trim
    如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：
    
    <input v-model.trim="msg">
```

### 11.组件基础

#### 11.1 基本示例
```
  这里有一个 Vue 组件的示例：

  // 定义一个名为 button-counter 的新组件
  Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
  
  组件是可复用的 Vue 实例，且带有一个名字：在这个例子中是 <button-counter>。我们可以在一个通过 new Vue 创建的 Vue 根实例中，把这个组件作为自定义元素来使用：

  <div id="components-demo">
    <button-counter></button-counter>
  </div>
  new Vue({ el: '#components-demo' })
```       
#### 11.2 组件的复用 

```    
        你可以将组件进行任意次数的复用 每个组件都会各自独立维护它的 count。因为你每用一次组件，就会有一个它的新实例被创建。
```       

#### 11.3 data 必须是一个函数  

```  
        一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝
```   

#### 11.4 组件的组织 

```    
        通常一个应用会以一棵嵌套的组件树的形式来组织：
        全局注册和局部注册。至此，我们的组件都只是通过 Vue.component 全局注册的
```  

#### 11.5 通过 Prop 向子组件传递数据   

```  
        Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性。为了给博文组件传递一个标题，我们可以用一个 props 选项将其包含在该组件可接受的 prop 列表中：
        一个组件默认可以拥有任意数量的 prop，任何值都可以传递给任何 prop。在上述模板中，你会发现我们能够在组件实例中访问这个值，就像访问 data 中的值一样。
```        

#### 11.6 单个根元素  

```   
        <div class="blog-post">
          <h3>{{ title }}</h3>
          <div v-html="content"></div>
        </div>
        应该外包包一层才能正确运行，否则会报错 
```        

#### 11.7 通过事件向父级组件发送消息

```    
        我们可以调用内建的 $emit 方法并传入事件的名字，来向父级组件触发一个事件：
        实例：
            子组件内
            <button v-on:click="$emit('enlarge-text')">
              Enlarge text
            </button>
            
            父组件内 通过v-on来监听这个事件
            <blog-post v-on:enlarge-text="postFontSize += 0.1"></blog-post>
```            

#### 11.8 动态组件    

```            
        有的时候，在不同组件之间进行动态切换是非常有用的，比如在一个多标签的界面里：
        上述内容可以通过 Vue 的 <component> 元素加一个特殊的 is 特性来实现：

        <!-- 组件会在 `currentTabComponent` 改变时改变 -->
        <component v-bind:is="currentTabComponent"></component>
        在上述示例中，currentTabComponent 可以包括
        
        已注册组件的名字，或
        一个组件的选项对象
```        

#### 11.9 在组件上使用 v-model

```     
        自定义事件也可以用于创建支持 v-model 的自定义输入组件。记住：

        <input v-model="searchText">
        等价于：
        
        <input
          v-bind:value="searchText"
          v-on:input="searchText = $event.target.value"
        >
        当用在组件上时，v-model 则会这样：
        
        <custom-input
          v-bind:value="searchText"
          v-on:input="searchText = $event"
        ></custom-input>
        为了让它正常工作，这个组件内的 <input> 必须：
        
        将其 value 特性绑定到一个名叫 value 的 prop 上
        在其 input 事件被触发时，将新的值通过自定义的 input 事件抛出
        写成代码之后是这样的：
        
        Vue.component('custom-input', {
          props: ['value'],
          template: `
            <input
              v-bind:value="value"
              v-on:input="$emit('input', $event.target.value)"
            >
          `
        })
        现在 v-model 就应该可以在这个组件上完美地工作起来了：
        
        <custom-input v-model="searchText"></custom-input>
```      

#### 11.10 解析 DOM 模板时的注意事项     

```       
        有些 HTML 元素，诸如 <ul>、<ol>、<table> 和 <select>，对于哪些元素可以出现在其内部是有严格限制的。而有些元素，诸如 <li>、<tr> 和 <option>，只能出现在其它某些特定的元素内部。

        这会导致我们使用这些有约束条件的元素时遇到一些问题。例如：
        
        <table>
          <blog-post-row></blog-post-row>
        </table>
        这个自定义组件 <blog-post-row> 会被作为无效的内容提升到外部，并导致最终渲染结果出错。幸好这个特殊的 is 特性给了我们一个变通的办法：
        
        <table>
          <tr is="blog-post-row"></tr>
        </table>
        需要注意的是如果我们从以下来源使用模板的话，这条限制是不存在的：
        字符串 (例如：template: '....')
        单文件组件 (.vue)
        <script type="text/x-template">
```       
        

