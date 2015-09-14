'use strict';

const assert = require('assert');
const stdout = require('../utils/stdout');
const debug = require('../build/debug-decorator');

require('../utils/uncache')();

describe('base class', () => {
  const Organism = require('./Organism');
  debug(Organism);

  describe('own static method', () => {
    it('without arguments', () => {
      let result = stdout(() => Organism.hasTail());
      assert.equal(result, 'Organism.hasTail [] => false\n');
    });
  });

  describe('own prototype method', () => {
    it('without arguments', () => {
      let result = stdout(() => new Organism().getName());
      assert.equal(result, 'Organism.prototype.getName [] => Max\n');
    });
  });
});
