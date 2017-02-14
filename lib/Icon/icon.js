/**
 * Icon
 * @author fengpeng
 */

import Component from '../common/component';
import classNames from 'classnames';

'use strict';

/**
 * Icon component
 *
 * @export
 * @class Icon
 * @extends {Component}
 */
export default class Icon extends Component {
  /**
   * @override
   * @protected
   */
  _initDefaultValue() {}
  /**
   * @override
   * @protected
   */
  _createClassName() {
    let iconType = this.icon || this.type;
    // todo: 暂时还没有loading的图标, 有了这个逻辑就可以干掉了
    iconType = iconType === 'loading' ? 'repeat' : iconType;

    this.className = classNames({
      'bp-icon': true,
      'glyphicon': true,
      [`glyphicon-${iconType}`]: !!iconType
    });
  }
  /**
   * @override
   * @protected
   */
  _launch() {}
  /**
   * 主要是因为type变了之后要重新生成class
   *
   * @param {Object} changeObj bindings object
   */
  $onChanges(changeObj) {
    if (changeObj.hasOwnProperty('type')) {
      this._createClassName();
    }
  }
}
