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
    this.titles = angular.isArray(this.titles) ? this.titles:[];
    this.leftTitle = this.titles[0] ? this.titles[0] : '';
    this.rightTitle = this.titles[1] ? this.title[1] : '';
    this.titles = angular.isArray(this.titles) ? this.titles:[];
    this.placeholders = angular.isArray(this.placeholders) ? this.placeholders:[];
    this.operations = angular.isArray(this.operations) ? this.operations:[];
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