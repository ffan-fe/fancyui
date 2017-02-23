/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Fri Feb 17 2017 20:05:15 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/navmenu
 */

import Base from '../../base';
export default class NavmenuController extends Base{
  constructor($state,$translate,$timeout) {
    'ngInject';
    super($state,$translate)

    this.menuData = '';

    $timeout(() => {
      this.menuData = [
        {
          "sort": 0,
          "icon": "",
          "id": 1,
          "url": "/home/index",
          "path": "0-1",
          "name": "首页",
          "pid": 0
        },
        {
          "sort": 0,
          "icon": "",
          "id": 9,
          "url": "#",
          "path": "0-9",
          "name": "用户管理",
          "pid": 0,
          "_child": [
            {
              "sort": 0,
              "icon": "",
              "id": 11,
              "url": "/user/storeemp/index",
              "path": "0-9-11",
              "name": "门店员工",
              "pid": 9
            },
            {
              "sort": 0,
              "icon": "",
              "id": 12,
              "url": "/user/operator/index",
              "path": "0-9-12",
              "name": "BO运营",
              "pid": 9
            }
          ]
        },
        {
          "sort": 0,
          "icon": "",
          "id": 13,
          "url": "#",
          "path": "0-13",
          "name": "权限管理",
          "pid": 0,
          "_child": [
            {
              "sort": 0,
              "icon": "",
              "id": 14,
              "url": "/privilege/developer/index",
              "path": "0-13-14",
              "name": "开发者权限",
              "pid": 13
            },
            {
              "sort": 0,
              "icon": "",
              "id": 15,
              "url": "/privilege/storeemp/index",
              "path": "0-13-15",
              "name": "门店员工权限",
              "pid": 13
            },
            {
              "sort": 0,
              "icon": "",
              "id": 16,
              "url": "/privilege/operator/index",
              "path": "0-13-16",
              "name": "BO运营权限",
              "pid": 13
            },
            {
              "sort": 0,
              "icon": "",
              "id": 17,
              "url": "/system/node/index",
              "path": "0-13-17",
              "name": "菜单管理",
              "pid": 13
            },
            {
              "sort": 0,
              "icon": "",
              "id": 27,
              "url": "/system/role/index",
              "path": "0-13-27",
              "name": "角色管理",
              "pid": 13,
              "_child": [
                {
                  "sort": 0,
                  "icon": "",
                  "id": 28,
                  "url": "/system/role/add",
                  "path": "0-13-27-28",
                  "name": "新建角色",
                  "pid": 27
                },
                {
                  "sort": 0,
                  "icon": "",
                  "id": 31,
                  "url": "/system/role/index",
                  "path": "0-13-27-31",
                  "name": "角色列表",
                  "pid": 27
                }
              ]
            },
            {
              "sort": 5,
              "icon": "",
              "id": 21,
              "url": "/system/user/index",
              "path": "0-13-21",
              "name": "用户管理",
              "pid": 13
            }
          ]
        },
        {
          "sort": 2,
          "icon": "",
          "id": 3,
          "url": "#",
          "path": "0-3",
          "name": "市场管理",
          "pid": 0,
          "_child": [
            {
              "sort": 0,
              "icon": "",
              "id": 4,
              "url": "/market/api/index",
              "path": "0-3-4",
              "name": "API审核",
              "pid": 3
            },
            {
              "sort": 0,
              "icon": "",
              "id": 6,
              "url": "/market/app/index",
              "path": "0-3-6",
              "name": "应用审核",
              "pid": 3
            },
            {
              "sort": 0,
              "icon": "",
              "id": 7,
              "url": "/market/module/index",
              "path": "0-3-7",
              "name": "组件审核",
              "pid": 3
            },
            {
              "sort": 0,
              "icon": "",
              "id": 8,
              "url": "/market/hardware/index",
              "path": "0-3-8",
              "name": "硬件审核",
              "pid": 3
            }
          ]
        }
      ]
    }, 500);

    this.config = {
      childrenAttr: '_child',
      idAttr: 'id',
      parentAttr: 'pid',
      hrefAttr: 'url',
      textAttr: 'name',
      iconAttr: 'icon',
      matchCurrentUrl: node => {
        if(location.hash.slice(1, location.hash.length) == node.url) {
          return true;
        }
        return false;
      }
    };

    this.onSelect = node => {
      console.log('node clicked:' + node[this.config.textAttr]);
    }
  }
}
