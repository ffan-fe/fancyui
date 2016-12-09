'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

var _citySelector = require('./city.selector.controller');

var _citySelector2 = _interopRequireDefault(_citySelector);

require('./city.selector.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

'use strict';

var CitySelector = function () {
  /**
   * Creates an instance of CitySelector.
   * 
   * @param {$uibModal} $uibModal 弹窗的实现依赖
   * @param {$q} $q promise
   */
  function CitySelector($uibModal, $q) {
    'ngInject';

    _classCallCheck(this, CitySelector);

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


  _createClass(CitySelector, [{
    key: 'open',
    value: function open() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var deferred = this.$q.defer();
      this.modalInstance = this.$uibModal.open({
        template: _template2.default,
        controller: _citySelector2.default,
        controllerAs: 'vm',
        resolve: {
          // 是否只读, 这里支持的是详情页等情况
          isReadOnly: function isReadOnly() {
            return config.isReadOnly || false;
          },
          // 这是里填入一个值列表, 做数据回填展示用
          checkedList: function checkedList() {
            return config.checkedList || [];
          },
          // 直接给一个结果, 用这个结果来渲染UI, 所以保证格式必须是一样的
          database: function database() {
            return config.database || null;
          }
        }
      });
      this.modalInstance.result.then(function (cityIDList) {
        deferred.resolve(cityIDList);
      }, function () {
        deferred.reject();
      });
      return deferred.promise;
    }
  }]);

  return CitySelector;
}();

exports.default = CitySelector;