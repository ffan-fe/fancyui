/**
 * Popconfirm
 */

import template from './template.html';
import './popconfirm.less';
'use strict';

/**
 * Popconfirm component
 *
 * @export
 * @class Popconfirm
 * @extends {Component}
 */
export default class Popconfirm {
  constructor($document, $compile) {
    'ngInject'
    // this.$scope = $scope;
    this.$compile = $compile;
    this.$document = $document;
  }

  /**
   * @override
   */
  _initDefaultValue() {}
  /**
   * @override
   */
  _createClassName() {}
  /**
   * @override
   */
  _launch() {}

  test(param) {
    // let data = Object.assign(this.$scope, param);
    let pop = this.$compile(template)(param);
    pop.css('display', 'block');
    
    this.$document.find('body').append(pop);
    console.log(param)
  }
}
