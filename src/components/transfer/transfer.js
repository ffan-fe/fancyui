/**
 * Transfer
 */
import Component from '../common/component';

'use strict';

/**
 * Transfer component
 *
 * @export
 * @class Transfer
 * @extends {Component}
 */
export default class Transfer extends Component {

  /**
   * @override
   */
  _initDefaultValue() {
    /**
     * 设置标题
     */
    this.setTitles();
    this.setPlaceholders();
    this.setOperations();

  }

  setTitles(){
    this.titles = angular.isArray(this.titles) ? this.titles:[];
    this.leftTitle = this.titles[0] ? this.titles[0] : '请选择';
    this.rightTitle = this.titles[1] ? this.titles[1] : '请选择';
  }

  setPlaceholders(){
    this.placeholders = angular.isArray(this.placeholders) ? this.placeholders:[];
    this.leftPlaceholder = this.placeholders[0]? this.placeholders[0] : '请输入检索条件';
    this.rightPlaceholder = this.placeholders[1] ? this.placeholders[1] : '请输入检索条件';
  }

  setOperations(){
    this.operations = angular.isArray(this.operations) ? this.operations:[];
    this.addOperation = this.operations[0] ? this.operations[0] : '添加';
    this.addAllOperation = this.operations[1] ? this.operations[1] : '添加全部';
    this.delOperation = this.operations[2] ? this.operations[2] : '删除';
    this.delAllOperation = this.operations[3] ? this.operations[3] : '全部删除';
  }

  watchLeftSearchValue(){


  }

  /**
   * 包装一个click处理器, 在模板里面用ngClick, 然后调用传进来的处理器
   * @private
   */
  innerChange() {
    this.change && typeof this.change === 'function' ? this.change({$value: this.leftSearchValue}) : this.watchLeftSearchValue();
  }



  /**
   * @override
   */
  _createClassName() {}
  /**
   * @override
   */
  _launch() {}
}
