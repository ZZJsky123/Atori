# Week 3：异步控制流与错误边界

## 为什么放在第 3 周

异步是前端开发的日常，但如果没有 Week 1 的调用栈、Event Loop 和 Promise 模型，异步很容易被学成 API 记忆。放在第 3 周，可以把调度模型推进到工程问题：请求并发、错误捕获、取消、超时、重试。

## 本周重点理解的知识

- callback、Promise、async/await 是异步控制流表达方式的演进。
- async/await 没有让异步变同步，只是让 Promise 写法更线性。
- `try/catch` 的捕获边界取决于错误是否发生在当前执行链内。
- Fetch 的 fulfilled/rejected 和 HTTP 成功/失败不是一回事。
- 工程里的异步难点通常是并发、取消、超时、错误归一化和重试。

## Day 1：Callbacks

主线材料：

- [Callbacks](https://33jsconcepts.com/concepts/callbacks)

要理解：

- 回调只是函数作为值传递，不天然等于异步。
- 同步 callback 和异步 callback 要分开理解。
- error-first callback 是早期异步错误处理约定。
- callback hell 的本质是控制流和错误处理分散。

代码实验：

- `map` 的同步 callback。
- `setTimeout` 的异步 callback。
- 手写 error-first 风格函数。

面试追问：

- 回调本身是否意味着异步？
- callback hell 为什么不只是缩进问题？
- Promise 解决了 callback 的哪些问题？

当天产物：

- callback -> Promise 的问题演进说明。

## Day 2：Promises Deepening

主线材料：

- [Promises](https://33jsconcepts.com/concepts/promises)

要理解：

- Promise 是 pending / fulfilled / rejected 的状态机。
- 状态 settled 后不可改变。
- `then` 返回新 Promise。
- throw 会转成 rejected。
- `all`、`allSettled`、`race`、`any` 是不同并发语义。

代码实验：

- then 返回普通值、Promise、throw。
- `Promise.all` fail-fast。
- `Promise.allSettled` 收集所有结果。

面试追问：

- Promise 为什么只能 settle 一次？
- `then` 链如何传播值和错误？
- `all` 和 `allSettled` 如何选择？

当天产物：

- 一张 Promise 组合方法选择表。

## Day 3：async/await in Practice

主线材料：

- [async/await](https://33jsconcepts.com/concepts/async-await)

要理解：

- `async` 函数总是返回 Promise。
- `await` 会暂停当前 async 函数后续逻辑，但不阻塞主线程。
- 循环中连续 `await` 默认串行。
- 并发等待要显式组织 Promise。

代码实验：

- 串行 await vs `Promise.all`。
- `await 1` 的执行顺序。
- async function throw 如何变成 rejected Promise。

面试追问：

- `await` 是否阻塞线程？
- 如何避免无意的串行请求？
- async function 里的 throw 如何捕获？

当天产物：

- 一个串行请求改并行请求的重构例子。

## Day 4：Error Handling

主线材料：

- [Error Handling](https://33jsconcepts.com/concepts/error-handling)

要理解：

- 同步 throw 可被当前调用栈的 `try/catch` 捕获。
- `await` 后的 rejection 可被 `try/catch` 捕获。
- `setTimeout` 回调中的 throw 不会被外层同步 `try/catch` 捕获。
- 错误对象要保留上下文，但不能泄露敏感信息。

代码实验：

- 同步 throw。
- Promise reject + await。
- setTimeout throw。
- 自定义 Error class。

面试追问：

- `try/catch` 的捕获边界是什么？
- Promise rejection 和 throw 是什么关系？
- 前端错误上报应该包含哪些上下文？

当天产物：

- 异步错误捕获边界表。

## Day 5：HTTP & Fetch API

主线材料：

- [HTTP & Fetch API](https://33jsconcepts.com/concepts/http-fetch)

要理解：

- `fetch` 只在网络错误等情况下 reject。
- HTTP 4xx/5xx 仍然是 fulfilled response。
- 业务要检查 `response.ok`。
- Response body 只能消费一次。
- 取消用 `AbortController`，超时需要封装。

代码实验：

- 请求 404，观察是否进入 catch。
- 封装最小 `request`：检查 `ok`、解析 JSON、支持 abort。
- 模拟超时取消。

面试追问：

- 为什么 HTTP 404 不会让 fetch reject？
- 如何设计请求超时？
- 重试策略和 HTTP 幂等性有什么关系？

当天产物：

- request wrapper 设计草案。

## Day 6：Async Design in Frontend Apps

主线材料：

- 回看本周材料和自己项目中的请求代码。

要理解：

- 异步工程问题通常不是“怎么发请求”，而是状态、竞态、取消、错误归一化。
- 同一个页面多次请求可能产生竞态。
- loading/error/data 状态要有明确生命周期。
- 取消和忽略过期结果是两种不同策略。

代码实验：

- 模拟搜索框连续输入导致旧请求后返回。
- 实现一个只接受最后一次请求结果的策略。

面试追问：

- 如何避免旧请求覆盖新请求结果？
- 请求取消和结果忽略有什么差异？
- 你会如何设计前端请求层？

当天产物：

- 一个“异步竞态处理”小案例。

## Day 7：本周复盘

复盘任务：

- 画一张 callback -> Promise -> async/await 的演进图。
- 写一张异步错误边界表。
- 设计 5 道异步面试题：输出顺序、错误捕获、并发、fetch、竞态。

## 本周没有覆盖的内容

- 没有深入 Node.js Event Loop 阶段。
- 没有覆盖 WebSocket、SSE、Streams。
- 没有系统讲缓存、CORS、cookie、安全策略。
- 没有讲 RxJS 或复杂异步流建模。

## 可以挑战自己的地方

- 写一个生产级 request wrapper 草案，包含超时、取消、错误分类和重试。
- 设计一套异步输出题，从 Promise 基础追问到 async/await 和错误捕获。
- 找一个项目里的竞态问题，写成复盘案例。

## 和其他周的联系

- Week 1 提供 Event Loop 和 Promise 调度模型。
- Week 2 的 object/equality 会影响 response 判断和错误对象设计。
- Week 5 的 Worker、DOM 和浏览器性能会继续使用异步调度思想。
- Week 6 的工程题库会把本周内容变成面试评分标准。
