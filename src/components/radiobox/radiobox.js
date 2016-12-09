/**
 * @ngdoc directive
 * @name radiobox.directive:bpRadio
 * @author chuxin
 * @restrict E
 * @description
 * 包装了`Input[type="radio"]`
 * 包含的状态有
 * - enable
 * - disabled
 * - checked
 *
 * @param {Boolean}   disabled       - binding symbol is `<`, 禁用状态,默认 `false`
 * @param {String}    value          - binding symbol is `@`, 选中后的值,默认 `false`
 * @param {ANY}       model          - binding symbol is `=?`, 绑定在`radioBox`上的`model`
 * @param {complex}   complex        - binding symbol is `=?complex`, 因为`value`只能提供`String`, 复杂结构数据类型使用, `complex`指令
 *
 * @example
 <pre>
 <bp-radiobox model="vm.radio" value="1"></bp-radiobox>
 <bp-radiobox model="vm.radio" value="2"></bp-radiobox>
 </pre>
 更多例子的[传送门](https://ffan-fe.github.io/Anaheim/#/radiobox)
 */

import Component from '../common/component';
import classNames from 'classnames';
import RadioStates from '../stateenum/radiobox.state';

'use strict';

/**
 * Radio component
 *
 * @export
 * @class Radio
 * @extends {Component}
 */
export default class Radiobox extends Component {

  /**
   * 默认状态
   */
  _initDefaultState() {
    this._state = {
      [`${RadioStates.DISABLED}`]: this.disabled
    };
  }

  /**
   * 默认值
   * @override
   */
  _initDefaultValue() {
    this.htmlID = this.htmlID || 'radio_' + Math.random().toString(36).substr(2, 9);
  }

  /**
   * 样式集合
   * @override
   */
  _createClassName() {
    this.className = classNames({
      'disabled': this._state[RadioStates.DISABLED]
    });
  }

  /**
   * @override
   */
  _launch() {}

  /**
   * radio状态 是否被选中
   *因为初始值 model value complex都为undefined
   * 加了判断是为了规避初始不设置任何值情况为选中的状态
   */
  isChecked() {
    if(this.model && (this.value || this.complex)) {
      if (this.model === this.value || this.model === this.complex) {
        return true;
      }
    }
    return false;
  }

}
