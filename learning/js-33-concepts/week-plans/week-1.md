# Week 1：运行时核心模型

## 为什么先学这一周

这一周放在最前面，是为了先激发“语言综合理解力”。`Call Stack`、`Scope`、`Closures`、`this`、`Event Loop`、`Promise` 这些概念能解释大量 JS 现象：变量为什么这样取值、函数为什么这样执行、异步为什么这样排序、面试输出题为什么容易错。

先建立这条主干，再学习类型和对象细节，会更容易把散点知识挂到一张运行时地图上。

## 本周重点理解的知识

- JS 是单线程执行用户代码，但浏览器运行环境提供异步调度能力。
- 函数调用会进入调用栈，变量解析依赖词法作用域和作用域链。
- 闭包不是“函数套函数”，而是函数保留外层词法环境。
- `this` 不按定义位置决定，普通函数看调用点，箭头函数看词法环境。
- Event Loop 连接调用栈、task、microtask 和浏览器渲染。
- Promise 和 async/await 本质上仍要回到 microtask 调度模型。

## Day 1：Call Stack + Execution Context

主线材料：

- [Call Stack](https://33jsconcepts.com/concepts/call-stack)

要理解：

- 调用栈是 LIFO。
- 每次函数调用都会创建执行上下文。
- 栈溢出不是“递归错了”这么简单，而是没有退出条件或层级过深导致栈空间耗尽。

代码实验：

- 写同步函数嵌套调用，手动画出入栈/出栈顺序。
- 写一个无终止递归，观察 `Maximum call stack size exceeded`。

面试追问：

- 调用栈解决什么问题？
- 为什么长同步任务会卡住页面？
- 递归为什么可能栈溢出？

当天产物：

- 一张调用栈执行图。
- 一道同步执行顺序题。

## Day 2：Scope

主线材料：

- [Scope & Closures](https://33jsconcepts.com/concepts/scope-and-closures)

要理解：

- JS 使用词法作用域，变量查找由代码定义位置决定。
- 作用域链是变量查找路径。
- `var` 是函数作用域，`let` / `const` 是块级作用域。
- Temporal Dead Zone 可以先作为补充概念，不必今天展开太深。

代码实验：

- 写全局作用域、函数作用域、块级作用域的变量访问例子。
- 对比 `var`、`let` 在 block 中的访问行为。

面试追问：

- 词法作用域和动态作用域有什么差异？
- 为什么块级作用域能减少变量污染？
- `let` 声明前为什么不能访问？

当天产物：

- 一张作用域链查找图。

## Day 3：Closures

主线材料：

- [Scope & Closures](https://33jsconcepts.com/concepts/scope-and-closures)

要理解：

- 闭包保存的是外层词法环境中的 binding，不是简单复制一个值。
- 闭包可以实现私有状态、函数工厂、回调状态保存。
- stale closure 是 React hooks 等场景中的高频问题。
- 闭包也可能因为长期持有引用造成内存泄漏。

代码实验：

- 写 `createCounter()`。
- 写 `for (var i...) setTimeout(...)` 和 `for (let i...) setTimeout(...)`。
- 写一个 stale closure 简化例子。

面试追问：

- 闭包保存的是值还是词法环境？
- 为什么 `var` 循环里的异步回调容易输出同一个值？
- 闭包什么时候会导致内存泄漏？

当天产物：

- 一个闭包基础题 + 一个 stale closure 追问题。

## Day 4：this Binding

主线材料：

- [this, call, apply & bind](https://33jsconcepts.com/concepts/this-call-apply-bind)

要理解：

- 普通函数的 `this` 看调用点。
- 箭头函数没有自己的 `this`，使用外层词法环境中的 `this`。
- `call` / `apply` 立即调用，`bind` 返回新函数。
- `new` 绑定与显式绑定有优先级问题。

代码实验：

- `obj.method()` vs `const fn = obj.method; fn()`。
- `bind` 后再 `call`。
- 箭头函数作为对象方法。

面试追问：

- `this` 是否等于函数所属对象？
- 箭头函数为什么不能作为构造函数？
- `bind` 之后还能不能被 `call` 改掉 `this`？

当天产物：

- 5 个 `this` 指向判断题。

## Day 5：Event Loop

主线材料：

- [Event Loop](https://33jsconcepts.com/concepts/event-loop)

要理解：

- 同步代码先在调用栈执行。
- Promise reaction / `queueMicrotask` 属于 microtask。
- `setTimeout` 属于 task。
- 每轮事件循环会处理 task，并在合适时机清空 microtask。
- 过多 microtask 也可能推迟渲染。

代码实验：

- 写包含 `console.log`、`setTimeout`、`Promise.then`、`queueMicrotask` 的输出顺序题。
- 写大量 microtask，观察 UI 或日志顺序。

面试追问：

- 为什么 Promise 比 `setTimeout(fn, 0)` 先执行？
- 微任务过多会不会阻塞渲染？
- Event Loop 是 JS 引擎能力还是宿主环境能力？

当天产物：

- 一道完整 event loop 输出顺序题。

## Day 6：Promises + async/await as Runtime Model

主线材料：

- [Promises](https://33jsconcepts.com/concepts/promises)
- [async/await](https://33jsconcepts.com/concepts/async-await)

要理解：

- Promise 是异步结果的状态机。
- `then` 返回新的 Promise。
- `async` 函数总是返回 Promise。
- `await` 不阻塞主线程，后续逻辑进入 microtask。
- 连续 `await` 默认串行，`Promise.all` 才是并行等待。

代码实验：

- `then` 返回普通值、Promise、throw 的链式行为。
- 对比连续 `await` 和 `Promise.all`。
- 验证 `await 1` 之后的代码仍是异步继续。

面试追问：

- `await` 是否阻塞线程？
- async/await 和 Promise 是替代关系还是语法关系？
- `Promise.all` 的 fail-fast 在工程中有什么风险？

当天产物：

- 一张 async/await 与 Promise 的等价解释。

## Day 7：本周复盘

复盘任务：

- 画一张运行时主干图：调用栈、作用域链、闭包、this、task、microtask。
- 选 3 道最容易误判的输出题，写出逐步推导。
- 写一条 learning record：本周最改变理解的模型是什么。

## 本周没有覆盖的内容

- 没有系统展开类型转换、相等性、原型链细节。
- 没有深入浏览器渲染流水线。
- 没有比较 Node.js 和浏览器 Event Loop。
- 没有深入 Promise 规范算法。

## 可以挑战自己的地方

- 用一页图解释：一次点击事件触发后，同步代码、Promise、定时器和渲染如何交错。
- 设计一条 15 分钟面试链路：scope -> closure -> this -> event loop。
- 找一个 React stale closure 问题，写成真实工程复盘。

## 和其他周的联系

- Week 2 的 primitive/object/prototype 会补上“值和对象到底是什么”。
- Week 3 的 async/error/fetch 会建立在本周的 Promise 和 Event Loop 上。
- Week 4 的函数式和模块化会复用 closure、scope 和 this。
- Week 6 的引擎与内存会回到调用栈、闭包持有引用和 GC 可达性。
