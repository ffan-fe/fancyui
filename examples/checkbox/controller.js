import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class CheckboxShowController {
  constructor($timeout, $sce) {
    'ngInject';
    this.checked1 = false;
    this.checked2 = false;

    this.groupDataList = [
      {label: '邢老师不要脸', checked: true},
      {label: '老师不要脸'},
      {label: '师不要脸'},
      {label: '不要脸'},
      {label: '要脸', disabled: true},
      {label: '脸'}
    ];

    const codePart1 = `
      <bp-checkbox>暴风雪</bp-checkbox>
      <bp-checkbox checked="true">暴风雪</bp-checkbox>
      <bp-checkbox disabled="true">暴风雪</bp-checkbox>
      <bp-checkbox checked="true" disabled="true">暴风雪</bp-checkbox>
      <bp-checkbox half-checked="true">暴风雪</bp-checkbox>
      <bp-checkbox half-checked="true" disabled="true">暴风雪</bp-checkbox>
    `;
    this.part1Html = $sce.trustAsHtml(Prism.highlight(codePart1, Prism.languages.html));

    const codePart2 = `
      <bp-checkbox checked="vm.checked1">绑定到controller的</bp-checkbox>
      <p>binding to controller value: {{vm.checked1}}</p>
    `;
    this.part2Html = $sce.trustAsHtml(Prism.highlight(codePart2, Prism.languages.html));

    const codePart3 = `
      <bp-checkbox checked="vm.checked2" true-value="1" false-value="2">绑定到controller的</bp-checkbox>
      <p>true-value and false-value: {{vm.checked2}}</p>
    `;
    this.part3Html = $sce.trustAsHtml(Prism.highlight(codePart3, Prism.languages.html));

    const codePart4 = `
      <bp-checkbox-group model="vm.groupDataList"></bp-checkbox-group>
      <p>{{vm.groupDataList}}</p>
    `;
    this.part4Html = $sce.trustAsHtml(Prism.highlight(codePart4, Prism.languages.html));

    const codePart5 = `
      this.groupDataList = [
        {label: '邢老师不要脸', checked: true},
        {label: '老师不要脸'},
        {label: '师不要脸'},
        {label: '不要脸'},
        {label: '要脸', disabled: true},
        {label: '脸'}
      ];
    `;
    this.part5Html = $sce.trustAsHtml(Prism.highlight(codePart5, Prism.languages.javascript));

    const codePart6 = `
      <bp-checkbox-group model="vm.groupDataList" disabled="true"></bp-checkbox-group>
    `;
    this.part6Html = $sce.trustAsHtml(Prism.highlight(codePart6, Prism.languages.html));

    const codePart7 = `
      <bp-checkbox-group model="vm.groupDataList" inline="true"></bp-checkbox-group>
    `;
    this.part7Html = $sce.trustAsHtml(Prism.highlight(codePart7, Prism.languages.html));
  }
}