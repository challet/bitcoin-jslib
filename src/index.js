module.exports = {
  Hexa:       require('./hexa.js'),
  Varint:     require('./varint.js'),
  Struct:     require('./struct.js'),
  Display:    require('./components/display.js'),
  Eccrypt:    require('./components/eccrypt.js'),
  Processor:  require('./components/processor.js'), // is it Bitcoin specific ?
  
  // TODO: Tree

  
  Btc: {
    Block:        require('./btc/block.js'),
    Header:       require('./btc/header.js'),
    Bits:         require('./btc/bits.js'),
    Target:       require('./btc/target.js'),
    Transaction:  require('./btc/transaction.js'),
    Input:        require('./btc/input.js'),
    Output:       require('./btc/output.js'),
    Script:       require('./btc/script.js'),
    Op:           require('./btc/op.js'),
  }
  
}