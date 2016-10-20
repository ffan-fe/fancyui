import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import data from './data';

export default class DatetimepickerTestController {
  constructor($timeout, $sce, $scope) {
    'ngInject';
    /**
     * 默认情况
     * @type {string}
     */
    this.model = '2015-02-03 12:02:00';
    this.html1 = $sce.trustAsHtml(Prism.highlight(data['html1'], Prism.languages.html));
    this.js1 = $sce.trustAsHtml(Prism.highlight(data['js1'], Prism.languages.javascript));

    /**
     *范围组件
     */
    this.html2 = $sce.trustAsHtml(Prism.highlight(data['html2'], Prism.languages.html));
    this.js2 = $sce.trustAsHtml(Prism.highlight(data['js2'], Prism.languages.javascript));

    /**
     * 只能选月
     */
    this.html3 = $sce.trustAsHtml(Prism.highlight(data['html3'], Prism.languages.html));
    this.js3 = $sce.trustAsHtml(Prism.highlight(data['js3'], Prism.languages.javascript));

    /**
     * 最大值 最小值
     */
    this.html4 = $sce.trustAsHtml(Prism.highlight(data['html4'], Prism.languages.html));
    this.js4 = $sce.trustAsHtml(Prism.highlight(data['js4'], Prism.languages.javascript));

    /**
     * 自定义
     */
    this.startModel = '2016-08-08 12:20:00';
    this.html5 = $sce.trustAsHtml(Prism.highlight(data['html5'], Prism.languages.html));
    this.js5 = $sce.trustAsHtml(Prism.highlight(data['js5'], Prism.languages.javascript));

  }

}
