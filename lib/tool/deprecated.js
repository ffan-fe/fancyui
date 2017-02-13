function warning(deprecated, recommand) {
  if (!deprecated) {
    console.warn('This version will be obsoleted in next major release, please follow http://www.fancyui.org/ for detail')
  }
  else {
    console.warn(`${deprecated} will be obsoleted in next major release, please use ${recommand} instead` );
  }
}

/**
 * 废弃组件注入提示
 */
export default function (deprecatedComponent, deprecated, recommand) {
  let component = angular.copy(deprecatedComponent);
  /**
   * 单元测试覆盖率会在'ngInjector'之前注入一段函数，导致不能在被$$anotate,出错。
   * 单元测试的时候不需要这个功能，所以简单粗暴try catch即可
   */
  try{
    let controller = component.controller;
    let argsString = angular.injector.$$annotate(component.controller, true);

    var $injector = angular.element(document.body).injector();
    /**
     * 伪造controller的构造函数，添加一个warning 
     */
    let tempController = function () {
      warning(deprecated, recommand);
      
      let args = [];
      for (var i = 0, len = argsString.length; i < len; i++) {
        args.push($injector.get(argsString[i]));
      }
      
      let instance = Object.create(controller.prototype || null);
      angular.merge(instance,this);
      controller.apply(instance,args);
      
      return instance;
    }
    component.controller = tempController;
  }
  catch(ex){

  }
  return component;
}
