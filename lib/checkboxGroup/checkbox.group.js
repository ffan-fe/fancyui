/**
 * @ngdoc directive
 * @name checkbox.directive:bpCheckboxGroup
 * @author fengpeng
 * @restrict E
 * @description
 * 顾名思义, 这是对bpCheckbox组件的二次包装, 通过`model`传进来一个对象数组, 来批量渲染bpCheckbox
 * 
 * @param {Boolean}          disabled        - binding symbol is `<`, 禁用状态, 在组上禁用则全部禁用, 实际上是对ng-disabled的包装
 * @param {Array.<Object>}   model           - binding symbol is `=?`, 数据源, 由于是双向绑定的逻辑会去修改数据源上的checked属性
 * @param {Boolean}          inline          - binding symbol is `@`, 是否横着排
 * 
 * @example 
    ```html
      <bp-checkbox-group model="vm.groupDataList"></bp-checkbox-group>
    ```
    在实际的controller或任何数据源里面有这样一个对象数组
    <pre>
      groupDataList = [
        {label: '邢老师不要脸', checked: true},
        {label: '老师不要脸'},
        {label: '师不要脸'},
        {label: '不要脸'},
        {label: '要脸', disabled: true},
        {label: '脸'}
      ];
    </pre>
    更多例子的[传送门](https://ffan-fe.github.io/Anaheim/#/checkbox)
 */

import angular from 'angular';
import classNames from 'classnames';
import Component from '../common/component';

'use strict';

/**
 * checkbox group
 * 
 * @export
 * @class CheckboxGroup
 * @extends {Component}
 */
export default class CheckboxGroup extends Component {
  /**
   * @override 
   * @protected 
   */
  _initDefaultValue() {
    this.model = this.model && angular.isArray(this.model) ? this.model : [];
  }
  /**
   * @override 
   * @protected 
   */
  _createClassName() {
    this.ulClassName = classNames({
      'list-inline': this.inline
    });
  }
  /**
   * @override 
   * @protected 
   */
  _launch() {
  }
}