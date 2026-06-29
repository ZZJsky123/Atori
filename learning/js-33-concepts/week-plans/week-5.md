# Week 5：浏览器能力、数据结构与性能意识

## 为什么放在第 5 周

这一周把语言理解连接到前端运行环境和性能判断。DOM、Worker、Data Structures、Big O、Recursion、Regular Expressions 都不是孤立知识，它们共同决定你能否写出在真实数据规模和真实浏览器环境中表现稳定的代码。

## 本周重点理解的知识

- DOM 操作的成本来自布局、绘制、事件绑定和安全风险。
- Worker 解决主线程阻塞问题，但带来通信和数据传输成本。
- 数据结构选择决定查找、插入、删除和去重成本。
- Big O 是增长趋势语言，不是算法题专属。
- 递归适合树和嵌套结构，但要警惕栈深度。
- 正则适合模式匹配，不适合解析复杂嵌套语法。

## Day 1：DOM Manipulation

主线材料：

- [DOM Manipulation](https://33jsconcepts.com/concepts/dom)

要理解：

- DOM 是文档对象模型，不是 HTML 字符串。
- `innerHTML`、`textContent`、`appendChild` 有安全和语义差异。
- 频繁读写布局属性可能造成 layout thrashing。
- DocumentFragment 和事件委托能降低部分成本。

代码实验：

- 逐个插入 1000 个节点 vs DocumentFragment。
- 对比 `innerHTML` 和 `textContent`。
- 写一个事件委托例子。

面试追问：

- DOM 慢到底慢在哪里？
- `innerHTML` 有什么安全风险？
- 事件委托什么时候不适用？

当天产物：

- DOM 操作风险表：安全、性能、可维护性。

## Day 2：Web Workers

主线材料：

- [Web Workers](https://33jsconcepts.com/concepts/web-workers)

要理解：

- Worker 把耗时 JS 放到后台线程，避免阻塞主线程。
- Worker 不能直接访问 DOM。
- 主线程和 Worker 通过 message 通信。
- structured clone 和 transferable object 影响传输成本。

代码实验：

- 设计一个大数组计算 Worker。
- 对比主线程计算和 Worker 计算对 UI 响应的影响。

面试追问：

- Worker 能不能解决所有性能问题？
- Worker 为什么不能直接操作 DOM？
- structured clone 和 transfer 有什么差异？

当天产物：

- 主线程 vs Worker 能力边界表。

## Day 3：Data Structures

主线材料：

- [Data Structures](https://33jsconcepts.com/concepts/data-structures)

要理解：

- Array、Object、Map、Set、Stack、Queue 都有适合场景。
- Map 的 key 可以是任意值。
- Set 适合去重和成员判断。
- Stack 适合撤销、DFS；Queue 适合任务队列、BFS。

代码实验：

- Array vs Set 去重。
- Map 建立树节点 id 索引。
- Stack 实现撤销记录。

面试追问：

- Object 和 Map 的 key、迭代、原型风险有何差异？
- 权限集合用 Array 还是 Set？
- 什么场景需要显式索引结构？

当天产物：

- 前端场景数据结构选择表。

## Day 4：Algorithms & Big O

主线材料：

- [Algorithms & Big O](https://33jsconcepts.com/concepts/algorithms-big-o)

要理解：

- Big O 描述输入规模增长时的趋势。
- 常见复杂度：O(1)、O(log n)、O(n)、O(n log n)、O(n²)。
- 常数项、内存占用、浏览器 API 成本在工程中仍重要。
- 前端大列表、树遍历、搜索过滤都需要复杂度意识。

代码实验：

- 把 O(n²) 去重改成 Set。
- 分析 nested loop 数据合并逻辑。
- 标注树遍历的时间和空间复杂度。

面试追问：

- 为什么两个 O(n) 实现真实耗时可能差很多？
- Big O 忽略常数项，工程优化还要不要关心常数？
- 如何判断候选人是真的理解复杂度？

当天产物：

- 一个 O(n²) 到 O(n) 的优化案例。

## Day 5：Recursion

主线材料：

- [Recursion](https://33jsconcepts.com/concepts/recursion)

要理解：

- 递归需要 base case 和 recursive step。
- 递归适合树、嵌套结构、分治。
- JS 深递归可能 stack overflow。
- 递归可改写为显式栈。

代码实验：

- 递归查找树节点。
- 用显式栈改写同样逻辑。
- 写递归 flatten。

面试追问：

- 递归和循环如何互相转换？
- 深层菜单树递归有什么风险？
- DFS 和 BFS 如何选择？

当天产物：

- 递归版和迭代版树查找。

## Day 6：Regular Expressions

主线材料：

- [Regular Expressions](https://33jsconcepts.com/concepts/regular-expressions)

要理解：

- 字符类、量词、分组、捕获、断言、flags。
- 贪婪与非贪婪。
- 带 `g` 的正则有 `lastIndex` 状态。
- 正则不适合解析复杂嵌套结构。

代码实验：

- 提取 URL query。
- 替换模板变量。
- 验证 `/a/g.test("a")` 多次调用的状态问题。

面试追问：

- 带 `g` 的正则用 `test` 为什么可能交替 true/false？
- 什么时候不应该用正则？
- 如何提升复杂正则可读性？

当天产物：

- 3 个业务正则例子和 1 个正则陷阱。

## Day 7：本周复盘

复盘任务：

- 整理一张前端性能问题来源图：DOM、JS、网络、内存、数据结构。
- 为 5 个业务场景选择数据结构并解释原因。
- 写一条 learning record：复杂度意识如何改变前端代码判断。

## 本周没有覆盖的内容

- 没有系统讲 Core Web Vitals。
- 没有深入 PerformanceObserver、IntersectionObserver、ResizeObserver。
- 没有覆盖 IndexedDB、localStorage、cookies 等存储 API。
- 没有深入高级算法，如 heap、trie、graph、dynamic programming。
- 没有结合真实项目做完整 profiling。

## 可以挑战自己的地方

- 用真实业务代码做一次复杂度审查。
- 写一个 Worker demo，比较主线程卡顿。
- 用 DevTools Performance 面板观察一次 DOM 批量更新。
- 把 Object / Map / Set 的选择写成一页速查表。

## 和其他周的联系

- Week 1 的调用栈解释长任务为什么阻塞。
- Week 2 的 object 和 equality 影响数据结构选择。
- Week 3 的异步控制流影响 Worker 通信和请求并发。
- Week 6 的引擎、内存和工程判断会进一步解释性能问题的根因。
