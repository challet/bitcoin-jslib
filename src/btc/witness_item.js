const Struct = require('./../struct.js');
const Varint = require('./../varint.js');
const Hexa = require('./../hexa.js');

class WitnessItem extends Struct {
  
  static get bytesSequence() {
    return [
      { name: 'item_len', size: Struct.VARINT_HEADER,  constructor: Varint },
      { name: 'item_dat', size: Struct.VARINT_CONTENT, constructor: Hexa }
    ];
  }
  
}

module.exports = WitnessItem;
