/**
 * 各个组件都会存在的状态
 */

'use strict';

export default {
  /**
   * 可用
   * @type {symbol}
   */
  ENABLE: Symbol('enableState'),
  /**
   * 禁用
   * @type {symbol}
   */
  DISABLE: Symbol('disableState')
};