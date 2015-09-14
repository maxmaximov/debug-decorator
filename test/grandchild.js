'use strict';

const assert = require('assert');
const stdout = require('../utils/stdout');
const debug = require('../build/debug-decorator');

require('../utils/uncache')();

describe('grandchild class', () => {
  const Cat = require('./Cat');
  debug(Cat);

  describe('inherited prototype method', () => {
    it('without arguments', () => {
      let result = stdout(() => new Cat().getName());
      assert.equal(result, 'Cat.prototype.getName (inherited from Animal) [] => Max the Animal\n');
    });
  });
});

