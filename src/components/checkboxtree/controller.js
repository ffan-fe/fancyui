import config from './default.config.js'
class CheckboxtreeController {
  constructor() {
    this.name = 'checkboxtree';
    this.config = Object.assign({}, config, this.config);
    this.listPromise.then(responce => {
      this.list = responce;
      this.formatList(this.list, this.ngModel);
    });
    this.ngModel ? '' : this.ngModel = [];
  }

  /**
   * 节点点击处理：
   * 1. 如果点击的是叶节点：
   *   1.1如果所有兄弟节点都已选中：
   *      1.1.1 如果此节点是checked状态
   *          1.1.1.1 把父节点的状态置为checked
   *          1.1.1.2 重复步骤1.1
   *      1.1.2 如果此节点是unchecked的状态
   *          1.1.2.1 把父节点的状态置为unchecked
   *          1.1.2.1 重复执行1.1
   * 2. 如果点击的是父节点：
   *    2.1 执行1的逻辑；
   *    2.2 toggle所有子节点的check状态:
   * 3. 更新保存已选中节点的数组;
   */
  nodeClickHandler(node) {
    if (!node[this.config.fieldOfChildren]) {
      this.toggleUpNode(node);
    } else {
      this.toggleUpNode(node);
      this.toggleDownNode(node);
    }
    this.updateModel(node);
  }

  /**
   * 根据当前节点的checked状态来向上改变父级节点的状态
   */
  toggleUpNode(node) {
    let flag = true, //标记父级状态是否由当前节点决定
      siblings = this.getSiblings(node);
    if(siblings && siblings){
      siblings.forEach((item) => {
        if (!item.checked) {
          flag = false;
        }
      });
    }
    if (flag && node.parent) { //只有此情况下父节点的check状态才和当前节点有关，且和当前节点的checked状态一致
      let parent = this.getNode(node.parent, this.list);
      parent.checked = node.checked;
      this.updateModel(parent);
      this.toggleUpNode(parent);
    }
  }

  /**
   * 根据当前节点的checked状态来向下改变子级节点的状态
   */
  toggleDownNode(node) {
    if (node[this.config.fieldOfChildren]) {
      node[this.config.fieldOfChildren].forEach((item) => {
        item.checked = node.checked;
        this.updateModel(item);
        this.toggleDownNode(item);
      })
    }
  }

  /**
   * 监听点击事件，更新保存已选中节点
   * @param node
   */
  updateModel(node){
    if(node.checked){
      this.ngModel.push(node);
    }else{
      let position;
      this.ngModel.forEach((item, index) => {
        if(item[this.config.fieldOfId] == node[this.config.fieldOfId]){
          position = index;
          return;
        }
      });
      this.ngModel.splice(position,1);
    }
    this.ngModel = angular.copy(this.ngModel);
    console.log(this.ngModel)
  }

  /**
   * 根据ng-model传进来的checkedItems，来处理list，设置节点checked属性
   * @param list
   * @param checkedItems
   */
  formatList(list, checkedItems){
    checkedItems.forEach(item => {
      let targetNode = this.getNode(item[this.config.fieldOfId], list);
      console.log('targetNode in formatList', targetNode);
      if(targetNode){
        targetNode.checked = true;
      }
    });

  }

  /**
   * 以下都是工具函数
   */
  /**
   * 根据节点来获取兄弟节点（不包含当前节点）
   * @param node
   */
  getSiblings(node) {
    if(node.parent){
      let parent = this.getNode(node.parent, this.list);
      let copy = angular.copy(parent[this.config.fieldOfChildren]);
      copy.forEach((item, index) => {
        if (item[this.config.fieldOfId] == node[this.config.fieldOfId]) {
          copy.splice(index, 1);
        }
      });
      return copy;
    }
  }

  /**
   * 根据节点id来获取节点
   * @param id
   */
  getNode(id, list) {
    let targetNode;
    let walkList = (id, list) => {
      list.forEach(item => {
        if (item[this.config.fieldOfId] == id) {
          targetNode = item;
          return false;
        }
        if (item[this.config.fieldOfChildren]) {
          walkList(id, item[this.config.fieldOfChildren])
        }
      });
    };
    walkList(id, list);
    return targetNode;
  }

}

export default CheckboxtreeController;
