import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class DatetimepickerTestController {
  constructor($timeout, $sce, $scope) {
    'ngInject';
    /**
     * 
     */
    this.searchObj = {
      dateModel: "",
      startModel: "2016-10-11 14:29:39",
      endModel: null
    }
    this.type = "range";
    this.min = 1470240000000;
    // this.max = "today"
    this.max = "2016/10/23 14:29:39";
    this.placeholders = ['启动时间'];
    this.startView = "day";
    this.minView = "minute";
    // this.modelType = "YYYY-MM-DD";
    this.allDisabled = true;
    this.startDisabled = true;
    this.endDisabled = true;

    $scope.$watch(
      () => {
        return this.searchObj;
      },
      (newVal, oldVal) => {
        console.log("newVal ", newVal);
      }, true
    )
  }
}
