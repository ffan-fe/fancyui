/**
 * Created by fjywan on 16/6/7.
 */
import Prism from 'prismjs';

class Controller {
  constructor($scope, $sce) {
    'ngInject'
    this.input = 1;
    this.time = 2;
    this.datepickerOption = {
      minDate: new Date(),
      viewFormat: 'YYYY-MM-DD HH:mm:ss',
      modelFormat: 'x',
      placeholder: '测试'
    };
    this.rangepickerOption = {
      //minDate: new Date(),
      viewFormat: 'YYYY-MM-DD HH:mm:ss',
      modelFormat: 'x',
      placeholder: ['测试1', '测试2']
    };

    const exampleCode = `
      <bp-datepicker model="vm.time" datepicker-options="vm.datepickerOption"></bp-datepicker>

      this.datepickerOption = {
            minDate: new Date(),
            viewFormat: 'YYYY-MM-DD HH:mm:ss',
            modelFormat: 'x',
            placeholder: '测试'
          };
      <bp-rangepicker ng-start-model="vm.startTime"
                ng-end-model="vm.endTime"
                rangepicker-options="vm.rangepickerOption">
      </bp-rangepicker>

      this.rangepickerOption = {
            viewFormat: 'YYYY-MM-DD HH:mm:ss',
            modelFormat: 'x',
            placeholder: ['测试1', '测试2']
          };
    `;
    this.exampleHtml = $sce.trustAsHtml(Prism.highlight(exampleCode, Prism.languages.html));
  }
}

export default Controller;
