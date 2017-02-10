# Fancyui

 - [官方网站](http://www.fancyui.org/)
 - [更新日志](CHANGELOG.zh-CN.md)
 - [开发文档](http://www.fancyui.org/)
 
FancyUI是万达网络科技集团飞凡前端团队(ffan-fe)开源的一套AngularJs(1.5.X)的组件库，适合构建后台管理系统，主要有以下特性：

 - 通过命令行快速创建项目，创建组件
 - 提供大量开箱即用的PC端开发常用组件
 - 3分钟内开发完成一个与rest API对接的管理后台页面
 - 模块化管理并按需加载，ES6语法上手
 - 使用ES6 + gulp + webpack做项目管理

[中文说明](README-zh_CN.md)   [English Ver.](README.md) 

## 快速上手

#### 1.在AngularJs项目中引入组件库

```
npm install ng-start-cli -g
npm install fancyui --save
```
#### 2.把组件注入模块
 
```
import progressdemoComponent from './progressdemo.component';
import {Progress} from 'fancyui';
export default angular.module('progressDemo', [
  Progress.name
])
.component('progressDemo', progressdemoComponent);
```

#### 3.实例化组件
 
```
<bp-progress percent="80" stroke-width="8"></bp-progress>
```

#### 4.[查看效果](http://www.fancyui.org/#/zh-cn/component/progress)

##源码构建及开发方法


## 安装

```
git clone git@github.com:ffan-fe/fancyui.git
```

安装 node_modules:
```
npm i -d ;
```

## 启动演示项目 Example

```
npm run dev
```

## 测试

### test all
```
npm test
```
### single test
```
npm test --single_file=lib/button/button.spec.js

npm run singleTest
```

## 如何助力fancyui？
阅读 [contributing](CONTRIBUTING.md) 了解流程.

## LICENSE
BSD

## 组件库详细文档

 - 🆗 [按钮](lib/button/README.md)
 - 🔖 [图标](lib/icon/README.md)
 - 📲 [步骤条](lib/steps/README.md)
 - 📡 [导航菜单](lib/menu/README.md)
 - 📋 [表格](lib/ffanTable/README.md)
 - 📋 [自定义表格](lib/customTable/README.md)
 - ☑️️ [表单](lib/form/README.md)
 - 🔌 [开关](lib/switch/README.md)
 - ⏩ [进度条](lib/progress/README.md)
 - 🔢 [数字输入框](lib/inputnumber/README.md)
 - 🗄 [选择器](lib/select/README.md)
 - ♥️ [评分](lib/rate/README.md)
 - 🎱 [徽标 badge](lib/badge/README.md)
 - ↔️ [穿梭框](lib/transfer/README.md)
 - 🌵 [树](lib/checkboxtree/README.md)
 - 🏞 [上传](lib/upload/README.md)
 - 📅 [日历](lib/calendar/README.md)
 - 📈 [曲线图](lib/charts/README.md)
 - 📊 [饼图](lib/charts/README.md)
 - 🚇 [仪表盘](lib/charts/README.md)
 - ❗️ [提示框](lib/service/alert/README.md)
 - ⏺ [滑动输入条](lib/rangeinput/README.md)
 - ✅ [气泡确认框](lib/popconfirm/README.md)
 - ⚠️ [短消息通知](lib/service/hint/README.md)
 - 🌀 [加载](lib/service/loading/README.md)


