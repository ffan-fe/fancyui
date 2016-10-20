import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

export default class citySelectorController {
  constructor(citySelector, $sce) {
    'ngInject';
    this.citySelector = citySelector;
    //
    const codePart1 = `
      this.citySelector.open()
        .then(
          idList => {
            this.cityData1 = idList;
          }
        );
    `;
    this.part1Html = $sce.trustAsHtml(Prism.highlight(codePart1, Prism.languages.javascript));
    //
    const codePart2 = `this.citySelector.open({isReadOnly: true});`;
    this.part2Html = $sce.trustAsHtml(Prism.highlight(codePart2, Prism.languages.javascript));
    //
    const codePart3 = `
      this.citySelector.open({checkedList: [310100, 310200, ...]});

      this.citySelector.open({checkedList: [310100, 310200, ...], isReadOnly: true})
    `;
    this.part3Html = $sce.trustAsHtml(Prism.highlight(codePart3, Prism.languages.javascript));
    //
    const codePart4 = `
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
    `;
    this.part4Html = $sce.trustAsHtml(Prism.highlight(codePart4, Prism.languages.javascript));

  }
  showDefault() {
    this.citySelector.open()
      .then(
        idList => {
          this.cityData1 = idList;
        }
      );
  }
  showDisabled() {
    this.citySelector.open({isReadOnly: true});
  }
  showCheckedList(isReadOnly) {
    this.citySelector.open({checkedList: [310100, 310200, 320100, 320200, 320300, 320400, 320500, 320600, 320700, 320800, 320900, 321000, 321100, 321200, 321300, 330100, 330200, 330300, 330400, 330500, 330600, 330700, 330800, 330900, 331000, 331100, 340100, 340200, 340300, 340400, 340500, 340600, 340700, 340800, 341000, 350300, 350400, 350500, 350600, 350700, 350800, 350900, 360100, 360200, 360300, 360400, 360500, 360600, 360700, 360800, 360900, 361000, 361100, 370100, 370200, 370300, 370400, 370500, 370600, 370700, 370800, 370900, 371000, 371100, 371200, 371300, 371400, 371500, 371600, 371700], isReadOnly})
      .then(
        idList => {
          this.cityData2 = idList;
        }
      );
  }
  showCheckedListAndReadOnly() {
    this.showCheckedList(true);
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
        // console.log(list);
      });
  }
}