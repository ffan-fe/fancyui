# Fancyui

组件库, 具体参见:http://www.fancyui.org/#/zh-cn/component/install


### 上手须知

1. 基于angular
2. 基于Bootstrap
3. 使用ES6 + Babel

所有的组件以文件夹形式供应，并且入口是index.js ,比如 Button组件

|- Button/  --------------------- Component's folder
  |- index.js  ----------------- export angular.module('bp.button',[])
  |- Button.component.js -------- Component file
  |- Button.less  --------------- Styles
  |- Button.spec.js  ------------ Unit Test
