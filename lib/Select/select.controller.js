/**
 * @description select
 *
 * @author guanbingchang 148135244@qq.com
 * @date Tue Jan 03 2017 13:28:41 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/select
 */

class SelectController {
  constructor($element, $document, $scope, $parse, $attrs) {
    'ngInject';
    this.hover = false;
    this.active = false;
    this.isReverse = false;
    this.$element = $element;
    this.$document = $document;
    this.$scope = $scope;
    this.$parse = $parse;
    this.dataArray = [];
    this.debounce = this.remoteDebounce ? this.remoteDebounce : 0;
    this.clickHandlers = [];
    this.emptyFlag = true;
    this.init = false;
    /**
     * 初始化设置isOpen
     */
    this.isOpen = !this.isRemote

    if (this.isMultiple) {
      this.multipleInput = '';
      this.activeItems = [];
    }

    $scope.$on('$destroy', () => {
      this.destory();
    });
  }


  querySelector(selector) {
    return this.$element[0].querySelector(selector);
  }

  $onInit() {
    this.validate();
    /**
     * 含组的和不含组的，外部传进来相对的结构。里面处理
     */
    if (!this.isRemote) {
      this.dataArray = this.buildArray(this.data);
    }

    this.inputValue = this.ngModel ? this.ngModel.name : '';
    this.init = true;
  }

  $onChanges(changeObj) {

    if (!this.init) {
      return;
    }

    if (changeObj.hasOwnProperty('ngModel')) {
      let currentValue = changeObj['ngModel'].currentValue;
      this.setModel(currentValue);
    }
  }

  /**
   * 设置model值
   * if.从dataArray 里能匹配到，就直接食用该值。
   * else. 清空model和view
   */
  setModel(currentValue) {
    let isMatch = false,
        self = this;
    this.dataArray.map((group) => {
      return group.options.map((option) => {
        if (option.id === currentValue.id) {
          isMatch = true;
          if(!self.isRemote){
            option._active = true;
          }
          self.ngModel = option; 
        }
      });
    });

    if(isMatch){
      this.inputValue = this.ngModel.name ? this.ngModel.name : '';
    }
    else{
      this.inputValue = '';
    }
  }

  validate() {
    /**
     * 不是multiple模式，必须有ngModel
     */
    if (!this.ngModel && !this.isMultiple) {
      throw 'ngModel must not undefined'
    }

    /**
     * isMultiple 模式，必须有ngModels
     */
    if (this.isMultiple && !this.ngModels) {
      throw 'ngModels must not undefined';
    }

  }

  mouseEnter() {
    if (this.clearable && this.hasSelected()) {
      this.hover = true;
    }
  }

  mouseLeave() {
    if (this.clearable) {
      this.hover = false;
    }
  }

  buildArray(data) {
    if (this.isGroup) {
      this.emptyFlag = false;
      return angular.copy(data);
    }
    else {
      if (data && data.length > 0) {
        this.emptyFlag = false;
        return [{
          options: data
        }];
      }
    }
    this.emptyFlag = true;
    return [];
  }

  /**
   * 清除所有items的active状态
   */
  clearItemStatus() {
    this.dataArray.map((item) => {
      item.options.map((option) => {
        option._active = false;
      })
      return item;
    })
  }

  changeMultipleItemStatus(option) {
    if (option._active) {
      let index = this.activeItems.indexOf(option);
      this.activeItems.splice(index, 1);
      option._active = false;
      return;
    }

    option._active = true;
    option._isNew = false;
    this.activeItems.push(option);
  }

  changeItemStatus(option) {
    /**
     * 远程获取数据，选择item时不应该高亮
     */
    if (!this.isRemote) {
      option._active = !option._active;
    }
  }

  clearPlaceHolder() {
    this.querySelector('.f-input input').placeholder = '';
  }

  /**
   * 通过输入筛选数组，最终返回是否存在(如果存在，并且allowCreate模式下，是不会新增的)
   */
  filterOptions(val) {
    this.emptyFlag = true;
    if (typeof val === 'undefined') {
      return;
    }
    let isExists = false;

    let value = val.trim();
    let self = this;
    let returnValue = this.dataArray.map((group) => {
      group.options.map(option => {
        let hasResult = option.name.indexOf(value) > -1;
        if (hasResult && self.emptyFlag) {
          self.emptyFlag = false;
          if (option.name === value && !isExists) {
            isExists = true;
          }
        }
        option._hide = !hasResult && !option._isNew;
      })

      return group;
    });

    return isExists;
  }

  reset() {
    /**
     * fix https://github.com/ffan-fe/fancyui/issues/43
     */
    if (!this.isMultiple) {
      this.inputValue = this.ngModel.name ? this.ngModel.name : '';
    }

    this.hover = false;
    this.isReverse = false;
    this.active = false;
  }

  clearSelected() {
    return this.onItemClicked({});
  }

  hasSelected() {
    return this.ngModel && this.ngModel.name;
  }

