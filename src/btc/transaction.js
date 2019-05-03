const Struct = require('./../struct.js');
const Varint = require('./../varint.js');
const Hexa = require('./../hexa.js');
const Input = require('./input.js');
const Output = require('./output.js');
const Sigwit = require('./sigwit.js');

class Transaction extends Struct {
  
  static get bytesSequence() {
    return [
      { name: 'version',    size: 4,                    constructor: Hexa   },
      { name: 'sigwit',     size: 2,                    constructor: Sigwit },
      { name: 'inputs_nb',  size: Struct.VARINT_HEADER, constructor: Varint },
      { name: 'input',      size: Struct.VARINT_REPEAT, constructor: Input  },
      { name: 'outputs_nb', size: Struct.VARINT_HEADER, constructor: Varint },
      { name: 'output',     size: Struct.VARINT_REPEAT, constructor: Output },
      { name: 'locktime',   size: 4,                    constructor: Hexa   },
    ];
  }
  
}

module.exports = Transaction;
