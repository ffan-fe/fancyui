/**
 * Created by fjywan on 16/6/12.
 */
import moment from 'moment';

let dateModelFormatDirective = {
  require: 'ngModel',
  restrict: 'A',
  link: function(scope, element, attrs, ngModelCtrl) {
    let format = scope.$eval(attrs.dateModelFormat);
    if(!format){
      return ;
    }
    ngModelCtrl.$parsers.push(function (value) {
      if (value) {
        /*console.log(format);
         console.log(value);
         console.log('$parsers 前', value);
         console.log('$parsers 后', moment(value).format(format));*/
        return moment(value).format(format);
      }
    });
  }
};

export default dateModelFormatDirective;
