import ButtonState from '../../src/stateenum/button.state';

export default class ButtonTestController {
  constructor($timeout) {
    this.disabled = false;
    this.ooxx = false;
    this.$timeout = $timeout;
  }
  sayHello(btn, o) {
    // console.log('sayHello', btn, o);
    btn.state = 'loading';
    this.$timeout(() => {
      btn.state = 'enable';
    }, 3000);
  }
}