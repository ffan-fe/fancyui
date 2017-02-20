
  /**
   * rangeInput
   */

import './range.less';
import touch from '../touch';

export default  angular.module('rangeInput', [touch.name]).value('ffanRangeConfig', {})
    .controller('ffanRangeController', function ffanRangeCtrl($element) {
      this.element = $element;
      this.min = 0;
      this.max = 100;
      this.step = 1;
    })
	  
    .directive('ffanRange', function () {
      return {
        restrict: 'EAC',
        controller: 'ffanRangeController',
        compile: function (tElement) {
          if (tElement.children().length === 0) {
            // Create a default slider for design purpose.

            if (!tElement.attr('class') && tElement.attr('class') !== '') {
              tElement.addClass('ffan-range--default');
            }

            tElement.append(
              // Use a virtual scope key to allow
                '<div class="ffan-range__thumb" ng-model="__' + Math.random().toString(36).substring(7) + '"></div>' 
            );
          }

          return function (scope, iElement, iAttrs, controller) {

            if (!iElement.hasClass('ffan-range')) {
              iElement.addClass('ffan-range');
            }

            ////////////////////////////////////////////////////////////////////
            // OBSERVERS
            ////////////////////////////////////////////////////////////////////

            // Observe the min attr (default 0)
            iAttrs.$observe('min', function (newVal) {
              controller.min = +newVal;
              controller.min = !isNaN(controller.min) ? controller.min : 0;
              scope.$emit('global min changed');
            });

            // Observe the max attr (default 100)
            iAttrs.$observe('max', function (newVal) {
              controller.max = +newVal;
              controller.max = !isNaN(controller.max) ? controller.max : 100;
              scope.$emit('global max changed');
            });

            // Observe the step attr (default 1)
            iAttrs.$observe('step', function (newVal) {
              controller.step = +newVal;
              controller.step = !isNaN(controller.step) && controller.step > 0 ? controller.step : 1;
              scope.$emit('global step changed');
            });

          };
        }
      };
    })

    .directive('ffanRangeRange', function () {
      return {
        restrict: 'EAC',
        require: '^ffanRange',
        scope: { start: '@', end: '@' },
        link: function (scope, iElement, iAttrs, controller) {

          if (!iElement.hasClass('ffan-range__range')) {
            iElement.addClass('ffan-range__range');
          }

          ////////////////////////////////////////////////////////////////////
          // OBSERVERS
          ////////////////////////////////////////////////////////////////////

          // Observe the start attr (default 0%)
          iAttrs.$observe('start', function (newVal) {
            var val = !isNaN(+newVal) ? +newVal : 0;
            val = (val - controller.min ) / (controller.max - controller.min) * 100;
            // TODO add half of th width of the targeted thumb ([ng-model='+ iAttrs.$attr.start + '])
            // TODO force width 0 if (left + right === 100 )
            iElement.css('left', val + '%');
          });

          // Observe the min attr (default 100%)
          iAttrs.$observe('end', function (newVal) {
            // Don't display the range if no attr are specified
            var displayed = angular.isDefined(iAttrs.start) || angular.isDefined(iAttrs.end);
            var val = !isNaN(+newVal) ? +newVal : displayed ? 100 : 0;
            val = (val - controller.min ) / (controller.max - controller.min) * 100;
            // TODO add half of th width of the targeted thumb ([ng-model='+ iAttrs.$attr.end + '])
            // TODO force width 0 if (left + right === 100 )
            iElement.css('right', (100 - val) + '%');
          });

        }
      };
    })

    .directive('ffanRangeThumb', function ($swipe) {
      // Get all the page.
      var htmlElement = angular.element(document.body.parentElement);

      return {
        restrict: 'EAC',
        require: ['^ffanRange', '?ngModel'],
        link: function (scope, iElement, iAttrs, controller) {

          if (!iElement.hasClass('ffan-range__thumb')) {
            iElement.addClass('ffan-range__thumb');
          }

          if (!controller[1]) return;
          var ngModel = controller[1];
          var ffanRangeCtrl = controller[0];
          var animationFrameRequested;
          var _cache = {
            min: ffanRangeCtrl.min,
            max: ffanRangeCtrl.max,
            step: ffanRangeCtrl.step
          };

          ////////////////////////////////////////////////////////////////////
          // UTILS
          ////////////////////////////////////////////////////////////////////

          function _formatValue(value, min, max, step) {
            var formattedValue = value;
            if (min > max) return max;
            formattedValue = Math.floor(formattedValue / step) * step;
            formattedValue = Math.max(Math.min(formattedValue, max), min);
            return formattedValue;
          }

          function getFormattedValue(value) {
            var formattedValue = value;
            formattedValue = _formatValue(formattedValue, _cache.min, _cache.max, _cache.step);
            return formattedValue;
          }

          function updateIfChanged(newVal, oldVal) {
            if (!angular.isUndefined(oldVal) && !isNaN(ngModel.$modelValue) && oldVal !== newVal) {
              ngModel.$setViewValue(getFormattedValue(ngModel.$modelValue));
            }
          }

          ////////////////////////////////////////////////////////////////////
          // OBSERVERS
          ////////////////////////////////////////////////////////////////////

          // Observe the min attr (default 0)
          iAttrs.$observe('min', function observeMin(newVal) {
            var oldVal = _cache.min;
            _cache.min = +newVal;
            _cache.min = !isNaN(_cache.min) ? _cache.min : 0;

            updateIfChanged(_cache.min, oldVal);

            ngModel.$render();
          });
          scope.$on('global min changed', function observeGlobalMin() {
            var oldVal = _cache.min;

            _cache.min = (angular.isDefined(iAttrs.min)) ? _cache.min : ffanRangeCtrl.min;
            // Secure no NaN here...
            _cache.min = !isNaN(_cache.min) ? _cache.min : 0;

            updateIfChanged(_cache.min, oldVal);
            ngModel.$render();
          });

          // Observe the max attr (default 100)
          iAttrs.$observe('max', function observeMax(newVal) {
            var oldVal = _cache.max;
            _cache.max = +newVal;
            _cache.max = !isNaN(_cache.max) ? _cache.max : 100;

            updateIfChanged(_cache.max, oldVal);

            ngModel.$render();
          });
          scope.$on('global max changed', function observeGlobalMax() {
            var oldVal = _cache.max;

            _cache.max = (angular.isDefined(iAttrs.max)) ? _cache.max : ffanRangeCtrl.max;
            // Secure no NaN here...
            _cache.max = !isNaN(_cache.max) ? _cache.max : 100;

            updateIfChanged(_cache.max, oldVal);
            ngModel.$render();
          });

          // Observe the step attr (default 1)
          iAttrs.$observe('step', function observeStep(newVal) {
            var oldVal = _cache.step;
            _cache.step = +newVal;
            _cache.step = !isNaN(_cache.step) && _cache.step > 0 ? _cache.step : 1;

            updateIfChanged(_cache.step, oldVal);

            ngModel.$render();
          });
          scope.$on('global step changed', function observeGlobalStep() {
            var oldVal = _cache.step;

            _cache.step = (angular.isDefined(iAttrs.step)) ? _cache.step : ffanRangeCtrl.step;

            // Secure no NaN here...
            _cache.step = !isNaN(_cache.step) && _cache.step > 0 ? _cache.step : 1;

            updateIfChanged(_cache.step, oldVal);
            ngModel.$render();
          });
          ////////////////////////////////////////////////////////////////////
          // RENDERING
          ////////////////////////////////////////////////////////////////////

          ngModel.$render = function ngModelRender() {

            // Cancel previous rAF call
            if (animationFrameRequested) {
              window.cancelAnimationFrame(animationFrameRequested);
            }

            // Animate the page outside the event
            animationFrameRequested = window.requestAnimationFrame(function drawFromTheModelValue() {
              var the_thumb_pos = (ngModel.$viewValue - ffanRangeCtrl.min ) / (ffanRangeCtrl.max - ffanRangeCtrl.min) * 100;
              the_thumb_pos = the_thumb_pos.toFixed(5);
              iElement.css('left', the_thumb_pos + '%');
            });
          };

          ////////////////////////////////////////////////////////////////////
          // FORMATTING
          ////////////////////////////////////////////////////////////////////
          // Final view format
          ngModel.$formatters.push(function (value) {
            return +value;
          });

          // Checks that it's on the step
          ngModel.$parsers.push(function stepParser(value) {
            ngModel.$setValidity('step', true);
            return Math.floor(value / _cache.step) * _cache.step;
          });
          ngModel.$formatters.push(function stepValidator(value) {
            if (!ngModel.$isEmpty(value) && value !== Math.floor(value / _cache.step) * _cache.step) {
              ngModel.$setValidity('step', false);
              return undefined;
            } else {
              ngModel.$setValidity('step', true);
              return value;
            }
          });

          // Checks that it's less then the maximum
          ngModel.$parsers.push(function maxParser(value) {
            ngModel.$setValidity('max', true);
            return Math.min(value, _cache.max);
          });
          ngModel.$formatters.push(function maxValidator(value) {
            if (!ngModel.$isEmpty(value) && value > _cache.max) {
              ngModel.$setValidity('max', false);
              return undefined;
            } else {
              ngModel.$setValidity('max', true);
              return value;
            }
          });

          // Checks that it's more then the minimum
          ngModel.$parsers.push(function minParser(value) {
            ngModel.$setValidity('min', true);
            return Math.max(value, _cache.min);
          });
          ngModel.$formatters.push(function minValidator(value) {
            if (!ngModel.$isEmpty(value) && value < _cache.min) {
              ngModel.$setValidity('min', false);
              return undefined;
            } else {
              ngModel.$setValidity('min', true);
              return value;
            }
          });


          // First check that a number is used
          ngModel.$formatters.push(function numberValidator(value) {
            if (ngModel.$isEmpty(value) || angular.isNumber(value)) {
              ngModel.$setValidity('number', true);
              return value;
            } else {
              ngModel.$setValidity('number', false);
              return undefined;
            }
          });

          ////////////////////////////////////////////////////////////////////
          // USER EVENT BINDING
          ////////////////////////////////////////////////////////////////////

          var hasMultipleThumb = 1 < iElement.parent()[0].getElementsByClassName('ffan-range__thumb').length;

          // Bind the click on the bar then you can move it all over the page.
          $swipe.bind(ffanRangeCtrl.element, {

            start: function (coord, event) {

              if (hasMultipleThumb && event.target !== iElement[0]) {
                return;
              }

              $swipe.bind(htmlElement, {
                start: function (coord, event) {
                  event.stopPropagation();
                  event.preventDefault();
                },
                move: function (coord) {
                  _handleMouseEvent(coord);
                },
                end: function () {
                  // Don't preventDefault and stopPropagation
                  // The html element needs to be free of doing anything !
                  htmlElement.unbind();
                }
              });

              if (!hasMultipleThumb) {
                // Handle simple click
                _handleMouseEvent(coord);
                htmlElement.triggerHandler('touchstart mousedown', event);
              }

            }

          });

          function _cached_layout_values() {

            if (_cache.time && +new Date() < _cache.time + 1000) {
              return;
            } // after ~60 frames

            // track bounding box
            var track_bb = iElement.parent()[0].getBoundingClientRect();

            _cache.time = +new Date();
            _cache.trackOrigine = track_bb.left;
            _cache.trackSize = track_bb.width;
          }

          function _handleMouseEvent(coord) {

            // Store the mouse position for later
            _cache.lastPos = coord.x;

            _cached_layout_values();

            var the_thumb_value = ffanRangeCtrl.min + (_cache.lastPos - _cache.trackOrigine) / _cache.trackSize * (ffanRangeCtrl.max - ffanRangeCtrl.min);
            the_thumb_value = getFormattedValue(the_thumb_value);

            ngModel.$setViewValue(parseFloat(the_thumb_value.toFixed(5)));
            if (!scope.$root.$$phase) {
              scope.$root.$apply();
            }
            ngModel.$render();

          }

        }
      };
    })
  