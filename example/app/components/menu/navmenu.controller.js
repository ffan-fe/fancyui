/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Fri Feb 17 2017 20:05:15 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/navmenu
 */

import Base from '../../base';
export default class NavmenuController extends Base{
  constructor($state,$translate) {
    'ngInject';
    super($state,$translate)

    this.menuData = [
      {
        id: 1,
        text: '测试父menu1',
        href: 'test'
      },
      {
        id: 2,
        text: '测试父menu2',
        children: [
          {
            id: 21,
            text: '测试子menu21',
            parent: 2
          },
          {
            id: 22,
            text: '测试子menu12',
            parent: 2
          }
        ]
      },
      {
        id: 3,
        text: '测试父menu3',
        children: [
          {
            id: 31,
            text: '测试子menu31',
            parent: 3
          },
          {
            id: 32,
            text: '测试子menu32',
            hide: false,
            parent: 3,
            children: [
              {
                id: 321,
                text: '测试子menu321',
                parent: 32,
                href: 'menu'
              },
              {
                id: 322,
                text: '测试子menu322',
                active: false,
                parent: 32
              }
            ]
          }
        ]
      }
    ];

    this.config = {
      childrenAttr: 'children',
      idAttr: 'id',
      parentAttr: 'parent'
    };

    this.onSelect = node => {
      console.log('node clicked:' + node.text);
    }
  }
}
