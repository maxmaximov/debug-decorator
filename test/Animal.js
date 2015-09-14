'use strict';

const Organism = require('./Organism');

class Animal extends Organism {
  constructor(name) {
    super();
  }

  getName(name) {
    return(this.name + ' the Animal');
  }
}

module.exports = Animal;
