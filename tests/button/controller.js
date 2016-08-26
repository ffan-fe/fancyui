import ButtonState from '../../src/stateenum/button.state';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class ButtonTestController {
  constructor($timeout, $sce, citySelector) {
    'ngInject';
    this.disabled = false;
    this.ooxx = false;
    this.$timeout = $timeout;
    this.tiggleDisabled = true;
    this.citySelector = citySelector;

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
    console.log('sayHello', btn, o);
    btn.state = {loading: true};
    this.tiggleDisabled = false;
    this.$timeout(() => {
      btn.state = {disabled: false, loading: false};
    }, 3000);
  }
  showCitySelector() {
    this.citySelector.open({checkedList: [310100, 310200, 320100, 320200, 320300, 320400, 320500, 320600, 320700, 320800, 320900, 321000, 321100, 321200, 321300, 330100, 330200, 330300, 330400, 330500, 330600, 330700, 330800, 330900, 331000, 331100, 340100, 340200, 340300, 340400, 340500, 340600, 340700, 340800, 341000, 341100, 341200, 341300, 341500, 341600, 341700, 341800, 350100, 350200, 350300, 350400, 350500, 350600, 350700, 350800, 350900, 360100, 360200, 360300, 360400, 360500, 360600, 360700, 360800, 360900, 361000, 361100, 370100, 370200, 370300, 370400, 370500, 370600, 370700, 370800, 370900, 371000, 371100, 371200, 371300, 371400, 371500, 371600, 371700]}).then(
      idList => {
        console.log('idList', idList);
      }
    );
  }
  showCustomDataCitySelector() {
    const database = [
      {
        "regionId": 3,
        "regionName": "华东区",
        "child": [
          {
          "provinceId": 310000,
          "provinceName": "上海市",
          "child": [
            {
            "cityId": 310100,
            "cityName": "上海市"
            },
            {
            "cityId": 310200,
            "cityName": "上海县"
            }
          ]
        }]
      },
      {
        "regionId": 1,
        "regionName": "华北区",
        "child": [
          {
          "provinceId": 110000,
          "provinceName": "北京市",
          "child": [
          {
          "cityId": 110100,
          "cityName": "北京市"
          },
          {
          "cityId": 110200,
          "cityName": "北京县"
          },
          {
          "cityId": 110800,
          "cityName": "测试城市"
          }
          ]
          },
          {
            "provinceId": 120000,
            "provinceName": "天津市",
            "child": [
            {
            "cityId": 120100,
            "cityName": "天津市"
            }
            ]
            }
        ]
      }
    ];
    this.citySelector.open({database})
      .then(list => {
        console.log(list);
      });
  }
}
