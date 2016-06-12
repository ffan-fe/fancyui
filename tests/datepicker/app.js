import 'angular-ui-bootstrap';
import  bpDatepicker from '../../src/components/datepicker/index.js';
import appComponent from './app.component.js';
import './angular-locale_zh-cn.js';
import moment from 'moment';

console.log(bpDatepicker);
export default angular.module('datepickertest', [
  bpDatepicker.name,
  'ui.bootstrap'
])
  .config($stateProvider => {
    'ngInject';
    $stateProvider.state('datepicker', {
      url: '/datepicker',
      template: '<bp-datepicker-test></bp-datepicker-test>'
    });
  })

  .directive('dateViewFormat', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, element, attrs, ngModelCtrl) {
        let format = scope.$eval(attrs.dateViewFormat);
        if (!format) {
          return;
        }
        let modelFormat = scope.$eval(attrs.dateModelFormat);
        ngModelCtrl.$formatters.push(function (value) {
          if (value) {
            console.log(format);
             console.log(value);
             console.log('format 前', value);
             console.log('format 后', moment(parseInt(value)).format(format));
            return modelFormat == 'X' || modelFormat == 'x' ? moment(parseInt(value)).format(format) : moment(value).format(format);
          }
        });
      }
    };
  })
  .directive('dateModelFormat', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, element, attrs, ngModelCtrl) {
        let format = scope.$eval(attrs.dateModelFormat);
        if (!format) {
          return;
        }
        ngModelCtrl.$parsers.push(function (value) {
          if (value) {
            console.log(format);
             console.log(value);
             console.log('$parsers 前', value);
             console.log('$parsers 后', moment(value).format(format));
            return moment(value).format(format);
          }
        });
      }
    };
  })
  .component('bpDatepickerTest', appComponent);
