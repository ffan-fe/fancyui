
class ffanRouter {
    constructor($rootScope) {
        "ngInject";
        this.$rootScope = $rootScope;
    }

    registerTracking(routerConfig){
        /*
         * 监听理由改变
         */
        this.$rootScope.$on('$stateChangeStart', function (scope, next, current) {
            let tracking = this.getRouter(next,routerConfig).tracking;
            if(tracking){
                if(!window.tracking){
                    console.error('should to load tracking.min.js')
                }
                else{
                    window.tracking(tracking.key);
                }
            }
        }.bind(this));
    }

    getRouter(next,routerConfig){
        if(!next){
            return ;
        }

        return routerConfig.find((router)=>{
            return router.name === next.name 
        });
    }
}

export default ffanRouter
