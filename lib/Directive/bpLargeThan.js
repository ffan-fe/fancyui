/**
 * Created by fjywan on 16/8/11.
 */

export default class BpLargeThan {
  constructor() {
    this.restrict = "A";
    this.require = 'ngModel';

    this.link = (scope, element, attrs, ngModel) => {
      let theOther = scope.$eval(attrs.bpLargeThan);
      let theForm = scope.$eval(attrs.bpLargeThanForm);
      console.warn('theOther!!!!!!', theForm);

      if (!theOther || !theForm) {
        return;
      }

      const isLargeThan = (value) => {
        switch (theOther.type) {
          case 'date':
            return theForm[theOther.which] ? moment(theForm[theOther.which]).format('X') < moment(value).format('X') : true;
            break;
          default:
            return theForm[theOther.which] < value;
        }
      };

      ngModel.$parsers.push(function (value) {
        ngModel.$setValidity('large', isLargeThan(value));
        return isLargeThan(value) ? value : undefined;
      });

      scope.$watch(
        function () {
          return theForm[theOther.which];
        },
        function () {
          ngModel.$setValidity('large', isLargeThan(ngModel.$modelValue));
        }
      );
    }
  }
}
