# vue-cli3-pages

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
静态资源可以通过两种方式进行处理：

在 JavaScript 被导入或在 template/CSS 中通过相对路径被引用。这类引用会被 webpack 处理。

放置在 public 目录下或通过绝对路径被引用。这类资源将会直接被拷贝，而不会经过 webpack 的处理。

### 项目熟悉上手
```
项目配置: 
baseUrl  部署应用包的基础URL，相对目录还是绝对目录
pages    多页应用配置参数，src/pages 指定项目目录
```

```
项目目录文件:
src/pages/admin/index.html  模板
src/pages/admin/index.ts    入口
src/pages/admin/app.vue     根路由
src/pages/admin/public      存放静态文件(webpack不处理)，绝对路径引用
src/pages/admin/views       主视图模块，不同文件代表不同页面模块
src/pages/admin/router.ts   项目路由配置管理
src/pages/admin/store.ts    全局状态数据管理
src/pages/admin/apis        项目api请求，按照模块划分
src/pages/admin/assets      图片视频样式字体等静态资源存放
src/pages/admin/assets      图片视频样式字体等静态资源存放
src/pages/admin/componnets  全局可复用组件，组件封装(Props控制数据呈现，template控制视图，数据视图区分开)
src/pages/admin/utils       当前项目的一些数据处理工具，模块渲染工具等
src/utils/AxiosUtil.ts      Ajax请求封装类，请求方法集合
...
```

### 框架结构设计思考
```
1. 基于传统的单页项目，通过多页配置项打造成更灵活的单页项目+多页项目，多入口和单入口，可以很方便的一个仓库管理多个项目，负者一整套产品线；
2. 不同的插件配置router、vuex、axios、element-ui等等，一个负责页面路由，对应到映射的组件模块，一个可以对组件间的数据交互进行把控处理，分别解决了项目的模块划分以及数据流控制，再就是axios的应用，解决了项目的接口请求交互，并且这些插件都是可以插拔的，比如vuex就是一个可以选择取舍的插件；
3. 框架应用这些第三方插件，给项目开发者提供的了极大地便利，如何组织这些资源，配合脚手架已有的一些基础设施，让框架自身可以支持更大型更复杂的项目? 
项目规范就显得很重要了，文件创建，样式书写，业务解耦，工具封装，所有都是为了能够让框架自身支撑足够体量的业务需求，并且让需求间不重复
4. 
```


