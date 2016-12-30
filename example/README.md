* [项目介绍](#walkthrough)
    * [项目构建](#build-system)
    * [项目结构](#file-structure)
* [开始开发](#getting-started)
    * [项目依赖](#dependencies)
    * [项目运行](#running-the-app)
        * [Gulp Tasks](#gulp-tasks)
        * [Proxy](#proxy)
		* [生成模版](#generating-components)

# Walkthrough

## Branches
* master分支: 框架(开发请在master分支)
* demo分支: demo示例

## Build System
项目基于webpack gulp构建工作

`Webpack` 处理文件依赖:
* 采用 `Babel` 编译js代码 ES6 to ES5
* 用模块加载的方式加载html
* 编译less
* 动态编译刷新
* 改动模块热启动

`Gulp` 处理打包流程:
* 启动webpack流程
* 生成app模块模版

## File Structure
每一个页面或组件都是一个模块
```
client
⋅⋅app/
⋅⋅⋅⋅app.js * 项目入口
⋅⋅⋅⋅app.html * 项目html
⋅⋅⋅⋅common/ * 公共的组件
⋅⋅⋅⋅components/ * 不同页面模块
⋅⋅⋅⋅⋅⋅components.js * 页面模块入口
⋅⋅⋅⋅⋅⋅home/ * 首页模块
⋅⋅⋅⋅⋅⋅⋅⋅home.js * 首页入口 (routes, configurations, and declarations occur here)
⋅⋅⋅⋅⋅⋅⋅⋅home.component.js * 首页 "directive"
⋅⋅⋅⋅⋅⋅⋅⋅home.controller.js * 首页 controller
⋅⋅⋅⋅⋅⋅⋅⋅home.less * 首页 styles
⋅⋅⋅⋅⋅⋅⋅⋅home.html * 首页 template
⋅⋅⋅⋅⋅⋅⋅⋅home.spec.js * 首页 specs (for entry, component, and controller)
```

# Getting Started
## Dependencies
执行项目之前,电脑需要配置以下环境:
* `node` and `npm`
第一次执行时确认本机有以下安装包:
`npm install` 安装所有依赖

## Running the App
执行 `gulp` 启动调试

## Proxy
为了方便本地调试和解决跨域问题, 在执行 `gulp` 启动调试之时, 会启动代理服务器, 讲请求转发
转发是可配置的, 见`custom.env.config.js`里的三个字段
1. apiFilter      需要过滤的api
2. targetDomain   需要转发的域名
3. cookie         转发域名登录的PHPSESSID

### Gulp Tasks
* `webpack`
  * 执行 `gulp webpack` 打包上线 发布路径请在`custom.env.config.js`中配置, 默认是../
* `default` (which is the default task that runs when typing `gulp` without providing an argument)
	* 执行 `gulp` 启动本地调试.
* `component`
  * 执行 `gulp component` 生成一个项目模块模版. [Read below](#generating-components) 获取更多信息.

### Generating Components
一个项目模块的模版如下
```
⋅⋅⋅⋅⋅⋅componentName/
⋅⋅⋅⋅⋅⋅⋅⋅componentName.js // 模版入口 声明该模块的依赖
⋅⋅⋅⋅⋅⋅⋅⋅componentName.component.js
⋅⋅⋅⋅⋅⋅⋅⋅componentName.controller.js
⋅⋅⋅⋅⋅⋅⋅⋅componentName.html
⋅⋅⋅⋅⋅⋅⋅⋅componentName.less //
⋅⋅⋅⋅⋅⋅⋅⋅componentName.spec.js // 单测的测试用例
```

增加一个BP后台页面模块, 执行 `gulp component --name componentName`.

一定确定没有重名的模块,因为 `--name` 会覆盖已有同名模块 大小写不敏感

模块默认会生成在 `client/app/components` 目录下. 可以通过修改 `--parent` 参数来改变生成的目录, 基准目录是 `client/app/components/`.

比如, 执行 `gulp component --name signup --parent auth` 将会在创建在 `client/app/components/auth/signup` 下.

生成一个公共模块 执行 `gulp component --name commonheader --parent ../common` 就创建了BP后台的公共头部 `client/app/common/footer`.