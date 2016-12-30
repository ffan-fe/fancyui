/**
 * Checkbox states enumeration
 */

import CommonState from './common.state';

'use strict';

export default angular.extend({
  /**
   * 选中
   * 
   * @type {String}
   */
  CHECKED: 'checked',
  /**
   * 半选状态, 这个集中在做列表全选的时候会出现
   * 表现是, 选择了但又没有全选这个尴尬的状态
   * 
   * @type {String}
   */
  HALF_CHECKED: 'halfChecked'
  
}, CommonState);