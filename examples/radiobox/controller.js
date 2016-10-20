import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class RadioTextController {
  constructor($sce) {
    'ngInject';
    this.player = "仙道";
    this.specialInfo = {name:"宫城良田",age:"22",sex:"男"};

    this.model = "这个杀手不太冷";
    this.groupDataList = [
      {label: '沉默的羔羊', value: '沉默的羔羊'},
      {label: '这个杀手不太冷',value:'这个杀手不太冷'},
      {label: '指环王',value:'指环王',complex:{author:'xxx',age:45,sex:'不详'}},
      {label: '速度与激情',value:"速度与激情"},
      {label: '魔兽世界', value:"魔兽世界",disabled: true},
      {label: 'X战警',value:"X战警"}
    ];

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

    const codePart3 = `
      <bp-radio-group list="vm.groupDataList" model="vm.model" inline="true"></bp-radio-group>
      <p>{{vm.groupDataList}}</p>
    `;

    const codePart5 = `
      <bp-radio-group list="vm.groupDataList" model="vm.model"></bp-radio-group>
      <p>{{vm.groupDataList}}</p>
    `;
    this.part3Html = $sce.trustAsHtml(Prism.highlight(codePart3, Prism.languages.html));

    const codePart4 = ` 
      this.model = "这个杀手不太冷";
      this.groupDataList = [
        {label: '沉默的羔羊', value: '沉默的羔羊'},
        {label: '这个杀手不太冷',value:'这个杀手不太冷'},
        {label: '指环王',value:'指环王',complex:{author:'xxx',age:45,sex:'不详'}},
        {label: '速度与激情',value:"速度与激情"},
        {label: '魔兽世界', value:"魔兽世界",disabled: true},
        {label: 'X战警',value:"X战警"}
      ];
    `;
    this.part4Html = $sce.trustAsHtml(Prism.highlight(codePart4, Prism.languages.javascript));
    this.part5Html = $sce.trustAsHtml(Prism.highlight(codePart5, Prism.languages.html));

  }
  
}