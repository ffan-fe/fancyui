
export default class ButtonTestController {
  constructor() {
    this.disabled = false;
    this.ooxx = false;
  }
  sayHello() {
    console.log('sayHello');
    this.disabled = true;
  }
}