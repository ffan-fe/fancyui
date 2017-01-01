# Fancyui

An angular(1.5.X) component's lib, please see http://www.fancyui.org/ for detail.


## Installing

**NPM**
Install the current stable release:
```
npm install fancyui --save
```

## Basic usage

Thers is the mature fancyui solution(http://www.fancyui.org/#/zh-cn/component/install) base on Angular(1.5.x).

1.**Install ng-start-cli**
Install the current stable release:
```
npm install ng-start-cli -g -d 
```

2.**Create project with ng-start-cli **
```
ng-start-cli init
```

3.**Import fancyui **
```
import {Button} from fancyui;

angular.module('buttondemo',[
  Button.Name
]);

```

## Want to contribute?
See the [contributing](CONTRIBUTING.md) guidelines.

```
└── Button                    component's folder
    ├── index.js  			      like export angular.module('bp.button',[]);
    ├── Button.component.js   component file
    ├── Button.less 				  styles
    └── Button.spec.js				unit test
```
