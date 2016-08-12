import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import data from './data'

export default class TransferTextController {
  constructor($sce) {
    this.dataSource = data['dataSource'];

    /**
     * 默认情况
     * @type {string}
     */
    const codePart1 = `
    <bp-transfer source-data="vm.dataSource"></bp-transfer> 
     `;
    this.part1Html = $sce.trustAsHtml(Prism.highlight(codePart1, Prism.languages.html));
    this.part2Html = $sce.trustAsHtml(Prism.highlight(data['dataSourceTmp'], Prism.languages.javascript));

    /**
     * 自定义穿梭框
     */

    this.titles = ['门店列表', '已选择门店'];
    this.placeholders = ['输入门店进行检索', '对已经出来的结果进行检索'];
    this.operations = ['增加', '增加全部', '删除', '全部删除'];
    this.showLeftSearch = true;
    this.showRightSearch = false;
    this.addBtn = true;
    this.addAllBtn = true;
    this.delBtn = true;
    this.delAllBtn = false;

    const codePart3 = `
    <bp-transfer 
    source-data="vm.dataSource"
    titles="vm.titles"
    placeholders="vm.placeholders"
    operations="vm.operations"
    showLeftSearch="vm.showLeftSearch"
    showRightSearch="vm.showRightSearch"
    addBtn="vm.addBtn"
    addAllBtn="vm.addAllBtn"
    delBtn="vm.delBtn"
    delAllBtn="vm.delAllBtn"
    ></bp-transfer> 
     `;
    this.part3Html = $sce.trustAsHtml(Prism.highlight(codePart3, Prism.languages.html));
    this.part4Html = $sce.trustAsHtml(Prism.highlight(data['dataSourceTmp1'], Prism.languages.javascript));


  }
}
