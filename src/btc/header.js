const Struct = require('./../struct.js');
const Varint = require('./../varint.js');
const Hexa = require('./../hexa.js');
const Bits = require('./bits.js');


class Header extends Struct {
  
  static get bytesSequence() {
    return [
      { name: 'version',    size: 4,  constructor: Hexa },
      { name: 'prev_block', size: 32, constructor: Hexa },
      { name: 'merkl_root', size: 32, constructor: Hexa },
      { name: 'timestamp',  size: 4,  constructor: Hexa },
      { name: 'bits',       size: 4,  constructor: Bits },
      { name: 'nonce',      size: 4,  constructor: Hexa }
    ];
  }
  
}

module.exports = Header;
