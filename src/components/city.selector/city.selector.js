/**
 * @ngdoc service
 * @name citySelector.service:citySelector
 * @author fengpeng
 * @description
 * 城市选择组件, 统一从接口[/Database/coupon_component/selectCity](/Database/coupon_component/selectCity)
 * 弹窗部分统一使用的是angular ui bootstrap 中的 uibModal
 * 
 * **Methods**
 * 
 * - `open(config)` - 此方法会以弹窗的形式打开城市选择的弹窗. 会返回`Promise`, 其中`resolve`表明用户点击了确认按钮, 这里会返回所有选择城市的id; `reject`表明用户点击了取消或关闭按钮
 * 
 *    参数`config`是可选的, 可用值是
 *      - isReadOnly:   Boolean   - 表示是否只读, 常见于详情页等场景
 *      - checkedList:  Array     - 表示回填字段, 里面包含是城市id
 *      - database:     Array     - 外部提供渲染UI的数据, 注意格式请保持一致, 格式请参照上述`Datebase`接口
 *
 * 
 * @example
 *  
 * <pre>
 * 
 *  constructor(citySelector) {
 *    'ngInject';
 *    this.citySelector = citySelector;
 *  }
 *  showCitySelector() {
      this.citySelector.open({checkedList: [310100, 310200, 371700]}).then(
        idList => {
          console.log('idList', idList);
        }
      );
    }
 * 
 * </pre>
 */

import template from './template.html';
import controller from './city.selector.controller';
import './city.selector.less';

'use strict';

export default class CitySelector {
  /**
   * Creates an instance of CitySelector.
   * 
   * @param {$uibModal} $uibModal 弹窗的实现依赖
   * @param {$q} $q promise
   */
  constructor($uibModal, $q) {
    'ngInject';
    this.$uibModal = $uibModal;
    this.$q = $q;
    this.modalInstance = null;
  }
  /**
   * 打开城市选择
   * 
   * @param {Object} [config={}] 
   * @returns {Promise} resolve为确定, reject为取消
   */
  open(config = {}) {
    const deferred = this.$q.defer();
    this.modalInstance = this.$uibModal.open({
      template,
      controller,
      controllerAs: 'vm',
      resolve: {
        // 是否只读, 这里支持的是详情页等情况
        isReadOnly: () => {
          return config.isReadOnly || false;
        },
        // 这是里填入一个值列表, 做数据回填展示用
        checkedList: () => {
          return config.checkedList || [];
        },
        // 直接给一个结果, 用这个结果来渲染UI, 所以保证格式必须是一样的
        database: () => {
          return config.database || null;
        }
      }
    });
    this.modalInstance.result.then(
      cityIDList => {
        deferred.resolve(cityIDList);
      },
      () => {
        deferred.reject();
      }
    );
    return deferred.promise;
  }
}