import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import data from './data'

export default class TransferTextController {
  constructor($sce) {
    'ngInject';
    this.dataSource = data['dataSource'];
    this.targetData = data['targetData'];
    this.titles = ['门店列表', '已选择门店'];
    this.placeholders = ['输入门店进行检索', '对已经出来的结果进行检索'];
    this.operations = ['增加', '增加全部', '删除', '全部删除'];
    this.showLeftSearch = true;
    this.showRightSearch = false;
    this.addBtn = true;
    this.addAllBtn = true;
    this.delBtn = true;
    this.delAllBtn = false;

    /**
     * 默认情况
     * @type {string}
     */
    this.part1Html = $sce.trustAsHtml(Prism.highlight(data['codePart1'], Prism.languages.html));
    this.part2Html = $sce.trustAsHtml(Prism.highlight(data['dataSourceTmp'], Prism.languages.javascript));

    /**
     * 自定义穿梭框
     */
    this.part3Html = $sce.trustAsHtml(Prism.highlight(data['codePart2'], Prism.languages.html));
    this.part4Html = $sce.trustAsHtml(Prism.highlight(data['dataSourceTmp1'], Prism.languages.javascript));

    /**
     * 服务端检索
     */
    this.part5Html = $sce.trustAsHtml(Prism.highlight(data['codePart3'], Prism.languages.html));
    this.part6Html = $sce.trustAsHtml(Prism.highlight(data['serverSearch'] + data['dataSourceTmp1'], Prism.languages.javascript));


  }

  serverSearch($value){

  }

}
