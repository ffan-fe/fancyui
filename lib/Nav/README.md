#导航菜单 menu

## Intro

FancyUI menu component

## Usage

```
import {menu} from 'fancyui';
export default angular.module('menuDemo', [
  menu.name
])
```

```
<f-menu default-selected-keys="vm.keys" default-open-keys="vm.openKeys" theme="light" mode="horizontal">
  <menu-item key="mail" disabled="vm.disabled">
    Navigation One
  </menu-item>
  <sub-menu title="<span>Navigation Three - Submenu</span>" key="submenu">
    <menu-item-group title="Item 1">
      <menu-item key="setting:1">Option 1</menu-item>
      <menu-item key="setting:2">Option 2</menu-item>
    </menu-item-group>
  </sub-menu>
</f-menu>
```

```
this.keys = ['mail'];
this.openKeys = [];
this.disabled = true;
```

### See what happened && get all config options 

http://www.fancyui.org/#/zh-cn/component/menu