  bindDocumentClick() {
    /**
     * 理论上clickHandlers 只有一个.
     */
    if (this.clickHandlers.length > 0) {
      return;
    }
    let self = this;
    /**
     * keep reference for unbinding
     */
    let dismissClickHandler = (evt) => {
      /**
       * if click groupTitle, shoud not closed.
       */
      let isGroupTitle = () => {
        return angular.element(evt.target).hasClass('f-select-group_title');
      }

      /**
       * if click input, shoud not closed.
       */
      let isInput = () => {
        return self.querySelector('.f-input') == evt.target.parentNode;
      }

      /**
       * when isMultiple, click items shoud not closed.
       */
      let isMultipleItemSelected = () => {
        if (!self.isMultiple) {
          return false;
        }
        return self.querySelector('.f-select-dropdown').contains(evt.target)
          || self.querySelector('.f-select_tags').contains(evt.target)
          || angular.element(evt.target).hasClass('f-tag_close');
      }

      /**
       * should not closed , when item disbaled.
       */
      let isDisabledItem = () => {
        return angular.element(evt.target).hasClass('is-item-disabled')
          || angular.element(evt.target.parentNode).hasClass('is-item-disabled');
      }

      if (isGroupTitle()
        || isInput()
        || isMultipleItemSelected()
        || isDisabledItem()) {
        return
      }

      self.reset();
      self.$scope.$digest();
      self.destory();
    }
    this.$document.on('click', dismissClickHandler)
    this.clickHandlers.push(dismissClickHandler);;
  }

  /**
   * 销毁上一次操作的click handler
   */
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

  onClick(e) {
    if (this.clearable
      && this.hasSelected()
      && e.target.tagName === 'I') {
      this.active = false;
      this.clearSelected(null);
      this.hover = false;
      return;
    }
    else if (this.isDisabled) {
      return;
    }

    let self = this;

    if (!this.isRemote) {
      this.active ? this.destory() : this.bindDocumentClick();
      this.toggle(this.active)
    }
    else {
      /**
       * 因为remote方法需要通过change去远程获取数据； 所以
       * 1.点击click打开菜单时，对于remote来说，需要额外执行onInputChange.
       * 2.点击click关闭菜单时，只做关闭操作，不需要destory掉handler;
       * 3.远程的方法里，自己去绑定dismissClickhandler，保证了打开dropdown时，肯定是可以被关闭的
       */
      this.active ? this.toggle(true) : this.onInputChange();
    }
  }

  toggle(active) {
    /**
     * 是否需要翻转icon
     */
    this.isReverse = this.active = !active;
  }


  /**
   * @description 每一项option选中事件
   * @params
   *   option:{name:'',id:'',label:''}
   */
  onItemClicked(option, e) {
    if (option.disabled) {
      return;
    }

    if (this.isMultiple) {
      this.changeMultipleItemStatus(option);
      this.clearPlaceHolder();
      this.ngModels = this.activeItems;
    }
    else {
      this.clearItemStatus();
      this.changeItemStatus(option);
      this.ngModel = option;
      //https://github.com/ffan-fe/fancyui/issues/43, remove because of add watch ngModel in initial.
      this.inputValue = option ? option.name : "";
    }

    /**
      * 父作用域回调
      */
    this.onItemSelected && this.onItemSelected({
      '$item': option ? option : {},
      '$isNew': option ? option._isNew : false
    });
  }

  /**
   * 多选模式下，输入框的change事件
   */
  onMultipleInputChange() {
    /**
     * do filter logic
     */
    let self = this;
    let isExists = this.filterOptions(this.multipleInput);

    if (this.allowCreate) {
      this.emptyFlag = false;
      this.dataArray.map(group => {
        let firstElement = group.options[0];
        if (group.options.length > 0 && firstElement._isNew) {
          firstElement.name = self.multipleInput;
        }
        else {
          if (self.multipleInput.length != 0) {
            group.options.unshift({
              name: self.multipleInput,
              _isNew: true
            });
          }
        }
        /**
         * 输入的是'',清掉
         */
        if ((firstElement.name.length === 0 && firstElement._isNew)
          || isExists
        ) {
          group.options.shift();
        }
        return group;
      })
    }
  }

  /**
   * 默认模式下，输入框的change事件
   */
  onInputChange(dismissClickHandler) {
    /**
     * 每次改变的时候应该先关闭菜单，在远程数据返回的时候，处理完数据，并且打开菜单
     */
    this.isOpen = false;

    this.remoteMethod({
      '$value': typeof (this.inputValue) === 'undefined' ? '' : this.inputValue
    }).then((data) => {
      /**
       * fix https://github.com/ffan-fe/fancyui/issues/43
       
      if (!data || data.length == 0) {
        this.ngModel = {};
      }*/

      this.dataArray = this.buildArray(data);
      this.isOpen = true;
      this.bindDocumentClick()
      this.toggle(false);
    })

  }

  /**
   * isMultiple模式下，removeitem
   */
  onRemoveItem(option) {
    this.changeMultipleItemStatus(option);
  }

  /**
   * isMultiple模式下，点击tags层
   */
  onMultipleClick(e) {
    //自动focus mutiple input

    this.querySelector('.f-select_input').focus();
    this.clearPlaceHolder();

    /**
     * 只打开，不关闭
     */
    if (!this.active) {
      this.onClick(e);
    }
  }

}


export default SelectController;
