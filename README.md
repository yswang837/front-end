# front-end

&emsp;&emsp;该仓库记录了前端学习的相关知识，包括：html4, html5, css2, css3 和 vue3的笔记，代码，资料及视频地址等内容。

- html+css视频地址：https://www.bilibili.com/video/BV1p84y1P7Z5?p=1
- vue3视频地址：https://www.bilibili.com/video/BV1Za4y1r7KE?p=1

## html和css直接用liveServer可查看效果

## vue3的分支与知识点对照表

&emsp;&emsp;切换分支可快速得到一个能运行看效果的代码

| 分支名    |    知识点                    |
| :----:   | :-----------:               |
|   01     | 实现一个最简单的App组件         |
|   02     | App组件上新增Person组件        |
|   03     | setup概述，写在setup里的数据和方法等，返回后可直接被模板使用 |
|   04     | setup返回值，可直接返回一个渲染函数，此时模板失效                  |
|   05     | setup与OptionAPI的关系，setup与data()和methods()的先后问题 |
|   06     | setup语法糖，将setup和name直接写在script标签上，不需要显式返回，模板也可用 |
|   07     | ref创建基本类型的响应式数据      | 
|   08     | reactive创建对象类型的响应式数据 |
|   09     | ref创建对象类型的响应式数据      |
|   10     | ref对比reactive               |
|   11     | toRefs与toRef，toRefs(reactive)配合解构使用，解构之后的值依然保持响应式 |
|   12     | computed计算属性，同函数差不多，不过其有缓存，计算项如果不变，那只会调用一次，函数则会调用多次 |
|   13     | watch监视1，监视ref定义的基本类型数据               |
|   14     | watch监视2，监视ref定义的对象类型数据               |
|   15     | watch监视3，监视reactive定义的对象类型数据，且默认是开启深度监视的               |
|   16     | watch监视4，监视ref或reactive定义的对象类型数据中的某个属性               |
|   17     | watch监视5，监视上述的多个数据              |
|   18     | watchEffect                  |
|   19     | 标签的ref属性，子向父暴露数据                 |
|   20     | 简单回顾一下TS                |
|   21     | props的使用，父向子传递数据                   |
|   22     | 生命周期，创建、挂载、更新、卸载                     |
|   23     | 自定义hooks，将方法和数据模块化到hooks里面                  |
|   24     | 路由-基本切换效果，基本路由跳转              |
|   25     | 路由-两个注意点，路由跳转时组件会挂载和卸载，路由组件一般放在pages或views文件夹 |
|   26     | 路由-路由器的工作模式，history和哈希模式           |
|   27     | 路由-to的两种写法，字符串写法和对象写法              |
|   28     | 路由-命名路由，路由可以起名字                 |
|   29     | 路由-嵌套路由，路由可以嵌套                  |
|   30     | 路由-query参数，/news/detail?k1=v1&k2=v2               |
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
