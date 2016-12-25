import dateModelFormat from './dateModelFormat.js'
import dateViewFormat from './dateViewFormat.js'
import BpFieldError from './bpFieldError.js'
import BpLargeThan from './bpLargeThan.js'

let bpDirectives = angular.module('bp.directives', [])
  .directive('dateModelFormat', ()=>dateModelFormat)
  .directive('dateViewFormat', ()=>dateViewFormat)
  .directive('bpFieldError', ($compile) => {
    'ngInject'
    return new BpFieldError($compile);
  })
  .directive('bpLargeThan', () => new BpLargeThan())
  .filter('error', function (Errors) {
    return function (name, customMessages) {
      if (customMessages) {
        customMessages = JSON.parse(customMessages);
      }

      let errors = angular.extend({}, Errors, customMessages);
      console.info('extended errors', errors);

      return errors[name] || name;
    };
  })
  .constant('Errors', {
    email: '不是有效格式的邮件地址',
    url: '不是有效格式的url',
    required: '此项不能为空',
    same: '此项必须与密码相同',
    max: '超过上限',
    min: '低于下限',
    number: '必须为数字',
    parse: '根据验证规则，已重置无效值'
  });

export default bpDirectives;
