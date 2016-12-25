/**
 * Created by fjywan on 16/7/28.
 */

/**
 * 从array中移除element
 * @param array
 * @param element
 */
let remove = (array, element) => {
  let index = array.indexOf(element);
  if (index > -1) {
    array.splice(index, 1);
  }
};

export {remove}
