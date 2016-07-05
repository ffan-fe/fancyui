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
    this.datepickerOptionSame = {
      viewFormat: 'YYYY-MM-DD HH:mm:ss',
      modelFormat: 'YYYY-MM-DD HH:mm:ss'
    };
    const codeConfig = `
    {
      minDate: new Date(),
      viewFormat: 'YYYY-MM-DD HH:mm:ss',
      modelFormat: 'x'
    }
    `;
    this.codeConfigHtml = $sce.trustAsHtml(Prism.highlight(codeConfig, Prism.languages.javascript));
    const codeConfigSame = `
    {
      viewFormat: 'YYYY-MM-DD HH:mm:ss',
      modelFormat: 'YYYY-MM-DD HH:mm:ss'
    }
    `;
    this.codeConfigHtmlSame = $sce.trustAsHtml(Prism.highlight(codeConfigSame, Prism.languages.javascript));
    const codePart1 = `
      <bp-datepicker model="vm.time"
                     datepicker-options="vm.datepickerOption"></bp-datepicker>
    `;
    this.part1Html = $sce.trustAsHtml(Prism.highlight(codePart1, Prism.languages.html));

    const codePart2 = `
      <bp-datepicker model="vm.time"
                     disabled="true"
                     datepicker-options="vm.datepickerOption"></bp-datepicker>
    `;
    this.part2Html = $sce.trustAsHtml(Prism.highlight(codePart2, Prism.languages.html));


  }
}

export default Controller;
