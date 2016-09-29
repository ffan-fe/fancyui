/**
 * @ngdoc service
 * @name AlertService
 * @description
 * alert, confirm的替代
 *
 * **Methods**
 *
 * - `alert(config)` - 此方法会弹出一个alert弹窗. 会返回`Promise`, 其中`resolve`表明用户点击了确认按钮
 *
 *    参数`config`是可选的, 可用值是
 *      - title:   String   - 弹窗的标题
 *      - content:  String     - 弹窗的内容
 *      - hint: Array    -更多的内容，以列表的形式展示
 *
 * - `confirm(config)` - 此方法会弹出一个alert弹窗. 会返回`Promise`, 其中`resolve`表明用户点击了确认按钮, `reject`表示用户点击了取消按钮
 *
 *    参数`config`是可选的, 可用值是
 *      - title:   String   - 弹窗的标题
 *      - contents:  Array     - 弹窗的内容,以列表的形式展示
 *
 *
 * @example
 *
 * <pre>
 *
 *   AlertService
 *.alert({
 *           title: "测试",
 *           content: "你好，我是警告"
 *         })
 *.then(function () {
 *           alert("你刚才点了确定");
 *         });
 *
 *AlertService
 *.alert({
 *          title: "测试",
 *          content: "你好，我是警告",
 *          hint: ["操作提示1", "如果想要在操作的时候给点提示，那就写在这里"]
 *        })
 *.then(function () {
 *          alert("你刚才点了确定");
 *        });
 *
 *AlertService
 *.confirm({
 *           title: "测试",
 *           contents: ["你好，确定要删除以下内容吗？", "aaa, bbb"]
 *         })
 *.then(function () {
 *           alert("你刚才点了确定");
 *         }, function () {
 *           alert("你刚才点了取消");
 *         });
 *
 * </pre>
 */


import template from './alert.html'

import ComponentZIndex from '../zindex.js'

let remove = (array, element) => {
  let index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
};

export default class AlertService {
  constructor($document, $q, $rootScope, $compile) {
    'ngInject'
    this.$document = $document;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$compile = $compile;

    this.dialogArr = [];

    this.dialogCounter = 0;
    this.zIndex = ComponentZIndex.Alert;

    this.mask = angular.element('<div class="modal-backdrop fade in"></div>');
    this.mask.css("z-index", this.zIndex);
  }

  alert(param) {
    let defer = this.$q.defer();

    let dialog;
    this.dialogCounter++;

    if(this.dialogCounter == 1){
      this.$document.find('body').append(this.mask);
    }

    let data = Object.assign(this.$rootScope.$new(), param);

    data.ok = () => {
      this.dismiss(dialog);
      defer.resolve('ok');
    };

    dialog = this.$compile(angular.element(template))(data);

    this.$document.find('body').append(dialog);
    dialog.css('display', 'block');
    dialog.css('z-index', this.zIndex + this.dialogCounter);

    this.dialogArr.push(dialog);

    return defer.promise;
  }

  confirm(param) {
    let defer = this.$q.defer();

    let dialog;
    this.dialogCounter++;

    if(this.dialogCounter == 1){
      this.$document.find('body').append(this.mask);
    }

    let data = Object.assign(this.$rootScope.$new(), param);

    data.ok = () => {
      this.dismiss(dialog);
      defer.resolve('ok');
    };

    data.cancel = () => {
      this.dismiss(dialog);
      defer.reject('cancel');
    };

    dialog = this.$compile(angular.element(template))(data);

    this.$document.find('body').append(dialog);
    dialog.css('display', 'block');
    dialog.css('z-index', this.zIndex + this.dialogCounter);

    this.dialogArr.push(dialog);

    return defer.promise;
  }

  dismiss(dialog) {
    this.dialogCounter--;
    dialog.remove();

    if (this.dialogCounter == 0) {
      this.mask.remove();
    }

    remove(this.dialogArr, dialog);
  }

  dismissAll() {
    while (this.dialogArr.length > 0) {
      this.dismiss(this.dialogArr[0])
    }
  }
}
