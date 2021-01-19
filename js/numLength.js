"use strict"
function numLength(number) {
    // validation
     if (typeof number !== 'number') {
         return 'ERROR: reiskia skaicius'
     }
     if (isNaN(number)) {
         return 'ERROR: turi buti tikras skaicius'
     }

    // logic
    const numberAsString = number.toString();
    const length = numberAsString.length;

    // return
    return length;
}

console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 3);
console.log(numLength(58363544), '->', 11);
// console.log(numLength(true));
// console.log(numLength('asd'));
// console.log(numLength('NaN'));

console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 3);
console.log(numLength(58363544), '->', 11);