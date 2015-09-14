'use strict';

class Organism {
  static hasTail() {
    return false;
  }

  constructor(name) {
    this.name = name || 'Max';
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
    return this;
  }
}

module.exports = Organism;
