import moment from 'moment';

let dateViewFormatDirective = {
  require: 'ngModel',
  restrict: 'A',
  link: function(scope, element, attrs, ngModelCtrl) {
    let format = scope.$eval(attrs.dateViewFormat);
    if(!format){
      return ;
    }
    let modelFormat = scope.$eval(attrs.dateModelFormat);
    ngModelCtrl.$formatters.push(function (value) {
      if (value) {
        /*console.log(format);
         console.log(value);
         console.log('format 前', value);
         console.log('format 后', moment(value).format(format));*/
        return modelFormat == 'X' || modelFormat == 'x' ? moment(parseInt(value)).format(format) : moment(value).format(format);
      }
    });
  }
};

export default dateViewFormatDirective;
