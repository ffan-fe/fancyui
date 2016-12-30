/**/

import angular from 'angular';
import loadingbarComponent from './loadingbar.component';

let loadingbarModule = angular.module('loadingbar', [
])
.service('loadingbar',() => {
    let progress = window.progress = $("#js-pjax-loader-bar .progress"); 
    let loadingbar = $("#js-pjax-loader-bar");
    let $document = $(document);
    
    //监听事件
    var transitionEnd = function (){
      if(progress.width() >= $document.width() ){
        setWidth(0);
        loadingbar.removeClass('is-loading');
      }
    }
    progress.on('transitionend',transitionEnd);
    progress.on('webkitTransitionEnd',transitionEnd);
    
    function setWidth(width){
      progress.width(`${width}%`);
      loadingbar.addClass('is-loading');
    }

    return {
      setWidth:setWidth,
    };
})
.component('loadingbar', loadingbarComponent);

export default loadingbarModule;

