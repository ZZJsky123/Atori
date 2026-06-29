# 33 JavaScript Concepts: 6 周学习计划索引

这份学习计划服务于 `MISSION.md`：用 6 周把 33 个 JavaScript 核心概念重新压实为可解释、可验证、可追问、可用于工程判断和面试判断的知识体系。

这不是按目录线性学习，而是按“理解力杠杆”排序：先学最能解释大量 JS 现象的运行时主干，再补类型与对象模型，然后进入异步、代码设计、浏览器性能，最后沉淀工程判断和面试题库。

## 为什么改成 6 周

4 周适合快速扫完，但不适合你的目标。你不是从零入门，而是希望提升语言综合理解力、代码设计能力、工程化判断，并形成面试官追问体系。

6 周的价值：

- 前两周建立运行时、值模型和对象模型，先把主干搭起来。
- 中间两周把异步控制流和代码设计能力接上。
- 第 5 周进入浏览器、数据结构和性能意识。
- 第 6 周专门复盘、整理题库、形成工程判断，而不是匆忙收尾。

## 详细周计划

- [Week 1：运行时核心模型](./week-plans/week-1.md)
- [Week 2：类型系统与对象模型](./week-plans/week-2.md)
- [Week 3：异步控制流与错误边界](./week-plans/week-3.md)
- [Week 4：函数范式、模块化与代码设计](./week-plans/week-4.md)
- [Week 5：浏览器能力、数据结构与性能意识](./week-plans/week-5.md)
- [Week 6：工程判断、引擎内存与面试题库](./week-plans/week-6.md)

## 每周重点

| Week | 主题 | 核心目标 |
| --- | --- | --- |
| 1 | 运行时核心模型 | 用调用栈、作用域、闭包、this、Event Loop 激发综合理解力 |
| 2 | 类型系统与对象模型 | 理解 primitive、object、coercion、equality、prototype 和 class |
| 3 | 异步控制流与错误边界 | 把 Promise、async/await、错误捕获、fetch 变成工程能力 |
| 4 | 函数范式、模块化与代码设计 | 提升 pure function、composition、module、factory/class 的设计判断 |
| 5 | 浏览器能力、数据结构与性能意识 | 把 DOM、Worker、Big O、递归、正则连接到前端性能 |
| 6 | 工程判断、引擎内存与面试题库 | 沉淀 Clean Code、Design Patterns、Engine、Memory 和题库 |

## 周之间的知识联系

Week 1 是主干：调用栈解释同步执行，作用域和闭包解释变量保留，`this` 解释调用上下文，Event Loop 解释异步调度。后面所有主题都挂在这条主干上。

Week 2 补值模型和对象模型：`Primitive Types`、`Coercion`、`Equality`、`Objects`、`Prototypes` 相对独立，放在 Week 2 没问题。它们不是不重要，而是更适合在你已经有运行时主干之后学习，否则容易变成背坑点。学完 Week 2 后，Week 1 的闭包、this 和异步代码会有更清晰的数据基础。

Week 3 把 Week 1 的 Event Loop 和 Promise 推进到工程异步：请求并发、错误边界、取消、超时、重试、竞态。

Week 4 把 Week 1 的 scope/closure 和 Week 2 的 object/prototype 用到代码设计：高阶函数、纯函数、组合、模块化、factory、class。

Week 5 把语言和代码设计放到浏览器环境里检验：DOM 成本、Worker 通信、数据结构选择、复杂度、递归、正则。

Week 6 收束所有内容：用 Clean Code 和 Design Patterns 形成设计判断，用 JS Engines 和 Memory Management 补性能底层，用面试题库检验自己是否真的能解释和追问。

## 每日节奏

建议每天 60-90 分钟，周一到周六学习新内容，周日复盘和整理。

每天固定结构：

1. **10 分钟：回忆**  
   不看资料，先写下昨天主题的 3 个关键词、1 个坑点、1 个追问。

2. **25-35 分钟：阅读**  
   主读 33 JavaScript Concepts，对难点补 MDN / You Don't Know JS。只记机制、边界和工程影响。

3. **15-20 分钟：代码实验**  
   写 1 个最小可运行实验，验证一个反直觉行为。

4. **15-20 分钟：面试官追问**  
   写 1 道基础题、1 道机制题、1 道工程题、1 道反例题。

5. **5 分钟：归档**  
   如果今天形成了非显然理解，写入 `learning-records/`；如果只是覆盖材料，不写 learning record。

## 最终产物

6 周结束后，目标沉淀这些材料：

- `reference/js-runtime-map.html`：JS 运行时概念地图。
- `reference/interview-question-bank.html`：面试题库速查。
- `learning-records/0002-six-week-retrospective.md`：6 周复盘记录。
- 一个可从 learning workspace 提炼到博客的文章选题清单。
