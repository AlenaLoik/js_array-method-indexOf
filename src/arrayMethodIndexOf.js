'use strict';

/**
 * Implement improved version of indexOf method. It should correctly search for
 * NaN and undefined and return -1 if searchElement is not given. It should
 * also work for negative fromIndex handling -2 as a pre last element.
 */
function applyCustomIndexOf() {
  [].__proto__.indexOf2 = function(searchElement, fromIndex) {
    let index = 0;

    if (typeof fromIndex === 'number') {
      if (fromIndex > 0) {
        index = fromIndex;
      }

      if ((fromIndex < 0) & (fromIndex > (-this.length))) {
        index = fromIndex + this.length;
      }
    }

    for (let i = index; i < this.length; i++) {
      if (this[i] === searchElement
        || (this[i] + '' === 'NaN' & '' + searchElement === 'NaN')) {
        return i;
      }
    }

    return -1;
  };
}

module.exports = applyCustomIndexOf;
