/**
 * @ngdoc service
 * @name HintService
 * @description
 * 消息通知类的alert可以用这个
 *
 * **Methods**
 *
 * - `hint(config)` - 此方法会在右上角浮出一个弹窗.
 *
 *    参数`config`是可选的, 可用值是
 *      - title:   String   - 弹窗的标题
 *      - content:  String     - 弹窗的内容
 *
 *
 * @example
 *
 * <pre>
 *
 *   HintService.hint({title: "我操作成功了", content: "结果是：" + $scope.hintContent})
 *
 * </pre>
 */


import tpl from './hint.html'

import './hint.css'

export default class HintService {
  constructor($document, $q, $rootScope, $compile) {
    'ngInject'
    this.$document = $document;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$compile = $compile;

    this.container = angular.element("<div class='bp-hint-container'>");
    this.$document.find("body").append(this.container);
  }

  hint(param) {
    let data = Object.assign(this.$rootScope.$new(), param);

    let hint = this.$compile(tpl)(data);

    hint.css('display', 'block');

    this.container.prepend(hint);

    setTimeout(() => hint.addClass('in'), 10);

    setTimeout(() => {
      hint.removeClass('in');

      setTimeout(() => hint.remove(), 500);
    }, 5000);
  }
}
