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
      modelFormat: 'x'
    };
    const codePart1 = `
      <bp-datepicker ng-model="vm.time"
                     datepicker-options="vm.datepickerOption"></bp-datepicker>
    `;
    this.part1Html = $sce.trustAsHtml(Prism.highlight(codePart1, Prism.languages.html));

  }
}

export default Controller;
