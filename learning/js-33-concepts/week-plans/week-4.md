# Week 4：函数范式、模块化与代码设计

## 为什么放在第 4 周

前 3 周解决“JS 如何运行”和“异步如何组织”，这一周转向代码设计能力。函数式工具、纯函数、组合、模块化、class/factory 的选择，直接影响日常工程中的可读性、可测试性和可维护性。

## 本周重点理解的知识

- 高阶函数和数组方法帮助表达数据转换意图。
- 纯函数不是不要副作用，而是把副作用隔离到边界。
- curry、compose、pipe 是组合手段，不是目的。
- 模块系统解决作用域隔离、依赖关系和加载组织。
- class、factory、composition 是不同建模方式，要根据复杂度选择。

## Day 1：Higher-Order Functions

主线材料：

- [Higher-Order Functions](https://33jsconcepts.com/concepts/higher-order-functions)

要理解：

- 高阶函数接收函数或返回函数。
- 高阶函数可以把变化点作为参数传入。
- 抽象的价值是减少真实重复，而不是制造间接层。

代码实验：

- 写一个 `withLogging(fn)`。
- 写一个通用 `filterBy(predicate)`。

面试追问：

- 什么是高阶函数？
- 高阶函数如何提升复用？
- 什么时候高阶函数会降低可读性？

当天产物：

- 一个“去重复”前后的高阶函数例子。

## Day 2：map / filter / reduce

主线材料：

- [map, reduce, filter](https://33jsconcepts.com/concepts/map-reduce-filter)

要理解：

- `map` 表达一对一映射。
- `filter` 表达筛选。
- `reduce` 表达聚合或结构转换。
- `reduce` 很强，但不应滥用。

代码实验：

- 用 for loop 和 map/filter/reduce 实现同一段数据转换。
- 用 reduce 实现 groupBy。

面试追问：

- `map` 和 `forEach` 的语义差异是什么？
- `reduce` 的 accumulator 类型如何变化？
- 什么场景不适合 reduce？

当天产物：

- 一个数据转换可读性对比。

## Day 3：Pure Functions

主线材料：

- [Pure Functions](https://33jsconcepts.com/concepts/pure-functions)

要理解：

- 同样输入得到同样输出。
- 没有可观察副作用。
- 纯函数更容易测试、缓存、组合。
- 前端副作用不可避免，关键是隔离。

代码实验：

- 把“计算价格 + 更新 DOM”拆成纯计算函数和 effect。
- 给纯函数写简单测试用例。

面试追问：

- 纯函数是否意味着内部不能创建变量？
- 纯函数和不可变数据有什么关系？
- UI 应用里副作用应该放在哪里？

当天产物：

- 一个副作用隔离前后对比。

## Day 4：Currying & Composition

主线材料：

- [Currying & Composition](https://33jsconcepts.com/concepts/currying-composition)

要理解：

- curry 把多参数函数变成逐步接收参数。
- compose / pipe 把小函数连接成数据流。
- 组合提升表达力，但过度组合会让调试困难。

代码实验：

- 实现 `curry(add)`。
- 实现 `pipe`。
- 用 `pipe` 组合三步数据清洗。

面试追问：

- curry 和 partial application 有什么关系？
- pipe 和 compose 有什么差异？
- 函数组合什么时候比普通函数调用更清晰？

当天产物：

- 一个 `pipe` 数据处理例子。

## Day 5：ES Modules + IIFE

主线材料：

- [ES Modules](https://33jsconcepts.com/concepts/es-modules)
- [IIFE & Namespaces](https://33jsconcepts.com/concepts/iife-modules)

要理解：

- IIFE 曾用于私有作用域和命名空间隔离。
- ESM 提供静态结构、live binding、动态 import。
- 模块系统帮助组织依赖，也影响打包和 tree shaking。
- 动态 import 适合按需加载。

代码实验：

- 写一个 ESM live binding 例子。
- 用 `import()` 模拟按需加载。
- 对比 IIFE 私有变量和 ESM 导出。

面试追问：

- ESM 和 CommonJS 的核心差异是什么？
- live binding 如何体现？
- 动态 import 对性能有什么价值？

当天产物：

- ESM vs IIFE vs CommonJS 对比表。

## Day 6：Code Modeling: Factory, Class, Composition

主线材料：

- [Factories & Classes](https://33jsconcepts.com/concepts/factories-classes)
- [Design Patterns](https://33jsconcepts.com/concepts/design-patterns)

要理解：

- factory、class、composition 都是建模手段。
- 组合通常比深层继承更灵活。
- 设计模式是问题-解法的命名，不是模板。
- 前端组件设计要尤其警惕过度抽象。

代码实验：

- 用 factory、class、composition 三种方式实现同一个简单模型。
- 写一个最小事件总线，理解 Observer / PubSub。

面试追问：

- 什么时候选择 factory，什么时候选择 class？
- 组合优于继承如何体现？
- 如何判断设计模式是不是过度设计？

当天产物：

- 一段“抽象判断标准”：何时抽象，何时保留重复。

## Day 7：本周复盘

复盘任务：

- 整理一张函数式工具箱。
- 整理一张代码建模选择表。
- 从自己项目中找一个函数或模块，尝试用本周标准评价它。

## 本周没有覆盖的内容

- 没有深入函数式编程理论，例如 functor、monad。
- 没有结合 TypeScript 类型系统做代码设计。
- 没有深入 bundler 的模块解析和 tree shaking 细节。
- 没有系统分析框架源码中的设计模式。

## 可以挑战自己的地方

- 找一个过度封装的项目代码，写出它为什么增加理解成本。
- 把一个副作用重的函数拆成 pure core + imperative shell。
- 设计一套“代码设计面试题”，要求候选人不仅写出代码，还解释抽象取舍。

## 和其他周的联系

- Week 1 的 closure 和 scope 支撑高阶函数、IIFE、模块私有状态。
- Week 2 的 object/prototype 支撑 class 和 factory 的理解。
- Week 3 的异步封装会用到本周的 pure function、composition 和模块边界。
- Week 6 的 Clean Code 和 Design Patterns 会进一步收束本周的代码设计判断。
