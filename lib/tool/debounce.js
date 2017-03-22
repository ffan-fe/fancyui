/**
 * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        传入函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @return {function}             返回客户调用函数
 */
var debounce = function (func, wait) {
  var timeout, args, context, timestamp, result;

  var later = function () {
    // 据上一次触发时间间隔
    var now = (new Date()).getTime();

    var last = now - timestamp;
    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    }
    else {
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
  }

  return function () {
    context = this;
    args = arguments;
    timestamp = (new Date()).getTime();
    var callNow = !timeout;
    //如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    return result;
  }
}

export default debounce; 