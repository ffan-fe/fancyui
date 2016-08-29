/**
 * @type {Object}
 * @property {Array}      sourceData       - binding symbol is =?, 数据源
 * @property {Array}      targetData       - binding symbol is =?, 右侧选中目标值
 * @property {Array}      titles           - binding symbol is <, 左右侧标题
 * @property {Array}      placeholders     - binding symbol is <, 左右placeholders值
 * @property {Array}      operations       - binding symbol is <, 操作按钮的文案
 * @property {Boolean}    showLeftSearch   - binding symbol is <, 是否启用左侧检索框
 * @property {Boolean}    showRightSearch  - binding symbol is <, 是否启用右侧检索框
 * @property {Boolean}    addBtn           - binding symbol is <, 是否展示增加按钮
 * @property {Boolean}    addAllBtn        - binding symbol is <, 是否展示全部增加按钮
 * @property {Boolean}    delBtn           - binding symbol is <, 是否展示删除按钮
 * @property {Boolean}    delAllBtn        - binding symbol is <, 是否展示全部删除按钮
 * @property {Function}   serverSearch     - binding symbol is &?, 是否启用服务端检索
 *
 */

import controller from './transfer';
import template from './template.html';
import './transfer.less';

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  bindings: {

    /**
     *数据源
     */
    sourceData: "=?sourceData",

    /**
     * 目标数据集合
     */
    targetData: '=?targetData',

    /**
     * 标题 从左至右
     * @type {array}
     */
    titles: '<',

    /**
     * 从左至右 placeholder
     * @type placeholder
     */
    placeholders: '<',

    /**
     * 操作文案 从上至下
     * @type {array}
     */
    operations: '<',

    /**
     * 是否展示左边检索框
     * @type {Boolean}
     */
    showLeftSearch: '<',

    /**
     * 是否展示右边搜索框
     * @type {Boolean}
     */
    showRightSearch: '<',

    /**
     *是否需要单个增加按钮
     * @type {Boolean}
     */
    addBtn: '<',

    /**
     * 是否需要增加全部按钮
     * @type {Boolean}
     */
    addAllBtn: '<',

    /**
     * 删除某个元素
     * @type {Boolean}
     */
    delBtn: '<',

    /**
     * 删除所有的按钮
     * @type {Boolean}
     */
    delAllBtn: '<',

    /**
     *服务端检索
     */
    serverSearch: '&?'  //加上问号 如果调用方不传此指令会有 undefined

  }
};

export default componentDefine;
