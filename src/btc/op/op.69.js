const Op = require('../op.js');

module.exports =  class Op69 extends Op {
  
  execute(stack) {
    if (!stack.pop()) {
      throw `OP_VERIFY fails.`
    }
  }
  
}
