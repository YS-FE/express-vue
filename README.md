# express-vue
基于 express 服务的 vue-ssr

# 运行

```
npm run dev  开发模式
npm run build & npm run start 生产模式

```


# 目录结构

```
├── build   打包编译的配置
│   ├── setup-dev-server.js
│   ├── webpack.base.config.js
│   ├── webpack.client.config.js
│   └── webpack.server.config.js
|
├── config   server的配置(代理，入口等配置)
│   └── index.js
|
├── manifest.json
├── package.json
|
├── public   资源目录
│   ├── logo-120.png
│   └── logo-512.png
|
├── router   服务的路由处理
│   ├── api.js
│   └── index.js
|
├── server.js 服务的入口文件
|
├── src
│   ├── api  数据接口
│   │   ├── config.js
│   │   └── index.js
|   |
│   ├── app.js  创建vue实例的工厂函数
|   |
│   ├── client  客户端代码目录
│   │   ├── App.vue
│   │   ├── components
│   │   │   └── ProgressBar.vue
│   │   ├── router
│   │   │   └── index.js
│   │   ├── store
│   │   │   ├── actions.js
│   │   │   ├── getters.js
│   │   │   ├── index.js
│   │   │   └── mutations.js
│   │   └── views
│   │       ├── Search.vue
│   │       ├── Theater.vue
│   │       └── Top.vue
|   |
│   ├── data json数据
│   │   ├── theater.json
│   │   └── top.json
|   |
│   ├── entry-client.js  客户端编译入口文件
│   ├── entry-server.js  服务端编译入口文件
│   ├── index.template.html  模板文件
|   |
│   └── util  工具函数
│       ├── filters.js
│       └── title.js
|
└── yarn.lock
```
