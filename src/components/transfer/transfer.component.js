/**
 * Transfer component define
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
    targetData: "=?targetData",

    /**
     * 标题 从左至右
     * @type {array}
     */
    titles: "<",

    /**
     * 从左至右 placeholder
     * @type placeholder
     */
    placeholders: "<",

    /**
     * 操作文案 从上至下
     * @type {array}
     */
    operations: "<",

    /**
     * 是否展示左边检索框
     * @type {Boolean}
     */
    showLeftSearch: "<",

    /**
     * 是否展示右边搜索框
     * @type {Boolean}
     */
    showRightSearch: "<",

    /**
     * 从服务端检索
     * @type {function}
     */
    change: "&?",

    /**
     *是否需要单个增加按钮
     * @type {Boolean}
     */
    addBtn: "<",

    /**
     * 是否需要增加全部按钮
     * @type {Boolean}
     */
    addAllBtn: "<",

    /**
     * 删除某个元素
     * @type {Boolean}
     */
    delBtn: "<",

    /**
     * 删除所有的按钮
     * @type {Boolean}
     */
    delAllBtn: "<"

  }
};

export default componentDefine;
