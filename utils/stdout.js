'use strict';

const intercept = require("intercept-stdout");
const colors = require('colors');

module.exports = function (cb) {
  let out = '';
  let unintercept = intercept(text => {
    out += text;
    if (module.exports.DEBUG) {
      return text.blue;
    } else {
      return '';
    }
  });

  cb();

  unintercept();
  return out;
}

module.exports.DEBUG = false;
//module.exports.DEBUG = true;
