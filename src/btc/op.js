const Hexa = require('./../hexa.js');

class Op extends Hexa {
  
  static factory(code, hexa) {
    try {
      return new (require(`./op/op.${code.toString(16)}.js`))(hexa);
    } catch (e) {
      if (e.code === 'MODULE_NOT_FOUND') {
        return new this(hexa);
      } else {
        // re-trhow 
        throw e;
      }
    }
  }
  
  execute(stack) {
    throw `${this.constructor.name} class must implement a execute method.`;
  }
  
}

module.exports = Op;
