/**
 * @description calendar
 *
 * @author guanbingchang@wanda.cn
 * @date Tue Jan 17 2017 17:11:29 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/calendar
 */

class CalendarController {
  constructor($document, $element, $scope) {
    'ngInject'
    this.open = false;
    this.$document = $document;
    this.$element = $element;
    this.$scope = $scope;
    this.clickHandlers = [];
    this.$scope.$on('$destroy', () => {
      this.destory();
    })
  }

  onBeforeRender($view, $dates, $leftDate, $upDate, $rightDate) {
    this.beforeRender && this.beforeRender({
      '$view': $view,
      '$dates': $dates,
      '$leftDate': $leftDate,
      '$upDate': $upDate,
      '$rightDate': $rightDate
    });
  }

  reset() {
    this.open = false;
  }

  bindDocumentClick(dismissClickHandler) {
    this.clickHandlers.push(dismissClickHandler);
    this.$document.on('click', dismissClickHandler);
  }

  querySelector(selector) {
    return this.$element[0].querySelector(selector);
  }

  destory() {
    if (!this.clickHandlers || this.clickHandlers.length == 0) {
      return;
    }

    let handler = this.clickHandlers.shift();
    let counter = 0;
    while (handler) {
      counter++;
      if (counter > 10) {
        throw ("Must be some stupid code works wrong... please check select component in fancyui")
      }
      this.$document.off('click', handler);
      handler = this.clickHandlers.shift();
    }
  }

  click(e) {

    let self = this;
    let dismissClickHandler = (evt) => {

      /**
       * if click input, shoud not closed.
       */
      let isInput = () => {
        return self.querySelector('.calendar').contains(evt.target);
      }

      if (isInput()) {
        return
      }

      self.reset();
      self.$scope.$digest();
      self.destory();
    }

    if (!this.open) {
      this.bindDocumentClick(dismissClickHandler);
    }

    this.open = !this.open;
  }

  onSetTime(newDate, oldDate) {
    this.open = false;
    this.destory();

    this.onTimeSet && this.onTimeSet({
      'newDate': newDate,
      'oldDate': oldDate
    });
  }
}

export default CalendarController;
