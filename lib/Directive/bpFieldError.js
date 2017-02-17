/**
 * Created by fjywan on 16/8/11.
 */
import $ from 'jquery'

export default class BpFieldError {
  constructor($compile) {
    this.restrict = "A";
    this.require = 'ngModel';

    this.link = (scope, element, attrs, ngModel) => {
      let subScope = scope.$new(true);

      subScope.hasError = function () {
        return ngModel.$invalid && ngModel.$dirty;
      };
      subScope.errors = function () {
        return ngModel.$error;
      };
      subScope.customMessages = attrs.bpFieldError;

      let customSelector = attrs.bpFieldErrorSelector;

      let hint = $compile('<ul class="bp-field-error" ng-if="hasError()"><li ng-repeat="(name, wrong) in errors()" ng-if="wrong">{{name|error:customMessages}}</li></ul>')(subScope);

      if (customSelector) {
        console.warn(customSelector);
        console.warn($(customSelector));
        $(customSelector).html(hint);
      } else {
        element.after(hint);
      }
    }
  }
}
