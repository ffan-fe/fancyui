/**
 * Created by fjywan on 17/3/9.
 */
export default {
  restrict: 'A',
  link: function (scope, element, attrs) {
    element.bind("keydown keypress", function (event) {
      if(event.which === 13) {
        scope.$apply(function (){
          scope.$eval(attrs.fEnter);
        });
        event.preventDefault();
      }
    });
  }
}
