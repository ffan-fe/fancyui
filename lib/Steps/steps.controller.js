/**
 * (description)
 *
 * @author yourname
 */

export default class StepsController {
  constructor() {
    if (!this.stepsData || !Array.isArray(this.stepsData)) {
      throw new Error('StepsController: stepsData must be provided as an array');
    }

    this.current = Number(this.current);
    if (!this.current) {
      console.info('传入current参数不合法，将使用默认值：0');
      this.current = 0;
    }

    if (!this.onClick || typeof this.onClick != 'function') {
      this.onClick = () => {}
    }
  }
}
