'use strict';

module.exports = function debugDecorate(target) {
  function getKeys(obj) {
    let keys = Object.getOwnPropertyNames(obj);

    if (Object.getOwnPropertySymbols) {
      keys.concat(Object.getOwnPropertySymbols(obj));
    }

    return keys.filter(key => key !== 'constructor').map(key => ({ obj: obj, key: key }));
  }

  let keys = [];

  let proto = target;
  while (proto) {
    // don't touch the Function.__proto__
    if (proto === Object.getPrototypeOf(Function)) break;
    keys = keys.concat(getKeys(proto));
    proto = Object.getPrototypeOf(proto);
  }

  proto = target.prototype;
  while (proto) {
    // don't touch the Object.prototype
    if (proto === Object.prototype) break;
    keys = keys.concat(getKeys(proto));
    proto = Object.getPrototypeOf(proto);
  }

  keys.forEach(item => {
    let obj = item.obj;
    let key = item.key;
    let descriptor = Object.getOwnPropertyDescriptor(obj, key);

    if (typeof descriptor.value === 'function') {
      obj[key] = function () {
        let args = Array.from(arguments);
        let message = '';

        // static methods
        if (typeof obj === 'function') {

          // check if a method has been invoked on the target class
          if (this === target) {
            // own static method
            if (obj === target) {
              // TODO check for override
              message = `${target.name}.${key}`;

            // inherited static method
            } else {
              message = `${target.name}.${key} (inherited from ${obj.name})`;
            }
          }

        // prototype methods
        } else {

          // check if a method has been invoked on the target class
          if (this.constructor === target) {
            // own prototype method
            if (this.constructor === obj.constructor) {
              // TODO check for override
              message = `${this.constructor.name}.prototype.${key}`;

            // inherited prototype method
            } else {
              message = `${this.constructor.name}.prototype.${key} (inherited from ${obj.constructor.name})`;
            }
          }
        }

        let result = descriptor.value.apply(this, args);

        if (message) {
          console.info(message, args, '=>', result);
        }

        return result;
      };
    }
  });
}
