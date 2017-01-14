
import ffanRouter from './router.Service.js';
import uiRouter from 'angular-ui-router';
import routeConfig from './routerConfig';
import 'oclazyload';

export default angular.module('app.router', [
    uiRouter,
    'oc.lazyLoad'
])
    .config(($stateProvider, $locationProvider) => {
        /**
         *  统一路由配置
         */
        if (!routeConfig || routeConfig.length == 0) {
            throw 'No router found , please set router'
        }
        routeConfig.forEach((route) => {

            let url = '/:lang' + route.url;

            $stateProvider.state(route.name, {
                url: url,
                /**
                 * 把header和menu 也做成uiview，可以在routeConfig 里配置 是否需要display
                 */
                views: {
                    'menu': {
                        template: route.hideMenu ? '' : '<commonmenu></commonmenu>',
                    },
                    'header': {
                        template: route.hideHeader ? '' : '<commonheader></commonheader>',
                    },
                    'component': {
                        template: route.template
                    }
                },
                //template: route.template,
                resolvePolicy: {
                    module: { when: 'EAGER' }
                },
                resolve: {
                    loadingbar: 'loadingbar',
                    module: ($q, $ocLazyLoad, loadingbar) => {
                        loadingbar.setWidth(0);
                        return $q((resolve) => {
                            loadingbar.setWidth(20);
                            route.lazyload(function (module) {
                                $ocLazyLoad.load({ name: module.default.name });
                                loadingbar.setWidth(100);
                                resolve();
                            })
                        });
                    }
                }
            });
        });
        /**
         * 服务端支持，可开放html5Mode
         */
        //$locationProvider.html5Mode(true)
    })
    .service({
        ffanRouter
    })
