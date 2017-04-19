/**
 * Created by fjywan on 17/3/22.
 */
export default ($compile) => {
  return {
    restrict: 'E',
    transclude: false,
    scope: false,
    compile: function compile(tElement, tAttrs, transclude) {
      /*console.log('tElement', tElement);
       console.log('tAttrs.html', tAttrs.html);
       tElement.html(tAttrs.html);*/
      return {
        pre: function preLink(scope, iElement, iAttrs, controller) {
        },
        post: function postLink(scope, iElement, iAttrs, controller) {
          let tpl = iAttrs.html;
          console.log('tpl', tpl);
          console.log(scope.$parent);
          tpl = $compile(tpl)(scope.$parent);
          console.log('tpl', tpl);
          console.log('tpl[0].outerHTML', tpl[0].outerHTML);
          iElement.html(tpl[0].outerHTML);
        }
      }
    }
  }
}

