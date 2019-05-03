const Struct = require('./../struct.js');
const Varint = require('./../varint.js');
const Hexa = require('./../hexa.js');
const Header = require('./header.js');
const Transaction = require('./transaction.js');

class Block extends Struct {
  
  static get bytesSequence() {
    return [
      { name: 'header',     size: 80,                   constructor: Header },
      { name: 'trscts_nb',  size: Struct.VARINT_HEADER, constructor: Varint },
      { name: 'trsct',      size: Struct.VARINT_REPEAT, constructor: Transaction }
    ];
  }
  
}

module.exports = Block;
