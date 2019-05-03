const Op = require('../op.js');

module.exports = class Op76 extends Op {
  
  execute(stack) {
    var dup = stack.pop();
    stack.push(dup);
    stack.push(dup);
  }
  
}

