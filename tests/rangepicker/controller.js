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
    const codePart1 = `
      <bp-rangepicker ng-start-model="vm.startTime"
                    ng-end-model="vm.endTime"
                    rangepicker-options="vm.datepickerOption"></bp-rangepicker>
    `;
    this.part1Html = $sce.trustAsHtml(Prism.highlight(codePart1, Prism.languages.html));
  }
}
