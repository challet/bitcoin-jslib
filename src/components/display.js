const Struct = require('./../struct.js');
const Table = require('cli-table3');

function bufspacer(string, conf) {
  // the order for only numeric keys should be ascending
  conf = { ...conf };
  const mile = Object.keys(conf).pop();
  const stone = conf[mile];
  delete conf[mile];
  
  // the regexp makes chunks of the string
  let chunks = string.match(new RegExp(`.{1,${ mile }}`, 'g'));
  if (Object.keys(conf).length !== 0) {
    chunks = chunks.map((s) => bufspacer(s, conf));
  }
  
  return chunks.join(stone);
}

class Display {
  
  constructor() {
    
    this.table = new Table();
    
    this.options = {
      separators: {
        4: ' ',
        16: '  ',
        128: '\n'
      },
      struct_details: 2, // 0 only full data, 1 only details, 2 both
      level_indicator: "-"
    };
  }
  
  out() {
    console.log(this.table.toString());
  }
  
  one(hexa, label) {
    var table = new Table();
    
    this.table.push([
      label,
      hexa.constructor.name,
      hexa.length,
      bufspacer(hexa.toString(),
      this.options.separators)
    ]);
    
  }
  
  struct(struct, level) {
    if (!level) level = 0;
    
    struct.parts.forEach((part) => {
      // label with potential level
      let label = this.options.level_indicator.repeat(level) + part.name ;
      
      // recursviely display a sub structure if needed
      if (part.hexa instanceof Struct && this.options.struct_details != 0) {
        if (this.options.struct_details == 2) {
          this.one(part.hexa, label);
        }
        this.struct(part.hexa, level + 1);
      } else {
        this.one(part.hexa, label);
      }
    }); 
  }
  
}

module.exports = Display;