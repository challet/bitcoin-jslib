const Op = require('./../op.js');
const Hexa = require('./../../hexa.js');

module.exports =  class Op51 extends Op {
  
  execute(stack) {
    stack.push(Hexa.fromString('01'));
  }
  
}
