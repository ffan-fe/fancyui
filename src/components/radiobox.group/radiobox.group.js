/**
 * @ngdoc directive
 * @name radiobox.directive:bpRadioboxGroup
 * @author chuxin
 * @restrict E
 * @description
 * 对radiobox的二次包装 提供`list`指令
 * 包含的状态有
 * - enable
 * - disabled
 * - checked
 *
 * @param {Boolean}         disabled        - binding symbol is `<`, 禁用状态,默认 `false`
 * @param {Boolean}         inline          - binding symbol is `<`, 是否横向展示,默认 `false`
 * @param {String}          model           - binding symbol is `=?model`, 绑定在`radioBoxGroup上`的`model`
 * @param {Array.<Object>}  list            - binding symbol is `=?list`, 数据源, `controller`提供的数组用于遍历展示`radio`
 * @example
 <pre>
 <bp-radio-group list="vm.groupDataList" model="vm.model"></bp-radio-group>
 </pre>
 <pre>
 this.model = "这个杀手不太冷";
 this.groupDataList = [
 {label: '沉默的羔羊', value: '沉默的羔羊'},
 {label: '这个杀手不太冷',value:'这个杀手不太冷'},
 {label: '指环王',value:'指环王',complex:{author:'xxx',age:45,sex:'不详'}},
 {label: '速度与激情',value:"速度与激情"},
 {label: '魔兽世界', value:"魔兽世界",disabled: true},
 {label: 'X战警',value:"X战警"}
 ];
 </pre>

 更多例子的[传送门](https://ffan-fe.github.io/Anaheim/#/radiobox)
 */

import Component from '../common/component';
import classNames from 'classnames';

'use strict';

/**
 * RadioGroup component
 *
 * @export
 * @class RadioGroup
 * @extends {Component}
 */
export default class RadioboxGroup extends Component {

  /**
   * @override
   */
  _initDefaultValue() {
    this.list = this.list && angular.isArray(this.list) ? this.list : [];
  }
  _createClassName() {
  }
  _launch() {
  }

}
