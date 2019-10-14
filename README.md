Experiment on bitcoin protocol data

## API documentation

...

## Examples

The `cli.js` file mainly acts as an exemple of the underlying data API.

```bash
$ npm install
$ node cli.js --help

Options:
  -V, --version             output the version number

Commands:
  hex2dec <hexa>            Convert the hexadecimal input string into a decimal number
  dec2hex <dec>             Convert the decimal input number into an hexadecimal string
  swapendian <hexa>         Swap the endianess of the hexadeimal input string
  varint2dec <hexa>         Display the number being stored in the input Varint
  dec2varint <dec>          Encode a decimal number into a Varint
  bits2target <hexa>        Compute a target from a bits field input
  bits2difficulty <hexa>    Compute a difficulty ratio from a bits field input
  target2difficulty <dec>   Compute a difficulty ratio from a decimal target input
  decodetransaction <hexa>  Decode a bitcoin transaction into its components
  decodeblock <hexa>        Decode a bitcoin block into its components
```

```bash
$ node cli.js decodetransaction `cat tests/assets/transaction.txt`
raw            Hexa           223    0100 0000 01f1 29de  033c 5758 2efb 464e  94ad 438f ff49 3cc4  de44 8172 9b85 9712  3685 8275 c201 0000  006a 4730 4402 2015  5a2e a4a7 02ca df37  052c 87bf e46f 0bd2  
                                     4809 759a cff8 d8a7  2069 7961 0e46 f602  2052 b688 b784 fa1d  cb1c ffee f89e 7486  344b 814b 0c57 8133  a7b0 bce5 be97 8a92  0801 2103 9151 70b5  8817 0cbc f638 0ef7  
                                     01d1 9bd1 8a52 6611  c0c6 9c62 d2c2 9ff6  863d 501a ffff ffff  02cc aec8 1700 0000  0019 76a9 1425 27ce  7f03 0033 0012 d6f9  7672 d9ac b513 0ec4  f888 ac18 411a 0000  
                                     0000 0017 a914 0b83  72df fcb3 9943 c7bf  ca84 f9c4 0763 b8fa  9a06 8700 0000 00                      
version        Hexa             4    0100 0000                                       
inputs_nb      Varint           1    01                                        
input          Input          147    f129 de03 3c57 582e  fb46 4e94 ad43 8fff  493c c4de 4481 729b  8597 1236 8582 75c2  0100 0000 6a47 3044  0220 155a 2ea4 a702  cadf 3705 2c87 bfe4  6f0b d248 0975 9acf  
                                     f8d8 a720 6979 610e  46f6 0220 52b6 88b7  84fa 1dcb 1cff eef8  9e74 8634 4b81 4b0c  5781 33a7 b0bc e5be  978a 9208 0121 0391  5170 b588 170c bcf6  380e f701 d19b d18a  
                                     5266 11c0 c69c 62d2  c29f f686 3d50 1aff  ffff ff                             
-prev_trsct    Hexa            32    f129 de03 3c57 582e  fb46 4e94 ad43 8fff  493c c4de 4481 729b  8597 1236 8582 75c2                      
-prev_index    Hexa             4    0100 0000                                       
-script_len    Varint           1    6a                                        
-script_dat    Script         106    4730 4402 2015 5a2e  a4a7 02ca df37 052c  87bf e46f 0bd2 4809  759a cff8 d8a7 2069  7961 0e46 f602 2052  b688 b784 fa1d cb1c  ffee f89e 7486 344b  814b 0c57 8133 a7b0  
                                     bce5 be97 8a92 0801  2103 9151 70b5 8817  0cbc f638 0ef7 01d1  9bd1 8a52 6611 c0c6  9c62 d2c2 9ff6 863d  501a               
--varint       Varint           1    47                                        
--data         Hexa            71    3044 0220 155a 2ea4  a702 cadf 3705 2c87  bfe4 6f0b d248 0975  9acf f8d8 a720 6979  610e 46f6 0220 52b6  88b7 84fa 1dcb 1cff  eef8 9e74 8634 4b81  4b0c 5781 33a7 b0bc  
                                     e5be 978a 9208 01                                     
--varint       Varint           1    21                                        
--data         Hexa            33    0391 5170 b588 170c  bcf6 380e f701 d19b  d18a 5266 11c0 c69c  62d2 c29f f686 3d50  1a                    
-sequence      Hexa             4    ffff ffff                                       
outputs_nb     Varint           1    02                                        
output         Output          34    ccae c817 0000 0000  1976 a914 2527 ce7f  0300 3300 12d6 f976  72d9 acb5 130e c4f8  88ac                    
-satoshis      Hexa             8    ccae c817 0000 0000                                     
-script_len    Varint           1    19                                        
-script_dat    Script          25    76a9 1425 27ce 7f03  0033 0012 d6f9 7672  d9ac b513 0ec4 f888  ac                         
--op           Op76             1    76                                        
--op           OpA9             1    a9                                        
--varint       Varint           1    14                                        
--data         Hexa            20    2527 ce7f 0300 3300  12d6 f976 72d9 acb5  130e c4f8                             
--op           Op88             1    88                                        
--op           OpAc             1    ac                                        
output         Output          32    1841 1a00 0000 0000  17a9 140b 8372 dffc  b399 43c7 bfca 84f9  c407 63b8 fa9a 0687                      
-satoshis      Hexa             8    1841 1a00 0000 0000                                     
-script_len    Varint           1    17                                        
-script_dat    Script          23    a914 0b83 72df fcb3  9943 c7bf ca84 f9c4  0763 b8fa 9a06 87                           
--op           OpA9             1    a9                                        
--varint       Varint           1    14                                        
--data         Hexa            20    0b83 72df fcb3 9943  c7bf ca84 f9c4 0763  b8fa 9a06                             
--op           Op87             1    87                                        
locktime       Hexa             4    0000 0000
```

