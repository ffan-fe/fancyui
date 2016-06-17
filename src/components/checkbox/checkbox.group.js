/**
 * checkbox group component controller
 */

import angular from 'angular';
import classNames from 'classnames';
import Component from '../common/component';

'use strict';

export default class CheckboxGroupController extends Component {
  /**
   * @override 
   */
  _initDefaultValue() {
    this.model = this.model && angular.isArray(this.model) ? this.model : [];
  }
  _createClassName() {
    this.ulClassName = classNames({
      'list-inline': this.inline
    });
  }
  _launch() {
  }
}