const Op = require('../op.js');

module.exports = class Op87 extends Op {
  
  execute(stack) {
    var a = stack.pop();
    var b = stack.pop();
    stack.push(a.equals(b));
  }
  
}
