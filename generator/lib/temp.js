/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date <%= dateTime %>
 * @example: http://www.fancyui.org/#/zh-cn/component/<%= name %>
 */

import <%= name %>Component from './<%= name %>.component';

let <%= name %>Module = angular.module('<%= name %>', [
])

.component('<%= name %>', <%= name %>Component);

export default <%= name %>Module;
