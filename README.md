# Fancyui

组件库, 具体参见:http://www.fancyui.org/#/zh-cn/component/install


### 上手须知

1. 基于angular
2. 基于Bootstrap
3. 使用ES6 + Babel

所有的组件以文件夹形式供应，并且入口是index.js ,比如 Button组件

```
.
└── Button                    component's folder
    ├── index.js  			      like export angular.module('bp.button',[]);
    ├── Button.component.js   component file
    ├── Button.less 				  styles
    └── Button.spec.js				unit test
```
