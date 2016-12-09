"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by fjywan on 16/7/28.
 */

/**
 * 从array中移除element
 * @param array
 * @param element
 */
var remove = function remove(array, element) {
  var index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
};

exports.remove = remove;