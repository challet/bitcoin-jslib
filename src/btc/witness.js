const Struct = require('./../struct.js');
const Varint = require('./../varint.js');
const Hexa = require('./../hexa.js');

class Witness extends Struct {
  
  static get bytesSequence() {
    return [
      { name: 'witness_len',  size: Struct.VARINT_HEADER,  constructor: Varint },
      { name: 'wirness_dat',  size: Struct.VARINT_CONTENT, constructor: Hexa },
    ];
  }
  
}

module.exports = Witness;
