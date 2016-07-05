/**
 * RadioGroup
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
export default class RadioGroup extends Component {

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