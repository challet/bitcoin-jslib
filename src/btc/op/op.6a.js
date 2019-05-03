const Op = require('../op.js');

module.exports =  class Op6a extends Op {
  
  execute(stack) {
    throw `OP_RETURN fails.`
  }
  
}
