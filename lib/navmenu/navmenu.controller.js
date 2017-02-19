/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Fri Feb 17 2017 20:05:15 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/navmenu
 */

import Tree from './tree/index.js';

class NavmenuController {
  constructor() {
    this.name = 'navmenu';

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
            children: [
              {
                id: 321,
                text: '测试子menu321',
                parent: 32,
                href: 'navmenu'
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

    this.parsedData = [];

    let config = {
      childrenAttr: 'children',
      idAttr: 'id',
      parentAttr: 'parent'
    };

    this.config = config;

    let data = {
      id: '_auto_root_',
      children: this.menuData
    };

    this.tree = new Tree(data, config);

    this.checkActiveMenu();
  }

  checkActiveMenu() {
    const href =  location.href;
    this.tree.traverse(node => {
      if (href.indexOf(node.href) > -1) {
        node.active = true;

        this.tree.traverseUp(node, node => {
          node.hide = false;
        })
      }
    })
  }

  clickHandler(e) {
    let nodeId = parseInt(e.target.attributes['data-id'].nodeValue);

    let node = this.tree.getNodeById(nodeId);

    if(node.children && node.children.length) {
      node.hide = !node.hide;

      if(node.hide) {
        let tempTree = new Tree(node, this.config);
        tempTree.traverse(node => {
          if (node.children && node.children.length) {
            node.hide = true;
          }

          node.active = false;
        })
      }
    } else {
      this.tree.traverse(node => {
        node.active = false;
        console.log(node);
      });
      node.active = true
    }
  }
}

export default NavmenuController;
