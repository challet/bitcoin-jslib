const Struct = require('./../struct.js');
const Varint = require('./../varint.js');
const Hexa = require('./../hexa.js');
const Input = require('./input.js');
const Output = require('./output.js');
const Segwit = require('./segwit.js');
const Witness = require('./witness.js');

class Transaction extends Struct {
  
  static get bytesSequence() {
    return [
      { name: 'version',    size: 4,                    constructor: Hexa    },
      { name: 'segwit_flg', size: 2,                    constructor: Segwit  },
      { name: 'inputs_nb',  size: Struct.VARINT_HEADER, constructor: Varint  },
      { name: 'input',      size: Struct.VARINT_REPEAT, constructor: Input   },
      { name: 'outputs_nb', size: Struct.VARINT_HEADER, constructor: Varint  },
      { name: 'output',     size: Struct.VARINT_REPEAT, constructor: Output  },
      { name: 'witness',    size: Struct.SEGWIT_REPEAT, constructor: Witness },
      { name: 'locktime',   size: 4,                    constructor: Hexa    },
    ];
  }
  
}

module.exports = Transaction;
