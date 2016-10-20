import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class ButtonShowController {
  constructor($timeout, $sce) {
    'ngInject'
    this.disabled = false;
    this.ooxx = false;
    this.$timeout = $timeout;
    this.tiggleDisabled = true;

    // this.$timeout(() => {
    //   this.tiggleDisabled = false;
    // }, 3000);

    const codePart1 = `
      <bp-button type="primary">primary</bp-button>
      <bp-button type="primary" icon="ok">OK</bp-button>
    `;
    this.part1Html = $sce.trustAsHtml(Prism.highlight(codePart1, Prism.languages.html));

    const codePart2 = `
      <bp-button type="primary" size="xs">size xs button</bp-button>
      <bp-button type="primary" size="sm">size sm button</bp-button>
      <bp-button type="primary">size default button</bp-button>
      <bp-button type="primary" size="lg">size lg button</bp-button>
    `;
    this.part2Html = $sce.trustAsHtml(Prism.highlight(codePart2, Prism.languages.html));

    const codePart3 = `
      <bp-button click="vm.sayHello(button)" type="primary" loading="true">loading</bp-button>
      <bp-button click="vm.sayHello(button)" type="primary" icon="ok" loading="true">loading</bp-button>
    `;
    this.part3Html = $sce.trustAsHtml(Prism.highlight(codePart3, Prism.languages.html));

  }
  sayHello(btn, o) {
    // console.log('sayHello', btn, o);
    btn.state = {loading: true};
    this.tiggleDisabled = false;
    this.$timeout(() => {
      btn.state = {disabled: false, loading: false};
    }, 3000);
  }
}