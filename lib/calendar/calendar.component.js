import template from './calendar.html';
import controller from './calendar.controller';
import './calendar.less';

let calendarComponent = {
  restrict: 'E',
  bindings: {
    onTimeSet:'&',
    ngModel:'=',
    config:'<',
    beforeRender:'&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default calendarComponent;
