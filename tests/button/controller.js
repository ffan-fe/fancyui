
export default class ButtonTestController {
  constructor() {
    this.disabled = false;
    this.ooxx = false;
  }
  sayHello(btn, o) {
    console.log('sayHello', btn, o);
    this.disabled = true;
    btn.state = 'loading';
  }
}