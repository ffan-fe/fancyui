/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date <%= dateTime %>
 * @example: http://www.fancyui.org/#/zh-cn/component/<%= name %>
 */

export default class <%= upCaseName %>Controller {
  constructor($state) {
    'ngInject'
    this.$state= $state;
    this.name = '<%= name %>';
  }
}