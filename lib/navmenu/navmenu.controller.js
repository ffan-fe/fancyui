/**
 * @description xxxx
 *
 * @author fuzhiyuan1@wandan.cn
 * @date Fri Feb 17 2017 20:05:15 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/navmenu
 */

import Tree from 'js-tree-structure';

let defaultIcon = require('./default-menu.png');

class NavmenuController {
  constructor() {
    this.name = 'navmenu';

    let data = {
      id: '_auto_root_',
      children: this.menuData
    };

    this.defaultIcon = defaultIcon;

    this.tree = new Tree(data, this.config);

    this.checkActiveMenu();
  }

  checkActiveMenu() {
    const href =  location.href;
    this.tree.traverse(node => {
      //if (node.children) {
        node.hide = true;
      //}
      if (href.indexOf(node.href) > -1) {
        node.active = true;

        this.tree.traverseUp(node, node => {
          node.hide = false;
        });
      }
    })
  }

  clickHandler(e) {
    let nodeId = parseInt(e.target.attributes['data-id'].nodeValue);

    let node = this.tree.getNodeById(nodeId);

    if(this.onSelect && typeof this.onSelect == 'function') {
      this.onSelect(node);
    }

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
      });
      node.active = true
    }
  }
}

export default NavmenuController;
