/**
 * abstract component
 */

'use strict';


/**
 * (description)
 * 
 * @export
 * @abstract 
 * @class Component
 */
export default class Component {
  constructor() {
    /**
     * 状态, 每个组件都会拥有一个状态, 用这个标识来确定UI的形态
     * 
     * @protected 
     */
    this._state = '';
  }
  
  getState() {}
  setState(state) {}
}