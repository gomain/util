'use strict';

export default {
  invoke: function (...args) {
    return function (caller) {
      return caller(...args);
    };
  }
};
