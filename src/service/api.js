/**
 * Created by fjywan on 16/4/15.
 */

import fixURL from '../tool/fixurl';

export default class Api {

  /**
   * Creates an instance of Api.
   * 注册为service, 为项目提供统一的ajax请求策略
   * 
   * @param {Object} $http
   * @param {Object} $q
   * @param {Object} $env 全局的是否在debug状态下
   */
  constructor($http, $q, $env) {
    "ngInject";
    this.$q = $q;
    this.$http = $http;
    this.$env = $env;
  }

  /**
   * send get request
   * 
   * @param {String} url
   * @param {Object} params
   * @returns {Promise}
   */
  get(url, params) {
    let deferred = this.$q.defer();
    this.$http({
      url: this.getDomain(url),
      method: 'get',
      params: params || {}
    }).then(
      responseHandler(deferred.resolve, deferred.reject),
      errorHandler(deferred.reject)
    );
    return deferred.promise;
  }
  /**
   * send post request 
   * 
   * @param {String} url
   * @param {Object} params
   * @returns
   */
  post(url, params) {
    let deferred = this.$q.defer();
    this.$http({
      url: this.getDomain(url),
      data: $.param(params),
      method: "post",
      headers: {"Content-Type": "application/x-www-form-urlencoded"}
    }).then(
      responseHandler(deferred.resolve, deferred.reject),
      errorHandler(deferred.reject)
    );
    return deferred.promise;
  }
  /**
   * send put request 
   * 
   * @param {String} url
   * @param {Object} params
   * @returns
   */
  put(url, params) {
    let deferred = this.$q.defer();
    this.$http({
      url: this.getDomain(url),
      data: $.param(params),
      method: "put",
      headers: {"Content-Type": "application/x-www-form-urlencoded"}
    }).then(
      responseHandler(deferred.resolve, deferred.reject),
      errorHandler(deferred.reject)
    );
    return deferred.promise;
  }
  /**
   * 根据不同环境返回对应的请求地址
   * -本地不做任何处理
   * @param url
   */
  getDomain(url) {
    return fixURL(url, {}, this.$env.DEBUG);
  }
}
/**
 * $http promise resolve 处理函数
 * 
 * @param {Function} resolve
 * @param {Function} reject
 * @returns {Function}
 */
function responseHandler(resolve, reject) {
  return response => {
    if (response && response.data && response.data.status == 200) {
      // 这里本来是取两层data返回的, 但是列表页要从上一层获取count, 所以统一都改成一层的.
      resolve(response.data);
    } else {
      reject(response.data);
    }
  }
}
/**
 * $http promise reject 处理函数
 * 
 * @param {Function} reject
 * @returns {Function}
 */
function errorHandler(reject) {
  return response => {
    reject(response);
  }
}