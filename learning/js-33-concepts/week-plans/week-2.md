# Week 2：类型系统与对象模型

## 为什么放在第 2 周

`Primitive Types`、`Coercion`、`Equality`、`Objects`、`Prototypes` 相对独立，确实可以不放在第一周。它们很重要，但如果一开始连续学类型坑点，容易变成背规则。放在运行时主干之后，会更容易理解：值如何存在、对象如何链接、比较和转换为什么会反直觉。

本周的目标不是背完所有怪异例子，而是建立“值、对象、转换、比较、原型查找”的统一模型。

## 本周重点理解的知识

- Primitive 和 Object 的核心差异是不可变性、比较方式、存储和行为边界。
- 类型转换不是随机发生的，背后有 `ToPrimitive`、`ToNumber`、`ToString`、`ToBoolean`。
- `==`、`===`、`Object.is` 是三种不同相等性语义。
- 对象属性查找依赖原型链。
- class 没有改变 JS 基于原型的对象模型。

## Day 1：Primitive Types

主线材料：

- [Primitive Types](https://33jsconcepts.com/concepts/primitive-types)
- [MDN: JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

要理解：

- 7 种 primitive：`string`、`number`、`bigint`、`boolean`、`undefined`、`null`、`symbol`。
- primitive 不可变，按值比较。
- `typeof null === "object"` 是历史遗留行为。
- autoboxing 解释 primitive 为什么看起来有方法。

代码实验：

- 比较 `"x"`、`new String("x")`、`Object("x")`。
- 验证字符串不可变。
- 验证 `typeof null`、`typeof Symbol()`、`typeof 1n`。

面试追问：

- 如果 primitive 没有方法，为什么 `"hello".toUpperCase()` 可以执行？
- `const` 和 immutable 是一回事吗？
- 为什么不使用 `new Boolean(false)`？

当天产物：

- primitive vs wrapper object 对比表。

## Day 2：Primitives vs Objects

主线材料：

- [Primitives vs Objects](https://33jsconcepts.com/concepts/primitives-objects)

要理解：

- primitive 按值比较，object 按引用比较。
- 对象可变，变量保存引用。
- 函数传参更准确地说是 call by sharing。
- 重新赋值参数不会改变外部变量，修改共享对象属性会影响外部。

代码实验：

- `mutate(user)` 修改属性。
- `reassign(user)` 重新赋值参数。
- 对比 `{ a: 1 } === { a: 1 }` 与 primitive equality。

面试追问：

- 对象是按引用传递吗？这个说法哪里不精确？
- React 状态更新为什么强调新引用？
- `Object.freeze()` 是深不可变吗？

当天产物：

- 一段“call by sharing”解释。

## Day 3：Type Coercion

主线材料：

- [Type Coercion](https://33jsconcepts.com/concepts/type-coercion)

要理解：

- falsy 值只有有限集合。
- `+` 既可能做数字加法，也可能做字符串拼接。
- object 转 primitive 会走 `Symbol.toPrimitive` / `valueOf` / `toString`。
- 显式转换通常比隐式转换更适合业务代码。

代码实验：

- `[] + {}`、`1 + "2" + 3`、`1 + 2 + "3"`。
- 自定义 `Symbol.toPrimitive`，观察转换结果。

面试追问：

- 为什么 `[] == false`，但 `if ([])` 成立？
- `Number()`、`parseInt()`、一元 `+` 有什么差异？
- 如何减少业务代码中的 coercion 风险？

当天产物：

- 5 个 coercion 例子及逐步推导。

## Day 4：Equality

主线材料：

- [Equality: == vs ===](https://33jsconcepts.com/concepts/equality-operators)

要理解：

- `==` 会触发抽象相等比较。
- `===` 不做类型转换，但有 `NaN !== NaN` 和 `0 === -0`。
- `Object.is()` 修正了部分 `===` 边界。
- `value == null` 可作为同时判断 `null` / `undefined` 的有意用法。

代码实验：

- 验证 `null == undefined`、`NaN === NaN`、`Object.is(NaN, NaN)`、`Object.is(0, -0)`。
- 写 `==`、`===`、`Object.is` 对比表。

面试追问：

- 是否应该完全禁止 `==`？
- `Object.is` 和 `===` 差在哪里？
- React 为什么关心 `Object.is` 语义？

当天产物：

- equality 速查表。

## Day 5：Prototypes & Object Creation

主线材料：

- [Prototypes & Object Creation](https://33jsconcepts.com/concepts/object-creation-prototypes)

要理解：

- 对象通过原型链查找属性。
- 构造函数有 `prototype` 属性。
- 实例内部原型链接到构造函数的 `prototype`。
- `new` 做四件事：创建对象、链接原型、绑定 this、返回对象。
- `Object.create(null)` 创建无原型对象。

代码实验：

- 手写简化版 `new`。
- 画 `instance -> Constructor.prototype -> Object.prototype`。
- 用 `Object.create(null)` 做 dictionary。

面试追问：

- `prototype` 和 `__proto__` 分别是什么？
- 属性查找沿什么路径发生？
- 为什么 `obj.hasOwnProperty` 可能不安全？

当天产物：

- 一张原型链关系图。

## Day 6：Factories & Classes

主线材料：

- [Factories & Classes](https://33jsconcepts.com/concepts/factories-classes)
- [Inheritance & Polymorphism](https://33jsconcepts.com/concepts/inheritance-polymorphism)

要理解：

- factory 可以用闭包保存私有状态。
- class 是基于原型的组织语法。
- class method 通常共享在 prototype 上。
- 继承复用行为，多态统一接口。
- 组合通常比深层继承更灵活。

代码实验：

- 用 factory 和 class 分别实现 `Counter`。
- 对比私有状态、方法共享、可测试性。

面试追问：

- class 是否改变 JS 原型继承本质？
- factory 和 class 如何选择？
- 组合优于继承在前端组件中如何体现？

当天产物：

- factory vs class 对比表。

## Day 7：本周复盘

复盘任务：

- 用一张图串起 primitive、object、coercion、equality、prototype。
- 选 5 个最容易误判的类型题，写出解释而不是只写答案。
- 写一条 learning record：自己对“JS 值模型”的新理解。

## 本周没有覆盖的内容

- 没有完整阅读 ECMAScript 类型转换规范算法。
- 没有深入 property descriptor、getter/setter、Proxy/Reflect。
- 没有深入 class fields、decorators、mixin。
- 没有展开 TypeScript 类型系统与 JS runtime type 的差异。

## 可以挑战自己的地方

- 实现一个 `getType(value)`，准确处理 `null`、array、date、regexp、function、`NaN`。
- 用 10 分钟给别人讲清 primitive、object、wrapper object、prototype。
- 设计一组从 `typeof null` 追问到 autoboxing、coercion、prototype 的面试链。

## 和其他周的联系

- Week 1 解释“代码如何执行”，本周解释“执行时操作的值和对象是什么”。
- Week 3 的 Promise rejection、fetch response 判断依赖 equality 和 object modeling。
- Week 4 的函数式不可变更新依赖 primitive/object 和引用模型。
- Week 6 的性能与内存会回到对象形状、引用持有和 GC 可达性。
