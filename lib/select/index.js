/**
 * @description select
 *
 * @author guanbingchang 148135244@qq.com
 * @date Tue Jan 03 2017 13:28:41 GMT+0800 (CST)
 * @example: http://www.fancyui.org/#/zh-cn/component/select
 */


import selectComponent from './select.component';

let selectModule = angular.module('f-select', [
])
.component('fSelect', selectComponent)
.directive('calculateStyle',($timeout)=>{
  'ngInject'

  return {
    restrict : 'A',
    link:($scope,element,attrs)=>{
      let timerInWatch,
        find = (selector)=>{
          return element[0].querySelector(selector);
        };

      /**
       * 只有mutiple 才做calculate-style
       */
      if(!$scope.vm.isMultiple){
        return;
      }

      let watch = $scope.$watch(()=>{
        return find('.f-select_tags').clientHeight;
      },()=>{
        console.log('change');
        let timerInWatch = $timeout(()=>{
          let selectTags = find('.f-select_tags'),
              input = find('.f-input input');
          
          input.style.height = selectTags.clientHeight + 6 + 'px';
        }) 

        $scope.$on('$destroy',()=>{
          $timeout.cancel(timerInWatch);
        }) 
      },false); 

      /**
       * 页面render之后，计算maxwidth
       */
      let timer = $timeout(()=>{
        element[0].querySelector('.f-select_tags').style.maxWidth = (element[0].querySelector('.f-input input').clientWidth - 35)+'px'; 
      });

      $scope.$on('$destroy',()=>{
        $timeout.cancel(timer);
      })
    }
  }
})
export default selectModule;
