const Struct = require('./../struct.js');
const Varint = require('./../varint.js');
const WitnessItem = require('./witness_item.js');

class Witness extends Struct {
  
  static get bytesSequence() {
    return [
      { name: 'items_nb', size: Struct.VARINT_HEADER, constructor: Varint },
      { name: 'item'    , size: Struct.VARINT_REPEAT, constructor: WitnessItem }
    ];
  }
  
}

module.exports = Witness;
