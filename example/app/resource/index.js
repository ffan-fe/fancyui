import Lang from './lang';
import langDefault from './lang/lang';
import routeConfig from '../router/routerConfig';

export default class ResourceManager{
  constructor(language){
    this.language = language;
  }

  extract(){
    let returnObj = {};
    
    for (var i in Lang[this.language]){
      if(Lang[this.language].hasOwnProperty(i)){
        returnObj[i] = Lang[this.language][i];
      }
    }

    /**
     * 注入路由里的资源文件
     */
    let routeResource =  routeConfig.forEach(route=>{
			if(route.moduleName){
				returnObj[route.name] = route.moduleName[this.language];
			}
		})

    return returnObj;
  }
  
}