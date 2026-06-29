# Week 6：工程判断、引擎内存与面试题库

## 为什么用最后一周收束

最后一周不再追求覆盖更多概念，而是把前 5 周的理解沉淀成工程判断和面试能力。重点是：如何评价代码质量，如何理解 JS 引擎和内存，如何把知识组织成题库、评分标准和后续复习计划。

## 本周重点理解的知识

- Clean Code 是降低理解和修改成本，不是追求短代码。
- Design Patterns 是问题-解法的命名，不是模板崇拜。
- JS 引擎会解析、解释、编译、优化和垃圾回收。
- 内存管理的核心是可达性，泄漏常来自长期持有引用。
- 面试题要能从 API 使用追问到运行时机制和工程判断。

## Day 1：Clean Code

主线材料：

- [Clean Code](https://33jsconcepts.com/concepts/clean-code)

要理解：

- 命名表达意图。
- 函数保持单一抽象层级。
- 重复不一定都要抽象，错误抽象比重复更难维护。
- 注释解释为什么，不重复代码做了什么。

代码实验：

- 找一段过去写过的复杂函数，只做命名、拆分、早返回优化。
- 对比重构前后的阅读路径。

面试追问：

- 什么样的重复值得抽象？
- “一个函数只做一件事”如何判断？
- 为什么过度封装会伤害可读性？

当天产物：

- 一套 code review 可读性判断标准。

## Day 2：Design Patterns

主线材料：

- [Design Patterns](https://33jsconcepts.com/concepts/design-patterns)

要理解：

- 模式是经验命名，不是必须套用的模板。
- Factory、Observer、Module、Singleton、Proxy、Decorator 在前端常见。
- 设计模式应降低复杂度，而不是增加抽象崇拜。

代码实验：

- 写一个最小事件总线。
- 找一个框架或项目中的 Observer / Factory / Proxy 例子。

面试追问：

- Observer 和 Pub/Sub 有什么差异？
- Singleton 什么时候会变成全局状态陷阱？
- 如何判断设计模式是不是过度设计？

当天产物：

- 一张设计模式“问题 -> 解法 -> 风险”表。

## Day 3：JavaScript Engines

主线材料：

- [JavaScript Engines](https://33jsconcepts.com/concepts/javascript-engines)

要理解：

- JS 引擎会经历 parsing、interpreting、JIT compiling、optimization。
- V8 会用 hidden class 和 inline cache 优化对象访问。
- 动态修改对象形状可能影响优化。
- 性能判断要先测量，再解释，再修改。

代码实验：

- 固定属性顺序创建对象 vs 动态添加属性。
- 写一个让对象形状不稳定的例子。

面试追问：

- JS 是解释执行还是编译执行？
- 为什么对象属性添加顺序可能影响性能？
- 什么情况下不该过早用引擎细节指导业务代码？

当天产物：

- JS 引擎执行流水线简图。

## Day 4：Memory Management + Garbage Collection

主线材料：

- [JavaScript Memory Management](https://33jsconcepts.com/beyond/concepts/memory-management.md)
- [JavaScript Garbage Collection](https://33jsconcepts.com/beyond/concepts/garbage-collection.md)

要理解：

- 内存生命周期：分配、使用、释放。
- GC 主要基于可达性判断。
- 常见泄漏：全局引用、未清理定时器、未解绑监听器、闭包持有大对象、缓存无上限。
- WeakMap / WeakSet 可用于弱引用场景。

代码实验：

- 写一个未清理事件监听的泄漏例子。
- 写一个缓存 Map 不清理导致增长的例子。
- 用 DevTools Memory 做一次简单快照观察。

面试追问：

- GC 如何判断对象是否可回收？
- 闭包为什么可能导致内存泄漏？
- WeakMap 为什么适合保存对象关联元数据？

当天产物：

- 常见前端内存泄漏来源表。

## Day 5：Interview Question Bank

主线材料：

- 前 5 周所有周计划、代码实验和 learning records。

任务：

- 从 33 个概念中选 10 个最高频面试主题。
- 每个主题写 4 层问题：基础题、机制题、工程题、反例题。
- 每题补评分标准：1 分会背 API，3 分理解机制，5 分能做工程判断。

建议高频主题：

1. Scope and Closures
2. this Binding
3. Event Loop
4. Promise and async/await
5. Primitive Types and Equality
6. Type Coercion
7. Prototypes and Classes
8. Fetch and Error Handling
9. Data Structures and Big O
10. Memory and JavaScript Engines

当天产物：

- `reference/interview-question-bank.html` 草稿。

## Day 6：Runtime Map + Blog Candidates

任务：

- 画一张 JS 运行时概念地图。
- 标出周之间的知识依赖。
- 从 6 周中挑 3 个最适合写成博客的主题。
- 每个博客主题写标题、核心观点、例子和目标读者。

建议博客选题：

- 《为什么我不再按目录学习 33 个 JS 概念》
- 《从调用栈到事件循环：我如何重新理解 JS 异步》
- 《面试官如何追问闭包、this 和原型》

当天产物：

- `reference/js-runtime-map.html` 草稿。
- 博客选题清单。

## Day 7：6 周总复盘

复盘问题：

- 哪 5 个概念最提升我的语言综合理解力？
- 哪 5 个概念最能提升代码设计和工程判断？
- 哪些主题仍只是“会用”，还没达到“能解释机制”？
- 哪些题适合作为面试题库的开场题，哪些适合作为追问题？
- 下一个月应该如何间隔复习？

当天产物：

- `learning-records/0002-six-week-retrospective.md`
- 下个月 spaced repetition 清单。

## 本周没有覆盖的内容

- 没有深入 V8 源码和字节码。
- 没有完整做线上性能问题诊断。
- 没有覆盖所有 Beyond 33 扩展主题。
- 没有把 reference 和 lessons 全部做成 HTML 成品。

## 可以挑战自己的地方

- 选一个真实项目模块，做一次“运行时 + 代码设计 + 性能”三层 review。
- 把 10 个高频面试主题做成结构化题库，每题有追问和评分标准。
- 用 DevTools 定位一次内存增长问题，哪怕是自己构造的 demo。
- 把 6 周学习内容压缩成 20 分钟分享。

## 和其他周的联系

- Week 1 给出运行时主干。
- Week 2 给出值模型和对象模型。
- Week 3 给出异步工程边界。
- Week 4 给出代码设计方法。
- Week 5 给出浏览器和性能判断。
- Week 6 把这些内容沉淀为工程判断、题库、复盘和后续学习路线。
