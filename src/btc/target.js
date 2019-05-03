const Hexa = require('./../hexa.js');

const target_max = (BigInt(2) ** BigInt(16) - BigInt(1)) * BigInt(2) ** BigInt(208); 

class Target extends Hexa {
    
  toDifficulty() {
    return target_max / this.toNumber();
  }
  
}

module.exports = Target;
