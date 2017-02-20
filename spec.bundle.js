import angular from 'angular';
import mocks from 'angular-mocks';

let context = require.context('./lib', true, /\.spec\.js/);

context.keys().filter(file=>{
  /**
   * 背景：将小写的目录统一改至大写，但是导致了单元测试覆盖率降低（因为小写的目录依然存在travis的linux服务器上，猜测应该是其他分支也一并拉取在服务器）
   * 临时解决方案：这些原先老的代码，hardcode 移除即可。不影响功能使用，也不会对后续维护新增工作量
   */

  return ['./badge/badge.spec.js',
          './button/button.spec.js',
          './calendar/calendar.spec.js',
          './inputnumber/inputnumber.spec.js',
          './menu/menu.spec.js',
          './progress/progress.spec.js',
          './rate/rate.spec.js',
          './select/select.spec.js',
          './service/loading/loading.spec.js',
          './service/message/message.spec.js',
          './steps/steps.spec.js',
          './switch/switch.spec.js',
          './tab/tab.spec.js',
          './upload/upload.spec.js'].indexOf(file)===-1;
}).forEach(context);



