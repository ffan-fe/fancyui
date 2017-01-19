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
  .directive('calculateStyle', ($timeout) => {
    'ngInject'

    return {
      restrict: 'A',
      link: ($scope, element, attrs) => {
        let timerInWatch,
          find = (selector) => {
            return element[0].querySelector(selector);
          };

        /**
         * 只有mutiple 才做calculate-style
         */
        if (!$scope.vm.isMultiple) {
          return;
        }

        let watch = $scope.$watch(() => {
          //let watchItem = find('.f-select_tags').clientHeight;
          /**
           * watch data more better than dom....
           */
          let watchItem = $scope.vm.dataArray[0].options.filter((item) => {
            return item._active;
          }).length;
          watchItem = watchItem + ($scope.vm.multipleInput ? $scope.vm.multipleInput.length : 0);
          return watchItem;
        }, () => {
          let timerInWatch = $timeout(() => {
            let selectTags = find('.f-select_tags'),
              hiddenInput = find('.f-input input'),
              selectInput = find('.f-select_input');

            let maxWidth = selectTags.style.maxWidth.split('px')[0];

            if (selectInput.value && selectInput.value.length) {
              /**
               * 简单粗暴！！！
               */
              let newWidth = (selectInput.value.length + 1) * 20;
              if (newWidth < maxWidth) {
                selectInput.style.width = ((selectInput.value.length + 1) * 20) + 'px';
              }
            }

            hiddenInput.style.height = selectTags.clientHeight + 6 + 'px';
          })

          $scope.$on('$destroy', () => {
            $timeout.cancel(timerInWatch);
          })
        }, true);

        /**
         * 页面render之后，计算maxwidth
         */
        let timer = $timeout(() => {
          find('.f-select_tags').style.maxWidth = (element[0].querySelector('.f-input input').clientWidth - 35) + 'px';
        });

        $scope.$on('$destroy', () => {
          $timeout.cancel(timer);
        })
      }
    }
  })
export default selectModule;
