import Prism from 'prismjs';


export default class RangepickerController {
  constructor($sce) {
    'ngInject'
    //this.startTime = ;
    //this.endTime = ;
    this.datepickerOption = {
      //minDate: new Date(),
      viewFormat: 'YYYY-MM-DD HH:mm:ss',
      modelFormat: 'x'
    };
    this.datepickerOptionSame = {
      viewFormat: 'YYYY-MM-DD HH:mm:ss',
      modelFormat: 'YYYY-MM-DD HH:mm:ss'
    };
    const codeConfig = `
    {
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
      <bp-rangepicker ng-start-model="vm.startTime"
                    ng-end-model="vm.endTime"
                    rangepicker-options="vm.datepickerOption"></bp-rangepicker>
    `;
    this.part1Html = $sce.trustAsHtml(Prism.highlight(codePart1, Prism.languages.html));
    const codePart2 = `
      <bp-rangepicker ng-start-model="vm.startTime"
                    ng-end-model="vm.endTime"
                    disabled="true"
                    rangepicker-options="vm.datepickerOption"></bp-rangepicker>
    `;
    this.part2Html = $sce.trustAsHtml(Prism.highlight(codePart2, Prism.languages.html));
  }
}
