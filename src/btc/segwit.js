const Hexa = require('./../hexa.js');

const target_max = (BigInt(2) ** BigInt(16) - BigInt(1)) * BigInt(2) ** BigInt(208); 

class Sigwit extends Hexa {
  
  // it is always the same
  constructor() {
    super(Buffer.from('0001', 'hex'));
  }
  
  static extractFrom(hexa) {
    const model = new this();
    // wether it matches the model or not
    // (optionnal in the stream)
    if (hexa.buffer.equals(model.buffer)) {
      return model;
    } else {
      return null;
    }
  }
  
}

module.exports = Sigwit;
