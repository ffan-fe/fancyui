import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class CheckboxTextController {
  constructor($timeout, $sce) {
    'ngInject';
    this.checked1 = false;
    console.log('bindgs');

    const codePart1 = `
      <bp-checkbox>暴风雪</bp-checkbox>
      <bp-checkbox checked="true">暴风雪</bp-checkbox>
      <bp-checkbox disabled="true">暴风雪</bp-checkbox>
      <bp-checkbox checked="true" disabled="true">暴风雪</bp-checkbox>
    `;
    this.part1Html = $sce.trustAsHtml(Prism.highlight(codePart1, Prism.languages.html));

    const codePart2 = `
      <bp-checkbox checked="vm.checked1">绑定到controller的</bp-checkbox>
      <p>binding to controller value: {{vm.checked1}}</p>
    `;
    this.part2Html = $sce.trustAsHtml(Prism.highlight(codePart2, Prism.languages.html));

  }
}