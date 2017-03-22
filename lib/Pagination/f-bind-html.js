/**
 * Created by fjywan on 17/3/22.
 */
export default {
  restrict: 'A',
  link: function (scope, element, attrs) {
    element.html(scope.$eval(attrs.fBindHtml));
  }
}

