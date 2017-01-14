/**
 * @description select component
 *
 * @author guanbingchang 148135244@qq.com
 * @date Tue Jan 03 2017 13:28:41 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/select
 */

export default class SelectController {
  constructor($state, $q) {
    'ngInject'
    this.$state = $state;
    this.$q = $q;

    this.cityGroup = {};

    this.dataGroup = [
      {
        title: '热门广场',
        options: [
          { id: '1001', label: 'bjtz', name: '北京通州万达广场' },
          { id: '1002', label: 'shjq', name: '上海江桥万达广场' },
          { id: '1003', label: 'shzp', name: '上海周浦万达广场' }
        ]
      },
      {
        title: '其他广场',
        options: [
          { id: '1004', label: 'hf', name: '合肥万达广场' },
          { id: '1005', label: 'hf', name: '武汉万达广场' }
        ]
      }
    ]

    this.city = {};
    this.data = [
      { id: '1001', name: '上海' },
      { id: '1002', name: '北京' },
      { id: '1003', name: '广州' },
      { id: '1004', name: '杭州' },
      { id: '1005', name: '深圳' }
    ]


    this.city1 = {};
    this.data1 = [
      { id: '1001', name: '上海' },
      { id: '1002', name: '北京' },
      { id: '1003', name: '广州' },
      { id: '1004', name: '杭州' },
      { id: '1005', name: '深圳', disabled: true }
    ]

  }

  onSelect($item) {
    console.log($item)
  }

  mockData($value) {
    let deferred = this.$q.defer();

    let returnData = this.data.filter((d) => {
      return d.name.indexOf($value) > -1;
    })
    deferred.resolve(returnData);
    return deferred.promise;
  }

}