const { Hexa, Varint, Bits, Btc, Display } = require('./src/index.js');

const program = require('commander').version('0.0.1');
const display = new Display();

/* Utility commands */
program
  .command('hex2dec <hexa>')
  .description('Convert the hexadecimal input string into a decimal number')
  .action( (input) => {
    var hexa = Hexa.fromString(input);
    console.log(hexa.toNumber());
  });
  
program
  .command('dec2hex <dec>')
  .description('Convert the decimal input number into an hexadecimal string')
  .action( (input) => {
    var hexa = Hexa.fromNumber(input);
    console.log(hexa.toString());
  });
  
program
  .command('swapendian <hexa>')
  .description('Swap the endianess of the hexadeimal input string')
  .action( (input) => {
    var hexa = Hexa.fromString(input);
    console.log(hexa.reverse().toString());
  });
  
program
  .command('varint2dec <hexa>')
  .description('Display the number being stored in the input Varint')
  .action( (input) => {
    var varint = Varint.fromString(input);
    console.log(varint.toNumber());
  });

program
  .command('dec2varint <dec>')
  .description('Encode a decimal number into a Varint')
  .action( (input) => {
    var varint = Varint.fromNumber(input);
    console.log(varint.toString());
  });

program
  .command('bits2target <hexa>')
  .description('Compute a target from a bits field input')
  .action( (input) => {
    var bits = Btc.Bits.fromString(input);
    console.log(bits.toTarget().toString());
  });
  
program
  .command('bits2difficulty <hexa>')
  .description('Compute a difficulty ratio from a bits field input')
  .action( (input) => {
    var bits = Btc.Bits.fromString(input);
    console.log(bits.toTarget().toDifficulty());
  });
  
program
  .command('target2difficulty <dec>')
  .description('Compute a difficulty ratio from a decimal target input')
  .action( (input) => {
    var target = Btc.Target.fromNumber(BigInt(input));
    console.log(target.toDifficulty());
  });

program
  .command('decodetransaction <hexa>')
  .description('Decode a bitcoin transaction into its components')
  .action( (input) => {
    var raw = Hexa.fromString(input);
    display.one(raw, 'raw');
    var transaction = Btc.Transaction.extractFrom(raw);
    display.struct(transaction);
  });
  
program
  .command('decodeblock <hexa>')
  .description('Decode a bitcoin block into its components')
  .action( (input) => {
    var raw = Hexa.fromString(input);
    display.one(raw, 'raw');
    var block = Btc.Block.extractFrom(raw);
    display.struct(block);
  });

// output help if no command given
if (process.argv.slice(2).length == 0) {
  process.argv[2] = '--help';
}
program.parse(process.argv);

