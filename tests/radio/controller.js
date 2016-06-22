import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class RadioTextController {
  constructor($sce) {
    'ngInject';
    this.player = "仙道";
    this.specialInfo = {name:"宫城良田",age:"22",sex:"男"}
    const codePart1 = `
     <bp-radio model="vm.player" value="樱木花道">樱木花道</bp-radio>
     <bp-radio model="vm.player" value="流川枫">流川枫</bp-radio>
     <bp-radio model="vm.player" value="仙道" disabled="true">仙道</bp-radio>
     <bp-radio model="vm.player" value="宫城良田" >宫城良田</bp-radio>   
    `;
    this.part1Html = $sce.trustAsHtml(Prism.highlight(codePart1, Prism.languages.html));

    const codePart2 = `
    <bp-radio model="vm.player" value="樱木花道">樱木花道</bp-radio>
    <bp-radio model="vm.player" value="流川枫">流川枫</bp-radio>
    <bp-radio model="vm.player" value="仙道">仙道</bp-radio>
    <bp-radio model="vm.player" complex="vm.specialInfo" value="宫城良田">宫城良田</bp-radio>
    `;
    this.part2Html = $sce.trustAsHtml(Prism.highlight(codePart2, Prism.languages.html));

  }


}