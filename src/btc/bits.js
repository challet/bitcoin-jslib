const Hexa = require('./../hexa.js');
const Target = require('./target.js');

class Bits extends Hexa {
  
  toTarget() {
    const exp   = this.slice(0,1);
    const coeff = this.slice(1,4);
    
    return Target.fromString( '00'.repeat(Number(exp.toNumber())) + coeff.toString() );
  }
  
}

module.exports = Bits;
