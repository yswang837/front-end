# vue3-study

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## 分支与知识点对照表

| 分支名    |    知识点                    |
| :----:   | :-----------:               |
|   01     | 写一个App组件                 |
|   02     | 一个简单的效果                 |
|   03     | setup概述                    |
|   04     | setup返回值                   |
|   05     | setup与OptionAPI的关系        |
|   06     | setup语法糖                   |
|   07     | ref创建基本类型的响应式数据      |
|   08     | reactive创建对象类型的响应式数据 |
|   09     | ref创建对象类型的响应式数据      |
|   10     | ref对比reactive               |
|   11     | toRefs与toRef                |
|   12     | computed计算属性              |
|   13     | watch监视-情况1               |
|   14     | watch监视-情况2               |
|   15     | watch监视-情况3               |
|   16     | watch监视-情况4               |
|   17     | watch监视-情况5               |
|   18     | watchEffect                  |
|   19     | 标签的ref属性                 |
|   20     | 简单回顾一下TS                |
|   21     | props的使用                   |
|   22     | 生命周期                      |
|   23     | 自定义hooks                  |
|   24     | 路由-基本切换效果              |
|   25     | 路由-两个注意点                |
|   26     | 路由-路由器的工作模式           |
|   27     | 路由-to的两种写法              |
|   28     | 路由-命令路由                  |
|   29     | 路由-嵌套路由                  |
|   30     | 路由-query参数                |
|   31     | 路由-params参数               |
|   32     | 路由-props配置                |
|   33     | 路由-replace属性              |
|   34     | 路由-编程式路由导航             |
|   35     | 路由-重定向                   |
|   36     | 准备一个效果                   |
|   37     | 搭建pinia环境                 |
|   38     | 存储+读取数据                  |
|   39     | 修改数据的三种方式              |
|   40     | storeToRefs                  |
|   41     | getters                      |
|   42     | $subscribe                   |
|   43     | store组合式写法                |
|   44     | 组件通讯-props                |
|   45     | 组件通讯-custom-event         |
|   46     | 组件通讯-mitt                 |
|   47     | 组件通讯-v-model              |
|   48     | 组件通讯-attrs                |
|   49     | 组件通讯-refs和parent         |
|   50     | 组件通讯-provide和inject      |
|   51     | 组件通讯-pinia                |
|   52     | 组件通讯-slot                 |
|   53     | 组件通讯-slot具名插槽          |
|   54     | 组件通讯-slot默认插槽          |
|   55     | 组件通讯-slot作用域插槽        |
|   56     | shallowRef与shallowReactive |
|   57     | readonly与shallowReadonly   |
|   58     | toRaw与markRaw              |
|   59     | customRef                   |
|   60     | Teleport                    |
|   61     | Suspense                    |
