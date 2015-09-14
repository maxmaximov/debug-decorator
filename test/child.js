'use strict';

const assert = require('assert');
const stdout = require('../utils/stdout');
const debug = require('../build/debug-decorator');

require('../utils/uncache')();

describe('child class', () => {
  const Animal = require('./Animal');
  debug(Animal);

  describe('inherited static method', () => {
    it('without arguments', () => {
      let result = stdout(() => Animal.hasTail());
      assert.equal(result, 'Animal.hasTail (inherited from Organism) [] => false\n');
    });
  });

  // TODO overrided
  describe('own prototype method', () => {
    it('without arguments', () => {
      let result = stdout(() => new Animal().getName());
      assert.equal(result, 'Animal.prototype.getName [] => Max the Animal\n');
    });
  });

  describe('inherited prototype method', () => {
    it('with an argument', () => {
      let result = stdout(() => new Animal().setName('John'));
      assert.equal(result, `Animal.prototype.setName (inherited from Organism) [ 'John' ] => Animal { name: 'John' }\n`);
    });
  });
});
