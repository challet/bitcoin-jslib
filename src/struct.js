const Hexa = require('./hexa.js');
const Varint = require('./varint.js');

class Struct extends Hexa {
  
  constructor(hexa, parts) {
    super(hexa);
    this.parts = parts;
  }
  
  static get bytesSequence() {
    throw `${this.constructor} class must implement a bytesSequence method.`;
  }

  static extractFrom(hexa) {
    var shift = 0;
    var last_varint = null;
    var parts = [];
    
    for (let i = 0; i < this.bytesSequence.length; i++) {
      let seq = this.bytesSequence[i];
      
      if (Number.isInteger(seq.size) && seq.size > 0) {
        // if it is a fixed length part
        var part = seq.constructor.extractFrom(hexa.slice(shift, shift + seq.size));
      } else {
        // varint chunks
        switch (seq.size) {
          case this.VARINT_HEADER:
            // this is a varint, of which usage will be known later
            var part = Varint.extractFrom(hexa.slice(shift));
            // temporary store it as an int
            last_varint = Number(part.toNumber());
          break;
          case this.VARINT_CONTENT:
            if (last_varint == null) throw "A varint header is not known";
            // the previous varint specify the size
            var part = seq.constructor.extractFrom(hexa.slice(shift, shift + last_varint));
            last_varint = null;
          break;
          case this.VARINT_REPEAT:
            if (last_varint == null) throw "A varint header is not known";
            // the previous varint specify the iterations count
            if (last_varint-- > 0) {
              var part = seq.constructor.extractFrom(hexa.slice(shift));
              i--; // new round of the same
            } else {
              var part = null;
              last_varint = null;
            }
          break;
          // special case used only for transaction 'witnesses' field
          // TODO : refactor better
          case this.SEGWIT_REPEAT:
            // is it segwit format
            let segwit_flag = parts.some((part) => part.name == 'segwit_flg');
            if (segwit_flag) {
              // did it extract the required number yet
              let inputs_nb = parts.filter((part) => part.name == 'inputs_nb').pop().hexa.toNumber();
              let witnesses_nb = parts.filter((part) => part.name == 'witnesses').length;
              if (witnesses_nb < inputs_nb) {
                var part = seq.constructor.extractFrom(hexa.slice(shift));
                i--; // new round of the same
              } else {
                var part = null;
              }
            } else {
              var part = null;
            }
          break;
          default:
            throw `Unsuitable sequence : ${seq}`;
          break;
        }
      }

      if (part != null) {
        parts.push({ name: seq.name, hexa: part });
        shift += part.length;
      }
    }
    
    return new this(hexa.buffer.slice(0, shift), parts);
  }
  
}

// add "constant like" class properties
Object.defineProperty(Struct, 'VARINT_HEADER',  { value: -1, writable : false, enumerable : true, configurable : false });
Object.defineProperty(Struct, 'VARINT_CONTENT', { value: -2, writable : false, enumerable : true, configurable : false });
Object.defineProperty(Struct, 'VARINT_REPEAT',  { value: -3, writable : false, enumerable : true, configurable : false });
Object.defineProperty(Struct, 'SEGWIT_REPEAT',  { value: -4, writable : false, enumerable : true, configurable : false });

module.exports = Struct;
