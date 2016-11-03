/**
 * 由于分离到不同的域名里面, 导致之前'/moon' 这类接口失效, 转换一次URL地址
 * @export
 */
export default function fixURL(url, config = {}, isDebug = false) {
  //如果是完整的连接，直接返回, 这意思是绝对地址
  if(~url.search('http')){
    return url;
  }
  //
  let href = location.hostname;
  // 本地环境直接返回, 因为有代理
  if(isDebug || ~href.search('localhost') || /(\d+\.){3}\d{1,3}/.test(href)){
    return url;
  }
  // 是sit环境的情况
  if(~href.search('sit')){
    return 'http://admin.sit.ffan.com' + url;
  }
  // 是test环境的情况
  if (~href.search('test')) {
    return 'http://admin.test.ffan.com' + url;
  }
  // 最后是正式环境
  return 'https://admin.ffan.com' + url;
}
//
function initConfig(config) {
  if (!config) config = {};
  // 默认给P端后台的地址
  if (!config.absolute) {
    config.absolute = {
      test: 'http://admin.test.ffan.com',
      sit: 'http://admin.test.ffan.com',
      pro: 'https://admin.ffan.com'
    };
  }
}
