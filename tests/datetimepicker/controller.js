import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import data from './data';
import moment from 'moment';

export default class DatetimepickerTestController {
  constructor($timeout, $sce, $scope) {
    'ngInject';
    /**
     * 配置参数
     */
    this.config = {
      type: "range",
      model: "",
      startModel: "",
      endModel: "",
      min: "2016-7-23 14:29:39", // Date()、时间戳、moment()、"today"
      max: "today",              // Date()、时间戳、moment()、"today"
      placeholders: ['启动时间', '结束时间']
    };
    this.newConfig = {
      type: "range",
      model: "",
      startModel: moment().format('YYYY-MM-DD HH:mm:ss'),
      endModel: "",
      max: moment('2016-11-12 03:04:05').valueOf(),
      placeholders: ['单个时间框'],
      minuteStep: 5,
      allDisabled: true
    };
    this.startDisabledConfig = {
      type: "range",
      startModel: moment().format('YYYY-MM-DD'),
      endModel: "",
      placeholders: ['', '禁用开始时间框'],
      startDisabled: true,
      startView: "month",
      minView: "day",
      modelType: "YYYY-MM-DD"
    };
    this.endDisabledConfig = {
      type: "range",
      startModel: "",
      endModel: moment().format('YYYY-MM-DD HH:mm:ss'),
      placeholders: ['禁用结束时间框'],
      endDisabled: true,
      startView: "month",
      minView: "hour",
    };

    this.part1Html = $sce.trustAsHtml(Prism.highlight(data['codeHtmlPart1'], Prism.languages.html));
    this.part1JS = $sce.trustAsHtml(Prism.highlight(data['codeJSPart1'], Prism.languages.javascript));

    this.part2Html = $sce.trustAsHtml(Prism.highlight(data['codeHtmlPart2'], Prism.languages.html));
    this.part2JS = $sce.trustAsHtml(Prism.highlight(data['codeJSPart2'], Prism.languages.javascript));

    this.part3Html = $sce.trustAsHtml(Prism.highlight(data['codeHtmlPart3'], Prism.languages.html));
    this.part3JS = $sce.trustAsHtml(Prism.highlight(data['codeJSPart3'], Prism.languages.javascript));

    this.part4Html = $sce.trustAsHtml(Prism.highlight(data['codeHtmlPart4'], Prism.languages.html));
    this.part4JS = $sce.trustAsHtml(Prism.highlight(data['codeJSPart4'], Prism.languages.javascript));

    this.part5Html = $sce.trustAsHtml(Prism.highlight(data['codeHtmlPart5'], Prism.languages.html));
    this.part5JS = $sce.trustAsHtml(Prism.highlight(data['codeJSPart5'], Prism.languages.javascript));

    this.part6Html = $sce.trustAsHtml(Prism.highlight(data['codeHtmlPart6'], Prism.languages.html));
    this.part6JS = $sce.trustAsHtml(Prism.highlight(data['codeJSPart6'], Prism.languages.javascript));

    this.part7Html = $sce.trustAsHtml(Prism.highlight(data['codeHtmlPart7'], Prism.languages.html));
    this.part7JS = $sce.trustAsHtml(Prism.highlight(data['codeJSPart7'], Prism.languages.javascript));

    this.part8Html = $sce.trustAsHtml(Prism.highlight(data['codeHtmlPart8'], Prism.languages.html));
    this.part8JS = $sce.trustAsHtml(Prism.highlight(data['codeJSPart8'], Prism.languages.javascript));
  }
}
